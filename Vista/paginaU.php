<?php
session_start();
if($_SESSION['us_tipo'] ==2){

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Usuario</title>
</head>
<body>
	<h1>Hola Usuario</h1>
	<a href="../Controlador/Logout.php">Cerrar Sesion</a>
</body>
</html>
<?php
}
else{
	header('Location: ../Vista/login.php');
}
?>