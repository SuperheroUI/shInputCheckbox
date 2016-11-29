import React from 'react'
import ReactDOM from 'react-dom';
import ShInputCheckbox from '../bin/sh-input-checkbox';
import ShForm from 'sh-form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1:true,
            value2:false,
            value:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(value) {
        this.setState({value1: value});
    }
    handleChange2(value) {
        this.setState({value2: value});
    }
    handleChange(value) {
        console.log('fired')
        this.setState({value: value});
    }

    handleSubmit() {
        alert(this.state.value);
    }

    render() {
        return <div>
            <ShForm onSubmit={this.handleSubmit}>
                <ShInputCheckbox value={this.state.value}  onChange={this.handleChange}/>
                <ShInputCheckbox value={this.state.value1}  onChange={this.handleChange1} disabled/>
                <ShInputCheckbox value={this.state.value2}  onChange={this.handleChange2} required/>
                <span>{JSON.stringify(this.state.value)}</span><br/><br/>
                <span>{JSON.stringify(this.state.value1)}</span><br/><br/>
                <span>{JSON.stringify(this.state.value2)}</span><br/><br/>
                <button type="submit">go</button>
            </ShForm>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));