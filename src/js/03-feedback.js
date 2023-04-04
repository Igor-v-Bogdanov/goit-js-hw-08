import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
let formData = {};

form.addEventListener('input', throttle(saveInputText, 500));
form.addEventListener('submit', onFormSubmit);

fillingForm();

function saveInputText(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function fillingForm() {
  const savedString = localStorage.getItem('feedback-form-state');
  const parsedString = JSON.parse(savedString);
  if (savedString) {
    //   console.log(parsedString);
    // if (parsedString.email) {
    form.elements.email.value = parsedString.email;
    // }
    // if (parsedString.message) {
    form.elements.message.value = parsedString.message;
    // }
  }
  formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
}
