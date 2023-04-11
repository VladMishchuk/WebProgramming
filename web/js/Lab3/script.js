let 
    inputs = document.querySelectorAll(".input"),
    val;
    
function equation() {
    let a = parseInt(document.getElementById("a").value),
        b = parseInt(document.getElementById("b").value),
        c = parseInt(document.getElementById("c").value);

        document.getElementById("a").value === "" | 
        document.getElementById("b").value === "" |
        document.getElementById("c").value === ""
            ? alert("Введіть усі дані")
            : a + b < c | a + c < b | b + c < a
                ? alert("Трикутник не існує")
                : document.getElementById("perimetr").value = a + b + c
}

inputs.forEach(input => {
    input.addEventListener("input", e => {
        val = input.value.replace(/[^0-9]/g, '');
        input.value = val;
    });
});