let fontSizeControl = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

fontSizeControl.addEventListener('input', event => {
    text.style.fontSize = event.currentTarget.value + 'px';
});