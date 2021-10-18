/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "software for tracking changes in any set of files"

console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "the open source version control software that lets multiple people make separate changes to web pages at the same time"

console.log(gitHubDefinition)
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

var init = {
    description: 'creates a new Git repository',
    code: 'gitInit'
}
console.log(init)


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

var clone = {
    description: 'used to copy an existing Git repository into a new local directory',
    code: 'gitClone'
}
console.log(clone)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
//// had to make it Gstatus because only 'status' deprecates and will throw error/won't show output in log

let GStatus = {
    description: 'displays the state of the working directory and the staging area',
    code: 'gitStatus'
}; console.log(GStatus)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

var add = {
    description: 'adds a change in the working directory to the staging area',
    code: 'gitAdd'
}
console.log(add)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

var commit = {
    description: "captures a snapshot of the project's currently staged change",
    code: 'gitCommit'
}
console.log(commit)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

var push = {
    description: "uploads local repository content to a remote repository",
    code: 'gitPush'
}
console.log(push)