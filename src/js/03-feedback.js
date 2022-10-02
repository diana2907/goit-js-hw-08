import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
loadPage();
form.addEventListener('input', throttle(onInput, 500));

function onInput(evt) {
  evt.preventDefault();

  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadPage() {
  const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsed) {
    input.value = parsed.email;
    textarea.value = parsed.message;
    formData.email = parsed.email;
    formData.message = parsed.message;
  }
}

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.clear();
  evt.currentTarget.reset();
}
