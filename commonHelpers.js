import{i as l}from"./assets/vendor-32231325.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const u="/goit-js-hw-11/assets/bi_x-octagon-378f247e.svg",a=document.querySelector(".js-search-form"),c=document.querySelector(".js-container");a.addEventListener("submit",d);function d(o){o.preventDefault();const r=o.target.elements.search.value;f(r).then(n=>{h(n.hits)}),a.reset()}function f(o){const r="https://pixabay.com/api",s=`?${new URLSearchParams({key:"42121827-736028e2edd071afefc989558",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0})}`,t=r+s;return fetch(t).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).catch(e=>{throw console.error("Error fetching pictures:",e),e})}function m(o){return o.map(({previewURL:r})=>`<div class="card-container">
    <div>
        <img src="${r}" alt="#" class="picture">
    </div>
    <div>
       <h4 class="picture-name"></h4>
       <p class="description"></p>
    </div>
</div>`).join("")}function h(o){if(c.innerHTML="",o.length===0)return l.show({title:"Error",titleColor:"rgba(255, 255, 255, 1)",message:"Rejected promise in ms",messageColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(239, 64, 64, 1)",iconUrl:u,position:"topRight"});const r=m(o);c.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=commonHelpers.js.map
