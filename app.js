//  // Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
//  // TODO: Add SDKs for Firebase products that you want to use
//  // https://firebase.google.com/docs/web/setup#available-libraries

//  // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//    apiKey: "AIzaSyBXxubC0P7y-Zr0MSN0SHOFjnw8e2ZPUKw",
//    authDomain: "quizapp-401ee.firebaseapp.com",
//    projectId: "quizapp-401ee",
//    storageBucket: "quizapp-401ee.appspot.com",
//    messagingSenderId: "117194869736",
//    appId: "1:117194869736:web:b7ca1f3864f2ffa3b6325d",
//    measurementId: "G-P0KBBCSTJT"
//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);

 

var questions = [
    {
        question: 'what is the differnece between XML and Html',
        options: ['html is used for exchanging data xml is not.','html is used for exchanging data xml is not.','html is used for exchanging data xml is not.'],
        correctAns: 'xml is used for exchanging data html is not'
    },
    {
        question: 'opening tag of html is called as_____.',
        options: ['closed tag', 'starting tag', 'forward tag','enging tag'],
        correctAns: 'starting tag'

    },
    {
        question:'html stands for_______',
        options: ['hyper text markup language','hyper text makeup language'],
        corrections: 'hyper text markup language'
    },
    {
        question:'html program is saved using _______ extension',
        options: ['.htnl','.html','.htlm','hml'],
        corrections: '.html'

    },
]
var currentQuestion = document.getElementById('currentQuestion')
var totalQuestion = document.getElementById('totalQuestion')
var question = document.getElementById('question')

var answerParent = document.getElementById('answerParent')




var indexNum = 0
// var score = 0

function renderQuestion(){
    currentQuestion.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length
   

    var obj = questions[0]
    question.innerHTML = obj.question

    answerParent.innerHTML = ''
    for(var i = 0; i < obj.options.length; i++){
        answerParent.innerHTML += `<div class="col-md-4">
        <div class="py-2">
            <button onclick="checkQuestion('${obj.options}','${obj.correctAns}')" class="btn btn-dark fs-4 rounded-pill w-100">
               ${obj.options[i]}
            </button>
        </div>
    </div>`
    }
}
renderQuestion()



// function nextQuestion(){
//     indexNum++
//     renderQuestion()

// }
// function checkQuestion(a, b){
//     if (a ==b)
//     {
//         score++
//         console.log(score)
//     }
//     nextQuestion()
// }