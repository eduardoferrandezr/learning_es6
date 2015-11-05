'use strict'
//Crockford OOP without class style
function Greeter(spec) {
    //let {name} = spec,//destructuring seems not to work with babel 6
    let name = spec.name,
    hello = function() {
        return `Hello, ${name}`
    }

    return Object.freeze({
        hello
    })
}
