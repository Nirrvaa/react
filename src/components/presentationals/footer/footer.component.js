import React from 'react';
import FilterLink from '../../containers/filter-link';
import VisibilityFilters from '../../../assets/json/visibility-filters';

const Footer = () => (
	<p>
        Show:
		{' '}
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
		</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
		</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
		</FilterLink>
	</p>
);

export default Footer;