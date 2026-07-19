import { useState } from "react";
import "../styles/estilos.css";
import { autenticarUsuario } from "../services/usuarioService";

function FormularioLogin({ cambiarPantalla }) {

    // Estados para los campos del formulario
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    // Estado para mostrar mensajes
    const [mensaje, setMensaje] = useState("");

    // Función que valida el inicio de sesión
    const manejarLogin = async () => {

        // Validar que los campos no estén vacíos
        if (!usuario || !password) {
            setMensaje("Todos los campos son obligatorios.");
            return;
        }

        // Buscar el usuario registrado
        const usuarioEncontrado = await autenticarUsuario(usuario, password);

        // Si existe, iniciar sesión
        if (usuarioEncontrado) {

            setMensaje("Autenticación satisfactoria.");

            // Esperar un segundo antes de entrar al Dashboard
            setTimeout(() => {
                cambiarPantalla("dashboard");
            }, 1000);

        } else {

            setMensaje("Error en la autenticación.");

        }

    };

    return (

        <div className="container-login">

            <div className="lado-imagen"></div>

            <div className="lado-formulario">

                <div className="card">

                    <h2>Inicio de Sesión</h2>

                    <div className="input-group">

                        <input
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />

                        <label>Usuario</label>

                    </div>

                    <div className="input-group">

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <label>Contraseña</label>

                    </div>

                    <button
                        className="btn-login"
                        onClick={manejarLogin}
                    >
                        Iniciar sesión
                    </button>

                    <br /><br />

                    <button
                        className="link-btn"
                        onClick={() => cambiarPantalla("inicio")}
                    >
                        ← Volver al inicio
                    </button>

                    <br />

                    <button
                        className="link-btn"
                        onClick={() => cambiarPantalla("registro")}
                    >
                        ¿No tienes cuenta? Regístrate
                    </button>

                    <p className="error">{mensaje}</p>

                </div>

            </div>

        </div>

    );

}

export default FormularioLogin;