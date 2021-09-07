import React, { useState, useEffect, useMemo } from 'react';
import TodoList from './../../components/TodoList/index';
import TodoForm from './../../components/TodoForm/index';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 32,
        padding: '0 30px',
        margin: '0 4px'
    },
});


function ListPage(props) {

    const classes = useStyles();

    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Clean',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params);
        return params.status || 'all'
    })

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');
    }, [location.search])

    const handleTodoClick = (todo, idx) => {
        //clone ccurrent array to the new one
        const newTodoList = [...todoList];
        //toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        //update todolist
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowCompletedClick = () => {
        // setFilterStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowNewClick = () => {
        // setFilterStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    // const renderTodoList = todoList.filter(todo => filterStatus === 'all' ||filterStatus === todo.status);
    const renderTodoList = useMemo(() => {
       return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    }, [todoList, filterStatus])
    
    
    
    const handleTodoFormSubmit = (values) => {
        console.log('Form submit', values)
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new'
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <div>
                <Button className={classes.root} onClick={handleShowAllClick}>Show All</Button>
                <Button className={classes.root} onClick={handleShowCompletedClick}>Show Completed</Button>
                <Button className={classes.root} onClick={handleShowNewClick}>Show New</Button>
            </div>
        </div>
    );
}

export default ListPage;