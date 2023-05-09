const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

///////
//Газон
ctx.fillStyle = "ForestGreen";
ctx.fillRect(0, 160, 400, 140);

////////
//Паркан
let x = 5;
ctx.fillStyle = "LightCyan";
ctx.fillRect(0, 220, 400, 10);
ctx.fillRect(0, 250, 400, 10);
for (let i = 1; i < 22; i++) {
  ctx.fillStyle = "LightCyan";
  ctx.fillRect(x, 200, 10, 70);
  x += 20;
}
///////
//Стіни
ctx.fillStyle = "Tan";
ctx.fillRect(100, 140, 200, 150);
ctx.strokeRect(100, 140, 200, 150);

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
  ctx.fillStyle = "SkyBlue";
  ctx.fill();
};
drawCloud(250, 80);

//////
//Дах
ctx.fillStyle = "Maroon";
ctx.beginPath();
ctx.moveTo(75, 150);
ctx.lineTo(200, 50);
ctx.lineTo(320, 150);
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
