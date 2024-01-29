const newPostForm =async (event) => {
    event.preventDefault();

//  query must match name
    const title = document.querySelector('#postTitle').value;
    const content = document.querySelector('#postContent').value;

    if (title && content) {
        const response = await fetch('/api/Post', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage')
        } else {
            alert('Failed to make a new post.')
        }
    }
};

//  query must match name

const newPost = document.querySelector('#newPostForm');
if (newPost) {
    newPost.addEventListener('submit', newPostForm);
}

