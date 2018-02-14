window.onload = function() {

  // Recuperation du canvas et son contexte (2D) :

  var canvas = document.getElementById('solar-canvas');
  var context = canvas.getContext('2d');

  if (!canvas) {
    alert("Impossible de récupérer le canvas");
    return;
  }

  if (!context) {
    alert("Impossible de récupérer le context du canvas");
    return;
  }

  //***************************************************************************

  // PROTOTYPE of planets, moons and sun :
  var SpaceObject = {
    initSpaceObject: function(posX, posY, sizePx, color, sizeKm, dist, gravity, surfTemp, mass, compoCore, compoSurf, compoAtmo, rotation) {
      this.posX = posX;
      this.posY = posY;
      this.sizePx = sizePx;
      this.color = color;
      this.sizeKm = sizeKm;
      this.dist = dist;
      this.gravity = gravity;
      this.surfTemp = surfTemp;
      this.mass = mass;
      this.compoCore = compoCore;
      this.compoSurf = compoSurf;
      this.compoAtmo = compoAtmo;
      this.rotation = rotation;
    },

    construct: function() {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.posX, this.posY, this.sizePx, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }
  };

  var Planet = Object.create(SpaceObject);

  Planet.initPlanet = function(posX, posY, sizePx, color, sizeKm, dist, gravity, surfTemp, mass, compoCore, compoSurf, compoAtmo, rotation, gasy, resAroundSun, rings) {
    this.initSpaceObject(posX, posY, sizePx, color, sizeKm, dist, gravity, surfTemp, mass, compoCore, compoSurf, compoAtmo, rotation);
    this.gasy = gasy;
    this.resAroundSun = resAroundSun;
    this.rings = rings;
  };

  var Moon = Object.create(SpaceObject);

  Moon.initMoon = function(posX, posY, sizePx, color, sizeKm, dist, gravity, surfTemp, mass, compoCore, compoSurf, compoAtmo, rotation, resAroundPlanet) {
    this.initSpaceObject(posX, posY, sizePx, color, sizeKm, dist, gravity, surfTemp, mass, compoCore, compoSurf, compoAtmo, rotation);
    this.resAroundPlanet = resAroundPlanet;
  };

  var Star = Object.create(SpaceObject);
  Star.initStar = function(posX, posY, sizePx, color, sizeKm, dist, gravity, surfTemp, mass, compoCore, compoSurf, compoAtmo, rotation) {
    this.initSpaceObject(posX, posY, sizePx, color, sizeKm, dist, gravity, surfTemp, mass, compoCore, compoSurf, compoAtmo, rotation);
  };

  var sun = Object.create(Star);
  sun.initStar(canvas.width / 2, canvas.height / 2, 30, "yellow", 1392684, 0, 0, 0, 0, 0, 0, 0, 0);
  sun.construct();

}