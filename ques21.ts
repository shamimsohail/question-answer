//ques 21
interface item {
    name:string
    price:number
}
//create two objects
const book: item ={
    name: 'ESSENTIAL TYPESCIPT',
    price:450,
}
const apple:item ={
    name: 'apple',
    price:200,
}
console.log(`book name: ${book.name},\n price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)

//ques 22
let array: (string | number) [] = ['babar','taha',3,5,8,'sana']
console.log(array[5]);
console.log(array[0]);
console.log(array[1]);
console.log(array[3]);
console.log(array[2]);

//ques 23
let car: string = 'subaru';

//test 1: Equality comparison (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True

//test 2: Strict equality comparison (true)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //True

//test 3: Inequality comparison (False)
console.log("Is car !='subaru'? I predict false.");
console.log(car != 'subaru'); //false

//test 4:Strict Inequality comparison (False)
console.log("Is car !=='subaru'? I predict false.");
console.log(car !== 'subaru'); //false

//test 5:Less than comparison (False)
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); //false

//test 6:Greater than comparison (False)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //false (Iexicographic comparison)

//test 7:Less than or equal comparison (True)
console.log("Is car <='subaru'? I predict true.");
console.log(car <= 'subaru'); //true

//test 8:Greatetr than or equal comparison (True)
console.log("Is car >='subaru'? I predict true.");
console.log(car >= 'subaru'); //true

//test 9:Checking truthiness (True)
console.log("Is car? I predict true.");
console.log(car); //true(non-empty string is truthy)

//test 10:Checking falsiness (false)
console.log("Is !car? I predict false.");
console.log(!car); //false (negation of a truthy value)


//ques 24
// "STRING TEST"
//let car :string = 'subaru';
//let age: number = 25;
//let numbers: number[] = [1,2,3,4];

//test 1: Equality (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True (case-insensitive)


//test 2: strict equality (false)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //false (case-sensitive)


//test 3: Inequality (true)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); //True


// //test 4: Inequality (false)
// console.log("Is car !== 'subaru'? I predict false.");
// console.log(car !== 'subaru'); //false (case-sensitive)

// //"Lowercase function tests"
// //test 5:Lowercase conversion (true)
// console.log("Is car.tolowercase() == 'sabaru'? I predict true.");
// console.log(car.toLowerCase() == 'sabaru');//true (converted to lowercase)

// //test 6:Lowercase conversion (false)
// console.log("Is car===car.tolowercase()? I predict true.");
// console.log(car===car.toLowerCase());//false (orignal value remains uppercase)

// //"NUMERICAL TEST"
// //test 7:Equality (true)
// console.log("Is age = 25? I predict True.");
// console.log(age == 25); //true

// //test 8:Inequality (false)
// console.log("Is age != 30? I predict True.");
// console.log(age != 30); //true

// //test 9:Greater than (false)
// console.log("Is age > 30? I predict false.");
// console.log(age > 30); //false

// //test 10:Less than or equal (true)
// console.log("Is age <= 25? I predict True.");
// console.log(age <= 25); //true

// //LOGICAL OPERATORS
// //test 11: AND (true)
// console.log("Is age > 20 && age < 30? I predict True.");
// console.log(age > 20 && age < 30); //true (both condition met)

// //test 12: or (false)
// console.log("Is age > 30 || age < 18? I predict false.");
// console.log(age > 30 || age < 18); //false (neither condition met)

// //"Array test"
// //test 13: In array (true)
// console.log("Is 3 in number? I predict True.");
// console.log(3 in numbers); //true (check for index existence)

// //test 14:Not In array (false)
// console.log("Is 5 in number? I predict true.");
// console.log(5 in numbers); //true (negation of "in" operator)

//ques 25
//let alien_color: string = "green";
//Write an if statement to test whether the alien's color is green.If it is ,print a message that the player just earned 5 points.
//if(alien_color == "green"){
    //console.log("the player just earned 5 points.");
//}
//Write one version of this program that passes the if test and another that fails.
//(The version that fails will have no output.)

//alien_color = "red";
//if(alien_color == "green"){
   // console.log("the player just earned 5 points.");
//}

//ques 26
//choose a color for an alien as you.
//did in exercise 25, and write an if_else chain.
//let alien_color: string = "green";
//if the alien's color is green, print astatement that
//the player just earned 5 points for shooting the alien.
//if(alien_color == "green"){
   // console.log("the player just earned 5 points for shooting the alien.");
//}
//else{
   // console.log("the player just earned 10 points")
//}
//alien_color = "red";
//if(alien_color== "green"){
    //console.log("the player just earned 5 points for shooting the alien.");
//}

//ques 27
//create a variable called alien_color
let alien_color: string = "green";
//if the alien's color is green, print message that the player earned 5 points.
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}
//if the allien is yellow, print a message that the player earned 10 points.
else if(alien_color =="green"){
    console.log("the player just earned 10 points")
}
//if the allien is red, print a message that the player earned 15 points.
else if(alien_color== "green"){
    console.log("the player just earned 15 points .");
}
else{
    console.log("Please select right color")
}
//Write three versions of this program,making sure each message is printed
//for the appropriate color alien.
//version 2
alien_color = "red";
if(alien_color == "green"){
    console.log("the player earned 5 points.")
}
else if(alien_color == "yellow"){
    console.log("the player earned 10 points.")
}
else if(alien_color == "red"){
    console.log("the player earned 15 points.")
}
else{
    console.log("please select right color")
}

//version 3
alien_color = "yellow";
if(alien_color == "green"){
    console.log("the player earned 5 points.")
}
else if(alien_color == "yellow"){
    console.log("the player earned 10 points.")
}
else if(alien_color == "red"){
    console.log("the player earned 15 points.")
}
else{
    console.log("please select right color")
}

//ques 28
//Stages of life: Write an if-else chain that determines a person's stage of life.
//set a value for the variable age,and then:
//if the person is less than 2 years old, print a message that the
//person is a baby.

let age: number = 25;
if (age<2) {
    console.log("the person is a baby")
}

//If the person is at least 2 years old but less than 4, print
//a message that the person is a toddler.

else if(age>= 2 && 4){
    console.log("person is a toddler");
}

//If the person is at least 4 years old but less than 13,
//print a message that the person is a kid.
else if(age>=2 && age<4){
    console.log("person is a kid")
}

//If the person is at least 13 years old but less than 20,
//print a message that the person is a tenager.
else if(age>=13 && age<20){
    console.log("person is a tenager")
}

//If the person is at least 20 years old but less than 65,
//print a message that the person is a adult.
else if(age>=20 && age<65){
    console.log("person is a adult")
}

//If the person is age 65 or older,
//print a message that the person is an elder.
else {
    console.log("person is an elder")
}

//ques 29
//favourite fruit: Make a array of your favourite fruits,and
//then write a series of independent if statements that check for certain
//fruits in your array.
//Make a array of your three favourite fruits and call it favourite_fruits.
let favourite_fruit : string [] = ['apple','orange','grapes','bananas','watermelon']

if (`${favourite_fruit[0]}` ==='apple'){
    console.log('I like apple')
}
else{
    console.log('I like this fruit')
}

if (`${favourite_fruit[1]}` ==='orange'){
    console.log('I like orange')
}
else{
    console.log('I dont like this fruit')
}

if (`${favourite_fruit[2]}` ==='grapes'){
    console.log('I like grapes')
}
else{
    console.log('I dont like this fruit')
}

if (`${favourite_fruit[3]}` ==='kiwi'){
    console.log('I like kiwi')
}
else{
    console.log('I dont like this fruit')
}

if (`${favourite_fruit[4]}` ==='papaya'){
    console.log('I like papaya')
}
else{
    console.log('I dont like this fruit')
}

//ques 30
let users:string[] = ['saim','asad','ali','saad','admin'] 

for(let user of users)
 if (user ==='admin'){
    console.log('Hello admin, would you like to see a status report?');
 } 
 else {
    console.log(`Hello ${user},thank you for logging in again.`)
 }  


