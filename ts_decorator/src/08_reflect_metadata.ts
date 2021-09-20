import 'reflect-metadata'

// const user = {
//   name: 'william'
// }

// Reflect.defineMetadata('data', 'test', user)

// console.log(user)
// console.log(Reflect.getMetadata('data', user))

@Reflect.metadata('data', 'test')
class User {
  name = 'dell'
}

console.log(Reflect.getMetadata('data', User))


