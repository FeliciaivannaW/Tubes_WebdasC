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

fetch("snacks.json").then(response => response.json()).then(json => {
    data = json;

    document.querySelectorAll(".readmore").forEach(button => {
        button.addEventListener("click",function(){
            let id = this.id;
            showMainPage(id);
        });
    });
});

function showMainPage(id){
    let item = data.find(d => String(d.id) === id);
    document.querySelector(".main").style.display = "block";
    carousel.style.display = "none"

    const listBahan = document.querySelector(".ingridientsList");
    const listSteps = document.querySelector(".steps");

    listBahan.innerHTML = "";
    listSteps.innerHTML = "";

    item.ingredients.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        listBahan.appendChild(li);
    });

    item.recipeSteps.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        listSteps.appendChild(li);
    });

    document.querySelector(".mainImg").innerHTML = `<img src="${item.img}" alt="">`;
    document.querySelector(".titleMain").innerHTML = item.name;
    document.querySelector(".explain").innerHTML = item.explanation;

    document.querySelector(".placeTitle").innerHTML = `
    Where the ${item.name} <br> <span class="pinkColor">Came From.</span>
    `;
    document.querySelector(".placeExplain").innerHTML = item.place;
    document.querySelector(".imgPlace").innerHTML = `
        <img src=${item.placeImg1} alt="" class="img1">
        <img src=${item.placeImg2} alt="" class="img2">
    `;
    
    document.querySelector(".historyTitle").innerHTML = `
    The History of <br> <span class="pinkColor">${item.name}</span>
    `;
    document.querySelector(".historyDesc").innerHTML = item.history;
    document.querySelector("#imgHistory1").innerHTML = `
    <img src=${item.historyImg1} alt="" class="img13">
    `;
    document.querySelector("#imgHistory2").innerHTML = `
    <img src=${item.historyImg2} alt="" class="img23">
    `;
    document.querySelector("#imgHistory3").innerHTML = `
    <img src=${item.historyImg3} alt="">
    `;

    document.querySelector(".factsTitle").innerHTML = `
    Fun Facts About <br> <span class="pinkColor">${item.name}.</span>
    `;
    document.querySelector(".fact1").innerHTML = `
    <img src=${item.factsImg1} alt="" class="slideImg">
    `;
    document.querySelector(".fact2").innerHTML = `
    <img src=${item.factsImg2} alt="" class="slideImg">
    `;
    document.querySelector(".fact3").innerHTML = `
    <img src=${item.factsImg3} alt="" class="slideImg">
    `;

    document.querySelector("#card-one").innerHTML = item.factsTitle1;
    document.querySelector("#card-two").innerHTML = item.factsTitle2;
    document.querySelector("#card-three").innerHTML = item.factsTitle3;

    document.querySelector("#card-one-text").innerHTML = item.factsExplanation1;
    document.querySelector("#card-two-text").innerHTML = item.factsExplanation2;
    document.querySelector("#card-three-text").innerHTML = item.factsExplanation3;

    document.querySelector(".recipeTitle").innerHTML = `
    How to Make a <br><span class="pinkColor">${item.name}.</span>
    `;

    document.querySelector(".gallery-item.gallery-1").innerHTML = `
    <img id="gallery-1" src="${item.gallery1}" alt="Gallery 1">
    `;
    document.querySelector(".gallery-item.gallery-2").innerHTML = `
    <img id="gallery-2" src="${item.gallery2}" alt="Gallery 2">
    `;
    document.querySelector(".gallery-item.gallery-3").innerHTML = `
    <img id="gallery-3" src="${item.gallery3}" alt="Gallery 3">
    `;
    document.querySelector(".gallery-item.gallery-4").innerHTML = `
    <img id="gallery-4" src="${item.gallery4}" alt="Gallery 4">
    `;
    document.querySelector(".gallery-item.gallery-5").innerHTML = `
    <img id="gallery-5" src="${item.gallery5}" alt="Gallery 5">
    `; 
}

function goBack(){
    document.querySelector(".main").style.display = "none";
    carousel.style.display = "block"
}

document.querySelector(".goBack").addEventListener("click",()=>{
    goBack();
})

// Referensi youtube: LUNDEV
let nextB = document.getElementById("next-one");
let prevB = document.getElementById("prev-one");
let backButton = document.getElementById("back");
let readMoreB = document.querySelector(".readmore");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");

nextB.onclick = function(){
    showSlider("next");
}
prevB.onclick = function(){
    showSlider("prev");
}

let unAcceptClick;
const showSlider = (type) => {
    nextB.style.pointerEvents = "none";
    prevB.style.pointerEvents = "none";
    carousel.classList.remove("prev","next");
    let itemsFood = document.querySelectorAll(".carousel .item")
    if(type==="next"){
        listHTML.appendChild(itemsFood[0]);
        carousel.classList.add("next");
    } else{
        let positionLast = itemsFood.length - 1;
        listHTML.prepend(itemsFood[positionLast]);
        carousel.classList.add("prev");
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextB.style.pointerEvents = "auto";
        prevB.style.pointerEvents = "auto";
    }, 500)
}

let items = document.querySelectorAll(".slider .item");
let slider = document.querySelector(".slider");
let next = document.getElementById("next2");
let prev = document.getElementById("prev2");

let active = 1;
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