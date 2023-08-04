//make elements available
var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("save-el")

// listen for button click
document.getElementById("increment-btn").addEventListener("click", increment);
document.getElementById("save-btn").addEventListener("click", save);
document.getElementById("delete-btn").addEventListener("click", deleteSaved);


//initial state
let count = 0

// visual increment function
function increment() {
    count += 1
    countEl.innerText = count;
}

// save function: 1) Reset countEl 2) reset counter 3) save to <p> 
function save() {
    saveEl.textContent += count + " - "
    count = 0;
    countEl.innerText = 0;
}

function deleteSaved() {
    saveEl.textContent = null
}