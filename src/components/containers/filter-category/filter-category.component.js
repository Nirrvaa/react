import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilters from '../../../assets/json/visibility-filters';
import { setVisibilityFilter } from '../../../actions';
import Category from '../../presentationals/category';

const getTodosCount = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_FAILED:
			return todos.filter(todo => todo.status.failed).length;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.status.completed).length;
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => todo.status.active).length;
		case VisibilityFilters.SHOW_PENDING:
			return todos.filter(todo => todo.status.pending).length;
		case VisibilityFilters.SHOW_ALL:
		default:
			return todos.length;
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter,
		count: getTodosCount(state.todos, ownProps.filter)
	};
};

const FilterCategory = connect(
	mapStateToProps
)(Category);

export default FilterCategory;