let datosAlmacenadosIngresos = []
let datosAlmacenadosGastos = []

let renderDatosAlmacenados = document.getElementById('datosAlmacenados')
let botonBusqueda = document.getElementById('botonBusqueda')

botonBusqueda.addEventListener('click', busquedaDatos)

//Obtiene los datos de local storage
datosAlmacenadosIngresos = JSON.parse(localStorage.getItem('ingreso'))
console.log(datosAlmacenadosIngresos)

function busquedaDatos() {
    let cajaBusqueda = document.getElementById('cajaBusqueda').value
    const nombreIngresoLowerCase = datosAlmacenadosIngresos.map(function(nombreIngresoLowerCase) {
        nombreIngresoLowerCase.toLowerCase()
    })
    console.log(nombreIngresoLowerCase)
    const resultado = datosAlmacenadosIngresos.find(datoIngreso => datoIngreso.nombre === cajaBusqueda.toLowerCase())
}

datosAlmacenadosIngresos.forEach(datosAlmacenadosIngreso => {
    const registro = document.createElement('tr')
    registro.innerHTML = `<th scope="row">${datosAlmacenadosIngreso.id}</th>
                            <td>${datosAlmacenadosIngreso.nombre}</td>
                            <td>${datosAlmacenadosIngreso.categoria}</td>
                            <td>$${datosAlmacenadosIngreso.monto.toLocaleString('es-CO')}</td>
                            <td>Ingreso</td>`
    renderDatosAlmacenados.appendChild(registro)
});