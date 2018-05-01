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

  /** loadJSON() function wrote in loadJSON.js, which makes a XMLHttpRequest and get my local json file.
      Approx whole code is in this loadJSON() call --> is it ok ? */

  loadJSON(function (response) {

    // We parse the loaded JSON data as an object (whole solar system)
    var solarSystemData = JSON.parse(response);

    // We get the solar system elements from the parsed JSON data
    var sun = solarSystemData.sun;
    var mercury = solarSystemData.mercury;
    var venus = solarSystemData.venus;
    var earth = solarSystemData.earth;
    var mars = solarSystemData.mars;
    var jupiter = solarSystemData.jupiter;
    var saturn = solarSystemData.saturn;
    var uranus = solarSystemData.uranus;
    var neptune = solarSystemData.neptune;

    var draw = function (obj) {
      ctx.beginPath();
      ctx.fillStyle = obj.color;
      ctx.arc(obj.posX, obj.posY, obj.sizePx, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }

    sun.posX = canvas.width / 2;
    sun.posY = canvas.height / 2;

    var angleMe = 0;
    var angleVe = 0;
    var angleEa = 0;
    var angleMa = 0;
    var angleJu = 0;
    var angleSa = 0;
    var angleUr = 0;
    var angleNe = 0;

    var distSc = 100;

    var animate = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(sun);

      angleMe = angleMe + mercury.revRatio;
      mercury.posX = sun.posX + (sun.sizePx / 2 + mercury.sizePx / 2 + mercury.distSun * distSc) * Math.sin(angleMe);
      mercury.posY = sun.posY + (sun.sizePx / 2 + mercury.sizePx / 2 + mercury.distSun * distSc) * Math.cos(angleMe);

      angleVe = angleVe + venus.revRatio;
      venus.posX = sun.posX + (sun.sizePx / 2 + venus.sizePx / 2 + venus.distSun * distSc) * Math.sin(angleVe);
      venus.posY = sun.posY + (sun.sizePx / 2 + venus.sizePx / 2 + venus.distSun * distSc) * Math.cos(angleVe);

      angleEa = angleEa + earth.revRatio;
      earth.posX = sun.posX + (sun.sizePx / 2 + earth.sizePx / 2 + earth.distSun * distSc) * Math.sin(angleEa);
      earth.posY = sun.posY + (sun.sizePx / 2 + earth.sizePx / 2 + earth.distSun * distSc) * Math.cos(angleEa);

      angleMa = angleMa + mars.revRatio;
      mars.posX = sun.posX + (sun.sizePx / 2 + mars.sizePx / 2 + mars.distSun * distSc) * Math.sin(angleMa);
      mars.posY = sun.posY + (sun.sizePx / 2 + mars.sizePx / 2 + mars.distSun * distSc) * Math.cos(angleMa);

      angleJu = angleJu + jupiter.revRatio;
      jupiter.posX = sun.posX + (sun.sizePx / 2 + jupiter.sizePx / 2 + jupiter.distSun * distSc) * Math.sin(angleJu);
      jupiter.posY = sun.posY + (sun.sizePx / 2 + jupiter.sizePx / 2 + jupiter.distSun * distSc) * Math.cos(angleJu);

      angleSa = angleSa + saturn.revRatio;
      saturn.posX = sun.posX + (sun.sizePx / 2 + saturn.sizePx / 2 + saturn.distSun * distSc) * Math.sin(angleSa);
      saturn.posY = sun.posY + (sun.sizePx / 2 + saturn.sizePx / 2 + saturn.distSun * distSc) * Math.cos(angleSa);

      angleUr = angleUr + uranus.revRatio;
      uranus.posX = sun.posX + (sun.sizePx / 2 + uranus.sizePx / 2 + uranus.distSun * distSc) * Math.sin(angleUr);
      uranus.posY = sun.posY + (sun.sizePx / 2 + uranus.sizePx / 2 + uranus.distSun * distSc) * Math.cos(angleUr);

      angleNe = angleNe + neptune.revRatio;
      neptune.posX = sun.posX + (sun.sizePx / 2 + neptune.sizePx / 2 + neptune.distSun * distSc) * Math.sin(angleNe);
      neptune.posY = sun.posY + (sun.sizePx / 2 + neptune.sizePx / 2 + neptune.distSun * distSc) * Math.cos(angleNe);

      draw(mercury);
      draw(venus);
      draw(earth);
      draw(mars);
      draw(jupiter);
      draw(saturn);
      draw(uranus);
      draw(neptune);

      window.requestAnimationFrame(animate);
    }
    window.requestAnimationFrame(animate);
  });
}