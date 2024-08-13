# Learning typescript

- Syntax
  TYpescript is a lenguage that is superset of JavaScrit, meaning that it add rules about how different kinds of values can be used.

- RUntime Behavior
  TypeScript is also a lenguage that preserve the runtime behavior of javaSCript, it means that typeScript never changes the runtime behavior of Java script code

- erases type
  Once TYpeScript compiler is done checking your code, it erases types to produce the reulting "compiled" code. It means that once your code is compiled, the resulting plain JS code has no type information.
  That also means that never changes the behavior of your program based on the types in inferred(inferido). FInally, typeScript doesn't provide any addicional runtime libraries.

  ## JS vs TS

  The truth is that I can learn javaScript without knowing javaScript, but I cannot forget that are more resources avalaible about javaScript.

**TypeScript is a JavaSCript runtime with a compile-time type checker**.

## Static Type checker

A type is a the conncept of accepting which values can be passed to a constant, variable, or a function and which will crash. JavaScript only provides danamyc typing - running the code to se what happens.

The alternative is to use a static type system to make predictions about what what the code is expected to do before it run. Static type systems describes de shapes and behavios of what our values will be when we run our programs.

## TSC, the typeScript compiler(it's the type-checker)

npm install -g typeScript (to add globaly, but there is a way to install in a single project at a time with => (npm install typeScript))

[npx tsc -w] is used to start using the compiler to check the code

In the cases I want to be a little more defensive about mistakes, and make typeScript act a bit more strictly, I can run
[npx tsc -w --noEmitOnError] compiler option.

## Explicit Types

Exemplo:

```js
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is a ${date.toDateString()}!`);
}
```

Just added type annotations on person and date to describe what tipe of values greets can be called with.

But I need to keep in mind that I don't need ever describe what type o values the variable has, because the typeScript interprets with the type inferation

## Erased Types

When we compile the typeScript code bellow, the js code linked erases the type annotations passed to variabes

```js
function greet(person:, date:) {
  console.log("Hello ".concat(person, "today is ").concat(date.toDateString(), "!") );
}
```

REMEMBER: type annotations never change the runtime behavior of my program

## Downleveling

In the code exemple above, we can see that the template string was changed as the type nottation. Why's that? that happens due the fact that when we run te compiler, the has the hability to rewrite the newer versions of ECMAscripts to the old ones. This processing from moving from a newer or "higher" version of ECMAscript to an older or "lower" one is sometimes called Dpwnleveling.
By default, typeScript target ES3, an extremely old version of ECMAscript.

To run the code in a more recent version of TypeScript, I show run
npx tsc -w es[version year].

## Strictness

The key of TypeScript is to use the more type notions as possible to validade as much as possible.

TypeScript has several type-checking strictness flags that can be turned one or off, and all of our examples will be writen with all of them enable unless otherwise stated. The strict flag in CLI, or **strict: true** in a tsconfig.json toggles them all on simultaneously, but we can opt to call them individualy. The two principals type-checking strictness flags are:

- noImplicitAny: turning on this flag will issua an error on any variables whose type is implicitly inferred as **any**.

-strictNullChecks: this flag makes handling with null and undefined more explicit, and apares us worrying about whether we forgot to handle null and undefined.
