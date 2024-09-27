let num_1 = prompt("Enter a number: ")
num_1 = Number(num_1)

let num_2 = prompt("Enter a second number: ")
num_2 = Number(num_2)


let interval = []

if (num_1 <= num_2) {
    for (let i = num_1; i <= num_2; i++) {
        interval.push(i)
    }
}

else if (num_1 >= num_2) {
    for (let i = num_1; i >= num_2; i--) {
        interval.push(i)
    }
}

alert(interval.join(", "))



