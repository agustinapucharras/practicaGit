let nombre = "agus"

document.getElementById("h3").innerHTML = "2025"

let perritos = ["polo", "kira", "uma"]

let gatitos = ["michifu", "clotilde", "titi"]

let animales = gatitos.concat(perritos)

console.log(animales)

// ... pido todo lo q tiene adentro, spread operator
let animales2 = [...gatitos,perritos]

let alumno = {
    nombre:"pepe",
    edad: 24
}

let alumnoNuevo = {...alumno, estadoCivil:"soltero"}
console.log(alumnoNuevo)