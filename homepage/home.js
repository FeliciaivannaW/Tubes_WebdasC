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