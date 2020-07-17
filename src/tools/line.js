import { getCoords } from "./util";
import { dotDist, half, ctx } from "../canvas";

let dragging = false;
let dragStartLocation;
let snapshot;

export const dragStartLine = (e) => {
  dragging = true;
  dragStartLocation = getCoords(e);
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

  dragStartLocation.x = Math.round(dragStartLocation.x / half) * half;
  dragStartLocation.y = Math.round(dragStartLocation.y / half) * half;
  ctx.moveTo(dragStartLocation.x, dragStartLocation.y);

  pos.x = Math.round(pos.x / half) * half;
  pos.y = Math.round(pos.y / half) * half;
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}