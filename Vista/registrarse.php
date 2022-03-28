<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" type="text/css" href="../Css/estiloRegistrar.css">
    <link rel="stylesheet" type="text/css" href="../Css/css/all.min.css">
</head>
<body class="contenedor-body">
    <header class="header">
        <div class="contenedor-header">
            <div class="contenedor-header-logo">
                <img class="img-logo" src="../img/logo1.png" alt="logo">
            </div>
        </div>
    </header>

    <main class="main">
        <div class="top-espacio">

        </div>
        <div class="contenedor-principal">
            <form method="post" class="formulario" name="formulario" id="formulario">
                <h2 class="titulo">Registro</h2>
                
                <!--Nombre de Usuario-->
                <div class="contenedor-form" id="contenedor-usuario">
                    <label for="usuario" class="label">Nombre de Usuario</label>
                    <div class="contenedor-input">
                        <input class="input" type="text" name="usuario" id="usuario">
                        <i class="validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="input-error">El usuario tiene que ser de 4 a 10 caracteres (solo puede contener numeros y letras)</p>
                    <p class="input-error-especial">No se aceptan simbolos</p>
                    <p class="input-error-existe">El nombre de usuario ya existe</p>
                </div>

                <!-- Apellido de Usuario-->
                <div class="contenedor-form" id="contenedor-apellido">
                    <label for="apellido" class="label">Apellido de Usuario</label>
                    <div class="contenedor-input">
                        <input class="input" type="text" name="apellido" id="apellido" >
                        <i class="validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="input-error">El Apellido tiene que ser de 4 a 10 caracteres (solo puede contener numeros y letras)</p>
                    <p class="input-error-especial">No se aceptan simbolos</p>
                    <p class="input-error-existe">El nombre de usuario ya existe</p>
                </div>
                
                <!--Correo electronico -->
                <div class="contenedor-form" id="contenedor-correo">
                    <label for="correo" class="label">Ingrese su Correo</label>
                    <div class="contenedor-input">
                        <input class="input" type="email" name="correo" id="correo">
                        <i class="validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="input-error">Por favor ingrese su correo</p>
                </div>
    
                <!--Confirmacion de correo-->
                <div class="contenedor-form" id="contenedor-confirma-correo">
                    <label for="confirma-correo" class="label">Confirmacion de correo</label>
                    <div class="contenedor-input">
                        <input class="input" type="email" name="confirma-correo" id="confirma-correo">
                        <i class="validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="input-error">Ambos correos deben ser iguales</p>
                </div>
    
                <!--Contraseña-->
                <div class="contenedor-form" id="contenedor-password">
                    <label for="password" class="label">Contraseña</label>
                    <div class="contenedor-input">
                        <input class="input" type="password" name="password" id="password">
                        <i class="validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="input-error">La contraseña debe tener de 4 a 10 digitos y sin espacios</p>
                </div>
    
                <!--Confirmacion de Contraseña-->
                <div class="contenedor-form" id="contenedor-confirma-password">
                    <label for="confirma-password" class="label">Confirmacion de contraseña</label>
                    <div class="contenedor-input">
                        <input class="input" type="password" name="confirma-password" id="confirma-password">
                        <i class="validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="input-error">Ambas contraseñas deben ser iguales</p>
                </div>
    
                <!--Terminos y condiciones-->
                <div class="contenedor-form" id="contenedor-terminos">
                    <label class="label">
                        <input class="checkbox" type="checkbox" name="terminos" id="terminos">
                        Acepto los terminos y condiciones
                    </label>
                </div>
    
                <!--Mensaje-->
                <div class="mensaje-error" id="mensaje-error">
                    <p><i class="fas fa-exclamation-triangle"></i><b>Error:</b> Por favor llene el formulario correctamente</p>
                </div>
    
                <!--Boton-->
                <div class="contenedor-form contenedor-btn-registrar">
                    <button type="submit" class="btn-registrar" name="registrar">Registrarse</button>
                </div>

                <!--Ya tienes cuenta?-->
                <div class="pregunta">
                    <p><a href="../Visa/login.php">Ya tienes cuenta?</a> Inicia Sesion</p>
                </div>

                <!--Cancelar-->
                <div class="cancelar">
                    <p><a href="Index.html">Cancelar</a></p>
                </div>

                <!--Ventana Emergente-->
                <div class="fondo-ventana" id="fondo-ventana">
                    <div class="ventana" id="ventana">
                        <i class="check-ventana fas fa-check-circle"></i>
                        <p class="mensaje-exito-ventana" id="mensaje-exito-ventana">Registro Exitoso </p>
                    </div>
                </div>
            </form>
        </div>
        <div class="bottom-espacio">

        </div>
    </main>

    <footer class="footer">
        <div class="contenedor-footer">
            <div class="contenedor-footer-titulo">
                <label class="footer-titulo">
                    &copy; 2021 Todos los derechos reservados
                </label>
            </div>
        </div>
        <div class="contenedor-footer-wave">
            <img src="../img/wave.png">
        </div>
    </footer>
    <script src="https://kit.fontawesome.com/f4085a8211.js" crossorigin="anonymous"></script>
    <script src="../JS/registrarse.js"></script>
    <script src="../JS/jquery.min.js"></script>
</body>
</html>