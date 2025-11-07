//-----DOM-----//
let botonAgregarIngreso = document.getElementById('boton-agregar-ingreso')
let registrosContainer = document.getElementById('registrosContainer')
let botonBorrarTotal = document.getElementById('boton-borrar-total')
// Notificaciones toast
const notificationEspacios = document.getElementById('notificationToastEspacios')

//-----Eventos-----//
botonAgregarIngreso.addEventListener('click', agregarIngreso)
botonBorrarTotal.addEventListener('click', borrarTodosDatos)

//-----Arrays, variables y classes-----//
// Variables temporales y array principal de ingresos
let ingresoNombre = ''
let ingresoCategoria = ''
let ingresoMonto = ''
let ingresos = []
let gastos = []
//Obtiene los datos de local storage
ingresos = JSON.parse(localStorage.getItem('ingreso'))
//Condicional que valida si hay o no datos en el local storage
if (ingresos === null) {
    ingresos = []
} else {
    ingresos.forEach(ingreso => {
        const card = document.createElement('div')
        card.innerHTML = `<div class="badge text-bg-primary text-wrap mb-2" style="width: 2rem;">
                                ${ingreso.id}
                              </div>
                              <h4>Nombre: ${ingreso.nombre}</h4>
                              <h4>Categoría: ${ingreso.categoria}</h4>
                              <h4>Monto: $${ingreso.monto.toLocaleString('es-CO')}</h4>`
        registrosContainer.appendChild(card)
    });
}

class Ingreso {
    static id = 0
    constructor(nombre, categoria, monto) {
        this.id = ++Ingreso.id
        this.nombre = nombre,
            this.categoria = categoria,
            this.monto = monto
    }
}

//-----Funciones principales-----//
// Función principal ingresos: Captura datos del formulario, crea objeto y lo muestra en pantalla
function agregarIngreso() {
    // Capturar valores del formulario
    ingresoNombre = document.getElementById("input-ingreso-nombre").value
    ingresoCategoria = document.getElementById("input-ingreso-categoria").value
    ingresoMonto = parseInt(document.getElementById("input-ingreso-monto").value)

    let montoTipoDeDatoNan = isNaN(ingresoMonto)

    if (ingresoNombre === '' || ingresoCategoria === '' || montoTipoDeDatoNan === true) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(notificationEspacios)
        toastBootstrap.show()
    } else {
        // Crear objeto con los datos del usuario
        const ingresoObjeto = new Ingreso(`${ingresoNombre}`, `${ingresoCategoria}`, ingresoMonto)

        // Agregar al array de ingresos
        ingresos.push(ingresoObjeto)

        // Agregar al local storage
        localStorage.setItem('ingreso', JSON.stringify(ingresos))

        // Crear tarjeta visual (card) para mostrar el ingreso
        const card = document.createElement('div')
        card.innerHTML = `<div class="badge text-bg-primary text-wrap mb-2" style="width: 2rem;">
                                ${ingresos.length}
                              </div>
                              <h4>Nombre: ${ingresoObjeto.nombre}</h4>
                              <h4>Categoría: ${ingresoObjeto.categoria}</h4>
                              <h4>Monto: $${ingresoObjeto.monto.toLocaleString('es-CO')}</h4>`
        registrosContainer.appendChild(card)
    }

    // Limpiar el formulario
    document.getElementById('input-ingreso-nombre').value = ''
    document.getElementById('input-ingreso-categoria').value = ''
    document.getElementById('input-ingreso-monto').value = ''
}

// Borrar todos los datos registrados
function borrarTodosDatos() {
    localStorage.clear()
}