//Sets--collection of unique value-Not collect duplicate Value,Set is ittrable
const orderSet = new Set(["pasta", "pizza", "pizza", "pasta", "risotto"]);
orderSet;

console.log(new Set("Hello"));

console.log(orderSet.size); //Size of Set
console.log(orderSet.has("pizza")); //check the value is there or not
orderSet.add("Garlic Bread"); //add in set
console.log(orderSet);
orderSet.delete("pizza"); //delete the value in set
orderSet;
//retrive the value in Set- no index/no required no need to getting value out of set if required then use array
// orderSet.clear();//delete all of the element
orderSet;
//sets are also ittrable/ we can loop over sets
for (const order of orderSet) {
  console.log(order);
}
//Example
const staff = ["waiter", "Chef", "waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["waiter", "Chef", "waiter", "Manager", "Chef", "Waiter"]).size
);
//How many unique letter in string
console.log(new Set("shivam Bhatia").size);
