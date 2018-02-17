// document.getElementsByTagName("h1")[0].innerHTML = 'THIS IS COMING FORM JS';

var $canvas = document.querySelector("canvas");

$canvas.width = window.innerWidth - 3 ;
$canvas.height = window.innerHeight - 3 ;

var c = $canvas.getContext("2d");

function circle(x, y, dx, dy, radii){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radii = radii;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radii, 0, Math.PI * 2, 1);
        c.fillStyle = "rgba(0, 0, 0 , 0.8)";
        c.fill();
        c.closePath();
    }

    this.update = function(){
        
        if( this.x + this.radii > innerWidth || this.x - this.radii < 0){
            this.dx = -this.dx;
        }
        if( this.y + this.radii > innerHeight || this.y - this.radii < 0){
            this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;

        this.draw();
    }
}

var circleArray = [];

for(var i = 0; i < 100; i++){

    var x = Math.random() * (innerWidth - 2 * radii) + radii;
    var y = Math.random() * (innerHeight - 2 * radii) + radii;
    var dx = ( Math.random() - 0.5 ) * 4;
    var dy = ( Math.random() - 0.5 ) * 4;
    var radii = 20;
    
    circleArray.push(new circle(x, y, dx, dy, radii));
} 

console.log(circleArray);

function animate(){
    // LOOP AND REFRESH DISPLAY requestAnimtaionFunction
    requestAnimationFrame(animate);
    // To clear display every time for showing animation
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();