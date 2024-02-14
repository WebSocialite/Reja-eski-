// // TASK
// console.log('Jack Ma advises');
// const list = [ 
//     "be a good student", // 0-20
//     "choose good mentor", // 20-40
//     "run ur own business",// 40-50
//     "promote the young generation", // 50-60

// ];

// function giveAdvice(a, callback) {
//     if(typeof a !== 'number') callback("instert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 20 && a <= 40) callback(null, list[2]);
//     else if(a > 20 && a <= 50) callback(null, list[3]);
//     else if(a > 20 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000);
//         callback(null, list[5]);
//     }
// } 


// console.log('passed here 0');
// giveAdvice(30, (err, data) => {
//     if(err) console.log('ERROR: ', err);
//     else {
//         console.log('result:', data);
//   }
    
// });
// console.log('passed here 1');



// TASK
// console.log('Jack Ma advises');
// const list = [ 
//     "be a good student", // 0-20
//     "choose good mentor", // 20-40
//     "run ur own business",// 40-50
//     "promote the young generation", // 50-60

// ];

// async function giveAdvice(a) {
//     if(typeof a !== 'number') throw new Error("instert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
        // setTimeout(function() {
        //     return(null, list[5]);
        // }, 5000);
        // return(null, list[5]);
//     }
// } 


// console.log('passed here 0');
// giveAdvice(25).then(data => {
//     console.log('result:', data);
// })
// .catch(err => {
//     console.log("ERROR:", err);
// });



// console.log('passed here 1');


//async await
// async function run() {
//   let result = await giveAdvice(20);
//   console.log(result);
//   result = await giveAdvice(31);
//   console.log(result);
//   result = await giveAdvice(41);
//   console.log(result);
// }
// run();





// TASK B
/*

const countDigits = (string) => {
  let count = 0; 
  for (let i = 0; i < string.length; i++) { 
      if (!isNaN(parseInt(string[i]))) { 
          count++; 
      }
  }
  return count; 
};


console.log(countDigits("ad2a54y79wet0sfgb9"));  => 7 
/*



// TASK A

/* 
1-variant
function counter() {
    let count = 0; 
    function increment() { 
        count++;
        console.log(count);
    }
    return increment;
}


// MIT TASK A last solution

const countLetter = (letter, word) => {
    let count = 0; 
    word.split("").forEach(el => {
        if (el === letter) {
            count++;
        });
    return count 
}


*/


