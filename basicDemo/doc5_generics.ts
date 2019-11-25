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

// react中泛型使用
class App extends React.Component<Props, State> {
  readonly state = {} as State // 类型断言 
}