
function testDecorator() {
  return function<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'alwyn'
      getName() {
        console.log(this.name)
      }
    }
  }
}

// @testDecorator
// class Test {
//   name: string
//   constructor(name: string) {
//     console.log(1)
//     this.name = name
//     console.log(2)
//   }
// }

const Test = testDecorator()(
  class {
    name: string
    constructor(name: string) {
      this.name = name
    }
  }
)

const test = new Test('william')
console.log(test)
test.getName()