(()=>{"use strict";const e=function(){const e=document.getElementById("content");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home-content");const t=document.createElement("h1");t.innerText="Sunny Eats Resturants",t.style.color="white",t.style.textAlign="center";const n=document.createElement("p");n.innerText="Get the best food in the sea.";const a=document.createElement("p");a.innerText="Visit us in our ship: The Thousand Sunny";const c=document.createElement("img"),s=e=>{e.matches?c.src="./images/home_image.jpeg":c.src="./images/home_image_mobile.jpeg"};c.alt="Sanji holding a dish.";var i=window.matchMedia("(min-width: 600px)");return s(i),i.addEventListener("change",(e=>{s(e.target)})),e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(a),e}())};function t(){const t=document.createElement("span");t.innerText="Sunny Eats",t.id="site-name";const n=document.createElement("nav");n.classList.add("nav-menu");const a=document.createElement("button");a.innerText="Home",a.classList.add("active");const c=document.createElement("button");c.innerText="Menu";const s=document.createElement("button");return s.innerText="Contact",a.addEventListener("click",(()=>{a.className="active",c.className="",s.className="",e()})),c.addEventListener("click",(()=>{a.className="",c.className="active",s.className=""})),s.addEventListener("click",(()=>{a.className="",c.className="",s.className="active"})),n.appendChild(a),n.appendChild(c),n.appendChild(s),{siteName:t,navBar:n}}(function(){const e=document.querySelector("header");e.appendChild(t().siteName),e.appendChild(t().navBar)})(),e(),function(){const e=document.createElement("a");e.href="https://github.com/thabomcodes",e.innerHTML="Copyright &copy; thabomcodes";const t=document.querySelector("footer");t.style.textAlign="center",t.appendChild(e)}()})();