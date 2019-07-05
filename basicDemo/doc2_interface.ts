/* interface 接口 */
interface Person {
  firstName: string
  lastName: string
}

function greeter(preson: Person){
  return 'Hello, ' + preson.firstName + ' ' + preson.lastName
}

let user = {
  firstName: 'Admin',
  lastName: 'Michael',
  label: 'level1', // 属性可以多，只要包含接口中的属性就行
}
console.log(greeter(user))

// 可选属性
interface SquareConfig {
  color?: string // 可选属性是传入时非必传的属性
  width?: number
}

/**
 * 只读属性
 * 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
 * 做为变量使用的话用 const，若做为属性则使用readonly。
 */

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = {x: 10, y: 20}
p1.x = 30 // ERROR 只读属性不可修改

/** 
 * 额外的属性检查，在可选属性里传入额外属性会报错，解决报错可以用类型断言或者变量赋值
*/
interface Box {
  size?: number
  color?: string
}

function log(a: Box): {size: number, color: string}{
  return {size: a.size, color: a.color}
}

log({size: 10, material: 'paper'}) // ERROR
log({size: 10, material: 'paper'} as Box) // OK

const obj = {size: 10, material: 'paper'}
log(obj) // OK

/** 
 * 函数类型接口
*/
// 定义输入、输入的函数模板
interface SearchFunc {
  (source: string, subString: string): boolean
}



