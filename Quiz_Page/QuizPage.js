let quizContainer = document.querySelector(".quiz-container");
let questionContainer = document.querySelector(".quiz-questions");
let answerOptions = document.querySelector(".quiz-answer");
let nextQuestionBtn = document.querySelector(".next-button");
let resultContainer = document.querySelector(".result-page");
let numberQuestion = document.querySelector(".number-of-questions");
let scoreContainer = document.querySelector(".score");
let tryAgainBtn = document.querySelector(".try-btn");
let startQuizBtn = document.querySelector(".start-btn");

fetch("./Questions.json").then(response => response.json()).then(data => {
    let indexQuestion = 0; 

    let score = 0;
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML = `SCORE: ${score}%`;

    function showQuestion(index){
        quizContainer.classList.add("activeResult");
        quizContainer.style.opacity = "1"
        quizContainer.style.display = "flex";
        

        document.querySelector(".welcome-container").classList.remove("active");
        document.querySelector(".welcome-container").style.display = "none";
 
        document.querySelector(".duration").style.backgroundColor = "#F65E96";
        resetTimer();
        startTimer();

        let objectQuestion = data[index];
        let question = objectQuestion.question;
        let option = objectQuestion.options;
        let answer = objectQuestion.correctAns;

        questionContainer.innerHTML = question;
        answerOptions.innerHTML = "";
        option.forEach(element => {
            let wadahOption = document.createElement("div");
            wadahOption.className = "quiz-option";
            wadahOption.innerHTML = element

            wadahOption.addEventListener("click",()=>{
                checkAnswer(element,option,answer,wadahOption);
            })

            answerOptions.appendChild(wadahOption);
        });
        nextQuestionBtn.style.visibility = "hidden";
    };

    function nextQuestion(){
        indexQuestion++;
        numberQuestion.innerHTML = `Question ${indexQuestion+1} out of ${data.length}`;
        if(indexQuestion<data.length){
            if(indexQuestion+1!==data.length){
                showQuestion(indexQuestion);
            } else{
                nextQuestionBtn.innerHTML = "VIEW SCORE";
                showQuestion(indexQuestion);
            }
        } else{
            showResult();
        }
    };

    function showResult(){
        let congratsMessage = document.querySelector(".message");
        let affrimation = document.querySelector(".affirmation");
        let iconImage = document.querySelector(".icon-container");

        quizContainer.style.display = "none";
        quizContainer.style.opacity = "0";
        quizContainer.classList.remove("activeQuiz");

        resultContainer.style.opacity = "1";
        resultContainer.style.display = "flex";
        resultContainer.classList.add("activeResult");
        

        document.querySelector(".correct-answer").innerHTML = `You got <b>${score/10}</b> correct answers out of <b>${data.length}</b>`;

        if(score/10===10){
            congratsMessage.innerHTML = "Congratulations!";
            affrimation.innerHTML = "You're a quiz master! Perfect score!"
            iconImage.innerHTML = '<img src="img/10-brain.png" alt="" class="icon-img">'
        } else if(score/10===9){
            congratsMessage.innerHTML = "Great Job!";
            affrimation.innerHTML = "Just one more to perfection"
            iconImage.innerHTML = '<img src="img/09-cat.png" alt="" class="icon-img">'
        } else if(score/10===8){
            congratsMessage.innerHTML = "Well Done!";
            affrimation.innerHTML = "You really know your stuff"
            iconImage.innerHTML = '<img src="img/08-croco.png" alt="" class="icon-img">'
        } else if(score/10===7){
            congratsMessage.innerHTML = "Good Effort!";
            affrimation.innerHTML = "You're getting close!"
            iconImage.innerHTML = '<img src="img/07-hamster.png" alt="" class="icon-img">'
        } else if(score/10===6){
            congratsMessage.innerHTML = "Keep Going!";
            affrimation.innerHTML = "A little more practice will help"
            iconImage.innerHTML = '<img src="img/06-dino.png" alt="" class="icon-img">'
        } else if(score/10===5){
            congratsMessage.innerHTML = "Not Bad!";
            affrimation.innerHTML = "Halfway there! Try Again"
            iconImage.innerHTML = '<img src="img/05-samurai.png" alt="" class="icon-img">'
        } else if(score/10===4){
            congratsMessage.innerHTML = "Keep Practicing!";
            affrimation.innerHTML = "You'll get better soon"
            iconImage.innerHTML = '<img src="img/04-ninja.png" alt="" class="icon-img">'
        } else if(score/10===3){
            congratsMessage.innerHTML = "Don't Give Up!";
            affrimation.innerHTML = "You're learning. Keep trying!"
            iconImage.innerHTML = '<img src="img/03-robot.png" alt="" class="icon-img">'
        } else if(score/10===2){
            congratsMessage.innerHTML = "Tough Round!";
            affrimation.innerHTML = "Don't lose hope. Try Again!"
            iconImage.innerHTML = '<img src="img/02-vampire.png" alt="" class="icon-img">'
        } else if(score/10===1){
            congratsMessage.innerHTML = "Oops!";
            affrimation.innerHTML = "Better luck next time!"
            iconImage.innerHTML = '<img src="img/01-panda.png" alt="" class="icon-img">'
        } else{
            congratsMessage.innerHTML = "That Was Rough!";
            affrimation.innerHTML = "You didn't get any correct, but it's okay! Try again and learn something new"
            iconImage.innerHTML = '<img src="img/00-crying.png" alt="" class="icon-img">'
        }
    }

    function checkAnswer(userAns,arrayOption,correctIndex,answerBox){
        clearInterval(timer);

        let corrAns = arrayOption[correctIndex];
        if(userAns === corrAns){
            answerBox.classList.add("benar");
            score+=10;
            scoreContainer.innerHTML = `SCORE: ${score}%`;
            let checkIcon = `<span><i class="fa-regular fa-circle-check"></i></span>`;
            answerBox.insertAdjacentHTML("beforeend",checkIcon);
            nextQuestionBtn.style.visibility = "visible";
            
        } else{
            answerBox.classList.add("salah");
            correctAnsHighlight(correctIndex);
            let wrongIcon = `<span><i class="fa-regular fa-circle-xmark"></i></span>`;
            answerBox.insertAdjacentHTML("beforeend",wrongIcon);
            
        }

        answerOptions.querySelectorAll(".quiz-option").forEach(option => option.style.pointerEvents = "none");

    }

    function correctAnsHighlight(currentAns){
        let correctAns = answerOptions.querySelectorAll(".quiz-option")[currentAns];
        correctAns.classList.add("benar");
        let checkIcon = `<span><i class="fa-regular fa-circle-check"></i></span>`;
        correctAns.insertAdjacentHTML("beforeend",checkIcon);

        nextQuestionBtn.style.visibility = "visible";
    }

    let timeLimit = 15;
    let currentTime = timeLimit;
    let timer = null;
    let timeContainer = document.querySelector(".durationText");
    
    function startTimer(){
        timer = setInterval(()=>{
            currentTime--;
            timeContainer.innerHTML = `${currentTime}s`;

            if(currentTime <= 0){
                indexCorAns = data[indexQuestion].correctAns;
                clearInterval(timer);
                correctAnsHighlight(indexCorAns);
                nextQuestionBtn.style.visibility = "visible";
                document.querySelector(".duration").style.backgroundColor = "#c31402";

                answerOptions.querySelectorAll(".quiz-option").forEach(option => option.style.pointerEvents = "none");
            }
        }, 1000);
    }

    function resetTimer(){
        clearInterval(timer);
        currentTime = timeLimit;
        timeContainer.innerHTML = `${currentTime}s`;
    }

    function resetQuiz(){
        resetTimer();
        score = 0;
        scoreContainer.innerHTML = `SCORE: ${score}%`;
        indexQuestion = 0;
        showQuestion(indexQuestion);
        numberQuestion.innerHTML = `Question ${indexQuestion+1} out of ${data.length}`;

        nextQuestionBtn.innerHTML = "NEXT &nbsp;<i class='fa-solid fa-arrow-right'></i>";

        resultContainer.style.opacity = "0";

        quizContainer.style.opacity = "1"
        quizContainer.style.display = "flex";
        
    }
    
    document.querySelector(".welcome-container").classList.add("active");
    nextQuestionBtn.addEventListener("click",nextQuestion);
    tryAgainBtn.addEventListener("click",resetQuiz);
    startQuizBtn.addEventListener("click",()=>{
        showQuestion(indexQuestion);
    });
})

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
