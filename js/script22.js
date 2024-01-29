//addition
let x;
x = 5 + 8;
console.log(`addition result: ${x}`);

//subtraction
let x1;
x1 = 5 - 8;
console.log(`addition result: ${x1}`);

//multiplication
let x2;
x2 = 5 * 8;
console.log(`addition result: ${x2}`);

//division
let x3;
x3 = 5 / 8;
console.log(`addition result: ${x3}`);

// 11=(3*3) +2
let x4;
x4 = 11 % 3;
console.log(`addition result: ${x4}`);

// 5*5*5=125
let x5;
x5 = 5 ** 3;
console.log(`addition result: ${x5}`);

let result1 = "Frilancer" + " " + "in" + " " + "live";
console.log(result1);

let result2 = "Frilancer" + 31;
console.log(result2);
console.log(typeof result2);

// 2 + 2 = 22 )))))
let result3 = "2" + 2;
console.log(result3);
console.log(typeof result3);

let result4 = 2 + 2 + " "  + "frilancer";
console.log(result4);
console.log(typeof result4);

/// BUt
let result5 = "Frilancer" * 31;
console.log(result5);
console.log(typeof result5);

let result6 = "8" - 2;
console.log(result6);
console.log(typeof result6);

let result7 = 8 / "2";
console.log(result7);
console.log(typeof result7);

let result8 = 8 * "10";
console.log(result8);
console.log(typeof result8);

let users = "25";
let admins = "31";
console.log(users + admins);
console.log(typeof users + admins);
console.log(+users + +admins);
console.log(typeof +users + +admins);
console.log(Number(users) + Number(admins));

//
let a = 1 + 2;
let b = 2;
let result = 8 - (a = b + 3);
console.log(+a);
console.log(result);
//
let result10 = result11 = result12 = 11 + 2;
console.log(result10);
console.log(result11);
console.log(result12);

//
let x9 = 5;
console.log(x9);
x9 = x9 + 3;
console.log(x9);
x9 = x9 * 2;
console.log(x9);
//or
let x8 = 5;
console.log(x8);
x8 += 3;
console.log(x8);
x8 *= 2;
console.log(x8);
//
let addUser = 2;
addUser++;
console.log(addUser);


let removeUser = 2;
removeUser--;
console.log(removeUser);

console.log(2 > 1);
console.log(4 < 2);
console.log(58 == 36);
console.log(9 === 9);
console.log(8 != 9);
console.log(8 !== 8);
let result77 = 11 > 10;
console.log(result77);
//  || is or
let userNameX = "";
let userNickName = "frilancer";
let user = userNameX || userNickName || "no name";
console.log(user);

let adminX = 0;
let userX = 5;
adminX > userX || userX++;
console.log(userX);

let adminXx = 10;
let userXx = 5;
adminXx > userXx || userXx++;
console.log(userXx);

console.log("frilancer" && 0 && 2 && 3);
console.log(1 && 2 && null && 3);
console.log(2 && "frilancer");
console.log( 15 && 45 );
console.log(1 && 0 || 2 && 1);
let userU = 1;
(userU > 0) && 
   console.log(`user ${userU}`);
let userUu = 0;
(userUu > 0) &&
   console.log(`user ${userUu}`);
// ! is not
console.log(!true);
console.log(!1);
console.log(!"");
console.log(!"frilancer");

//
let name2;
console.log(name2 ?? "no name");
let name1 = "frilancer";
console.log(name1 ?? "no name");