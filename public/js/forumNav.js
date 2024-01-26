document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('game1').addEventListener('click', function() {
        window.location.href = '/game/1';
    });
    document.getElementById('game2').addEventListener('click', function() {
        window.location.href = '/game/2'
    });
    document.getElementById('game3').addEventListener('click', function() {
        window.location.href = '/game/3';
    });
    document.getElementById('game4').addEventListener('click', function() {
        window.location.href = '/game/4';
    });
    document.getElementById('game5').addEventListener('click', function() {
        window.location.href = '/game/5';
    });
    document.getElementById('loginButton').addEventListener('click', function() {
        window.location.href = '/login';
    });
});