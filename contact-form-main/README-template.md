# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img width="1287" height="952" alt="image" src="https://github.com/user-attachments/assets/f6b1d1d5-203f-419d-8863-d256a1701117" />
<img width="775" height="811" alt="image" src="https://github.com/user-attachments/assets/a7f1d8a1-da09-4d56-8e44-17e1d04cded4" />
<img width="1526" height="893" alt="image" src="https://github.com/user-attachments/assets/feae0485-0775-476f-8911-8de0755b54b3" />
<img width="1192" height="826" alt="image" src="https://github.com/user-attachments/assets/ec661634-7974-4432-ad7b-754de4103a5c" />


### Links

- Solution URL: https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj
- Live Site URL: https://dapper-heliotrope-3cd01c.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
-JavaScript

### What I learned


.querytype label:has(input:checked){
    border-color: var(--Green-600);
    background-color: var(--Green-200);
    border: 2px solid green;
    
}

input[type="radio"],
input[type="checkbox"]{
    accent-color: var(--Green-600);
}


input{
    cursor: pointer;
}

input,
textarea{
    outline: none;
}


input:focus-visible,
textarea:focus-visible{
    outline: 0px solid var(--Green-600);
}



/* estado válido */
input:valid,
textarea:valid {
  border: 0.8px solid var(--Green-600);
}

/* estado inválido SOLO tras interacción */
input:invalid:not(:focus):not(:placeholder-shown),
textarea:invalid:not(:focus):not(:placeholder-shown) {
  border: 0.8px solid var(--Red);
}




/*  SIEMPRE AL FINAL para evitar que tenga más relevancia y se sobreponga poara hover y focus */
input:hover,
textarea:hover,
input:focus,
textarea:focus {
  border: 1.7px solid var(--Green-600);
}

button:hover{
    cursor: pointer;
}


### Continued development

responsive
JavaScript DOM management


### Useful resources
https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjM3NXB4IiwibWF4V2lkdGgiOiI3MjVweCIsIm1pbkZvbnRTaXplIjoiMTRweCIsIm1heEZvbnRTaXplIjoiMTZweCJ9
This help me to make the fonts responsive with the clamp function
this concept.


## Author




## Acknowledgments
