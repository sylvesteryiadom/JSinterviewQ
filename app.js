// // TIMEOUT
// console.log('a');
// let timmy = setTimeout(function () {
//     console.log('b');
// }, 1)
// let timothy = setTimeout(function () {
//     console.log('c')
// }, 10)
// let timer = setTimeout(function () {
//     console.log('d')
// }, 0);
// console.log('e');

// // What is the order of the output of the letters and why?

// // a , e , b, d , c Those without settimeout will go first, then b goes because it was put on the stack before d and then d and c executes.

// // =========================
// // ASYNC
// let num = 0;

// async function increment() {
//     num += await 2;
//     console.log(num);
// }
// increment();

// num += 1;
// console.log(num);

// // Answer : 1, 2 the async function/promise causes a slight delay cuz it runs in the background and the other code executes;

// // =========================
// // REVEALING MODULE

// let myModule = (function () {
//     let data = [];

//     let _render = function () {

//     };
//     let _add = function () {

//     };

//     let _remove = function () {

//     };
//     return {
//         _render
//     }
// })();

// myModule._render();

// // =======================
// // PARAMS

// let f = function (a, b) {
//     if (f.arguments.length === 2) {
//         console.log(`We have a match`);
//     } else {
//         console.log(`We do not have a match`);
//     }
// };

// f(1) // no
// f(1, 2) // yes
// f(1, 2, 3) // no all other params are undefined 

// =======================
// ASI , missing semi colon confuses the JS interpreter
let a = {
    a: 123
}; // missing semi-colon

[a].forEach(function (x) { // a is an object and and the property needs a dot notion
    console.log(x);
})