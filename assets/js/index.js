//ESTRUCTURA DE DATOS

 var Producto = function(
     id,
     titulo,
     descripcion,
     precio,
     imagen,
     linkCompra
 ) {
    return {
        id: id,
        precio: precio,
        descripcion: descripcion,
        imagen: imagen,
        linkCompra: linkCompra,
        titulo: titulo,
    }
}

 var listaProductos = []
 

//OPERACIONES DE PRODUCTO
// CREAR CARD
// Agregar al Carrito (localStorage)

var productoToCard = function(producto) {
    return `
                <div class="card">
                    <div class="card__img">
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                </div>
                    <div class="card__item">
                        <h3>${producto.titulo}</h3>
                        <h2 class="item__price">${producto.precio}</h2>
                        <a href="${producto.linkCompra}" class="btn__Buy">Comprar!</a>
                    </div>
                </div>`
                
} 

//Operaciones de ListaProductos
//Agregar Producto

var listaAdd = function(producto) {
    listaProductos.push(producto);
}

// Generar el HTML de la lista

var listaToHtml = function(lista) {
    var html ="";

    for (var indice in lista) {
            hmtl += productoToCard(lista[indice]);
        }

        return html;
    }

    /*
        var listaToHtml = function(lista) {
            return lista.map(productoToCard).join("";)
        }

    var listaToHtmlReduce = function(lista) {
        return lista.reduce(function(prev, actual) {
            return prev + productoToCard(actual)
        },    ""    )
    }
    */

    // INTERFAZ

    function iniciarInterfaz() {
            listaAdd(listaProductos, producto(
                1,
                "Iphone",
                1500,
                "#"
            ))
            var html = listaToHtml(listaProductos)

            document.querySelector("#card").innerHTML = html
    }

    iniciarInterfaz();