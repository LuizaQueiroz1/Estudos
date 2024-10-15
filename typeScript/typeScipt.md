# Learning typescript

## The Basis

TypeScript é uma linguagem orientada a objetos, com forte tipagem e compilador.

Mais pontos importantes a serem mencionados:

- É open Source e desenvolvimento aberto ;
- segue os padrões do ECMAscript;
- Possui tipagem estática e inovadora;
- Manutenção continua(por novas features)
- Desenvolvido e mantido pela comunidade técnica

## Why TypeScript?

    - Add confiability to program(types)
    - Gives new functionalities to JS, as interfaces.
    - With TS, we can verify error before running the code, ou seja, on the environment.
    - Let JS more explicit, increasing the bungs.

- Syntax

  Typescript is a language that is superset of JavaScript, meaning that it add rules about how different kinds of values can be used.

- RUntime Behavior

  TypeScript is also a language that preserve the runtime behavior of javaSCript, it means that typeScript never changes the runtime behavior of JavaScript code

- erases type

  Once TYpeScript compiler is done checking your code, it erases types to produce the resulting "compiled" code. It means that once your code is compiled, the resulting plain JS code has no type information.
  That also means that never changes the behavior of your program based on the types in inferred(inferido). Finally, typeScript doesn't provide any additional runtime libraries.

## JS vs TS

The truth is that I can learn typeScript without knowing javaScript, but I cannot forget that are more resources available about javaScript.

**TypeScript is a JavaSCript runtime with a compile-time type checker**.

### Static Type checker

A type is a the concept of accepting which values can be passed to a constant, variable, or a function and which will crash. JavaScript only provides dynamic typing - running the code to se what happens.

The alternative is to use a static type system to make predictions about what what the code is expected to do before it run. Static type systems describes the shapes and behavior of what our values will be when we run our programs.

### TSC, the typeScript compiler(it's the type-checker)

npm install -g typeScript (to add globally, but there is a way to install in a single project at a time with => (npm install typeScript))

[npx tsc -w] is used to start using the compiler to check the code

In the cases I want to be a little more defensive about mistakes, and make typeScript act a bit more strictly, I can run
[npx tsc -w --noEmitOnError] compiler option.

### Explicit Types

Exemplo:

```js
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is a ${date.toDateString()}!`);
}
```

Just added type annotations on person and date to describe what type of values greets can be called with.

But I need to keep in mind that I don't need ever describe what type o values the variable has, because the typeScript interprets with the type inferation

### Erased Types

When we compile the typeScript code bellow, the js code linked erases the type annotations passed to variables

```js
function greet(person:, date:) {
  console.log("Hello ".concat(person, "today is ").concat(date.toDateString(), "!") );
}
```

REMEMBER: type annotations never change the runtime behavior of my program

### Downleveling

In the code example above, we can see that the template string was changed as the type notation. Why's that? that happens due the fact that when we run te compiler, the has the hability to rewrite the newer versions of ECMAscripts to the old ones. This processing from moving from a newer or "higher" version of ECMAscript to an older or "lower" one is sometimes called Downleveling.
By default, typeScript target ES3, an extremely old version of ECMAscript.

To run the code in a more recent version of TypeScript, I show run
npx tsc -w es[version year].

### Strictness

The key of TypeScript is to use the more type notions as possible to validade as much as possible.

TypeScript has several type-checking strictness flags that can be turned one or off, and all of our examples will be written with all of them enable unless otherwise stated. The strict flag in CLI, or **strict: true** in a tsconfig.json toggles them all on simultaneously, but we can opt to call them individually. The two principals type-checking strictness flags are:

- noImplicitAny: turning on this flag will issue an error on any variables whose type is implicitly inferred as **any**.

-strictNullChecks: this flag makes handling with null and undefined more explicit, and apares us worrying about whether we forgot to handle null and undefined.

## Everyday Types

The most basic and common types in JavaScript

### The primitives: _STRING_, _Number_, and _Boolean_

**String** represents strings values like "Hello, world"

**Number** is for numbers like 34. JavaScript does not have a special runtime values for integers, so there's no equivalent to INT or FLOAT - everything is simple number.

**Boolean** is for the values _true_ or _false_

#### Arrays

To specify a type of an array I can use the sintax **number[]**

```js
let array: number[] = [1, 2, 3, 4];
or

let array 2: Array<string | number | boolean>
```

#### Any

TypeScript also have a especial type, any, that you can use when you don't want a particular value to be typechecking errors.

When a value is of type any, you can access any property of it. Call it like a function, assign it to(or from) a value of type, or pretty much anything else that's syntactically legal.

```js
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "Hello";
```

**noImplicityAny**
When you don't specify a type, TypeScript can't infer it from context, the compiler will default to any.

I need to avoid using any, because it isn't type checked. Use the compiler flag noImplicityAny to flag any implicit any as an error.

### Type Annotation on variables

When you declare a variable using let, var or const, you can optionally add a type annotation to explicitly specify the type of a variable.

```js
let myName: string = "Luiza";
```

In some cases, though, this isn't need, because TypeScript automatically infer the type in your code.

### Functions

TypeScript allows you to specify the type of both input and output values of function.
example:

```ts
function name(name: string): string {}
```

#### Parameter types annotation

when a function is declared, you can add type annotation to the parameters to declare the types of it.

```js
function greet(name: string) {
  console.log(`Olá ${name}, seja bem vindo!`);
}
```

If you try to pass something else than a string to this function, typescript will trow an error

#### Return type annotations

The return type annotation appears after the parameter list:

```js
function showNumber(): number {
  return 45;
}
```

You usually don't need the return type annotation, because TypeScript infers the function's return type based on its return statements.

#### Functions which return's promises

To annotate the type of a function witch return a promise, you should write like this:

```js
async function getFavoriteNumber(): Promise<number> {
  return 35;
}
```

#### Anonymous functions

When a anonymous function appears in a place where TypeScript can determine how it's going to called, the parameters of that function is automatically given types

```js
const name = ["alice", "luiza", "Bob"];

//Contextual typing for function - parameter s inferred to have a type string
name.foreEach(function (s) {
  console.log(s.toUpperCase());
});

//Contextual typing also apply to arrow functions
name.foreEach((s) => {
  console.log(s.toUpperCase());
});
```

Even though the parameter **S** doesn't have a specify type annotation, typeScript used the type of the forEach function, along with the inferred type of the array, to determine the type **S** will have.

This process is called contextual typing because the context that the function occurred within informs what type it should have.

### Object types

To define an object type, we simply list its properties an their types.

```js
function printCoord(pt: { x: number, y: number }) {
  console.log("The cordinate's x value is " + pt.x);
  console.log("The cordinate's y value is " + pt.y);
}
```

The type property is also optional. If you don't specify type, it will assume the type any.

#### Optional property

To set that the object property type is optional, just need to use the ? after the property name.

```js
function printName(obj: { first: string, last?: string }) {
  //...
}
//Both ok

printName({ first: "Luiza" });
printName({ first: "Lulu", last: "Larissa" });
```

If you try to access a property that doesn't exist in JavaScript, it will return a undefined value. Because of this, when you read an optional property, you'll have to check for undefined before using it.

```js
function printName(obj: { first: string, last?: string }) {
  //Error - might crash if 'obj.last' wasn't provided
  console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    //OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern Javascript syntax:
  console.log(obj.last?.toUpperCase());
}
```

### Union Types

A union type is a combination o 2 ou more types, representing values that may be any one of those types. We refer to each of these types as the union's member.

#### Defining a union type

```js
function printId(id: number | string) {
  console.log("Your ID is " + id);
}

//ok
printId(24);

//ok
printId("lulu");

// Error
printId({ id: 1213 });
```

#### Working with union types

It's easy to provide a type matching a union type. TypeScript will only allow an operation if it is valid for every member of the union. For example:

```js
function printId(id: number | string) {
  console.log(id.toUpperCase());
  //ERROR
  //Property 'toUpperCase' does not exist on type 'string | number'.
  //Property 'toUpperCase' does not exist on type 'number'.
}
```

The solution is to **narrow** the union with code. Narrowing occurs when typeScript can deduce a more specific type of value based on the structure of the code.

```js
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

Sometimes you'll have a union type where all the members have something in commom. For example, both array and string have o slice mode. If every member in a union has a property in commum, you can us this property without narrowing:

```js
// Return type is inferred as number[] | string
function getFirstThree(arr: number[] | string) {
  return x.slice(0, arr.length);
}
```

### Type Aliases

Another way to pass a union of types not being directly is using Alises. Aliases is a name for a type. The syntax goes like this:

```js
type Point = {
  x: number,
  y: number,
};

function PrintCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's x value is " + pt.y);
}
PrintCoord({ x: 100, y: 20 });
```

The aliases cannot be used to create distinct/different versions of the same type. TypeScript would consider this illegal, but Ok because both type are aliases for the same type:

```js
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

let userInput = sanitizeInput(getInput());

userInput = "new input";
```

### Interfaces

A interfaces declaration is another way to name an object type

```js
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

Just as when the alias type used above, the example works just an if we had used anonymous object type. JavaScript is only concerned about the type of value that is being passes to printCoord(). Being concerned only with the structure and capabilities of types is why we call typeScript a structurally typed type system.

#### The differences between Type Aliases and Interfaces

These two are a object type too similar, and in many case is freely to choose between them. Almost all features of an interface are available in type, the key distinction is that the type aliases cannot be changed adding new properties after defined, but an interface is always extendable.

```

         Interface
         Extending an interface

      interface Animal {
        name: string
      }

      interface Bear extends Animal  {
        honey: boolean;
      }

      const bear = getBear()
      bear.name
      bear.honey
////

```

       Type
         Extending a type via intersections

      type Animal {
        name: string
      }

      interface Bear = Animal &  {
        honey: boolean;
      }

      const bear = getBear()
      bear.name
      bear.honey

### Type Assertions

Sometimes you'll have information about the type of a value that typescript can't know about.

JS, TYpeScript, node, banco de dados, SQL e git. frameworks/libs

Configurações essenciais do typescript
noImplicityAny = true
allowJs
strictNullChecks

css tip:
text-wrap: balance; or pretty
