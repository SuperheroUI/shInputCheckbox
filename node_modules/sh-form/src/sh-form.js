import React from 'react';
import * as _ from 'lodash';
import sh from 'sh-core';

import Validator from './validator';

class ShForm extends React.Component {
    constructor() {
        super();
        this.state = {
            status: 'unknown'
        };

        this.validator = new Validator(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        let valid = this.validator.validate(true);
        if (valid && this.props.onSubmit) {
            this.props.onSubmit();
        }
    }

    generateChildren(children) {
        return React.Children.map(children, (child) => {
            if (!child) {
                return;
            }

            if (_.isFunction(child.type)) {
                if (!_.isUndefined(child.props.validator)) {
                    return React.cloneElement(child, {validator: this.validator});
                } else {
                    return child;
                }
            } else {
                if (child.props && !_.isEmpty(child.props.children)) {
                    return React.cloneElement(child, {}, this.generateChildren(child.props.children));
                } else {
                    return child;
                }
            }
        });
    }

    render() {
        let children = this.generateChildren(this.props.children);
        let classes = {
            shForm: true,
            shStatus: this.state.status
        };
        return (
            <form className={sh.getClassNames(classes)} onSubmit={this.onSubmit}>
                {children}
            </form>
        );
    }
}

export default ShForm;
