// js/config.js
// Zentrale Einstellungen – änderbar ohne Code
const CONFIG = {
  backendUrl: "https://dein-backend.onrender.com",  // leer = kein Backend
  fps: /Mobi/i.test(navigator.userAgent) ? 8 : 15,  // Mobile: niedrig, Desktop: höher
  confidence: 0.8,  // Min-Confidence für alle Modelle
  models: {
    hornisse: 'models/hornisse/model.json',
    varroa: 'models/varroa/model.json',
    drohnenbrut: 'models/drohnenbrut/model.json',
    pollen: 'models/pollen/model.json',
    schwarm: 'models/schwarm/model.json',
    queen: 'models/queen/model.json'
  },
  alarm: {
    twilioSid: "",  // leer = kein SMS
    twilioToken: "",
    twilioFrom: ""
  }
};
