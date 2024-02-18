document.getElementById('education-level').addEventListener('change', function() {
    var highSchoolDetails = document.getElementById('high-school-details');
    var undergraduateDetails = document.getElementById('undergraduate-details');
    var graduateDetails = document.getElementById('graduate-details');

    highSchoolDetails.style.display = 'none';
    undergraduateDetails.style.display = 'none';
    graduateDetails.style.display = 'none';

    var selectedOption = this.value;
    if (selectedOption === 'high-school') {
      highSchoolDetails.style.display = 'block';
    } else if (selectedOption === 'undergraduate') {
      undergraduateDetails.style.display = 'block';
    } else if (selectedOption === 'graduate') {
      graduateDetails.style.display = 'block';
    }
  });
// Buttons adding additional skill input texts
function addAdditionalField(containerId, inputName, placeholderText) {
var container = document.getElementById(containerId);
var existingButtons = container.querySelectorAll('.add-button');

// Remove existing "+" buttons
existingButtons.forEach(function(button) {
button.remove();
});

// Add a new input field and "+" button with the specified placeholder text
var newField = document.createElement('div');
newField.innerHTML = `
<input type="text" class="additional-input" name="${inputName}${container.children.length + 1}" placeholder="${placeholderText}">
<button type="button" class="add-button">+
`;
container.appendChild(newField);
}

// Add more skills and licenses/certifications
document.getElementById('additional-skills-container').addEventListener('click', function (event) {
if (event.target.classList.contains('add-button')) {
addAdditionalField('additional-skills-container', 'additional-skills-', 'Add another skill');
}
});

document.getElementById('additional-licenses-container').addEventListener('click', function (event) {
if (event.target.classList.contains('add-button')) {
addAdditionalField('additional-licenses-container', 'additional-licenses-', 'Add another license or certification');
}
});

// Submit:
document.addEventListener('DOMContentLoaded', function () {
var applicationBox = document.querySelector('.Application-box');
var resultBox = document.getElementById('resultBox');
var submitButton = document.getElementById('submitButton');
var printButton = document.getElementById('printButton');

// Unhide Results
function showResultBox() {
applicationBox.style.display = 'none';
resultBox.style.display = 'block';
}

// Confirmation
function submitApplication() {
var isConfirmed = confirm("Are you sure you want to submit your application?");
if (isConfirmed) {
  showResultBox();
}
}

// Interactivity
submitButton.addEventListener('click', submitApplication);
});