const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones ={
    usuario: /^[a-zA-Z0-9]{4,10}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+(\.(pe)|\.(edu)+\.(pe)+\.(com))$/,
    password: /^[\S]{4,10}$/
}

const Usuario = {
    usuario: false,
    /*existente: false,*/
    apellido: false,
    correo: false,
    correo2: false,
    password: false,
    password2: false
}

const validadFormulario = (e) =>{
    switch (e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario,e.target,'usuario');
            validarUsuario();
            /*let datos = new FormData(formulario);
            usuarioexistente(datos.get("usuario"));*/
            
        break;

        case "apellido":
            validarCampo(expresiones.usuario,e.target,'apellido');
            validarUsuario();
            /*let datos = new FormData(formulario);
            usuarioexistente(datos.get("usuario"));*/
            
        break;

        case "correo":
            validarCampo(expresiones.correo,e.target,'correo');
            validarcorreo();
        break;

        case "confirma-correo":
            validarCampo(expresiones.correo,e.target,'confirma-correo');
            validarcorreo();
        break;

        case "password":
            validarCampo(expresiones.password,e.target,'password');
            validarPassword();
        break;

        case "confirma-password":
            validarCampo(expresiones.password,e.target,'confirma-password');
            validarPassword();
        break;
    }
}

const validarCampo = (expresion,input,campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`contenedor-${campo}`).classList.remove('incorrecto');
        document.getElementById(`contenedor-${campo}`).classList.add('correcto');
        document.querySelector(`#contenedor-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#contenedor-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#contenedor-${campo} .input-error`).classList.remove('input-error-activo');
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
        Usuario[campo] = true;
    }else{
        document.getElementById(`contenedor-${campo}`).classList.add('incorrecto');
        document.getElementById(`contenedor-${campo}`).classList.remove('correcto');
        document.querySelector(`#contenedor-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#contenedor-${campo} .input-error`).classList.add('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario[campo] = false;
    }
}

function sinespeciales(e){
    key = e.keyCode || e.whitch;
    if(key == 8 || key ==13 || (key>=65 && key<=90) || (key>=97 && key<=122) || (key>=48 && key<=57)){
        return true;
    }else{
        document.querySelector(`#contenedor-usuario .input-error-especial`).classList.add('input-error-especial-activo');
        setTimeout(() => {
            document.querySelector(`#contenedor-usuario .input-error-especial`).classList.remove('input-error-especial-activo');
        }, 3000);
    }
    patron = /[A-Za-z0-9]/;
    tecla = String.fromCharCode(key);
    return patron.test(tecla);  
}

const validarUsuario = () =>{
    const inputusuario = document.getElementById('usuario');
    if(inputusuario.value ==""){
        document.getElementById(`contenedor-usuario`).classList.add('incorrecto');
        document.querySelector(`#contenedor-usuario .input-error`).classList.add('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario['usuario'] = false;
    }else if(!Usuario.usuario){
        document.getElementById(`contenedor-usuario`).classList.add('incorrecto');
        document.querySelector(`#contenedor-usuario .input-error`).classList.add('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario['usuario'] = false;
    }else{
        document.getElementById(`contenedor-usuario`).classList.remove('incorrecto');
        document.querySelector(`#contenedor-usuario .input-error`).classList.remove('input-error-activo');
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
        Usuario['usuario'] = true;
    }
}

const validarApellido = () =>{
    const inputusuario = document.getElementById('apellido');
    if(inputusuario.value ==""){
        document.getElementById(`contenedor-apellido`).classList.add('incorrecto');
        document.querySelector(`#contenedor-apellido .input-error`).classList.add('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Apellido['apellido'] = false;
    }else if(!Usuario.usuario){
        document.getElementById(`contenedor-apellido`).classList.add('incorrecto');
        document.querySelector(`#contenedor-apellido .input-error`).classList.add('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Apellido['apellido'] = false;
    }else{
        document.getElementById(`contenedor-apellido`).classList.remove('incorrecto');
        document.querySelector(`#contenedor-apellido .input-error`).classList.remove('input-error-activo');
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
        Apellido['apellido'] = true;
    }
}

const validarcorreo = () =>{
    const inputcorreo = document.getElementById('correo');
    const inputcorreo2 = document.getElementById('confirma-correo');

    if(inputcorreo.value !== inputcorreo2.value){
        document.getElementById(`contenedor-confirma-correo`).classList.add('incorrecto');
        document.getElementById(`contenedor-confirma-correo`).classList.remove('correcto');
        document.querySelector(`#contenedor-confirma-correo i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-confirma-correo i`).classList.remove('fa-check-circle');
        document.querySelector(`#contenedor-confirma-correo .input-error`).classList.add('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario['correo2'] = false;
    }
    else if(inputcorreo.value == "" && inputcorreo2.value == ""){
        document.getElementById(`contenedor-correo`).classList.add('incorrecto');
        document.getElementById(`contenedor-correo`).classList.remove('correcto');
        document.querySelector(`#contenedor-correo i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-correo i`).classList.remove('fa-check-circle');
        document.querySelector(`#contenedor-correo .input-error`).classList.add('input-error-activo');

        document.getElementById(`contenedor-confirma-correo`).classList.add('incorrecto');
        document.getElementById(`contenedor-confirma-correo`).classList.remove('correcto');
        document.querySelector(`#contenedor-confirma-correo i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-confirma-correo i`).classList.remove('fa-check-circle');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario['correo2'] = false;
    }else if(inputcorreo.value == inputcorreo2.value && !Usuario.correo){
        document.getElementById(`contenedor-confirma-correo`).classList.add('incorrecto');
        document.getElementById(`contenedor-confirma-correo`).classList.remove('correcto');
        document.querySelector(`#contenedor-confirma-correo i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-confirma-correo i`).classList.remove('fa-check-circle');
        document.querySelector(`#contenedor-confirma-correo .input-error`).classList.remove('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario['correo2'] = false;
    }else{
        document.getElementById(`contenedor-confirma-correo`).classList.remove('incorrecto');
        document.getElementById(`contenedor-confirma-correo`).classList.add('correcto');
        document.querySelector(`#contenedor-confirma-correo i`).classList.remove('fa-times-circle');
        document.querySelector(`#contenedor-confirma-correo i`).classList.add('fa-check-circle');
        document.querySelector(`#contenedor-confirma-correo .input-error`).classList.remove('input-error-activo');
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
        Usuario['correo2'] = true;
    }
}

const validarPassword = ()=>{
    const inputpassword = document.getElementById('password');
    const inputpassword2 = document.getElementById('confirma-password');

    if(inputpassword.value !== inputpassword2.value){
        document.getElementById(`contenedor-confirma-password`).classList.add('incorrecto');
        document.getElementById(`contenedor-confirma-password`).classList.remove('correcto');
        document.querySelector(`#contenedor-confirma-password i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-confirma-password i`).classList.remove('fa-check-circle');
        document.querySelector(`#contenedor-confirma-password .input-error`).classList.add('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario['password2'] = false;
    }else if(inputpassword.value == "" && inputpassword2.value == ""){
        document.getElementById(`contenedor-password`).classList.add('incorrecto');
        document.getElementById(`contenedor-password`).classList.remove('correcto');
        document.querySelector(`#contenedor-password .input-error`).classList.add('input-error-activo');
        document.querySelector(`#contenedor-password i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-password i`).classList.remove('fa-check-circle');

        document.getElementById(`contenedor-confirma-password`).classList.add('incorrecto');
        document.getElementById(`contenedor-confirma-password`).classList.remove('correcto');
        document.querySelector(`#contenedor-confirma-password i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-confirma-password i`).classList.remove('fa-check-circle');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        Usuario['password2'] = false;
    }else if(inputpassword.value == inputpassword2.value && !Usuario.password){
        document.getElementById(`contenedor-confirma-password`).classList.add('incorrecto');
        document.getElementById(`contenedor-confirma-password`).classList.remove('correcto');
        document.querySelector(`#contenedor-confirma-password i`).classList.add('fa-times-circle');
        document.querySelector(`#contenedor-confirma-password i`).classList.remove('fa-check-circle');
        document.querySelector(`#contenedor-confirma-password .input-error`).classList.remove('input-error-activo');
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
    }else{
        document.getElementById(`contenedor-confirma-password`).classList.remove('incorrecto');
        document.getElementById(`contenedor-confirma-password`).classList.add('correcto');
        document.querySelector(`#contenedor-confirma-password i`).classList.remove('fa-times-circle');
        document.querySelector(`#contenedor-confirma-password i`).classList.add('fa-check-circle');
        document.querySelector(`#contenedor-confirma-password .input-error`).classList.remove('input-error-activo');
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
        Usuario['password2'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validadFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const terminos = document.getElementById('terminos');

    if(Usuario.usuario && Usuario.correo2 && Usuario.correo && Usuario.password2 && Usuario.password && terminos.checked /*&& Usuario.existente*/){

        /*let datos = new FormData(formulario);
        prueba(datos.get("usuario"));*/

        formulario.reset();
        document.getElementById('fondo-ventana').classList.add('fondo-ventana-activo');
        setTimeout(() => {
            document.getElementById('fondo-ventana').classList.remove('fondo-ventana-activo');
        }, 1200);
        document.querySelectorAll('.correcto').forEach((icono) => {
            icono.classList.remove('correcto');
        });
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
        setTimeout(() => {
            window.location.replace("");
        }, 1200);
        let usuario = $('#usuario').val();
        let apellido = $('#apellido').val();
        let correo = $('#correo').val();
        let password = $('#password').val();
        funcion='crear_usuario';
        $.post('../Controlador/UsuarioController.php',{usuario,apellido,correo,password,funcion},(response)=>{
            console.log(response);
        });
            e.preventDefault();

    }else if(!Usuario.usuario && Usuario.correo2 && Usuario.correo && Usuario.password && Usuario.password2 && terminos.checked){
        validarUsuario();
    }else if(Usuario.usuario && !Usuario.correo2 && !Usuario.correo && Usuario.password && Usuario.password2 && terminos.checked){
        validarcorreo();
    }else if(Usuario.usuario && Usuario.correo2 && Usuario.correo && !Usuario.password && !Usuario.password2 && terminos.checked){
        validarPassword();
    }
    else if(!Usuario.usuario && !Usuario.correo2 && !Usuario.correo && Usuario.password && Usuario.password2 && terminos.checked){
        validarUsuario();
        validarcorreo();
    }
    else if(Usuario.usuario && !Usuario.correo2 && !Usuario.correo && !Usuario.password && !Usuario.password2 && terminos.checked){
        validarcorreo();
        validarPassword();
    }
    else if(!Usuario.usuario && Usuario.correo2 && Usuario.correo && !Usuario.password && !Usuario.password2 && terminos.checked){
        validarUsuario();
        validarPassword();
    }
    else if(!Usuario.usuario && !Usuario.correo2 && !Usuario.correo && !Usuario.password && !Usuario.password2 && terminos.checked){
        validarUsuario();
        validarcorreo();
        validarPassword();
    }else{
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
    }
});

