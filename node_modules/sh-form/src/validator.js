import * as _ from 'lodash';

class Validator {
    constructor(shForm) {
        this.shForm = shForm;
        this.components = [];
        this.status = 'unknown';
    }

    register(component, validateFunc) {
        this.components.push({
            component: component,
            validate: validateFunc
        });
    }

    unregister(component) {
        _.remove(this.components, (c) => {
            return c.component === component;
        });
    }

    validate(force) {
        let results = this.components.map((c) => {
            let result = c.validate(force);
            return result.isValid;
        });

        let valid = _.every(results);
        this.shForm.setState({
            status: valid ? 'valid' : 'error'
        });

        return valid;
    }
}

export default Validator;
