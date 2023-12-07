

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
// console.log(result); 

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
let number = 100000;


// console.log(number.toFixed(2));
// console.log(number.toPrecision(2));
// console.log(number.toLocaleString('en-IN'));

let anotherNumber = 234.678;

console.log(Math.abs(anotherNumber));
console.log(Math.floor(anotherNumber));
console.log(Math.ceil(anotherNumber));
console.log(Math.round(anotherNumber));








