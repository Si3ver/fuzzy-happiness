/**
 * 泛型类
 * 
 * 泛型继承接口
 */

interface Item {
  name: string
}

class DataManager<T extends Item> {
  constructor (private data: T[]) {}

  getItem(index: number): string {
    return this.data[index].name
  }
}

// const dm1 = new DataManager(['1'])
const dm2 = new DataManager([{name: 'zhao'}, {name: 'qian', age: 12 }])
// console.log(dm1, dm2)
// console.log(dm1.getItem(0), dm1.getItem(1))
console.log(dm2.getItem(0), dm2.getItem(1))

