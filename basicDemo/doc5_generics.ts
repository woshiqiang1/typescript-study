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
function loggingIdentity<T>(arg:Array<T>): Array<T> {
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

//泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity6<T>(arg: T): T {
  return arg;
}

let myIdentity2: GenericIdentityFn = identity6;


// react中泛型使用
class App extends React.Component<Props, State> {
  readonly state = {} as State // 类型断言 
}

