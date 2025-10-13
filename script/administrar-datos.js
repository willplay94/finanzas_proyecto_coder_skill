let datosAlmacenadosIngresos = []
let datosAlmacenadosGastos = []

let renderDatosAlmacenadosIngresos = document.getElementById('datosAlmacenadosIngresos')
let renderDatosAlmacenadosGastos = document.getElementById('datosAlmacenadosGastos')

// function datosDesdeLocalStorage() {
//     datosAlmacenadosIngresos = JSON.parse(localStorage.getItem('ingreso'))
//     console.log(datosAlmacenadosIngresos)
//     datosAlmacenadosGastos = JSON.parse(localStorage.getItem('gasto'))
//     console.log(datosAlmacenadosGastos)
//     const dataIngresos = document.createElement('div')
//     dataIngresos.innerHTML = `<div class="badge text-bg-primary text-wrap mb-2" style="width: 2rem;">
//                                 ${datosAlmacenadosIngresos.length}
//                               </div>
//                               <h4>Nombre: ${datosAlmacenadosIngresos.nombre}</h4>
//                               <h4>Categoría: ${datosAlmacenadosIngresos.categoria}</h4>
//                               <h4>Monto: $${datosAlmacenadosIngresos.monto.toLocaleString('es-CO')}</h4>`
//     renderDatosAlmacenadosIngresos.appendChild(dataIngresos)
// }

// datosDesdeLocalStorage()