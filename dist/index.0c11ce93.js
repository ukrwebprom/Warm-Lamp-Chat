let e=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"");const t=document.URL,n={getID:document.querySelector(".login"),getNane:document.querySelector(".getname"),chat:document.querySelector(".mainframe"),output:document.querySelector(".historyframe"),typearea:document.querySelector(".typearea")};let o=null,a=null;const s=window.location.search,d=new URLSearchParams(s);function r(){window.scrollTo({top:n.output.scrollHeight-window.innerHeight+70,behavior:"smooth"})}d.has("slotID")?(o=d.get("slotID"),a=sessionStorage.getItem("userName"),null===a?function(){n.getID.classList.add("hidden"),n.getNane.classList.remove("hidden"),n.chat.classList.add("hidden");document.querySelector(".nameForm").addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.myName.value.trim();""!==t&&(sessionStorage.setItem("userName",t),window.location.reload())}))}():function(){n.getID.classList.add("hidden"),n.getNane.classList.add("hidden"),n.chat.classList.remove("hidden");const e=new WebSocket(`wss://tranquil-reaches-58824.herokuapp.com/?id=${o}&name=${a}`);e.onopen=()=>{console.log("opened")},e.onclose=()=>{console.log("closed")},e.onmessage=e=>{const t=JSON.parse(e.data);console.log(t),function(e,t){const o=`<p><span class='chatname'>${e}:</span> ${t}</p>`;n.output.insertAdjacentHTML("beforeend",o),r()}(t.sender,t.data)},n.typearea.addEventListener("keydown",(t=>{if("Enter"===t.key){t.preventDefault();const o=n.typearea.textContent;""!==o&&(n.typearea.textContent="",e.send(o))}}))}()):(o=e(),function(){n.getID.classList.remove("hidden"),n.getNane.classList.add("hidden"),n.chat.classList.add("hidden");const e=document.querySelector(".js-link"),a=document.createElement("a");a.href=`${t}?slotID=${o}`,a.textContent=`${t}?slotID=${o}`,e.append(a)}()),window.addEventListener("resize",r);
//# sourceMappingURL=index.0c11ce93.js.map
