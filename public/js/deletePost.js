const deleteBtn = document.querySelector('#deleteBtn');
const postId = document.querySelector('input[name="postId"]').value;

const deleteHandler = async () => {
    const response = await fetch (`/api/Post/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
    });
    if(response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to delete.');
    }
};

document.addEventListener('click', deleteHandler)