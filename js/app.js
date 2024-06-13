//Ejercicio 1
let cursos = [
    { nombre: 'Matemáticas', codigo: 'MAT101', estudiantes: [{ nombre: 'Juan', nota: 7 }, { nombre: 'María', nota: 5 }], profesor: 'Dr. Pérez' },
    { nombre: 'Historia', codigo: 'HIS102', estudiantes: [{ nombre: 'Ana', nota: 8 }, { nombre: 'Luis', nota: 6 }], profesor: 'Dra. Gómez' },
    // Agrega más cursos aquí
];

const agregarCurso = (cursoAAgregar) => {
    cursos.push(cursoAAgregar)
}

const agregarEstudianteACurso = (estudiante, curso) => {
    curso.estudiantes.push(estudiante)
}

const promedioNotasCurso = (curso) => {
    let sumaTotalNotas = 0
    curso.estudiantes.forEach(estudiante => {
        sumaTotalNotas += estudiante.nota
    })
    return sumaTotalNotas / curso.estudiantes.length
}

const cursosDeProfesor = (profesor) => {
    return cursos.filter(curso => curso.profesor == profesor)
}

const estudianteAproboCurso = (estudiante, curso) => {
    //if (!!curso.estudiantes.find(e => e.nombre == estudiante.nombre)) {
        
    //}
    const estudianteABuscar = curso.estudiantes.find(e => e.nombre == estudiante.nombre)
    if (estudianteABuscar.nota >= 6) {
        console.log("Esta aprobado")
    }
    else {
        console.log("No esta aprobado")
    }
}

//Ejercicio 2
let estudiantes = [
    { nombre: 'Juan', nota: 8 },
    { nombre: 'María', nota: 9 },
    { nombre: 'Ana', nota: 7 }
];

const extraerNombres = (estudiantes) => {
    estudiantesNombres = []
    estudiantes.map(estudiante => estudiantesNombres.push(estudiante.nombre))
    return estudiantesNombres
}

//Ejercicio 3
let empleados = [
    { nombre: 'Alice', salario: 3000 },
    { nombre: 'Bob', salario: 4000 },
    { nombre: 'Charlie', salario: 5000 }
];

const aumentarSalario = (empleados) => {
    empleados.forEach(empleado => empleado.salario *= 1.1)
}

//Ejercicio 4

const div = document.getElementById("juan-pablo")
const h5 = div.getElementsByTagName("h5")
const edadDiv = div.getElementsByClassName("edad")
const edad = edadDiv[0].getElementsByTagName("span")
const tituloDiv = div.getElementsByClassName("titulo")
const titulo = tituloDiv[0].getElementsByTagName("span")
const ocupacionDiv = div.getElementsByClassName("ocupacion")
const ocupacion = ocupacionDiv[0].getElementsByTagName("span")

const Persona = {
    'nombreCompleto': h5[0].textContent,
    'edad': edad[0].textContent,
    'titulo': titulo[0].textContent,
    'ocupacion': ocupacion[0].textContent,
    'saludar': function() {
        console.log(`Hola! Soy ${this.nombreCompleto}, mi edad es ${this.edad} y mi actual ocupación es ${this.ocupacion}`)
    }
}

//Ejercicio 5

const fondoImagen = document.getElementById("fondo-imagen")
const cambiarImagen = () => {
    const bgImg = fondoImagen.style.backgroundImage
    if (bgImg === 'url("assets/img/bg-showcase-1.jpg")') {
        fondoImagen.style.backgroundImage = 'url("assets/img/bg-showcase-3.jpg")'
    }
    else {
        fondoImagen.style.backgroundImage = 'url("assets/img/bg-showcase-1.jpg")'
    }
}

const boton = document.getElementById("cambiar-imagen")
boton.addEventListener('click', cambiarImagen)

//Ejercicio 6
let productos = [
    { nombre: 'Camisa', precio: 25 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 60 },
    { nombre: 'Sombrero', precio: 20 },
    { nombre: 'Sombrero', precio: 50 }
];

let ulProductos = document.getElementById('listaProducto')

document.addEventListener("DOMContentLoaded", () => {
    productos.forEach(p => {
        const nuevoProducto = document.createElement('li')
        nuevoProducto.textContent = `${p.nombre} - ${p.precio}`
        ulProductos.appendChild(nuevoProducto)
    })
})

const botonBuscar = document.getElementById("buscar-producto")

botonBuscar.addEventListener('click', () => {
    const input = document.getElementById('searchInput').value
    filtarProducto(input)
})

const filtarProducto = (nombreProducto) => {
    ulProductos.innerHTML = ''
    const productosFiltrados = productos.filter(p => p.nombre == nombreProducto)
    
    if (productosFiltrados.length === 0) {
        const msg = document.createElement('p')
        msg.textContent = `No se encontró el producto con nombre: "${nombreProducto}"`
        ulProductos.appendChild(msg)
    }
    else {
        productosFiltrados.forEach(p => {
            const nuevoProducto = document.createElement('li')
            nuevoProducto.textContent = `${p.nombre} - ${p.precio}`
            ulProductos.appendChild(nuevoProducto)
    })
}}