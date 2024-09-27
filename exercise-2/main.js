let num = prompt("Enter a number: ")
num = Number(num)


if (num % 3 == 0 && num % 5 == 0) {
    alert(`${num} is divisible by both 3 and 5`)
} else if (num % 3 == 0) {
    alert(`${num} is divisible by 3`)
}
 else if (num % 5 == 0) {
    alert(`${num} is divisible by 5`)
}




/* else {
    alert(`${num} is not divisible with 3 or 5`)
} */