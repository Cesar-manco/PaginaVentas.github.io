$(document).ready(function(){
    var funcion='';
    var id_usuario = $('#id_usuario').val();
    var edit=false;

    buscar_usuario(id_usuario);
    function buscar_usuario(dato){
        funcion='buscar_usuario';
        $.post('../Controlador/Usuario_Controller.php',{dato,funcion},(response)=>{
            let nombre ='';
            let apellido =''
            let edad ='';
            let dni ='';
            let tipo ='';
            let telefono ='';
            let residencia ='';
            let correo ='';
            let sexo ='';
            let adicional ='';
            const usuario = JSON.parse(response);
            nombre+=`${usuario.nombre}`;
            apellido+=`${usuario.apellido}`;
            edad+=`${usuario.edad}`;
            dni+=`${usuario.dni}`;
            tipo+=`${usuario.tipo}`;
            telefono+=`${usuario.telefono}`;
            residencia+=`${usuario.residencia}`;
            correo+=`${usuario.correo}`;
            sexo+=`${usuario.sexo}`;
            adicional+=`${usuario.adicional}`;
            $('#nom_user').html(nombre);
            $('#apellido_us').html(apellido);
            $('#edad_user').html(edad);
            $('#dni_user').html(dni);
            $('#us_tipo').html(tipo);
            $('#telefono_user').html(telefono);
            $('#residencia_user').html(residencia);
            $('#email').html(correo);
            $('#sexo_user').html(sexo);
            $('#adicional_user').html(adicional);
        })
    }
    $(document).on('click','.edit',(e)=>{
        funcion='capturar_datos';
        edit=true;
        $.post('../Controlador/Usuario_Controller.php',{funcion,id_usuario},(response)=>{
            const usuario = JSON.parse(response);
            $('#telefono').val(usuario.telefono);
            $('#residencia').val(usuario.residencia);
            $('#correo').val(usuario.correo);
            $('#sexo').val(usuario.sexo);
            $('#adicional').val(usuario.adicional);
        })
    });
    $('#form-usuario').submit(e=>{
        if(edit==true)
        {
            let telefono=$('#telefono').val();
            let residencia=$('#residencia').val();
            let correo=$('#correo').val();
            let sexo=$('#sexo').val();
            let adicional=$('#adicional').val();
            funcion='editar_usuario';
            $.post('../Controlador/Usuario_Controller.php',{id_usuario,funcion,telefono,residencia,correo,sexo,adicional},(response)=>{
                if(response=='editado');
                {
                    $('#editado').hide('slow');
                    $('#editado').show(1000);
                    $('#editado').hide(5000);
                    $('#form-usuario').trigger('reset');
                }
                edit=false;
                buscar_usuario(id_usuario);
            })
        }
        else
        {
            $('#noeditado').hide('slow');
            $('#noeditado').show(1000);
            $('#noeditado').hide(5000);
            $('#form-usuario').trigger('reset');
        }
        e.preventDefault();
    });
    $('#form-pass').submit(e=>{
        let oldpass=$('#oldpass').val();
        let newpass=$('#newpass').val();
        funcion = 'cambiar_contra';
        $.post('../Controlador/Usuario_Controller.php',{id_usuario,funcion,oldpass,newpass},(response)=>{
            if(response=='update'){
                $('#update').hide('slow');
                $('#update').show(1000);
                $('#update').hide(3000);
                $('#form-pass').trigger('reset');
            }else{
                $('#editado').hide('slow');
                $('#noupdate').show(1000);
                $('#noupdate').hide(3000);
                $('#form-pass').trigger('reset');
            }
        })
        e.preventDefault();
    })
})