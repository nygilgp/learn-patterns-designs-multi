[Back](../../README.md)
[Coding Excersise](./coding-excersises.md)

## Fundamentals

#### Difference between Null and Undefined

At the time of variable declaration no type is decided. So befone any value is assiged to a varaible, it contains "undefined".

    let x; // undefined
    lex y = 9; // number

    console.log(x) // undefined
    console.log(typeof x); // undefined

Null means nothing. If you want to make a variable empty you assign null to it.

    let x = null;
    let y;
    console.log(x == y); // true

As both null and undefined represent nothingness, but both are different data types.

#### Difference between function scope and block scope

Scope means lifetime or availability of a variable or function.

ES5 has function scope & it is because of hoisting.
ES6 has no hoisting, so it has block scope.

If you declare a variable using var keyword then hoisting is there.

JS compiler doesn't hoist keywords declared with let keyword.

#### What is Automatic Semicolon Insertion?

If you forget to enter semicolon at the end of the statement, JS is not going to throw error.

Writing a semicolon at the end of line is optional in JS.

But we need to be careful, as a new line after return statement automatically adds a semicolon, so any thing after that never executes.

    // Not working
    function constObject() {
        return
        {
            name: "Nick"
        }
    }
    // Here the object is never returned, it will be undefined when calling constObject()
    // Working
    function constObject() {
        return {
            name: "Nick"
        }
    }

Use strict never changes the behaviour of ASI.

#### Rest vs Spread?

Rest (means rest of the parameters). Works wiht ES6

    function sum(...nums) {
        console.log(nums)
    }
    sum(1, 2);
    sum(3, 4, 5, 6, 7);

    function sum(a, ...b) {
        console.log(b)
    }

    sum(1, 2, 3, 4)
    sum(5, 6, 7)

ES5 has an array like object called arguments, which does not work with arrow functions.

Spread, spreding the contents.

    let a = [1, 2, 3, 4, 5]
    let b = [...a, 6, 7, 8]
    console.log(b)

It can also help in cases where we want to spread the params as well for function

    let nums = [40, 90, 63, 45]
    Math.max(nums) // NaN
    Math.max(...nums) // 90

Assignment arr1 = arr2 is not a preferable way as both are objects.
arr1 = [...arr2]

\*\* You cannot place the rest parameter at anywhere in the function, it should be the last one

    function test(...a, b) // wrong way
    function test(a, ...b) // correct way

#### When do we get infinity or (-infinity) as output?

infinity highest possible value in JS.
Two possible values POSITIVE_INFINITY and NEGATIVE_INFINITY

In JS numbers are stored in 64 bit format.

[Back](../../README.md)
