import React, { Component } from 'react';
import Header from '../header';
import AddTodo from '../../containers/add-todo';
import TodoListPage from '../todo-list-page';
import { Route, Redirect, Switch } from 'react-router-dom';
import { TODO_LIST, SHOW_ALL, ADD_TODO } from '../../../assets/json/routes';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.props.setVisibilityFilter(nextProps);
    }

    render() {
        return (
            <div className="app">
                <Route component={Header} />
                <Switch>
                    <Route exact path={`/${TODO_LIST}/:filter`} component={TodoListPage} />
                    <Route exact path={`/${ADD_TODO}`} component={AddTodo} />
                    <Redirect to={`/${TODO_LIST}/${SHOW_ALL}`} />
                </Switch>
            </div>
        );
    }
}

export default App;