import { ADD_TODO } from '../assets/json/actions.json';

export default function (data) {
    return { type: ADD_TODO, data };
}