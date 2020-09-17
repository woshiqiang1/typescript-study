/**
 * 介绍
 * 使用泛型来创建可重用组件，一个组件可以支持多种类型的数据。
 */
 // 简单的泛型使用 hello world
 // 不使用泛型，给定类型，不支持其他类型
 function identity(arg: number): number {
   return arg;
 }
// 使用any，不知道入参和return value的类型关系
 function identity2(arg: any): any {
   return arg;
 }
// 使用类型变量，只表示类型而不是值
function identity3<T>(arg: T): T {
  return arg;
}
let output = identity3<string>('apple') // 使用<>明确传入类型
let output2 = identity3('apple') // 省略<> 类型推论会推论 output2 为string类型


/**
 * 使用泛型变量
 * 泛型函数loggingIdentity，接收类型参数T和参数arg，它的入参是个元素类型是T的数组，并返回元素类型是T的数组。
 */
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg

}
function loggingIdentity2<T>(arg:Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

/**
 * 泛型类型
 */
function identity5<T>(arg: T): T {
  return arg
}
let myIdentity: <U>(arg: U) => U = identity5 //可以使用不同的类型参数名，它只是个形参

// 带有调用签名的对象字面量定义泛型函数
function identity6<T>(arg: T): T {
  return arg
}
let myIdentity2 :{<T>(arg: T): T} = identity6 

// 泛型接口, 把泛型参数放在调用签名里
interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identity7<T>(arg: T): T {
  return arg;
}
let myIdentity3: GenericIdentityFn = identity6;

// 泛型接口，把泛型参数当做接口的参数，指定具体使用的类型
interface GenericIdentityFn2<T> {
  (arg: T): T
}
function identity8<T>(arg: T): T {
  return arg
}
let myIdentity4: GenericIdentityFn2<number> = identity8

/**
 * 泛型类(Generic Class)
 */
// 泛型类从形式上与泛型接口差不多，使用<>括起泛型类型，跟在类名后面
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>() // 传入泛型实参为 number
myGenericNumber.zeroValue = 1
myGenericNumber.add = function(x, y) {return x + y}

// react中泛型类使用
class App extends React.Component<Props, State> {
  readonly state = {} as State // 类型断言 
}

/**
 * 泛型约束(Generic Constraints)
 */
// 你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 
// 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。
// 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许。 为此，我们需要列出对于T的约束要求。
// 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：
interface Lengthwise {
  length: number
}
function loggingIdentity3<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
loggingIdentity3(3) // error，number没有length属性
loggingIdentity3({length: 1, value: 3})

// Use Type Parameters in Generic Constraints
// eg: 从对象上获取一个属性，我们需要保证传入的属性是对象上有的，需要加入如下约束
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4}
getProperty(x, 'a')
getProperty(x, 'e') // error: Argument of type 'e' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Use Class Type in Generics(Class类型)
// 入参是一个构造函数
function create<T>(c: {new(): T }): T {
  return new c()
}
