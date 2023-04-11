let 
    inputs = document.querySelectorAll(".input"),
    val;

function equation(){
    let a = parseInt(document.getElementById("a").value),
        b = parseInt(document.getElementById("b").value),
        y = document.getElementById("y").innerHTML;

    a === 0 & b === 0
        ? document.getElementById("y").innerHTML = "Будь яке число є розв'язком"
        : a === 0 & b !== 0
            ? document.getElementById("y").innerHTML = "Жодного розв'язку немає"
            : document.getElementById("y").innerHTML = b / a
}
inputs.forEach(input => {
    input.addEventListener("input", e => {
        val = input.value.replace(/[^0-9]/g, '');
        input.value = val;
    });
});