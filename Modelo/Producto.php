<?php
include 'Conexion.php';
class Producto{
    var $objetos;
    public function __construct(){
        $db = new Conexion();
        $this->acceso=$db->pdo;
    }
    function crear($nombre,$concentracion,$adicional,$precio,$empresa,$tipo,$presentacion,$avatar){
		$sql="SELECT id_product FROM producto WHERE nombre=:nombre and concentracion=:concentracion and adicional=:adicional and prod_emp=:empresa and prod_tip_prod=:tipo and prod_present=:presentacion";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':nombre'=>$nombre,':concentracion'=>$concentracion,':adicional'=>$adicional,':empresa'=>$empresa,':tipo'=>$tipo,':presentacion'=>$presentacion));
		$this->objetos=$query->fetchall();
		if(!empty($this->objetos)){
			
            echo 'noadd';
		}
		else{
			$sql="INSERT INTO producto(nombre,concentracion,adicional,precio,prod_emp,prod_tip_prod,prod_present,avatar) VALUES(:nombre,:concentracion,:adicional,:precio,:empresa,:tipo,:presentacion,:avatar)";
			$query = $this->acceso->prepare($sql);
			$query->execute(array(':nombre'=>$nombre,':concentracion'=>$concentracion,':adicional'=>$adicional,':empresa'=>$empresa,':tipo'=>$tipo,':presentacion'=>$presentacion,':precio'=>$precio,':avatar'=>$avatar));
			
            echo 'add';
		}
	}
	function editar($id,$nombre,$concentracion,$adicional,$precio,$empresa,$tipo,$presentacion){
		$sql="SELECT id_product FROM producto WHERE id_product!=:id and nombre=:nombre and concentracion=:concentracion and adicional=:adicional and prod_emp=:empresa and prod_tip_prod=:tipo and prod_present=:presentacion";
		$query = $this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id,':nombre'=>$nombre,':concentracion'=>$concentracion,':adicional'=>$adicional,':empresa'=>$empresa,':tipo'=>$tipo,':presentacion'=>$presentacion));
		$this->objetos=$query->fetchall();
		if(!empty($this->objetos)){
			
            echo 'noedit';
		}
		else{
			$sql="UPDATE producto SET nombre=:nombre, concentracion=:concentracion, adicional=:adicional, prod_emp=:empresa, prod_tip_prod=:tipo, prod_present=:presentacion, precio=:precio where id_product=:id";
			$query = $this->acceso->prepare($sql);
			$query->execute(array(':id'=>$id,':nombre'=>$nombre,':concentracion'=>$concentracion,':adicional'=>$adicional,':empresa'=>$empresa,':tipo'=>$tipo,':presentacion'=>$presentacion,':precio'=>$precio));
            echo 'edit';
		}
	}
    function buscar(){
		if(!empty($_POST['consulta'])){
			$consulta=$_POST['consulta'];
			$sql="SELECT id_product, producto.nombre as nombre, concentracion, adicional, precio, empresa.nombre as empresa, tipo_producto.nombre as tipo, presentacion.nombre as presentacion, producto.avatar as avatar, prod_emp,prod_tip_prod,prod_present
            FROM producto 
            JOIN empresa on prod_emp=id_empresa
            JOIN tipo_producto on prod_tip_prod=id_tip_prod
            JOIN presentacion on prod_present=id_presentacion and producto.nombre LIKE :consulta LIMIT 25;";
			$query= $this->acceso->prepare($sql);
			$query->execute(array(':consulta'=>"%$consulta%"));
			$this->objetos=$query->fetchall();
			return $this->objetos;
		}
		else{
			$sql="SELECT id_product, producto.nombre as nombre, concentracion, adicional, precio, empresa.nombre as empresa, tipo_producto.nombre as tipo, presentacion.nombre as presentacion, producto.avatar as avatar, prod_emp,prod_tip_prod,prod_present
            FROM producto 
            JOIN empresa on prod_emp=id_empresa
            JOIN tipo_producto on prod_tip_prod=id_tip_prod
            JOIN presentacion on prod_present=id_presentacion and producto.nombre not LIKE '' order by producto.nombre LIMIT 25;";
			$query= $this->acceso->prepare($sql);
			$query->execute();
			$this->objetos=$query->fetchall();
			return $this->objetos;
		}
	}
	function cambiar_logo($id,$nombre){
		$sql="UPDATE producto SET avatar=:nombre WHERE id_product=:id";
		$query=$this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id,':nombre'=>$nombre));
	}
	function borrar($id){
		$sql="DELETE FROM producto WHERE id_product=:id";
		$query=$this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id));
		if(!empty($query->execute(array(':id'=>$id)))){
			echo 'borrado';
		}
		else{
			echo 'noborrado';
		}
	}
	function obtener_stock($id){
		$sql="SELECT SUM(stock) as total FROM lote where lote_id_prod=:id";
		$query=$this->acceso->prepare($sql);
		$query->execute(array(':id'=>$id));
		$this->objetos=$query->fetchall();
		return $this->objetos;
	}
	function buscar_id($id){
			$sql="SELECT id_product, producto.nombre as nombre, concentracion, adicional, precio, empresa.nombre as empresa, tipo_producto.nombre as tipo, presentacion.nombre as presentacion, producto.avatar as avatar, prod_emp,prod_tip_prod,prod_present
            FROM producto 
            JOIN empresa on prod_emp=id_empresa
            JOIN tipo_producto on prod_tip_prod=id_tip_prod
            JOIN presentacion on prod_present=id_presentacion WHERE id_product=:id";
			$query= $this->acceso->prepare($sql);
			$query->execute(array(':id'=>$id));
			$this->objetos=$query->fetchall();
			return $this->objetos;
		}
	}

?>