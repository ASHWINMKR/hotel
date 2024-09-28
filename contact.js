document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Function to validate email format using Regex
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    // Function to display error messages
    function displayError(input, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        input.parentElement.appendChild(error);
        input.classList.add('error');
    }

    // Function to clear error messages
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
        document.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
    }

    // Function to handle form submission via AJAX
    function handleFormSubmit(event) {
        event.preventDefault();
        clearErrors();

        let hasErrors = false;

        // Validate name
        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'Name is required.');
            hasErrors = true;
        }

        // Validate email
        if (!validateEmail(emailInput.value)) {
            displayError(emailInput, 'Please enter a valid email address.');
            hasErrors = true;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            displayError(messageInput, 'Message is required.');
            hasErrors = true;
        }

        if (!hasErrors) {
            const formData = new FormData(form);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Thank you for your message! We will get back to you shortly.');
                        form.reset();
                    } else {
                        alert('There was an issue submitting your form. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting the form. Please try again later.');
                });
        }
    }

    form.addEventListener('submit', handleFormSubmit);
});
