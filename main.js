"use strict";
//addition
//let addition:number = 6+2;
//console.log("addition",addition);
//substraction
//let subtraction:number = 10-2;
//console.log("subtraction",subtraction);
//multiplication
//let multiplication:number = 4*2;
//console.log("multiplication",multiplication); 
//division
//let division:number = 16/2;
//console.log("division",division);
// addition
//console.log(6+2);
//subtraction
//console.log(10-2);
//multiplication
//console.log(4*2);
//division
//console.log(16/2);
//favourite number
//let favouriteNumber = 7;
//print message
// //console.log("My favourit number is ",(favouriteNumber));
Object.defineProperty(exports, "__esModule", { value: true });
// let favouriteNumber:number = 4;
// console.log(`My favouriteNumber is ${favouriteNumber}`);
//ques 10
//My name is SHAMIM
//Dated:12/6/2024
//this program will run simple code just like hello world
//console.log("Hello world simple program");
//Ques 11
//let member:string[] = ["azan","ali","ahmed","saad","asad"];
//for(let i=0; i<member.length; i++){
//   console.log(member[i]);
//}
//ques 12
// let members: string[] =['azan','ali','ahmed','saad','asad'];
// let message: string='kal birthday hai kis ki:'; 
// for(let i=0; i<members.length; i++){
//     console.log(message + members[i]);
// }
// ques 13
// let transportation: string [] = ['civic','bike','bus','suzuki jis me cow ho'];
// for(let i=0; i<transportation.length; i++){
//     console.log(`I would like to own a ` + transportation[i]);
// }
//ques 14
//  let guest_list: string [] = ['azan','ali','ahmed','saad','asad'];
//  for(let i=0; i<guest_list.length; i++){
//      console.log(`Respected sir/Madam ` + guest_list[i] + ',\new invited you on dinner tomorrow.\n\nThank You');
//  }
//ques 15
// let guest_list: string [] = ['azan','ali','ahmed','saad'];
//    for(let i=0; i<guest_list.length; i++){
//        console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
//    }
// let not_present: string = 'ali';
// let new_guest: string = 'umer';
// guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
// console.log(`Respected sir/Madam ` + guest_list[i] + ',\new invited you on dinner tomorrow.\nThank You\n');
//}
//ques 16
//let guest_list: string [] = ['azan','ali','ahmed','saad'];
//for(let i=0; i<guest_list.length; i++){
//    console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
//}
// let not_present: string = 'ali';
//let new_guest: string = 'umer';
//guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//  console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
//}
//guest_list.unshift('shaheen','sarfaraz','rizwan');
//for(let i=0; i<guest_list.length; i++){
//  console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n');
//}
//ques 17
//  let guest_list: string [] = ['azan','ali','ahmed','saad'];
//for(let i=0; i<guest_list.length; i++){
//    console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
//}
//let not_present: string = 'ali';
//let new_guest: string = 'umer';
//guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//  console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
//}
//guest_list.unshift('shaheen','sarfaraz','rizwan');
//for(let i=0; i<guest_list.length; i++){
//  console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n');
//}
//   console.log('\nUnfortunately we can not arrange big table , Only two person allow.')
//   while(guest_list.length>2){
//     let remove_guest = guest_list.pop();
//     console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`);
//   }
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Respected sir/Madam ` + guest_list[i] + ',\nyes you are still invited on tomorrow dinner.\nThank You\n');
//   }  
// guest_list.splice(0,2)
// console.log(guest_list) 
//ques 18
//let places : string[] = ['cape town','delhi','faisalabad','bankok','ahmedabad']
//console.log(`orignal ` + places);
//Print your array in alphabetical order without modifying the actual list.
//console.log(`copy ` + [...places].sort());
//show that your array is still in its orignal order by printing it.
//console.log(`orignal :` + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
//console.log(`copy ` + [...places].sort().reverse());
//show that your array is still in its orignal order by printing it again.
//console.log(`copy ` + [...places].sort().reverse());
//Reverse the order of your list. Print the array to show that its order has changed.
//console.log(`orignal :` + places.sort());
//Reverse the order of your list again.Print the list to show it's back to its orignal order.
//console.log(`orignal :` + places.sort().reverse());
//ques 19
var appguest_1 = require("./appguest");
console.log("n PRINTING NUMBER OF GUEST INVITED");
console.log("we had finally invited ".concat(appguest_1.guest_list.length, "  from appguest"));
//ques 20
var languages = ['english', 'urdu', 'hindi', 'french', 'arabic'];
console.log("list of languages:");
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var top_1 = languages_1[_i];
    console.log(top_1);
}
var cities = ['karachi', 'lahore', 'multan', 'islamabad'];
console.log("list of cities:");
for (var _a = 0, cities_1 = cities; _a < cities_1.length; _a++) {
    var top_2 = cities_1[_a];
    console.log(top_2);
}
