import { sum } from "./utils";

interface MyWindow extends Window
{
    SUGAR?: string
}

console.log("hola mundo");

let a: number;

a = 5;
// a = "abc";

if(window.location)
{
    const b: number = sum(5, 2);
    console.log(window.location.origin, a, b);
    document.getElementById("test").innerText = b.toString();
}
else
{
    console.log("No existe location", a);
}

(window as MyWindow).SUGAR = "Hola";
console.log("ss", (window as MyWindow).SUGAR);
