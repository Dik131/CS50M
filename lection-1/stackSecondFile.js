let addOne = (num) => {
  throw new Error('oh no!');
}

getNum = () => {
  return addOne(10)
}

c = () => {
  console.log(getNum() + getNum())
}

c()
