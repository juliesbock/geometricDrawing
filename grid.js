
// const points = [
//   [342, 10], [281, 71], [178, 203], [303, 192], [115, 315],
//   [270, 306], [190, 349], [85, 395], [47, 443], [340, 433],
//   [336, 570], [409, 570], [401, 435], [708, 442], [635, 388],
//   [542, 350], [447, 318], [619, 323], [411, 199], [556, 198],
//   [491, 141], [381, 55]
// ];

// const pointRadius = 5;

// var nextPoint = 0;

// function loop() {
//   clear();

//   displayPoints();
//   displayConnected();
//   displayElastic();

//   // displayInstructions();
// }

// function mouseClicked() {
//   var p = getNext();
//   if (!p) {
//     nextPoint = 0;
//     return;
//   }

//   if (!inPoint(p))
//     return;

//   nextPoint++;
// }

// function displayPoints() {
//   if (nextPoint >= points.length)
//     return;

//   for (var i = 0; i < points.length; i++) {
//     var o = points[i];
//     var x = o[0];
//     var y = o[1];

//     noFill();
//     circle(x, y, pointRadius);

//     text(i, x + pointRadius + 2, y);
//   }
// }

// function displayConnected() {
//   for (var i = 0; i < nextPoint - 1; i++) {
//     connectPoints(i, i + 1);
//   }

//   if (nextPoint == points.length) {
//     connectPoints(nextPoint - 1, 0);
//   }
// }

// function connectPoints(pi1, pi2) {
//   var p1 = points[pi1];
//   var p2 = points[pi2];

//   push();
//   strokeWeight(5);
//   line(p1[0], p1[1], p2[0], p2[1]);
//   pop();
// }


// function displayElastic() {
//   if (nextPoint <= 0 || nextPoint >= points.length)
//     return;

//   var pp = points[nextPoint - 1];
//   line(pp[0], pp[1], mouseX, mouseY);
// }

// function inPoint(p) {
//   //was used to highlight next dot
//   return collisionCirclePoint(p[0], p[1], pointRadius, mouseX, mouseY);
// }

// // function displayInstructions() {
// //   push();

// //   noStroke();
// //   fill(0);
// //   textAlign(CENTER, CENTER);

// //   if (nextPoint == 0) {
// //     text("Use your mouse to connect the dots in the specified order.", width / 2, height - 10);
// //   }
// //   else if (nextPoint >= points.length) {
// //     text("CONGRATULATIONS!!! Click to restart.", width / 2, height - 10);
// //   }
// //   else {
// //     var found = nextPoint;
// //     var remaining = points.length - found;

// //     text("Found: " + found + " Remaining: " + remaining, width / 2, height - 10);
// //   }

// //   pop();
// // }



    // <option value="brush">Brush</option>
    // <option value="eraser">Eraser</option>
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight - 8;
  canvas.width = window.innerWidth - 8;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 10;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgb(0, 0, 0)";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  let painting = false;

  function startPosition(e) {
      painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);

  var select = document.getElementById("tool");
  select.addEventListener("change", function () {
    mode = select.value;
    if (mode == "brush") {
      // this can't bring brush back!
      ctx.globalcompositeoperation = "source-over";
      console.log("brush");
    } else {
      // this changes brush to eraser successfully
      ctx.globalCompositeOperation = "destination-out";
      // ctx.globalcompositeoperation = "source-over";
      console.log("eraser");
    }
  });
});

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
var select = document.getElementById("tool");
select.addEventListener("change", function () {
  mode = select.value;
});

 //stackoverflow.com/questions/61532306/javascript-canvas-switch-between-globalcompositeoperation