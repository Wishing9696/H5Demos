<template>
  <div id="canvasdemo">
    <p>
      <el-button @click="click">Canvas</el-button>
    </p>
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.writecanvas();
    },
    writecanvas() {
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      canvas.width = 800;
      canvas.height = 800;
      // // if (ctx.ellipse) {
      // //   ctx.ellipse(400, 400, 300, 200, 0, 0, Math.PI * 2);
      // //   ctx.fillStyle = "red";
      // //   ctx.strokeStyle = "blue";
      // //   ctx.fill();
      // //   ctx.stroke();
      // // } else {
      // //   alert("no ellipse!");
      // // }
      ctx.strokeStyle = "dark";
      ctx.beginPath();
      ctx.moveTo(0, 200);
      ctx.quadraticCurveTo(75, 50, 300, 200);
      ctx.stroke();
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = "blue";
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(0, 200);
      ctx.moveTo(75, 50);
      ctx.lineTo(300, 200);
      ctx.stroke();
    }
  }
};
</script>
