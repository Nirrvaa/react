import { REMOVE_TODO } from '../assets/json/actions.json';

export default function (id) {
    return { type: REMOVE_TODO, id };
}