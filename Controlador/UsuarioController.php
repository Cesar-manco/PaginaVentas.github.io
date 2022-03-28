<?php 
include_once'../Modelo/Usuario.php';
include_once'../JS/registrarse.js';
$usuario = new Usuario();
session_start();

if($_POST['funcion']=='crear_usuario'){
	$usuario = $_POST['usuario'];
	$password = $_POST['password'];
	$correo = $_POST['correo'];
	$apellido = $_POST['apellido'];
	$tipo=2;
	$usuario->crear($usuario,$password,$correo,$apellido,$tipo);

	echo 'success';
}


?>
