


//Ques 11
let member:string[] = ["azan","ali","ahmed","saad","asad"];
for(let i=0; i<member.length; i++){
    console.log(member[i]);
}

//ques 12

 let members: string[] =['azan','ali','ahmed','saad','asad'];
 let message: string='kal birthday hai kis ki:'; 
 for(let i=0; i<members.length; i++){
     console.log(message + members[i]);
 }

// ques 13
 let transportation: string [] = ['civic','bike','bus','suzuki jis me cow ho'];
 for(let i=0; i<transportation.length; i++){
     console.log(`I would like to own a ` + transportation[i]);
 }

//ques 14
  let guest_list: string [] = ['azan','ali','ahmed','saad','asad'];
  for(let i=0; i<guest_list.length; i++){
      console.log(`Respected sir/Madam ` + guest_list[i] + ',\new invited you on dinner tomorrow.\n\nThank You');
  }

//ques 15
 let guest_list: string [] = ['azan','ali','ahmed','saad'];
    for(let i=0; i<guest_list.length; i++){
        console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
    }
  let not_present: string = 'ali';
  let new_guest: string = 'umer';
  guest_list[1] = new_guest;
  for(let i=0; i<guest_list.length; i++){
     console.log(`Respected sir/Madam ` + guest_list[i] + ',\new invited you on dinner tomorrow.\nThank You\n');
  }

  //ques 160
  let guest_list: string [] = ['azan','ali','ahmed','saad'];
    for(let i=0; i<guest_list.length; i++){
        console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
     }
    let not_present: string = 'ali';
    let new_guest: string = 'umer';
   guest_list[1] = new_guest;
  for(let i=0; i<guest_list.length; i++){
      console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
    }
    guest_list.unshift('shaheen','sarfaraz','rizwan');
    for(let i=0; i<guest_list.length; i++){
        console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n');
      }

      //ques 17
    let guest_list: string [] = ['azan','ali','ahmed','saad'];
    for(let i=0; i<guest_list.length; i++){
        console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
     }
    let not_present: string = 'ali';
    let new_guest: string = 'umer';
    guest_list[1] = new_guest;
    for(let i=0; i<guest_list.length; i++){
      console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n');
    }
    guest_list.unshift('shaheen','sarfaraz','rizwan');
    for(let i=0; i<guest_list.length; i++){
        console.log(`Respected sir/Madam ` + guest_list[i] + ',\nWe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n');
      }
       console.log('\nUnfortunately we can not arrange big table , Only two person allow.')
       while(guest_list.length>2){
         let remove_guest = guest_list.pop();
         console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`);
       }
     for(let i=0; i<guest_list.length; i++){
         console.log(`Respected sir/Madam ` + guest_list[i] + ',\nyes you are still invited on tomorrow dinner.\nThank You\n');
       }  
     guest_list.splice(0,2)
     console.log(guest_list) 
    
    //ques 18
    let places : string[] = ['cape town','delhi','faisalabad','bankok','ahmedabad']
    console.log(`orignal ` + places);
    //Print your array in alphabetical order without modifying the actual list.
    console.log(`copy ` + [...places].sort());
    //show that your array is still in its orignal order by printing it.
    console.log(`orignal :` + places);
    //Print your array in reverse alphabetical order without changing the order of the original list.
    console.log(`copy ` + [...places].sort().reverse());
    //show that your array is still in its orignal order by printing it again.
    console.log(`copy ` + [...places].sort().reverse());
    //Reverse the order of your list. Print the array to show that its order has changed.
    console.log(`orignal :` + places.sort());
    //Reverse the order of your list again.Print the list to show it's back to its orignal order.
    console.log(`orignal :` + places.sort().reverse());

//ques 19
import { guest_list } from "./appguest";
console.log(`n\ PRINTING NUMBER OF GUEST INVITED`)
console.log(`we had finally invited ${guest_list.length}  from appguest`);

//ques 20
let languages : string [] = ['english','urdu','hindi','french','arabic']
console.log("list of languages:");
for (let top of languages){
    console.log(top)
}
let cities : string [] = ['karachi','lahore','multan','islamabad']
console.log("list of cities:")
for(let top of cities){
  console.log(top)
}  





