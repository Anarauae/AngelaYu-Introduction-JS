alert ("Hello :)");
alert ("World!");
window.alert("Hello World!"); //pop up in browser
alert(2+5);
typeof("Aisha"); //string
typeof(1,2,3);  //number

//a)
prompt("What is your name?");
let myName = "Aisha";
alert(myName);
let yourName = prompt("What is his name?");
alert("My name is " + myName + ", welcome to my website " + yourName +"!");

//b)
let gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("Your game level currently is: " + gameLevel);

//c)
let a = 3;
let b = 8;

let c = a;
    a = b;
    b = c;
 console.log("a is" + a);
 console.log("b is" + b);

 //d)
 let message = "Hello";
 let fname = "Ahmed";

 alert(message +" my lovely hubby - " + fname + "!");

//e)
let tweet = prompt("Compose your tweet:");
let tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters remaining.");
 alert(prompt("Compose your tweet:").slice(0,140));
//f)
// let city = Madina;
// city.slice(3,5);
// alert(city.slice);

//g)
let frname = prompt("What is your name?");
let firstChar = frname.slice(0,1);
let toUpperCaseFirstChar = firstChar.toUpperCase();
let restOfName = frname.slice(1,frname.length);
let capitalisedFrname = toUpperCaseFirstChar + restOfName;
alert("Hello, " + capitalisedFrname);