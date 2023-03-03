1. What is TypeScript and why use it?
TypeScript is a statically typed object-oriented programming language that adds features such as selectively static typing to JavaScript. Developed and maintained by Microsoft.

TypeScript makes your code more serviceable and extensible and provides better tool and editor support.

2. What are the main features of TypeScript?
Key features of TypeScript include:

Static typing
Interfaces
Classes and inheritance
Modules
Namespaces
Decorators
Generics
Async/await
3. How is TypeScript different from JavaScript?
TypeScript is a superset of JavaScript, meaning that all valid JavaScript code is also valid TypeScript code. However, TypeScript adds features that JavaScript doesn’t have, such as static typing and class-based object-oriented programming.

TypeScript also has a stricter type system, allowing errors to be detected at compile time rather than runtime.

4. How does TypeScript integrate with other tools and libraries?
TypeScript can be used with popular front-end frameworks like Angular and React, and a variety of tools and libraries like Node.js for server-side development.

TypeScript code can be compiled into plain JavaScript, making it compatible with any environment that supports JavaScript.

Become an Expert in Typescript: Learn How to Answer Any TypeScript Interview Question with Depth Explanation.

5. How does TypeScript perform type checking?
Typescript uses a type system to perform type checking at compile time. This can improve the reliability and serviceability of your code by allowing errors to be detected before the code runs.

TypeScript’s type system is optional, so developers can use it however they like.

6. What is the TypeScript interface?
TypeScript interfaces define contracts that specify the appearance of objects. It is used to enforce certain constructs on an object or to guarantee that an object implements certain properties or methods.

Interfaces can be used to make code reusable and compact or to make code more readable by making the intent of the code clearer.

7. What are TypeScript classes? How are they different from JavaScript classes?
TypeScript classes provide a way to create objects with specific properties and methods. They are similar to classes in other object-oriented programming languages and provide a way to write reusable and modular code.

Classes in TypeScript are syntactic sugars over JavaScript’s prototypes and are translated into JavaScript’s constructor functions.

Typescript Interview Questions For Freshers

8. How do you define a class in TypeScript?
A class in TypeScript can be defined using the class keyword, followed by the name of the class. Properties and methods can be added to the class using the constructor method and public or private keywords.

Here is an example:

class Person {
  constructor(public name: string) {}  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
9. What are TypeScript modules and why use them?
TypeScript modules provide a way to organize and reuse code by encapsulating it into different files. Modules can be exported and imported into other files, making it easier to reuse code across multiple files and projects. Modules also help avoid naming conflicts and improve the serviceability and extensibility of your code.

10. How do you define and import/export modules in TypeScript?
Modules in TypeScript can be defined using the export keyword before the declaration of a class, function, or variable. These exports can then be imported in another file using the import keyword, along with the path to the file containing the exports.

Here is an example:

// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './math';

console.log(add(1, 2)); // 3
11. What are TypeScript namespaces? How is it different from modules?
TypeScript namespaces provide a way to organize your code in a similar way to modules, but with a slightly different syntax.

Namespaces allow code to be grouped under common names, thus avoiding name conflicts. However, in TypeScript, namespaces are not as commonly used as modules.

Because modules provide more functionality and are suitable for large projects.

12. How do you define and use namespaces in TypeScript?
TypeScript namespaces can be defined using the namespace keyword followed by the namespace name.

You can add code to namespaces using declaration keywords.

Below is an example.

namespace MyApp {
  export function doSomething() {
    console.log('Doing something');
  }
}

MyApp.doSomething(); // Doing something
13. What is a TypeScript Decorator?
TypeScript decorators are a way to add additional behavior to a class, method, or property.

Decorators are implemented as functions and can be applied using the @ symbol.

Decorators can be used for things like adding metadata to a class or method or adding functionality.

Typescript Interview Questions For 5 Years Experience

14. How to create and use decorators with TypeScript?
TypeScript decorators are created using functions that return desired behavior.

Then, the decorator can be applied by describing the @ symbol before the declaration of the class, method, or property to which the decorator is applied.

Here is an example.

function Logger(target: any, propertyKey: string) {
  console.log(`Calling ${propertyKey}`);
}

class MyClass {
  @Logger
  greet() {
    console.log('Hello');
  }
}

const instance = new MyClass();
instance.greet(); // Calling greet \n Hello
15. What are generics in TypeScript and how are they used?
Generics in TypeScript provides a way to write reusable and flexible code by writing functions, classes, and interfaces that can handle different types.

Generics can be used to achieve type safety and improve the readability and maintainability of code.

16. How are generics defined and used in TypeScript?
Generics in TypeScript are defined using square brackets <> in function, class, and interface declarations with placeholders for types. And the shape can be specified when a function, class, or interface is used.

Here is an example.

function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>('Hello');
console.log(result); // Hello
17. What is the difference between TypeScript let and const?
TypeScript let and const are used for variable declarations. The key difference between let and const is that let can reassign variables whereas const cannot.

A variable declared const cannot change its value after it is initially assigned.

18. What is the difference between var and let in TypeScript?
TypeScript’s var and let are used to declare variables, but they have different scoping rules. A variable declared with var has function scope and can only be accessed within the function in which it is declared.

Variables declared with let have block scope and can only be accessed within the block in which they are declared.

It is generally recommended to use let instead of var in TypeScript.

Typescript Interview Questions Advanced

19. When is TypeScript any type used?
TypeScript any type is used to indicate that a variable, function, or parameter can hold a value of any type.

Any type is useful when dealing with external libraries or code not written in TypeScript, or when it is necessary to disable type-checking for specific variables.

However, it’s generally a good idea to use more specific types whenever possible. This is because using any will likely diminish the benefits of using TypeScript’s type system.

20. What is TypeScript’s unknown type, and when do you use it?
TypeScript’s unknown type is used to indicate that a variable, function, or parameter can hold a value of any type, but that type checking is required before use.

The unknown type has more restrictions than any and is effective when it is necessary to check the value reliably before using it.

21. What is the difference between null and undefined in TypeScript?
In TypeScript, null and undefined are used to indicate the absence or unknown of a value.

The key difference between null and undefined is that undefined is the default value for a variable that is declared but not assigned a value, whereas null is explicitly assigned to indicate no value.

22. What is TypeScript’s void type, and when is it used?
TypeScript’s void type is used to indicate that a function does not return a value. The void type is useful for defining functions that perform some action but do not return a value.

JavaScript Interview Practice Tests

23. What is TypeScript’s never type, and when to use it?
TypeScript’s never type is used to indicate that a value or function will never be reached. The never type can be used to indicate that a function throws an error or that a variable has no value.

24. How do you use async/await in TypeScript?
async/await in TypeScript is used to write asynchronous code that is easy to read and maintain. async functions return a promise, and

the await keyword can be used to wait for the resolution of the promise before continuing with the execution of the code. This allows for asynchronous code to be written in a way that is similar to synchronous code, making it easier to understand and maintain.

Here is an example:

async function fetchData(): Promise<string> {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  return data;
}

fetchData().then(data => {
  console.log(data);
});
25. How does TypeScript support type inference?
TypeScript supports type inference, which means that it can automatically determine the types of variables and expressions based on the values assigned to them. This can simplify the code and reduce the number of explicit type annotations that are required. For example, in the following code, TypeScript will infer that the type of x is number:

let x = 1;
Type inference can also be used in function return types and in generic types, making it a powerful tool for writing concise and maintainable TypeScript code.