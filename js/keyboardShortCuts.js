document.addEventListener('keydown', logKey);
let keys = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'];
function logKey(e) {
    keys.forEach(key => {
        if(e.code == key){
            updateSelected(keys.indexOf(key)+1);
        }
    });
}