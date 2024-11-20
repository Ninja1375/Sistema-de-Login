// Dados de usuário simulados
const validUser = "admin";
const validPass = "12345";

// Referências aos elementos HTML
const passwordInput = document
 .getElementById('password');
const togglePasswordButton = document
 .getElementById('toggle-password');

// Função de login
function login() {
 const username = document
  .getElementById('username').value;
 const password = passwordInput.value;

 if (username === validUser &&
  password === validPass) {
  // Exibe a área de perfil e esconde o formulário de login
  document.getElementById('login-form')
   .classList.remove('active');
  document.getElementById('profile')
   .classList.add('active');
  document.getElementById('user-name')
   .innerText = username;
 } else {
  alert("Usuário ou senha inválidos!");
 }
}

// Função de logout
function logout() {
 // Retorna para o formulário de login
 document.getElementById('profile')
  .classList.remove('active');
 document.getElementById('login-form')
  .classList.add('active');
 document.getElementById('username')
  .value = '';
 passwordInput.value = '';
}

// Função para alternar a visibilidade da senha
togglePasswordButton.addEventListener(
 'click', () => {
  if (passwordInput.type ===
   'password') {
   passwordInput.type = 'text';
   togglePasswordButton.textContent =
    'Esconder';
  } else {
   passwordInput.type = 'password';
   togglePasswordButton.textContent =
    'Mostrar';
  }
 });
