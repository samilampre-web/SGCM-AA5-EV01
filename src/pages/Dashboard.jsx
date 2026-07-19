import { useState } from "react";
import "../styles/estilos.css";
import Citas from "./Citas";
import Perfil from "./Perfil";

function Dashboard({ cambiarPantalla }) {

    const [seccion, setSeccion] = useState("inicio");

    // Lista de citas del sistema
const [citas, setCitas] = useState([
    {
        especialidad: "Medicina General",
        fecha: "2026-07-20",
        estado: "Programada"
    }
]);

    return (

        <div className="layout">

            <aside className="sidebar">

                <h2>SGCM</h2>

                <button
                    className={seccion === "inicio" ? "btn-menu activo" : "btn-menu"}
                    onClick={() => setSeccion("inicio")}
                >
                    Inicio
                </button>

                <button
                    className={seccion === "citas" ? "btn-menu activo" : "btn-menu"}
                    onClick={() => setSeccion("citas")}
                >
                    Citas
                </button>

                <button
                    className={seccion === "perfil" ? "btn-menu activo" : "btn-menu"}
                    onClick={() => setSeccion("perfil")}
                >
                    Perfil
                </button>

                <button
    className="btn-menu"
    onClick={() => cambiarPantalla("inicio")}
>
    Cerrar sesión
</button>

            </aside>

            <main className="main">

                {seccion === "inicio" && (

                    <>
                        <h1>Panel Principal</h1>

                        <p>Bienvenido al Sistema de Gestión de Citas Médicas.</p>

                        <div className="cards">

                            <div className="card-info">
                                <h3>{citas.length}</h3>
                                <p>Citas programadas</p>
                            </div>

                            <div className="card-info">
                                <h3>4</h3>
                                <p>Resultados pendientes</p>
                            </div>

                            <div className="card-info">
                                <h3>2</h3>
                                <p>Notificaciones</p>
                            </div>

                        </div>
                    </>

                )}

                {seccion === "citas" && (
    <Citas
        citas={citas}
        setCitas={setCitas}
    />
)}

                {seccion === "perfil" && <Perfil />}

            </main>

        </div>

    );

}

export default Dashboard;