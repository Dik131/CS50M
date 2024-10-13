
a = () => {
  console.log('Hei')
}

b = () => {
  a()
}

c = () => {
  b()
}

c()