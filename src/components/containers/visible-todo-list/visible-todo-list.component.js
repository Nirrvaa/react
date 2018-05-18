import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../../presentationals/todo-list';
import { toggleTodo } from '../../../actions';

import todosService from '../../../services/todos-service';

const mapStateToProps = (state, ownProps) => {
    return {
        todos: todosService.getTodosByFilter(state.todos, ownProps.filter)
    };
};

const VisibleTodoList = connect(
    mapStateToProps
)(TodoList);

export default VisibleTodoList;