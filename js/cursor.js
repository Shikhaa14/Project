// mouse cursor event animation 

var el = document.getElementById("somediv");
document.addEventListener("mousemove", getMouse);

var divpos = {
       x: 0,
       y: 0
};

requestAnimationFrame(followMouse);

var mouse = {
       x: 0,
       y: 0
};

function getMouse(e) {
       mouse.x = e.pageX;
       mouse.y = e.pageY;
       //Checking directional change
}

function followMouse() {
       requestAnimationFrame(followMouse);
       //1. find distance X , distance Y
       var distX = mouse.x - divpos.x;
       var distY = mouse.y - divpos.y;

       //Easing motion
       //Progressive reduction of distance 
       divpos.x += distX / 3;
       divpos.y += distY / 3;

       el.style.left = divpos.x + "px";
       el.style.top = divpos.y + "px";
}
