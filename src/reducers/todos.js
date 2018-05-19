import { ADD_TODO, REMOVE_TODO, CHANGE_TODO_STATUS } from '../assets/json/actions';
import { PENDING } from '../assets/json/statuses';
import produce from 'immer';

export default function (state = [], action) {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_TODO:
                draft.push({
                    id: action.id,
                    title: action.data.title,
                    deadline: action.data.deadline,
                    year: action.data.year,
                    month: action.data.month,
                    date: action.data.date,
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