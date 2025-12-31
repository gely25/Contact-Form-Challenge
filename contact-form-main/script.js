const form=document.querySelector("form");
const firstName= document.querySelector("#first-name");
const lastName= document.querySelector("#last-name");
const email= document.querySelector("#email");
const message= document.querySelector("#message");
const queryTypes=document.querySelectorAll('input[name="queryType"]');
const consent= document.querySelector('input[name="consent"]');

const successMessage = document.querySelector(".success-message");

function showError(input, message){
    // el input es el parametro que recibimos del campo especiifco . con parentElement pedimos obtener el padre del contenedor que tiene input enviado para asegurarnos de solo obtneer ese error y no el resto 
    // “Dentro de este div, búscame el primer elemento con la clase .error-message”
    const error= input.parentElement.querySelector(".error-message");
    // Text.content obtiene el texto que contiene la etiqueta de texto como p h3, h2, h1 etc 
    error.textContent= message;
    // todos los elementos tienen style representa los inline
    error.style.display= "block";
}

function showError(input, message){
    const container= input.parentElement;
    const error = container.querySelector(".error-message")
    error.textContent= message;
    error.style.display= "block"
    container.classList.add("error")
}

function hideError(input){
    const container= input.parentElement
    const error= container.querySelector(".error-message");
    error.style.display= "none";
    container.classList.remove("error");
}


// validar campos 

form.addEventListener("submit",function (e){
    e.preventDefault();

    let isValid= true;

    if (firstName.value.trim()===""){
        showError(firstName, "This field is required");
        isValid=false;
    }else{
        hideError(firstName)
    }


    if (lastName.value.trim()===""){
        showError(lastName, "This field is required");
        isValid= false;
    } else{
        hideError(lastName)
    }


    if (message.value.trim()===""){
        showError(message, "This field is required");
        isValid= false;

    }else {
        hideError(message)
    }


    if (email.value.trim()=== ""){
        showError(email,"This field is required");
        isValid=false;
    }else if (!email.checkValidity()){
        showError(email,"Please enter a valid email address")
        isValid= false;
    }else{
        hideError(email);
    }


    // validar radio buttons 
    let querySelected= false;
    
    queryTypes.forEach(radio => {
        if (radio.checked) {
            querySelected = true
        }
    });

    const queryError= document.querySelector(".querytype") .querySelector(".error-message");

    if(!querySelected) {
        queryError.style.display = "block";
        isValid= false;

    }else {
        queryError.style.display= "none"
    }


    const consentError = consent.closest(".consentimiento")
    .querySelector(".error-message");

    if (!consent.checked){
        consentError.style.display= "block"
        isValid= false;

    }else{
        consentError.style.display= "none";
    }

    if (isValid) {
        successMessage.style.display= "block";
        form.reset();

    setTimeout(() => {
        successMessage.style.display= "none";
    }, 4000);

    }




})


