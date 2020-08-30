//Convert the following es5 code blocks into es2015 code:
//1.
/* var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(function(){
            console.log("Your name is " + this.fullName)
        }.bind(this),1000)
    }
}
*/
var person = {
    fullName: "Harry Potter",
    sayHi: function(){
        setTimeout(() => console.log('Your name is ${this.fullName}'),1000)
    }
}

/*2. var name = "Josie"
console.log("When " + name + " comes home, so good")*/

let name = "Josie"
console.log("When ${name} comes home so good")

/*
3. var DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 50; // stop me from doing this!*/

   const doNotChange = 42;

/*4. var arr = [1,2]
   var temp = arr[0]
   arr[0] = arr[1]
   arr[1] = temp
*/
var [a, b] = [1, 2];
    [a, b] = [b, a]
5./*  function double(arr){
      return arr.map(function(val){
        return val*2
      });
     }
*/
function double1(arr){
    return arr.map(value => value * 2);
  }

/*6. var obj = {
     numbers: {
        a: 1,
        b: 2
    } 
  }

var a = obj.numbers.a;
var b = obj.numbers.b;
*/

var {a, b, c} = obj.numbers;

/*
7. function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }
*/
let add = (a = 10, b = 10) => a + b;
/*
Research the following functions - what do they do?
Array.from - is used to creates a new array instance from a given array. In the case of a string, every alphabet of the string is converted to an element of the new array instance and in case of integer values, a new array instance simply takes the elements of the given array.
e.g which syntax would be like: Array.from(obj, mapFn, thisArg)

Object.assign - This method is used to copy one or more source objects to a target object. It invokes getters and setters since it uses both 'get' on the source and 'Set' on the target. It returns the target object which has properties and values copied from the target object.
e.g var obj = {a: 1};
    var copy = Object.assign({}, obj)

Array.includes - The includes() method determines whether an array contains a specified element. This method returns true if the array contains the element, and false if not. Note: The includes() method is case sensitive.
e.g var a = [1, 2, 3];
        a.includes(2); //true
        a.includes(4); //false

String.startsWith - The startsWith() method determines whether a string begins with the characters of a specified string. This method returns true if the string begins with the characters, and false if not.
e.g var str = 'To be, or not to be, that is the question.';

console.log(str.startsWith('To be'));         // true
console.log(str.startsWith('not to be'));     // false
console.log(str.startsWith('not to be', 10)); // true
*/