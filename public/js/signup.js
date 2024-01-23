const signupForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username && password) {
        const response = await fetch('/api/User/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up, try again later.');
        }
    }
};

document.querySelector('#signupForm').addEventListener('submit', signupForm);