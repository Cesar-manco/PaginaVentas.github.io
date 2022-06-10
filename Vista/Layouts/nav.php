  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="../css/main.css">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="../Css/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../Css/adminlte.min.css">
  <!-- Select2 style -->
  <link rel="stylesheet" href="../Css/select2.css">
  <!--Estilo procesar Compra-->
  <link rel="stylesheet" href="../Css/compra.css">
  <!-- sweetalert style -->
  <link rel="stylesheet" href="../Css/sweetalert2.css">
</head>
<body class="hold-transition sidebar-mini">
	<!-- Site wrapper -->
	<div class="wrapper">
  	<!-- Navbar -->
  		<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    		<!-- Left navbar links -->
    		<ul class="navbar-nav">
      			<li class="nav-item">
        			<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      			</li>
      			<li class="nav-item d-none d-sm-inline-block">
        			<a href="../Vista/admin.php" class="nav-link">Home</a>
      			</li>
      			<li class="nav-item d-none d-sm-inline-block">
        			<a href="#" class="nav-link">Contact</a>
      			</li>
            <li class="nav-item dropdown" id="cat-carrito" style="display:none">
              <img src="../img/carrito.png" class="imagen-carrito nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              <span id="contador" class="contador badge badge-danger"></span>
              </img>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <table class="carro table table-hover text-nowrap p-0">
                  <thead class="table-success">
                    <tr>
                      <th>Codigo</th>
                      <th>Nombre</th>
                      <th>concentracion</th>
                      <th>adicional</th>
                      <th>precio</th>
                      <th>eliminar</th>
                    </tr>
                  </thead>
                  <tbody id="lista">

                  </tbody>
                </table>
                <a href="#" id="procesar-pedido" class="btn btn-danger btn-block">procesar Compra</a>
                <a href="#" id="vaciar-carrito" class="btn btn-primary btn-block">Vaciar Carrito</a>
              </ul>
            </li>
    		</ul>
    		<!-- Right navbar links -->
    		<ul class="navbar-nav ml-auto">
      		<a href="../Controlador/Logout.php">Cerrar Sesion</a>

      	    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../Vista/admin.php" class="brand-link">
      <img src="../img/admin.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Productos</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img id="avatar4" src="../img/admin.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">
          	<?php
          	echo $_SESSION['nom_user'];
          	?>
          </a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          
          <li class="nav-header">Usuario</li>
          <li class="nav-item">
            <a href="editar_datos.php" class="nav-link">
              <i class="nav-icon fas fa-user-cog"></i>
              <p>
                Datos Personales
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="adm_usuario.php" class="nav-link">
              <i class="nav-icon fas fa-user"></i>
              <p>
                Gestion Usuarios
              </p>
            </a>
          </li>

          <li class="nav-header">Almacen</li>
          <li class="nav-item">
            <a href="adm_atributo.php" class="nav-link">
              <i class="nav-icon fas fa-vials"></i>
              <p>
                Gestion atributo
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="adm_lote.php" class="nav-link">
              <i class="nav-icon fas fa-cubes"></i>
              <p>
                Gestion Lote
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="adm_producto.php" class="nav-link">
              <i class="nav-icon fas fa-chart-line"></i>
              <p>
                Gestion Producto
              </p>
            </a>
          </li>
          <li class="nav-header">Compras</li>
          <li class="nav-item">
            <a href="adm_proveedor.php" class="nav-link">
              <i class="nav-icon fas fa-truck"></i>
              <p>
                Gestion Proveedor
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>