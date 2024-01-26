function redirectToSelectedGame() {
    // Get the selected value from the dropdown
    var selectedGame = document.getElementById("gameDropdown").value;

    // Check if a game is selected
    if (selectedGame) {
        // Redirect to the selected game page
        window.location.href = selectedGame + "/" + userChoice; // Add a forward slash between selectedGame and userChoice
    }
};

