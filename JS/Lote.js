$(document).ready(function(){
    var funcion;
    buscarLote();
    function buscarLote(consulta){
        funcion ="buscar";
        $.post('../Controlador/LoteController.php',{consulta,funcion},(response)=>{
            const lotes = JSON.parse(response);
            let template='';
            lotes.forEach(lote => {
                template+=`
                <div loteId="${lote.id}" loteStock="${lote.stock}" class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                <div class="card bg-light">
                  <div class="card-header text-muted border-bottom-0">
                  <h6>Codigo: ${lote.id}</h6>
                  <i class="fas fa-lg fa-cubes mr-1"></i>${lote.stock}
                  </div>
                  <div class="card-body pt-0">
                    <div class="row">
                      <div class="col-7">
                        <h2 class="lead"><b>${lote.nombre}</b></h2>
                        <ul class="ml-4 mb-0 fa-ul text-muted">
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-file"></i></span> concentracion: ${lote.concentracion}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-file-alt"></i></span> Adicional : ${lote.adicional}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-school"></i></span> Empresa : ${lote.empresa}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-book-reader"></i></span> Tipo : ${lote.tipo}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-book-open"></i></span> Presentacion : ${lote.presentacion}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-calendar-times"></i></span> Vencimiento : ${lote.vencimiento}</li>
                          <li class="small"><span class="fa-li"><i class="fas fa-lg fa-truck"></i></span> Proveedor : ${lote.proveedor}</li>
                        </ul>
                      </div>
                      <div class="col-5 text-center">
                        <img src="${lote.avatar}" alt="user-avatar" class="img-circle img-fluid">
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="text-right">

                      <button class="editar btn btn-sm btn-success" type="button" data-toggle="modal" data-target="#editarlote">
                        <i class="fas fa-pencil-alt"></i>
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
            $('#lotes').html(template);
        });
    }
    $(document).on('keyup','#buscar-lote',function(){
        let valor = $(this).val();
        if(valor!=""){
            buscarLote(valor);
        }
        else{
            buscarLote();
        }
    });
    $(document).on('click','.editar',(e)=>{
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
        const id = $(elemento).attr('loteId');
        const stock=$(elemento).attr('loteStock');
        
        $('#id_lote_prod').val(id);
        $('#stock').val(stock);
        $('#codigo_lote').html(id);
    });
    $('#form-editar-lote').submit(e=>{
        let id = $('#id_lote_prod').val();
        let stock = $('#stock').val();
        funcion = "editar";
        $.post('../Controlador/LoteController.php',{id,stock,funcion},(response)=>{
            if(response == 'edit'){
                $('#edit-lote').hide('slow');
                $('#edit-lote').show(1000);
                $('#edit-lote').hide(3000);
                $('#form-editar-lote').trigger('reset');
            }
            buscarLote();
        })
        e.preventDefault();
    });
    $(document).on('click','.borrar',(e)=>{
        funcion = "borrar";
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
        const id = $(elemento).attr('loteId');
    
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-1'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Desea Eliminar lote '+id+'?',
            text: "No podras revertir esto!",
            icon:"warning",
            showCancelButton: true,
            confirmButtonText: 'Si, borra esto',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                $.post('../Controlador/LoteController.php',{id,funcion},(response)=>{
                    if(response=='borrado'){
                        swalWithBootstrapButtons.fire(
                            'Borrado',
                            'El Lote '+id+' fue borrado :)',
                            'success'
                            )
                            buscarLote();
                    }
                    else{
                        swalWithBootstrapButtons.fire(
                            'No se pudo Borrar',
                            'El Lote '+id+'no fue borrado por que esta siendo usado :)',
                            'error'
                            )
                            
                    }
              })   
            } else if (result.dismiss === Swal.DismissReason.cancel ) {
                swalWithBootstrapButtons.fire(
                'Cancelado',
                'El lote '+id+' no fue borrado :)',
                'error'
                )
            }
          })
        })
})
