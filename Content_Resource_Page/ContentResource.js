
let downBtn = document.querySelector(".title button");
let expandSection = document.querySelector(".expand-content");
let downBtn2 = document.querySelector("#button2");
let expandSection2 = document.querySelector("#expand2");
let menuBar = document.querySelector("#hamburger-btn");
let closeBtn = document.querySelector("#closemark");
let sideBar = document.querySelector(".sidebar");
let expanded = false;
let expanded2 = false;

downBtn.addEventListener("click",()=>{
    showDownMenu();
})

downBtn2.addEventListener("click",()=>{
    showDownMenu2();
})

menuBar.addEventListener("click",()=>{
    showSideBar();
})

closeBtn.addEventListener("click",()=>{
    hideSideBar();
})

function showDownMenu(){
    if(!expanded){
        expandSection.classList.add("show");
        expandSection.style.display = "block";
        downBtn.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    } else{
        expandSection.style.display = "none";
        downBtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }
    expanded = !expanded;
}

function showDownMenu2(){
    if(!expanded2){
        expandSection2.classList.add("show");
        expandSection2.style.display = "block";
        downBtn2.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    } else{
        expandSection2.style.display = "none";
        downBtn2.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }
    expanded2 = !expanded2;
}

function showSideBar(){
    sideBar.style.display = "flex";
}

function hideSideBar(){
    sideBar.style.display = "none";
}

// Referensi youtube: LUNDEV
let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = "none";
    items[active].style.zIndex = 1;

    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${430*stt}px) scale(${1 - 0.1*stt}) perspective(16px)`;
        items[i].style.zIndex = -stt;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-430*stt}px) scale(${1 - 0.1*stt}) perspective(16px)`;
        items[i].style.zIndex = -stt;
    }
}

loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}