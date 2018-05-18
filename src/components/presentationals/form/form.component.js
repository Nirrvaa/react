import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            deadline: false,
            year: this.currentYear,
            month: this.currentMonth,
            date: this.currentDate
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setEmptyInputFlags = this.setEmptyInputFlags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setEmptyInputFlags() {
        if (!this.state.title) {
            this.setState({ emptyTitle: true });
        }

        if (!this.state.deadline) {
            return;
        }

        if (!this.state.year) {
            this.setState({ emptyYear: true });
        }
        if (!this.state.month) {
            this.setState({ emptyMonth: true });
        }
        if (!this.state.date) {
            this.setState({ emptyDate: true });
        }
    }

    handleSubmit() {
        this.props.addTodo({
            title: this.state.title,
            deadline: this.state.deadline,
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
        const value = target.type === 'checkbox' ? target.checked : target.value;
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
                    <label>
						Task:
                        <input required
                            name='title'
                            type='text'
                            placeholder='type your Todo'
                            value={this.state.title}
                            onChange={this.handleInputChange} />
                    </label>

                    <div>
                        <input
                            id='deadline'
                            name='deadline'
                            type='checkbox'
                            checked={this.state.deadline}
                            onChange={this.handleInputChange} />
                        <label htmlFor='deadline'></label>
                        
                    </div>

                    <button type='submit'>
						Add Todo
                    </button>
                </form>
            </main>
        );
    }
}

export default Form;