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
    addCheckmark(smallLine, 'size', "●")
  });

  const mediumLine = document.getElementById("mediumLn");
  mediumLine.addEventListener('click', () => {
    ctx.lineWidth = 3;
    addCheckmark(mediumLine,'size', "●")
  });

  const largeLine = document.getElementById("largeLn");
  largeLine.addEventListener('click', () => {
    ctx.lineWidth = 5;
    addCheckmark(largeLine, 'size', "●")
  });

  const xLargeLine = document.getElementById("xlargeLn");
  xLargeLine.addEventListener('click', () => {
    ctx.lineWidth = 10;
    addCheckmark(xLargeLine, 'size', "●")
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

  // const that = ctx;;
  const color1 = document.getElementById("color1")
  const color2 = document.getElementById("color2")
  const color3 = document.getElementById("color3")
  const color4 = document.getElementById("color4")
  const color5 = document.getElementById("color5")
  const color6 = document.getElementById("color6")
  const color7 = document.getElementById("color7")

  color1.addEventListener('click', () => {
    ctx.strokeStyle = '#D64045'
    addCheckmark(color1, 'colors')
  });
  color2.addEventListener('click', () => {
    ctx.strokeStyle = '#EA9010'
    addCheckmark(color2, 'colors')
  });
  color3.addEventListener('click', () => {
    ctx.strokeStyle = '#99C24D'
    addCheckmark(color3, 'colors')
  });
  color4.addEventListener('click', () => {
    ctx.strokeStyle = '#7785AC'
    addCheckmark(color4, 'colors')
  });
  color5.addEventListener('click', () => {
    ctx.strokeStyle = '#6A2567'
    addCheckmark(color5, 'colors')
  });
  color6.addEventListener('click', () => {
    ctx.strokeStyle = '#eeeeee'
    addCheckmark(color6, 'colors')
  });
  color7.addEventListener('click', () => {
    ctx.strokeStyle = '#000000'
    addCheckmark(color7, 'colors')
  });

  const addCheckmark = (targetEle, type, replacementText = "") => {
    let selectedEles = [color1, color2, color3, color4, color5, color6, color7]
    if (type == "size") selectedEles = [smallLine, mediumLine,largeLine,xLargeLine]
    
    selectedEles.forEach (ele => {
      if (ele !== targetEle) {
        ele.classList.remove('with-checkmark')
        if (ele.innerHTML.includes('✔')) ele.innerHTML = replacementText
      } else {
        ele.innerHTML = '✔'
        ele.classList.add('with-checkmark')
      }
    })
  }
})