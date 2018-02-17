// document.getElementsByTagName("h1")[0].innerHTML = 'THIS IS COMING FORM JS';

var $canvas = document.querySelector("canvas");

$canvas.width = window.innerWidth - 2 ;
$canvas.height = window.innerHeight - 2 ;

var c = $canvas.getContext("2d");

// Controlling Elements -------------------------

var maxRadii = 40;
var radii = 10;
var circleCount = 400;
var speedx = 5;
var speedy = 5;
var circleColor = [ '#ff530d00', '#e82c0ca6', '#ff0000ad', '#0f870fb3', '#0064dcbd'];

// ----------------------------------------------

var mouse = {
    x : undefined,
    y : undefined
};

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

window.addEventListener('resize', function(){
    $canvas.width = window.innerWidth - 2 ;
    $canvas.height = window.innerHeight - 2 ;

    init();
});

var circleArray = [];
function init(){
    circleArray = [];
    for(var i = 0; i < circleCount; i++){
        var x = Math.random() * (innerWidth - 2 * radii) + radii;
        var y = Math.random() * (innerHeight - 2 * radii) + radii;
        // var x = innerWidth/2;
        // var y = innerHeight/2;
        var dx = ( Math.random() - 0.5 ) * speedx;
        var dy = ( Math.random() - 0.5 ) * speedy;
        
        circleArray.push(new circle(x, y, dx, dy, radii));
    }
};
init();


function circle(x, y, dx, dy, radii){ 
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radii = Math.random() * radii + 1;
    this.minRadii = this.radii;
    this.color = circleColor[Math.floor(Math.random() * circleColor.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radii, 0, Math.PI * 2, 1);
        c.fillStyle = this.color;
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

// Interactivity
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if( this.radii < maxRadii) this.radii += 1;
        }
        else if( this.radii > this.minRadii) this.radii -=1;

        this.draw();
    }
}

function animate(){
    // LOOP AND REFRESH DISPLAY requestAnimtaionFunction
    requestAnimationFrame(animate);
    // To clear display every time for showing animation
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

    // c.beginPath();
    // c.fillText("THIS IS TEXT", mouse.x, mouse.y);
    // c.stroke();
    // c.closePath();
}

animate();