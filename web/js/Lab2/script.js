let 
    inputs = document.querySelectorAll(".input"),
    value;

function equation(){
    let
        a = parseInt(document.getElementById("a").value),
        b = parseInt(document.getElementById("b").value),
        sum = 0;

    if(a > b){
        for(let i = b; i <= a; i++){
            sum += i;
        }
        document.getElementById("y").innerHTML = sum
    }
    else if(b > a){
        for(let i = a; i <= b; i++){
            sum += i;
        }
        document.getElementById("y").innerHTML = sum;
    }
    else{
        document.getElementById("y").innerHTML = sum;
    }
    alert(document.getElementById("y").innerHTML);
}


inputs.forEach(input => {
    input.addEventListener("input", e => {
        value = input.value.replace(/[^0-9]/g, '');
        input.value = value;
    });
});