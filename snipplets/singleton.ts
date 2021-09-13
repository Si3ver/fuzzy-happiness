/** ts 实现单例模式 */
class Singleleton {
  private constructor(private name: string) {}

  private static instance: Singleleton

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleleton('alwyn')
    }
    return this.instance
    
  }
}

const s1 = Singleleton.getInstance()
const s2 = Singleleton.getInstance()
console.log(s1,s2)
console.log(s1 === s2)
