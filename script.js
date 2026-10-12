const books=[
  {title:"The Secret Garden",author:"Frances Hodgson Burnett",condition:"Pre-loved",category:"Classics",price:"₹240",cover:"cover-1",featured:true},
  {title:"The Midnight Library",author:"Matt Haig",condition:"New",category:"YA",price:"₹399",cover:"cover-2",featured:true},
  {title:"The Alchemist",author:"Paulo Coelho",condition:"Pre-loved",category:"Classics",price:"₹199",cover:"cover-3",featured:true},
  {title:"A Good Girl's Guide to Murder",author:"Holly Jackson",condition:"New",category:"Mystery",price:"₹449",cover:"cover-4",featured:true},
  {title:"The Inheritance Games",author:"Jennifer Lynn Barnes",condition:"New",category:"YA",price:"₹350",cover:"cover-5"},
  {title:"Six of Crows",author:"Leigh Bardugo",condition:"Pre-loved",category:"Fantasy",price:"₹280",cover:"cover-6"},
  {title:"The Book Thief",author:"Markus Zusak",condition:"Pre-loved",category:"YA",price:"₹260",cover:"cover-1"},
  {title:"Before the Coffee Gets Cold",author:"Toshikazu Kawaguchi",condition:"New",category:"Student Picks",price:"₹375",cover:"cover-2"}
];
const rentals=books.slice(0,3).map((book,i)=>({...book,rental:i===1?"On rental":"Available"}));
const coverMarkup=b=>`<div class="cover-art ${b.cover}">${b.title.toUpperCase()}<small>${b.author.split(" ").slice(-1)[0]}</small></div>`;
function cardMarkup(b,rental=false){return `<article class="${rental?"rental-card":"book-card"}"><div class="book-cover">${coverMarkup(b)}<span class="condition">${b.condition}</span></div><div class="book-info"><h3>${b.title}</h3><p>${b.author}</p><div class="book-meta"><strong>${rental?"₹45 / week":b.price}</strong><button class="dm-btn" data-book="${b.title}" data-rental="${rental}">${rental?"Rent this book":"DM to order"}</button></div></div></article>`}
function renderBooks(){const query=(document.querySelector("#search")?.value||"").toLowerCase();const filter=document.querySelector(".filter.active")?.dataset.filter||"All";const result=books.filter(b=>(filter==="All"||b.condition===filter||b.category===filter)&&`${b.title} ${b.author}`.toLowerCase().includes(query));document.querySelector("#book-grid").innerHTML=result.map(b=>cardMarkup(b)).join("");document.querySelector("#empty-state").hidden=result.length>0}
document.querySelector("#featured-books").innerHTML=books.filter(b=>b.featured).map(b=>cardMarkup(b)).join("");
document.querySelector("#rental-grid").innerHTML=rentals.map(b=>cardMarkup(b,true)).join("");
renderBooks();
document.querySelector("#search").addEventListener("input",renderBooks);
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");renderBooks()}));
document.addEventListener("click",e=>{const btn=e.target.closest("[data-book]");if(btn){const title=encodeURIComponent(`Hi Resell Reads! I’m interested in “${btn.dataset.book}”. Is it still available?`);window.open(`https://ig.me/m/resell.reads_67?text=${title}`,"_blank")};if(e.target.matches("[data-open-account]"))document.querySelector("#account-modal").showModal();if(e.target.matches("[data-open-listing]"))document.querySelector("#listing-modal").showModal();if(e.target.matches("[data-close-modal]"))e.target.closest("dialog").close()});
const menu=document.querySelector(".menu-toggle"),mobile=document.querySelector(".mobile-nav");menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!open));mobile.hidden=open});mobile.addEventListener("click",e=>{if(e.target.matches("a")){mobile.hidden=true;menu.setAttribute("aria-expanded","false")}});
function formMessage(form,message){const status=form.querySelector(".form-status");status.textContent=message;form.reset()}
document.querySelector("#account-form").addEventListener("submit",e=>{e.preventDefault();formMessage(e.currentTarget,"Account preview created. Connect your backend to persist reader accounts securely.")});
document.querySelector("#listing-form").addEventListener("submit",e=>{e.preventDefault();formMessage(e.currentTarget,"Listing received for review. We’ll confirm the details before it goes live.")});
