// URL donde se encuentra nuestro servicio web (json-server)
const URL = "http://localhost:3001/usuarios";

/**
 * Función para registrar un nuevo usuario.
 * Recibe un objeto con la información del usuario
 * y lo envía al servidor mediante una petición POST.
 */
export const registrarUsuario = async (usuario) => {

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    return await respuesta.json();
};

/**
 * Función para obtener todos los usuarios registrados.
 * Realiza una petición GET al servidor.
 */
export const obtenerUsuarios = async () => {

    const respuesta = await fetch(URL);

    return await respuesta.json();
};

/**
 * Busca un usuario por nombre de usuario y contraseña.
 * Devuelve el usuario si existe o undefined si no existe.
 */
export const autenticarUsuario = async (usuario, password) => {

    const usuarios = await obtenerUsuarios();

    return usuarios.find(
        (u) =>
            u.usuario === usuario &&
            u.password === password
    );

};