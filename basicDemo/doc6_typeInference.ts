/**
 * 类型推断(Type Inference)
 * where and how types are inferred
 */
// Basics
// initializing variables and menmbers, setting parameter default values, determining function return types 
let x1 = 3 // inferred to be number

// Best common type
let x2 = [0, 1, null]; // inferred to be (number | null)[]

let zoo = [new Rhino(), new Elephant(), new Snake()] //  because there is no object that is strictly of type Animal, it won't be inferred to Animal[] but (Rhino | Elephant | Snake)[]

let zoo2: Animal[] = [new Rhino(), new Elephant(), new Snake()]  

/**
 * 上下文类型推断(Contextual Typing)
 * Contextual typing occurs when the type of an expression is implied by its location
 */
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button) // infer the mouseEvent parameter has buttton property
  console.log(mouseEvent.kangaroo) // error, mouseEvent dosen't have kangaroo property
}

// function is being assigned to Window.onscroll, Typescript knows that uiEvent is a UIEvent, 
// UIEvent objects contain no button property, and so Typescript will throw an error.
window.onscroll = function(uiEvent) {
  console.log(uiEvent.button) // error, uiEvent dosen't have button property
}

// give type information to override any contextual type
window.onscroll = function(uiEvent: any) {
  console.log(uiEvent.button) // no error is given
}

// Contextual typing use case: 
// 1. arguments to function calls; 
// 2. right hand sides of assignments; 
// 3. type assertions(类型断言); 
// 4. member of object and array literals(字面量)
// 5. return statements