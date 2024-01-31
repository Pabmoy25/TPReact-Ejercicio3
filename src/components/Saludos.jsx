import { useState } from "react";

const Saludos = (props) => {

    const [modificaSaludo, setModificaSaludo] = useState("");
    return (
        <section>
            <h2>Hello {props.enviarProps} {modificaSaludo} </h2>
            <button
        className="btn btn-primary"
        onClick={() => setModificaSaludo("(From changed State)!")}
      >
        Click me
      </button>
        </section>
    );
};

export default Saludos;