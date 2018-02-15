window.onload = function() {

  // We get the canvas and his context which is in 2D :

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
    initSpaceObjectInfo: function(name, distSun, distEarth, sizeKm, coreTemp, surfTemp, mass, rotation, gravity, compo) {
      this.name = name;
      this.distSun = distSun;
      this.distEarth = distEarth
      this.sizeKm = sizeKm;
      this.coreTemp = coreTemp;
      this.surfTemp = surfTemp;
      this.mass = mass;
      this.rotation = rotation;
      this.gravity = gravity;
      this.compo = compo;
    },

    initSpaceObjectOnCanvas: function(posX, posY, sizePx, color) {
      this.posX = posX;
      this.posY = posY;
      this.sizePx = sizePx;
      this.color = color;
    },

    construct: function() {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.posX, this.posY, this.sizePx, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }
  };

  var Star = Object.create(SpaceObject);
  Star.initStar = function(starType) {
    this.starType = starType;
  };

  var sun = Object.create(Star);
  sun.initSpaceObjectInfo("Sun", 0, 1, 1392684, 15000000, 5476, 318258, 25, 27.9, "Hydrogen, Helium, Oxygen, carbon, Iron, Neon");
  sun.initSpaceObjectOnCanvas(canvas.width / 2, canvas.height / 2, 30, "yellow");
  sun.construct();

  //***************************************************************************

  var Planet = Object.create(SpaceObject);
  Planet.initPlanet = function(type, revAroundSun, rings) {
    this.type = type;
    this.revAroundSun = revAroundSun;
    this.rings = rings;
  };

  var mercury = Object.create(Planet);
  mercury.initSpaceObjectInfo("Mercury", 0.38, 0.62, 4878, "unknown", 169, 0.05, 58, 0.37, "");
  mercury.initSpaceObjectOnCanvas(sun.posX + mercury.distSun * 100, sun.posY, mercury.sizeKm / 2500, "grey");
  mercury.initPlanet("Rock", 88, false);
  mercury.construct();

  var venus = Object.create(Planet);
  venus.initSpaceObjectInfo("Venus", 0.72, 0.28, 12102, "unknown", 462, 0.81, 243, 0.90, "unknown");
  venus.initSpaceObjectOnCanvas(sun.posX + venus.distSun * 100, sun.posY, venus.sizeKm / 2500, "brown");
  venus.initPlanet("Rock", 225, false);
  venus.construct();

  var earth = Object.create(Planet);
  earth.initSpaceObjectInfo("Earth", 1, 0, 12756, "unknown", 15, 1, 1, 1, "Water");
  earth.initSpaceObjectOnCanvas(sun.posX + earth.distSun * 100, sun.posY, earth.sizeKm / 2500, "blue");
  earth.initPlanet("Rock", 365, false);
  earth.construct();

  //***************************************************************************

  var Moon = Object.create(SpaceObject);

  Moon.initMoon = function(hostPlanet, revAroundPlanet) {
    this.hostPlanet = hostPlanet;
    this.revAroundPlanet = revAroundPlanet;
  };
}