/**
 * 类
 */
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'hello' + this.greeting
  }
}

let greeter2 = new Greeter('world')

/**
 * 继承
 */
class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')
let tom: Animal = new Horse('Tommy the Palomino')

sam.move()
tom.move(35)

/**
 * 共有、私有与受保护修饰符
 * TS默认属性、方法为public
 */
// public
class Animal2 {
  public name: string
  public constructor(theName: string) {
    this.name = theName
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
// private
class Animal3 {
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

new Animal3('Cat').name // ERROR，'name'为私有属性，只能在Animal3里面访问

// protected protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
// constructor被标记为protected时则该类不能被实例化，但是可以被继承
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
console.log(howard.name) // ERROR

/**
 * readonly
 */
class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8
  constructor (theName: string) {
    this.name = theName
  }
}

let dad = new Octopus('Man with the 8 strong legs')
dad.name = 'new-name' // ERROR 

class Octopus2 {
  readonly numberOfLegs: number = 8
  // 声明和赋值在同一步，可以省略'theName'
  constructor(readonly name: string) {

  }
}

/**
 * get、set 存取器
 */
const password = 'secret passcode'
class Employee2 {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if(password && password === 'secret passcode'){
      this._fullName = newName
    }
    else{
      console.log('Error password')
    }
  }
}

/**
 * static 只存在于类本身上面而不是类的实例上的属性和方法
 */
class Grid {
  static origin = {x: 0, y: 0}
  constructor(public scale: number) {}
  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist^2 + yDist^2)
  }
}

let grid1 = new Grid(1.0)
console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}))

/**
 * 抽象类
 * 作为其他派生类的基类使用，一般不可以直接实例化，与接口不同的是抽象类可以包含成员的实现细节
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 只定义方法签名但不包含方法体。 
 * 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
 */
abstract class Animal4 {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earch...')
  }
}

class Dog extends Animal4 {
  makeSound(): void {
    console.log('wang wang wang...')
  }

  eat(): void {
    console.log('eating bone')
  }
}


let doggy: Animal4 = new Dog()
doggy.makeSound()
doggy.eat() // ERROR Animal4中没有eat方法  

/**
 * 高级技巧
 */
class Greeter2 {
  static standardGreeting = 'hello, there'
  greeting: string
  greet() {
    if(this.greeting){
      return 'hello, ' + this.greeting
    }
    else{
      return Greeter2.standardGreeting
    }
  }
}

let greeterMaker: typeof Greeter2
greeterMaker =  Greeter2
greeterMaker.standardGreeting = 'hey there!'
let greeter_2: Greeter2  = new greeterMaker()
console.log(greeter_2.greet()) 