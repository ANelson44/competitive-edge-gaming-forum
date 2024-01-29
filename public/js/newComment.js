document.addEventListener("DOMContentLoaded", function () {

const showCommentForm = () => {
    const commentFormContainer = document.getElementById('commentFormContainer');
    commentFormContainer.style.display = 'block';
};

const newCommentForm = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('input[name="postId"]').value;
    const comment = document.querySelector('#newComment').value;

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment: comment,
                postId: postId,
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload(); 
        } else {
            alert('Failed to make a new comment.')
        }
    }
}

const newCommentButton = document.querySelector('#addCommentButton'); 
if (newCommentButton) {
    newCommentButton.addEventListener('click', showCommentForm);
}

const newComment = document.querySelector('#commentForm');
if (newComment) {
    newComment.addEventListener('submit', newCommentForm);
}

});