// js/model-loader.js
// Modell-Laden – offline-first
async function loadModel(modelPath) {
  try {
    const cache = await caches.open('models');
    const cached = await cache.match(modelPath);
    if (cached) return await tf.loadGraphModel(tf.io.fromMemory(await cached.arrayBuffer()));

    const model = await tf.loadGraphModel(modelPath);
    await cache.put(modelPath, new Response(model.toJSON()));
    return model;
  } catch (e) {
    console.error("Modell-Laden fehlgeschlagen", e);
    alert("Modell nicht gefunden – überprüfe /models/");
    throw e;
  }
}
