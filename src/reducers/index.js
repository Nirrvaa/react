import { combineReducers } from 'redux';

import visibilityFilter from './visibility-filter';
import todos from './todos';

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;