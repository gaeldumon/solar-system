window.onload = function () {

  var canvas = document.getElementById('solar-canvas');
  var ctx = canvas.getContext('2d');

  if (!canvas) {
    alert("Impossible to get canvas");
    return;
  }

  if (!ctx) {
    alert("Impossible to get canvas context");
    return;
  }

  class Planet {
    constructor(name, color, sizePx, distScale, posX, posY, revRatio, angle) {
      this.name = name;
      this.color = color;
      this.sizePx = sizePx;
      this.distScale = distScale;
      this.posX = posX;
      this.posY = posY;
      this.revRatio = revRatio;
      this.angle = angle;
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.posX, this.posY, this.sizePx, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }
  }

  class Star {
    constructor(name, color, sizePx, posX, posY) {
      this.name = name;
      this.color = color;
      this.sizePx = sizePx;
      this.posX = posX;
      this.posY = posY;
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.posX, this.posY, this.sizePx, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }
  }

  let sun = new Star("Sun", "yellow", 40, canvas.width / 2, canvas.height / 2);
  let mercury = new Planet("Mercury", "white", 2, 59, sun.posX + this.distScale, canvas.height / 2, 0.055, 0);
  let venus = new Planet("Venus", "#DE5F25", 4.85, 90, sun.posX + this.distScale, canvas.height / 2, 0.022, 0);

  let planets = [];

  planets.push(mercury);
  planets.push(venus);

  var animate = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sun.draw();

    planets.forEach(function (e) {
      e.angle += e.revRatio;
      e.posX = sun.posX + e.distScale * Math.sin(e.angle);
      e.posY = sun.posY + e.distScale * Math.cos(e.angle);
      e.draw();
    });
    window.requestAnimationFrame(animate);
  }
  window.requestAnimationFrame(animate);
}