import { CHANGE_TODO_STATUS } from '../assets/json/actions.json';

export default function (id, status) {
    return { type: CHANGE_TODO_STATUS, id, status };
}