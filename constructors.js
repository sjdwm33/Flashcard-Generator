var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var fs = require("fs");
var inquirer = require("inquirer");

// var CardCollection = [];

var createBasic = function(){

	inquirer.prompt([
		{
			name: "front",
			message: "What is the flashcard question?"
		}, {
			name: "back",
			message: "What is the answer to the question?"
		}
	]).then(function(answers) {
		
		var newBasicCard = new BasicCard(answers.front, answers.back);

		// CardCollection.push(newBasicCard);
				
		
		console.log("Created card: " + newBasicCard.front, newBasicCard.back);
		
	})
}


var createCloze = function(){

	inquirer.prompt([
		{
			name: "full",
			message: "what is your full statement?"
		}, {
			name: "deletion",
			message: "What is the cloze statement?"
		}
	]).then(function(answers) {
		var newClozeCard = new ClozeCard(answers.full, answers.deletion);

		function checkStatements(){
			var statement = answers.full;
			var check = statement.includes(answers.deletion);

			if (check === false){
			console.log("Error, your cloze statement isn't in your full statement");
			}
			else{
				// CardCollection.push(newClozeCard);
				console.log("Created card: " + newClozeCard.partial + ", " + newClozeCard.deletion);
		
			}
		};
		checkStatements();
	});
};


var createCard = function(){

	inquirer.prompt([
	{
		name: "type",
		message: "Do you want to make a basic or cloze flashcard?"
	}]).then(function(answer) {
		if (answer.type === "basic"){
			createBasic();
		}
		else if (answer.type === "cloze"){
			createCloze();
		}
	})
};

createCard()

//***This isn't working properly for me yet and doesn't seem to be required?

// function runCards(){
// 	inquirer.prompt([
// 	{
// 		name: "mode",
// 		message: "Do you want to make flashcards or run flashcards?"
// 	}]).then(function(answer) {
// 		if (answer === "make flashcards"){
// 			createCard();
// 		}
// 		else if (answer === "run flashcards"){

// 		}
// 	};
// };


// runCards();

