import { CustomArray } from "./data-structures/array";
import { HashTable } from "./data-structures/hashTable";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
  </div>
`;

// const newArray = new CustomArray();
// console.log(newArray);
// const arrayLength = newArray.push("Gonza");
// console.log(arrayLength);
// newArray.push("Wiu");
// console.log(newArray);

// const length = newArray.unshift("Osita")
// console.log(length)
// console.log(newArray);

// const value = newArray.shift()
// console.log(value)
// console.log(newArray);

// const lastValue = newArray.pop()
// console.log(lastValue)
// console.log(newArray);

const newHashTable = new HashTable(3);
console.log(newHashTable);

newHashTable.set("Gonza", "33");
console.log(newHashTable);

newHashTable.set("Wiu", "35");
console.log(newHashTable);

newHashTable.set("Lex", "6");
console.log(newHashTable);

newHashTable.set("Kakito", "16");
console.log(newHashTable);

newHashTable.set("Osa", "8");
console.log(newHashTable);
