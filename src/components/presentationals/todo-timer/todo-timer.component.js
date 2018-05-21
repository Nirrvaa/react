import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: this.props.timer
        };

        this.tick = this.tick.bind(this);
        this.createMessage = this.createMessage.bind(this);
        this.getHoursLeft = this.getHoursLeft.bind(this);
        this.getMinutesLeft = this.getMinutesLeft.bind(this);
        this.getSecondsLeft = this.getSecondsLeft.bind(this);
        this.addPrefixZero = this.addPrefixZero.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);

    }

    startTimer() {
        if (!this.props.deadline) {
            this.setState({ message: 'task has no deadline' });
            return;
        }
        this.tick();
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        const currentMoment = new Date();
        this.setState({ message: this.createMessage(this.props.timer - currentMoment)});
    }

    createMessage(timeLeft) {
        return `${this.getHoursLeft(timeLeft)}:${this.getMinutesLeft(timeLeft)}:${this.getSecondsLeft(timeLeft)}`;
    }

    getHoursLeft(timeLeft) {
        const msInHour = 3600000;
        const hours = Math.trunc(timeLeft/msInHour);

        return this.addPrefixZero(hours);
    }

    getMinutesLeft(timeLeft) {
        const minutes = new Date(timeLeft).getMinutes();

        return this.addPrefixZero(minutes);
    }

    getSecondsLeft(timeLeft) {
        const seconds = new Date(timeLeft).getSeconds();

        return this.addPrefixZero(seconds);
    }

    addPrefixZero(time) {
        if (time < 10) {
            return `0${time}`;
        }
        return time;
    }

    stopTimer() {
        clearInterval(this.timerID);
    }

    componentDidMount() {
        this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer();
    }

    render() {
        return (
            <span>
                {this.state.message}
            </span>
        );
    }
}

TodoTimer.propTypes = {
    timer: PropTypes.object.isRequired,
    deadline: PropTypes.bool.isRequired
};


export default TodoTimer;