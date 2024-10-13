map = (arr, fn) => {
  const newArr = [];

  arr.forEach(val => {
    newArr.push(fn(val));
  })

  // for (let i = 0; i < arr.length; i++) {
  //   let val = arr[i];
  //   newArr.push(fn(val));
  // }
  return newArr;
};

addOne = num => {
  return ++num;
}

const x = [0, 1, 2, 3];

console.log(map(x, addOne));