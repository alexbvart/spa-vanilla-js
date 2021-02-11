(()=>{"use strict";const n=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",a="https://rickandmortyapi.com/api/character/",e=async n=>{const e=n?`${a}${n}`:a;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},t=()=>'\n        <div class="Error404"> \n            <h2>\n                Error 404\n            </h2>\n        </div>\n    ',s={"/":async()=>`\n        <div class="Characters">\n            ${(await e()).results.map((n=>`\n            \n                <article class="Character-item">\n                    <a href="#/${n.id}/">\n                        <img src="${n.image}" alt="${n.name}">\n                        <h2>${n.name}</h2>\n                    </a>\n                </article>\n\n            `)).join("")}\n\n\n        </div>\n    `,"/:id":async()=>{const a=n(),t=await e(a);return`\n        <div class="Character-inner">\n            <article class="Character-card">\n                <img src="${t.image}" alt="${t.name}">\n            </article>\n            <article class="Character-card">\n                    <h3>Episodes:       <span>${t.episode.length}   </span></h3>\n                    <h3>Status:         <span>${t.status}           </span></h3>\n                    <h3>Species:        <span>${t.species}          </span></h3>\n                    <h3>Gender:         <span>${t.gender}           </span></h3>\n                    <h3>Origin:         <span>${t.origin.name}      </span></h3>\n                    <h3>Last Location:  <span>${t.location.name}    </span></h3>\n            </article>\n        </div>\n    `},"/contact":"Contact"},i=async()=>{const a=document.getElementById("header"),e=document.getElementById("content");a.innerHTML=await'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1><a href="https://alexbvart.github.io/spa-vanilla-js/">100tifi.co</a></h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about/">About</a>\n            </div>\n        </div>\n    ';let i=n(),c=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(i),r=s[c]?s[c]:t;e.innerHTML=await r()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();