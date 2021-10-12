// alert ("Hello :)");
// alert ("World!");
// window.alert("Hello World!"); //pop up in browser
// alert(2+5);
// typeof("Elina"); //string
// typeof(1,2,3);  //number

// //a)
// prompt("What is your name?");
// let myName = "Elina";
// alert(myName);
// let yourName = prompt("What is his name?");
// alert("My name is " + myName + ", welcome to my website " + yourName +"!");

// //b)
// let gameLevel = 1;
// gameLevel = 2;
// gameLevel = 3;
// alert("Your game level currently is: " + gameLevel);

// //c)
// let a = 3;
// let b = 8;

// let c = a;
//     a = b;
//     b = c;
//  console.log("a is" + a);
//  console.log("b is" + b);

//  //d)
//  let message = "Hello";
//  let fname = "Aman";

//  alert(message +" my lovely hubby - " + fname + "!");

// //e)
// let tweet = prompt("Compose your tweet:");
// let tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + (140-tweetCount) + " characters remaining.");
//  alert(prompt("Compose your tweet:").slice(0,140));
// //f)
// // let city = Madina;
// // city.slice(3,5);
// // alert(city.slice);

// //g)
// let frname = prompt("What is your name?");
// let firstChar = frname.slice(0,1);
// let toUpperCaseFirstChar = firstChar.toUpperCase();
// let restOfName = frname.slice(1,frname.length);
// let capitalisedFrname = toUpperCaseFirstChar + restOfName;
// alert("Hello, " + capitalisedFrname);

// //h)
// let dogAge = prompt("How old your dog?");
// let humanAge = ((dogAge-2)*4)+21;
// alert("Your dog is " + humanAge + " year's old of human age.");

// //i)
// var x = 5;
//     x = x+1; //6               //this is equal for this   x++ will be 6 to
//     x++; //6  Increment
//     x = x-1; //4
//     x--; //4 Decrement
//     x = x+=2; //7 if i need to add more than 1 number
//     x+=2; //7
    
//     y = 3;
//     x+=y=8; // if we will another y 


// // THEME FUNCTION

// //a)
// function main(){
//     moveFourTimes();
//     turmLeft();
//     moveFourTimes();
//     turmLeft();
//     moveFourTimes();
//     turmLeft();
// }

// //b)
// // The Karel Chess Board Solution
// // This is one of the solutions for the Karel Check Board Challenge, there are many ways of
// // solving this problem, as long as you managed to achieve the pattern specified then you 
// // have succeeded!

// function main(){
//     beepersRight();
//     goUpTurnLeft();
//     beepersLeft();
//     goUpTurnRight();
//        beepersRight();
//     goUpTurnLeft();
//     beepersLeft();
//     goUpTurnRight();
//       beepersRight();
// }
 
// function goUpTurnRight() {
//    turnRight();
//    move();
//    turnRight();
// }
 
// function goUpTurnLeft() {
//     turnLeft();
//    move();
//    turnLeft();
// }
 
// function beepersRight() {
//    putBeeper();
//    move();
//    move();
//    putBeeper();
//    move();
//    move();
//    putBeeper();  
// }
 
// function beepersLeft() {
//     move();
//    putBeeper();
//    move();
//    move();
//    putBeeper();
//    move();
// }

// console.log(main,goUpTurnLeft,goUpTurnRight,beepersRight,beepersLeft);

//c)
// A Quick Note About the Next Lesson
// In the next lesson, we’ll be walking you through how to create a slightly more complex 
// Javascript function. If you wish to follow along, you can copy the following code.
//aa)
// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

//ab)
// function getMilk(bottles) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + bottles + " bottles of milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// getMilk(12);


//ac)
// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");

//     let numberOfBottles =Math.floor(money / 1.5);
//     console.log("buy " + numberOfBottles + " bottles of milk");

//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// getMilk(5);

//ad)
// function lifeInWeeks(age){

//     let yearsRemaning = 90-age;
//     let days = yearsRemaning * 365;
//     let weeks = yearsRemaning * 52;
//     let month = yearsRemaning * 12;

//     console.log("You have left " + days + " days " + weeks + " weeks, and " + month + " month's left.");
// }

// lifeInWeeks(12);

//ae)
// function getMilk(money) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");

//     let numberOfBottles =Math.floor(money / 1.5);
//     console.log("buy " + numberOfBottles + " bottles of milk");

//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return money % 1.5;
//   }

// let change = getMilk(5);
// console.log(change + " cent change return.");

//af)
// function getMilk(money, costPerBottle) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");

//     console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
    
//    return clacChange(money, costPerBottle);
//   }
//   function calcBottles(startingMoney, costPerBottle) {
//       let numberOfBottles = Math.floor(startingMoney / costPerBottle);
//       return numberOfBottles;
//   }

//   function clacChange(startingAmount, costPerBottle) {
//       let change = startingAmount % costPerBottle;
//       return change;
//   }

// console.log("Hello master, here is your " + getMilk (10, 3) + " cent change return.");

//ag)

function bmiCalculate(weight, height){
    //let bmi = weight  / Math.pow(height * 2); this is JS right variant
    let bmi = weight  / (height * height);
    return Math.round(bmi);
}
let bmi = bmiCalculate(65, 1.8).toFixed(0);
console.log(bmi);