   //Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
// function sorting (){
//     const words = ['Hello','Also','Adal','Jayden','Happy'];
//     console.log(words.sort());
//     console.log(words.reverse());
// }
// sorting()

function reverseStringInArray(arr){
  let sortedArray = arr.sort();
  let descending = sortedArray.reverse()
  console.log(descending)

  const reversedStrings = descending.map(str => [...str].reverse().join(''));
 console.log(reversedStrings);
}

reverseStringInArray(['Hello','Also','Adal','Jayden','Happy']);

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

// function confirmElements(array,index){
//   const number = array[index];
//   if(number>0){
//     return number + "is positive";
//   }
//   else if(number <0){
//     return number + "is negative";
//   }
//   else{
//     return number + "is zero";
//   }
// }
// const numbers =[1,-2,7,8,-5,-3,0,4];
// console.log(confirmElements(numbers,2));


function numbers(arr1){
  let arr=arr1.forEach(item=>{
      if(item>0){
          console.log("positive");
          return "positive"
      }else if(item<0){
           console.log("Negative");
          return "negative"
      }else{
           console.log("Zero");
          return "zero"
      }
  })
}
numbers([3,6,4,-2,6,-8,0,-5,7]);


//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortedBySalary(employees){
  return employees.sort((a,b) => a.salary -b.salary);
 }
 const employees = [
  {id: 1,name: 'Joy',salary:3000 },
  {id: 2,name: 'Nay', salary: 2000},
  {id: 3,name: 'Christine',salary:3500}
 ]
 const sortedEmployees = sortedBySalary(employees);
 console.log(sortedEmployees)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiply([5, 6, 4, ]);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function newArray(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item + 5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   newArray([50, 60, 70, 80, 30, 40]);

 