var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var _ = require('lodash');

var ShForm = require('./sh-form').default;

class TempInput extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
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

    validate() {
        let valid = !_.isEmpty(this.state.value);
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

class TempComponent extends React.Component {
    render() {
        return (<div>hello</div>);
    }
}

describe('ShForm', function() {
    it('should submit if no errors', function() {
        let value = 1;
        let onSubmit = () => {
            value++;
        };

        let root = TestUtils.renderIntoDocument(<ShForm onSubmit={onSubmit} />);
        let rootNode = ReactDOM.findDOMNode(root);

        TestUtils.Simulate.submit(rootNode);
        expect(value).toBe(2);
    });

    it('should NOT submit if errors', function() {
        let value = 1;
        let onSubmit = () => {
            console.log('submitting');
            value++;
        };
        let empty;

        let root = TestUtils.renderIntoDocument(
            <ShForm onSubmit={onSubmit}>
                <div>
                    <TempInput/>
                </div>
                <TempComponent/>
                <TempInput/>
                {empty}
                <button>hello</button>
            </ShForm>
        );
        let rootNode = ReactDOM.findDOMNode(root);

        TestUtils.Simulate.submit(rootNode);
        expect(value).toBe(1);
    });
});
