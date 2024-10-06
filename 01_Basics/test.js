"use strict";
const accountId = 1509
let emailId = 'may@gmail.com'
var accPass = 'mayu'
accCity = 'Jabalpur'
let accState; // just declaring but not assigning value to it will out as undefined

// accountId = 2 -->Not allowed
// emailId = 'hey@gmail.com' -->working
// accPass='thapa' --> working
// accCity='hyd' --> working

console.log(accCity)
console.table([accountId, emailId, accPass, accCity])
console.log(accState) //undefined as output

/*
Prefer not to use var as it doesn't have block and functional scope
*/