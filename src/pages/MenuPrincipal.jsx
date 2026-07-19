import { useState } from "react";
import Inicio from "./Inicio";
import FormularioRegistro from "./FormularioRegistro";
import FormularioLogin from "./FormularioLogin";

function MenuPrincipal() {

    // Estado que controla qué pantalla se muestra
    const [pantalla, setPantalla] = useState("inicio");

    return (

        <div>

            {/* Menú Superior */}

            <nav className="menu-principal">

                <button onClick={() => setPantalla("inicio")}>
                    Inicio
                </button>

                <button onClick={() => setPantalla("registro")}>
                    Registrarse
                </button>

                <button onClick={() => setPantalla("login")}>
                    Iniciar sesión
                </button>

            </nav>

            {/* Contenido */}

            {pantalla === "inicio" && <Inicio />}

            {pantalla === "registro" && <FormularioRegistro />}

            {pantalla === "login" && <FormularioLogin />}

        </div>

    );

}

export default MenuPrincipal;