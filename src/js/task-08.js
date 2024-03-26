let form = document.querySelector('form.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();

let formElements = event.currentTarget.elements;
let email = formElements.email.value;
let password = formElements.password.value;

if (email == '' || password == '') {
    alert("Enter both input parameters!");
    form.reset();
    return false;
}
let formData = {
    email, password,
}
console.log(formData);

form.reset();

};

