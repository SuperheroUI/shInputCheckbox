var Validator = require('./validator').default;

describe('Validator', function() {
    it('can register/unregister component', function() {
        let validator = new Validator();
        expect(validator.components.length).toBe(0);

        let c = {a: 'b'};
        let cFunc = () => {};
        validator.register(c, cFunc);
        expect(validator.components.length).toBe(1);

        validator.unregister(c);
        expect(validator.components.length).toBe(0);
    });

    it('will validate all components', function() {
        let shForm = {
            setState: (state) => {
                shForm.state = state;
            }
        };
        let validator = new Validator(shForm);

        let a = 1;
        let b = 2;
        let c = 3;

        let func1 = () => {
            return {
                isValid: true,
                msg: 'valid'
            }
        };

        let func2 = () => {
            return {
                isValid: false,
                msg: 'error'
            }
        };

        validator.register(a, func1);
        validator.register(b, func1);
        validator.register(c, func1);
        expect(validator.validate()).toBeTruthy();
        expect(shForm.state.status).toBe('valid');
    });

    it('will validate all components', function() {
        let shForm = {
            setState: (state) => {
                shForm.state = state;
            }
        };
        let validator = new Validator(shForm);

        let a = 1;
        let b = 2;
        let c = 3;

        let func1 = () => {
            return {
                isValid: true,
                msg: 'valid'
            }
        };

        let func2 = () => {
            return {
                isValid: false,
                msg: 'error'
            }
        };

        validator.register(a, func1);
        validator.register(b, func2);
        validator.register(c, func1);
        expect(validator.validate()).toBeFalsy();
        expect(shForm.state.status).toBe('error');
    });
});
