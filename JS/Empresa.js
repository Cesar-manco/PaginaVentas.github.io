$(document).ready(function(){
    buscar_Emp();
    var funcion;
    var edit=false;
    $('#form-crear-empresa').submit(e=>{
        let nombre_empresa = $('#nombre-empresa').val();
        let id_editado = $('#id_editar_emp').val();
        if(edit==false){
            funcion='crear';
        }
        else{
            funcion='editar';
        }
        $.post('../Controlador/EmpresaController.php',{nombre_empresa,id_editado,funcion},(response)=>{
            if(response== 'add'){
                $('#add-empresa').hide('slow');
                $('#add-empresa').show(1000);
                $('#add-empresa').hide(3000);
                $('#form-crear-empresa').trigger('reset');
                buscar_Emp();
            }
            if(response== 'noadd'){
                $('#noadd-empresa').hide('slow');
                $('#noadd-empresa').show(1000);
                $('#noadd-empresa').hide(3000);
                $('#form-crear-empresa').trigger('reset');
            }
            if(response== 'edit'){
                $('#edit-emp').hide('slow');
                $('#edit-emp').show(1000);
                $('#edit-emp').hide(3000);
                $('#form-crear-empresa').trigger('reset');
                buscar_Emp();
            }
            edit==false;
        })
        e.preventDefault();
    });
    function buscar_Emp(consulta){
        funcion = 'buscar';
        $.post('../Controlador/EmpresaController.php',{consulta,funcion},(response)=>{
            const empresas = JSON.parse(response);
            let template=``;
            empresas.forEach(empresa => {
                template+=`
                    <tr labId="${empresa.id}" labNombre="${empresa.nombre}" labAvatar="${empresa.avatar}">
                        <td>
                            <button class="avatar btn btn-info" title="cambiar logo de empresa" type="button" data-toggle="modal" data-target="#cambiologo">
                                <i class="far fa-image"></i>
                            </button>
                            <button class="editar btn btn-success" title="editar empresa" type="button" data-toggle="modal" data-target="#crearempresa">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button class="borrar btn btn-danger" title="Borrar empresa"> 
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                        <td>
                            <img src="${empresa.avatar}" class="img-fluid rounded" width="70" heigth="70">
                        </td>
                        <td>${empresa.nombre}</td>
                    </tr>
                `;
                
            });
            $('#empresas').html(template);

        });
    }
    $(document).on('keyup','#buscar-empresa',function(){
        let valor = $(this).val();
        if(valor != ''){
            buscar_Emp(valor);
        }
        else{
            buscar_Emp();
        }
    })
    $(document).on('click','.avatar',(e)=>{
        funcion = "cambiar_logo";
        const elemento = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(elemento).attr('labId');
        const nombre = $(elemento).attr('labNombre');
        const avatar = $(elemento).attr('labAvatar');
        $('#logoactual').attr('src',avatar);
        $('#nombre_logo').html(nombre);
        $('#funcion').val(funcion);
        $('#id_logo_lab').val(id);
    })
    $('#form-logo').submit(e=>{
        let formData = new FormData($('#form-logo')[0]);
        $.ajax({
            url:'../Controlador/EmpresaController.php',
            type:"POST",
            data:formData,
            cache:false,
            processData: false,
            contentType: false
        }).done(function(response){
            const json = JSON.parse(response);
            if(json.alert == 'edit'){
                $('#logoactual').attr('src',json.ruta)
                $('#form-logo').trigger('reset');
                $('#edit').hide('slow');
                $('#edit').show(1000);
                $('#edit').hide(3000);
                buscar_Emp();
            }
            else{
                $('#noedit').hide('slow');
                $('#noedit').show(1000);
                $('#noedit').hide(3000);
                $('#form-logo').trigger('reset');
            }

        });
        e.preventDefault();
    })
    $(document).on('click','.borrar',(e)=>{
        funcion = "borrar";
        const elemento = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(elemento).attr('labId');
        const nombre = $(elemento).attr('labNombre');
        const avatar = $(elemento).attr('labAvatar');

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-1'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Desea Eliminar?',
            text: "No podras revertir esto!",
            imageUrl:''+avatar+'',
            imageWidth: 100,
            imageHeight: 100,
            showCancelButton: true,
            confirmButtonText: 'Si, borra esto',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                $.post('../Controlador/EmpresaController.php',{id,funcion},(response)=>{
                    edit==false;
                    if(response=='borrado'){
                        swalWithBootstrapButtons.fire(
                            'Borrado',
                            'El laboratorio '+nombre+' fue borrado :)',
                            'success'
                            )
                            buscar_Emp();
                    }
                    else{
                        swalWithBootstrapButtons.fire(
                            'No se pudo Borrar',
                            'El laboratorio '+nombre+'no fue borrado :)',
                            'error'
                            )
                            
                    }
                })
                
            } else if (result.dismiss === Swal.DismissReason.cancel ) {
                swalWithBootstrapButtons.fire(
                'Cancelado',
                'El laboratorio '+nombre+' no fue borrado :)',
                'error'
                )
            }
        })
    })
    $(document).on('click','.editar',(e)=>{
        const elemento = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(elemento).attr('labId');
        const nombre = $(elemento).attr('labNombre');
        $('#id_editar_emp').val(id);
        $('#nombre-empresa').val(nombre);
        edit=true;
    })
});