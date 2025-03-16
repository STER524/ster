document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
});

window.onload = function() {
    if (window.location.hostname !== "ster.work.gd") {
        history.pushState({}, "", "https://ster.work.gd" + window.location.pathname);
    }
};