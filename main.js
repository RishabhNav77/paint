var mouseevent="empty";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseevent="mousedown";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove",my_Mousemove);
function my_Mousemove(e) {
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="color";
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinate is =");
        console.log("x=" + last_x + ",y=" + last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current position of x and y coordinate is =");
        console.log("x=" + current_x + ",y=" + current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}
function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}