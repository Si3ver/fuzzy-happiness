// // 属性的装饰器

// function nameDecorator(target: any, key: string): any {
//   console.log(target, key)
//   target[key] = 'alwyn'
//   // const descriptor: PropertyDescriptor = {
//   //   writable: false
//   // }
//   // return descriptor
// }

// class Test {
//   @nameDecorator
//   name = 'william'
// }

// const test = new Test()
// test.name = '12312312311'
// console.log(test.name, (test as any).__proto__.name)
