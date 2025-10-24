# 💰 Finanzas Personales

Una aplicación web intuitiva para gestionar tus ingresos y gastos personales de manera sencilla y efectiva.

## 📋 Descripción

**Finanzas Personales** es una herramienta de seguimiento financiero que te permite registrar, visualizar y almacenar tus movimientos económicos. Con una interfaz limpia y fácil de usar, podrás mantener un control completo de tus finanzas desde tu navegador.

## ✨ Características

- **Registro de Ingresos**: Añade tus ingresos especificando nombre, categoría y monto
- **Registro de Gastos**: Lleva un control detallado de todos tus gastos
- **Visualización en Tiempo Real**: Los registros se muestran instantáneamente en tarjetas organizadas
- **Almacenamiento Local**: Guarda tus datos de forma permanente en el navegador (localStorage)
- **Formato de Moneda**: Los montos se muestran con formato colombiano para mejor legibilidad
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
   - Haz clic en "Agregar" para ver el registro en pantalla
   - Haz clic en "Guardar" para almacenarlo permanentemente
git 
2. **Gastos**:
   - Sigue el mismo proceso en la sección de gastos
   - Los gastos se guardan de forma independiente a los ingresos

#### Visualizar Registros

Los registros agregados aparecen inmediatamente en tarjetas numeradas con toda la información:
- Número de registro
- Nombre del movimiento
- Categoría
- Monto formateado

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

### Sección "Administrar Datos"

Actualmente esta sección está **en construcción** 🏗️. Se planea implementar:

- ✅ Visualización de todos los datos almacenados
- ✅ Búsqueda de registros específicos
- ✅ Edición de registros existentes
- ✅ Eliminación de registros individuales
- ✅ Cálculos de totales y balance general

## 💡 Notas Importantes

- **Proceso de dos pasos**: Primero debes "Agregar" los registros (temporal) y luego "Guardar" para persistir en localStorage
- **Datos locales**: Toda la información se guarda en tu navegador. No se envía a ningún servidor
- **Limpiar datos**: Para borrar todos los registros, descomenta la línea 121 en `script/main.js` y recarga la página

## ✍️ Autor

Desarrollado como proyecto educativo para Coderhouse.

---
