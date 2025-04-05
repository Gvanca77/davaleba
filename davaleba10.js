

1//დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს//
function greaterNumber(m = 10, n = 5) {
   if (m > n) { return m; }
   else if (n.m) { return n; }

   else {
      return 0;
   }
}
2//დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი//
const addNumers = (a, b) => a + b;
console.log(addNumbers(3, 5))
3//დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)//
function personName() {
   console.log("gvanca abramishvili")
}
personName()

4//დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)//
let perso = {
   firstName: 'gvanca',
   lastName: 'abramishvili',

}
return (firstName + '' + lastName)
console.log(personName(firstName, lastName))
   
//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)//

let studeent = {
   firstName: "gvanca",
   lastName: "abramishvili",
   fullName: function () {
      return this.firstName + " " + this.lastName;
   }
};

console.log(studeent.fullName());

7//Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს//
let student = {
   firstName: "gvanca",
   lastName: "abramishvili",
   scoreRate: [4, 7, 5, 3, 2],
   age: 32,
   totalScore: function () {
      sum = 0

      for (i = 0; i <= this.scoreRate.length; i++) {
         sum += this.scoreRate[i];
      }
      return sum
   }
}


console.log(student.totalScore())

8//დაბეჭდეთ სტუდენტის სახელი და ასაკი
let student1 = {
   firstName: "gvanca",
   age: 32,
}
console.log(student1(firstName))
console.log(student(age))