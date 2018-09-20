window.onload = function () {
  let canvas = document.getElementById('solar-canvas');
  let context = canvas.getContext('2d');

  if (!canvas) {
    alert("Impossible to get canvas");
    return 1;
  }
  if (!ctx) {
    alert("Impossible to get canvas context");
    return 1;
  }
}

class SpaceObject {
  SpaceObject(name, color, posX, posY, sizePx) {
    this.name = name;
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.sizePx = sizePx;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.posX, this.posY, this.sizePx, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  }
}

class Planet extends SpaceObject {
  Planet(name, color, posX, posY, sizePx, orbitRatio, angle, distSun, distScale) {
    super(name, color, posX, posY, sizePx);
    this.orbitRatio = orbitRatio;
    this.angle = angle;
    this.distSun = distSun;
    this.distScale = distScale;
  }

  animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.angle += this.orbitRatio;
    this.posX = sun.posX + (sun.sizePx / 2 + this.sizePx / 2 + this.distSun * distScale) * Math.sin(angleMe);
    this.posY = sun.posY + (sun.sizePx / 2 + this.sizePx / 2 + this.distSun * distScale) * Math.cos(angleMe);

    window.requestAnimationFrame(animate);
  }
}