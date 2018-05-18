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

	get currentYear() {
		const date = new Date();
		return date.getFullYear();
	}

	get currentMonth() {
		const date = new Date();
		return date.getMonth() + 1;
	}

	get currentDate() {
		const date = new Date();
		return date.getDate();
	}

	render() {
		return (
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
					<ul>
						<li>
							<input
								name='date'
								type='number'
								value={this.state.date}
								disabled={!this.state.deadline}
								required={this.state.deadline}
								min='1'
								max='31'
								onChange={this.handleInputChange} />
						</li>
						<li>
							<input
								name='month'
								type='number'
								value={this.state.month}
								disabled={!this.state.deadline}
								required={this.state.deadline}
								min='1'
								max='12'
								onChange={this.handleInputChange} />
						</li>
						<li>
							<input
								name='year'
								type='number'
								value={this.state.year}
								disabled={!this.state.deadline}
								required={this.state.deadline}
								min={this.currentYear}
								max='9999'
								onChange={this.handleInputChange} />
						</li>
					</ul>
				</div>

				<button type='submit'>
                    Add Todo
				</button>
			</form>
		);
	}
}

export default Form;