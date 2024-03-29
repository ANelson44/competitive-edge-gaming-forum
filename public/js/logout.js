const logout = async () => {
    const response = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Log out failed, try again later.');
    }
};

const logoutButton = document.querySelector('#logout');
if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}
