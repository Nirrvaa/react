import React from 'react';
import { connect } from 'react-redux';

import { changeTodoStatus } from '../../../actions';

import TodoStatus from '../../presentationals/todo-status';

const mapDispatchToProps = dispatch => ({
    changeTodoStatus(id, status) {
        dispatch(changeTodoStatus(id, status));
    }
});

const TodoStatusResolver = connect(
    null,
    mapDispatchToProps
)(TodoStatus);

export default TodoStatusResolver;