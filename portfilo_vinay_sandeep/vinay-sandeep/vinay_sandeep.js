// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
function change(){
  let x = document.getElementById("carding-id");
  x.addEventListener("mouseenter",function () {
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    x.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
  })
  let y = document.getElementById("carda-id");
  y.addEventListener("mouseenter",function () {
    let r4 = Math.floor(Math.random()*256);
    let r5 = Math.floor(Math.random()*256);
    let r6 = Math.floor(Math.random()*256);
    y.style.backgroundColor= `rgb(${r4},${r5},${r6})`;
  })
  let a = document.getElementById("carda-id1");
  a.addEventListener("mouseenter",function () {
    let r7 = Math.floor(Math.random()*256);
    let r8 = Math.floor(Math.random()*256);
    let r9 = Math.floor(Math.random()*256);
    a.style.backgroundColor= `rgb(${r7},${r8},${r9})`;
  })
  let b = document.getElementById("carda-id2");
  b.addEventListener("mouseenter",function () {
    let r10 = Math.floor(Math.random()*256);
    let r11 = Math.floor(Math.random()*256);
    let r12 = Math.floor(Math.random()*256);
    b.style.backgroundColor= `rgb(${r10},${r11},${r12})`;
  })
  let c = document.getElementById("about-us-id");
  c.addEventListener("mouseenter",function () {
    let r13 = Math.floor(Math.random()*256);
    let r14 = Math.floor(Math.random()*256);
    let r15 = Math.floor(Math.random()*256);
    c.style.backgroundColor= `rgb(${r13},${r14},${r15})`;
  })
  let d = document.body;
  d.addEventListener("click",function () {
    let r16 = Math.floor(Math.random()*256);
    let r17 = Math.floor(Math.random()*256);
    let r18 = Math.floor(Math.random()*256);
    d.style.backgroundColor= `rgb(${r16},${r17},${r18})`;
  })
  let e = document.getElementById("intro");
  e.addEventListener("click",function () {
   e.style.color = "white";
 } )
  document.getElementById("on").textContent = "creative mode is on.for change backgroundcolour double click on screen";
  let g = document.getElementById("carding-id2");
  g.addEventListener("mouseenter",function () {
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    g.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
  })
}