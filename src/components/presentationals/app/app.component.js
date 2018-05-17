import React, { Component } from 'react';
import Header from '../header';
import AddTodo from '../../containers/add-todo';
import TodoListPage from '../todo-list-page';
import { Route, Redirect, Switch } from 'react-router-dom';
import { TODO_LIST, SHOW_ALL, ADD_TODO } from '../../../assets/json/routes';

const App = () => (
	<div className="app">
		<Route component={Header} />
		<Switch>
			<Route path={`/${TODO_LIST}/:filter`} component={TodoListPage} />
			<Route path={`/${ADD_TODO}`} component={AddTodo} />
			<Redirect to={`/${TODO_LIST}/${SHOW_ALL}`} />
		</Switch>
	</div>
);

export default App;