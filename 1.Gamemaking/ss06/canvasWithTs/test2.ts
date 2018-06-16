var board = document.querySelector("#board") as HTMLCanvasElement;
var ctx = board.getContext("2d");
ctx.fillStyle = "blue";
for (let i = 1; i < 11; i++) {
    ctx.fillRect(i*50,10,20,20)
}
for (let i = 1; i < 11; i++) {
    ctx.beginPath();
    ctx.arc(i*50,10,10,0,Math.PI*2);
    ctx.fill();
}

for (let i = 1; i < 11; i++) {
    ctx.beginPath();
    ctx.moveTo(20,i*100);
    ctx.lineTo(i*50,i*100);
    ctx.stroke();
}

ctx.font = "30px Times New Roman";
ctx.fillText("My name is Edward.",10,200,200);

var grd = ctx.createLinearGradient(20,300,300,350);
grd.addColorStop(0,"red");
grd.addColorStop(1,"yellow");

ctx.fillStyle = grd;
ctx.fillRect(0,300,300,350);

var sunglassesImage = new Image();
sunglassesImage.src = "sunglassesEmoji.png";
sunglassesImage.onload = function(){
    ctx.drawImage(sunglassesImage,0,1)
}


