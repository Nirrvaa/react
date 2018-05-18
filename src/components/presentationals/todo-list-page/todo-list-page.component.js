import React from 'react';
import Footer from '../footer';
import VisibleTodoList from '../../containers/visible-todo-list';

const TodoListPage = ({ match: { params }}) => {
	return (
		<main>
			<VisibleTodoList filter={params.filter} />
			<Footer />
		</main>
	);
};

export default TodoListPage;