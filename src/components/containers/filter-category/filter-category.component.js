import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../../actions';
import Category from '../../presentationals/category';

import todosService from '../../../services/todos-service';

const mapStateToProps = (state, ownProps) =>({
	active: ownProps.filter === state.visibilityFilter,
	count: todosService.getTodosByFilter(state.todos, ownProps.filter).length
});

const FilterCategory = connect(
	mapStateToProps
)(Category);

export default FilterCategory;