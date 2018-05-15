import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTodoList: true
        };

        this.togglePage = this.togglePage.bind(this);
    }

    togglePage() {
        this.setState({ showTodoList: !this.state.showTodoList });
    }

    render() {
        return (
            <header className='header'>
                <h1 className='header__caption'>N</h1>
                <Link to={`/${this.state.showTodoList ? 'add_todo' : 'todo_list' }`}>
                    <button className='header__button' onClick={this.togglePage}>
                        {this.state.showTodoList ? 'add todo' : 'back to list'}
                    </button>
                </Link>
            </header>
        );
    }
}

export default Header;