(()=>{"use strict";function e(e,t,n){[e[t],e[n]]=[e[n],e[t]]}const t=e=>Array.from({length:e},(()=>Math.floor(10*Math.random()+1)));class n{static insertionSort(e){for(let t=1;t<e.length;t++){const n=e[t];let o=t-1;for(;o>=0&&e[o]>n;)e[o+1]=e[o],o--;e[o+1]=n}return e}static bingoSort(t){for(let n=0;n<t.length-1;n++){let o=n;for(let e=n+1;e<t.length;e++)t[e]<t[o]&&(o=e);o!==n&&e(t,o,n)}return t}static doubleSelectionSort(t){for(let n=0,o=t.length-1;n<o;n++,o--){let r=t[n],l=t[n],c=n,i=n;for(let e=n;e<=o;e++)t[e]>l?(l=t[e],i=e):t[e]<r&&(r=t[e],c=e);e(t,n,c),t[c]===l?e(t,o,c):e(t,o,i)}return t}}const o=document.getElementById("myRange"),r=document.getElementById("array-size"),l=document.getElementById("btnClick"),c=document.getElementById("columns"),i=document.getElementById("options");r.innerHTML="Size of array: "+o.value;let u=t(Number(o.value));function a(e,t){c.innerHTML="";for(let n=0;n<e.length;n++){const o=document.createElement("div");o.setAttribute("class","col "+t),o.innerHTML=""+e[n],c.appendChild(o),console.log(123)}}a(u,"red"),o.oninput=function(){r.innerHTML="Size of array: "+o.value,u=t(Number(o.value)),a(u,"red")},l.onclick=function(){a(function(e,t){switch(Number(e)){case 1:return n.insertionSort(t);case 2:return n.doubleSelectionSort(t);case 3:return n.bingoSort(t)}}(i.value,u),"green")}})();