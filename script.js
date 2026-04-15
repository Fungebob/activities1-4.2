function calculate() {
   
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
 
   
    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }
 
   
    const sum = n1 + n2;
    const difference = n1 - n2;
    const product = n1 * n2;
    const quotient = n2 !== 0 ? (n1 / n2).toFixed(2) : "Cannot divide by zero";
    const remainder = n2 !== 0 ? (n1 % n2).toFixed(2) : "N/A";
 
   
    document.getElementById('sum').innerText = sum.toFixed(2);
    document.getElementById('diff').innerText = difference.toFixed(2);
    document.getElementById('prod').innerText = product.toFixed(2);
    document.getElementById('quot').innerText = quotient;
    document.getElementById('rem').innerText = remainder;
}
 
function clearFields() {
   
    document.getElementById('sum').innerText = "";
    document.getElementById('diff').innerText = "";
    document.getElementById('prod').innerText = "";
    document.getElementById('quot').innerText = "";
    document.getElementById('rem').innerText = "";
}