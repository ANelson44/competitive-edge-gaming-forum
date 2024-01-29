const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log('Username:', username);
    console.log('Password:', password);

    if (username && password) {
      console.log('Sending Payload:', JSON.stringify({ username, password }));
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

     
  
      if (response.ok) {
        console.log(response);
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };

const signupForm = document.querySelector('#signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', signupFormHandler);
}
