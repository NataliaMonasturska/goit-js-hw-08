import Thrrottle from "lodash.throttle";
const a = {};
saveForm();
const form = document.querySelector('form');
console.log(form);
form.addEventListener('input', Thrrottle(setLocalStorageValue,500) )

function setLocalStorageValue(e) {
      a[e.target.name] = e.target.value;
    
    console.log(e.target.name);
    // let x = e.target.value;
    
   localStorage.setItem("feedback-form-state", JSON.stringify(a));  
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
    // const s = saveMesssage[e.target.name]; 
    if (saveMesssage) {
        a.textarea.value = s;
    }
}