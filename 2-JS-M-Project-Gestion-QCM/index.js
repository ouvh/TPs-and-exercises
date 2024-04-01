let questions;
  
  const questionContainer = document.getElementById('question-container');
  const submitBtn = document.getElementById('submit-btn');
  const scoreContainer = document.getElementById('score-container');
  const scoreDisplay = document.getElementById('score');
  const timerContainer = document.getElementById('timer-container');
  const overlay = document.getElementById('overlay');
  
  let score = 0;
  let currentQuestion = 0;
  let timer;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }
  
  function displayQuestion() {
    timerContainer.style.display = 'block';
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-1';
    const current = questions[currentQuestion];
    document.getElementById("info").innerHTML = questions.length - currentQuestion - 1
    let timeLeft = 10; 
    document.getElementById('timer').textContent = timeLeft;


    timer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timer);
        timerContainer.style.display = 'none';
        overlay.style.opacity = '1';
        overlay.style.zIndex = '1';

        setTimeout(() => {
          overlay.style.opacity = '0';
          overlay.style.zIndex = '-1';
          currentQuestion++;
          if (currentQuestion < questions.length) {
            displayQuestion();
          } else {
            showScore();
          }
        }, 1000);
      }
      document.getElementById('timer').textContent = timeLeft;
      timeLeft--;
    }, 1000);
    

    let answere =shuffleArray([... current.incorrect_answers, ...[current.correct_answer]]);

    questionContainer.innerHTML = `
      <div class="question">${current.question}</div>
      ${answere.map(answer => `
        <label>
        <br>
          <input type="radio" name="answer" value="${answer}">
          ${answer}
        </label>
      `).join('')}
    `;
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
      if (selectedAnswer.value === questions[currentQuestion].correct_answer) {
        score++;
      }
      clearInterval(timer);
      timerContainer.style.display = 'none';
      
        overlay.style.opacity = '0';
        overlay.style.zIndex = '-1';
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayQuestion();
        } else {
          showScore();
        }
    } else {

      alert("Veuillez sélectionner une réponse.");
    }
  }
  
  function showScore() {
    scoreContainer.style.display = 'block';
    document.getElementById("box").style.display = "flex"

    
    scoreDisplay.textContent = score;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  

 function  load_data(){

    const number = parseInt(document.getElementById("trivia_amount").value)
    const categ = document.getElementById("trivia_category").value
    const diff = document.getElementById("trivia_difficulty").value

    let link;

    if (categ != "any" && diff != "any"){
        link = `https://opentdb.com/api.php?amount=${number}&category=${categ}&difficulty=${diff}&type=multiple`
    }
    else if(categ === "any" && diff === "any"){
        link = `https://opentdb.com/api.php?amount=${number}&type=multiple`

    }
    else if (categ === "any"){
        link = `https://opentdb.com/api.php?amount=${number}&difficulty=${diff}&type=multiple`

    }
    else{
        link = `https://opentdb.com/api.php?amount=${number}&category=${categ}&type=multiple`

    }


     fetch(link).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    questions = data.results;
    console.log(questions)
    displayQuestion();

  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });




}



  submitBtn.addEventListener('click', checkAnswer);


  document.getElementById("comme").addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("ff").style.display = "none";
    document.getElementById("start").style.display = "block";
    load_data();

  })
  
  