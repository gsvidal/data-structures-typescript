import { CustomArray } from "./data-structures/array";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    
  </div>
`;

const newArray = new CustomArray();
console.log(newArray);
const arrayLength = newArray.push("Gonza");
console.log(arrayLength);
newArray.push("Wiu");
console.log(newArray);

const length = newArray.unshift("Osita")
console.log(length)
console.log(newArray);

const value = newArray.shift()
console.log(value)
console.log(newArray);

const lastValue = newArray.pop()
console.log(lastValue)
console.log(newArray);
