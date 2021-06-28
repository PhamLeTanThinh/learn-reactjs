import React, { Component } from 'react'
import todoTask from '../../data/todoTask.json';
import Task from './Task';
import './styles.scss';

export default class TodoList extends Component {


    constructor(props) {
        super(props)
        this.state = {
            taskList: todoTask,
            filterStatus:'all'
        }
    }

    handleToDoClick = (task, index) => {
        // console.log(todo, index)
        //clone current array to the new one
        const newTodoList = [...this.state.taskList];
        // tohggle state
        const newToDo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[index] = newToDo;
        //Update todo list
        this.setState({taskList:newTodoList})
    }

    handleShowAllClick = () => {
        this.setState({filterStatus:'all'})
    }
    handleShowCompleteClick = () => {
        this.setState({filterStatus:'completed'})
    }
    handleShowNewClick = () => {
        this.setState({filterStatus:'new'})
    }

    renderTask = () => {
        return this.state.taskList.map((task, index) => {
            return (
                <Task key={index} index={index} task={task} onToDoClick = {this.handleToDoClick}/>
            )
        })
    }

    
    

    render() {
        const renderTaskList = this.state.taskList.filter(task => this.state.filterStatus === 'all' || this.state.filterStatus === task.status);
        console.log(renderTaskList)
        return (
            <div>
                <ul className="todo-list">
                {this.renderTask()}
            </ul>
            <button onClick={this.handleShowAllClick}>Show All</button>
            <button onClick={this.handleShowCompleteClick}>Show Complete</button>
            <button onClick={this.handleShowNewClick}>Show New</button>
            </div>
            
        )
    }
}
