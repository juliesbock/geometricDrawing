import {getCoords} from "./tools/util";
import {drawCircle} from "./tools/circle";
import {getGridPoints} from "./tools/grid";
import { dragStartLine, dragLine, dragStopLine} from "./tools/line";

// to keep consistant sizing:
export const dotDist = 20;
export const half = dotDist / 2;
export const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {  
  const canvas = document.getElementById('canvas');
  getGridPoints();

  canvas.addEventListener('mousedown', dragStartLine, false);
  canvas.addEventListener('mousemove', dragLine, false);
  canvas.addEventListener('mouseup', dragStopLine, false);
  canvas.addEventListener('mouseleave', dragStopLine, false);
  canvas.addEventListener('dblclick', drawCircle, false);

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

  //tools
  const eraser = document.getElementById('eraser');
  eraser.addEventListener('click', () => {
    ctx.strokeStyle = 'gray';
  })


  // const circleEle = document.getElementById('circle');
  // const lineEle = document.getElementById('line');

  // circleEle.addEventListener("click", circleClick, true);
  // lineEle.addEventListener("click", lineClick, true);
})


// document.addEventListener('load', init);










// just draw - first try
// document.addEventListener('mousemove', draw);
// document.addEventListener('mousedown', setPosition);
// document.addEventListener('mouseenter', setPosition);



// new position from mouse event
// function setPosition(e) {
//   pos.x = e.clientX;
//   pos.y = e.clientY;

//   //these make it so you can only draw on the grid
//   pos.x = Math.round(pos.x / dotDist) * dotDist; // rounds to nearest dot
//   pos.y = Math.round(pos.y / dotDist) * dotDist; // rounds to nearest dot
// }

// this makes first try work 
// function draw(e) {
//   // mouse left button must be pressed
//   if (e.buttons !== 1) return;

//   ctx.beginPath(); // begin

//   ctx.lineWidth = 1;
//   ctx.lineCap = 'round';
//   ctx.strokeStyle = 'blue';

//   ctx.moveTo(pos.x, pos.y); // from
//   setPosition(e);
//   ctx.lineTo(pos.x, pos.y); // to

//   ctx.stroke(); // draw it!
// }


// function connectPoints(pi1, pi2) {
//   let p1 = points[pi1];
//   let p2 = points[pi2];

//   push();
//   strokeWeight(5);
//   line(p1[0], p1[1], p2[0], p2[1]);
//   pop();
// }


// function displayElastic() {
//   if (nextPoint <= 0 || nextPoint >= points.length)
//     return;

//   let pp = points[nextPoint - 1];
//   line(pp[0], pp[1], mouseX, mouseY);
// }