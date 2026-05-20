const d=document;const root=d.documentElement;const nav=d.querySelector('.nav');
const themeBtn=d.getElementById('themeToggle');const saved=localStorage.getItem('theme');if(saved)root.setAttribute('data-theme',saved);
if(themeBtn)themeBtn.onclick=()=>{const t=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',t);localStorage.setItem('theme',t)};
const ham=d.getElementById('ham');const links=d.getElementById('links');if(ham)ham.onclick=()=>links.classList.toggle('open');
addEventListener('scroll',()=>{if(nav)nav.classList.toggle('scrolled',scrollY>24);const h=d.documentElement;const p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;const bar=d.querySelector('.progress');if(bar)bar.style.width=p+'%';const b=d.querySelector('.backtop');if(b)b.style.display=scrollY>500?'block':'none';
});
d.querySelectorAll('.reveal').forEach(el=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.15});io.observe(el)});
const back=d.querySelector('.backtop');if(back)back.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const slides=[...d.querySelectorAll('.hero-slide')];let i=0;if(slides.length){setInterval(()=>{slides[i].classList.remove('active');i=(i+1)%slides.length;slides[i].classList.add('active')},4500)}
const counters=d.querySelectorAll('[data-counter]');counters.forEach(c=>{let done=false;new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!done){done=true;let t=0,goal=+c.dataset.counter;const iv=setInterval(()=>{t+=Math.ceil(goal/40);if(t>=goal){t=goal;clearInterval(iv)}c.textContent=t},35)}})).observe(c)});
