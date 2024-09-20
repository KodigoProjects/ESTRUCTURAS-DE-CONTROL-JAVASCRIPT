
//FUCNION PARA CALCULAR EDAD
const mayorEdad = () => {
    // Obtiene el valor del input
    const edad = document.getElementById("edad").value;
    const resultadoEdad = document.getElementById("resultadoEdad");

    if (edad < 0) {
        resultadoEdad.innerHTML = "Ingrese una edad válida";
    } else if (edad >= 18 && edad < 100) {
        resultadoEdad.innerHTML = "Es mayor de edad";
    } else if (edad >= 101 && edad <= 120) {
        resultadoEdad.innerHTML = "Es un anciano, quizá ya muerto ☠💀, ya no califica";
    } else if (edad > 120) {
        resultadoEdad.innerHTML = "Usted ya esta bien muerto ☠💀";
    } else {
        resultadoEdad.innerHTML = "Es menor de edad";
    }
}


// PARA CALCULAR LA NOTA FINAAL DE UN ALUMNO
const calcularNotaFinal = () => {
    const nombre = document.getElementById("nombre").value;
    const carnet = document.getElementById("carnet").value;
    const examen = parseFloat(document.getElementById("examen").value);
    const tareas = parseFloat(document.getElementById("tareas").value);
    const asistencia = parseFloat(document.getElementById("asistencia").value);
    const investigacion = parseFloat(document.getElementById("investigacion").value);
    const resultadoNota = document.getElementById("resultadoNota");

    // Validacciones todas nacas pero aqui van
    if (isNaN(examen) || isNaN(tareas) || isNaN(asistencia) || isNaN(investigacion)) {
        resultadoNota.innerHTML = "Por favor ingrese todas las calificaciones que se muestran.";
        return;
    } else if (examen < 0 || tareas < 0 || asistencia < 0 || investigacion < 0) {
        alert("El valor de las calificaciones no puede ser menor que cero.");
        return;
    } else if (examen > 10 || tareas > 10 || asistencia > 10 || investigacion > 10) {
        alert("El valor de las calificaciones no puede ser mayor que 10.");
        return;
    }
    // multiplicando por 0.20, 0.40, 0.10 y 0.30  los cuales estos son los procentajes d elas notas
    const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    // Mostrar el resultado
    resultadoNota.innerHTML = `Alumno: ${nombre} <br> Carnet: ${carnet} <br> Nota Final: ${notaFinal.toFixed(2)}`;
}


//funcion para saber que numero es mayor
const numeroMayor = () => {
    const numero1 = parseFloat(document.getElementById("num1").value);
    const numero2 = parseFloat(document.getElementById("num2").value);
    const resultadoMayor = document.getElementById("resultadoMayor");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoMayor.innerHTML = "Por favor ingrese los dos números.";
        return;
    }
    if (numero1 > numero2) {
        resultadoMayor.innerHTML = `El número ${numero1} es mayor que el número ${numero2}`;
    } else if (numero1 < numero2) {
        resultadoMayor.innerHTML = `El número ${numero2} es mayor que el número ${numero1}`;
    } else {
        resultadoMayor.innerHTML = `Los números son iguales`;
    }

}


// Función para calcular el descuento de los coches (Ejercicio 5)
function calcularDescuento() {
    const coche = document.getElementById('coche').value;
    let descuento = 0;
    let nombreCoche = '';

    switch (coche) {
        case 'ford-fiesta':
            descuento = 5;
            nombreCoche = 'Ford Fiesta';
            break;
        case 'ford-focus':
            descuento = 10;
            nombreCoche = 'Ford Focus';
            break;
        case 'ford-escape':
            descuento = 20;
            nombreCoche = 'Ford Escape';
            break;
        default:
            descuento = 0;
            nombreCoche = 'ninguno';
    }

    document.getElementById('resultadoDescuento').innerText =
        `El coche seleccionado es ${nombreCoche} y el descuento es del ${descuento}%.`;
}
