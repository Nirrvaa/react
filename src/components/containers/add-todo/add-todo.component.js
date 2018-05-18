import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../../actions';
import Form from '../../presentationals/form';

const mapDispatchToProps = dispatch => ({
    addTodo(object) {
        dispatch(addTodo(object));
    }
});

const AddTodo = connect(
    null,
    mapDispatchToProps
)(Form);

export default AddTodo;