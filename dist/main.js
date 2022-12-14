(()=>{"use strict";var e={538:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},402:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#disableInput {\n    pointer-events: none;\n    user-select: none;\n}\n\nh1 {\n    text-align: center;\n    font-size: 3rem;\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n\n.gameboard-area {\n    display: flex;\n    justify-content: space-around;\n    gap: 4rem;\n    margin-bottom: 2rem;\n}\n\n.row {\n    display: flex;\n}\n\n.player-square, .firing-square, .square {\n    width: 55px;\n    height: 55px;\n    background-color: lightblue;\n    border: solid 1px black;\n}\n\n.your-ships, .firing-area {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 10;\n}\n\n.two,\n.three,\n.four,\n.five {\n    display: flex;\n}\n\n.ship-piece {\n    background-color: gray;\n}\n\n.rotated {\n    flex-direction: column;\n}\n\n.placeable-ships {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    margin-top: 2rem;\n}\n\n.small-ships, .big-ships {\n    display: flex;\n    gap: 6rem;\n    cursor: move;\n}\n\n.dragging {\n    opacity: .5;\n}\n\n.clickable {\n    cursor: pointer;\n}\n\n#miss {\n    background-color: white;\n}\n\n#hit {\n    background-color: red;\n}\n\n.modal {\n    padding: 5rem;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%);\n}\n\n.modal h2 {\n    font-size: 3rem;\n}\n\n.modal p {\n    font-size: 1.5rem;\n}\n\n.modal button {\n    font-size: 1.5rem;\n    border-radius: 16px;\n    padding: 1rem;\n}\n\n#show {\n    display: flex;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{n.d(r,{ol:()=>$,QC:()=>T,Bo:()=>w});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),s=n.n(i),l=n(565),c=n.n(l),u=n(216),d=n.n(u),p=n(589),h=n.n(p),f=n(538),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var y=n(402),v={};function S(e){return e[Math.floor(Math.random()*e.length)]}function g(e,t){return e.join()===t.join()}v.styleTagTransform=h(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),t()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;class b{constructor(e,t,n=[],r=!1){this.length=e,this.squares=t,this.coordinates=n,this.health=e,this.status=r}addCoordinates(e){if(void 0!==this.squares){let t=[];for(let n=0;n<e.length;n++){const r=[parseInt(e[n].parentNode.getAttribute("data-value")),parseInt(e[n].getAttribute("data-key"))];t.push(r)}this.coordinates.push(t)}else this.coordinates.push(e)}hit(){this.health--}isSunk(){return 0===this.health&&(this.status=!0,!0)}}function q(e){const t=new b(e.length);t.addCoordinates(e),w.updateComputerShipLocations(t)}function k(e){let t=0;for(let n=0;n<$.length;n++)for(let r=0;r<e.length;r++)g($[n],e[r])&&t++;if(0===t){for(let t=0;t<e.length;t++)$.push(e[t]);return!0}return!1}function L(e){let t=[];const n=document.querySelector(".dragging"),r=parseInt(n.getAttribute("data-length")),o=parseInt(e.getAttribute("data-key")),a=e.parentNode;if(n.classList.contains("vertical"))try{const i=document.querySelector(".your-ships"),s=parseInt(a.getAttribute("data-value"));if(2===r){t=[i.querySelector(`[data-value="${s-1}"]`).querySelector(`[data-key="${o}"]`),e],C(t,n)}else if(3===r){const r=i.querySelector(`[data-value="${s-1}"]`),a=i.querySelector(`[data-value="${s+1}"]`);t=[r.querySelector(`[data-key="${o}"]`),e,a.querySelector(`[data-key="${o}"]`)],C(t,n)}else if(4===r){const r=i.querySelector(`[data-value="${s-2}"]`),a=i.querySelector(`[data-value="${s-1}"]`),l=i.querySelector(`[data-value="${s+1}"]`),c=r.querySelector(`[data-key="${o}"]`);t=[c,a.querySelector(`[data-key="${o}"]`),e,l.querySelector(`[data-key="${o}"]`)],C(t,n)}else{const r=i.querySelector(`[data-value="${s-2}"]`),a=i.querySelector(`[data-value="${s-1}"]`),l=i.querySelector(`[data-value="${s+1}"]`),c=i.querySelector(`[data-value="${s+2}"]`),u=r.querySelector(`[data-key="${o}"]`),d=a.querySelector(`[data-key="${o}"]`);t=[u,d,e,l.querySelector(`[data-key="${o}"]`),c.querySelector(`[data-key="${o}"]`)],C(t,n)}}catch(e){if(e instanceof TypeError)return}else try{if(2===r)t=[a.querySelector(`[data-key="${o-1}"]`),e],C(t,n);else if(3===r){t=[a.querySelector(`[data-key="${o-1}"]`),e,a.querySelector(`[data-key="${o+1}"]`)],C(t,n)}else if(4===r){const r=a.querySelector(`[data-key="${o-2}"]`);t=[r,a.querySelector(`[data-key="${o-1}"]`),e,a.querySelector(`[data-key="${o+1}"]`)],C(t,n)}else{const r=a.querySelector(`[data-key="${o-2}"]`),i=a.querySelector(`[data-key="${o-1}"]`);t=[r,i,e,a.querySelector(`[data-key="${o+1}"]`),a.querySelector(`[data-key="${o+2}"]`)],C(t,n)}}catch(e){if(e instanceof TypeError)return}}function C(e,t){let n=0;for(let t=0;t<e.length;t++)e[t].classList.contains("played-ship")&&n++;if(0===n){for(let n=0;n<e.length;n++)e[n].classList.add("ship-piece"),e[n].classList.add("played-ship"),t.remove();const n=new b(e.length,e);n.addCoordinates(n.squares),w.updatePlayerShipLocations(n);const r=document.querySelector(".small-ships"),o=document.querySelector(".big-ships");null===r.firstElementChild&&null===o.firstElementChild&&T()}}const x=document.querySelector("BODY"),A=document.querySelector("H1");let $=[];const w=new class{constructor(e=[],t=[],n=10,r=10){this.playerShipLocations=e,this.computerShipLocations=t,this.numberOfPlayerShips=n,this.numberOfComputerShips=r}updatePlayerShipLocations(e){this.playerShipLocations.push(e)}updateComputerShipLocations(e){this.computerShipLocations.push(e)}updateNumberOfPlayerShips(){let e=0;for(let t=0;t<this.playerShipLocations.length;t++)this.playerShipLocations[t].status||e++;this.numberOfPlayerShips=e}updateNumberOfComputerShips(){let e=0;for(let t=0;t<this.computerShipLocations.length;t++)this.computerShipLocations[t].status||e++;this.numberOfComputerShips=e}recievePlayerAttack(e){for(let t=0;t<this.computerShipLocations.length;t++)for(let n=0;n<this.computerShipLocations[t].coordinates.length;n++)for(let r=0;r<this.computerShipLocations[t].coordinates[n].length;r++)if(g(e,this.computerShipLocations[t].coordinates[n][r]))return this.computerShipLocations[t].hit(),[!0,this.computerShipLocations[t].isSunk()];return[!1,!1]}revieveComputerAttack(e){for(let t=0;t<this.playerShipLocations.length;t++)for(let n=0;n<this.playerShipLocations[t].coordinates.length;n++)for(let r=0;r<this.playerShipLocations[t].coordinates[n].length;r++)if(g(e,this.playerShipLocations[t].coordinates[n][r]))return this.playerShipLocations[t].hit(),[!0,this.playerShipLocations[t].isSunk()];return[!1,!1]}},E=new class{constructor(e=[],t=!1,n,r){this.ships=this.createShips(),this.playedTiles=e,this.previousHit=t,this.initialShot=n,this.previousShot=r}createShips(){for(let e=0;e<4;e++)for(;;)if(0===S([0,1])){const e=S([0,1,2,3,4,5,6,7,8,9]),t=S([0,1,2,3,4,5,6,7,8]),n=[[e,t],[e,t+1]];if(k(n)){q(n);break}}else{const e=S([0,1,2,3,4,5,6,7,8]),t=e+1,n=S([0,1,2,3,4,5,6,7,8,9]),r=[[e,n],[t,n]];if(k(r)){q(r);break}}for(let e=0;e<3;e++)for(;;)if(0===S([0,1])){const e=S([0,1,2,3,4,5,6,7,8,9]),t=S([0,1,2,3,4,5,6,7]),n=[[e,t],[e,t+1],[e,t+2]];if(k(n)){q(n);break}}else{const e=S([0,1,2,3,4,5,6,7]),t=e+1,n=e+2,r=S([0,1,2,3,4,5,6,7,8,9]),o=[[e,r],[t,r],[n,r]];if(k(o)){q(o);break}}for(let e=0;e<2;e++)for(;;)if(0===S([0,1])){const e=S([0,1,2,3,4,5,6,7,8,9]),t=S([0,1,2,3,4,5,6]),n=[[e,t],[e,t+1],[e,t+2],[e,t+3]];if(k(n)){q(n);break}}else{const e=S([0,1,2,3,4,5,6]),t=e+1,n=e+2,r=e+3,o=S([0,1,2,3,4,5,6,7,8,9]),a=[[e,o],[t,o],[n,o],[r,o]];if(k(a)){q(a);break}}for(;;)if(0===S([0,1])){const e=S([0,1,2,3,4,5,6,7,8,9]),t=S([0,1,2,3,4,5]),n=[[e,t],[e,t+1],[e,t+2],[e,t+3],[e,t+4]];if(k(n)){q(n);break}}else{const e=S([0,1,2,3,4,5]),t=e+1,n=e+2,r=e+3,o=e+4,a=S([0,1,2,3,4,5,6,7,8,9]),i=[[e,a],[t,a],[n,a],[r,a],[o,a]];if(k(i)){q(i);break}}}makeShot(){if(this.previousHit){const e=this.previousShot[0],t=this.previousShot[1];let n=300;e:for(;n>0;){const r=S([e,e-1,e+1]);if(!(r<0||r>9)){if(r!==e){const e=[r,t];for(let t=0;t<this.playedTiles.length;t++)if(g(e,this.playedTiles[t])){n--;continue e}return this.playedTiles.push(e),e}{const e=S([t+1,t-1]);if(e<0||e>9){n--;continue}const o=[r,e];for(let e=0;e<this.playedTiles.length;e++)if(g(o,this.playedTiles[e])){n--;continue e}return this.playedTiles.push(o),o}}n--}return!1}e:for(;;){const e=[S([0,1,2,3,4,5,6,7,8,9]),S([0,1,2,3,4,5,6,7,8,9])];for(let t=0;t<this.playedTiles.length;t++)if(g(e,this.playedTiles[t]))continue e;return this.playedTiles.push(e),e}}};function T(){A.textContent="Click a Square in the Right Box to Fire",document.querySelector(".firing-area").querySelectorAll(".firing-square").forEach((e=>{e.classList.add("clickable"),e.addEventListener("click",(()=>{const t=parseInt(e.parentNode.getAttribute("data-value")),n=parseInt(e.getAttribute("data-key"));e.classList.remove("clickable"),async function(e,t,n){x.setAttribute("id","disableInput");const r=[e,t],[o,a]=w.recievePlayerAttack(r);if(o?(A.textContent="You Hit!",n.setAttribute("id","hit"),a&&(await I(1e3),A.textContent="You Sunk a Ship!")):(A.textContent="You Missed!",n.setAttribute("id","miss")),w.updateNumberOfComputerShips(),0===w.numberOfComputerShips)return void O("player");let i;for(await I(1e3),A.textContent="Computer's Turn",await I(1e3);i=E.makeShot(),!i;)E.previousShot=E.initialShot;const[s,l]=w.revieveComputerAttack(i);s?(A.textContent="Computer Hits!",E.previousHit=!0,E.previousShot=i,P(i,s),void 0===E.initialShot&&(E.initialShot=i),l&&(await I(1e3),E.previousHit=!1,E.initialShot=void 0,A.textContent="Computer Sunk a Ship!")):(A.textContent="Computer Missed!",P(i,s)),w.updateNumberOfPlayerShips(),0!==w.numberOfPlayerShips?(await I(1e3),A.textContent="Click a Square in the Right Box to Fire",x.removeAttribute("id","disableInput")):O("Computer")}(t,n,e)}),{once:!0})}))}function I(e){return new Promise((t=>setTimeout(t,e)))}function P(e,t){const n=document.querySelector(".your-ships").querySelector(`[data-value="${e[0]}"]`).querySelector(`[data-key="${e[1]}"]`);t?n.setAttribute("id","hit"):n.setAttribute("id","miss")}function O(e){const t=document.querySelector(".modal"),n=t.querySelector(".winner");t.querySelector(".play-again").addEventListener("click",(()=>(window.location.reload(),!1))),n.textContent="player"===e?"Congrats, you Win!":"You Lose!",t.setAttribute("id","show"),x.removeAttribute("id","disableInput")}window.onload=()=>{A.textContent="Place your Ships in the Left Box",function(){const e=document.querySelector(".your-ships"),t=document.querySelector(".firing-area");for(let n=0;n<10;n++){const r=document.createElement("div"),o=document.createElement("div");r.classList.add("row"),r.setAttribute("data-value",`${n}`),o.classList.add("row"),o.setAttribute("data-value",`${n}`);for(let e=0;e<10;e++){const t=document.createElement("div"),n=document.createElement("div");t.classList.add("player-square"),t.setAttribute("data-key",`${e}`),t.addEventListener("dragover",(e=>{e.preventDefault()})),t.addEventListener("drop",(e=>{e.preventDefault(),L(t)})),n.classList.add("firing-square"),n.setAttribute("data-key",`${e}`),r.appendChild(t),o.appendChild(n)}e.appendChild(r),t.appendChild(o)}}(),function(){const e=document.querySelectorAll(".two"),t=document.querySelectorAll(".three"),n=document.querySelectorAll(".four"),r=document.querySelector(".five");e.forEach((e=>{for(let t=0;t<2;t++){const t=document.createElement("div");t.classList.add("square"),t.classList.add("ship-piece"),e.appendChild(t)}})),t.forEach((e=>{for(let t=0;t<3;t++){const t=document.createElement("div");t.classList.add("square"),t.classList.add("ship-piece"),e.appendChild(t)}})),n.forEach((e=>{for(let t=0;t<4;t++){const t=document.createElement("div");t.classList.add("square"),t.classList.add("ship-piece"),e.appendChild(t)}}));for(let e=0;e<5;e++){const e=document.createElement("div");e.classList.add("square"),e.classList.add("ship-piece"),r.appendChild(e)}}()},document.querySelectorAll(".unplayed-ship").forEach((e=>{e.addEventListener("dblclick",(()=>{e.classList.contains("rotated")?(e.classList.remove("rotated"),e.classList.remove("vertical")):(e.classList.add("rotated"),e.classList.add("vertical"))}))})),document.querySelectorAll("[draggable='true']").forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))}))})()})();