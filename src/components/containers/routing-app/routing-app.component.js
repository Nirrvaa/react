import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../../actions';
import App from '../../presentationals/app';

const mapDispatchToProps = dispatch => {
	return {
		setVisibilityFilter(nextProps) {
			dispatch(setVisibilityFilter(nextProps.match.params.filter));
		}
	};
};

const RoutingApp = connect(
	null,
	mapDispatchToProps
)(App);

export default RoutingApp;