// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener valores de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar usuario y contraseña (en este ejemplo se asume que son correctos)
    if (validateLogin(username, password)) {
        // Almacenar nombre de usuario en localStorage
        localStorage.setItem('loggedInUser', username);

        // Redirigir a index1.html u otra página deseada
        window.location.href = 'index1.html';
    } else {
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
});

// Función para validar el inicio de sesión
function validateLogin(username, password) {
    // Aquí puedes definir múltiples usuarios y contraseñas para validar
    const users = [
        { username: 'xXSimonXx', password: 'azucarmorena.com' },
        { username: 'xXDanielXx', password: 'Lamacarena12.com' },
        { username: 'Nelsito', password: 'Nelson.com' }
        // Puedes añadir más usuarios aquí según sea necesario
    ];

    // Validar el usuario y la contraseña
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true; // Usuario encontrado y contraseña correcta
        }
    }

    return false; // Usuario no encontrado o contraseña incorrecta
}
