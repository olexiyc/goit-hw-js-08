import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector('.feedback-form');
const message = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

feedbackForm.addEventListener('submit', onSubmit);
feedbackForm.addEventListener('input', throttle(onAreaInput, 500));

function onSubmit(event) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};


function onAreaInput() {
    const formInfo = {
        message: message.value,
        email: email.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));

}

function fillTextArea() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data) {
        email.value = data.email;
        message.value = data.message;
    }
}

fillTextArea();