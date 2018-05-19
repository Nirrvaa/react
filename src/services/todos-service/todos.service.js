import VisibilityFilters from '../../assets/json/visibility-filters';
import Statuses from '../../assets/json/statuses';

const getTodosByFilter = (todos, filter) => {
    switch (filter) {
    case VisibilityFilters.SHOW_FAILED:
        return todos.filter(todo => todo.status === Statuses.FAILED);
    case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.status === Statuses.COMPLETED);
    case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => todo.status === Statuses.ACTIVE);
    case VisibilityFilters.SHOW_PENDING:
        return todos.filter(todo => todo.status === Statuses.PENDING);
    case VisibilityFilters.SHOW_ALL:
    default:
        return todos;
    }
}; 

export {
    getTodosByFilter
};