window.onload = function () {

  /**We get the canvas and his context (which is in 2D) in variables*/

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

  /** Call of the loadJSON() function wrote in loadJSON.js, which makes a XMLHttpRequest and get my local json file.
      Approx  whole code is in loadJSON() --> is it ok ? */

  loadJSON(function (response) {

    // We parse JSON data as a js object (whole solar system w/ sun, planets and moons)

    var solarSystemData = JSON.parse(response);

    var myInterval = setInterval(animate, 1000 / 30);

    /** We get sun object in solarSystemData
    Sun is centered in canvas so we declare its posX and posY HERE and not in JSON file cause JSON is text only */

    var sun = solarSystemData.sun;
    sun.posX = canvas.width / 2;
    sun.posY = canvas.height / 2;

    /** We get planets in solarSystemData, like we did with sun. */

    var mercury = solarSystemData.mercury;
    var venus = solarSystemData.venus;
    var earth = solarSystemData.earth;
    var mars = solarSystemData.mars;
    var jupiter = solarSystemData.jupiter;
    var saturn = solarSystemData.saturn;
    var uranus = solarSystemData.uranus;
    var neptune = solarSystemData.neptune;
    var pluto = solarSystemData.pluto;

    /** init() initialize position and size of objects on canvas, obj1 is the BARYCENTER object (e.g sun)
    So obj2 (e.g a planet) position is RELATIVE to obj1 position */

    var init = function (obj1, obj2) {

      /* Adjusting scales to... scale object data (position and size) to screen, depending on type and names of planets */
      var distScale;
      var sizeScale;

      if (obj2.type === "rock") {
        distScale = 100;
        sizeScale = 2500;
        if (obj2.name === "Pluto") {
          distScale = 22;
          sizeScale = 1000;
        }
      } else if (obj2.type === "gas") {
        sizeScale = 7000;
        if (obj2.name === "Uranus") {
          distScale = 30;
        } else if (obj2.name === "Neptune") {
          distScale = 25;
        } else {
          distScale = 40;
        }
      }
      obj2.posX = obj1.posX + (obj1.sizePx) + (obj2.distSun * distScale);
      obj2.posY = obj1.posY;
      obj2.sizePx = obj2.sizeKm / sizeScale;
    }

    /** draw() draws space objects (spheres) on canvas, it takes care of pathing, filling, and shaping */

    var draw = function (obj) {
      context.beginPath();
      context.fillStyle = obj.color;
      context.arc(obj.posX, obj.posY, obj.sizePx, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }

    var animate = function animate(obj1, obj2) {
      context.clearRect(0, 0, canvas.width, canvas.height);
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

    draw(sun);
    draw(mercury);
    draw(venus);
    draw(earth);
    draw(mars);
    draw(jupiter);
    draw(saturn);
    draw(uranus);
    draw(neptune);
    draw(pluto);

    /** A loop that goes through the whole JSON space objects data (solar-system.json parsed as object)
    and init + draws every object (planets, sun) */
    /*
    for (var obj in solarSystemData) {
      init(sun, solarSystemData[obj]);
      draw(solarSystemData[obj]);
    }
    */

  });

}