function runForLoop() {
    const num = parseInt(document.getElementById('forNum').value);
    const text = document.getElementById('forText').value;
    const out = document.getElementById('forOutput');
   
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i}. ${text}<br>`;
    }
    out.innerHTML = result;
}
 
 
function runWhileLoop() {
    const num = parseInt(document.getElementById('whileNum').value);
    const text = document.getElementById('whileText').value;
    const out = document.getElementById('whileOutput');
   
    let result = "";
    let i = 1;
    while (i <= num) {
        result += `${i}. ${text}<br>`;
        i++;
    }
    out.innerHTML = result;
}
 
 
function runDoWhile() {
    const num = parseInt(document.getElementById('doNum').value);
    const text = document.getElementById('doText').value;
    const out = document.getElementById('doOutput');
   
    let result = "";
    let i = 1;
    if (!isNaN(num) && num > 0) {
        do {
            result += `${i}. ${text}<br>`;
            i++;
        } while (i <= num);
    }
    out.innerHTML = result;
}
 
 
function clearFor() {
    document.getElementById('forNum').value = "";
    document.getElementById('forText').value = "";
    document.getElementById('forOutput').innerHTML = "";
}
 
function clearWhile() {
    document.getElementById('whileNum').value = "";
    document.getElementById('whileText').value = "";
    document.getElementById('whileOutput').innerHTML = "";
}
 
function clearDo() {
    document.getElementById('doNum').value = "";
    document.getElementById('doText').value = "";
    document.getElementById('doOutput').innerHTML = "";
}