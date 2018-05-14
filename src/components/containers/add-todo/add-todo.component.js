import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../../actions';
import Form from '../../presentationals/form';

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (object) => {
			dispatch(addTodo(object));
		}
	};
};

const AddTodo = connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);

export default AddTodo;