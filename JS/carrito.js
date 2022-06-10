$(document).ready(function(){
    calcularTotal()
    RecuperarLS_carrito();
    RecuperarLS_carrito_compra()
    Contar_producto();
    $(document).on('click','.agregar-carrito',(e)=>{
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
        const id = $(elemento).attr('prodId');
        const nombre=$(elemento).attr('prodNombre');
        const concentracion=$(elemento).attr('prodConcentracion');
        const adicional=$(elemento).attr('prodAdicional');
        const precio=$(elemento).attr('prodPrecio');
        const empresa=$(elemento).attr('prodEmpresa');
        const tipo=$(elemento).attr('prodTipo');
        const presentacion=$(elemento).attr('prodPresentacion');
        const avatar=$(elemento).attr('prodAvatar');
        const stock=$(elemento).attr('prodStock');
        const producto={
            id: id,
            nombre: nombre,
            concentracion: concentracion,
            adicional: adicional,
            precio: precio,
            empresa: empresa,
            tipo: tipo,
            presentacion: presentacion,
            avatar: avatar,
            stock: stock,
            cantidad:1
        }
        let id_producto;
        let productos;
        productos = RecuperarLS();
        productos.forEach(prod => {
            if(prod.id===producto.id){
                id_producto=prod.id;
            }
        });
        if(id_producto===producto.id){
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El producto ya existe'
            })
        }
        else{
            template=`
            <tr prodId="${producto.id}">
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.concentracion}</td>
                <td>${producto.adicional}</td>
                <td>${producto.precio}</td>
                <td><button class="borrar-producto btn btn-danger"><i class="fas fa-times-circle"></i></button></td>
            </tr>
        `;
        $('#lista').append(template);
        AgregarLS(producto);
        let contador;
        Contar_producto();

        }
    })
    $(document).on('click','.borrar-producto',(e)=>{
        const elemento = $(this)[0].activeElement.parentElement.parentElement;
        const id = $(elemento).attr('prodId');
        elemento.remove();
        Eliminar_productoLS(id);
        Contar_producto();
        calcularTotal();
    })
    $(document).on('click','#vaciar-carrito',(e)=>{
        $('#lista').empty();
        EliminarLS();
        Contar_producto();
    })
    $(document).on('click','#procesar-pedido',(e)=>{
        Procesar_pedido();
    })
    $(document).on('click','#procesar-compra',(e)=>{
        Procesar_compra();
    })

    function RecuperarLS(){
        let productos;
        if(localStorage.getItem('productos')===null){
            productos=[];
        }
        else{
            productos= JSON.parse(localStorage.getItem('productos'))
        }
        return productos
    }

    function AgregarLS(producto){
        let productos;
        productos = RecuperarLS();
        productos.push(producto);
        localStorage.setItem('productos',JSON.stringify(productos))
    }
    function RecuperarLS_carrito(){
        let productos, id_producto;
        productos = RecuperarLS();
        funcion = "buscar_id";
        productos.forEach(producto => {
            id_producto =producto.id;
            $.post('../Controlador/ProductoController.php',{funcion,id_producto},(response)=>{
                let template_carrito='';
                let json= JSON.parse(response);
                template_carrito=`
                        <tr prodId="${json.id}">
                            <td>${json.id}</td>
                            <td>${json.nombre}</td>
                            <td>${json.concentracion}</td>
                            <td>${json.adicional}</td>
                            <td>${json.precio}</td>
                            <td><button class="borrar-producto btn btn-danger"><i class="fas fa-times-circle"></i></button></td>
                        </tr>
                `;
                $('#lista').append(template_carrito);
            })
        });
    }
    function Eliminar_productoLS(id){
        let productos;
        productos = RecuperarLS();
        productos.forEach(function(producto,indice) {
            if(producto.id===id){
                productos.splice(indice,1);
            }
        });
        localStorage.setItem('productos',JSON.stringify(productos));
    }
    function EliminarLS(){
        localStorage.clear();
    }
    function Contar_producto(){
        let productos;
        let contador=0;
        productos=RecuperarLS();
        productos.forEach(producto => {
            contador++;
        });
        $('#contador').html(contador);
    }
    function Procesar_pedido(){
        let productos;
        productos = RecuperarLS();
        if(productos.length===0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El carrito esta vacio'
            })
        }
        else{
            location.href= '../Vista/adm_compra.php';
        }
    }
    function RecuperarLS_carrito_compra(){
        let productos,id_producto;
        productos = RecuperarLS();
        funcion = "buscar_id";
        productos.forEach(producto => {
            id_producto =producto.id;
            $.post('../Controlador/ProductoController.php',{funcion,id_producto},(response)=>{
                let template_compra='';
                let json= JSON.parse(response);
                template_compra=`
                        <tr prodId="${producto.id}" prodPrecio="${json.precio}">
                                <td>${json.nombre}</td>
                                <td>${json.stock}</td>
                                <td class="precio">${json.precio}</td>
                                <td>${json.concentracion}</td>
                                <td>${json.adicional}</td>
                                <td>${json.empresa}</td>
                                <td>${json.presentacion}</td>
                                <td>
                                    <input type="number" min"1" class="form-control cantidad_producto" value="${producto.cantidad}">
                                </td>
                        <td class="subtotales">
                            <h5>${json.precio*producto.cantidad}</h5>
                        </td>
                        <td><button class="borrar-producto btn btn-danger"><i class="fas fa-times-circle"></i></button></td>
                    </tr>
                `;
                $('#lista-compra').append(template_compra);
            })
        });
    }
    $(document).on('click','#actualizar',(e)=>{
        let productos,precios;
        precios=document.querySelectorAll('.precio');
        productos=RecuperarLS();
        productos.forEach(function(producto,indice) {
            producto.precio=precios[indice].textContent;
        });
        localStorage.setItem('productos',JSON.stringify(productos));
        calcularTotal()
    })
    $('#cp').keyup((e)=>{
        let id, cantidad, producto, productos,montos,precio;
        producto= $(this)[0].activeElement.parentElement.parentElement;
        id = $(producto).attr('prodId');
        precio=$(producto).attr('prodPrecio');
        cantidad = producto.querySelector('input').value;
        montos = document.querySelectorAll('.subtotales');
        productos = RecuperarLS();
        productos.forEach(function(prod,indice) {
            if(prod.id === id){
                prod.cantidad = cantidad;
                prod.precio = precio;
                montos[indice].innerHTML = `<h5>${cantidad*precio}</5>`;
            }
        });
        localStorage.setItem('productos',JSON.stringify(productos));
        calcularTotal()
    })

    function calcularTotal(){
        let productos,subtotal,con_igv,total_sin_descueto,pago,vuelto,descuento;
        let total=0, igv=0.18;

        productos=RecuperarLS();
        productos.forEach(producto => {
            let subtotal_producto= Number(producto.precio * producto.cantidad);
            total=total+subtotal_producto;
        });
        pago=$('#pago').val();
        descuento=$('#descuento').val();

        total_sin_descueto=total.toFixed(2);
        con_igv=parseFloat(total*igv).toFixed(2);
        subtotal=parseFloat(total-con_igv).toFixed(2);

        total=total-descuento;
        vuelto=pago-total;
        $('#subtotal').html(subtotal);
        $('#con_igv').html(con_igv);
        $('#total_sin_descuento').html(total_sin_descueto);
        $('#total').html(total.toFixed(2));
        $('#vuelto').html(vuelto.toFixed(2));

    }
    function Procesar_compra(){
        let nombre,dni;
        nombre=$('#cliente').val();
        dni=$('#dni').val();
        if(RecuperarLS().length == 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay productos, seleccione algunos'
            }).then(function(){
                location.href= '../Vista/admin.php';
            })
        }   
        else if(nombre==''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Necesitamos un nombre de cliente'
            })
        }
        else{
            Verificar_stock().then(error=>{
                if(error==0){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se realizo la compra',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Hay conflicto en el stock de algun producto'
                    })
                }
            });
        }
    }
    async function Verificar_stock(){
        let productos;
        
        funcion ='verificar_stock';
        productos= RecuperarLS();
        const response = await fetch('../Controlador/ProductoController.php',{
            method:'POST',
            headers:{'Content-type':'application/x-www-form-urlencoded'},
            body:'funcion='+funcion+'&&productos='+JSON.stringify(productos)
        })
        let error= await response.text();

        return error;
    }
})