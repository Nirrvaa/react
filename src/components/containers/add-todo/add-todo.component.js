import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../../actions';
import { ENABLE_DEADLINE } from '../../../assets/json/visibility-filters';

import Form from '../../presentationals/form';

const mapStateToProps = state =>({
    deadline: state.visibilityFilter === ENABLE_DEADLINE
});

const mapDispatchToProps = dispatch => ({
    addTodo(object) {
        dispatch(addTodo(object));
    }
});

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default AddTodo;