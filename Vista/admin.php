<?php
session_start();
if($_SESSION['us_tipo'] ==1 || $_SESSION['us_tipo'] ==3){
	include_once 'Layouts/header.php';
?>
  <title>AdminLTE 3 | Blank Page</title>
<?php 
	include_once 'Layouts/nav.php';
?>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Catalogo</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Catalogo</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section>
      <div class="container-fluid">
        <div class="card card-success">
          <div class="card-header">
            <h3 class="card-title">Buscar Producto</h3>
            <div class="input-group">
              <input type="text" id="buscar-producto" class="form-control float-left" placeholder="Ingrese nombre de Producto">
              <div class="input-group-append">
                <button class="btn btn-default"><i class="fas fa-search"></i></button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div id="productos" class="row d-flex align-items-strech">
            
            </div>
          </div>
          <div class="card-footer">
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /.content-wrapper -->



<?php
include_once 'Layouts/footer.php';
}
else{
	header('Location: ../login.php');
}
?>
<script src="../JS/Catalogo.js"></script>
<script src="../JS/Carrito.js"></script>
