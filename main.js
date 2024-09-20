
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
    //esto de aqui es como el de la operadora de claro, de seleccionar algo para hacer algo
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

const calcularDescuentoViaje = () => {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    let descuento = 0;

    if (origen === 'palma') {
        if (destino === 'la costa del sol')
            descuento = 5;
        else if (destino === 'panchimalco')
            descuento = 10;
        else if (destino === 'puerto el triunfo')
            descuento = 15;
    }
    //creo que podria hacerlo con un switch
    document.getElementById('resultadoViaje').innerText = descuento > 0 ? `El viaje de ${origen} a ${destino} tiene un descuento del ${descuento}%.` : `No se aplica descuento para el viaje seleccionado valio papu.`;

}

const calcularEstadisticas = () => {
    let negativos = 0, positivos = 0, multiplosDe15 = 0, acumuladoPares = 0;

    // Iterar 10 veces para obtener los valores ingresados por el usuario
    for (let i = 1; i <= 10; i++) {
        // obtengo cada uno de los valores de los inputs y los convierto a numero entero si no es un numero o esta vacio sera 0
        const valor = parseInt(document.getElementById(`valor${i}`).value) || 0;

        // si lo valores pertenecen a algo se incrementar el valor de cada uno
        negativos += valor < 0 ? 1 : 0;
        positivos += valor > 0 ? 1 : 0;
        multiplosDe15 += valor % 15 === 0 ? 1 : 0;
        acumuladoPares += valor % 2 === 0 ? valor : 0;
    }

    document.getElementById('resultadoNegativos').innerText = `Cantidad de valores negativos: ${negativos}`;
    document.getElementById('resultadoPositivos').innerText = `Cantidad de valores positivos: ${positivos}`;
    document.getElementById('resultadoMultiplos').innerText = `Cantidad de múltiplos de 15: ${multiplosDe15}`;
    document.getElementById('resultadoPares').innerText = `Valor acumulado de los números pares: ${acumuladoPares}`;
}

const mostrarTabla = () => {
    const numero = parseInt(document.getElementById('numero').value) || 0;
    let resultado = '';

    if (numero === 0)
        resultado = 'Porfavor solo meta un numero, solo eso le pido ahiiii claramente dice intruduzca un numero';
    else {
        resultado = `<h3>Tabla de multiplicar del numero ${numero}:</h3>`;
        for (let i = 1; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i}<br>`;
        }
    }
    document.getElementById('resultadoTabla').innerHTML = resultado;
}


const convertirTemperatura = () => {
    const celsius = parseFloat(document.getElementById('celsius').value) || 0;
    const fahrenheit = (celsius * 9 / 5) + 32;

    let mensaje = `La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F. `;

    if (fahrenheit >= 14 && fahrenheit <= 32)
        mensaje += 'Temperatura baja';
    else if (fahrenheit > 32 && fahrenheit <= 68)
        mensaje += 'Temperatura adecuada';
    else if (fahrenheit > 68 && fahrenheit <= 96)
        mensaje += 'Temperatura alta';
    else
        mensaje += 'Temperatura desconocida';

    document.getElementById('resultadoTemperatura').innerText = mensaje;
}

const calcularPromedios = () => {
    // Turno Mañana 
    const edadesManana = [
        parseInt(document.getElementById('edadM1').value) || 0,
        parseInt(document.getElementById('edadM2').value) || 0,
        parseInt(document.getElementById('edadM3').value) || 0,
        parseInt(document.getElementById('edadM4').value) || 0,
        parseInt(document.getElementById('edadM5').value) || 0
    ];
    const promedioManana = edadesManana.reduce((a, b) => a + b, 0) / edadesManana.length;

    // Turno Tard   
    const edadesTarde = [
        parseInt(document.getElementById('edadT1').value) || 0,
        parseInt(document.getElementById('edadT2').value) || 0,
        parseInt(document.getElementById('edadT3').value) || 0,
        parseInt(document.getElementById('edadT4').value) || 0,
        parseInt(document.getElementById('edadT5').value) || 0,
        parseInt(document.getElementById('edadT6').value) || 0
    ];
    const promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;

    // Turno Noche 
    const edadesNoche = [
        parseInt(document.getElementById('edadN1').value) || 0,
        parseInt(document.getElementById('edadN2').value) || 0,
        parseInt(document.getElementById('edadN3').value) || 0,
        parseInt(document.getElementById('edadN4').value) || 0,
        parseInt(document.getElementById('edadN5').value) || 0,
        parseInt(document.getElementById('edadN6').value) || 0,
        parseInt(document.getElementById('edadN7').value) || 0,
        parseInt(document.getElementById('edadN8').value) || 0,
        parseInt(document.getElementById('edadN9').value) || 0,
        parseInt(document.getElementById('edadN10').value) || 0,
        parseInt(document.getElementById('edadN11').value) || 0
    ];
    const promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

    // Mostrar los promedios
    document.getElementById('resultadoManana').innerText = `Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}`;
    document.getElementById('resultadoTarde').innerText = `Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}`;
    document.getElementById('resultadoNoche').innerText = `Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}`;

    // Determinar el turno con el promedio mayor
    let mayorPromedio = 'mañana';
    let maxPromedio = promedioManana;

    if (promedioTarde > maxPromedio) {
        mayorPromedio = 'tarde';
        maxPromedio = promedioTarde;
    }

    if (promedioNoche > maxPromedio) {
        mayorPromedio = 'noche';
        maxPromedio = promedioNoche;
    }

    // Mostrar el mensaje con el turno de mayor promedio
    document.getElementById('resultadoMayor').innerText = `El turno con el promedio de edades mayor es el turno de ${mayorPromedio} con un promedio de ${maxPromedio.toFixed(2)}.`;
}
