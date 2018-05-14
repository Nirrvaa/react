import { ADD_TODO } from '../assets/json/actions.json';
import uniqid from 'uniqid';

export default function (data) {
	return { type: ADD_TODO, data, id: uniqid() };
}