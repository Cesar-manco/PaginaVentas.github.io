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
	function obtener_datos($id){
		$sql="SELECT * FROM usuario join tipo_us on us_tipo=id_tipo_us and id_user=:id";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id));
		$this->objetos = $query->fetchall();
		return $this->objetos;
	}
	function editar($id_usuario,$telefono,$residencia,$correo,$sexo,$adicional){
		$sql="UPDATE usuario SET telefono_user=:telefono,residencia_user=:residencia,email=:correo,sexo_user=:sexo,adicional_user=:adicional where id_user=:id";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id_usuario,':telefono'=>$telefono,':residencia'=>$residencia,':correo'=>$correo,':sexo'=>$sexo,':adicional'=>$adicional));
	}
	function cambiar_contra($id_usuario,$oldpass,$newpass){
		$sql="SELECT * FROM usuario where id_user=:id and pass_user=:oldpass";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id_usuario,':oldpass'=>$oldpass));
		$this->objetos = $query->fetchall();
		if(!empty($this->objetos)){
			$sql="UPDATE usuario SET pass_user=:newpass WHERE id_user=:id";
			$query=$this->acceso->prepare($sql);
			$query->execute(array(':id'=>$id_usuario, ':newpass'=>$newpass));
			echo 'update';
		}
		else{
			echo 'no update';
		}
	}
}

?>