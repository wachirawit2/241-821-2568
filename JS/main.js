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
/**let conter = 0;
while (conter < 5){ // ture
    console.log("conter");
    //conter = conter + 1; มีสองแบบ 
    conter += 1;
    console.log("while :", conter);
}

for (let i = 0; i < 4; i = i + 1){
    console.log ("for:',",i);
}
*/
/**
 array

 */

let age1 = 25;
let age2 = 30;
let age3 = 35;

let ages = [25, 30, 35];

console.log(ages); //[25, 30 ,35]
console.log(ages[1]); //25 30 35

ages =[40 , 45 , 50];
console.log(ages); //[40, 45 ,50]

// ต่ออาเรย์
ages.push(55);
console.log(ages); //[40, 45 ,50, 55]

//ความยาวของอาเรย์
console.log(ages.length); //4

// ลบสมาชิกตัวสุดท้ายของอาเรย์
ages.pop();
console.log(ages); //[40, 45 ,50]   

if (ages.includes(45)){
    console.log("พบ 45 ใน อารเย์"); // พบ 45 ในอาเรย์
}
let number = [90, 60, 80, 40, 50];
number.sort();
console.log(number); // [40, 50, 60, 80, 90]

let Names = ["john","jane","doe"];
Names.push("Smith");
console.log(Names);
console.log(Names.length);

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}



/**
 object
 */
/** 
let student = [{
    age: 20,
    Name: "Emma",
    Grade: "A"
},{
    age: 22,
    Name: "Liam",
    Grade: "A"
}];

for (let i = 0; i < student.length; i++){
    console.log(" Student " + (i + 1 )+ ":")
    console.log(" Name:", student[i].Name);
    console.log(" Age:", student[i].age);
    console.log(" Grade:", student[i].Grade);
}

student.push({
    age: 21,
    name: "Olivia",
    grade: "A"
});
console.log(student);
*/
/**
function
 */

//ประกาศฟังก์ชัน

function calculate_grade(score){
    if (score >= 80){
        return 'A';
    } else if (score >= 70){
        return 'B';
    } else if (score >= 60){
        return 'C';
    } else if (score >= 50){
        return 'D';
    } else {
        grade = 'F';
    }
    return grade;

}
// เรียกใช้ฟังก์ชัน
let student_score = 85;
let student_grade = calculate_grade(student_score);
console.log("Student Grade is : " + student_grade); 
/**
 arry
 */
let scores = [10, 20, 30, 40, 50];

for (let i = 0; i < scores.length; i++) {
    console.log(`Score at index ${i} is ${scores[i]}`);
     //console.log('Score at index ${i} is ${i} is ${scores[i]}');
}
/**scores.forEach((s) => {
    console.log('score', s);
})
*/
/** 
scores = scores.map((s) => {
    return s * 2
})

scores.forEach((s, index) => {
    console.log('new Score:',s)
})
*/

let score = [10, 20, 30, 40, 50];


for (let index = 0; index <score.length; index++){
    console.log('score', score[index])

}


 score.forEach((s)=>{
    console.log('new score:',s)
 })

 
  

/**
 *  Object + function
 */

let students = [
    {
        name:'aa',
        score:'50',
        grade:'A'
    },
    {
        name:"bb",
        score:'60',
        grade:'B'
    }
]

console.log('Student : ',students[0])

let student = students.find((s) => {
    if (s.name == 'bb'){
        return true
    } else {
        return false
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
})

console.log('student:',student)
console.log(doublescore_student)

let highscore_student = students.filter((s) => {
    if (s.score >= 110) {
        return true
    }
})

console.log('highscore_student:',highscore_student)
