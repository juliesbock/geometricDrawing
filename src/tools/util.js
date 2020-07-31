export const getCoords = (e) => {
  let x = e.clientX - canvas.getBoundingClientRect().left
  let y = e.clientY - canvas.getBoundingClientRect().top;

  return { x: x, y: y }
}

// export const drawBorder = () => {

// }