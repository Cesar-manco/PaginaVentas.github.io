<?php
include '../Modelo/Lote.php';
$lote = new Lote();
if($_POST['funcion']=='crear'){
    $id_producto = $_POST['id_producto'];
    $proveedor = $_POST['proveedor'];
    $stock = $_POST['stock'];
    $vencimiento = $_POST['vencimiento'];
    $lote->crear($id_producto,$proveedor,$stock,$vencimiento);
}
if($_POST['funcion']=='editar'){
    $id_lote = $_POST['id'];
    $stock = $_POST['stock'];
    $lote->editar($id_lote,$stock);
}
if($_POST['funcion']=='buscar'){
    $lote ->buscar();
    $json=array();
    foreach($lote->objetos as $objeto){
        $json[]=array(
            'id'=>$objeto->id_lote,
            'nombre'=>$objeto->prod_nom,
            'concentracion'=>$objeto->concentracion,
            'adicional'=>$objeto->adicional,
            'vencimiento'=>$objeto->vencimiento,
            'proveedor'=>$objeto->proveedor,
            'stock'=>$objeto->stock,
            'empresa'=>$objeto->emp_nom,
            'tipo'=>$objeto->tipo_nom,
            'presentacion'=>$objeto->pre_nom,
            'avatar'=>'../img/prod/'.$objeto->logo,
            
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
}
if($_POST['funcion']=='borrar'){
$id=$_POST['id'];
$lote->borrar($id);
}
?>