import Thrrottle from "lodash.throttle";
const obj = {
    email: "",
    message: ""
};

const form = document.querySelector('form');
const input = form.querySelector('input')
const textarea = form.querySelector('textarea')

saveForm();

form.addEventListener('input', Thrrottle(setLocalStorageValue,500) )

function setLocalStorageValue(e) {
      obj[e.target.name] = e.target.value;
    
  
    
   localStorage.setItem("feedback-form-state", JSON.stringify(obj));  
}


form.addEventListener("submit", onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();  
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state")
}


function saveForm() {
    const saveMesssage = JSON.parse(localStorage.getItem("feedback-form-state"));
  
    if (saveMesssage) {
        input.value = `${saveMesssage.email}`;
        textarea.value = `${saveMesssage.message}`
    }
}