const { O_DIRECTORY } = require('constants');
const readline = require('readline');
const { callbackify } = require('util');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator! Password must be at least 10 characters")

reader.question("Enter a password", function(input){
	tokens = input.split(' ');
	
    Password = String(tokens[1]);
	punctuationMark = String(tokens[2]);
	number = Number(tokens[3]);

    if (Password.length < 10){
        console.log("Password is not long enough")
    }
    else if (Password.length >= 10){
        console.log("Password works")
    }

	// This line closes the connection to the command line interface.
	reader.close()
});