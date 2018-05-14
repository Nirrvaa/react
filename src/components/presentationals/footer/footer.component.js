import React from 'react';
import FilterLink from '../../containers/filter-link';
import VisibilityFilters from '../../../assets/json/visibility-filters';

const Footer = () => (
	<footer>
		<h2>
			Show:
		</h2>
		<ul>
			<li>
				<FilterLink filter={VisibilityFilters.SHOW_ALL}>
					All
				</FilterLink>

			</li>
			<li>
				<FilterLink filter={VisibilityFilters.SHOW_PENDING}>
					Pending
				</FilterLink>
			</li>
			<li>
				<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
					Active
				</FilterLink>
			</li>
			<li>
				<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
					Completed
				</FilterLink>
			</li>
		</ul>
	</footer>
);

export default Footer;