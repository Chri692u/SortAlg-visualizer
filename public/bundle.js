(()=>{"use strict";const e=document.getElementById("myRange"),n=document.getElementById("array-size"),t=(document.getElementById("options"),document.getElementById("btnClick")),o=(document.getElementById("showArray"),document.getElementById("columns"));n.innerHTML="Size of array: "+e.value,e.oninput=function(){var t;n.innerHTML="Size of array: "+e.value,function(e){o.innerHTML="";for(let n=0;n<e.length;n++){const t=document.createElement("div");t.setAttribute("class","red"),t.innerHTML=""+e[n],o.appendChild(t),console.log(123)}}((t=Number(e.value),Array.from({length:t},(()=>Math.floor(10*Math.random()+1)))))},t.onclick=function(){}})();