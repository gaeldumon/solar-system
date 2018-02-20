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

  /**Call of the loadJSON() function wrote in loadJSON.js, which makes a XMLHttpRequest and get my local json file.
      Approx  whole code is in loadJSON() --> is it ok ?*/
  loadJSON(function (response) {

    //We parse JSON data as a js object (whole solar system w/ sun, planets and moons)
    var solarSystemData = JSON.parse(response);

    /**We get sun object in solarSystemData
    Sun is centered in canvas so we declare its posX and posY HERE and not in JSON file cause JSON is text only*/
    var sun = solarSystemData.sun;
    sun.posX = canvas.width / 2;
    sun.posY = canvas.height / 2;

    /**We get planets in solarSystemData, like we did with sun.*/
    var mercury = solarSystemData.mercury;
    var venus = solarSystemData.venus;
    var earth = solarSystemData.earth;
    var mars = solarSystemData.mars;
    var jupiter = solarSystemData.jupiter;
    var saturn = solarSystemData.saturn;
    var uranus = solarSystemData.uranus;
    var neptune = solarSystemData.neptune;
    var pluto = solarSystemData.pluto;

    /**Initialize position and size of objects on canvas, obj1 is the reference object (e.g sun)
    So obj2 (e.g a planet) position is RELATIVE to obj1 position*/
    function init(obj1, obj2) {
      /*Distance and size scales to adjust pure data to screen*/
      let smallPlanetsDistScale = 100;
      let smallPlanetsSizeScale = 2500;
      let bigPlanetsDistScale = 40;
      let bigPlanetsSizeScale = 7000;

      /*Type rock aka small planets and type gas aka big planets*/
      if (obj2.type === "rock") {
        obj2.posX = obj1.posX + obj1.sizePx / 2 + obj2.distSun * smallPlanetsDistScale;
        obj2.posY = obj1.posY;
        obj2.sizePx = obj2.sizeKm / smallPlanetsSizeScale;
      } else if (obj2.type === "gas") {
        obj2.posX = obj1.posX + obj1.sizePx / 2 + obj2.distSun * bigPlanetsDistScale;
        obj2.posY = obj1.posY;
        obj2.sizePx = obj2.sizeKm / bigPlanetsSizeScale;
      }
    }

    /**function draws space objects (spheres) on canvas, it takes care of pathing, filling, and shaping*/
    function draw(obj) {
      context.beginPath();
      context.fillStyle = obj.color;
      context.arc(obj.posX, obj.posY, obj.sizePx, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }

    /**A loop that goes through the whole JSON space objects data (solar-system.json parsed as object)
    and init + draws every object (planets, sun)*/
    for (var obj in solarSystemData) {
      init(sun, solarSystemData[obj]);
      draw(solarSystemData[obj]);
    }

  });

}