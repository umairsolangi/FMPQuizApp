// var questionsArray = [
//     {
//         question: "Full Form Of RAM is?",
//         answer: "random access memory",
//         options:[
//             "random access memory",
//             "random access ete",
//             "random access das",
//             "random access asd",
//         ]
//     },
//     {
//         question: "HTml Stands for",
//         answer: "hyper text marckup language",
//         options:[
//             "hyper text marckup language",
//             "random access ete",
//             "random access das",
//             "random access asd",
//         ]
//     },
//      {
//         question: "what is your fav animal",
//         answer: "dont's know",
//         options:[
//             "dont's know",
//             "random access ete",
//             "random access das",
//             "random access asd",
//         ]
//     },
//     {
//         question: "What is Your Fav Color",
//         answer: "Yellow",
//         options:[
//             "Yellow",
//             "random access ete",
//             "random access das",
//             "random access asd",
//         ]
//     },
//     {
//         question: "What is Your Name?",
//         answer: "Umair",
//         options:[
//             "Umair",
//             "random access ete",
//             "random access das",
//             "random access asd",
//         ]
//     },
// ]

// function showQuestions(e){

//     //Show Questions
//     var questionElement = document.getElementById("questionElement")
//     questionElement.innerHTML = questionsArray[e].question;

//     //Show Options
//     var optionElement = document.getElementsByClassName("optionElement")
//     for(var i = 0; i<optionElement.length; i++){
//         optionElement[i].innerHTML = questionsArray[e].options[i]
//     }
// }


// var questionCount = 0;

// function nextQuestion(e){
//     var nextBtn = document.getElementById("nextBtn")
//     questionCount++;
//     showQuestions(questionCount)

// }


//  function putActiveClass(e){
//  e.classList.add("active")
//  }

// // function removeActiveClass(){
// //    var active = document.getElementsByClassName("active")
// // for(var i = 0; i<active.length; i++){
// //     active[i].classList.remove("active")
// // }
// // }


function Quiz (questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}






function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}






function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [
	new Question("Who is Prime Ministor Of Pakistan", ["Imran Khan", "Mikhail Gorbachev", "Yosef Stalin", "Yuri Andropov"], "Mikhail Gorbachev"),
	new Question("Which year Soviet Union broke apart", ["1989", "1995", "1991", "1985"], "1991"),
	new Question("How many countries achieved secession from the Soviet Union", ["19", "15", "14", "20"], "14"),
	new Question("Name of the prime Intelligence org during Soviet era?", ["FSB", "CIA", "Gestapo", "KGB"], "KGB"),
];

var quiz = new Quiz (questions);

populate();