import { TOGGLE_TODO } from '../assets/json/actions.json';

export default function (index) {
	return { type: TOGGLE_TODO, index };
}