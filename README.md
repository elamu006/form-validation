Form Validation using HTML, CSS & JavaScript

A simple and responsive Form Validation Project built using HTML, CSS, and JavaScript.
This project validates user input fields such as username, email, password, and confirm password before submitting the form.

Live Demo

View Live Project

Features
Responsive form design
Real-time validation
Username validation
Email format validation
Password strength checking
Confirm password matching
Error messages for invalid inputs
Success indication for valid inputs
Technologies Used
HTML5 – Structure of the form
CSS3 – Styling and responsiveness
JavaScript (ES6) – Validation logic
Project Structure
form-validation/
│
├── index.html
├── style.css
├── script.js
└── README.md
Validation Rules
Field	Validation
Username	Cannot be empty
Email	Must contain valid email format
Password	Minimum 6 characters
Confirm Password	Must match password


How It Works
User fills out the form.
JavaScript checks each field:
Empty fields
Email pattern
Password length
Password match
Error messages appear if validation fails.
Form submits only when all fields are valid.

Client-side validation improves user experience and provides instant feedback.

Getting Started
Clone the Repository
git clone https://github.com/elamu006/form-validation.git
Open Project

Simply open index.html in your browser.

Example JavaScript Validation
function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}
Future Improvements
Add mobile optimization
Add password visibility toggle
Add backend validation
Store form data using database/API
Learning Purpose

This project is perfect for beginners learning:

DOM Manipulation
Form Handling
Event Listeners
JavaScript Validation Techniques

Modern form validation commonly combines HTML validation with JavaScript for better UX.

Author

Elamurugan

GitHub: elamu006 GitHub Profile
License

This project is open-source and available under the MIT License.
