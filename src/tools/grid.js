import { dotDist, half, ctx } from "../canvas";

export const getGridPoints = () => {
  const pointsArr = [];

  //get all points
  for (let x = 0; x < canvas.width; x += dotDist) {
    for (let y = 0; y < canvas.height; y += dotDist) {
      pointsArr.push([x, y])
    }
  }

  //plot all points to make grid
  pointsArr.forEach(pos => {
    ctx.beginPath();
    ctx.arc(pos[0], pos[1], .5, 0, 2 * Math.PI, true);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
    ctx.strokeStyle = 'black';
  })
}

