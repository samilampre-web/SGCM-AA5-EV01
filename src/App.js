import { useState } from "react";

import Inicio from "./pages/Inicio";
import FormularioRegistro from "./pages/FormularioRegistro";
import FormularioLogin from "./pages/FormularioLogin";
import Dashboard from "./pages/Dashboard";

function App() {

    // Estado que controla la pantalla actual
    const [pantalla, setPantalla] = useState("inicio");

    return (

        <>

            {pantalla === "inicio" && (
                <Inicio cambiarPantalla={setPantalla} />
            )}

            {pantalla === "registro" && (
                <FormularioRegistro cambiarPantalla={setPantalla} />
            )}

            {pantalla === "login" && (
                <FormularioLogin cambiarPantalla={setPantalla} />
            )}

            {pantalla === "dashboard" && (
                <Dashboard cambiarPantalla={setPantalla} />
            )}

        </>

    );

}

export default App;