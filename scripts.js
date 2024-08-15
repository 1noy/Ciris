let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        currentUser = username;
        document.getElementById('current-user').textContent = `Connecté en tant que : ${username}`;
        document.getElementById('login').style.display = 'none';
        document.getElementById('messaging').style.display = 'block';
    }
}

function logout() {
    currentUser = null;
    document.getElementById('login').style.display = 'block';
    document.getElementById('messaging').style.display = 'none';
}

function sendMessage() {
    const messageContent = document.getElementById('message-content').value;
    if (messageContent) {
        const messageSection = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message right';
        newMessage.textContent = `${currentUser}: ${messageContent}`;
        messageSection.appendChild(newMessage);
        document.getElementById('message-content').value = '';
    }
}
