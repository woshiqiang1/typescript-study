/**
 * 基本类型
 */
let decLiteral: number = 10
let fristName: string = 'bob'
let isDone: boolean = false

/* 数组 Array*/
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
let list3: any[] = [1, 'a', true]
let list4: ReadonlyArray<number> = [1, 2, 3] // 只读数组，去掉了Array上会改变原数组的方法

/* 元组 Tuple */
let x: [string, number]
x = ['good', 123] // OK
x = [123, 'bad'] // ERROR
x = ['abc', 123, 456] // ERROR

/* 枚举类型 enum */
enum Color {red, green, blue}
let c: Color = Color.blue

enum Color {red = 1, Green = 2, blue = 4}
let colorName: string = Color[2]

//Any 来自不缺定的地方才用，任意的类型
let notSure: any = 'some place import'

//Void 表示没有类型，一般函数无返回值时使用，声明void类型变量，只能赋值为undefind或者null
function warn(): void {
  console.log('This function has no return')
}

//Null和Undefined null、undefind默认是所有类型的子类型 除非开启 --strictNullChecks，就只能赋值给各自的类型和void类型
let u: undefined = undefined
let n: null = null

//Never 表示永不存在的值的类型，例如一定抛出异常的函数、无限循环的函数等
function error(message: string): never{
  throw new Error(message)
}

// Object 表示js引用类型
declare function create(o: object | null): void
create({ key: 1}) // OK
create(null) // OK

create(12) // ERROR
create('banana') // ERROR
create(true) // ERROR

// 类型断言 告诉编辑器我知道类型，不用检查
let someValue: any = 'hello'
let strLength: number = (<string>someValue).length

let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length

// 解构
// 如果要指定结构对象里value的类型要另外加{}
let {a, b}: {a: string, b: number} = {a: '123', b: 123}

// 展开 对象展开仅包含对象的可枚举属性
class C {
  p = 12
  m(){}
}

let c = new C
let clone = { ...c }
clone.p // OK
clone.m() // ERROR







