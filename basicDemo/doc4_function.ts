/**
 * 为函数定义类型
 */
function add(x: number, y: number): number {
  return x + y
}

// 完整书写函数类型
let myAdd: (x: number, y: number) => number = function(a: number, b: number): number {
  return a + b
} 

// 推断类型
let myAdd2 = function(x: number, y: number): number{
  return x + y
}
let myAdd3: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y
} 

/**
 * 可选参数、默认参数
 */
// 可选参数要放在必选参数的后面
function buildName(firstName: string, lastName?: string) {
  if(lastName){
    return firstName + ' ' + lastName
  }
  else{
    return firstName
  }
}
// 有默认参数的参数都是可选的，并且不需要放在必选参数的后面
function buildName2(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName
}

/**
 * 剩余参数(rest)
 */
function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
}

let name3 = buildName3('Joseph', 'Samuel', 'Lucas', 'Mackinzie')
