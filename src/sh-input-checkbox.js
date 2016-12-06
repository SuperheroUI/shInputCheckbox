import React, {Component} from 'react';
import IconCheckboxUnselected from './icons/icon-checkbox-unselected';
import IconCheckboxSelected from './icons/icon-checkbox-selected';
import ShCore from 'sh-core';
import * as _ from 'lodash';
import './sh-input-checkbox.scss';

class ShInputCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classList: {shDisabled: false}
        };
        this.toggleChecked = this.toggleChecked.bind(this);
        this.toggleWithKey = this.toggleWithKey.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(onSubmit) {
        if (onSubmit) {
            this.state.classList.shTouched = true;
        }
        let rtn = {isValid: true};

        this.state.classList.shInvalid = false;

        if (this.props.required && this.state.value != true) {
            this.state.classList.shInvalid = true;

            rtn.isValid = false;
            rtn.msg = 'Required';
        }
        let newState = _.clone(this.state);
        this.setState(newState);
        return rtn;
    };

    componentDidMount() {
        let newState = {};
        if (this.props.disabled) {
            newState.classList = {};
            newState.classList.shDisabled = this.props.disabled;
        }

        if (this.props.value) {
            newState.value = this.props.value;
        }

        this.setState(newState)
    }

    componentWillReceiveProps(props) {
        if (!_.isUndefined(props.value) && !_.isEqual(props.value, this.state.value)) {
            let newState = _.clone(this.state);
            newState.value = props.value;
            this.setState(newState, this.validate);
        }

        if (!_.isUndefined(props.disabled)) {

            let newClassList = _.clone(this.state.classList);
            newClassList.shDisabled = props.disabled;
            this.setState({
                classList: newClassList
            });
        }
    }

    toggleWithKey(event) {
        if (event.keyCode === 32) {
            this.toggleChecked();
        }
    }

    toggleChecked() {
        let newState = this.state;
        newState.value = !newState.value;
        this.setState({value: newState.value}, () => {
            if (this.props.validator) {
                this.props.validator.validate()
            } else {
                this.validate();
            }
        });
        this.props.onChange(this.state.value);
    }

    componentWillMount() {
        if (this.props.validator) {
            this.props.validator.register(this, this.validate);
        }
    };

    componentWillUnmount() {
        if (this.props.validator) {
            this.props.validator.unregister(this);
        }
    };

    render() {
        let {required, validator, ...other} = this.props;
        return (
            <div className={"sh-input-checkbox " + ShCore.getClassNames(this.state.classList)}
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

ShInputCheckbox.propTypes = {
    validator: React.PropTypes.object,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
    required: React.PropTypes.bool,
};

ShInputCheckbox.defaultProps = {
    validator: null,
    value: null,
    onChange: _.noop
};

export default ShInputCheckbox;