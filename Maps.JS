//Maps :- Data store in Key value paire
//Diff bw Object & Map->key can have any type but obj key always in string

const rest = new Map();
rest;
rest.set("name", "shivam");
rest.set(1, "india"); //update a Map & return a value
rest.set(2, "china");
rest;
rest
  .set("categories", ["indian", "china", "Amirican", "italian"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

rest;

console.log(rest.get(true)); //get the value in the map
console.log(rest.get("1"));
console.log(rest.get(1));
//Example
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
//-----Has Method----
console.log(rest.has("categories"));
rest.delete("name");
rest;
//--size property---
console.log(rest.size);
//clear property
// rest.clear(); //clear all the map
rest;
//-----------------------------------

const arr = [1, 2];
// rest.set([1, 2], "Test");
rest.set(arr, "Test");
rest;
console.log(rest.size);
// console.log(rest.get([1, 2]));
console.log(rest.get(arr));
//-------------------------------------------------------
//----------Map Iteration---------------------------
const question = new Map([
  ["question", "what is the best programming language in the world"],
  [1, "c"],
  [2, "Java"],
  [3, "java Script"],
  ["Correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
question;
//---Convert object into map
openingHour = {
  Mon: {
    open: 11,
    close: 23,
  },
  tues: {
    open: 10,
    close: 23,
  },
  wed: {
    open: 9,
    close: 23,
  },
};
openingHour;

console.log(Object.entries(openingHour)); //convert into Array
const hourMap = new Map(Object.entries(openingHour));
hourMap; //convert into MAP

//---------
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key == "number") {
    console.log(`Answer ${key} & ${value}`);
  }
}
// const answer = Number(prompt("your ansewer"));
const answer = 3;
answer;
console.log(question.get(question.get("Correct") === answer));
//---------------
//Convert Map into Array
console.log([...question]);
// console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
