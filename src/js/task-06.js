let valInput = document.getElementById('validation-input');

let handleLenght = function (e) {
let inputValue = this.value.trim().length;

let requiredLength = e.target.dataset.length;

if (inputValue === parseInt(requiredLength)) {
valInput.classList.remove('invalid');
valInput.classList.add('valid');
} else {
    valInput.classList.remove('valid');
    valInput.classList.add('invalid');
}
};

valInput.addEventListener('blur', handleLenght);