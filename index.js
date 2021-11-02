//  !! arrays

const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

// ? find the length
let lengthOfArray = salad.length
console.log(lengthOfArray);   //!7

// =================================

// ? get any element using the index
console.log(salad[0]) // 🍅
console.log(salad[3]) // 🥒
console.log(salad[9]) // undefined 
console.log(salad[lengthOfArray - 2]) //🥕


// ? add and remove form array using the methods [pop, push, shift, unshift]
console.log(salad.pop())  // return the element that we remove 
console.log(salad.push('🥦'))  // return the new length of the array 






const numbers = [1, 3, 2, 5, 6, 3, 2, 5]

// ============= access and check ============

// ? indexOf -> return the index of an ele

console.log(numbers.indexOf(5))

// ? includes() -> check if the ele is exists in the array

console.log(numbers.includes('2'))

// ? reverse

console.log(numbers.reverse())

// --------------------- !! -----------------

// ? forEach -> Calls function fn for each element in the array

// ! syntax 

array.forEach(function(value, index, array){
  // block of code
})
// @ vale => required 
// @ index => optional
// @ array => optional

numbers.forEach(function(val, idx){
  console.log(`this ${idx} : ${val}`);
})

// ? map -> Create a new array with results of calling function fn on every element in array

let arrayOfNewEle = numbers.map(function(val, index){
  return val * 2
})
console.log(arrayOfNewEle);

// ----------

let newArray = numbers.map(function(val, index){
  return {key: index, value: val *2}
})
console.log(newArray)


// ? filter  ->  Create a new array with all elements of array which pass the filtering function 

let newArrayFilter = numbers.filter(function(value){
  // return value % 2 == 0
  if(value > 3 ) return value

})
console.log(newArrayFilter);
