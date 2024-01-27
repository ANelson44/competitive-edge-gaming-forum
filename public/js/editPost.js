const id = window.location.toString().split('/')
[window.location.toString().split('/').length - 1];

const editPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#updatePostTitle').value;
    const content = document.querySelector('#updatePostContent').value;

    const response = await fetch(`/api/Post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ postId: id, title, content}),
        headers: { 'Content-Type': 'application/json'},
    });
    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert('Failed to edit post!');
    }
};

document.querySelector('.editForm').addEventListener('submit', editPost);