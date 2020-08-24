export const getCoords = (e) => {
  let x = e.clientX - canvas.getBoundingClientRect().left
  let y = e.clientY - canvas.getBoundingClientRect().top;

  return { x: x, y: y }
}

export const drawBorder = (ctx) => {
  let holdColor = ctx.strokeStyle;
  let holdWidth = ctx.lineWidth;
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 661);
  ctx.lineTo(501, 661);
  ctx.lineTo(501, 0);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.strokeStyle = holdColor;
  ctx.lineWidth = holdWidth;
}
