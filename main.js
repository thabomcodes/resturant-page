(()=>{"use strict";const e=function(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home-content");const n=document.createElement("h1");n.innerText="Sunny Eats Resturant",n.style.color="white",n.style.textAlign="center";const t=document.createElement("p");t.innerText="Get the best food in the sea.";const a=document.createElement("p");a.innerText="Visit us in our ship: The Thousand Sunny";const c=document.createElement("img"),o=e=>{e.matches?c.src="./images/home_image.jpeg":c.src="./images/home_image_mobile.jpeg"};c.alt="Sanji holding a dish.";var i=window.matchMedia("(min-width: 600px)");return o(i),i.addEventListener("change",(e=>{o(e.target)})),e.appendChild(n),e.appendChild(t),e.appendChild(c),e.appendChild(a),e}())};function n(){const n=document.createElement("span");n.innerText="Sunny Eats",n.id="site-name";const t=document.createElement("nav");t.classList.add("nav-menu");const a=document.createElement("button");a.innerText="Home",a.classList.add("active");const c=document.createElement("button");c.innerText="Menu";const o=document.createElement("button");return o.innerText="Contact",a.addEventListener("click",(()=>{a.className="active",c.className="",o.className="",e()})),c.addEventListener("click",(()=>{a.className="",c.className="active",o.className="",function(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.className="menu-content";const n=document.createElement("h1");n.innerText="Menu",e.appendChild(n);const t=document.createElement("div");t.className="menu";const a=[{name:"Curry Rice",src:"./images/cuury_rice.jpg",alt:"Curry Rice"},{name:"Ramen",src:"./images/ramen.jpg",alt:"Ramen"},{name:"Seafood Fried Rice",src:"./images/seafood_fried_rice.jpeg",alt:"Seafood Fried Rice"}];for(let e=0;e<3;e++){const n=a[e],c=document.createElement("div");c.className="menu-item";const o=document.createElement("h3");o.innerText=n.name,c.appendChild(o);const i=document.createElement("img");i.src=n.src,i.alt=n.alt,c.appendChild(i),t.appendChild(c)}return e.appendChild(t),e}())}()})),o.addEventListener("click",(()=>{a.className="",c.className="",o.className="active",function(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.className="contact-content";const n=document.createElement("h1");n.innerText="Contact Us",e.appendChild(n);const t=document.createElement("div");t.className="contacts";const a=[{name:"Vismoke Sanji",role:"Cook",phone:"+123-456-789",email:"sanji@sunny.mugiwara"},{name:"Nami",role:"Navigator",phone:"+123-456-788",email:"nami@sunny.mugiwara"},{name:"Monkey D. Luffy",role:"Captain",phone:"+123-456-7897",email:"luffy@sunny.mugiwara"}];for(let e=0;e<3;e++){const n=a[e],c=document.createElement("div");c.className="contact";const o=document.createElement("h2");o.innerText=n.name,c.appendChild(o);const i=document.createElement("span1");i.innerText=n.role,i.style.fontWeight="600",i.style.display="block",c.appendChild(i);const s=document.createElement("span1");s.innerText=n.phone,s.style.display="block",c.appendChild(s);const d=document.createElement("span1");d.innerText=n.email,d.style.display="block",c.appendChild(d),t.appendChild(c)}return e.appendChild(t),e}())}()})),t.appendChild(a),t.appendChild(c),t.appendChild(o),{siteName:n,navBar:t}}(function(){const e=document.querySelector("header");e.appendChild(n().siteName),e.appendChild(n().navBar)})(),e(),function(){const e=document.createElement("a");e.href="https://github.com/thabomcodes",e.innerHTML="Copyright &copy; thabomcodes";const n=document.querySelector("footer");n.style.textAlign="center",n.appendChild(e)}()})();