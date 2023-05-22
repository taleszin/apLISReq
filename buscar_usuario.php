<?php
include 'config.php';

$id = isset($_POST['id']) ? $_POST['id'] : null;

if ($id) {
    $sql = "SELECT * FROM usuarios WHERE id = '$id'";
    $result = $conn->query($sql);

    if ($result->num_rows === 1) {
        $usuario = $result->fetch_assoc();
        echo json_encode($usuario);
    } else {
        echo "Usuário não encontrado.";
    }
} else {
    echo "ID de usuário não fornecido.";
}

$conn->close();
?>
