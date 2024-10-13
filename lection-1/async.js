printOne = () => {
  console.log('one');
}

printTwo = () => {
  console.log('two');
}

printThree = () => {
  console.log('three');
}

setTimeout(() => printOne(), 1000); // printOne();
setTimeout(() => printTwo(), 0); // printTwo();
printThree();