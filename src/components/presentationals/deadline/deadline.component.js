import React, { Component } from 'react';
import timeService from '../../../services/time-service';


class Deadline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: timeService.currentYear,
            month: timeService.currentMonth,
            date: timeService.currentDate
        };
        this.handleInputChange = this.handleInputChange.bind(this);
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
            <div className="deadLine">
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
            </div>
        );
    }
}

export default Deadline;