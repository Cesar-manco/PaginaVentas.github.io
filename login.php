<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
		<title>login</title>
		<script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
		<link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="Css/login.css">
		<link rel="stylesheet" type="text/css" href="Css/css/all.min.css">
	</head>
	<?php
	session_start();
	if(!empty($_SESSION['us_tipo'])){
		header('Location: Controlador/LoginControlador.php');
	}
	else{
		session_destroy();
	?>
	<body>
		<img class="wave"src="img/wave.png" alt="">
		<div class="contenedor">
			<div class="img">
				<img src="img/login.svg" alt="">
			</div>
			<div class="contenido-login">
				<form action="Controlador/LoginControlador.php" method="post">
					<img class="img-venta" src="img/icon.png" alt="">
					<h2>Venta Utiles escolares</h2>
					<div class="input-div dni">
						<div class="i">
							<i class="fas fa-user"></i>
						</div>
						<div class="div">
							<h5>Nombre Usuario</h5>
							<input type="text" name="user" class="input">
						</div>
					</div>
					<div class="input-div pass">
						<div class="i">
							<i class="fas fa-lock"></i>
						</div>
						<div class="div">
							<h5>Contraseña</h5>
							<input type="password" name="pass" class="input">
						</div>
					</div>
					<a href="Vista/registrarse.php">No tengo Cuenta</a>
					<input type="submit"class="btn" value="Iniciar Sesion">
				</form>
			</div>
		</div>
</body>
<script src="JS/login.js"></script>
</html>
<?php
}
?>