const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;

function generateResume(): void {
    // Retrieve values from the form
    
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
   

     const uniquePath = `resume/${firstName.replace(/\s+/g, '_')}_cv.html`
   
  

    // Create resume content
    const resumeHTML = `
    
        <p><strong>firstName:</strong> <span id="edit-firstName" class="editable">${firstName}</span></p>
        <p><strong>lastName:</strong> <span id="edit-lastName" class="editable">${lastName}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>
        <p><strong>education:</strong> <span id="edit-education" class="editable">${education}</span></p>
        <p><strong>experience:</strong> <span id="edit-experience" class="editable">${experience}</span></p>
        <p><strong>skills:</strong><span id="edit-skills" class="editable">${skills}</span></p>
        
        
    `;
    

    const sharelink = document.createElement('a')
    sharelink.href = 'data:text/html;charset=utf-8,' +encodeURIComponent(resumeHTML)
    sharelink.download = uniquePath
    sharelink.textContent = 'copy shareable link';






    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');

    resumeOutput.appendChild(sharelink);

   

    const buttonsContainer = document.createElement('div')
    buttonsContainer.id = "buttonsContainer";
    resumeOutput.appendChild(buttonsContainer);


const downloadButton = document.createElement("button");
downloadButton.textContent = "Download as PDF";
downloadButton.addEventListener("click",()=>{
    window.print();
});
buttonsContainer.appendChild(downloadButton);


    
    
makeEditable();
}








// Add event listener to the button
const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
generateButton.addEventListener('click', generateResume);

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element=>{
        element.addEventListener('click', function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";



            if(currentElement.tagName === 'p' || currentElement.tagName === 'span'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')


                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })





                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus();



            }
        })
    })
}