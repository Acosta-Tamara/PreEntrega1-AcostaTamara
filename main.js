const productos = [
    {nombre: "taza", precio: 100 },
    {nombre: "plato", precio: 50 }, 
    {nombre: "maceta", precio: 200 },
    {nombre: "tazon", precio: 100 },

];

let carrito = []

let seleccion = prompt("Hola. ¿Le gustaria comprar algun producto artesanal, si o no?")

while(seleccion != "si" && seleccion != "no") {
    alert("Ingrese si o no")
    seleccion = prompt("Hola, desea comprar un producto si o no")
}

if(seleccion == "si"){
    alert("se desplegara la lista de productos")
    console.log(productos)
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$" )  
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("¡Hasta la proxima!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto al carrito")
    let precio = 0

    if(producto == "taza" || producto == "plato" || producto == "maceta" || producto == "tazon" ) {
       switch(producto) {
          case "taza":
           precio = 100;
            break;
          case "plato":
            precio = 50;
             break;
          case "maceta":
            precio = 200;
            break;
          case "tazon":
            precio = 100;
             break;
          default:
            break;
            
       } 
       let unidades = parseInt(prompt("¿Cuantas unidades desea llevar?"))

       carrito.push({producto, unidades, precio})
       console.log(carrito)
    } else{
        alert("No contamos con stock de ese producto")
    }
    

seleccion = prompt("¿Le gustaria seguir comprando?")

while (seleccion === "no")
alert("Gracias por su compra! Hasta la Proxima")
}