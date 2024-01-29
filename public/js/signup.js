console.log('signup file loaded')

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log('Username:', username);
    console.log('Password:', password);

    if (username && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData);
        alert('Sign-up successul!')
        document.location.replace('/');
      } else {
        alert(`Sign-up failed: ${responseData}` );
      }
    }
  };

const signupForm = document.querySelector('#signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', signupFormHandler);
}
