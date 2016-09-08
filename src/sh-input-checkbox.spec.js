var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');

var ShInputCheckbox = require('./sh-input-checkbox').default;

describe('root', function() {
    it('renders without problems', function() {
        let value = true;
        var root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        expect(root.state.value).toBeTruthy();
    });
    it('renders without problems if you do not assign a value', function() {
        var root = TestUtils.renderIntoDocument(<ShInputCheckbox />);
        expect(root.state.value).toBe(undefined)
    });
    it('Set the value with the space bar', function() {
        let value = true;
        var root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        let event = {};
        event.keyCode = 32;
        root.toggleWithKey(event);
        expect(root.state.value).toBe(false)
    });
    it('other keys do not do anything', function() {
        let value = true;
        var root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        let event = {};
        event.keyCode = 2;
        root.toggleWithKey(event);
        expect(root.state.value).toBe(true)
    });

    it('update value if the props change', function() {
        let value = true;
        var root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        expect(root.state.value).toBe(true);
        let props = {};
        props.value = false;
        root.componentWillReceiveProps(props);
        expect(root.state.value).toBe(false);
    });
    it('update value if the props change, but value is the same, nothing should happen', function() {
        let value = true;
        var root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        expect(root.state.value).toBe(true);
        let props = {};
        props.value = true;
        root.componentWillReceiveProps(props);
        expect(root.state.value).toBe(true);
    });

});
