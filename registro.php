<?php
// Conectar a la base de datos
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'login-php';
$conexion = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

if (mysqli_connect_error()) {
    exit('Fallo en la conexión de MySQL: ' . mysqli_connect_error());
}

// Validar que se hayan enviado los datos
if (!isset($_POST['email'], $_POST['username'], $_POST['password'], $_POST['confirm_password'])) {
    exit('Por favor complete todos los campos.');
}

// Validar que las contraseñas coinciden
if ($_POST['password'] !== $_POST['confirm_password']) {
    exit('Las contraseñas no coinciden.');
}

// Evitar inyección SQL
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

// Verificar si el usuario o el correo ya existen
if ($stmt = $conexion->prepare('SELECT id FROM accounts WHERE username = ? OR email = ?')) {
    $stmt->bind_param('ss', $username, $email);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows > 0) {
        echo 'El usuario o correo ya están registrados. Por favor intente con otro.';
    } else {
        // Si el usuario y el correo son únicos, crear la cuenta nueva
        if ($stmt = $conexion->prepare('INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)')) {
            $stmt->bind_param('sss', $username, $password, $email);
            $stmt->execute();

            header('Location: index.html');
            exit();
        } else {
            echo 'Error al registrar la cuenta.';
        }
    }
    $stmt->close();
} else {
    echo 'Error en la consulta SQL.';
}

$conexion->close();
?>