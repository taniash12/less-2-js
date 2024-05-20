"use strict";
//დავალება 1

for (M = 5; M < 100; M++) {
  console.log(M);
}

//დავალება 2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (item of array1) {
  if (item > 0 && item < 10) {
    console.log(item);
  }
}

//დავალება 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (item of array2) {
  if (item == 5) {
    console.log("არის");
    break;
  }
}

//დავალება 4

let array3 = [1, 2, 3, 4, 5];
let ten = 0;
for (item of array3) {
  ten += item;
  console.log(ten);
}

// დავალება 5
let array4 = [1, 2, 3, 4, 5];
let ten85 = 0;

for (item of array4) {
  ten85 += item;
}

let tete = ten85 / array4.length;
console.log(tete);

// დავალება 6

let array5 = [1, 2, 3, 7, 6, 9];
for (item of array5) {
  if (item == 7) {
    continue;
  }
  console.log(item);
}

//დავალება 7

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);

//დავალება 8

let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

user2.age < 18 && user2.studentstatus == "active"
  ? console.log("hello user")
  : user2.name == "levani"
  ? console.log("hello levani")
  : user2.studentstatus == "active" || user2.age < 25
  ? console.log("hello anna")
  : console.log("error");

// დავალება 9

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (item of array6) {
  if (item % 2 == 0) {
    console.log(item);
  }
}

//დავალება10

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
for (item of users) {
  if (item.status == true) {
    console.log(item);
  }
}

// დავალება 11

let array7 = [32, 14, null, "40", 50];
for (item of array7) {
  if (Number(item) % 5 == 0 && item != null) console.log(item);
}

// დავალება 12

let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];
for (item of array8) {
  for (ten27 of item) {
    if (ten27 >= 0) {
      console.log(ten27);
    }
  }
}
