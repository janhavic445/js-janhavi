const accountId = 122345
let accountEmail="janhavi@google.com"
var accountPassword="12345";
accountCity="Mumbai";
let accountState;

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

accountEmail="jc@jan.com"
accountPassword="111232"
accountCity ="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);