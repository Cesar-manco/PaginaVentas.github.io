<?php
include 'Conexion.php';
class Empresa{
    var $objetos;
    public function __construct(){
        $db = new Conexion();
        $this->acceso=$db->pdo;
    }
    function crear($nombre,$avatar){
		$sql="SELECT id_empresa FROM empresa WHERE nombre=:nombre";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':nombre'=>$nombre));
		$this->objetos=$query->fetchall();
		if(!empty($this->objetos)){
			echo 'noadd';
		}
		else{
			$sql="INSERT INTO empresa(nombre,avatar) VALUES(:nombre,:avatar)";
			$query = $this->acceso->prepare($sql);
			$query->execute(array(':nombre'=>$nombre,':avatar'=>$avatar));	
			echo 'add';
		}
	}
    function buscar(){
		if(!empty($_POST['consulta'])){
			$consulta=$_POST['consulta'];
			$sql="SELECT * FROM empresa  WHERE nombre LIKE :consulta";
			$query= $this->acceso->prepare($sql);
			$query->execute(array(':consulta'=>"%$consulta%"));
			$this->objetos=$query->fetchall();
			return $this->objetos;
		}
		else{
			$sql="SELECT * FROM empresa WHERE nombre NOT LIKE '' ORDER BY id_empresa LIMIT 25";
			$query= $this->acceso->prepare($sql);
			$query->execute();
			$this->objetos=$query->fetchall();
			return $this->objetos;
		}
	}
	function cambiar_logo($id,$nombre){
		$sql="SELECT avatar FROM empresa where id_empresa=:id";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id));
		$this->objetos = $query->fetchall();
			$sql="UPDATE empresa SET avatar=:nombre WHERE id_empresa=:id";
			$query=$this->acceso->prepare($sql);
			$query->execute(array(':id'=>$id, ':nombre'=>$nombre));
		return $this->objetos;
	}
	function borrar($id){
		$sql="DELETE FROM empresa WHERE id_empresa=:id";
		$query=$this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id));
		if(!empty($query->execute(array(':id'=>$id)))){
			echo 'borrado';
		}
		else{
			echo 'noborrado';
		}
	}
	function editar($nombre,$id_editado){
		$sql="UPDATE empresa SET nombre=:nombre WHERE id_empresa=:id";
		$query=$this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id_editado,':nombre'=>$nombre));
		echo 'edit';
	}
}

?>