
let firstname = 'sarah';

console.log(firstname);

function welcome() {
    let username = prompt("What is your name?");    
    let message = "Welcome, " + username;
    document.getElementById('saywelcome').innerHTML = message; 
}

function function1(){


  var num1, num2;
  num1 = parseInt(window.prompt("Input the First integer", "0"));
  num2 = parseInt(window.prompt("Input the Second integer", "0"));
                                                   
  if (num1 > num2) 
    { 
    document.getElementById("binder").innerHTML= "The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".";
    }   
  else if (num2 > num1)
    {
      document.getElementById("binder").innerHTML= "The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".";
    }                  
  else
    {
      document.getElementById("binder").innerHTML= "The values "+ num1+ " and "+num2+ " are equal.";
    }
  }
  
  function function2(){
  var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)

// All Positive //

{
       alert("The sign is +");
}
else if (x<0 && y<0 && z>0)

        // Two Negatives

        {
          document.getElementById("Binder").innerHTML="The sign is +";
        }
    
        else if (x>0 && y<0 && z<0)

        // Two Negatives //

        {
          document.getElementById("Binder").innerHTML="The sign is +";
        }
        else if (x<0 && y>0 && z<0)

       // Two Negatives //

        {
          document.getElementById("Binder").innerHTML="The sign is +";
        }
        else

        // One Negative or all

        {
          document.getElementById("Binder").innerHTML="The sign is -";
        }
      }

function function3(){

        if (num[0] > num[1])
{
    // swap num[0] and num[1]
    temp = num[0]; num[0] = num[1]; num[1] = temp;
}
if (num[0] > num[2])
{
    // swap num[0] and num[2]
    temp = num[0]; num[0] = num[2]; num[2] = temp;
}

// at this point, num[0] contains the smallest of the three numbers

if (num[1] > num[2])
{
    // swap num[1] and num[2]
    temp = num[1]; num[1] = num[2]; num[1] = temp;
}
}

// encryption code //

function Generate_key() {
  var i, j, k = "";

  var i, j, k = "";

addEntropyTime();
var seed = keyFromEntropy();

  var prng = new AESprng(seed);
if (document.key.keytype[0].checked) {
  //	Text key
  var charA = ("A").charCodeAt(0);
  
  for (i = 0; i < 12; i++) {
if (i > 0) {
        k += "-";
}
for (j = 0; j < 5; j++) {
        k += String.fromCharCode(charA + prng.nextInt(25));
}
  }
} else {
  // Hexadecimal key
  var hexDigits = "0123456789ABCDEF";
  
  for (i = 0; i < 64; i++) {
    k += hexDigits.charAt(prng.nextInt(15));
  }
}
  document.key.text.value = k;
delete prng;
}

function encryption1(){
let binder123 = prompt("Encrypt Anything");
let binder321 = "";
let binder231 = "";
let binder213 = binder123.split(" ");

binder213.reverse();

for(let i = 0; i < binder213.length; i= i+1){
  binder231 = binder213[i][0];
  binder321 += (binder213[i]).slice(1);
  binder321 += binder231 + "##";
}
document.getElementById("panda").innerHTML = binder321;
}

function decryption1(){
  let binder= prompt ("Decrypt Anything");
  let chef="";
    let lastcharacter="";
    let sing= binder.split(" ");
    sing.reverse();
    for(let i = 0 ; i < sing.length ; i=i+1){
      const rednib = sing[i].length -3;
lastcharacter = sing[i][rednib];
chef += lastcharacter + (sing[i]).slice(0,-3) + " ";
    }

    document.getElementById("Baker").innerHTML = chef
    
}