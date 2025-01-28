// login.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Bem-vindo, ${email}! Você será redirecionado para sua conta.`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
