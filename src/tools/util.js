export const getCoords = (e) => {
  let x = e.clientX - canvas.getBoundingClientRect().left
  let y = e.clientY - canvas.getBoundingClientRect().top;

  return { x: x, y: y }
}

export const drawBorder = (ctx) => {
  
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 661);
  ctx.lineTo(501, 661);
  ctx.lineTo(501, 0);
  ctx.lineTo(0, 0);
  ctx.stroke();
}

export const COLORS = {
  1: '#D64045',
  2: '#EA9010',
  3: '#B7EA1F',
  4: '#7785AC',
  5: '#6A2567',
  6: '#000000'
}