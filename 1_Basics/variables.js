const accountId = 10       // constant declaration
let accountEmail = "ujjawala84049@gmail.com"
var accountPassword = "12345"     //don't use var 
accountCity = "Begusarai"
let accountState;  //in javascript, it will show undefined.

/*
prefer not to use var.
beacause of issue in block scope and functional scope.
*/

accountEmail = "ukroy07@gmail.com"
accountPassword = 987654
accountCity = "Kolkata"

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);