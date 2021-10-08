# namaste-js

## Episode 1 - How JavaScript Works 🔥& Execution Context

![](namaste/episode1.png) <br>

"Everything in javascript happens inside an Execution Context" <br>
"Javascript is a synchronous single-threaded language" <br>

Execution context is divided into two parts, that is, the memory part and the other is code part. In the memory part the variables and functions are stored in a key-value pair.

## Episode 2 - How JavaScript Code is executed? ❤️& Call Stack
![](namaste/episode2.png) <br>

When a javascript program is executed, an execution context is created. The Execution context is created in 2 phases - Creation phase(Memory creation phase) and Code execution phase. <br>

For the given code, in the first phase, JS will allocate memory to all the variables and functions. <br>
Memory part: <br>
n : undefined <br>
square : { ... }       //Stores the whole code of the function <br>
square2 : undefined <br>
square4 : undefined <br>

In the second phase, JS will execute the code. <br>
Memory part: <br>
n : 2 <br>
square : { ... }       //Stores the whole code of the function <br>
square2 : 4 <br>
square4 : 16 <br>

When a function is being invoked, a new execution context is being created. <br>
The new execution context for the function in phase 1: <br>
Memory part: <br>
num : undefined <br>
ans : undefined <br>

The new execution context for the function in phase 2: <br>
Memory part: <br>
num : 2 <br>
ans : 4  //num * num is executed in the code part and the result is stored in ans <br>

return keyword specifies that return the control of the program back to the place where the function was invoked. Once the program has been completed executed, the whole execution context is deleted. <br>

The Call stack is used to manage the execution contexts.
