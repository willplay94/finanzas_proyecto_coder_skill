# 💰 Finanzas Personales

Una aplicación web intuitiva para gestionar tus ingresos y gastos personales de manera sencilla y efectiva.

## 📋 Descripción

**Finanzas Personales** es una herramienta de seguimiento financiero que te permite registrar, visualizar y almacenar tus movimientos económicos. Con una interfaz limpia y fácil de usar, podrás mantener un control completo de tus finanzas desde tu navegador.

## ✨ Características

- **Registro de Ingresos**: Añade tus ingresos especificando nombre, categoría y monto
- **Visualización en Tiempo Real**: Los registros se muestran instantáneamente en tarjetas organizadas
- **Datos de Ejemplo**: Al visitar por primera vez, la aplicación carga automáticamente datos de ejemplo para demostración
- **Administración de Datos**: Página dedicada para visualizar y buscar todos tus registros almacenados
- **Búsqueda de Registros**: Encuentra ingresos específicos por nombre (búsqueda sin distinción de mayúsculas/minúsculas)
- **Cálculo de Totales**: Visualiza automáticamente la suma total de todos tus ingresos
- **Eliminación de Registros**: Elimina registros individuales desde la búsqueda o todos los datos desde el botón principal
- **Almacenamiento Local**: Guarda tus datos de forma permanente en el navegador (localStorage)
- **Formato de Moneda**: Los montos se muestran con formato colombiano para mejor legibilidad (ej: $3.000.000)
- **Validación de Datos**: Notificaciones visuales tipo toast para campos vacíos o datos inválidos

## 🚀 Cómo Usar

### Instalación

Este proyecto no requiere instalación de dependencias. Simplemente:

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` con Live Server (recomendado) o directamente en tu navegador favorito

### Funcionamiento

#### Agregar Registros

1. **Ingresos**:
   - Completa los campos: Nombre, Categoría y Monto
   - Haz clic en "Agregar" para guardar el registro
   - El registro aparece inmediatamente en la pantalla y se guarda automáticamente

#### Visualizar Registros

**Página Principal ([index.html](index.html))**:
Los ingresos agregados aparecen inmediatamente en tarjetas numeradas con:
- Número de registro (ID único)
- Nombre del ingreso
- Categoría
- Monto con formato colombiano (ej: $3.000.000)

**Página de Administración ([administrar-datos.html](administrar-datos.html))**:
- Tabla con todos los registros almacenados
- **Datos de ejemplo**: Si es tu primera visita (sin datos guardados), se cargarán automáticamente 6 registros de ejemplo desde archivos JSON locales
- Información detallada: ID, Nombre, Categoría, Monto y Tipo
- **Búsqueda de registros**: Busca ingresos por nombre usando el formulario de búsqueda (búsqueda case-insensitive)
- **Total de ingresos**: Visualiza automáticamente la suma total de todos los ingresos registrados
- **Eliminación individual**: Botón para eliminar registros específicos desde los resultados de búsqueda (nota: actualmente solo elimina de la vista, no del almacenamiento)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos personalizados
- **JavaScript (Vanilla ES6+)**: Lógica de la aplicación sin frameworks
  - Programación Orientada a Objetos (Clases)
  - Async/Await para carga de datos
  - LocalStorage API para persistencia
  - Fetch API para cargar datos de ejemplo
- **Bootstrap 5**: Framework CSS para diseño responsivo y componentes (toasts, tablas, cards)
- **JSON**: Archivos de datos de ejemplo

## 📂 Estructura del Proyecto

```
proyecto_finanzas_actualizado/
├── index.html                    # Página principal de registro de ingresos
├── administrar-datos.html        # Página de administración y visualización de datos
├── script/
│   ├── main.js                  # Lógica de registro de ingresos (clase Ingreso)
│   └── administrar-datos.js     # Lógica de búsqueda, visualización y cálculos
├── style/
│   └── style.css                # Estilos personalizados
├── data/
│   ├── ingresosdata.json        # Datos de ejemplo de ingresos (6 registros)
│   └── gastosdata.json          # Datos de ejemplo de gastos (preparado para futuras versiones)                     
└── README.md                     # Este archivo
```

## 🚧 Características en Desarrollo

Las siguientes funcionalidades están planeadas para futuras versiones:

- ⏳ **Registro de Gastos**: Implementar funcionalidad completa para gastos (actualmente solo ingresos)
- ⏳ **Edición de registros**: Permitir modificar registros existentes
- ⏳ **Persistencia de eliminación**: Actualizar localStorage cuando se elimina un registro individual desde la búsqueda
- ⏳ **Corrección de IDs duplicados**: Resolver el problema de IDs que se reinician al recargar la página
- ⏳ **Limpiar resultados de búsqueda**: Evitar que los resultados se acumulen en búsquedas sucesivas
- ⏳ **Cálculo de balance**: Diferencia entre ingresos y gastos
- ⏳ **Filtros avanzados**: Filtrar por categoría, rango de fechas y monto
- ⏳ **Gráficos y estadísticas**: Visualización de datos con gráficos
- ⏳ **Exportación de datos**: Descargar registros en formato CSV o PDF

## 💡 Notas Importantes

- **Guardado automático**: Los registros se guardan automáticamente en localStorage al hacer clic en "Agregar"
- **Datos locales**: Toda la información se guarda en tu navegador. No se envía a ningún servidor
- **Limpiar datos**: Usa el botón "Borrar todos los datos" en la página principal para eliminar todos los registros almacenados
- **Primera visita**: Si no tienes datos guardados, la página de administración mostrará automáticamente 6 registros de ejemplo
- **Prioridad de datos**: Una vez que agregues tus propios datos, estos tendrán prioridad sobre los datos de ejemplo

## 🐛 Problemas Conocidos

- **IDs duplicados**: Al recargar la página y agregar nuevos registros, los IDs pueden duplicarse
- **Búsqueda acumulativa**: Los resultados de búsqueda se acumulan sin limpiarse entre búsquedas
- **Eliminación no persistente**: Eliminar un registro desde la búsqueda solo lo quita de la vista, no del localStorage

## ✍️ Autor

Desarrollado como proyecto educativo para Coderhouse.

---
