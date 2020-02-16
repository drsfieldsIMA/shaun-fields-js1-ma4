// Question 1
// Write code that checks that the firstName input's value
// is at least 2 characters long when the form is submitted.

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

            if (checkInputLength(firstNameValue) === true) {
                firstNameError.style.display = "none";
            } else {
                firstNameError.style.display = "block";
            }
}

function checkInputLength(value) {
    // trim the value
    const trimmedValue = value.trim();

            // if the value's length is greater than 2 return true
            if (trimmedValue.length > 2) {
                console.log("Your input was greater than 2 characters")
                return true;
            } else {
                console.log("Your input was not greater than 2 characters")
                return false;
            }
}
// Answer 1
// The form was submitted                                    question_1.js:11
// Your input was greater than 2 characters                  question_1.js:30