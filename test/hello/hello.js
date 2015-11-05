'use strict'
describe('Greeter', function() {
    var greeter
    beforeEach(function() {
        greeter = Greeter({name: "Jack"})
    })
    it('should say hello', function() {
        expect(greeter.hello()).toBe("Hello, Jack")
    })
})
