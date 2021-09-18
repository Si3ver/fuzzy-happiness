interface Person {
  name: string
  age: number
  gender: string
}
class Teacher {
  constructor(private info: Person) {}
  getInfo(key: keyof Person) {
    return this.info[key]
  }
}

const teacher = new Teacher({
  name: 'william',
  age: 27,
  gender: 'male'
})

const ret = teacher.getInfo('age')
console.log(ret)
