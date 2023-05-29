<?php
include_once("controle.php");
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="estilo.css">
  <link rel="shortcut icon" href="../icone.png" type="image/x-icon">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <title>Login</title>
</head>

<body>
  <div class="container">
    <div class="login-box">
      <h1>Login</h1>
      <form>
        <div class="input-with-icon">
          <input type="text" id="usuario" class = "formulario" placeholder="Nome de usuário" required autocomplete="off">
          <i class="fas fa-user"></i>
        </div>
        <div class="input-with-icon">
          <input type="password" id="senha" class = "formulario" placeholder="Senha" required autocomplete="off">
          <i class="fas fa-lock"></i>
        </div>
        <button type="submit" id="btnLogin" class="btn">Entrar</button>
      </form>
      <a href="../crud.php" target="_blank">Esqueceu sua senha?</a>
    </div>
  </div>
</body>
<script src="script.js"></script>
</html>
