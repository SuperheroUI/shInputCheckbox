import React from 'react'
import ReactDOM from 'react-dom';
import ShInputCheckbox from '../bin/sh-input-checkbox'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 1,
            value:true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(value) {
        this.setState({value: value});
    }

    handleSubmit() {
        alert(this.state.value);
    }

    render() {
        return <div>
            <form name="test" onSubmit={this.handleSubmit}>
                <ShInputCheckbox value={this.state.value} onChange={this.handleChange} />
                <ShInputCheckbox  onChange={this.handleChange}  />
                <ShInputCheckbox  onChange={this.handleChange} required />
                <span>{JSON.stringify(this.state.value)}</span>
                <button type="submit">go</button>
            </form>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));