import { getCoords } from "./util";
import { dotDist, half, ctx } from "../canvas";

export const erase = () => {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

let a = []
