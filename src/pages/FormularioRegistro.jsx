import { useState } from "react";
import "../styles/estilos.css";
import { registrarUsuario, obtenerUsuarios } from "../services/usuarioService";

function FormularioRegistro({ cambiarPantalla }) {

    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const manejarRegistro = async () => {

        if (!nombre || !usuario || !password) {
            setMensaje("Todos los campos son obligatorios.");
            return;
        }

        // Verificar que el usuario no exista
        const usuarios = await obtenerUsuarios();

        const existe = usuarios.find(
            (u) => u.usuario === usuario
        );

        if (existe) {
            setMensaje("El usuario ya se encuentra registrado.");
            return;
        }

        const nuevoUsuario = {
            nombre,
            usuario,
            password
        };

        await registrarUsuario(nuevoUsuario);

        setMensaje("Usuario registrado correctamente.");

        setNombre("");
        setUsuario("");
        setPassword("");

        // Después de 1.5 segundos volver al Login
        setTimeout(() => {
            cambiarPantalla("login");
        }, 1500);

    };

    return (

        <div className="container-login">

            <div className="lado-imagen"></div>

            <div className="lado-formulario">

                <div className="card">

                    <h2>Registro de Usuario</h2>

                    <div className="input-group">

                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />

                        <label>Nombre</label>

                    </div>

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
                        onClick={manejarRegistro}
                    >
                        Registrarse
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
                        onClick={() => cambiarPantalla("login")}
                    >
                        Ya tengo una cuenta
                    </button>

                    <p className="error">
                        {mensaje}
                    </p>

                </div>

            </div>

        </div>

    );

}

export default FormularioRegistro;