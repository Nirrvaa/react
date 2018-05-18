import React, { Component } from 'react';

class Deadline extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.currentYear = this.currentYear.bind(this);
        this.currentMonth = this.currentMonth.bind(this);
        this.currentDate = this.currentDate.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
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
            <section className="deadLine">
                <ul>
                    <li>
                        <input
                            name='date'
                            type='number'
                            value={this.state.date}
                            min='1'
                            max='31'
                            onChange={this.handleInputChange} />
                    </li>
                    <li>
                        <input
                            name='month'
                            type='number'
                            value={this.state.month}
                            min='1'
                            max='12'
                            onChange={this.handleInputChange} />
                    </li>
                    <li>
                        <input
                            name='year'
                            type='number'
                            value={this.state.year}
                            min={this.currentYear}
                            max='9999'
                            onChange={this.handleInputChange} />
                    </li>
                </ul>
                <ul>
                    <li>
                        <input
                            name='hours'
                            type='number'
                            value='23'
                            min='0'
                            max='23'
                            onChange={this.handleInputChange} />
                    </li>
                    <li>
                        <input
                            name='minutes'
                            type='number'
                            value='59'
                            min='0'
                            max='59'
                            onChange={this.handleInputChange} />
                    </li>
                    <li>
                        <input
                            name='seconds'
                            type='number'
                            value='59'
                            min='0'
                            max='59'
                            onChange={this.handleInputChange} />
                    </li>
                </ul>
            </section>
        );
    }
}

export default Deadline;