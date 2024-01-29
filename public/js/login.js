
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // get values for the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log('Response Status:', response.status);
      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData);
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  // stops page from reloading
  
  const loginForm = document.querySelector('.login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', loginFormHandler);
    }
    