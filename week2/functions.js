const arr = [1, 2, 3, 4, 5];

// map function
const newArr = arr.map((element) => {
  return element * 2;
});

// console.log("map: " + newArr);

// myMapFunction implementation
const myMapFunction = (arr, fn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};

const a = myMapFunction(arr, (e) => {
  return e * 2;
});

// console.log("My map function: " + a);

// filter function
const even = arr.filter((element) => {
  return element % 2 === 0;
});

// console.log(even);
