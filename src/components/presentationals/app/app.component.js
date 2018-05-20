import React, { Component } from 'react';
import Header from '../header';
import AddTodo from '../../containers/add-todo';
import VisibleTodoList from '../../containers/visible-todo-list';
import Footer from '../footer';
import { Route, Redirect, Switch } from 'react-router-dom';
import { TODO_LIST, SHOW_ALL, ADD_TODO } from '../../../assets/json/routes';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.setVisibilityFilter(props);
    }

    componentWillReceiveProps(nextProps) {
        this.props.setVisibilityFilter(nextProps);
    }

    render() {
        return (
            <div className="app">
                <Route component={Header} />
                <main className="main">
                    <Switch>
                        <Route exact path={`/${TODO_LIST}/:filter`} component={VisibleTodoList} />
                        <Route exact path={`/${ADD_TODO}/:filter`} component={AddTodo} />
                        <Redirect to={`/${TODO_LIST}/${SHOW_ALL}`} />
                    </Switch>
                </main>
                <Route exact path={`/${TODO_LIST}/:filter`} component={Footer} />
            </div>
        );
    }
}

export default App;