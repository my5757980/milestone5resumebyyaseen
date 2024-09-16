var form = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
var resumeContent = document.getElementById('resumeContent');
function generateResume() {
    // Retrieve values from the form
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var uniquePath = "resume/".concat(firstName.replace(/\s+/g, '_'), "_cv.html");
    // Create resume content
    var resumeHTML = "\n    \n        <p><strong>firstName:</strong> <span id=\"edit-firstName\" class=\"editable\">".concat(firstName, "</span></p>\n        <p><strong>lastName:</strong> <span id=\"edit-lastName\" class=\"editable\">").concat(lastName, "</span></p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n        <p><strong>education:</strong> <span id=\"edit-education\" class=\"editable\">").concat(education, "</span></p>\n        <p><strong>experience:</strong> <span id=\"edit-experience\" class=\"editable\">").concat(experience, "</span></p>\n        <p><strong>skills:</strong><span id=\"edit-skills\" class=\"editable\">").concat(skills, "</span></p>\n        \n        \n    ");
    var sharelink = document.createElement('a');
    sharelink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeHTML);
    sharelink.download = uniquePath;
    sharelink.textContent = 'copy shareable link';
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
    resumeOutput.appendChild(sharelink);
    var buttonsContainer = document.createElement('div');
    buttonsContainer.id = "buttonsContainer";
    resumeOutput.appendChild(buttonsContainer);
    var downloadButton = document.createElement("button");
    downloadButton.textContent = "Download as PDF";
    downloadButton.addEventListener("click", function () {
        window.print();
    });
    buttonsContainer.appendChild(downloadButton);
    makeEditable();
}
// Add event listener to the button
var generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateResume);
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === 'p' || currentElement.tagName === 'span') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
