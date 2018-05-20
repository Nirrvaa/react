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
                        {this.props.deadline ? (
                            <div className="deadLine">
                                <ul>
                                    <li>
                                        <input
                                            required
                                            name='date'
                                            type='number'
                                            value={this.state.date}
                                            min='1'
                                            max='31'
                                            onChange={this.handleInputChange} />
                                    </li>
                                    <li>
                                        <input
                                            required
                                            name='month'
                                            type='number'
                                            value={this.state.month}
                                            min='1'
                                            max='12'
                                            onChange={this.handleInputChange} />
                                    </li>
                                    <li>
                                        <input
                                            required
                                            name='year'
                                            type='number'
                                            value={this.state.year}
                                            min={getCurrentYear()}
                                            max='9999'
                                            onChange={this.handleInputChange} />
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <input
                                            required
                                            name='hours'
                                            type='number'
                                            value={this.state.hours}
                                            min='0'
                                            max='23'
                                            onChange={this.handleInputChange} />
                                    </li>
                                    <li>
                                        <input
                                            required
                                            name='minutes'
                                            type='number'
                                            value={this.state.minutes}
                                            min='0'
                                            max='59'
                                            onChange={this.handleInputChange} />
                                    </li>
                                    <li>
                                        <input
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

                    <button type='submit'>
                        add Todo
                    </button>
                </form>
            </main>
        );
    }
}

export default Form;