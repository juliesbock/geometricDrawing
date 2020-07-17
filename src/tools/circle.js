import {getCoords } from "./util";
import {dotDist, half, ctx} from "../canvas";

export const drawCircle = (e) => {
  let pos = getCoords(e);
  pos.x = Math.round(pos.x / half) * half;
  pos.y = Math.round(pos.y / half) * half;


  ctx.beginPath(); // necessary to begin drawing this path
  ctx.arc(pos.x, pos.y, dotDist, 0, 2 * Math.PI);
  // ctx.strokeStyle = "red"; // optionally sets color of path
  ctx.stroke(); // draws path (default color is black)
  ctx.closePath(); // optional when drawing a circle
}