import {getCoords} from "./tools/util";
import {drawCircle} from "./tools/circle";

// to keep consistant sizing:
export const dotDist = 20;
export const half = dotDist / 2;
export const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  // const circleEle = document.getElementById('circle');
  // const lineEle = document.getElementById('line');


  //makes array containing all grid points
  const getGridPoints = () => {
    const pointsArr = [];
    
    for (let x = 0; x < canvas.width; x += dotDist){
      for (let y = 0; y < canvas.height; y += dotDist) {
        pointsArr.push([x,y])
      }  
    }
    return pointsArr;
  }


  //points = 2d array with all points on grid
  const gridPoints = getGridPoints();
  gridPoints.forEach(pos => {
    ctx.beginPath();
    ctx.arc(pos[0], pos[1], .5, 0, 2 * Math.PI, true);
    
    ctx.strokeStyle = 'black';
    ctx.stroke();
  });

  // window.addEventListener(MouseEvent, ())
  let dragging = false, dragStartLocation, snapshot;

  // canvas.addEventListener('');
  // circleEle.addEventListener("click", circleClick, true);
  // lineEle.addEventListener("click", lineClick, true);

  

  // const colorfill = (e) => {
  //   ctx.fill();
  // }

  const dragStart = (e) => {
    dragging = true;
    dragStartLocation = getCoords(e);
    takeSnapshot();
  }

  const drag = (e) => {
    if(dragging){
      restoreSnapshot();
      let pos = getCoords(e);
      drawLine(pos);
    }
  }

  const dragStop = (e) => {
    if (dragging){
      dragging = false;
      restoreSnapshot();
      let pos = getCoords(e);
      drawLine(pos);
    }
  }

  const takeSnapshot = () => {
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  const restoreSnapshot = () => {
    ctx.putImageData(snapshot,0,0);
  }

  const drawLine = (pos) => {
    ctx.beginPath();

    dragStartLocation.x = Math.round(dragStartLocation.x / half) * half;
    dragStartLocation.y = Math.round(dragStartLocation.y / half) * half;
    ctx.moveTo(dragStartLocation.x, dragStartLocation.y);

    pos.x = Math.round(pos.x / half) * half;
    pos.y = Math.round(pos.y / half) * half;
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  canvas.addEventListener('mousedown', dragStart, false);
  canvas.addEventListener('mousemove', drag, false);
  canvas.addEventListener('mouseup', dragStop, false);
  canvas.addEventListener('mouseleave', dragStop, false);
  canvas.addEventListener('dblclick', drawCircle, false);
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