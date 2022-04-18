<?php
include_once '../Modelo/Usuario.php';
session_start();
$user = $_POST['user'];
$pass = $_POST['pass'];
$usuario = new Usuario();


if(!empty($_SESSION['us_tipo'])){

	switch ($_SESSION['us_tipo']) {
		case 1:
			header('Location: ../Vista/admin.php');
			break;
		
		case 2:
			header('Location: ../Vista/paginaU.php');
			break;
		case 3:
			header('Location: ../Vista/admin.php');
			break;
		}

}
else{
	$usuario->Loguearse($user,$pass);
	if(!empty($usuario->objetos)){
		foreach ($usuario->objetos as $objetos) {
		$_SESSION['usuario']=$objetos->id_user;
		$_SESSION['us_tipo']=$objetos->us_tipo;
		$_SESSION['nom_user']=$objetos->nom_user;

	}
	switch ($_SESSION['us_tipo']) {
		case 1:
			header('Location: ../Vista/admin.php');
			break;
		
		case 2:
			header('Location: ../Vista/paginaU.php');
			break;
		case 3:
			header('Location: ../Vista/admin.php');
			break;
	}
}elseif (!$nom_user && !$id_user) {
	header('Location: ../login.php');
}
}


?>