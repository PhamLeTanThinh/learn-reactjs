import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage/index';
import ListPage from './pages/ListPage/index';
import NotFound from './../../component/NotFound/index';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage}  exact/>
                <Route path={`${match.path}/:todoId`} component={DetailPage} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default TodoFeature;