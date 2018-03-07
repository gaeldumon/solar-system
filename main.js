window.onload = function () {

  /**We get the canvas and his ctx (which is in 2D) in variables*/

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

  /** Call of the loadJSON() function wrote in loadJSON.js, which makes a XMLHttpRequest and get my local json file.
      Approx  whole code is in loadJSON() --> is it ok ? */

  loadJSON(function (response) {

    // We parse JSON data as a js object (whole solar system w/ sun, planets and moons)
    var solarSystemData = JSON.parse(response);

    var sun = solarSystemData.sun;
    var mercury = solarSystemData.mercury;
    var venus = solarSystemData.venus;
    var earth = solarSystemData.earth;
    var mars = solarSystemData.mars;
    var jupiter = solarSystemData.jupiter;
    var saturn = solarSystemData.saturn;
    var uranus = solarSystemData.uranus;
    var neptune = solarSystemData.neptune;
    var pluto = solarSystemData.pluto;

    var drawSun = function () {
      sun.posX = canvas.width / 2;
      sun.posY = canvas.height / 2;

      ctx.beginPath();
      ctx.fillStyle = sun.color;
      ctx.arc(sun.posX, sun.posY, sun.sizePx, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }

    /** draw() draws space objects (spheres) on canvas, it takes care of pathing, filling, and shaping */
    var drawPlanet = function (obj) {
      ctx.beginPath();
      ctx.fillStyle = obj.color;
      ctx.arc(obj.posX, obj.posY, obj.sizePx, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }

    var angle = 0;
    var da = 0.07;

    var animate = function (obj) {
      obj = mercury;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawSun();

      angle = angle + da;
      obj.posX = sun.posX + (sun.sizePx + obj.distSunPx) * Math.sin(angle);
      obj.posY = sun.posY + (sun.sizePx + obj.distSunPx) * Math.cos(angle);
      drawPlanet(obj);

      window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(animate);
  });

}