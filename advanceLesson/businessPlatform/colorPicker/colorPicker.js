/*
   由zhaojunzhe于2018/4/8创建
*/
function renderColorArea(id, w, h, isBlock) {
  let canvas = document.getElementById(id);
  let context = canvas.getContext("2d");
  let linearGrad = context.createLinearGradient(0, 0, w, h);//对角线渐变到（400，300）这个坐标
  if(isBlock) {
    linearGrad.addColorStop(0.0, 'white');
    linearGrad.addColorStop(1.0, 'red');
  } else {
    linearGrad.addColorStop(0.0,'#FF3333');
    linearGrad.addColorStop(0.2,'#F3FF33');
    linearGrad.addColorStop(0.4,'#33FF33');
    linearGrad.addColorStop(0.6,'#3333FF');
    linearGrad.addColorStop(0.8,'#FF33F3');
    linearGrad.addColorStop(1.0,'#FF3333');
  }
  context.fillStyle = linearGrad;
  context.fillRect(0, 0, w,h);
}
renderColorArea('canvas', 400, 400,true);
renderColorArea('canvasOne', 50, 400,false);

let canvas = document.getElementById('canvas');
let circle = document.getElementById('chooseColor');
canvas.addEventListener('mousedown',(e) => {
  let imageData = document.getElementById('canvas').getContext('2d').getImageData(e.offsetX,e.offsetY,1,1); // 获得点击区域的图像信息，返回的信息中有点击区域的RGB数值，将数值转换后就可以得到点击区域的十六进制代码。
  let color = `#${imageData.data[0].toString(16)}${imageData.data[1].toString(16)}${imageData.data[2].toString(16)}`;// color是点击区域的颜色
  console.log(imageData.data,color);
  document.getElementById('color').value=color;//设置“颜色”输入框为当前点击区域的颜色
  document.getElementById('colorShow').style.backgroundColor=color;// 设置“颜色展示区域”的颜色为当前点击的颜色
  circle.style.top = e.offsetY + 'px';// 把小圆圈的位置移到鼠标点击的位置上
  circle.style.left = e.offsetX + 'px';// 把小圆圈的位置移到鼠标点击的位置上
});