const display=document.getElementById('Display');

function addToDisplay(value) {
    display.value+=value;
}
function Calculate(){
    try {
        display.value=eval(display.value);
    } catch (error) {
        display.value="Error";
    }
    
}
function clearScreen(){
    display.value="";
}