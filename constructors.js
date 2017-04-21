var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

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
		console.log(newBasicCard);
		//NEED THIS LOGGED AND SAVED SOMEWHERE TO BE USED LATER
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
				console.log(newClozeCard);
				//NEED THIS LOGGED AND SAVED SOMEWHERE TO BE USED LATER  NPM INIT?
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

createCard();
//IF STATEMENT TO RUN CARDS
// function CreateCard(){
// 	var type = Math.floor(Math.random()),

// 	if (type === 1) {
// 		createCloze();
// 	}
// 	else {
// 		createBasic();
// 	}
// }

