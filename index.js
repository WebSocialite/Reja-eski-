// MODULE PACKAGE
 const Account = require("./account");

 Account.tellMeAboutClass();
 Account.tellMeTime();

 console.log("===========");

 const myAccount = new Account("Bob ", 1000, 77777);
 myAccount.giveMeDetails();
 myAccount.makeDeposit(1000);

 myAccount.withdrawMoney(3000);
 myAccount.makeDeposit(2000);



// const calculate = require('./hisob.js');
// const natija = calculate.kopaytirish(80, 20);
// console.log("natija", natija);
// console.log("**********");

// const natija2 = calculate.qoshish(80, 20);
// console.log("natija", natija2);
// console.log("**********");

// const natija3 = calculate.ayirish(80, 20);
// console.log("natija", natija3);
// console.log("**********");

// const natija4 = calculate.bolish(80, 20);
// console.log("natija", natija4);
// console.log("**********");




// const Account = require("./account");
// Account.tellMeAboutClass();
// Account.g

console.log(arguments);