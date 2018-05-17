import React, { Component } from 'react';
import Header from '../header';
import AddTodo from '../../containers/add-todo';
import TodoListPage from '../todo-list-page';
import { Route, Redirect, Switch } from 'react-router-dom';
import { base, todo_list, show_all, add_todo, any } from '../../../assets/json/routes';

const App = () => (
	<div className="app">
		<Route component={Header} />
		<Switch>
			<Route path={`/${todo_list}/:filter`} component={TodoListPage} />
			<Route path={`/${add_todo}`} component={AddTodo} />
			<Redirect to={`/${todo_list}/${show_all}`} />
		</Switch>
	</div>
);

export default App;