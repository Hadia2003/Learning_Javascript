//<-----------Part 1-------------------->

// 1. const (Because Const is not redefined and cannot be reassigned, 
// and let cannot be redefined but cannot be reassigned)
// 2. true (because x contain integer 5 and y contain string of int 5, so both are same, so it is true)
// 3. 77 (3+4 = 7, and string 7 is concatenated with it)
// 4. === 
// 5. object

//<-----------Part 2-------------------->

//Task 1
const greeting = "Hello, World!";

// Task 2
//var --> It can be redefined and reassigned, it is global element
//let --> It can be reassigned but cannot be redefined, it is block element
//const --> It cannot be redefined and reassigned, it is block element

//Task 3
const girl_name = "laila";
const language = "java script";
console.log(`My name is ${girl_name} and I am learning ${language}`);


//Task 4
let message = "Welcome to JavaScript Programming!";
console.log(extractFirstWord(message));
function extractFirstWord(message){
    const string_1 = message.split(" ")[0];
    return string_1;
}

//Task 5
let string = "hadia@gmail.com";
console.log(maskEmail(string));
function maskEmail(string){
    const [username, domain] = string.split("@");
    const first = username.charAt(0);
    const maskString = first+"****@"+domain;
    return maskString;
}
