// doSomething = (callback) => {
//   callback(1)
// }

// doSomething(console.log)

doSomethingAsync = (callback) => {
  setTimeout(() => callback(1), 0) 
}

doSomethingAsync(console.log)