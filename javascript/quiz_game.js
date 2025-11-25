document.addEventListener("DOMContentLoaded",function (){
    const question = document.getElementById("question");
    const choices = document.getElementById("choices");
    const nextBtn = document.getElementById("nextBtn");
    const result = document.getElementById("result");

    const quizData = [
        {
            question:"What's country that made Black Myth Wukong ?",
            choices:["CAMBODIA","AMERICIA","CHINA","ENGLAND"],
            answer:"CHINA"
        },
        {
            question:"What is my name?",
            choices:["NH Ot Dg Del","PANHASAK","SAK","IDK"],
            answer:"PANHASAK"
        },
        {
            question:"Who is the strongest Avanger? ",
            choices:["Iron man","Captain Americia","Thor","Hulk","Point break"],
            answer:"Thor"
        },
    ];
    let currentQuiz = 0;
    let score = 0;

    function selectAnswer(e){
        const selectAnswer = e.target.textContent;
        const correctAnswer = quizData[currentQuiz].answer;

        if (selectAnswer === correctAnswer) {
            score++;
            e.target.style.background = "darkgreen";

        }else {
             e.target.style.background = "Black";
        }

        Array.from(choices.children).forEach(btn => btn.disabled = true);
        nextBtn.classList.remove("hidden");
    }
    function loadQuiz(){
        nextBtn.classList.add("hidden");
        // question.textContent = "What is my name?";
        choices.innerHTML = "";
        // const choicesArr = ["NH Ot Dg Del","PANHASAK","SAK","IDK"]
        // choicesArr.forEach( choice => {
        //     const button = document.createElement("button");
        //     button.textContent = choice;
        //     choices.appendChild(button);
        // });
        //rewrite question
        const currentData = quizData[currentQuiz];
        question.textContent = currentData.question;

        const choiceArr = currentData.choices
            choiceArr.forEach( choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click",selectAnswer);
            choices.appendChild(button);
        });
    }
    nextBtn.addEventListener("click",function(event) {
        alert("HAHA");
        currentQuiz++;
            
        if (currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            showResult();
        }
    });
    // nextBtn.addEventListener("click",function(event) {
    //     alert("LOL");
    //       loadQuiz();  
    // });
    function showResult(){
        document.getElementById("quiz").classList.add("hidden");
        result.classList.remove("hidden");
        result.textContent = `ពិន្ទុរបស់អ្នកគឺ ${score} / ${quizData.length}!`
    }
    loadQuiz();
});