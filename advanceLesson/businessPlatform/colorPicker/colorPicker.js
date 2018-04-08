/*
   由zhaojunzhe于2018/4/8创建
*/
function renderColorArea(id, w, h) {
  let canvas = document.getElementById(id);
  let context = canvas.getContext("2d");
  let linearGrad = context.createLinearGradient(0, 0, w, h);//对角线渐变到（400，300）这个坐标
  linearGrad.addColorStop(0.0, 'white');
  // linearGrad.addColorStop(0.25, 'yellow');
  // linearGrad.addColorStop(0.5, 'green');
  // linearGrad.addColorStop(0.75, 'blue');
  linearGrad.addColorStop(1.0, 'red');
  context.fillStyle = linearGrad;
  context.fillRect(0, 0, w,h);
}
renderColorArea('canvas', 400, 400);
renderColorArea('canvasOne', 50, 400);