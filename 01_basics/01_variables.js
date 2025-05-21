const accountId = 144553
let accountEmail = "amish4305@gmail.com"
var accountPassowrd = "123456"
accountCity = "Jaipur"
let accountState

// Prefer not to use var due to issues created in functional scope and block scope
// accountId = 2 (this will never work because account id is set by const and is permanent)

accountEmail = "amish@gmail.com"
accountPassowrd = "430568"
accountCity = "Delhi"

/* 
Starting to print all of the terms 

console.log(accountId);
console.log(accountEmail);
console.log(accountPassowrd);
console.log(accountCity);
*/

/*
Printing elements in the table
*/
console.table([accountEmail,accountId,accountPassowrd,accountCity, accountState]);