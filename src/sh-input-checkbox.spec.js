var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');

var ShInputCheckbox = require('./sh-input-checkbox').default;

describe('root', function() {
    it('renders without problems', function() {
        let value = true;
        var root = TestUtils.renderIntoDocument(<ShInputCheckbox value={value} />);
        expect(root.state).toBeTruthy();
    });
});
