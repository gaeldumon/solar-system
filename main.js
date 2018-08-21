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
}