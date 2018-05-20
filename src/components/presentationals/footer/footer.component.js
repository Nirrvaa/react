import React from 'react';
import FilterCategory from '../../containers/filter-category';
import VisibilityFilters from '../../../assets/json/visibility-filters';

const Footer = () => (
    <footer className='footer'>
        <ul className='categories'>
            <li className='categories__item'>
                <FilterCategory filter={VisibilityFilters.SHOW_ALL}>
					All
                </FilterCategory>
            </li>
            <li className='categories__item'>
                <FilterCategory filter={VisibilityFilters.SHOW_PENDING}>
					Pending
                </FilterCategory>
            </li>
            <li className='categories__item'>
                <FilterCategory filter={VisibilityFilters.SHOW_ACTIVE}>
					Active
                </FilterCategory>
            </li>
            <li className='categories__item'>
                <FilterCategory filter={VisibilityFilters.SHOW_COMPLETED}>
					Completed
                </FilterCategory>
            </li>
			
            <li className='categories__item'>
                <FilterCategory filter={VisibilityFilters.SHOW_FAILED}>
					Failed
                </FilterCategory>
            </li>
        </ul>
    </footer>
);

export default Footer;