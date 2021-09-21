/**
 * 泛型 Generic
 * 
 * 泛型函数
 */

function join<T>(first: T, second: T) {
  return `${first}${second}`
}


join(1, 2)
join('3', '1')
join(true, false)


join<number>(1, 2)
join<string>('3', '1')
join<boolean>(true, false)


// join(1, '1') // 报错


function joinAnother<T, P>(first: T, second: P): T {
  return first
}

joinAnother(true, 123)
