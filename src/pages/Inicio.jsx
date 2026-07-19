import "../styles/estilos.css";

function Inicio({ cambiarPantalla }) {

    return (

        <div className="container-login">

            {/* Imagen lateral */}

            <div className="lado-imagen"></div>

            {/* Contenido */}

            <div className="lado-formulario">

                <div className="card">

                   <h1>SGCM</h1>

<hr />

<h3>Sistema de Gestión de Citas Médicas</h3>

<hr />

                    <p className="descripcion">
    Bienvenido al Sistema de Gestión de Citas Médicas (SGCM).
    Esta aplicación permite registrar usuarios, iniciar sesión
    y administrar la información relacionada con las citas médicas
    de forma sencilla, organizada y segura.
</p>

                    <button
                        className="btn-login"
                        onClick={() => cambiarPantalla("login")}
                    >
                        Iniciar sesión
                    </button>

                    <br /><br />

                    <button
                        className="btn-login"
                        onClick={() => cambiarPantalla("registro")}
                    >
                        Registrarse
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Inicio;