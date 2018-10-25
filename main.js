window.onload = function () {

  var canvas = document.getElementById('solar-canvas');
  var context = canvas.getContext('2d');

  if (!canvas) {
    alert("Impossible to get canvas");
    return;
  }

  if (!context) {
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
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.posX, this.posY, this.sizePx, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
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
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.posX, this.posY, this.sizePx, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }
  }

  let sun = new Star("Sun", "yellow", 40, canvas.width / 2, canvas.height / 2);
  let mercury = new Planet("Mercury", "white", 1.85, 59, sun.posX + this.distScale, canvas.height / 2, 0.055, 0);
  let venus = new Planet("Venus", "#DE5F25", 4.85, 90, sun.posX + this.distScale, canvas.height / 2, 0.022, 0);
  let earth = new Planet("Earth", "blue", 5.10, 110, sun.posX + this.distScale, canvas.height / 2, 0.013, 0);
  let mars = new Planet("Mars", "red", 3, 140, sun.posX + this.distScale, canvas.height / 2, 0.006, 0);
  let jupiter = new Planet("Jupiter", "orange", 20.42, 220, sun.posX + this.distScale, canvas.height / 2, 0.0015, 0);
  let saturn = new Planet("Saturn", "#A88B6D", 17.23, 320, sun.posX + this.distScale, canvas.height / 2, 0.0010, 0);
  let uranus = new Planet("Uranus", "#9FC4CA", 7.30, 400, sun.posX + this.distScale, canvas.height / 2, 0.0003, 0);
  let neptune = new Planet("Neptune", "#3454DF", 7.07, 450, sun.posX + this.distScale, canvas.height / 2, 0.0006, 0);

  let planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

  var animate = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
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