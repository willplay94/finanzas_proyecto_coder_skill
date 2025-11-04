# 💰 Finanzas Personales

Una aplicación web intuitiva para gestionar tus ingresos y gastos personales de manera sencilla y efectiva.

## 📋 Descripción

**Finanzas Personales** es una herramienta de seguimiento financiero que te permite registrar, visualizar y almacenar tus movimientos económicos. Con una interfaz limpia y fácil de usar, podrás mantener un control completo de tus finanzas desde tu navegador.

## ✨ Características

- **Registro de Ingresos**: Añade tus ingresos especificando nombre, categoría y monto
- **Visualización en Tiempo Real**: Los registros se muestran instantáneamente en tarjetas organizadas
- **Administración de Datos**: Página dedicada para visualizar y buscar todos tus registros almacenados
- **Almacenamiento Local**: Guarda tus datos de forma permanente en el navegador (localStorage)
- **Formato de Moneda**: Los montos se muestran con formato colombiano para mejor legibilidad (ej: 3.000.000)
- **Validación de Datos**: Notificaciones visuales para campos vacíos o datos inválidos
- **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos gracias a Bootstrap 5

## 🚀 Cómo Usar

### Instalación

Este proyecto no requiere instalación de dependencias. Simplemente:

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador favorito

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
- Información detallada: ID, Nombre, Categoría, Monto y Tipo
- Formulario de búsqueda (en desarrollo)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos personalizados
- **JavaScript (Vanilla)**: Lógica de la aplicación sin frameworks
- **Bootstrap 5**: Framework CSS para diseño responsivo
- **LocalStorage API**: Persistencia de datos en el navegador

## 📂 Estructura del Proyecto

```
proyecto_finanzas_actualizado/
├── index.html                    # Página principal de registro
├── administrar-datos.html        # Página de administración (en construcción)
├── script/
│   ├── main.js                  # Lógica principal de ingresos/gastos
│   └── administrar-datos.js     # Lógica de administración (en desarrollo)
├── style/
│   └── style.css                # Estilos personalizados
└── README.md
```

## 🚧 Características en Desarrollo

Las siguientes funcionalidades están planeadas para futuras versiones:

- ⏳ **Registro de Gastos**: Implementar funcionalidad completa para gastos (actualmente solo ingresos)
- ⏳ **Búsqueda funcional**: Completar la búsqueda de registros en la página de administración
- ⏳ **Edición de registros**: Permitir modificar registros existentes
- ⏳ **Eliminación individual**: Borrar registros específicos sin eliminar todos
- ⏳ **Cálculos automáticos**: Totales de ingresos, gastos y balance general
- ⏳ **Exportación de datos**: Descargar registros en formato CSV o PDF

## 💡 Notas Importantes

- **Guardado automático**: Los registros se guardan automáticamente en localStorage al hacer clic en "Agregar"
- **Datos locales**: Toda la información se guarda en tu navegador. No se envía a ningún servidor
- **Limpiar datos**: Usa el botón "Borrar todos los datos" en la página principal para eliminar todos los registros almacenados

## ✍️ Autor

Desarrollado como proyecto educativo para Coderhouse.

---
