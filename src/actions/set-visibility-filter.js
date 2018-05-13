import { SET_VISIBILITY_FILTER } from '../assets/json/actions.json';

export default function (filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}