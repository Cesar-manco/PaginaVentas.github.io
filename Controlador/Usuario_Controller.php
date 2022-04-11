<?php
    include_once '../Modelo/Usuario.php';
    $usuario = new Usuario();
    if($_POST['funcion']=='buscar_usuario'){
        $json=array();
        $fecha_actual = new DateTime();
        $usuario->obtener_datos($_POST['dato']);
        foreach ($usuario->objetos as $objeto){
            $nacimiento = new DateTime($objeto->edad_user);
            $edad = $nacimiento->diff($fecha_actual);
            $diferencia = $edad->y;
            $json[]=array(
                'nombre'=>$objeto->nom_user,
                'apellido'=>$objeto->apellido_us,
                'edad'=>$diferencia,
                'dni'=>$objeto->dni_user,
                'tipo'=>$objeto->nombre_tipo_us,
                'telefono'=>$objeto->telefono_user,
                'residencia'=>$objeto->residencia_user,
                'correo'=>$objeto->email,
                'sexo'=>$objeto->sexo_user,
                'adicional'=>$objeto->adicional_user
            );
        }
        $jsonstring = json_encode($json[0]);
        echo $jsonstring;
    }
    if($_POST['funcion']=='capturar_datos'){
        $json=array();
        $id_usuario=$_POST['id_usuario'];
        $usuario->obtener_datos($id_usuario);
        foreach ($usuario->objetos as $objeto){
            $json[]=array(
                'telefono'=>$objeto->telefono_user,
                'residencia'=>$objeto->residencia_user,
                'correo'=>$objeto->email,
                'sexo'=>$objeto->sexo_user,
                'adicional'=>$objeto->adicional_user
            );
        }
        $jsonstring = json_encode($json[0]);
        echo $jsonstring;
    }
    if($_POST['funcion']=='editar_usuario'){
        $id_usuario=$_POST['id_usuario'];
        $telefono=$_POST['telefono'];
        $residencia=$_POST['residencia'];
        $correo=$_POST['correo'];
        $sexo=$_POST['sexo'];
        $adicional=$_POST['adicional'];
        $usuario->editar($id_usuario,$telefono,$residencia,$correo,$sexo,$adicional);
        echo 'editado';
    }
    if($_POST['funcion']=='cambiar_contra'){
        $id_usuario=$_POST['id_usuario'];
        $oldpass=$_POST['oldpass'];
        $newpass=$_POST['newpass'];
        $usuario->cambiar_contra($id_usuario,$oldpass,$newpass);
        
    }
?>