
const getNthElement = (index, array) => {
  return array[index%array.length];
};

const arrayToCSVString = array => array.join();
  //let newArray = '';
  //for (let i = 0; i<array.length; i++){
   // newArray += array[i];
   // if (i<(array.length -1)){
  //    newArray += ",";
   // }
//}
  //return newArray;
  
;

const csvStringToArray = string => string.split(',');
 // let array = string.split('');
 // const newArray = array.filter(element => element !== ",");
 // console.log(newArray);
 // return newArray;


const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let newArray = array.concat(element);
  return newArray;
}

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i].toString();
  }
  return numbers;
};

const uppercaseWordsInArray = strings => {
  //for (let i = 0; i <strings.length; i++) {
   // strings[i] = strings[i].toUpperCase();
  //}
  //return strings;
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
//  let reverseArray =[];
//  for (i = 0; i < strings.length; i++) {
//    let reverseString = '';
//    let word = strings[i];
//    for (j = word.length - 1; j >= 0; j--) {
//       reverseString += word[j];
 //   }
//    reverseArray.push(reverseString);
//  }
//  return reverseArray;
  return strings.map(string => string.split('').reverse().join(''))
};

const onlyEven = numbers => numbers.filter(number => number % 2 === 0)
  //console.log(numbers);
  //let newArray=[];
  //for (let i = 0; i < numbers.length; i++) {
   // if (numbers[i]%2 === 0) {
   //   newArray.push(numbers[i]);
   // };
  //}
  //console.log(newArray);
  //return newArray;
;

const removeNthElement2 = (index, array) => {
  //let newArray = [];
  //for (let i =0; i<array.length; i++) {
   // if(i !== index) {
   //   newArray.push(array[i]);
  //  }
 // } 
  //return newArray;
};

const elementsStartingWithAVowel = strings => {
  //let newArray = [];
  //for (let i = 0; i< strings.length; i++) {
   // let x = strings[i].toLowerCase();
    //if (x.startsWith('a') || (x.startsWith('e')) || (x.startsWith('i')) ||
    // (x.startsWith('o')) || (x.startsWith('u'))) {
    //   newArray.push(strings[i]);
   //  }
     
 //};
  //return newArray;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter(word => {
    const firstLetter = word[0].toLowerCase();
    return vowels.includes(firstLetter);
  });
};


const removeSpaces = string => string.split(' ').join('');
  //let newString = '';
  //for (let i = 0; i <string.length; i++){
   // if (string[i] !== ' '){
   //   newString += (string[i]);
   // };
  //}
  //return newString;
;

const sumNumbers = numbers => numbers.reduce((total, number) => {
  return total + number
}, 0)
  //let total = 0;
  //for (i=0; i< numbers.length; i++) {
  //  total += numbers[i];
  //}
  //return total;
;

const sortByLastLetter = strings => {
    //strings.sort (function (a, b) {
    //  if (a[a.length -1] < b[b.length -1]){
     // return -1;
     // }
     // if (a[a.length -1] > b[b.length -1]){
     // return 1;
     // }
    //});
    //console.log(strings);
    //return strings;
    const reverseString = (item) => item.split('').reverse().join('');
    return strings.map(reverseString).sort().map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};