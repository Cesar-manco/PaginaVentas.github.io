<?php
include '../Modelo/Empresa.php';
$empresa=new Empresa();
if($_POST['funcion']=='crear'){
    $nombre = $_POST['nombre_empresa'];
    $avatar='senati.png';
    $empresa->crear($nombre,$avatar);
}
if($_POST['funcion']=='editar'){
    $nombre = $_POST['nombre_empresa'];
    $id_editado= $_POST['id_editado'];
    $empresa->editar($nombre,$id_editado);
}
if($_POST['funcion']=='buscar'){
   $empresa->buscar();
   $json=array();
   foreach($empresa->objetos as $objeto){
       $json[]=array(
           'id'=>$objeto->id_empresa,
           'nombre'=>$objeto->nombre,
           'avatar'=>'../img/lab/'.$objeto->avatar
       );
   }
   $jsonstring = json_encode($json);
   echo $jsonstring;
}
if($_POST['funcion']=='cambiar_logo'){
    $id=$_POST['id_logo_lab'];
    if(($_FILES['photo']['type']=='image/jpeg')||($_FILES['photo']['type']=='image/png')||($_FILES['photo']['type']=='image/gif')){
        $nombre=uniqid().'-'.$_FILES['photo']['name'];
        $ruta='../img/lab/'.$nombre;
        move_uploaded_file($_FILES['photo']['tmp_name'],$ruta);
        $empresa->cambiar_logo($id,$nombre);
        foreach($empresa->objetos as $objeto){
            if($objeto->avatar!='senati.png'){
                unlink('../img/lab/'.$objeto->avatar);
            }
        }
        $json=array();
        $json[]=array(
            'ruta'=>$ruta,
            'alert'=>'edit'
        );
        $jsonstring = json_encode($json[0]);
        echo $jsonstring;
    }
    else{
        $json=array();
        $json[]=array(
            'alert'=>'noedit'
        );
        $jsonstring = json_encode($json[0]);
        echo $jsonstring;
    }
}
if($_POST['funcion']=='borrar'){
    $id=$_POST['id'];
    $empresa->borrar($id);
}
if($_POST['funcion']=='rellenar_empresas'){
    $empresa->rellenar_Empresas();
    $json= array();
    foreach($empresa->objetos as $objeto){
        $json[]=array(
            'id'=>$objeto->id_empresa,
            'nombre'=>$objeto->nombre
        );
    }
    $jsonstring=json_encode($json);
    echo $jsonstring;
}
?>