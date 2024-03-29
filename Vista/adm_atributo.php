<?php
session_start();
if($_SESSION['us_tipo'] ==1 || $_SESSION['us_tipo'] ==3){
	include_once 'Layouts/header.php';
?>
    <title>Admin | Atributo </title>
<?php 
	include_once 'Layouts/nav.php';
?>
<div class="modal fade" id="cambiologo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cambiar Logo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="text-center">
            <img id='logoactual' src="../img/admin.jpg" class="profile-user-img img-fluid img-circle">
        </div>
        <div class="text-center">
            <b id="nombre_logo">
            </b>
        </div>
        <div class="alert alert-success text-center" id="edit" style='display:none;'>
            <span><i class="fas fa-check m-1"></i>Se edito el Logo correctamente</span>
        </div>
        <div class="alert alert-danger text-center" id="noedit" style='display:none;'>
            <span><i class="fas fa-times m-1"></i>Formato no soportado</span>
        </div>
        <form id="form-logo" enctype="multipart/form-data">
            <div class="input-group mb-3 ml-5 mt-2">
                <input type="file" name="photo" class="input-group">
                <input type="hidden" name="funcion" id="funcion">
                <input type="hidden" name="id_logo_lab" id="id_logo_lab">
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn bg-gradient-primary">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="crearempresa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="card card-success">
                <div class="card-header">
                    <h3 class="card-title">Guardar Empresa</h3>
                    <button data-dismiss="modal" aria-label="close" class="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body">
                    <div class="alert alert-success text-center" id="add-empresa" style='display:none;'>
                        <span><i class="fas fa-check m-1"></i>Se Agregó Correctamente</span>
                    </div>
                    <div class="alert alert-danger text-center" id="noadd-empresa" style='display:none;'>
                        <span><i class="fas fa-times m-1"></i>La empresa ya existe</span>
                    </div>
                    <div class="alert alert-success text-center" id="edit-emp" style='display:none;'>
                        <span><i class="fas fa-check m-1"></i>Se Edito Correctamente</span>
                    </div>
                    <form id="form-crear-empresa">
                        <div class="form-group">
                            <label for="nombre-empresa">Nombres</label>
                            <input id="nombre-empresa"type="text" class="form-control" placeholder="Ingrese nombre" required>
                            <input type="hidden" id="id_editar_emp">
                        </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn bg-gradient-primary float-right m-1">Guardar</button>
                            <button type="button" data-dismiss="modal"class="btn btn-outline-secondary float-right m-1">Close</button>
                        </div>
                    </form> 
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="creartipo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="card card-success">
                <div class="card-header">
                    <h3 class="card-title">Crear Tipo</h3>
                    <button data-dismiss="modal" aria-label="close" class="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body">
                <div class="alert alert-success text-center" id="add-tipo" style='display:none;'>
                        <span><i class="fas fa-check m-1"></i>Se Agregó Correctamente</span>
                    </div>
                    <div class="alert alert-danger text-center" id="noadd-tipo" style='display:none;'>
                        <span><i class="fas fa-times m-1"></i>El tipo ya existe</span>
                    </div>
                    <div class="alert alert-success text-center" id="edit-tip" style='display:none;'>
                        <span><i class="fas fa-check m-1"></i>Se Edito Correctamente</span>
                    </div>
                    <form id="form-crear-tipo">
                        <div class="form-group">
                            <label for="nombre-tipo">Nombres</label>
                            <input id="nombre-tipo"type="text" class="form-control" placeholder="Ingrese nombre" required>
                            <input type="hidden" id="id_editar_tip">
                        </div>
                    </div>
                        <div class="card-footer">
                            <button type="submit" class="btn bg-gradient-primary float-right m-1">Guardar</button>
                            <button type="button" data-dismiss="modal"class="btn btn-outline-secondary float-right m-1">Close</button>
                </div>
                    </form> 
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="crearpresentacion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="card card-success">
                <div class="card-header">
                    <h3 class="card-title">Crear Presentacion</h3>
                    <button data-dismiss="modal" aria-label="close" class="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body">
                <div class="alert alert-success text-center" id="add-pre" style='display:none;'>
                        <span><i class="fas fa-check m-1"></i>Se Agregó Correctamente</span>
                    </div>
                    <div class="alert alert-danger text-center" id="noadd-pre" style='display:none;'>
                        <span><i class="fas fa-times m-1"></i>La presentacion ya existe</span>
                    </div>
                    <div class="alert alert-success text-center" id="edit-pre" style='display:none;'>
                        <span><i class="fas fa-check m-1"></i>Se Edito Correctamente</span>
                    </div>
                    <form id="form-crear-presentacion">
                        <div class="form-group">
                            <label for="nombre-presentacion">Nombres</label>
                            <input id="nombre-presentacion"type="text" class="form-control" placeholder="Ingrese nombre" required>
                            <input type="hidden" id="id_editar_">
                        </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn bg-gradient-primary float-right m-1">Guardar</button>
                            <button type="button" data-dismiss="modal"class="btn btn-outline-secondary float-right m-1">Close</button>
                        </div>
                    </form> 
            </div>
        </div>
    </div>
</div>
  <!-- /.content-wrapper -->
<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Gestion Atributos</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Hombre</a></li>
                        <li class="breadcrumb-item"><a href="#">Gestion atributos</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <ul class="nav nav-pills">
                                <li class="nav-item"><a href="#empresa" class="nav-link active" data-toggle="tab">Empresa</a></li>
                                <li class="nav-item"><a href="#tipo" class="nav-link" data-toggle="tab">Tipo</a></li>
                                <li class="nav-item"><a href="#presentacion" class="nav-link" data-toggle="tab">Presentacion</a></li>
                            </ul>
                        </div>
                        <div class="card-body p-0">
                            <div class="tab-content">
                                <div class="tab-pane active" id='empresa'>
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <div class="card-title">Buscar Empresa <button type="button" data-toggle="modal" data-target="#crearempresa" class="btn bg-gradient-primary btn-sm m-2">Crear empresa</button></div>
                                            <div class="input-group">
                                                <input id="buscar-empresa"type="text" class="form-control float-left" placeholder="Ingrese Nombre">
                                                <div class="input-group-append">
                                                    <button class="btn btn-default"><i class="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-0 table-responsive">
                                            <table class="table table-hover text-nowrap">
                                                <thead class="table-success">
                                                    <tr>
                                                        <th>Accion</th>
                                                        <th>Logo</th>
                                                        <th>Empresas</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="table-active" id="empresas">

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer">


                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id='tipo'>
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <div class="card-title">Buscar Tipo <button type="button" data-toggle="modal" data-target="#creartipo" class="btn bg-gradient-primary btn-sm m-2">Crear Tipo</button></div>
                                            <div class="input-group">
                                                <input id="buscar-tipo" type="text" class="form-control float-left" placeholder="Ingrese Nombre">
                                                <div class="input-group-append">
                                                    <button class="btn btn-default"><i class="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-0 table-responsive">
                                            <table class="table table-hover text-nowrap">
                                                <thead class="table-success">
                                                    <tr>
                                                        <th>Accion</th>
                                                        <th>Tipos</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="table-active" id="tipos">

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer"></div>
                                    </div>
                                </div>
                                <div class="tab-pane" id='presentacion'>
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <div class="card-title">Buscar Presentacion <button type="button" data-toggle="modal" data-target="#crearpresentacion" class="btn bg-gradient-primary btn-sm m-2">Crear presentacion</button></div>
                                            <div class="input-group">
                                                <input id="buscar-presentacion" type="text" class="form-control float-left" placeholder="Ingrese Nombre">
                                                <div class="input-group-append">
                                                    <button class="btn btn-default"><i class="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-0 table-responsive">
                                            <table class="table table-hover text-nowrap">
                                                <thead class="table-success">
                                                    <tr>
                                                        <th>Accion</th>
                                                        <th>Presentacion</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="table-active" id="presentaciones">

                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-footer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>


<?php
include_once 'Layouts/footer.php';
}
else{
	header('Location: ../login.php');
}
?>
<script src="../JS/Empresa.js"></script>
<script src="../JS/Tipo.js"></script>
<script src="../JS/Presentacion.js"></script>