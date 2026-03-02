---

# 🍎 Examen API Canvas — Frutero 2D

Proyecto web desarrollado como evaluación práctica del **API Canvas 2D**, integrando renderizado dinámico con una interfaz moderna construida con **Bootstrap 5**.

El proyecto dibuja un frutero completo usando primitivas del contexto 2D y lo muestra junto a imágenes de referencia dentro de una interfaz responsive.

---

## 📸 Vista previa

* Renderizado dinámico con Canvas
* Imagen de referencia a la par
* Diseño oscuro moderno
* Interfaz responsive

---

## 🛠 Tecnologías utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Canvas API)**
* **Bootstrap 5.3**
* **Flexbox**

---

## 🧩 Primitivas del Canvas utilizadas

El frutero fue construido usando las siguientes funciones del contexto 2D:

* `arc()` → frutas, uvas, plátanos y tazón
* `fillRect()` → base del frutero
* `beginPath()` → inicio de trazos
* `stroke()` → contornos
* `fill()` → rellenos de color
* `translate()` → centrado dinámico del dibujo
* `clearRect()` → limpieza del lienzo

---

## 📂 Estructura del proyecto

```
examen-api-canvas/
│
├── index.html
│
└── assets/
    │
    ├── css/
    │   └── styles.css
    │
    ├── js/
    │   └── main.js
    │
    └── img/
        ├── frutero.jpeg
        └── comida-sana.png
```

---

## 🧠 Funcionamiento técnico

### 🔹 Renderizado dinámico

La función principal (`draw()`) realiza:

1. Redimensionamiento automático del canvas.
2. Limpieza del área de dibujo.
3. Centrado dinámico usando `translate()`.
4. Dibujo completo del frutero por secciones.

---

### 🔹 Organización del código

El archivo `main.js` está organizado por:

* Base del frutero
* Tazón
* Función reutilizable para frutas
* Grupo de uvas
* Plátanos
* Frutas externas

Cada figura se construye con primitivas geométricas independientes para mantener claridad y modularidad.

---

### 🔹 Responsive Design

* El canvas se ajusta automáticamente al tamaño del contenedor.
* Se redibuja al cambiar el tamaño de la ventana.
* Uso de Flexbox para distribución lateral de imagen y canvas.
* En pantallas pequeñas los elementos se acomodan verticalmente.

---

## 🎨 Diseño de interfaz

La interfaz incluye:

* Navbar superior con identificación del proyecto.
* Card descriptiva técnica.
* Card principal con:

  * Canvas renderizado.
  * Botón "Redibujar".
  * Imagen de referencia estilizada.
* Footer con año dinámico generado en JavaScript.
* Fondo degradado oscuro moderno.

---

## 🖼 Recursos gráficos

Dentro de `assets/img/` se incluyen:

* `frutero.jpeg` → Imagen de referencia principal.
* `comida-sana.png` → Imagen complementaria utilizada en el proyecto.

---

## 🚀 Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html`.
3. Ejecutar en cualquier navegador moderno.

No requiere servidor ni instalación adicional.

---

## 📚 Objetivo académico

Este proyecto demuestra:

* Dominio práctico del API Canvas 2D.
* Uso correcto de primitivas geométricas.
* Organización modular del código JavaScript.
* Integración de Canvas con Bootstrap.
* Implementación de diseño responsive.
* Separación adecuada de responsabilidades (HTML / CSS / JS).

---

## 👨‍💻 Autor

**Eduardo Nava**
Proyecto académico — API Canvas 2D
© 2025

---