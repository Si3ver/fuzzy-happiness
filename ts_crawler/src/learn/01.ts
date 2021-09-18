/**
 * 联合类型 ｜
 * 类型保护的方式
 * 1. 类型断言 （as）
 * 2. 存在性判断 （in）
 * 3. typeof
 * 4. instanceof （这种方式只能用于参数的数据类型是class定义的，不能用于接口）
 */

interface Bird {
  fly: boolean
  sing: () => {}
}

interface Dog {
  fly: boolean
  bark: () => {}
}

function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing() // 类型断言
  } else {
    (animal as Dog).bark()
  }
}

function trainAnimalSecond(animal: Bird | Dog) {
  if ('sing' in animal) { // in
    animal.sing()
  } else {
    animal.bark()
  }
}

function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') { // typeof 
    return `${first} + ${second}`
  }
  return first + second
}

class NumberObj {
  count!: number
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}
