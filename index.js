// le

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


// data types==============================

// Number
// BigInt
// String
// Boolean
// null   // empty value also stand alone value
// undefined  //  not defined
// Symbol // to show uniqueness of react components


// Check the types of datatypes

// let Number = 11;
// let name = "alayian"
// let val = null;
// let undefVariable = undefined;

// console.log(typeof(Number))
// console.log(typeof(name))
// console.log(typeof(val))
// console.log(typeof(undefVariable))

// typecasting in js================
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



// Prefix and postfix in increament and decreament

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


// types of datatypes================

// Premitive datatypes=========
// Number, String, boolean, null, undefined, BigInt, Symbol

// non premitive datatypes

// Array, objeect and function


// Stack and heap ================

// let number = 123;
// let numbertwo = number;
// numbertwo = 124;
// console.log(number);
// console.log(numbertwo);  

// In above code value of origanal variable doesnot change becausse it is premitive type and stored in stack
// and it get the copy of original variable not reference

let myaray = [1,3 ,4 ,5, 6, 22];

 myaray[3] = 22;
 let newaray =myaray

 console.log(myaray);
 console.log(newaray);
 

//  In above code it also change original array as it is non premitive and it stores in heap and get 
//  reference not copy
