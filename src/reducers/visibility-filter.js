import { SET_VISIBILITY_FILTER } from '../assets/json/actions.json';
import { SHOW_ALL } from '../assets/json/visibility-filters.json';

export default function (state = SHOW_ALL, action) {
    switch (action.type) {
    case SET_VISIBILITY_FILTER:
        return action.filter || SHOW_ALL;
    default:
        return state;
    }
}

