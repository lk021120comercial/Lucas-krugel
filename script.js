document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if(menuBtn && nav){
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

if("IntersectionObserver" in window){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
  },{threshold:.08});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}else{ document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible")); }

const filterButtons=document.querySelectorAll('.portfolio-filters button');
const projectCards=document.querySelectorAll('.project-card');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter; projectCards.forEach(card=>card.classList.toggle('hidden',f!=='Todos'&&card.dataset.category!==f));
}));
