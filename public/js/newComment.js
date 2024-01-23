const newCommentForm = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('input[name="postId"]').value;
    const comment = document.querySelector('#newComment').value;

    if (comment) {
        const response = await fetch('/api/Comment', {
            method: 'POST',
            body: JSON.stringify({
                comment: comment,
                postId: postId,
            }),
            headers: { 'Content-Type': 'application/json'}
        });
    }
}

document.querySelector('#commentForm').addEventListener('submit', newCommentForm);
