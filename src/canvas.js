import { getCoords, drawBorder} from "./tools/util";
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
  // drawBorder();
  // let mode = 'line';

  canvas.addEventListener('mousedown', dragStartLine, false);
  canvas.addEventListener('mousemove', dragLine, false);
  canvas.addEventListener('mouseup', dragStopLine, false);
  canvas.addEventListener('mouseleave', dragStopLine, false);
  canvas.addEventListener('dblclick', drawCircle, false);

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


  // TOOLBAR COMMANDS
  // buttons for line thickness
  const smallLine = document.getElementById("smallLn");
  smallLine.addEventListener('click', () =>{
    ctx.lineWidth = 1;
  });

  const medLine = document.getElementById("mediumLn");
  medLine.addEventListener('click', () => {
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
    // saveBtn.download = "image.png";
    saveBtn.href = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  }

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
