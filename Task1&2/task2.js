// Given a string S of length N, write a Java function that transforms the string by reversing characters in
// groups of four, and returns the transformed string.
// e.g. when S = 'Lorem at' the output should be 'eroLta m'
// when S = ' Tempor ip' the output should be 'meT roppi'

// function transformedString(str) {
//     str = str.split('') 
//     let length = str.length,
//         n = Math.floor(length / 2),
//         tmp;
        
//         for(let i = 1; i <= n; i++) {
//             tmp = str[length];
//             str[length] = str[1];
//             str[i] = tmp;
//         }
//         return str.join('')
// }

// console.log(transformedString('shawn men'))

var str = 'Lorem at';
var strLength = str.length;

let x = console.log(str.substring(0 , (strLength / 2));
 let y = console.log(str.substring(strLength/2));

 

// const reverseString = (str) => {
//     let strLength = str.length;
//     return str.split('').reverse().join('');
// };

// console.log(reverseString('Lorem at!'));
