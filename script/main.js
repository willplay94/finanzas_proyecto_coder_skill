//-----Arrays y variables-----//
// Variables temporales y array principal de ingresos
let ingresoNombre = ''
let ingresoCategoria = ''
let ingresoMonto = ''
let ingresos = [] // Array que almacena todos los ingresos

// Variables temporales y array principal de gastos
let gastoNombre = ''
let gastoCategoria = ''
let gastoMonto = ''
let gastos = [] // Array que almacena todos los gastos

//-----DOM-----//
let botonAgregarIngreso = document.getElementById('boton-agregar-ingreso')
let registrosContainer = document.getElementById('registrosContainer')
let botonGuardarIngreso = document.getElementById('boton-guardar-ingreso')
let botonAgregarGasto = document.getElementById('boton-agregar-gasto')
let registrosContainerGastos = document.getElementById('registrosContainerGastos')
let botonGuardarGasto = document.getElementById('boton-guardar-gasto')

//-----Eventos-----//
botonAgregarIngreso.addEventListener('click', agregarIngreso)
botonGuardarIngreso.addEventListener('click', guardarIngreso)

// Eventos para gastos
botonAgregarGasto.addEventListener('click', agregarGasto)
botonGuardarGasto.addEventListener('click', guardarGasto)

//-----Funciones principales-----//

// Función principal ingresos: Captura datos del formulario, crea objeto y lo muestra en pantalla
function agregarIngreso() {
    // 1. Capturar valores del formulario
    ingresoNombre = document.getElementById("input-ingreso-nombre").value
    ingresoCategoria = document.getElementById("input-ingreso-categoria").value
    ingresoMonto = parseInt(document.getElementById("input-ingreso-monto").value)

    // 2. Crear objeto con los datos del ingreso
    let ingresoUsuario = {
        nombre: `${ingresoNombre}`,
        categoria: `${ingresoCategoria}`,
        monto: ingresoMonto
    }

    // 3. Agregar al array de ingresos
    ingresos.push(ingresoUsuario)

    // 4. Crear tarjeta visual (card) para mostrar el ingreso
    const card = document.createElement('div')
    alert(`Se agrego el ingreso: ${ingresoUsuario.nombre}`)
    card.innerHTML = `<div class="badge text-bg-primary text-wrap mb-2" style="width: 2rem;">
                        ${ingresos.length}
                      </div>
                      <h4>Nombre: ${ingresoUsuario.nombre}</h4>
                      <h4>Categoría: ${ingresoUsuario.categoria}</h4>
                      <h4>Monto: $${ingresoUsuario.monto.toLocaleString('es-CO')}</h4>`
    registrosContainer.appendChild(card)
    console.log(ingresoUsuario)

    // 5. Limpiar el formulario
    document.getElementById('input-ingreso-nombre').value = ''
    document.getElementById('input-ingreso-categoria').value = ''
    document.getElementById('input-ingreso-monto').value = ''
}

// Función: Guarda todos los ingresos en localStorage de forma permanente
function guardarIngreso() {
    localStorage.setItem('ingreso', JSON.stringify(ingresos)) // Convierte array a JSON y lo guarda
    console.log(ingresos)
    ingresos.forEach((ingreso) => {
        alert(`Se guardo este ingreso: ${ingreso.nombre}`)
    })
}

// Función principal gastos: Captura datos del formulario, crea objeto y lo muestra en pantalla
function agregarGasto() {
    // 1. Capturar valores del formulario
    gastoNombre = document.getElementById("input-gasto-nombre").value
    gastoCategoria = document.getElementById("input-gasto-categoria").value
    gastoMonto = parseInt(document.getElementById("input-gasto-monto").value)

    // 2. Crear objeto con los datos del gasto
    let gastoUsuario = {
        nombre: `${gastoNombre}`,
        categoria: `${gastoCategoria}`,
        monto: gastoMonto
    }

    // 3. Agregar al array de gastos
    gastos.push(gastoUsuario)

    // 4. Crear tarjeta visual (card) para mostrar el gasto
    const card = document.createElement('div')
    alert(`Se agrego el gasto: ${gastoUsuario.nombre}`)
    card.innerHTML = `<div class="badge text-bg-primary text-wrap mb-2" style="width: 2rem;">
                        ${gastos.length}
                      </div>
                      <h4>Nombre: ${gastoUsuario.nombre}</h4>
                      <h4>Categoría: ${gastoUsuario.categoria}</h4>
                      <h4>Monto: $${gastoUsuario.monto.toLocaleString('es-CO')}</h4>`
    registrosContainerGastos.appendChild(card)
    console.log(gastoUsuario)

    // 5. Limpiar el formulario
    document.getElementById('input-gasto-nombre').value = ''
    document.getElementById('input-gasto-categoria').value = ''
    document.getElementById('input-gasto-monto').value = ''
}

// Función: Guarda todos los gastos en localStorage de forma permanente
function guardarGasto() {
    localStorage.setItem('gasto', JSON.stringify(gastos)) // Convierte array a JSON y lo guarda
    console.log(gastos)
    gastos.forEach((gasto) => {
        alert(`Se guardo este gasto: ${gasto.nombre}`)
    })
}

// Descomentar para borrar todos los datos guardados
//localStorage.clear()