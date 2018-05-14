import { TOGGLE_TODO } from '../assets/json/actions.json';

export default function (index, status) {
	return { type: TOGGLE_TODO, index, status };
}