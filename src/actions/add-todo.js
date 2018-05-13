import { ADD_TODO } from '../assets/json/actions.json';

let id = 0;

export default function (text) {
    return { type: ADD_TODO, text, id: id++ };
}