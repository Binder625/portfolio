
let firstname = 'sarah';

console.log(firstname);

function welcome() {
    let username = prompt("What is your name?");    
    let message = "Welcome, " + username;
    document.getElementById('saywelcome').innerHTML = message; 
}


