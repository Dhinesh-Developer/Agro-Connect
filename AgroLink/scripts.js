// Example JavaScript for form validation
document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            // Perform login logic here (e.g., send data to server)
            alert('Login Successful!');
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert('Please fill out all fields.');
        }
    });
});