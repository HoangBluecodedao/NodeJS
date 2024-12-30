// console.log(parseInt('10+6')) //10
// console.log(parseInt('7FM')) //7
// console.log(parseInt('M7F')) //NaN

// console.log(isNaN(`Praven`))

// console.log([-1,2].map(num=>{
//     if(num>0) return ;
//     return num * 2
// }))
// [undefined, undefined]
// [-2, undefined]

// 'use strict' --> strict mode
// {
//     function abc() {
//         console.log('Praven');
//     }
// }

// abc()

// function abc(a,b) {
//     // 'use strict'
//     a=100
//     b=200
//     return args[0], args[1]
//     console.log(a+b)
// }
// console.log(abc(300,400))

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr = arr.find((num)=>num>4);
console.log(newArr)
// 3, 4, 5, 7