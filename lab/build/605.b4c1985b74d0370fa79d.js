(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[605,132],{46753:(e,t,s)=>{"use strict";s.r(t),s.d(t,{IDocumentProviderFactory:()=>I,ProviderMock:()=>b,WebSocketProviderWithLocks:()=>v});var n=s(90),o=s(62538),c=s(40870),i=s(23406),r=s(49e3),a=s(68078),l=s(6493),u=s(31955),h=s(75736),d=s(21332),f=s(69600);const g=[];g[0]=(e,t,s,n,o)=>{i.uE(e,0);const c=a.zu(t,e,s.doc,s);n&&c===a.Px&&!s.synced&&(s.synced=!0)},g[3]=(e,t,s,n,o)=>{i.uE(e,1),i.mP(e,l.xq(s.awareness,Array.from(s.awareness.getStates().keys())))},g[1]=(e,t,s,n,o)=>{l.oy(s.awareness,r.HN(t),s)},g[2]=(e,t,s,n,o)=>{((e,t,s)=>{switch(r.yg(e)){case 0:s(t,r.kf(e))}})(t,s.doc,m)};const m=(e,t)=>console.warn(`Permission denied to access ${e.url}.\n${t}`),p=(e,t,s)=>{const n=r.l1(t),o=i.Mf(),c=r.yg(n),a=e.messageHandlers[c];return a?a(o,n,e,s,c):console.error("Unable to compute message"),o},w=e=>{if(e.shouldConnect&&null===e.ws){const t=new e._WS(e.url);t.binaryType="arraybuffer",e.ws=t,e.wsconnecting=!0,e.wsconnected=!1,e.synced=!1,t.onmessage=s=>{e.wsLastMessageReceived=c.ZG();const n=p(e,new Uint8Array(s.data),!0);i.kE(n)>1&&t.send(i._f(n))},t.onclose=()=>{e.ws=null,e.wsconnecting=!1,e.wsconnected?(e.wsconnected=!1,e.synced=!1,l.Ag(e.awareness,Array.from(e.awareness.getStates().keys()).filter((t=>t!==e.doc.clientID)),e),e.emit("status",[{status:"disconnected"}])):e.wsUnsuccessfulReconnects++,setTimeout(w,d.VV(1200*d.mv(e.wsUnsuccessfulReconnects+1),2500),e)},t.onopen=()=>{e.wsLastMessageReceived=c.ZG(),e.wsconnecting=!1,e.wsconnected=!0,e.wsUnsuccessfulReconnects=0,e.emit("status",[{status:"connected"}]);const s=i.Mf();if(i.uE(s,0),a._J(s,e.doc),t.send(i._f(s)),null!==e.awareness.getLocalState()){const s=i.Mf();i.uE(s,1),i.mP(s,l.xq(e.awareness,[e.doc.clientID])),t.send(i._f(s))}},e.emit("status",[{status:"connecting"}])}},y=(e,t)=>{e.wsconnected&&e.ws.send(t),e.bcconnected&&e.mux((()=>{o.nY(e.bcChannel,t)}))};class _ extends h.y{constructor(e,t,s,{connect:n=!0,awareness:r=new l.GL(s),params:h={},WebSocketPolyfill:d=WebSocket,resyncInterval:m=-1}={}){for(super();"/"===e[e.length-1];)e=e.slice(0,e.length-1);const w=(e=>f.UI(e,((e,t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)).join("&"))(h);this.bcChannel=e+"/"+t,this.url=e+"/"+t+(0===w.length?"":"?"+w),this.roomname=t,this.doc=s,this._WS=d,this.awareness=r,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.wsUnsuccessfulReconnects=0,this.messageHandlers=g.slice(),this.mux=u.M(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=n,this._resyncInterval=0,m>0&&(this._resyncInterval=setInterval((()=>{if(this.ws){const e=i.Mf();i.uE(e,0),a._J(e,s),this.ws.send(i._f(e))}}),m)),this._bcSubscriber=e=>{this.mux((()=>{const t=p(this,new Uint8Array(e),!1);i.kE(t)>1&&o.nY(this.bcChannel,i._f(t))}))},this._updateHandler=(e,t)=>{if(t!==this){const t=i.Mf();i.uE(t,0),a.lr(t,e),y(this,i._f(t))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:e,updated:t,removed:s},n)=>{const o=e.concat(t).concat(s),c=i.Mf();i.uE(c,1),i.mP(c,l.xq(r,o)),y(this,i._f(c))},"undefined"!=typeof window&&window.addEventListener("beforeunload",(()=>{l.Ag(this.awareness,[s.clientID],"window unload")})),r.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval((()=>{this.wsconnected&&3e4<c.ZG()-this.wsLastMessageReceived&&this.ws.close()}),3e3),n&&this.connect()}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){0!==this._resyncInterval&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){this.bcconnected||(o.Ld(this.bcChannel,this._bcSubscriber),this.bcconnected=!0),this.mux((()=>{const e=i.Mf();i.uE(e,0),a._J(e,this.doc),o.nY(this.bcChannel,i._f(e));const t=i.Mf();i.uE(t,0),a.K0(t,this.doc),o.nY(this.bcChannel,i._f(t));const s=i.Mf();i.uE(s,3),o.nY(this.bcChannel,i._f(s));const n=i.Mf();i.uE(n,1),i.mP(n,l.xq(this.awareness,[this.doc.clientID])),o.nY(this.bcChannel,i._f(n))}))}disconnectBc(){const e=i.Mf();i.uE(e,1),i.mP(e,l.xq(this.awareness,[this.doc.clientID],new Map)),y(this,i._f(e)),this.bcconnected&&(o.r1(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),null!==this.ws&&this.ws.close()}connect(){this.shouldConnect=!0,this.wsconnected||null!==this.ws||(w(this),this.connectBc())}}class v extends _{constructor(e){super(e.url,e.guid,e.ymodel.ydoc,{awareness:e.ymodel.awareness}),this._currentLockRequest=null,this._initialContentRequest=null,this.messageHandlers[127]=(e,t,s,n,o)=>{const c=r.Jl(t),i=this._currentLockRequest;this._currentLockRequest=null,i&&i.resolve(c)},this.messageHandlers[125]=(e,t,s,o,c)=>{const i=r.iU(t);i.byteLength>0&&setTimeout((()=>{n.NG(this.doc,i)}),0);const a=this._initialContentRequest;this._initialContentRequest=null,a&&a.resolve(i.byteLength>0)},this._isInitialized=!1,this._onConnectionStatus=this._onConnectionStatus.bind(this),this.on("status",this._onConnectionStatus)}requestInitialContent(){if(this._initialContentRequest)return this._initialContentRequest.promise;let e,t;const s=new Promise(((s,n)=>{e=s,t=n}));return this._initialContentRequest={promise:s,resolve:e,reject:t},this._sendMessage(new Uint8Array([125])),setTimeout((()=>e(!1)),1e3),s}putInitializedState(){const e=i.Mf();i.uE(e,124),i.HK(e,n.D$(this.doc)),this._sendMessage(i._f(e)),this._isInitialized=!0}acquireLock(){if(this._currentLockRequest)return this._currentLockRequest.promise;this._sendMessage(new Uint8Array([127]));const e=setInterval((()=>{this.wsconnected&&this._sendMessage(new Uint8Array([127]))}),500);let t,s;const n=new Promise(((e,n)=>{t=e,s=n}));this._currentLockRequest={promise:n,resolve:t,reject:s};const o=()=>{clearInterval(e)};return n.then(o,o),n}releaseLock(e){const t=i.Mf();i.uE(t,126),i.Ep(t,e),this._sendMessage(i._f(t))}_sendMessage(e){const t=()=>{setTimeout((()=>{this.wsconnected?this.ws.send(e):this.once("status",t)}),0)};t()}async _onConnectionStatus(e){if(this._isInitialized&&"connected"===e.status){const e=await this.acquireLock();await this.requestInitialContent()||this.putInitializedState(),this.releaseLock(e)}}}class b{requestInitialContent(){return Promise.resolve(!1)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}destroy(){}}const I=new(s(66065).Token)("@jupyterlab/docprovider:IDocumentProviderFactory")},62538:(e,t,s)=>{"use strict";s.d(t,{Ld:()=>l,r1:()=>u,nY:()=>h});var n=s(23205),o=s(24803),c=s(55852);const i=new Map,r="undefined"==typeof BroadcastChannel?class{constructor(e){this.room=e,this.onmessage=null,c.z((t=>t.key===e&&null!==this.onmessage&&this.onmessage({data:o.Gh(t.newValue||"")})))}postMessage(e){c.X.setItem(this.room,o.s3(o.eh(e)))}}:BroadcastChannel,a=e=>n.Yu(i,e,(()=>{const t=new Set,s=new r(e);return s.onmessage=e=>t.forEach((t=>t(e.data))),{bc:s,subs:t}})),l=(e,t)=>a(e).subs.add(t),u=(e,t)=>a(e).subs.delete(t),h=(e,t)=>{const s=a(e);s.bc.postMessage(t),s.subs.forEach((e=>e(t)))}},70132:(e,t,s)=>{"use strict";s.d(t,{jS:()=>d,E0:()=>f,jU:()=>a,UG:()=>r});var n=s(23205),o=s(45931);var c=s(55852),i=s(34406);const r=i.release&&/node|io\.js/.test(i.release.name),a="undefined"!=typeof window&&!r;let l;"undefined"!=typeof navigator&&/Mac/.test(navigator.platform);const u=[],h=()=>{if(void 0===l)if(r){l=n.Ue();const e=i.argv;let t=null;for(let s=0;s<e.length;s++){const n=e[s];"-"===n[0]?(null!==t&&l.set(t,""),t=n):null!==t?(l.set(t,n),t=null):u.push(n)}null!==t&&l.set(t,"")}else"object"==typeof location?(l=n.Ue(),(location.search||"?").slice(1).split("&").forEach((e=>{if(0!==e.length){const[t,s]=e.split("=");l.set(`--${o.NF(t,"-")}`,s),l.set(`-${o.NF(t,"-")}`,s)}}))):l=n.Ue();return l},d=(e,t)=>h().get(e)||t,f=e=>{return void 0===(t=r?{}[e.toUpperCase()]:c.X.getItem(e))?null:t;var t};(e=>h().has(e))("--"+"production")||f("production")},23205:(e,t,s)=>{"use strict";s.d(t,{Ue:()=>n,JG:()=>o,Yu:()=>c,UI:()=>i,Yj:()=>r});const n=()=>new Map,o=e=>{const t=n();return e.forEach(((e,s)=>{t.set(s,e)})),t},c=(e,t,s)=>{let n=e.get(t);return void 0===n&&e.set(t,n=s()),n},i=(e,t)=>{const s=[];for(const[n,o]of e)s.push(t(o,n));return s},r=(e,t)=>{for(const[s,n]of e)if(t(n,s))return!0;return!1}},31955:(e,t,s)=>{"use strict";s.d(t,{M:()=>n});const n=()=>{let e=!0;return(t,s)=>{if(e){e=!1;try{t()}finally{e=!0}}else void 0!==s&&s()}}},55852:(e,t,s)=>{"use strict";s.d(t,{X:()=>c,z:()=>i});let n=new class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},o=!0;try{"undefined"!=typeof localStorage&&(n=localStorage,o=!1)}catch(e){}const c=n,i=e=>o||addEventListener("storage",e)},45931:(e,t,s)=>{"use strict";s.d(t,{IK:()=>n,NF:()=>i,lz:()=>a});const n=String.fromCharCode,o=(String.fromCodePoint,/^\s*/g),c=/([A-Z])/g,i=(e,t)=>(e=>e.replace(o,""))(e.replace(c,(e=>`${t}${(e=>e.toLowerCase())(e)}`))),r="undefined"!=typeof TextEncoder?new TextEncoder:null,a=r?e=>r.encode(e):e=>{const t=unescape(encodeURIComponent(e)),s=t.length,n=new Uint8Array(s);for(let e=0;e<s;e++)n[e]=t.codePointAt(e);return n};let l="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});l&&1===l.decode(new Uint8Array).length&&(l=null)},34406:e=>{var t,s,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(s){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{s="function"==typeof clearTimeout?clearTimeout:c}catch(e){s=c}}();var r,a=[],l=!1,u=-1;function h(){l&&r&&(l=!1,r.length?a=r.concat(a):u=-1,a.length&&d())}function d(){if(!l){var e=i(h);l=!0;for(var t=a.length;t;){for(r=a,a=[];++u<t;)r&&r[u].run();u=-1,t=a.length}r=null,l=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===c||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];a.push(new f(e,t)),1!==a.length||l||i(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},6493:(e,t,s)=>{"use strict";s.d(t,{GL:()=>l,Ag:()=>u,xq:()=>h,oy:()=>d});var n=s(23406),o=s(49e3),c=s(40870),i=s(21332),r=s(75736),a=s(1872);class l extends r.y{constructor(e){super(),this.doc=e,this.clientID=e.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval((()=>{const e=c.ZG();null!==this.getLocalState()&&15e3<=e-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const t=[];this.meta.forEach(((s,n)=>{n!==this.clientID&&3e4<=e-s.lastUpdated&&this.states.has(n)&&t.push(n)})),t.length>0&&u(this,t,"timeout")}),i.GW(3e3)),e.on("destroy",(()=>{this.destroy()})),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(e){const t=this.clientID,s=this.meta.get(t),n=void 0===s?0:s.clock+1,o=this.states.get(t);null===e?this.states.delete(t):this.states.set(t,e),this.meta.set(t,{clock:n,lastUpdated:c.ZG()});const i=[],r=[],l=[],u=[];null===e?u.push(t):null==o?null!=e&&i.push(t):(r.push(t),a.Hi(o,e)||l.push(t)),(i.length>0||l.length>0||u.length>0)&&this.emit("change",[{added:i,updated:l,removed:u},"local"]),this.emit("update",[{added:i,updated:r,removed:u},"local"])}setLocalStateField(e,t){const s=this.getLocalState();null!==s&&this.setLocalState({...s,[e]:t})}getStates(){return this.states}}const u=(e,t,s)=>{const n=[];for(let s=0;s<t.length;s++){const o=t[s];if(e.states.has(o)){if(e.states.delete(o),o===e.clientID){const t=e.meta.get(o);e.meta.set(o,{clock:t.clock+1,lastUpdated:c.ZG()})}n.push(o)}}n.length>0&&(e.emit("change",[{added:[],updated:[],removed:n},s]),e.emit("update",[{added:[],updated:[],removed:n},s]))},h=(e,t,s=e.states)=>{const o=t.length,c=n.Mf();n.uE(c,o);for(let i=0;i<o;i++){const o=t[i],r=s.get(o)||null,a=e.meta.get(o).clock;n.uE(c,o),n.uE(c,a),n.uw(c,JSON.stringify(r))}return n._f(c)},d=(e,t,s)=>{const n=o.l1(t),i=c.ZG(),r=[],l=[],u=[],h=[],d=o.yg(n);for(let t=0;t<d;t++){const t=o.yg(n);let s=o.yg(n);const c=JSON.parse(o.kf(n)),d=e.meta.get(t),f=e.states.get(t),g=void 0===d?0:d.clock;(g<s||g===s&&null===c&&e.states.has(t))&&(null===c?t===e.clientID&&null!=e.getLocalState()?s++:e.states.delete(t):e.states.set(t,c),e.meta.set(t,{clock:s,lastUpdated:i}),void 0===d&&null!==c?r.push(t):void 0!==d&&null===c?h.push(t):null!==c&&(a.Hi(c,f)||u.push(t),l.push(t)))}(r.length>0||u.length>0||h.length>0)&&e.emit("change",[{added:r,updated:u,removed:h},s]),(r.length>0||l.length>0||h.length>0)&&e.emit("update",[{added:r,updated:l,removed:h},s])}},68078:(e,t,s)=>{"use strict";s.d(t,{Wh:()=>i,Px:()=>r,_J:()=>a,K0:()=>l,lr:()=>h,zu:()=>f});var n=s(23406),o=s(49e3),c=s(90);const i=0,r=1,a=(e,t)=>{n.uE(e,i);const s=c.gJ(t);n.mP(e,s)},l=(e,t,s)=>{n.uE(e,r),n.mP(e,c.D$(t,s))},u=(e,t,s)=>{try{c.NG(t,o.HN(e),s)}catch(e){console.error("Caught error while handling a Yjs update",e)}},h=(e,t)=>{n.uE(e,2),n.mP(e,t)},d=u,f=(e,t,s,n)=>{const c=o.yg(e);switch(c){case i:((e,t,s)=>{l(t,s,o.HN(e))})(e,t,s);break;case r:u(e,s,n);break;case 2:d(e,s,n);break;default:throw new Error("Unknown message type")}return c}}}]);
//# sourceMappingURL=605.b4c1985b74d0370fa79d.js.map