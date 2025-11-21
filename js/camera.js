// js/camera.js
// Kamera-Modul – einheitlich für alle Features
class Camera {
  constructor(videoId) {
    this.video = document.getElementById(videoId);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  async start(facingMode = 'environment') {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode,
          width: {ideal: 640},
          height: {ideal: 480}
        }
      });
      this.video.srcObject = stream;
      await new Promise(r => this.video.onloadedmetadata = r);
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;
      return stream;
    } catch (e) {
      console.error("Kamera-Fehler", e);
      alert("Kamera nicht verfügbar – erlaube Zugriff");
      return null;
    }
  }

  getFrame() {
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    return this.canvas;
  }

  stop() {
    this.video.srcObject?.getTracks().forEach(t => t.stop());
  }
}
