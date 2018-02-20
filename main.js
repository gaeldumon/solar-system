window.onload = function () {

  // We get the canvas and his context which is in 2D :
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

  loadJSON(function (response) {

    var solarSystemData = JSON.parse(response);

    var sun = solarSystemData.sun;
    sun.posX = canvas.width / 2;
    sun.posY = canvas.height / 2;

    var mercury = solarSystemData.mercury;
    var venus = solarSystemData.venus;
    var earth = solarSystemData.earth;
    var mars = solarSystemData.mars;
    var jupiter = solarSystemData.jupiter;
    var saturn = solarSystemData.saturn;
    var uranus = solarSystemData.uranus;
    var neptune = solarSystemData.neptune;
    var pluto = solarSystemData.pluto;

    function init(obj1, obj2) {
      if (obj2.type === "rock") {
        obj2.posX = obj1.posX + obj1.sizePx / 2 + obj2.distSun * 100;
        obj2.posY = obj1.posY;
        obj2.sizePx = obj2.sizeKm / 2500;
      } else if (obj2.type === "gas") {
        obj2.posX = obj1.posX + obj1.sizePx / 2 + obj2.distSun * 50;
        obj2.posY = obj1.posY;
        obj2.sizePx = obj2.sizeKm / 7000;
      }
    }

    function construct(obj) {
      context.beginPath();
      context.fillStyle = obj.color;
      context.arc(obj.posX, obj.posY, obj.sizePx, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }

    init(sun, mercury);
    init(sun, venus);
    init(sun, earth);
    init(sun, mars);
    init(sun, jupiter);
    init(sun, saturn);
    init(sun, uranus);
    init(sun, neptune);
    init(sun, pluto);

    construct(sun);
    construct(mercury);
    construct(venus);
    construct(earth);
    construct(mars);
    construct(jupiter);
    construct(saturn);
    construct(uranus);
    construct(neptune);
    construct(pluto);
  });

}