class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.width = canvas.width;
    this.height = canvas.height;
    this.baseHeight = 720;
    this.ratio = this.height / this.baseHeight;

    // window.addEventListener("resize", function (e) {
    //   console.log(e); // if we use here (this) it will point to window instead of game class
    // this.canvas.width = e.currentTarget.innerWidth;
    // });
  }
}

window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 720;
  canvas.height = 720;

  const game = new Game(canvas, ctx);

  let lastTime = 0;

  function animate() {
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
});
