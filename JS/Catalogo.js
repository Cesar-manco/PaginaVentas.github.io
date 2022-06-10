$(document).ready(function(){
  $('#cat-carrito').show();
    buscar_producto();
    function buscar_producto(consulta){
        funcion ="buscar";
        $.post('../Controlador/ProductoController.php',{consulta,funcion},(response)=>{
            const productos = JSON.parse(response);
            let template='';
            productos.forEach(producto => {
                template+=`
                <div prodId="${producto.id}" prodStock="${producto.stock}" prodNombre="${producto.nombre}" prodPrecio="${producto.precio}" prodConcentracion="${producto.concentracion}" prodAdicional="${producto.adicional}" prodEmpresa="${producto.empresa_id}" prodTipo="${producto.tipo_id}" prodPresentacion="${producto.presentacion_id}" prodAvatar="${producto.avatar}"class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                <div class="card bg-light">
                  <div class="card-header text-muted border-bottom-0">
                  <i class="fas fa-lg fa-cubes mr-1"></i>${producto.stock}
                  </div>
                  <div class="card-body pt-0">
                    <div class="row">
                      <div class="col-7">
                      <h2 class="lead"><b>Codigo: ${producto.id}</b></h2>
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
                      <button class="agregar-carrito btn btn-sm btn-primary">
                        <i class="fas fa-plus-square mr-2"></i>Agregar al carrito
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
})