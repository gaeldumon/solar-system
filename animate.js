/*function animate(obj) {

  var canvas = document.getElementById('solar-canvas');
  var context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.fillStyle = obj.color;
  context.arc(obj.posX, obj.posY, obj.sizePx, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  obj.posX = obj.posY + (Math.PI * 2) * obj.revAroundSun / 365;

}*/