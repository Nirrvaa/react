import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { createTimer } from '../../../services/time-service';

import { ENABLE_DEADLINE, DISABLE_DEADLINE, ADD_TODO } from '../../../assets/json/routes';
import { getCurrentYear, getCurrentMonth, getCurrentDate } from '../../../services/time-service';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            deadline: false,
            year: getCurrentYear(),
            month: getCurrentMonth() + 1,
            date: getCurrentDate() + 1,
            hours: 0,
            minutes: 0,
            seconds: 0
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
            timer: createTimer({
                year: this.state.year,
                month: this.state.month,
                date: this.state.date,
                hours: this.state.hours,
                minutes: this.state.minutes,
                seconds: this.state.seconds
            })
        });
    }

    onSubmit(event) {
        event.preventDefault();
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
            <form
                className='add-todo'
                onSubmit={this.onSubmit}>
                <section className='add-todo__title'>
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

                <section className='add-todo__deadline'>
                    <button type='button' className='add-todo__toggle-deadline'>
                        <Link to={this.linkURL()}>
                            {`${this.props.deadline ? 'disable' : 'enable'} deadline`}
                        </Link>
                    </button>
                    {this.props.deadline ? (
                        <div className='deadline'>
                            <ul className='deadline-list deadline-list_date'>
                                <li className='deadline-list__item'>
                                    <input
                                        className='deadline-list__input'
                                        required
                                        name='date'
                                        type='number'
                                        value={this.state.date}
                                        min='1'
                                        max='31'
                                        onChange={this.handleInputChange} />
                                </li>
                                <li className='deadline-list__item'>
                                    <input
                                        className='deadline-list__input'
                                        required
                                        name='month'
                                        type='number'
                                        value={this.state.month}
                                        min='1'
                                        max='12'
                                        onChange={this.handleInputChange} />
                                </li>
                                <li className='deadline-list__item'>
                                    <input
                                        className='deadline-list__input'
                                        required
                                        name='year'
                                        type='number'
                                        value={this.state.year}
                                        min={getCurrentYear()}
                                        max='9999'
                                        onChange={this.handleInputChange} />
                                </li>
                            </ul>
                            <ul className='deadline-list deadline-list_time'>
                                <li className='deadline-list__item'>
                                    <input
                                        className='deadline-list__input'
                                        required
                                        name='hours'
                                        type='number'
                                        value={this.state.hours}
                                        min='0'
                                        max='23'
                                        onChange={this.handleInputChange} />
                                </li>
                                <li className='deadline-list__item'>
                                    <input
                                        className='deadline-list__input'
                                        required
                                        name='minutes'
                                        type='number'
                                        value={this.state.minutes}
                                        min='0'
                                        max='59'
                                        onChange={this.handleInputChange} />
                                </li>
                                <li className='deadline-list__item'>
                                    <input
                                        className='deadline-list__input'
                                        required
                                        name='seconds'
                                        type='number'
                                        value={this.state.seconds}
                                        min='0'
                                        max='59'
                                        onChange={this.handleInputChange} />
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </section>

                <button type='submit' className='add-todo__submit'>
                    add Todo
                </button>
            </form>
        );
    }
}

export default Form;