// document.getElementsByTagName("h1")[0].innerHTML = 'THIS IS COMING FORM JS';

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 3 ;
canvas.height = window.innerHeight - 3 ;

var c = canvas.getContext("2d");

c.fillStyle = "#0aa";
c.fillRect(30, 30, 150, 150);
c.fillStyle = "#0a0";
c.fillRect(230, 30, 150, 150);
c.fillStyle = "#0a0";
c.fillRect(30, 230, 150, 150);
c.fillStyle = "#0aa";
c.fillRect(230, 230, 150, 150);

// DRAWING A LINE
c.beginPath();
c.moveTo(180, 180);
c.lineTo(230, 230);
c.lineTo(230, 180);
c.lineTo(180, 230);
c.lineTo(180, 180);
c.lineTo(230, 180);
c.lineTo(230, 230);
c.lineTo(180, 230);
c.strokeStyle = "#a0a";
c.stroke();
c.closePath();

// Make a Circle
for(var i = 0; i < 120; ++i){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight; 
    var r = Math.random() * 256;
    var g = Math.random() * 256;
    var b = Math.random() * 256;
    var val = Math.PI * (Math.random() * 2);
    var boola = Math.round(Math.random());
    c.beginPath();
    c.arc(x, y, 50, 0, val, boola);
    // c.strokeStyle = "#222";
    // c.stroke();
    c.fillStyle = "rgba("+r+", "+g+", "+b+", 0.6)";
    c.fill();
    c.closePath();
}