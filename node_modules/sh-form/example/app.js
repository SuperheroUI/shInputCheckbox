import React from 'react'
import ReactDOM from 'react-dom';

import ShForm from '../bin/sh-form';

import TempInput from './temp-input';

require('./app.scss');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            change: false
        };

        this.handle = this.handle.bind(this);
        this.change = this.change.bind(this);
    }

    handle() {
        console.log('SUBMITTED AND VALID!');
    }

    change() {
        this.setState({
            change: true
        });
    }

    render() {
        let comp = (
            <div>
                <TempInput />
            </div>
        );
        if (this.state.change) {
            comp = null;
        }
        return (
            <div>
                <button onClick={this.change}>change</button>
                <ShForm onSubmit={this.handle}>
                    {comp}
                    <TempInput />
                    <button type="submit">Submit</button>
                </ShForm>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
