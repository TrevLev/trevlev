import React, { useRef, useEffect } from 'react'

const Canvas = props => {

  const canvasRef = useRef(null)

  // const draw = (ctx, frameCount) => {
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  //   ctx.fillStyle = '#000000'
  //   ctx.beginPath()
  //   ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
  //   ctx.fill()
  // }

  function randn_bm() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
  }

  let ballContainer = [];

  class Ball {
    constructor(canvas) {
      this.radius = 10;
      this.position = {
        x: canvas.width / 2,
        y: canvas.height + this.radius
      }
      this.color = `hsl(${Math.random() * 120 + 200}, 100%, 50%, 0.7)`;
      this.velocity = {
        x: (randn_bm() * 20) - 10,
        y: (randn_bm() * -10) - 10
      }
    }

    move() {
      this.velocity.x += 0;
      this.velocity.y += 0.1;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    death(i, canvas) {
      if (this.position.y > canvas.height + this.radius) {
        ballContainer.splice(i, 1);
      }
    }
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //Our draw came here
    const render = () => {
      frameCount++
      // draw(context, frameCount)

      for (let i = 0; i < 10; i++) {
        ballContainer.push(new Ball(canvas))
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      let i = ballContainer.length;
      while (i--) {
        ballContainer[i].move();
        ballContainer[i].draw(context);
        ballContainer[i].death(i, canvas);
      }

      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas