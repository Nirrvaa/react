import React from 'react';
import Footer from '../footer';
import VisibleTodoList from '../../containers/visible-todo-list';

const TodoListPage = () => (
    <main>
        <VisibleTodoList />
        <Footer />
    </main>
);

export default TodoListPage;