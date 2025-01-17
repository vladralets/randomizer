export const data ={
    "js": {
      "title": "JavaScript",
      "topics": [
        {
          "title": "Basics",
          "questions": [
            {
              "question": "What are the 8 basic data types in JavaScript?",
              "answer": [
                "Number, BigInt, String, Boolean, Null, Undefined, Object, and Symbol."
              ]
            },
            {
              "question": "What is the difference between 'null' and 'undefined'?",
              "answer": [
                "'null' is an explicit assignment indicating the absence of a value, while 'undefined' means a variable has been declared but has not been assigned a value."
              ]
            },
            {
              "question": "What is the purpose of 'typeof' in JavaScript?",
              "answer": [
                "The 'typeof' operator is used to determine the type of a variable or expression.",
                {
                  "code": "console.log(typeof 123); // 'number'",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you check if a variable is an object?",
              "answer": [
                "You can use 'typeof' and check if it's 'object', but also ensure it's not 'null' (as null is an object in JavaScript).",
                {
                  "code": "console.log(typeof {} === 'object' && {} !== null); // true",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is the difference between a primitive and an object in JavaScript?",
              "answer": [
                "Primitive types are immutable and hold a single value (e.g., string, number), while objects are mutable and can hold collections of data and more complex entities."
              ]
            },
            {
              "question": "What are the three ways to declare a variable in JavaScript?",
              "answer": [
                "Using 'var', 'let', and 'const'.",
                {
                  "code": "let x = 10; // Block-scoped variable\nconst y = 20; // Constant variable\nvar z = 30; // Function-scoped variable",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is the difference between 'let' and 'var'?",
              "answer": [
                "'let' is block-scoped and does not hoist to the top of the block, while 'var' is function-scoped and hoists to the top of the function or global context."
              ]
            },
            {
              "question": "What is the difference between 'let' and 'const'?",
              "answer": [
                "'const' is used for variables whose value cannot be reassigned, while 'let' allows reassignment of values."
              ]
            },
            {
              "question": "What happens if you use a variable before declaring it with 'let'?",
              "answer": [
                "It will throw a ReferenceError because variables declared with 'let' are not hoisted in the same way as 'var'."
              ]
            },
            {
              "question": "What does 'alert()' do in JavaScript?",
              "answer": [
                "The 'alert()' function displays a modal dialog box with a specified message and an OK button.",
                {
                  "code": "alert('Hello, World!');",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is 'prompt()' used for in JavaScript?",
              "answer": [
                "The 'prompt()' function displays a dialog box that asks the user for input and returns the entered value as a string.",
                {
                  "code": "let name = prompt('What is your name?');",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What happens if a user clicks 'Cancel' in 'prompt()'?",
              "answer": [
                "'prompt()' will return 'null' if the user clicks 'Cancel'."
              ]
            },
            {
              "question": "What is 'confirm()' used for in JavaScript?",
              "answer": [
                "The 'confirm()' function displays a modal dialog box with a message and two buttons: OK and Cancel. It returns 'true' if OK is clicked and 'false' if Cancel is clicked.",
                {
                  "code": "let isConfirmed = confirm('Are you sure?');",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you display a message to the user in the browser using JavaScript?",
              "answer": [
                "You can use 'alert()', 'prompt()', or 'confirm()' to display a modal dialog box.",
                {
                  "code": "alert('This is an alert');",
                  "language": "javascript"
                }
              ]
            }
          ]
        },
        {
          "title": "Type Conversions",
          "questions": [
            {
              "question": "What is explicit type conversion?",
              "answer": [
                "Explicit type conversion is performed using constructor functions or methods like String(), Number(), Boolean()."
              ]
            },
            {
              "question": "How do you convert a string to a number?",
              "answer": [
                "Using Number('string') or parseInt(), parseFloat().",
                {
                  "code": "Number('123'); // 123",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What does Boolean() return for an empty string?",
              "answer": ["Boolean('') returns false."]
            },
            {
              "question": "How does implicit conversion to string work?",
              "answer": [
                "When concatenating a string with other types of data, everything is converted to a string.",
                {
                  "code": "1 + '2'; // '12'",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What happens if you convert null to a number?",
              "answer": ["Number(null) returns 0."]
            },
            {
              "question": "How do you convert an object to a primitive?",
              "answer": [
                "An object is converted using methods like toString() or valueOf()."
              ]
            },
            {
              "question": "How do you check the type after conversion?",
              "answer": [
                "Using the typeof operator.",
                {
                  "code": "typeof Number('123'); // 'number'",
                  "language": "javascript"
                }
              ]
            }
          ]
        },
        {
          "title": "If-Else",
          "questions": [
            {
              "question": "How do you write a simple condition?",
              "answer": [
                {
                  "code": "if (x > 0) {\n  console.log('Positive');\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What does the 'else if' construct do?",
              "answer": [
                "It allows adding additional conditions to an if-else chain."
              ]
            },
            {
              "question": "Can you use 'else' without 'if'?",
              "answer": ["No, 'else' is always tied to an 'if'."]
            },
            {
              "question": "How does the ternary operator work?",
              "answer": [
                "It replaces if-else for simple expressions.",
                {
                  "code": "let result = x > 0 ? 'Positive' : 'Negative';",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "Can you nest multiple conditions?",
              "answer": [
                "Yes, conditions can be nested inside each other.",
                {
                  "code": "if (x > 0) {\n  if (x < 10) {\n    console.log('Single digit');\n  }\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What does an 'if' condition without 'else' return?",
              "answer": [
                "If the condition is false, execution continues without any action."
              ]
            },
            {
              "question": "How can you avoid duplicating conditions?",
              "answer": [
                "Use a switch statement or a ternary operator to simplify the code."
              ]
            }
          ]
        },
        {
          "title": "Switch",
          "questions": [
            {
              "question": "How does the switch statement work?",
              "answer": [
                "It compares the value of an expression to case values using strict equality."
              ]
            },
            {
              "question": "What is the purpose of 'break' in switch?",
              "answer": [
                "It stops the execution of the current block and exits the switch statement."
              ]
            },
            {
              "question": "What happens without a 'break' in a switch statement?",
              "answer": [
                "Code execution continues into the next case until a 'break' is encountered."
              ]
            },
            {
              "question": "Can you use switch without a default case?",
              "answer": [
                "Yes, but it is recommended to include a default case to handle unexpected values."
              ]
            },
            {
              "question": "Can multiple cases share the same code in a switch statement?",
              "answer": [
                "Yes, multiple cases can be grouped together without a break.",
                {
                  "code": "switch(x) {\n  case 1:\n  case 2:\n    console.log('1 or 2');\n    break;\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What will a switch with case '1' return when x = 1?",
              "answer": ["The block under case '1' will be executed."]
            },
            {
              "question": "How can expressions be used in switch cases?",
              "answer": [
                "Any valid expressions can be used in switch cases.",
                {
                  "code": "switch (true) {\n  case x > 10:\n    console.log('x > 10');\n    break;\n}",
                  "language": "javascript"
                }
              ]
            }
          ]
        },
        {
          "title": "Operators",
          "questions": [
            {
              "question": "How does the '+' operator work?",
              "answer": [
                "It is used for addition of numbers and concatenation of strings.",
                {
                  "code": "1 + 2; // 3\n'1' + '2'; // '12'",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What does the '==' operator do?",
              "answer": [
                "It checks for equality of values without considering the types.",
                {
                  "code": "1 == '1'; // true",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How does the '===' operator work?",
              "answer": [
                "It checks for equality of both values and types.",
                {
                  "code": "1 === '1'; // false",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What does the '&&' operator do?",
              "answer": [
                "It returns the first falsy value or the last truthy value.",
                {
                  "code": "true && false; // false",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How does the '||' operator work?",
              "answer": [
                "It returns the first truthy value or the last falsy value.",
                {
                  "code": "false || true; // true",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What does the '!' operator return?",
              "answer": [
                "The '!' operator returns the logical negation of the value.",
                {
                  "code": "!true; // false",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How does the '%' operator work?",
              "answer": [
                "It returns the remainder of the division.",
                {
                  "code": "5 % 2; // 1",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How does the '??' operator work?",
              "answer": [
                "It returns the first non-null/undefined value.",
                {
                  "code": "let name = null ?? 'Guest'; // 'Guest'",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is short-circuiting in logical operators?",
              "answer": [
                "It is when logical operators stop evaluating as soon as the result is determined."
              ]
            },
            {
              "question": "What happens with 'true || console.log('test')'?",
              "answer": [
                "'test' will not be logged because the first value is truthy."
              ]
            },
            {
              "question": "What happens when comparing 'null > 0'?",
              "answer": ["It will return false because null is converted to 0."]
            },
            {
              "question": "How are strings compared in JavaScript?",
              "answer": [
                "Strings are compared character by character based on their Unicode values."
              ]
            },
            {
              "question": "What does 'NaN === NaN' return?",
              "answer": ["It returns false because NaN is not equal to itself."]
            },
            {
              "question": "How are objects compared in JavaScript?",
              "answer": [
                "Objects are compared by reference, not by their content."
              ]
            },
            {
              "question": "How does the '<=' operator work?",
              "answer": [
                "It checks if the first value is less than or equal to the second value."
              ]
            },
            {
              "question": "What does the 'typeof' operator do?",
              "answer": [
                "The 'typeof' operator is used to determine the type of a variable or expression.",
                {
                  "code": "console.log(typeof 123); // 'number'",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What happens when you use 'typeof null'?",
              "answer": [
                "It returns 'object' due to a historical bug in JavaScript."
              ]
            },
            {
              "question": "How does the 'instanceof' operator work?",
              "answer": [
                "It checks if an object is an instance of a specific constructor or class.",
                {
                  "code": "[] instanceof Array; // true",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you use the spread operator (...) in JavaScript?",
              "answer": [
                "The spread operator expands iterable values (like arrays) into individual elements.",
                {
                  "code": "let arr = [1, 2, 3];\nconsole.log(...arr); // 1 2 3",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is the difference between unary and binary operators?",
              "answer": [
                "Unary operators operate on a single operand, while binary operators work with two operands.",
                {
                  "code": "-x; // Unary operator\nx + y; // Binary operator",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How does the ternary operator work?",
              "answer": [
                "It evaluates a condition and returns one of two values depending on whether the condition is true or false.",
                {
                  "code": "let result = x > 0 ? 'Positive' : 'Negative';",
                  "language": "javascript"
                }
              ]
            }
          ]
        },
        {
          "title": "Loops: while and for",
          "questions": [
            {
              "question": "What is the difference between a 'while' and a 'do...while' loop?",
              "answer": [
                "The 'while' loop checks the condition before executing the loop body, whereas the 'do...while' loop executes the body at least once before checking the condition.",
                {
                  "code": "do {\n  console.log('Executed once even if condition is false');\n} while (false);",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How does the 'for' loop work?",
              "answer": [
                "The 'for' loop has three parts: initialization, condition, and increment/decrement. These are executed in sequence for each iteration.",
                {
                  "code": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is an infinite loop and how can you prevent it?",
              "answer": [
                "An infinite loop occurs when the exit condition of a loop is never met. You can prevent it by ensuring that the condition will eventually evaluate to false.",
                {
                  "code": "let i = 0;\nwhile (true) {\n  if (i > 10) break;\n  i++;\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is the purpose of the 'break' statement in loops?",
              "answer": [
                "The 'break' statement is used to exit a loop immediately, regardless of the loop's condition.",
                {
                  "code": "for (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  console.log(i);\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is the purpose of the 'continue' statement in loops?",
              "answer": [
                "The 'continue' statement skips the rest of the current loop iteration and proceeds to the next iteration.",
                {
                  "code": "for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}",
                  "language": "javascript"
                }
              ]
            }
          ]
        },
        {
          "title": "Functions",
          "questions": [
            {
              "question": "What is a function in JavaScript?",
              "answer": [
                "A function is a reusable block of code designed to perform a particular task."
              ]
            },
            {
              "question": "How do you declare a function in JavaScript (Function Expression)?",
              "answer": [
                "Using an anonymous function:",
                {
                  "code": "const sayHello = function() {\n  console.log('Hello!');\n};",
                  "language": "javascript"
                },
                "Using an arrow function:",
                {
                  "code": "const sayHello = () => {\n  console.log('Hello!');\n};",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How do you call a function in JavaScript?",
              "answer": [
                {
                  "code": "sayHello();",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is the difference between a function declaration and a function expression?",
              "answer": [
                "A function declaration is defined with the 'function' keyword and is hoisted, meaning it can be used before it's defined.",
                "A function expression is assigned to a variable and is not hoisted."
              ]
            },
            {
              "question": "How do you pass parameters to a function?",
              "answer": [
                "Parameters are specified inside the parentheses when defining the function.",
                {
                  "code": "function greet(name) {\n  console.log(`Hello, ${name}`);\n}\ngreet('John');",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What are default parameters in functions?",
              "answer": [
                "Default parameters allow named parameters to be initialized with default values if no value is passed.",
                {
                  "code": "function greet(name = 'Guest') {\n  console.log(`Hello, ${name}`);\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you return a value from a function?",
              "answer": [
                {
                  "code": "function add(a, b) {\n  return a + b;\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What happens if a function does not have a return statement?",
              "answer": ["The function returns 'undefined' by default."]
            },
            {
              "question": "What is an arrow function?",
              "answer": [
                "An arrow function is a shorter syntax for writing functions, introduced in ES6.",
                {
                  "code": "const add = (a, b) => a + b;",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How do arrow functions differ from regular functions?",
              "answer": [
                "Arrow functions do not have their own 'this' or 'arguments' object and cannot be used as constructors."
              ]
            },
            {
              "question": "What is a callback function?",
              "answer": [
                "A callback function is a function passed as an argument to another function to be executed later.",
                {
                  "code": "function processUserInput(callback) {\n  let name = prompt('Enter your name:');\n  callback(name);\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you create a recursive function?",
              "answer": [
                {
                  "code": "function factorial(n) {\n  if (n === 1) return 1;\n  return n * factorial(n - 1);\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is a function scope?",
              "answer": [
                "Function scope means that variables defined inside a function are not accessible outside of it."
              ]
            },
            {
              "question": "What is a nested function?",
              "answer": [
                "A nested function is a function defined inside another function.",
                {
                  "code": "function outer() {\n  function inner() {\n    console.log('Inner function');\n  }\n  inner();\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is the 'arguments' object in JavaScript?",
              "answer": [
                "The 'arguments' object is an array-like object available inside all non-arrow functions, containing the values of the arguments passed to the function.",
                {
                  "code": "function sum() {\n  let total = 0;\n  for (let i = 0; i < arguments.length; i++) {\n    total += arguments[i];\n  }\n  return total;\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you create a function with a dynamic number of arguments?",
              "answer": [
                "You can use the rest parameter syntax (...args) to handle dynamic arguments.",
                {
                  "code": "function sum(...args) {\n  return args.reduce((total, num) => total + num, 0);\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is a pure function?",
              "answer": [
                "A pure function is a function that, given the same inputs, always returns the same output and has no side effects."
              ]
            },
            {
              "question": "What is an immediately invoked function expression (IIFE)?",
              "answer": [
                "An IIFE is a function that runs as soon as it is defined.",
                {
                  "code": "(function() {\n  console.log('IIFE executed');\n})();",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is a higher-order function?",
              "answer": [
                "A higher-order function is a function that takes another function as an argument or returns a function as its result.",
                {
                  "code": "function applyOperation(a, b, operation) {\n  return operation(a, b);\n}\nconst add = (a, b) => a + b;\napplyOperation(5, 3, add);",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is function hoisting in JavaScript?",
              "answer": [
                "Function declarations are hoisted, meaning they can be called before they are defined.",
                {
                  "code": "sayHello();\nfunction sayHello() {\n  console.log('Hello');\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is a closure?",
              "answer": [
                "A closure is the combination of a function and the lexical environment within which that function was declared.",
                {
                  "code": "function outer() {\n  let name = 'John';\n  function inner() {\n    console.log(name);\n  }\n  return inner;\n}\nlet innerFn = outer();\ninnerFn();",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What is IIFE in JavaScript?",
              "answer": [
                "An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.",
                {
                  "code": "(function() {\n  console.log('Hello!');\n})();",
                  "language": "javascript"
                }
              ]
            }
          ]
        },
        {
          "title": "Objects",
          "questions": [
            {
              "question": "What is an object in JavaScript?",
              "answer": [
                "A data structure that allows storing collections of properties as key-value pairs."
              ]
            },
            {
              "question": "How do you create an object using a literal?",
              "answer": [
                {
                  "code": "let user = {};",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you add a new property to an existing object?",
              "answer": [
                {
                  "code": "user.age = 30;",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you delete a property from an object?",
              "answer": [
                {
                  "code": "delete user.age;",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you check if a property exists in an object?",
              "answer": [
                {
                  "code": "'name' in user;",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "How can you iterate over all properties of an object?",
              "answer": [
                "It is possible to iterate over all properties of an object using the for..in loop.",
                "Key in the loop is the property name.",
                "The following code will output all properties of the object user:",
                {
                  "code": "for (let key in user) {\n  console.log(key);\n}",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What will accessing a non-existent property of an object return?",
              "answer": ["It will return undefined."]
            },
            {
              "question": "What types of values can be stored in object properties?",
              "answer": [
                "Any type of data including strings, numbers, functions, arrays, and other objects."
              ]
            },
            {
              "question": "What happens if you define two properties with the same name in an object?",
              "answer": ["The last one will overwrite the previous one."]
            },
            {
              "question": "Can you use variables as property names in objects?",
              "answer": [
                {
                  "code": "let key = 'name';\nlet user = { [key]: 'John' };",
                  "language": "javascript"
                }
              ]
            },
            {
              "question": "What does the const declaration do for objects?",
              "answer": [
                "It prevents reassigning the object, but properties of the object can still be modified."
              ]
            }
          ]
        }
      ]
    }
  }
  