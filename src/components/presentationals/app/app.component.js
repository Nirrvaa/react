import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import AddTodo from '../../containers/add-todo';
import VisibleTodoList from '../../containers/visible-todo-list';
import { Route, Redirect, Switch } from 'react-router-dom';


const App = () => (

	<div className="app">
		<Header />
		<Switch>
			<Route path="/todo_list" component={VisibleTodoList} />
			<Route path="/todo_list" component={Footer} />
			<Route path="/add_todo" component={AddTodo} />
			<Redirect from='/' to='/todo_list' />
		</Switch>

	</div>
);

export default App;