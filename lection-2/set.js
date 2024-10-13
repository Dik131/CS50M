let print = (somethingToShow) => console.log(somethingToShow)

class Set {
  constructor(arr) {
    this.arr = arr
  }
  has(val) {
    return this.arr.includes(val)
  }
  add(val) {
    if (!this.has(val)) this.arr.push(val)
  }
  delete(val) {
    this.arr = this.arr.filter((x) => x !== val)
  }
  get size() {
    return this.arr.length
  }
}

const s = new Set([1, 2, 3, 4, 5])

s.add(6)

print(s.size)

print(s.has(7))
