/**
 * Type Compatibility(类型兼容性)
 */
// in nominally-typed(名词类型划分) language like C# or Java, the code blew would be error
// because the Person2 class dose not itself as an implementer of Named interfase.
// Because JavaScript widely uses anonymous objects like function expressions and object literals, 
// it’s much more natural to represent the kinds of relationships found in JavaScript libraries with a structural type（结构类型化分） system. 
interface Named {
  name: string
}

class Person2 {
  name: string
}

let p: Named 
p = new Person2() 

// A Note on Soundness(稳固)
// TypeScript’s type system allows certain operations that can’t be known at compile-time to be safe. 
// The places where TypeScript allows unsound behavior were carefully considered, 
// and throughout this document we’ll explain where these happen and the motivating scenarios behind them.
