// // 普通方法，target 对应的是类的 prototype
// // 静态方法，target 对应的是类的构造函数

// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   console.log(target, key)
//   descriptor.value = function () {  // 可以用来劫持属性装饰器
//     return 'abc'
//   }
// }

// class Test {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   @getNameDecorator
//   getName() {
//     return this.name
//   }
// }

// const test = new Test('william')
// console.log(test.getName())
