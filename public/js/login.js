const loginForm = async (event) => {
    event.preventDefault();
//  querys must be matched to actual name
    const username = document.querySelector('#usernameLogin').value;
    const password = document.querySelector('#passwordLogin').value;

    const response = await fetch('/api/User/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
    });
//  document.location.replace must be matched to actual respected route.
//  either directs to mainpage or we figure out how to direct via each game page.
    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('Failed to log in.');
    }
};

document.querySelector('#login').addEventListener('submit', loginForm);