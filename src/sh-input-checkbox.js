import React, {Component} from 'react';
import IconCheckboxUnselected from './icons/icon-checkbox-unselected';
import IconCheckboxSelected from './icons/icon-checkbox-selected';

require('./sh-input-checkbox.scss');

class ShInputCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.toggleChecked = this.toggleChecked.bind(this);
        this.toggleWithKey = this.toggleWithKey.bind(this);
    }

    componentDidMount() {
        if (this.props.value) {
            this.setState(
                {
                    value: this.props.value
                }
            )
        }

        if (this.props.required) {
            this.state.placeholderText = 'Required Field';
            this.setState(this.state);
        }
    }

    toggleWithKey(event) {
        if (event.keyCode === 32) {
            this.toggleChecked();
        }
    }

    toggleChecked() {
        this.state.value = !this.state.value;
        this.setState({value: this.state.value});
        this.props.onChange(this.state.value);
    }

    render() {
        var {...other} = this.props;
        return (
            <div className={this.state.value +" shInputCheckbox"}
                 onKeyDown={this.toggleWithKey}
                 tabIndex="0"
                 onClick={this.toggleChecked}
            >
                    <span>
                        {this.state.value ? <IconCheckboxSelected/> : <IconCheckboxUnselected/>}
                    </span>

            </div>
        )
    }
}

export default ShInputCheckbox;