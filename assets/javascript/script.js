let form = document.getElementById("educationForm");
let body = document.querySelector('body');
let container = document.getElementById("container");
let submitBtn = document.getElementById('submitButton');

let totalSections = document.querySelectorAll('.qualificationContainer').length;


// console.log(form);

form.addEventListener('click', function(event){

    
    if(event.target.classList.contains('fa-plus')) {
        let parent = event.target.parentNode.parentNode;
        
        let inputContainer = document.createElement('div');
    inputContainer.classList.add('qualificationContainer');
    
    const inputFields = {
        degree : createInput('text','Degree/Certificate'),
        university : createInput('text','Institution/University'),
        major : createInput('text','Major'),
        passing : createInput('text','Year of passing'),
        addBtn : createButton('<i class="fa-solid fa-plus"></i>','addButton'),
        removeBtn : createButton('<i class="fa-solid fa-square-xmark"></i>', 'removeButton')
    }

    // const value = Object.values(inputFields);
    // console.log(value[0]);

    Object.values(inputFields).forEach(element => {
        inputContainer.appendChild(element);
    });
    
        parent.insertAdjacentElement('afterend',inputContainer);
        totalSections++;
    // console.log(totalSections);


    function createInput(type, placeholder) {
        // console.log("input");
        const input = document.createElement("input");
        // console.log(input);
        input.type=type;
        input.placeholder = placeholder;
        input.setAttribute('onkeydown', `validInput(event,'${placeholder}')`);

        // console.log(input.placeholder);
       
        return input;
    }

    function createButton(text,className) {
        // console.log("button");
        const button = document.createElement("div");
        button.innerHTML = text;
        button.classList.add(className);
        return button;
    }

    console.log(form);
    event.preventDefault();
    }
    // console.log(event.target);

    if(event.target.classList.contains('fa-square-xmark')) {
        // console.log("hit");
        // console.log(event.target);
        const parent = event.target.parentNode.parentNode;
    
        // console.log(parent);

        if(totalSections === 1) {
            event.preventDefault();
            // console.log("prevent");
        } else {
            parent.remove();
            totalSections--;
        }

        // console.log(totalSections);
    
        event.preventDefault();
    }
});

// function isEmpty() {
//     let parent = document.getElementById('personalInfoContainer');
//     let gender = document.getElementById("gender");
//     let input = parent.querySelectorAll('input');
//     // console.log(input);
//     let isValid = Array.from(input).some(inputField => inputField.value.trim() === "");
//     // console.log(isValid);

//     let isValidGender = gender.value === 'Male' || gender.value === 'Female' || gender.value === 'Other';
//     console.log(gender.value);
//     console.log(isValidGender)

//     if(isValid || !isValidGender) {
//         submitBtn.disabled = true;
//     } else {
//         submitBtn.disabled = false;
//     }
// }

// function validInput(event,input) {
//     let regexString = /^[A-Za-z. ]+$/;
//     let regexYear = /^\d/;

//         switch(input) {
//         case 'fullName' :
//         case 'fatherName' :
//         case 'motherName' :
//         case 'Degree/Certificate':
//         case 'Institution/University':
//         case 'Major':
//             validate(event,regexString);
//             break;

//         case 'Year of passing':
//             validate(event,regexYear);
//             break;
//     }

// }

// function validate(event,regex) {
//     let key = event.key;

//     if(key === 'Backspace') {
//         return false;
//     }

//     if(!regex.test(key)) {
//         event.preventDefault();
//         return true;
//     }
//     return false;
// }

// function storeData(event) {
//     let personalObject = {};
//     let personalDetails = document.getElementById('personalDetails');

//     let inputFields = Array.from(personalDetails.querySelectorAll('input'));

//     inputFields.forEach()
// }

