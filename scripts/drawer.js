// var el = document.createElement('h1');
// el.innerText = 'Nothing special';
// document.getElementsByTagName('body')[0].appendChild(el);

var canvas = document.getElementById('canvasInAPerfectWorld');
var context = canvas.getContext('2d');

canvas.style.border = '2px dashed red';

var clickX = [];
var clickY = [];
var clickDrag = [];
var paint;

var addClick = function(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
};

var redraw = function() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

  context.strokeStyle = '#df4b26';
  context.lineJoin = 'round';
  context.lineWidth = 5;

  for (var i = 0; i < clickX.length; i++) {
    context.beginPath();
    if (clickDrag[i] && i) {
      context.moveTo(clickX[i - 1], clickY[i - 1]);
    } else {
      context.moveTo(clickX[i] - 1, clickY[i]);
    }
    context.lineTo(clickX[i], clickY[i]);
    context.closePath();
    context.stroke();
  }
};

var onMouseDown = function(e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  console.log('ranges', mouseX, mouseY);
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
};

var onMouseMove = function(e) {
  if (paint) {
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
};

var onMouseUp = function(e) {
  paint = false;
};

var onMouseLeave = function(e) {
  onMouseUp.apply(this, arguments);
  // paint = false;
};

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mouseleave', onMouseLeave);
