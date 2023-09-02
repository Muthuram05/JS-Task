const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

const task1 = numbers.reduce((accumulator, currentValue, index) => {
  const data = parseInt(accumulator + currentValue);
  return data;
});
console.log(task1);
console.log([task1]);
console.log(String(task1))
console.log({task1})

const task2 = numbers.reduce((accumulator, currentValue) => {
  let [first,second]=accumulator;
  // const targetArrayIndex = currentValue <= 5 ? 0 : 1; 
  if(currentValue<=5){
    first.push(currentValue)
  }else{
    second.push(currentValue)

  }
  // accumulator[targetArrayIndex].push(currentValue);
  return accumulator;
}, [[], []]);


console.log(task2); 

const duplicateArray = [...numbers,1,2,3,4,5,6,7,8,0,1,7,11];

const task3 = duplicateArray.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue] === undefined) {
    accumulator[currentValue] = 1;
  } else {
    accumulator[currentValue]++;
  }
  return accumulator;
}, {});

console.log(task3); 

const values = [4,2]
const reduceMethod = values.reduce(
  (accumulator, currentValue, index, array) => accumulator / currentValue,
);

const reduceRightMethod = values.reduceRight(
  (accumulator, currentValue, index, array) => accumulator / currentValue,
);
console.log(reduceMethod,reduceRightMethod)


