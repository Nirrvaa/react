import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../../presentationals/todo-list';

import { removeTodo } from '../../../actions';

import { getTodosByFilter } from '../../../services/todos-service';

const mapStateToProps = (state, ownProps) => ({
    todos: getTodosByFilter(state.todos, ownProps.match.params.filter)
});

const mapDispatchToProps = dispatch => ({
    removeTodo(id) {
        dispatch(removeTodo(id));
    }
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;