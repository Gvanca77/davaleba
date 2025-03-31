//Დაბეჭდეთ რიცხვები 2 დან 8 მდე//
for (i = 2; i < 9; i++) {
    console.log(i)

}


//5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
//

for (let i = 5; i <= 35; i += 4) {
    console.log(i);
}

//Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)//
const person= {
    firstName: 'gvanca',
    lastName: 'abramishvili',
    age: 32
} 

console.log(person)
 //დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value//
const personerson ={
     firstName: 'gvanca',
    lastName: 'abramishvili',
    age: 32
 }

   console.log (person.firstName)
   console.log (person.lastName)
 console.log(person.age)

 //დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი//
 let  fruits = ["Apple","Banana","Orange"];
for (let i=0; i<fruits.length; i++ ){
    console.log (fruits[i])
}
//დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits//
let  fruit1 = ["Grapes","Apple","Banana","Orange","Pinapples"];
 console.log (fruit1)