const fs = require('fs')

console.log("start")
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set Immediate callback")
})
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
    },0)
    setImmediate(()=>{
        console.log("immd 2")
    })
    console.log(data)
})
console.log("end");
//process.nextTick= It is a method which is used to handle the asynchronous operations in Node.js. It is used to handle the asynchronous operations in Node.js.
// It is used to handle the asynchronous operations in Node.js. It is used to handle the asynchronous operations in Node.js.