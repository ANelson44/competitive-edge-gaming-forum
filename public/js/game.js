const socket = io();

function displayPosts(selectedGame) {
    const postsContainer = document.getElementById('postsContainer');
    const gameTitle = document.getElementById('gameTitle');
    
    // Check if the selected game has posts
    if (gamePosts[selectedGame]) {
      // Display game title
      gameTitle.textContent = `Posts for ${selectedGame}`;
      // Display posts
      gamePosts[selectedGame].forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
      });
    } else {
      // Display a message if there are no posts for the selected game
      gameTitle.textContent = `No posts available for ${selectedGame}`;
    }
  }
  // Call the displayPosts function with the selected game
  displayPosts(selectedGame);

  socket.on('newPost', (newPost) =>{
    if (!gamePosts[newPost.game]) {
      gamePosts[newPost.game] =[]
    }
    
    gamePosts[newPost.game].push(newPost);

    if(selectedGame = newPost.game) {
      displayPosts(selectedGame);
    }
  });