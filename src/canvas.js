import {getCoords, drawBorder} from "./tools/util";
import {drawCircle} from "./tools/circle";
import {getGridPoints} from "./tools/grid";
import { dragStartLine, dragLine, dragStopLine} from "./tools/line";
// import { erase } from './tools/eraser';

// to keep consistant sizing:
export const dotDist = 20;
export const half = dotDist / 2;
export const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {  
  const canvas = document.getElementById('canvas');
  getGridPoints();
  // drawBorder(ctx);
  // let mode = 'line';

  canvas.addEventListener('mousedown', dragStartLine, false);
  canvas.addEventListener('mousemove', dragLine, false);
  canvas.addEventListener('mouseup', dragStopLine, false);
  canvas.addEventListener('mouseleave', dragStopLine, false);
  canvas.addEventListener('dblclick', drawCircle, false);

  // TOOLBAR COMMANDS
  // buttons for line thickness
  const smallLine = document.getElementById("smallLn");
  smallLine.addEventListener('click', () =>{
    ctx.lineWidth = 1;
  });

  const mediumLine = document.getElementById("mediumLn");
  mediumLine.addEventListener('click', () => {
    ctx.lineWidth = 3;
  });

  const largeLine = document.getElementById("largeLn");
  largeLine.addEventListener('click', () => {
    ctx.lineWidth = 5;
  });

  const xLargeLine = document.getElementById("xlargeLn");
  xLargeLine.addEventListener('click', () => {
    ctx.lineWidth = 10;
  });

  //save functionality 
  const saveBtn = document.getElementById('downloadBtn')
  saveBtn.addEventListener('click', download, false);

  function download() {
    drawBorder(ctx);
    saveBtn.href = canvas
      .toDataURL("image/png")
      .replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  }

  const that = ctx;;
  const color1 = document.getElementById("color1")
  const color2 = document.getElementById("color2")
  const color3 = document.getElementById("color3")
  const color4 = document.getElementById("color4")
  const color5 = document.getElementById("color5")
  const color6 = document.getElementById("color6")
  const color7 = document.getElementById("color7")

  color1.addEventListener('click', () => ctx.strokeStyle = '#D64045');
  color2.addEventListener('click', () => ctx.strokeStyle = '#EA9010');
  color3.addEventListener('click', () => ctx.strokeStyle = '#99C24D');
  color4.addEventListener('click', () => ctx.strokeStyle = '#7785AC');
  color5.addEventListener('click', () => ctx.strokeStyle = '#6A2567');
  color6.addEventListener('click', () => ctx.strokeStyle = '#eeeeee');
  color7.addEventListener('click', () => ctx.strokeStyle = '#000000');


  // var setRadius = (newRadius) => {
  //   if (newRadius < minRad)
  //     newRadius = minRad
  //   else if (newRadius > maxRad)
  //     newRadius = maxRad;
  //   radius = newRadius;
  //   context.lineWidth = radius * 2;
  //   radSpan.innerHTML = radius;
  // }

  // // Decrease radius of drawing tool
  // const decRad = document.getElementById('decrad');
  // decRad.addEventListener('click', () => {
  //   console.log('minus')
  //   setRadius(radius - interval);
  // });

  // // Increase radius of drawing tool
  // const incRad = document.getElementById('incrad');
  // incRad.addEventListener('click', () => {
  //   console.log('plusss')

  //   if (radius % 1 !== 0) {
  //     setRadius(parseInt(radius) + interval);
  //   } else {
  //     setRadius(radius + interval);
  //   }
  // });


  //tools
  // const eraser = document.getElementById('eraser');
  // eraser.addEventListener('click', () => {
  //   mode = 'eraser';
  //   console.log('erasin')
  // });

  // const line = document.getElementById('line');
  // line.addEventListener('click', () => {
  //   mode = 'line';
  // });


  // const circleEle = document.getElementById('circle');
  // const lineEle = document.getElementById('line');

  // circleEle.addEventListener("click", circleClick, true);
  // lineEle.addEventListener("click", lineClick, true);
})


// document.addEventListener('load', init);


  // const draw = (e) => {
  //   switch (mode) {
  //     case 'line':
  //       console.log('line')
  //       // dragStartLine(e);
  //       break;
  //     case 'eraser':
  //       console.log('eraser')
  //       break;
  //     default:
  //       console.log('somethingElse')
  //       // dragStartLine;
  //       break;
  //   };
  // };

  // if (mode === 'eraser') {
  //   console.log('eraser')
  //   // ctx.strokeStyle = 'whitesmoke';
  //   // canvas.addEventListener('mousedown', dragStartEraser, false);
  //   // canvas.addEventListener('mousemove', dragEraser, false);
  //   // canvas.addEventListener('mouseup', dragStopEraser, false);
  //   // canvas.addEventListener('mouseleave', dragStopEraser, false);
  //   // canvas.addEventListener('dblclick', null, false);
  // }
