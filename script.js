const terminal = document.getElementById('terminal');
const inputField = document.getElementById('input');
const submitButton = document.getElementById('submit');

addToTerminal('Typ "help" om te beginnen.');

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        processCommand();
    }
}

function processCommand() {
    const command = inputField.value.toLowerCase();
    inputField.value = '';

    switch (command) {
        case 'help':
            showHelp();
            break;
        case 'opdracht1':
            startPuzzle1();
            break;
        case 'opdracht2':
            startPuzzle2();
            break;
        default:
            addToTerminal(`Commando niet herkend: ${command}`);
    }
}

function showHelp() {
    clearTerminal();
    addToTerminal('Beschikbare commando\'s: <br>- opdracht1<br>- opdracht2');
}

function startPuzzle1() {
    clearTerminal();
    addToTerminal('<h3>Opdracht 1</h3><ol><li>Details</li><li>Betekenis</li><li>Racen</li><li>Steen</li><li>Zwemmen</li><li>Hottub</li><li>Aanbevelen</li><li>Aankopers</li></ol>');
}

function startPuzzle2() {
    clearTerminal();
    addToTerminal('');
}

function clearTerminal() {
    terminal.innerHTML = '';
}

function addToTerminal(message) {
    terminal.innerHTML += `<p>${message}</p>`;
    terminal.scrollTop = terminal.scrollHeight;
}
