const accountId = 1001
let accountEmail = "abc@xyz.in"
var accountPassword = "12345"//var should be avoided as it doesn't know scope
accountCity = "Kolkata"
let accountState;

// accountId = 2001 //this is not allowed as it is const
// console.log(accountEmail);
// accountEmail = "def@google.com"//modification possible
// console.log(accountId);
// console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

accountEmail = "def@xyz.in"
accountPassword = "23414"
accountCity = "Howrah"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])