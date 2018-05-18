import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ENABLE_DEADLINE, DISABLE_DEADLINE, ADD_TODO } from '../../../assets/json/routes';

import Deadline from '../deadline';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            deadline: false
        };

        this.linkURL = this.linkURL.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    linkURL() {
        const filter = this.props.deadline ? DISABLE_DEADLINE : ENABLE_DEADLINE;
        return `/${ADD_TODO}/${filter}`;
    }

    handleSubmit() {
        this.props.addTodo({
            title: this.state.title,
            deadline: this.props.deadline,
            year: this.state.year,
            month: this.state.year,
            date: this.state.date
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setEmptyInputFlags();
        this.handleSubmit();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <main className='main'>
                <form
                    className='addTodo'
                    onSubmit={this.onSubmit}>
                    <section>
                        <label htmlFor='title'>title:</label>
                        <input
                            required
                            id='title'
                            name='title'
                            type='text'
                            placeholder='type your Todo'
                            value={this.state.title}
                            onChange={this.handleInputChange} />
                    </section>

                    <section>
                        <Link to={this.linkURL()}>
                            <button type='button'>
                                {`${this.props.deadline ? 'disable' : 'enable'} deadline`}
                            </button>
                        </Link>
                        {this.props.deadline ? <Deadline /> : null}
                    </section>

                    <button type='submit'>
                        add Todo
                    </button>
                </form>
            </main>
        );
    }
}

export default Form;