// 1) Definir dos categorías de productos
const categoria1 = "Electrónica";
const categoria2 = "Ropa";

// Crear una lista de productos con categorías
const productos = [
  { nombre: "Smartphone", categoria: categoria1, descripcion: "Un teléfono inteligente de última generación", precio: 50000 },
  { nombre: "Laptop", categoria: categoria1, descripcion: "Una laptop potente para trabajo y entretenimiento", precio: 90000 },
  { nombre: "Camiseta", categoria: categoria2, descripcion: "Una camiseta de algodón suave y cómoda", precio: 3200 },
  { nombre: "Pantalones", categoria: categoria2, descripcion: "Pantalones casuales para cualquier ocasión", precio: 6300 }
];

// 2) Saludar al usuario
alert("¡Bienvenido a nuestra tienda en línea!");

// 3) Mostrar categorías de productos disponibles
alert("Categorías de productos disponibles: " + categoria1 + ", " + categoria2);

// 4) Mostrar la lista de productos ordenados alfabéticamente
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
let listaProductos = "Productos disponibles:\n";
for (const producto of productos) {
  listaProductos += `${producto.nombre} - ${producto.categoria}\n`;
}
const productoElegido = prompt(listaProductos + "¿Qué producto desea comprar?");

// 5) Buscar el producto deseado
let productoEncontrado = null;
for (const producto of productos) {
  if (producto.nombre === productoElegido) {
    productoEncontrado = producto;
    break;
  }
}

if (productoEncontrado) {
  // Mostrar detalles del producto y confirmar la compra
  const confirmacion = confirm(`Producto: ${productoEncontrado.nombre}\nDescripción: ${productoEncontrado.descripcion}\nPrecio: $${productoEncontrado.precio}\n¿Desea completar la compra?`);

  if (confirmacion) {
    // Generar una fecha de entrega ficticia
    const fechaEntrega = new Date();
    fechaEntrega.setDate(fechaEntrega.getDate() + 7); // Entrega en 7 días
    alert(`¡Gracias por su compra! Su pedido será entregado el ${fechaEntrega.toDateString()}`);
  } else {
    alert("Gracias por visitar nuestra tienda. Si cambia de opinión, estaremos aquí para ayudar.");
  }
} else {
  // El producto no se encontró
  const intentarNuevamente = confirm("El producto seleccionado no se encuentra en nuestro inventario. ¿Desea intentar nuevamente?");
  if (intentarNuevamente) {
    // Puedes redirigir al usuario nuevamente al punto 4 si lo desea.
    alert("Por favor, elija un producto de la lista.");
  } else {
    alert("Gracias por visitar nuestra tienda. Si cambia de opinión, estamos aquí para ayudar.");
  }
}
