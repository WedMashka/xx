"user strict";
let message = "Hi frelancer!";
let x = 5;
let y = 7;
if (x > y) {
   console.log(message);
} else {
   console.log("Not found user");
}
//
let message1 = "hi";
let messageEnd;
if (5 > 1) {
   messageEnd = ",Vasya!";
} else {
   messageEnd = ",Olga!";
}
//  let messageEnd = (5>1) ? ",Vasya!":",Olga!";
message1 += messageEnd;
console.log(message1);

let hi = "helow";
/*
let name1;
if (5 > 50) {
   name1 = ", Vasya";
} else if (5 > 30) {
   name1 = ", Olga";
} else if (5 > 10) {
   name1 =  ", Misha";
} else if (5 > 1) {
   name1 = ", Andrei";
} else {
   name1 = ", Kesha";
}*/

name1 = (5>50) ? ", Vasya" :
(5>30) ? ", Olga":
(5>10) ? ", Misha":
(5>1) ? ", Andrei": ", Kesha";

hi += name1;
console.log(hi);

