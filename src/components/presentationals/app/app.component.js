import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import AddTodo from '../../containers/add-todo';
import VisibleTodoList from '../../containers/visible-todo-list';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showListPage: true
		};

		this.changePage = this.changePage.bind(this);
	}

	changePage() {
		this.setState({ showListPage: !this.state.showListPage });
	}

	render() {
		return (
			<div className="app">
				<Header changePage={this.changePage} showListPage={this.state.showListPage} />
				{this.state.showListPage ? <VisibleTodoList /> : <AddTodo /> }
				{this.state.showListPage ? <Footer /> : '' }
			</div>
		);
	}
}

export default App;