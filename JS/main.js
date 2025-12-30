//console.log ("Hello, World!.");
//console.log ("This is a test JavaScript file.");

/* 
console.log ("JavaScript is working!");
console.log ("Let's do some coding.");
*/
// String , number, Boolean, Object, Arry
/*
// String
let fname = "John"; // String
let age = 30; // Number
let height = 5.9; // Number
const PI = 3.14; // Constant

fname = "Alice";
console.log ("Name:", fname);
PI = 3.14
fname = "Bob";
console.log ("Name:", fname);
console.log ("Age:", age);
console.log ("Height:", height);
/*
/**
 + = บวก
 - = ลบ
 * = คูณ
 / = หาร
 % = หารเอาเศษ
 */
/*
let number1 = '10';
let number2 = '3';

let result1 = number1 + number2;
console.log ("ผลบวก = ", result1);
*/
/*
 == เท่ากับ (เปรียบเทียบค่า)
 != ไม่เท่ากับ (เปรียบเทียบค่า)
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าหรือเท่ากับ
 <= น้อยกว่าหรือเท่ากับ
  */
 
 /*let number1 = 5;
 let number2 = 5;
 /** let condition = number1 <= number2; // Boolean ค่าความจริง ture/false
 console.log ("condition=", condition);
    
 if (number1 > number2) {
        console.log ("number1 is greater than or equal to number2");
    } else if (number1 < number2) {
        console.log('this is else if');

    } else {
        console.log('this is else');
    }   
 
 */

/**
Grade 
    >=80 เป็นเกรด A
    >=70 เป็นเกรด B 
    >=60 เป็นเกรด C
    >=50 เป็นเกรด D
    <50 เป็นเกรด F
  
 */
 /*
    let score = 75;
 // if - else condition
    if (score >= 80) {
        console.log ("A");
    } else if (score >= 70) {
        console.log('B');
    }else if (score >= 60)
        console.log('C');
    else if (score >= 50) {
        console.log('D');
    
    }else {
        console.log('F');
    }        
*/
/**
 * && แลพ
 * || หรือ
 * ! mot หรือ ไม่
 * 
*/
/** 
    let number1 = 85;
    let number2 = 90;

    let condition = (number1 > 0) || (number2 > 0) // Ture   Ture = Ture
    console.log("condition1:", condition1)

    let age = 25
    let gender = "female"
    if (age >= 18 && gender == "female"){
        console.log ("คุณสามารถเข้าร่วมกิจการรมได้");
}
*/
/** 
let number1 = 20;

if( number1 % 2 == 0){
    console.log ("เป็นเลขคู่");
}
else {
    console.log ("เป็นเลขคี่");
}
*/
/**
 while
 for
 */
let conter = 0;
while (conter < 5){ // ture
    console.log("conter");
    //conter = conter + 1; มีสองแบบ 
    conter += 1;
    console.log("while :", conter);
}

for (let i = 0; i < 4; i = i + 1){
    console.log ("for:',",i);
}

