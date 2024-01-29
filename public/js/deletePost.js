const deleteBtn = document.querySelector('#deleteBtn');


const deleteHandler = async () => {
    const postId = document.querySelector('input[name="postId"]').value;
    
    const response = await fetch (`/api/Post/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
    });
    if(response.ok) {
        document.location.replace('/homepage');
    } else {
        alert('Failed to delete.');
    }
};

if (deleteBtn){
document.addEventListener('click', deleteHandler)
};