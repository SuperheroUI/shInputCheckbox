import React from 'react';
import * as _ from 'lodash';

class TempInput extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            status: 'unknown'
        };

        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentWillMount() {
        if (this.props.validator) {
            this.props.validator.register(this, this.validate);
        }
    }

    componentWillUnmount() {
        if (this.props.validator) {
            this.props.validator.unregister(this);
        }
    }

    validate(force) {
        let valid = !_.isEmpty(this.state.value);

        if (force) {
            let status = valid ? 'valid' : 'error';
            this.setState({
                status: status
            });
        }

        return {
            isValid: valid,
            msg: 'there was an error'
        };
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        }, () => {
            this.validate(true);
            if (this.props.validator) {
                this.props.validator.validate();
            }
        });
    }

    render() {
        let {
            validator,
            className,
            value,
            ...other
        } = this.props;

        let classes = (className || '').split(' ');
        classes.push(this.state.status);
        classes.push('temp-input');

        return (
            <div className={classes.join(' ')} {...other}>
                <input className="input-main" value={value} onChange={this.onChange} />
            </div>
        );
    }
}

TempInput.propTypes = {
    validator: React.PropTypes.object
};

TempInput.defaultProps = {
    validator: null
};

export default TempInput;
