let PiTextField = document.getElementById("output");
let PiDigitsField = document.getElementById("digits");
let GenerateButton = document.getElementById("generate");
let CopyButton = document.getElementById("copy");

GenerateButton.onclick = function(){
    if (PiDigitsField.value <= 307 && PiDigitsField.value >= 0) {
        PiTextField.value = BigInt(Math.floor(Math.PI * 10 ** PiDigitsField.value));
        if (PiDigitsField.value > 0)
            PiTextField.value = 
                PiTextField.value.slice(0, 1) + "." +
                PiTextField.value.slice(1);
    }
    else if (PiDigitsField.value < 0)
        alert("минимальное число знаков после запятой - 0")
    else
        alert("максимальное число знаков после запятой - 307");
}

CopyButton.onclick = function(){
    navigator.clipboard.writeText(PiTextField.value);
}

function floor(value, digits) {
    return Math.floor(value * (10 ** digits)) / 10();
}