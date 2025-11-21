// js/modes/hornisse.js
// Hornissen-Erkennung – modular
async function startHornisse(video, canvas, status) {
  const ctx = canvas.getContext('2d');
  const model = await loadModel(CONFIG.models.hornisse);

  const loop = () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    tf.tidy(() => {
      const img = tf.browser.fromPixels(canvas).resizeBilinear([320,320]).expandDims(0).div(255);
      model.executeAsync(img).then(preds => {
        const boxes = preds[0].arraySync()[0];
        let hornets = 0;
        boxes.forEach(b => {
          if (b[4] > CONFIG.confidence && b[5] === 0) { // class 0 = vespa velutina
            drawBox(ctx, b[0]-b[2]/2, b[1]-b[3]/2, b[2], b[3], "#FF0000", "Hornisse", b[4]);
            hornets++;
          }
        });
        status.textContent = `Hornissen: ${hornets}`;
        if (hornets > 0) sendAlarm("Hornisse erkannt!");
      });
    });
    setTimeout(loop, 1000 / CONFIG.fps);
  };
  loop();
}
