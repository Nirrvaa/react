import React from 'react';
import Footer from '../footer';
import AddTodo from '../../mixed/add-todo';
import VisibleTodoList from '../../containers/visible-todo-list';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;