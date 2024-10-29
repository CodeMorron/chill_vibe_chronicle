let nameBox = document.getElementById('nameBox');
let emailBox = document.getElementById('emailBox');
let msgBox = document.getElementById('msgBox');

// Email validation function
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Main function to check fields and send mail
function checkFields() {
    if (nameBox.value !== '' && emailBox.value !== '' && msgBox.value !== '') {
        if (!isValidEmail(emailBox.value)) {
            alert('Please enter a valid email address');
            return;
        }

        let subject = encodeURIComponent('Contact Form Message');
        let body = encodeURIComponent(`Name: ${nameBox.value}\nEmail: ${emailBox.value}\nMessage: ${msgBox.value}`);
        let mailtoLink = `mailto:${emailBox.value}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
        alert('Thank you! Your message is being processed.');
        
        // Clear the fields
        nameBox.value = '';
        emailBox.value = '';
        msgBox.value = '';
    } else {
        alert('All fields must be completed');
    }
}
