const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

/* =========================
   FUNCIONES DEL TAZÓN
========================= */
function dibujarBase() {
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(350, 380, 100, 20);
}

function dibujarTazon() {
    ctx.beginPath();
    ctx.fillStyle = "#f28c28";
    ctx.arc(400, 300, 200, 0, Math.PI);
    ctx.fill();
    ctx.closePath();
}

/* =========================
   FUNCIONES DE MANZANAS
========================= */
function dibujarManzana(x, y, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

/* =========================
   FUNCIONES DE PLÁTANOS
========================= */
function dibujarPlatano(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 15;
    ctx.arc(x, y, 60, Math.PI * 0.2, Math.PI * 0.8);
    ctx.stroke();
    ctx.closePath();
}

/* =========================
   FUNCIONES DE UVAS
========================= */
function dibujarUvas(x, y) {
    ctx.fillStyle = "purple";

    for (let fila = 0; fila < 4; fila++) {
        for (let col = 0; col < 4 - fila; col++) {
            ctx.beginPath();
            ctx.arc(x + col * 20 - fila * 10, y + fila * 20, 10, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

/* =========================
   FUNCIONES EXTERNAS
========================= */
function dibujarFrutasFuera() {
    // Manzana izquierda
    dibujarManzana(150, 420, "green");

    // Manzana derecha
    dibujarManzana(650, 420, "green");

    // Plátano derecho
    dibujarPlatano(720, 420);
}

/* =========================
   FUNCIÓN PRINCIPAL
========================= */
function dibujarEscena() {
    dibujarBase();
    dibujarTazon();

    // Frutas dentro del tazón
    dibujarManzana(330, 250, "red");
    dibujarManzana(400, 230, "orange");
    dibujarManzana(470, 250, "red");

    dibujarPlatano(400, 260);
    dibujarPlatano(430, 280);

    dibujarUvas(520, 260);

    dibujarFrutasFuera();
}

dibujarEscena();