let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");
let downBtn = document.querySelector(".title button");
let expandSection = document.querySelector(".expand-content");
let downBtn2 = document.querySelector("#button2");
let expandSection2 = document.querySelector("#expand2");
let menuBar = document.querySelector("#hamburger-btn");
let closeBtn = document.querySelector("#closemark");
let sideBar = document.querySelector(".sidebar");
let expanded = false;
let expanded2 = false;

nextBtn.addEventListener("click",()=>{
    showSlider("next");
})

prevBtn.addEventListener("click",()=>{
    showSlider("prev");
})

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
let timeRunning = 1000;
let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if(type === "next"){
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        carousel.classList.add("next");
    } else{
        let posistionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[posistionLastItem]);
        thumbnail.prepend(itemThumbnail[posistionLastItem]);
        carousel.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
    },timeRunning)
}