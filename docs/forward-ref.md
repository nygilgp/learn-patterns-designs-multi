[back](../README.md)

#### Hooks: Forward Ref

[Branch](https://github.com/nygilgp/learn-patterns-designs-multi/tree/forward-ref)

Here we want to pass ref from one component to another. It is not possible simply by props, it will throw error. To avoid it, we can make use of forwardRef.

We need to <b>wrap the Input component with forwardRef</b>, and after obtaining all our props, we need to make sure <b>ref is obtained as 2nd parameter and assigned to input</b>.

    import { forwardRef } from "react";

    const CustomInput = (props, ref) => {
      return <input {...props} ref={ref} className="text-input" />;
    };

    export const Input = forwardRef(CustomInput);

    import { useRef } from "react";
    import "./App.css";
    import { Input } from "./input";

    function App() {
      const inputRef = useRef();

      function submitHandler(e) {
        e.preventDefault();

        console.log(inputRef.current.value);
      }

      return (
        <form onSubmit={submitHandler}>
          <Input ref={inputRef} />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      );
    }

    export default App;

[back](../README.md)
