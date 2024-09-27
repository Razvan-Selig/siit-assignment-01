console.log("main.js is loaded")

let x = prompt("Enter a distance: ")
/* x = Number(x) */

let y = x * 0.62

if (isNaN(x)) {
    alert(`The distance ${x} is invalid`)
} else {
    alert(`The distance you entered is ${x} and in miles is: ${y}`)
}