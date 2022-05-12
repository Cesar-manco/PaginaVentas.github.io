$(document).ready(function(){
    var funcion;
    var edit =false;
    $('.select2').select2();
    rellenar_Empresas();
    rellenar_tipos();
    rellenar_presentaciones();
    buscar_producto();

    function rellenar_Empresas(){
        funcion ="rellenar_empresas";
        $.post('../Controlador/EmpresaController.php',{funcion},(response)=>{
            const empresas = JSON.parse(response);
            let template='';
            empresas.forEach(empresa => {
                template+=`
                    <option value="${empresa.id}">${empresa.nombre}</option>
                `;
            });
            $('#empresa').html(template);
        })
    }
    function rellenar_tipos(){
        funcion ="rellenar_tipos";
        $.post('../Controlador/TipoController.php',{funcion},(response)=>{
            const tipos = JSON.parse(response);
            let template='';
            tipos.forEach(tipo => {
                template+=`
                    <option value="${tipo.id}">${tipo.nombre}</option>
                `;
            });
            $('#tipo').html(template);
        })
    }
    function rellenar_presentaciones(){
        funcion ="rellenar_presentaciones";
        $.post('../Controlador/PresentacionController.php',{funcion},(response)=>{
            const presentaciones = JSON.parse(response);
            let template='';
            presentaciones.forEach(presentacion => {
                template+=`
                    <option value="${presentacion.id}">${presentacion.nombre}</option>
                `;
            });
            $('#presentacion').html(template);
        })
    }
    $('#form-crear-producto').submit(e=>{
        let id=$('#id_edit_prod').val();
        let nombre = $('#nombre-producto').val();
        let concentracion = $('#concentracion').val();
        let adicional = $('#adicional').val();
        let precio = $('#precio').val();
        let empresa =$('#empresa').val();
        let tipo = $('#tipo').val();
        let presentacion = $('#presentacion').val();
        if(edit == true){
          funcion= "editar";
        }
        else{
          funcion= "crear";
        }
        $.post('../Controlador/ProductoController.php',{funcion,id,nombre,concentracion,adicional,precio,empresa,tipo,presentacion},(response)=>{
          
          if(response=='add'){
                $('#add').hide('slow');
                $('#add').show(1000);
                $('#add').hide(3000);
                $('#form-crear-producto').trigger('reset');
                buscar_producto();
            }
            if(response=='edit'){
                $('#edit_prod').hide('slow');
                $('#edit_prod').show(1000);
                $('#edit_prod').hide(3000);
                $('#form-crear-producto').trigger('reset'); 
                buscar_producto();
            }
            else{
              $('#noadd').hide('slow');
                $('#noadd').show(1000);
                $('#noadd').hide(3000);
                $('#form-crear-producto').trigger('reset');
            }
        });
        e.preventDefault();
    });
    function buscar_producto(consulta){
        funcion ="buscar";
        $.post('../Controlador/ProductoController.php',{consulta,funcion},(response)=>{
            const productos = JSON.parse(response);
            let template='';
            productos.forEach(producto => {
                template+=`
                <div prodId="${producto.id}" prodNombre="${producto.nombre}" prodPrecio="${producto.precio}" prodConcentracion="${producto.concentracion}" prodAdicional="${producto.adicional}" prodEmpresa="${producto.empresa_id}" prodTipo="${producto.tipo_id}" prodPresentacion="${producto.presentacion_id}" prodAvatar="${producto.avatar}"class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                <div class="card bg-light">
                  <div class="card-header text-muted border-bottom-0">
                  <i class="fas fa-lg fa-cubes mr-1"></i>${producto.stock}
                  </div>
                  <div class="card-body pt-0">
                    <div class="row">
                      <div class="col-7">
                        <h2 class="lead"><b>${producto.nombre}</b></h2>
                        <h4 class="lead"><b><i class="fas fa-lg fa-dollar-sign mr-1"></i>${producto.precio}</b></h4>
                        <ul class="ml-4 mb-0 fa-ul text-muted">
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-file"></i></span> concentracion: ${producto.concentracion}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-file-alt"></i></span> Adicional : ${producto.adicional}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-school"></i></span> Empresa : ${producto.empresa}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-book-reader"></i></span> Tipo : ${producto.tipo}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-book-open"></i></span> Presentacion : ${producto.presentacion}</li>
                        </ul>
                      </div>
                      <div class="col-5 text-center">
                        <img src="${producto.avatar}" alt="user-avatar" class="img-circle img-fluid">
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="text-right">
                      <button class="avatar btn btn-sm bg-teal" type="button" data-toggle="modal" data-target="#cambiologo">
                        <i class="fas fa-image"></i>
                      </button>
                      <button class="editar btn btn-sm btn-success" type="button" data-toggle="modal" data-target="#crearproducto">
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button class="lote btn btn-sm btn-primary">
                        <i class="fas fa-plus-square"></i>
                      </button>
                      <button class="borrar btn btn-sm btn-danger">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            });
            $('#productos').html(template);
        });
    }
    $(document).on('keyup','#buscar-producto',function(){
        let valor = $(this).val();
        if(valor!=""){
            buscar_producto(valor);
        }
        else{
            buscar_producto();
        }
    });
    $(document).on('click','.avatar',(e)=>{
        funcion = "cambiar_avatar";
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
        const id = $(elemento).attr('prodId');
        const avatar=$(elemento).attr('prodAvatar');
        const nombre=$(elemento).attr('prodNombre');
        $('#funcion').val(funcion);
        $('#id_logo_prod').val(id);
        $('#avatar').val(avatar);
        $('#logoactual').attr('src',avatar);
        $('#nombre_logo').html(nombre);
    });
    $('#form-logo').submit(e=>{
      let formData = new FormData($('#form-logo')[0]);
      $.ajax({
        url: '../Controlador/ProductoController.php',
        type: 'POST',
        data:formData,
        cahe:false,
        processData:false,
        contentType:false
      }).done(function(response){
        const json = JSON.parse(response);
        if(json.alert=='edit'){
          $('#logoactual').attr('src',json.ruta);
          $('#edit').hide('slow');
          $('#edit').show(1000);
          $('#edit').hide(3000);
          $('#form-logo').trigger('reset');
          buscar_producto();
        }
        else{
          $('#noedit').hide('slow');
          $('#noedit').show(1000);
          $('#noedit').hide(3000);
          $('#form-logo').trigger('reset');
        }
      });
      e.preventDefault();
    });
    $(document).on('click','.editar',(e)=>{
      const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
      const id = $(elemento).attr('prodId');
      const nombre=$(elemento).attr('prodNombre');
      const concentracion=$(elemento).attr('prodConcentracion');
      const adicional=$(elemento).attr('prodAdicional');
      const precio=$(elemento).attr('prodPrecio');
      const empresa=$(elemento).attr('prodEmpresa');
      const tipo=$(elemento).attr('prodTipo');
      const presentacion=$(elemento).attr('prodPresentacion');
      
      $('#id_edit_prod').val(id);
      $('#nombre-producto').val(nombre);
      $('#concentracion').val(concentracion);
      $('#adicional').val(adicional);
      $('#precio').val(precio);
      $('#empresa').val(empresa).trigger('change');
      $('#tipo').val(tipo).trigger('change');
      $('#presentacion').val(presentacion).trigger('change');
      edit = true;
  });
})
