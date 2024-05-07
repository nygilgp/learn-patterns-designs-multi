[back](../README.md)

#### Hooks: React Portals

[Branch](https://github.com/nygilgp/learn-patterns-designs-multi/tree/react-portals)

Here we need to move an alert/notification box out of the react main conatiner we can make use of react portals. A new div outside the root id created and assigned the component (<b>document.querySelector("#alert-holder")</b>).

    import { useState } from "react";
    import { createPortal } from "react-dom";
    import "./App.css";

    function App() {
      const [show, setShow] = useState(false);

      return (
        <div style={{ position: "absolute", marginTop: "200px" }}>
          <h1>Other Content</h1>
          <button onClick={() => setShow(true)}>Show Message</button>
          <Alert show={show} onClose={() => setShow(false)}>
            A sample message to show.
            <br />
            Click it to close.
          </Alert>
        </div>
      );
    }

    const Alert = ({ children, onClose, show }) => {
      if (!show) return;

      return createPortal(
        <div className="alert" onClick={onClose}>
          {children}
        </div>,
        document.querySelector("#alert-holder")
      );
    };

    export default App;

[back](../README.md)
