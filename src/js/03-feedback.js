import throttle from "lodash.throttle";

const Key = "feedback-form-state";

const feedbackForm = document.querySelector('.feedback-form');
const text = document.querySelector('.feedback-form textarea');
const userEmail = document.querySelector('.feedback-from input');

feedbackForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    console.log(JSON.parse(localStorage.getItem(Key)));
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(Key);
};

feedbackForm.addEventListener('input', throttle(onAreaInput, 500));

function onAreaInput() {
    const formInfo = {
        text: text.value,
    }
    localStorage.setItem(Key, JSON.stringify(formInfo));

}

function fillTextArea() {
    const data = JSON.parse(localStorage.getItem(Key));
    if (data) {
        userEmail.value = data.userEmail;
        text.value = data.text;
    }
}

fillTextArea();