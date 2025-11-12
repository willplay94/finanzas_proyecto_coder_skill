//-----Arrays y variables-----//
let datosAlmacenadosIngresos = []
let datosAlmacenadosGastos = []
let sumaIngresos = 0

//-----URL base de datos local-----//
const URL_DATABASE_INGRESOS = './data/ingresosdata.json'
const URL_DATABASE_GASTOS = './data/gastosdata.json'

//-----DOM-----//
let renderDatosAlmacenados = document.getElementById('datosAlmacenados')
let botonBusqueda = document.getElementById('botonBusqueda')
let busquedaDatosSeccion = document.getElementById('busquedaDatos')
let totalIngresos = document.getElementById('totalIngresos')

//-----Eventos-----//
botonBusqueda.addEventListener('click', busquedaDatos)

//-----Carga de datos desde localStorage o fetch-----//
//Trae los datos del local storage
datosAlmacenadosIngresos = JSON.parse(localStorage.getItem('ingreso'))

//Valida si hay datos en el local storage para saber si trae desde fetch o no
if (datosAlmacenadosIngresos === null) {
    //Tostify notificaciones
    Toastify({
        text: "Se cargaron datos demo",
        duration: 5000,
        position: "center",
        style: {
            background: "rgba(57, 143, 100, 0.93)",
            color: "White",
            fontWeight: "bold",
        }
    }).showToast()
    
    Toastify({
            text: "No hay datos en local storage",
            duration: 5000,
            position: "center",
            style: {
                background: "rgba(252, 90, 90, 0.93)",
                color: "White",
                fontWeight: "bold",
            }
        }).showToast()

    async function cargarDatosLocales() {
        try {
            const response = await fetch(URL_DATABASE_INGRESOS)
            datosAlmacenadosIngresos = await response.json()

            console.log(datosAlmacenadosIngresos)

            //-----Renderizado de tabla-----//
            datosAlmacenadosIngresos.forEach(datosAlmacenadosIngreso => {
                const registro = document.createElement('tr')
                registro.innerHTML = `<th scope="row">${datosAlmacenadosIngreso.id}</th>
                            <td>${datosAlmacenadosIngreso.nombre}</td>
                            <td>${datosAlmacenadosIngreso.categoria}</td>
                            <td>$${datosAlmacenadosIngreso.monto.toLocaleString('es-CO')}</td>
                            <td>Ingreso</td>`
                renderDatosAlmacenados.appendChild(registro)
            });

            //-----Cálculos de totales de los datos con fetch-----//
            function sumaTotalIngresos() {
                // Usa reduce para sumar todos los montos de los ingresos
                sumaIngresos = datosAlmacenadosIngresos.reduce(function (total, valorActual) {
                    return total + valorActual.monto
                }, 0)

                // Crea y muestra el elemento con el total formateado
                const totalIngresosRender = document.createElement('div')
                totalIngresosRender.innerHTML = `<p>Total: $${sumaIngresos.toLocaleString('es-CO')}</p>`
                totalIngresos.appendChild(totalIngresosRender)
            }
            sumaTotalIngresos()

        } catch (error) {
            console.error('Error al cargar el JSON:', error)
        }
    }
    cargarDatosLocales()

} else {
    // Toastify notificaciones
    Toastify({
        text: "Datos subidos desde local storage",
        duration: 5000,
        position: "center",
        style: {
            background: "rgba(57, 143, 100, 0.93)",
            color: "White",
            fontWeight: "bold",
        }
    }).showToast()

    //-----Renderizado de tabla-----//
    datosAlmacenadosIngresos.forEach(datosAlmacenadosIngreso => {
        const registro = document.createElement('tr')
        registro.innerHTML = `<th scope="row">${datosAlmacenadosIngreso.id}</th>
                            <td>${datosAlmacenadosIngreso.nombre}</td>
                            <td>${datosAlmacenadosIngreso.categoria}</td>
                            <td>$${datosAlmacenadosIngreso.monto.toLocaleString('es-CO')}</td>
                            <td>Ingreso</td>`
        renderDatosAlmacenados.appendChild(registro)
    });

    //-----Cálculos de totales-----//
    function sumaTotalIngresos() {
        // Usa reduce para sumar todos los montos de los ingresos
        sumaIngresos = datosAlmacenadosIngresos.reduce(function (total, valorActual) {
            return total + valorActual.monto
        }, 0)

        // Crea y muestra el elemento con el total formateado
        const totalIngresosRender = document.createElement('div')
        totalIngresosRender.innerHTML = `<p>Total: $${sumaIngresos.toLocaleString('es-CO')}</p>`
        totalIngresos.appendChild(totalIngresosRender)
    }
    sumaTotalIngresos()
}

//-----Funciones principales-----//
// Función de búsqueda: Busca un ingreso por nombre y muestra el resultado
function busquedaDatos() {
    // Captura el valor ingresado en la caja de búsqueda
    let cajaBusqueda = document.getElementById('cajaBusqueda').value

    // Busca el ingreso que coincida con el nombre (sin distinguir mayúsculas/minúsculas)
    const resultado = datosAlmacenadosIngresos.find(datoIngreso => datoIngreso.nombre.toLowerCase() === cajaBusqueda.toLowerCase())

    // Si no se encuentra ningún resultado
    if (resultado === undefined) {
        const resultadoBusqueda = document.createElement('div')
        resultadoBusqueda.innerHTML = `<div>
                                    <h3>Resultado</h3>
                                    <p>No encontre ningun dato</p>
                                </div>`
        busquedaDatosSeccion.appendChild(resultadoBusqueda)
    } else {
        // Si se encuentra el resultado, muestra la información y botón de eliminar
        const resultadoBusqueda = document.createElement('div')
        resultadoBusqueda.innerHTML = `<div>
                                        <h3>Resultado</h3>
                                        <p>id: ${resultado.id} Nombre: ${resultado.nombre} Categoría: ${resultado.categoria} Monto: $${resultado.monto.toLocaleString('es-CO')}</p>
                                        <button class="btn btn-primary my-2" type="submit" id="boton-eliminar-dato">Eliminar</button>
                                    </div>`
        busquedaDatosSeccion.appendChild(resultadoBusqueda)

        // Agrega evento al botón eliminar
        let botonEliminarDato = document.getElementById('boton-eliminar-dato')
        botonEliminarDato.addEventListener('click', EliminarDatoIngreso)

        // Función interna: Elimina el ingreso encontrado del array
        function EliminarDatoIngreso() {
            let index = datosAlmacenadosIngresos.findIndex(ingreso => ingreso.nombre.toLowerCase() === cajaBusqueda.toLowerCase())
            datosAlmacenadosIngresos.splice(index, 1)
            //Revisar como eliminar el dato del local storage
        }
    }
}