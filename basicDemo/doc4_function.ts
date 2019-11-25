/**
 * 函数类型
 */
// 为函数定义类型
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

// 定义函数类型时使用...
function buildName4(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ')
} 
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName4 

/**
 * this
 * 函数调用的方式
 * 1. 普通的函数调用
 * 2. 作为Objec的属性调用
 * 3. 作为实例的方法
 * 4. DOM事件的回调
 * 其他：箭头函数的this
 */

 /**
  * 重载
  */