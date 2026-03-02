function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

function draw() {

  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  resizeCanvas(canvas, container);

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* 🔹 Centramos todo */
  ctx.translate(canvas.width/2, canvas.height/2 - 20);

  /* BASE */
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(-100, 120, 200, 25);

  /* TAZÓN */
  ctx.beginPath();
  ctx.arc(0, 50, 170, 0, Math.PI);
  ctx.fillStyle = "#F28C28";
  ctx.fill();
  ctx.stroke();

  /* FUNCIÓN FRUTA */
  function fruta(x,y,color){
    ctx.beginPath();
    ctx.arc(x,y,45,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x,y-45);
    ctx.lineTo(x,y-60);
    ctx.stroke();
  }

  /* FRUTAS SUPERIORES */
  fruta(-100,-70,"red");
  fruta(-40,-90,"orange");
  fruta(40,-90,"red");
  fruta(100,-70,"red");
  fruta(0,-40,"orange");

  /* UVAS */
  for(let i=0;i<5;i++){
    for(let j=0;j<4-i;j++){
      ctx.beginPath();
      ctx.arc(140 + j*20, -50 + i*20, 10, 0, Math.PI*2);
      ctx.fillStyle="purple";
      ctx.fill();
      ctx.stroke();
    }
  }

  /* PLÁTANOS */
  function platano(x,y){
    ctx.beginPath();
    ctx.arc(x,y,70,0.2*Math.PI,0.9*Math.PI);
    ctx.lineWidth=18;
    ctx.strokeStyle="yellow";
    ctx.stroke();
    ctx.lineWidth=1;
  }

  platano(-20,20);
  platano(20,25);
  platano(60,35);

  /* FRUTAS EXTERNAS */
  fruta(-220,80,"green");
  fruta(220,80,"green");

  ctx.beginPath();
  ctx.arc(250,130,60,0.2*Math.PI,0.9*Math.PI);
  ctx.lineWidth=18;
  ctx.strokeStyle="yellow";
  ctx.stroke();
  ctx.lineWidth=1;
}

function initUI(){
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("btnRedraw").addEventListener("click", draw);
  window.addEventListener("resize", draw);
  draw();
}

initUI();