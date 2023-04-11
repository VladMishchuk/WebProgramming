function start() {
    let numbers = [],
        sum = 0;

    while (true) {
        let input = prompt("Введіть ціле число:");
        if (input === null | input === "" | isNaN(input)) {
            break;
        }
        
        let number = parseInt(input)
        console.log(number);
        !isNaN(number)
            ? numbers.push(number)
            : alert("Невірно введене числo")
    }

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    document.getElementById("a").innerHTML = numbers.length;
    document.getElementById("b").innerHTML = sum;
}