//1

// let user = {
//     userName: 'Inga',
//     programLanguage: 'JS',
//     numberOfGroup: 1
// }

// class Developer {
//     constructor(param) {
//         this.name = param.userName,
//             this.programLanguage = param.programLanguage
//     }
//     say() {
//         console.log(this.name, 'работает с',
//             this.programLanguage);
//     }
// }

// const myUser = new Developer(user);

// console.log(myUser);

// class Student extends Developer {
//     constructor(param) {
//         super(param);

//         this.numberOfGroup = param.numberOfGroup;
//     }
//     say() {
//         super.say()
//     }
// }

// const myUser2 = new Student(user);
// console.log(myUser2);

//2

// String.prototype.addExclMark = function() {
//     return this + '!'
// }

// let str = 'Inga';
// console.log(str.addExclMark());

//3

//let num = new Number(29);

//Number.prototype.divideNumberByTwo = function() {
//return this / 2;
//}

//console.log(num.divideNumberByTwo());