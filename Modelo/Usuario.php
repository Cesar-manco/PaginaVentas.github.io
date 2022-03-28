<?php
include_once 'Conexion.php';
class Usuario{
	public function __construct(){
		$db = new Conexion();
		$this->acceso = $db->pdo;
	}
	function Loguearse($user, $pass){
		$sql="SELECT * FROM usuario inner join tipo_us on us_tipo=id_tipo_us where nom_user=:user and password=:pass";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':user' =>$user,':pass'=>$pass));
		$this->objetos = $query->fetchall();
		return $this->objetos;
	}
	function crear($usuario,$password,$correo,$apellido,$tipo){
		$sql="INSERT INTO usuario(nom_user,password,email,apellido_us,us_tipo) VALUES(:nom_user,:password,:email,:apellido_us,:us_tipo)";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':nom_user' =>$usuario,':password' =>$password,':email' =>$correo,':apellido_us' =>$apellido,':us_tipo' =>$tipo));
		echo 'add';
	}
}

?>