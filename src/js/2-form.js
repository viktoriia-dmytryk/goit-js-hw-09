const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('[name="email"]');
const textArea = form.querySelector('[name="message"]');

form.addEventListener('input', onFormInput);
form.addEventListener('submit', event => {
  event.preventDefault();
  if (inputEmail.value.trim() === '' || textArea.value.trim() === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  form.reset();
  formData.email = '';
  formData.message = '';
  localStorage.removeItem('feedback-form-state');
});

const savedInput = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedInput) {
  inputEmail.value = savedInput.email || '';
  textArea.value = savedInput.message || '';

  formData.email = inputEmail.value;
  formData.message = textArea.value;
}

function onFormInput(event) {
  if (event.target.name === 'email') formData.email = event.target.value.trim();
  if (event.target.name === 'message')
    formData.message = event.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
