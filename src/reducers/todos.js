import { ADD_TODO, REMOVE_TODO, CHANGE_TODO_STATUS } from '../assets/json/actions';
import { PENDING } from '../assets/json/statuses';
import produce from 'immer';
import uniqid from 'uniqid';

export default function (state = [], action) {
    return produce(state, draft => {
        switch (action.type) {
        case ADD_TODO:
            draft.push({
                id: uniqid(),
                title: action.data.title,
                deadline: action.data.deadline,
                timer:  action.data.timer,
                status: PENDING
            });
            break;
        case REMOVE_TODO:
            draft.forEach((todo, index) => {
                if (todo.id === action.id) {
                    draft.splice(index, 1);
                }
            });
            break;
        case CHANGE_TODO_STATUS:
            draft.find(todo => todo.id === action.id).status = action.status;
        }
    });
}