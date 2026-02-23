const display = document.getElementById('display');
const history = document.getElementById('history');

// Taking Input
function inputNum(num) {
    display.value += num ;
}
// Clear all
function clearall() {
    display.value = '';
    history.innerText = '';
}
// Backspace
function backspace() {
    display.value = display.value.slice(0,-1);
}
// operation
function inputOp(op) {
    if (display.value === "") return;
    display.value += op;
}
// spectial operation
function appendspecial(symbol) {
    display.value += symbol ;
}
// solution code
function solve() {
    try {
        let expression = display.value;
        let calcExpression = expression
            .replace(/√/g, 'Math.sqrt(')
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        const openBrackets = (calcExpression.match(/\(/g) || []).length;
        const closeBrackets = (calcExpression.match(/\)/g) || []).length;
        for (let i = 0; i < openBrackets - closeBrackets; i++) {
            calcExpression += ')';
        }
        history.innerText = expression;
        display.value = eval(calcExpression); // Result display par
        
    } catch (err) {
        display.value = "ERROR";
        setTimeout(clearall, 1500);
    }
    function appendspecial(symbol) {
    display.value += symbol;
}
}

// for Keyboard interactive
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') inputNum(e.key);
    if (e.key === '+') inputOp('+');
    if (e.key === '-') inputOp('-');
    if (e.key === '*') inputOp('*');
    if (e.key === '/') inputOp('/');
    if (e.key === 'Enter') solve();
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Delete') clearall();
});