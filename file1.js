 const f2= require("./file2.js");
 console.log(f2);
 function sum(a, b) {
  return a + b;
}
//CIRCULAR DEPENDENCY
// Circular dependency occurs when two or more modules depend on each other, creating a loop in the dependency graph. This can lead to issues such as infinite loops or unexpected behavior in the application.
//COMMON MODULE AND ES MODULE DIFFERENCE
// CommonJS modules use `require` to import and `module.exports` to export, while ES modules use `import` and `export` syntax. CommonJS is synchronous and designed for server-side, while ES modules are asynchronous and designed for both client-side and server-side, allowing for better optimization and tree-shaking.
// CommonJS is used in Node.js, while ES modules are the standard in modern JavaScript development. ES modules support static analysis, enabling better optimization and tree-shaking by bundlers, while CommonJS does not support this feature.
//THREADPOOL
// Threadpool is a pool of threads that can be used to execute tasks concurrently. It is used in Node.js to handle asynchronous operations that are CPU-intensive or blocking, allowing the event loop to continue processing other tasks without being blocked by these operations.
//HOW TO AVOID CIRCULAR DEPENDENCY
// To avoid circular dependencies, you can refactor your code to separate the dependent modules into smaller, independent modules. You can also use design patterns like dependency injection or event-driven architecture to decouple the modules. Additionally, you can use dynamic imports or lazy loading to load the dependent modules only when needed, breaking the circular dependency chain.