// // 访问器的装饰器

// function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   console.log(target, key, descriptor)
//   // descriptor.writable = false
// }

// class Test {
//   private _name: string
//   constructor(name: string) {
//     this._name = name
//   }
//   get name() {
//     return this._name
//   }
//   @visitDecorator
//   set name(name: string) {
//     this._name = name
//   }
// }

// const test = new Test('william')
// test.name = '12312312311'
// console.log(test.name)
