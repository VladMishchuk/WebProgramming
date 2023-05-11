const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

///////
//Газон
ctx.fillStyle = "ForestGreen";
ctx.fillRect(0, 160, 400, 140);

////////
//Паркан
let x = 55;
ctx.fillStyle = "LightCyan";
ctx.fillRect(50, 210, 400, 10);
ctx.fillRect(50, 240, 400, 10);
for (let i = 1; i < 19; i++) {
  ctx.fillRect(x, 190, 10, 70);
  x += 20;
}

///////
//Стіни
ctx.fillStyle = "Tan";
ctx.fillRect(100, 140, 200, 150);
ctx.strokeRect(100, 140, 200, 150);

ctx.fillStyle = "rgb(131, 112, 87)";
ctx.beginPath();
ctx.moveTo(300, 140);
ctx.lineTo(370, 140);
ctx.lineTo(370, 270);
ctx.lineTo(300, 290);
ctx.fill();
ctx.stroke();

///////
//Вікна
ctx.fillStyle = "PaleTurquoise";
ctx.fillRect(110, 190, 60, 60);
ctx.fillRect(230, 190, 60, 60);
ctx.strokeRect(110, 190, 60, 60);
ctx.strokeRect(230, 190, 60, 60);

ctx.moveTo(140, 190);
ctx.lineTo(140, 250);
ctx.stroke();

ctx.moveTo(260, 190);
ctx.lineTo(260, 250);
ctx.stroke();

ctx.fillStyle = "rgb(134, 182, 182)";
ctx.beginPath();
ctx.moveTo(310, 190);
ctx.lineTo(360, 180);
ctx.lineTo(360, 235);
ctx.lineTo(310, 250);
ctx.fill();
ctx.stroke();

ctx.moveTo(335, 185);
ctx.lineTo(335, 242);
ctx.stroke();
///////
//Двері
ctx.fillStyle = "Brown";
ctx.fillRect(175, 190, 50, 100);
ctx.strokeRect(175, 190, 50, 100);
ctx.fillStyle = "Silver";
ctx.fillRect(215, 250, 10, 5);

///////
//Хмара
const drawCloud = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, 30, Math.PI * 0.5, Math.PI * 1.5);
  ctx.arc(x + 35, y - 30, 35, Math.PI * 1, Math.PI * 1.85);
  ctx.arc(x + 80, y - 25, 25, Math.PI * 1.37, Math.PI * 1.91);
  ctx.arc(x + 110, y, 30, Math.PI * 1.5, Math.PI * 0.5);
  ctx.moveTo(x + 110, y + 30);
  ctx.lineTo(x, y + 30);
  ctx.fillStyle = "White";
  ctx.fill();
};
drawCloud(250, 70);

//////
//Дах
ctx.fillStyle = "Maroon";
ctx.beginPath();
ctx.moveTo(80, 150);
ctx.lineTo(150, 50);
ctx.lineTo(350, 50);
ctx.lineTo(300, 150);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "rgb(48, 0, 0)";
ctx.beginPath();
ctx.moveTo(350, 50);
ctx.lineTo(380, 140);
ctx.lineTo(300, 150);
ctx.fill();
ctx.stroke();

///////
//Сонце
ctx.beginPath();
ctx.fillStyle = "Gold";
ctx.shadowBlur = 40;
ctx.shadowColor = "Gold";
ctx.beginPath();
ctx.arc(70, 10, 50, 0, Math.PI * 2, true);
ctx.fill();
