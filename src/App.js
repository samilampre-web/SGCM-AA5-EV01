import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

    const [pantalla, setPantalla] = useState("login");

    return (

        <>
            {pantalla === "login"
    ? (
        <Login cambiarPantalla={setPantalla} />
      )
    : (
        <Dashboard cambiarPantalla={setPantalla} />
      )
}
        </>

    );

}

export default App;