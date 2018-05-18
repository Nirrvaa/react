import VisibilityFilters from '../../assets/json/visibility-filters';

const getTodosByFilter = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_FAILED:
            return todos.filter(todo => todo.status.failed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.status.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => todo.status.active);
        case VisibilityFilters.SHOW_PENDING:
            return todos.filter(todo => todo.status.pending);
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos;
    }
}

export default {
    getTodosByFilter
};