/**
 * 枚举类型
 */

enum STATUS {
  OFFLINE,
  ONLINE = 4,
  DELETED,
}

console.log(STATUS)

// {
//   '0': 'OFFLINE',
//   '4': 'ONLINE',
//   '5': 'DELETED',
//   OFFLINE: 0,
//   ONLINE: 4,
//   DELETED: 5
// }

console.log(STATUS.ONLINE) // 4
console.log(STATUS[2]) // undefined
console.log(STATUS[4]) // ONLINE
