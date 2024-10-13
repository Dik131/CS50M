let print = (somethingToShow) => console.log(somethingToShow)

class MySet extends Set {
  constructor(arr) {
    super(arr)
    this.originalArray = arr
  }
  add(val) {
    super.add(val)
    print(`added ${val} to the set!`)
  }
  array() {
    return Array.from(this)
  }
  reset() {
    return new MySet(this.originalArray)
  }
}
