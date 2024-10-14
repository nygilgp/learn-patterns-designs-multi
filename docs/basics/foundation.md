[back](../../README.md)

#### Foundation

[Branch](https://github.com/nygilgp/learn-patterns-designs-multi/tree/basics)

Components can encapsulate small things or large things. The whole application is a component and every single thing that comes are components.

##### JSX

Write JS similar to HTML.

When JSX executes, it get converted to JS

    <h1 id="hello">Hi there...</h1>; to React.createElement('h1', { id: 'hello' }, 'hi there...')

createElement is very ugly to write and read, so JSX.

Things to note while writing JSX

    tab-index => tabIndex

So remove the - and use camelcase.

But we don't do this for custom data or aria-label will not change in JSX.

    data-id="34" aria-label="Enter name here"

Some keywords can't be used

    calss to className="container"
    for to htmlFor="id"

Style need to be passed as object

    style={{ backgroundColor: "red" }}

here you can see the css property also background-color needs to be backgroundColor

Now any time you see {} in JSX, it will execute JS inside it.

    <label>{2 + 2}<label> output as 4

You need to close of your JSX tag (self close or closing tag at the end of it)

    <input /> or <input></input>

undefined, null and false will return nothing from the component.

JSX when ever it sees a element which starts with lower case letter cosiders it as normal HTML tag(Todolist => todolist)

[back](../../README.md)
