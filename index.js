

// =====================variable==================


// var stdId = 23;  // accessible inside the function in which it is decrlaed
// const stdName = "alayian";
// let email = "alayiansaeed@gamil.com"; // only accessible inside the scope

// try to change this

// stdId = 34;
// email = "now changed";
// // stdName = "aman"
// console.log(stdId);  
// console.log(email);
// console.log(stdName);


// data types====================================================

// Number
// BigInt
// String
// Boolean
// null   // empty value also stand alone value
// undefined  //  not defined
// Symbol // to show uniqueness of react components


// Check the types of datatypes=============================

// let Number = 11;
// let name = "alayian"
// let val = null;
// let undefVariable = undefined;

// console.log(typeof(Number))
// console.log(typeof(name))
// console.log(typeof(val))
// console.log(typeof(undefVariable))

// typecasting in js==================================
// let number = "234";   // here is string

// let convertinNUM = Number(number); // here is conversion

// console.log(typeof number);//   string type
// console.log(typeof convertinNUM);// converted into the number
// console.log(convertinNUM);// NaN

// let somevar = null; // here is it null
// let convertsomevar = Number(somevar);
// console.log(typeof somevar);//   string type
// console.log(typeof convertsomevar);// converted into the number
// console.log(convertsomevar);// 0

// let somevar = true; // here is it boolean
// let convertsomevar = Number(somevar);
// console.log(typeof somevar);//   string type
// console.log(typeof convertsomevar);// converted into the number
// console.log(convertsomevar);// 1


// let somevar = 0; // here is it boolean
// let convertsomevar = Boolean(somevar);  // conversion
// console.log(typeof somevar);//   string type
// console.log(typeof convertsomevar);// converted into the number
// console.log(convertsomevar);// false


// let somevar = ""; // here is it boolean
// let convertsomevar = Boolean(somevar);
// console.log(typeof somevar);//   string type
// console.log(typeof convertsomevar);// converted into the number
// console.log(convertsomevar);// false

// let somevar = "here is something"; // here is it boolean
// let convertsomevar = Boolean(somevar);
// console.log(typeof somevar);//   string type
// console.log(typeof convertsomevar);// converted into the number
// console.log(convertsomevar);// true



// Prefix and postfix in increament and decreament====================

// let number = 133;
// ++number;
// console.log(number) // simply add one value 134
// let number = 133;
//  let y =  --number; // first one decreament then assign it to y
// console.log(number);  // 132
// console.log(y);// 132
// let number = 133;
//  let y =  number++; // first  assign it to y then increament.
// console.log(number);  // 132
// console.log(y);// 132


// types of datatypes=============================

// Premitive datatypes=========
// Number, String, boolean, null, undefined, BigInt, Symbol

// non premitive datatypes

// Array, objeect and function


// Stack and heap =====================================

// let number = 123;
// let numbertwo = number;
// numbertwo = 124;
// console.log(number);
// console.log(numbertwo);  

// In above code value of origanal variable doesnot change becausse it is premitive type and stored in stack
// and it get the copy of original variable not reference

// let myaray = [1,3 ,4 ,5, 6, 22];

//  myaray[3] = 22;
//  let newaray =myaray

//  console.log(myaray);
//  console.log(newaray);
 

//  In above code it also change original array as it is non premitive and it stores in heap and get 
//  reference not copy

// ==========string in js ==================



// let mystring = "this is a simple string";  // this is a simple string
//  console.log(mystring);
 
//  console.log(mystring.toUpperCase());// convert in uppercase
//  console.log(mystring.indexOf("i"));// convert in uppercase
//  console.log(mystring.charAt(4));// check character at index 4.
//  let submethod = mystring.substring(2,9); // this does not work on negative values.
//  console.log(submethod);// is i 
//  let slicemethod = mystring.slice(-8, 4); //it also follow negative CSSFontFeatureValuesRule.

//  =====================substring========================
//  const anyString = "Alayian";

// console.log(anyString.substring(0, 1)); // "A"
// console.log(anyString.substring(1, 0)); // "A" effect is same as if the two arguments swapped.

// console.log(anyString.substring(0, 8)); // "Mozill" 

// console.log(anyString.substring(4)); // "lla"  give value to the end of string
// console.log(anyString.substring(4, 7)); // "lla"
// console.log(anyString.substring(7, 4)); // "lla"  swaped

// console.log(anyString.substring(0, 7)); // "Mozilla"
// console.log(anyString.substring(0, 10)); // "Mozilla"
//  console.log(slicemethod);

 
// Takes 4 last characters of string
// console.log(text.substring(text.length - 4)); // prints "illa" it start form end as negative value

// Takes 5 last characters of string
// console.log(text.substring(text.length - 5)); // prints "zilla" it is same as above
 
// ==========================trim()=====================

// let anystring = "this is demo string"

//  let newarray = "   this is string with many white spaces at start and end   " 
//  console.log(newarray);
//  let trimMethod = newarray.trim()
//  console.log(trimMethod);// this is string after removing white spaces.


// ==================search method========================

// let newarray = 'here is any demo string to know aobut search method'
// let pattern = /any/;
// let searchMethod =  newarray.search(pattern);

// console.log(searchMethod);
// let str = "Hello, world!";
// let patt = /world/;
// let result = str.search(patt);
// console.log(result); //7 

// ======================replace=================

// const url = "https:www.somedomain34/"
// let pattern = /Https:/i
// console.log(url.replace('34', 'name'));
// console.log(url.replace(pattern, 'name'));
// console.log(url.replace("", 'nae'));// prepened "nae" at the start of string.
//   let foo = "here is any array"
// let newfoo = foo.replace(/(is)/, "$2");
// "$2oo"; the regex doesn't have the second group

// "foo".replace("f", "$1");
// "$1oo"; the pattern is a string, so it doesn't have any groups

// ====================repeat==========================

// let anyArray = "hello welcome to my office."
// let repeatmethod = console.log(` It will 
// repeat this senttence three time ${anyArray.repeat(3)} `)

// ====================padStart==========================

// const str1 = '50';

// console.log(str1.padStart(6, '0'));
// Expected output: "05"
// const phonenumber = "03488759075";
// let last4Digit = phonenumber.slice(-3);
// // console.log(last4Digit);

// let showencryptedNUM   = last4Digit.padStart(11,"*");
// console.log(showencryptedNUM);



// ==================================Math and numbers=================
// let number = 100000;


// console.log(number.toFixed(2));
// console.log(number.toPrecision(2));
// console.log(number.toLocaleString('en-IN'));

// let anotherNumber = 234.678;

// console.log(Math.abs(anotherNumber));
// console.log(Math.floor(anotherNumber));
// console.log(Math.ceil(anotherNumber));
// console.log(Math.round(anotherNumber));






// ===========================Array===================
//  let anyarr = [1,2 , 3]
//  let anyarr2 = [1, "4", 3] // this is another declaration
//  let anyarr3 = [1, "4", 3, [4,6]]// tthis is mixed array with number values and other arrays

//  console.log(anyarr2[1]);
//  console.log(anyarr3[3][1]);
 // ========================at()========
 // let arr = [3,0,3,9,5,7];
 // let index = 4;
 // console.log(arr.at(3));
 // ========================concat()========
 
 // let arr1 = [2,3]
 // let arr2 = [5,4,4,5]
 // let arr3 = [5,4,3,5]
 
 // let concatmethod = arr1.concat(arr2);// this is one method
 // console.log(concatmethod);
 // console.log(typeof(concatmethod));
 // console.log(typeof(arr1));
 
 // console.log(arr3.concat(arr1,arr2))
 
 // ========================iterator()========
//  let myarray = [2, 4, 5, 5,6,7,8];

// let newarr = myarray[Symbol.iterator]();

//  let result =  (newarr.next());
//  while(!result.done){
//      console.log(result.value);
//       result =  (newarr.next());
   
//  }

//  =====================pOP=================
// let anyarray = ["some", "item", "here", "is"]
// console.log(anyarray.pop()); //is
// console.log(anyarray);// [ 'some', 'item', 'here' ]


//  console.log(result);
// ================shift============
// let anyarray = ["some", "item", "here", "is"]
// console.log(anyarray.shift()); //some
// console.log(anyarray);// [ 'item', 'here', 'is' ]

// pop and shift are the vicevera of each others
// ==============push==============

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// console.log(animals);//[ 'pigs', 'goats', 'sheep', 'cows' ]
// ================reduce======================
// let array1 = [3,4,5,6,7];
// let initialValue = 0;
// let reducemethod = anyarray.reduce((accumalter, currentvalue) =>
//   accumalter + currentvalue, initialValue


// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//  (accumulator, currentValue)=>  accumulator + currentValue,
//   initialValue,
//   );

// console.log(sumWithInitial);

// ======================recerse====================
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
// console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

// ======================slice====================
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// ==================spread=========================
// let anyarray = [1,2, 4, 5, 5];
// let anyarray1 = [3,4, 6, 577, 5];

//    let newarray = [...anyarray, ...anyarray1];
//  console.log(newarray);
// =============================objects===============
// let anysym = Symbol("an") 
// let myObj = {name: "ali", age: 24, username: "alayiansaeed",
// [anysym] :"key2"};
// console.log(myObj.age);
// console.log(myObj[anysym]);
// console.log(myObj["name"]);
// console.log(myObj.age);// change any value of object.


// Object.freeze(myObj)//  freez the value of object
// myObj.age = 34;
// console.log(myObj.age);// change will not propogate in  value of object.


// const myobj = new Object();  // non- singelton object

// myobj.id = "djfjkd";
// console.log(myobj);
   
// const nestedObj =    // it is a nested object
// {Name: "ali", Fullname: {
//     firstName: "alayian",
//     lastName: "saeed"}
// }

// console.log(nestedObj.Fullname.lastName)


// ==================spread to combine multiple object=============
// let anyobj1 = {a:1,b: 2}
// let anyobj2 = {c:1,b: 2}
// let anyobj3 = {e:1,d: 2}

// let spreadobj = {...anyobj1, ...anyobj2, ...anyobj3};
// console.log(spreadobj);

// ============array of object=========

// let anyarray = [
//     {a:1, gamil: "skdjfs@gamil.com"},
//     {b:1, gamil: "skdjfs@gamil.com"},
// ]

// console.log(anyarray[0].gamil)

// ======print keys of object in an array========

// let anyobj= {a:1, gamil: "skdjfs@gamil.com"};
// let newarr = console.log(Object.keys(anyobj))