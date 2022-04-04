// function foo() { console.log(this); }
// foo.call(null);

//Window {window: Window, self: Window, document: document, name: '', location: Location, …}


//2

// printMessage();
// function printMessage() {
//     console.log('Hello!');
// }
// Hello!


//3

// "use strict";

// function getThis() {
//     return this;
// }

// console.log(getThis());
// undefined

//4
// function getThis() {
//     return this;
// }

// console.log(getThis());
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


//5
// var a = 1, b = function a(x) { x && a(--x); };
// console.log(a);
// 1

//6
// let name = 'John';
// function printName() {
//     console.log(name);
// }

// setTimeout(() => {
//     let name = "Peter";
//     printName();
// }, 1);
// John


//7
// const foo = bar();
// const number = 2;

// function bar() { return number; }
// index.js:58 Uncaught ReferenceError: Cannot access 'number' before initialization
//     at bar (index.js:58:18)
//     at index.js:55:13

//8
// let name = 'John';

// function printName() {
//     let name = 'Peter';
//     console.log(name);
// }

// printName();
// Peter

//9
(
    function(a) {
        arguments[0] = 10;
        return a;
    }
) (5);
console.log(a)
// В консоли ничего нет

//10
// const details = {
//     name: 'John!',
// }
// function getMessage(message) {
//     return `${message} ${this.name}`;
// }

// console.log(getMessage.apply(details, ['Helllo']));
// Helllo John!

//11
// var name = 'John';

// var user = {
//     name: "Peter",
//     printMessage() {
//         console.log(`Hello, ${this.name}!`)
//     }
// };

// var printMessage = user.printMessage;
// printMessage();
// Hello, John!

//12
// console.log(message);
// var message = 'Hello';
// undefined

// 13
// for(var i = 0; i < 10; i++) {
//     //..
// }

// console.log(i)
// 10

//14
// for(let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000)
// }
// 0 1 2

//15
// function foo() {
//     return { bar: 1 };
// }
// console.log(typeof foo().bar);
// number

//16
// function foo(a, b) {
//     return a * b;
// }
// const bar = foo.bind(null, 2);
// bar(2);
// В консол пусо

//17
// "use strict";

// const details = {
//     message: 'Hello!',
// }
// function getMessage() {
//     return this.message;
// }
// console.log(getMessage.call(details));
// Руддщ!

//18
// let f = function g() { return 23; };
// console.log(typeof g());
// index.js:158 Uncaught ReferenceError: g is not defined

//19
// console.log(message);
// let message = 'Hello';
// index.js:162 Uncaught ReferenceError: Cannot access 'message' before initialization

//20 
// var name = 'John';
// function printName() {
//     console.log(name)
//     var name = 'Peter';
//     console.log(name);
// }
// printName();
// undefined
// index.js:171 Peter

//21
// for(var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 1000)
// }
// 3 3 3