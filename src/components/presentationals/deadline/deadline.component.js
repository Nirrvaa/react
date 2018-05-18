class Deadline extends Component {
    constructor(props) {
        super(props);

        this.state = {};
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
            <section>
                <ul>
                    <li>
                        <input
                            name='date'
                            type='number'
                            value={this.state.date}
                            disabled={!this.state.deadline}
                            required
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
                <ul>
                    <li>
                        <input
                            name='date'
                            type='number'
                            value={this.state.date}
                            disabled={!this.state.deadline}
                            required
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
            </section>
        );
    }
}

export default Deadline;