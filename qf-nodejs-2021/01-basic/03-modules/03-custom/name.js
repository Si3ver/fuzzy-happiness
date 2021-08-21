const name = {
  surname: 'zhou',
  sayName() {
    console.log(this.surname)
  }
}

const age = {
  age: 100
}

// exports.name = name
// exports.age = age

module.exports = {
  name,
  age
}
