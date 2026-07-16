import { useState } from "react";
import "../styles/estilos.css";

function Login({ cambiarPantalla }) {

    const [documento, setDocumento] = useState("");
    const [numero, setNumero] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [rol, setRol] = useState("Paciente");

    const login = (event) => {
        event.preventDefault();

        if (documento === "" || numero === "" || password === "") {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (password.length < 4) {
            setError("La contraseña debe tener al menos 4 caracteres");
            return;
        }

        setError("");
        cambiarPantalla("dashboard");
    };

    return (
        <div className="container-login">

            <div className="lado-imagen"></div>

            <div className="lado-formulario">

                <div className="card">

                    <h2>Inicio de sesión</h2>

                    <div className="roles">

    <button
        type="button"
        className={rol === "Paciente" ? "rol activo" : "rol"}
        onClick={() => setRol("Paciente")}
    >
        Paciente
    </button>

    <button
        type="button"
        className={rol === "Médico" ? "rol activo" : "rol"}
        onClick={() => setRol("Médico")}
    >
        Médico
    </button>

    <button
        type="button"
        className={rol === "Administrador" ? "rol activo" : "rol"}
        onClick={() => setRol("Administrador")}
    >
        Administrador
    </button>

</div>

                    <form onSubmit={login}>

                        <div className="input-group">
                            <input
                                type="text"
                                value={documento}
                                onChange={(e) => setDocumento(e.target.value)}
                                required
                            />
                            <label>Tipo de documento</label>
                        </div>

                        <div className="input-group">
                            <input
                                type="text"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                                required
                            />
                            <label>Número de documento</label>
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

                        <p className="error">{error}</p>

                        <div className="links">
                            <button type="button" className="link-btn">
    ¿Olvidaste tu contraseña?
</button>

<button type="button" className="link-btn">
    Crear cuenta
</button>
                        </div>

                        <button
                            type="submit"
                            className="btn-login">
                            Ingresar
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Login;