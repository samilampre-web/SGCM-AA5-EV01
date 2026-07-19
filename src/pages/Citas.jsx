import { useState } from "react";
import "../styles/estilos.css";

function Citas({ citas, setCitas }) {

    // Controla si el formulario está visible
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    // Guarda lo que escribe el usuario
    const [especialidad, setEspecialidad] = useState("");
    const [fecha, setFecha] = useState("");

    // Agrega una nueva cita
    const agregarCita = () => {

        if (especialidad === "" || fecha === "") {
            alert("Complete todos los campos.");
            return;
        }

        const nuevaCita = {
            especialidad,
            fecha,
            estado: "Programada"
        };

        setCitas([...citas, nuevaCita]);

        setEspecialidad("");
        setFecha("");

        setMostrarFormulario(false);
    };

    // Elimina una cita
    const eliminarCita = (indice) => {

        const nuevasCitas = citas.filter((_, index) => index !== indice);

        setCitas(nuevasCitas);

    };

    return (

        <div>

            <h1>Gestión de Citas</h1>

            <button
                className="btn-primary"
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
            >
                {mostrarFormulario ? "Cancelar" : "Nueva cita"}
            </button>

            {mostrarFormulario && (

                <div className="formulario-cita">

                    <input
                        type="text"
                        placeholder="Especialidad"
                        value={especialidad}
                        onChange={(e) => setEspecialidad(e.target.value)}
                    />

                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />

                    <button
                        className="btn-primary"
                        onClick={agregarCita}
                    >
                        Guardar
                    </button>

                </div>

            )}

            <table className="tabla">

                <thead>

                    <tr>
                        <th>Especialidad</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>

                </thead>

                <tbody>

                    {citas.map((cita, index) => (

                        <tr key={index}>

                            <td>{cita.especialidad}</td>

                            <td>{cita.fecha}</td>

                            <td>{cita.estado}</td>

                            <td>

                                <button
                                    className="btn-primary"
                                    onClick={() => eliminarCita(index)}
                                >
                                    Eliminar
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Citas;