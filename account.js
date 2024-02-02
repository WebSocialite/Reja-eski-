const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
         this.name = name;
         this.#amount = amount;
         this.#account_id = account_id;

    }
  

    tellMeBalance() {
        console.log(`Your balance: ${this.#amount}`);
        return this.#amount;
    }
    withdrawMoney(amount) { 
        if (this.#amount > amount) { 
            this.#amount -= amount;
            console.log(`hisobdan ${amount} yechildi va qoldiq ${this.#amount}`);
        } else {
            console.log(`Sizning balansingizdagi pul yetarli emas: ${this.#amount}`);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(
            `Hisobingiz toldirildi, hisobingiz ${this.#amount} tashkil etdi `
        );
    }
    giveMeDetails() {
        console.log(`hurmatli ${this.name} sizning hisobingiz ${this.#amount} ga teng`);
        console.log('Hisob raqamingiz:', this.#account_id);
    }

    static tellMeAboutClass() {
        console.log('bu class accountlarni yasash uchun hizmat qiladi!');
    }
    static tellMeTime() {
        console.log(`hozirgi vaqt ${moment().format("YYY MM DD HH:mm:ss")}`);
    }

}
module.exports = Account;