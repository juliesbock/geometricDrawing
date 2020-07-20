import { getCoords } from "./util";
import { dotDist, half, ctx } from "../canvas";

let dragging = false;
let dragStartCoords;
let snapshot;

export const dragStartLine = (e) => {
  dragging = true;
  dragStartCoords = getCoords(e);
  takeSnapshot();
}

export const dragLine = (e) => {
  if (dragging) {
    restoreSnapshot();
    let pos = getCoords(e);
    drawLine(pos);
  }
}

export const dragStopLine = (e) => {
  if (dragging) {
    dragging = false;
    restoreSnapshot();
    let pos = getCoords(e);
    ctx.lineCap = "round";
    drawLine(pos);
  }
}

const takeSnapshot = () => {
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

const restoreSnapshot = () => {
  ctx.putImageData(snapshot, 0, 0);
}

const drawLine = (pos) => {
  ctx.beginPath();

  dragStartCoords.x = Math.round(dragStartCoords.x / half) * half;
  dragStartCoords.y = Math.round(dragStartCoords.y / half) * half;
  ctx.moveTo(dragStartCoords.x, dragStartCoords.y);

  pos.x = Math.round(pos.x / half) * half;
  pos.y = Math.round(pos.y / half) * half;
  ctx.lineTo(pos.x, pos.y);
  if ((pos.x !== dragStartCoords.x) || (pos.y !== dragStartCoords.y)) ctx.stroke();
}


