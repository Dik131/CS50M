recurse = () => {
  console.log('recurse')
  return recurse()
}

recurse()