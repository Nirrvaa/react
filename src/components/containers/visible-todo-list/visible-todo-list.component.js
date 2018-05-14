import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilters from '../../../assets/json/visibility-filters';
import TodoList from '../../presentationals/todo-list';
import { toggleTodo } from '../../../actions';


const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_FAILED:
			return todos.filter(todo => todo.status.failed);
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.status.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => todo.status.active);
		case VisibilityFilters.SHOW_PENDING:
			return todos.filter(todo => todo.status.pending);
		case VisibilityFilters.SHOW_ALL:
		default:
			return todos;
	}
};

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
};

const VisibleTodoList = connect(
	mapStateToProps
)(TodoList);

export default VisibleTodoList;