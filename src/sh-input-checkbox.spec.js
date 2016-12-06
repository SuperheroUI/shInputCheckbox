import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import ShInputCheckbox from './sh-input-checkbox';
import _ from 'lodash';

describe('root', function() {
    it('renders without problems', function() {
        let value = true;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        expect(root.state.value).toBeTruthy();
    });
    it('renders without problems if you do not assign a value', function() {
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox />);
        expect(root.state.value).toBe(undefined)
    });
    it('Set the value with the space bar', function() {
        let value = true;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        let event = {};
        event.keyCode = 32;
        root.toggleWithKey(event);
        expect(root.state.value).toBe(false)
    });
    it('other keys do not do anything', function() {
        let value = true;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        let event = {};
        event.keyCode = 2;
        root.toggleWithKey(event);
        expect(root.state.value).toBe(true)
    });

    it('update value if the props change', function() {
        let value = true;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        expect(root.state.value).toBe(true);
        let props = {};
        props.value = false;
        root.componentWillReceiveProps(props);
        expect(root.state.value).toBe(false);
    });
    it('update value if the props change, but value is the same, nothing should happen', function() {
        let value = true;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        expect(root.state.value).toBe(true);
        let props = {};
        props.value = true;
        root.componentWillReceiveProps(props);
        expect(root.state.value).toBe(true);
    });
    it('should run validate when you click', function() {
        let value = false;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} required/>);
        root.validate(true);
        expect(root.state.classList.shTouched).toBe(true);
        expect(root.state.classList.shInvalid).toBe(true);

    });
    it('be able to be disabled', function() {
        let value = false;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} disabled/>);
        expect(root.state.classList.shDisabled).toBe(true);

    });
    it('be able to validate itself', function() {
        let value = false;
        let test = false;
        let fireValidator = {
            register: _.noop,
            validate: function () {
                test = true;
            }
        };
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} validator={fireValidator}/>);

        root.toggleChecked();
        expect(test).toBe(true);
    });
    it('removes its validator', function() {
        let value = false;
        let test = false;
        let fireValidator = {
            unregister: function(){
                test = true;
            },
            register: _.noop,
            validate: _.noop
        };
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} validator={fireValidator}/>);

        root.componentWillUnmount();
        expect(test).toBe(true);
    });
    it('unmount with no validator', function() {
        let value = false;
        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value}/>);
        expect(root.componentWillUnmount).toBeDefined();
        root.componentWillUnmount();
    });
    it('update the disabled status', function() {
        let value = false;

        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} disabled={true}/>);
        expect(root.state.classList.shDisabled).toBe(true);
        root.componentWillUnmount();
    });
    it('update the disabled status', function() {
        let value = true;

        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} disabled={false}/>);
        expect(root.state.classList.shDisabled).toBe(false);
        root.componentWillUnmount();
    });
    it('update the disabled status', function() {
        let value = true;

        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} disabled={false}/>);
        root.componentWillReceiveProps({disabled: true});
        expect(root.state.classList.shDisabled).toBe(true);
        root.componentWillUnmount();
    });
    it('update the disabled status', function() {
        let value = true;

        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} disabled={false}/>);
        root.componentWillReceiveProps({disabled: false});
        expect(root.state.classList.shDisabled).toBe(false);
        root.componentWillUnmount();
    });
    it('update the disabled status', function() {
        let value = true;

        let root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} disabled={true}/>);
        let undef = undefined;
        root.componentWillReceiveProps({disabled: undef});
        expect(root.state.classList.shDisabled).toBe(false);
        root.componentWillUnmount();
    });
});
