import React from 'react';
import Footer from '../footer';
import VisibleTodoList from '../../containers/visible-todo-list';

const TodoListPage = ({ match: { params } }) => (
    <div>
        <main className='main'>
            <VisibleTodoList filter={params.filter} />
        </main>
        <Footer />
    </div>
);

export default TodoListPage;