const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const greetingText = document.querySelector(".js-greetingText");
const showToDoText = document.querySelector(".js-toDoText");
const showToDoForm = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askFormName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Have a nice day!, ${text}.`
    greetingText.style.visibility = 'hidden';
    showToDoText.style.visibility = 'visible';
    showToDoForm.style.visibility = 'visible';
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askFormName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();