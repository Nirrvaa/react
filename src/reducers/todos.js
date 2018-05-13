import { ADD_TODO, TOGGLE_TODO } from '../assets/json/actions.json';
import { SHOW_ALL } from '../assets/json/visibility-filters.json';

export default function(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            })
        default:
            return state;
    }
};