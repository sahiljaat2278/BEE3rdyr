const fs = require("fs")
console.log(fs)
function add(a,b) {
  return a + b;
}
function sub(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a * b;
}
fs.readFile('demo.txt', 'utf8', (err,data) => {
    console.log(data);
});
console.log("Hello")
console.log(add(2,3));
sub(5,6);   
multiply(3,2);

console.log("exit")
//process=Set of task.This is a program when it runs it is taken as process(set of task).then into threads(task).
//Thread=It is a single task which is running in the process.   
//Node.js is a single threaded environment. It is a single thread which is running in the process.
//Event loop=It is a mechanism which is used to handle the asynchronous operations in Node.js
//javascript is a single threaded language. It is a single thread which is running in the process.
//Asynchronous=It is a mechanism which is used to handle the asynchronous operations in Node.js
//Synchronous=It is a mechanism which is used to handle the synchronous operations in Node.js
//Callback=It is a function which is passed as an argument to another function. It is used to handle the asynchronous operations in Node.js.
//Event=It is a mechanism which is used to handle the events in Node.js. It is used to handle the events in Node.js.
//EventEmitter=It is a class which is used to handle the events in Node.js. 
//Event loop is a mechanism which is used to handle the asynchronous operations in Node.js. It is used to handle the events in Node.js.
//synchronous operations are executed in the order they are called.
//asynchronous operations are executed in the order they are called but they are not blocking the eventn loop.
//Non-blocking I/O=It is a mechanism which is used to handle the non-blocking I/O operations in Node.js. It is used to handle the non-blocking I/O operations in Node.js.
//Blocking I/O=It is a mechanism which is used to handle the blocking I/O operations in Node.js. It is used to handle the blocking I/O operations in Node.js.
//Difference between process and thread=Process is a program which is running in the operating system. Thread is a single task which is running in the process.
//How process is made=Process is made up of multiple threads. Each thread is a single task which is running in the process.
//How thread is made=Thread is made up of multiple tasks. Each task is a single operation which is running in the thread.
//How event loop is made=Event loop is made up of multiple tasks. Each task is a single operation which is running in the event loop.
//How event loop is made=Event loop is made up of multiple tasks. Each task is a single operation which is running in the event loop.
//How event loop is made=Event loop is made up of multiple tasks. Each task is a single operation which is running in the event loop.
//Node js components=Node.js is made up of multiple components. Each component is a single operation which is running in the Node.js.
//v8 engine=V8 engine is a JavaScript engine which is used to run the JavaScript code in Node.js. It is used to run the JavaScript code in Node.js.
//libuv=Libuv is a library which is used to handle the asynchronous operations in Node.js. It is used to handle the asynchronous operations in Node.js.
//npm=Node Package Manager is a package manager for Node.js. It is used to manage the packages in Node.js. It is used to manage the packages in Node.js.
//Event loop phases=Event loop is made up of multiple phases. Each phase is a single
//Main thread=Main thread is a single thread which is running in the process. It is used to handle the synchronous operations in Node.js.
//Project initialization=Project initialization is the process of initializing the project in Node.js. It is used to initialize the project in Node.js.
//Module requirement=Module requirement is the process of requiring the modules in Node.js. It is used to require the modules in Node.js.
//toplevel code=Top level code is the code which is executed in the top level of the Node.js application. It is used to execute the code in the top level of the Node.js application.
//call back registration=Callback registration is the process of registering the callbacks in Node.js. It is used to register the callbacks in Node.js.
//thread pool=Thread pool is a pool of threads which is used to handle the asynchronous operations in Node.js. It is used to handle the asynchronous operations in Node.js.
//event loop=Event loop is a mechanism which is used to handle the asynchronous operations in Node.js. It is used to handle the events in Node.js.
//event loop phases=Event loop is made up of multiple phases. Each phase is a single operation which is running in the event loop. It is used to handle the events in Node.js
// Event-loop= Thread pool(where there are multiple(4) thread which can use system thread for executing the task) + Event loop (which is a single thread which is used to handle the asynchronous operations in Node.js) = Event-loop


