import { ADD_TODO, TOGGLE_TODO } from '../assets/json/actions.json';
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
                status: {
                    failed: false,
                    completed: false,
                    active: false,
                    pending: true
                }
            });
        case TOGGLE_TODO:
            draft.forEach((todo, index) => {
                if (index === action.index) {
                    for (let item of todo.status) {
                        item = false;
                    }
                    todo.status[action.status] = true;
                }
            });
        }
    });
}