let e=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"");const t=document.URL,n={getID:document.querySelector(".login"),getNane:document.querySelector(".getname"),chat:document.querySelector(".mainframe"),output:document.querySelector(".historyframe"),typearea:document.querySelector(".typearea")};let a=null,o=null;const s=window.location.search,c=new URLSearchParams(s);c.has("slotID")?(a=c.get("slotID"),o=sessionStorage.getItem("userName"),null===o?function(){n.getID.classList.add("hidden"),n.getNane.classList.remove("hidden"),n.chat.classList.add("hidden");document.querySelector(".nameForm").addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.myName.value.trim();""!==t&&(sessionStorage.setItem("userName",t),window.location.reload())}))}():function(){n.getID.classList.add("hidden"),n.getNane.classList.add("hidden"),n.chat.classList.remove("hidden");const e=new WebSocket(`wss://tranquil-reaches-58824.herokuapp.com/?id=${a}&name=${o}`);e.onopen=()=>{console.log("opened")},e.onclose=()=>{console.log("closed")},e.onmessage=e=>{const t=JSON.parse(e.data);console.log(t),function(e,t){const a=`<p><span class='chatname'>${e}:</span> ${t}</p>`;n.output.insertAdjacentHTML("beforeend",a)}(t.sender,t.data)},n.typearea.addEventListener("keydown",(t=>{if("Enter"===t.key){t.preventDefault();const a=n.typearea.textContent.trim();""!==a&&(n.typearea.textContent="",e.send(a))}}))}()):(a=e(),function(){n.getID.classList.remove("hidden"),n.getNane.classList.add("hidden"),n.chat.classList.add("hidden");const e=document.querySelector(".js-link"),o=document.createElement("a");o.href=`${t}?slotID=${a}`,o.textContent=`${t}?slotID=${a}`,e.append(o)}());
//# sourceMappingURL=chat.6299f9b8.js.map
