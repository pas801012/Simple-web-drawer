// var el = document.createElement('h1');
// el.innerText = 'Nothing special';
// document.getElementsByTagName('body')[0].appendChild(el);

var canvas = document.getElementById('canvasInAPerfectWorld');
var context = canvas.getContext('2d');

canvas.style.border = '2px dashed red';

var paint;

var onMouseDown = function(e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
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
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mouseleave', onMouseLeave);
