const logout = async () => {
    const response = await fetch ('/api/User/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert('Log out failed, try again later.');
    }
};

document.querySelector('#logout').addEventListener('click', logout)