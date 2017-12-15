export default class Terrain {
  constructor(screenWidth, screenHeight) {
    var x = 0;
    var y = Math.random()*screenHeight/2 + screenHeight/2 - 10;
    var dist = Math.random() * 10;
    this.path = [{x: x, y: y}];

    function clampHeight(y) {
      do {
        var newHeight = y;
        var probability = Math.random();
        if(probability < 0.30) { 
          newHeight -= Math.random() * 50;
        }
        else if (probability < 0.60) { 
          newHeight += Math.random() * 50;
        }
      } while(newHeight < screenHeight/2 || newHeight > screenHeight-10);
      return newHeight;
    }

    while (x < screenWidth) {
      x = x + Math.random() * 15;
      y = clampHeight(y);
      this.path.push({x: x, y: y});
    }

  }

  render(ctx) {
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    for(var i = 1; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }
}