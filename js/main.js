// FUNKOS PRODUCTOS
const productos = [
  // famosos
  {
    id: "famosos-01",
    titulo: "Mr. Bean",
    imagen: "/img/Famosos/been.jpg",
    categoria: {
      nombre: "Famosos",
      id: "famosos",
    },
    precio: 15000,
  },
  {
    id: "famosos-02",
    titulo: "Da Vinci",
    imagen: "/img/Famosos/davinci.jpg",
    categoria: {
      nombre: "Famosos",
      id: "famosos",
    },
    precio: 16000,
  },
  {
    id: "famosos-03",
    titulo: "Einstein",
    imagen: "/img/Famosos/einstein.jpg",
    categoria: {
      nombre: "Famosos",
      id: "famosos",
    },
    precio: 10000,
  },
  {
    id: "famosos-04",
    titulo: "Inspector Gadget",
    imagen: "/img/Famosos/inspector.jpg",
    categoria: {
      nombre: "Famosos",
      id: "famosos",
    },
    precio: 12000,
  },
  {
    id: "famosos-05",
    titulo: "Marilyn Monroe",
    imagen: "/img/Famosos/marylin.jpg",
    categoria: {
      nombre: "Famosos",
      id: "famosos",
    },
    precio: 15000,
  },

  {
    id: "famosos-05",
    titulo: "Monopoly",
    imagen: "/img/Famosos/monopoly.jpg",
    categoria: {
      nombre: "Famosos",
      id: "famosos",
    },
    precio: 9000,
  },

  // Musica
  {
    id: "musica-01",
    titulo: "ACDC",
    imagen: "/img/Musica/acdc.jpg",
    categoria: {
      nombre: "Musica",
      id: "musica",
    },
    precio: 15000,
  },
  {
    id: "musica-02",
    titulo: "Elvis",
    imagen: "/img/Musica/elvis.jpg",
    categoria: {
      nombre: "Musica",
      id: "musica",
    },
    precio: 10000,
  },
  {
    id: "musica-03",
    titulo: "Freddie Mercury",
    imagen: "/img/Musica/freddie.jpg",
    categoria: {
      nombre: "Musica",
      id: "musica",
    },
    precio: 20000,
  },
  {
    id: "musica-04",
    titulo: "John Lennon",
    imagen: "/img/Musica/john.jpg",
    categoria: {
      nombre: "Musica",
      id: "musica",
    },
    precio: 12000,
  },
  {
    id: "musica-05",
    titulo: "Lenny Kravitz",
    imagen: "/img/Musica/lenny.jpg",
    categoria: {
      nombre: "Musica",
      id: "musica",
    },
    precio: 13000,
  },
  {
    id: "musica-06",
    titulo: "Michael Jackson",
    imagen: "/img/Musica/michael.jpg",
    categoria: {
      nombre: "Musica",
      id: "musica",
    },
    precio: 10000,
  },

  // Peliculas
  {
    id: "peliculas-01",
    titulo: "Batman",
    imagen: "/img/Peliculas/batman.jpg",
    categoria: {
      nombre: "Peliculas",
      id: "peliculas",
    },
    precio: 15000,
  },
  {
    id: "peliculas-02",
    titulo: "Harry Potter",
    imagen: "/img/Peliculas/harrypotter.jpg",
    categoria: {
      nombre: "Peliculas",
      id: "peliculas",
    },
    precio: 13000,
  },
  {
    id: "peliculas-03",
    titulo: "Indiana Jones",
    imagen: "/img/Peliculas/indiana.jpg",
    categoria: {
      nombre: "Peliculas",
      id: "peliculas",
    },
    precio: 16000,
  },
  {
    id: "peliculas-04",
    titulo: "Spiderman",
    imagen: "/img/Peliculas/spiderman.jpg",
    categoria: {
      nombre: "Peliculas",
      id: "peliculas",
    },
    precio: 14000,
  },
  {
    id: "peliculas-05",
    titulo: "Star Wars",
    imagen: "/img/Peliculas/starwars.jpg",
    categoria: {
      nombre: "Peliculas",
      id: "peliculas",
    },
    precio: 18000,
  },

  {
    id: "peliculas-05",
    titulo: "Superman",
    imagen: "/img/Peliculas/superman.jpg",
    categoria: {
      nombre: "Peliculas",
      id: "peliculas",
    },
    precio: 12000,
  },
];

const contenedorProductos = document.getElementById("contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.getElementById("titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.getElementById("numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}" >Agregar</button>
    </div>
    `;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

//Escuchar las categorias y el active y filtrado de los id de categorias

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );

      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerHTML = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

//actualizar los botones de agregar y escucharlos

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

//Agregado de un array de los productos en el carrito

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );
  console.log(productoAgregado);

  //esto seria para que se agregue la cantidad en numero de producto repetido

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  //agregar esto al local storage

  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  );
}

//funcion para actualizar el numerito del carrito

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}

//Desplazamiento de la pagina a la seccion que corresponde

document.getElementById("inicio").addEventListener("click", function () {
  const seccionInicio = document.getElementById("tituloHero");
  seccionInicio.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("sobreNosotros").addEventListener("click", function () {
  const seccionSobreNosotros = document.getElementById("texto-sobreNosotros");
  seccionSobreNosotros.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("todos").addEventListener("click", function () {
  const seccionTodosLosProductos = document.getElementById(
    "contenedor-productos"
  );
  seccionTodosLosProductos.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contacto").addEventListener("click", function () {
  const seccionContacto = document.getElementById("seccion-contacto");
  seccionContacto.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contacto").addEventListener("click", function () {
  const seccionContacto = document.getElementById("contenedor-formulario");
  seccionContacto.scrollIntoView({ behavior: "smooth" });
});

//Validacion de formulario
