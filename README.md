O projeto é um **Sistema de Login Simples** desenvolvido utilizando apenas HTML, CSS e JavaScript , com o objetivo de criar uma interface de autenticação funcional e visualmente agradável. Ele simula o processo de login, permitindo que o usuário insira suas credenciais (usuário e senha), valide-as localmente (sem um backend) e acesse um perfil personalizado. É um sistema básico e adequado para projeções, estudos ou protótipos de aplicações web.

O layout é responsivo e elegante, projetado para ser configurado corretamente em dispositivos móveis, tablets e desktops.

## Funcionalidades do Sistema

**Formulário de Login**

Permite ao usuário inserir o nome de usuário e a senha.
O botão "Entrar" realiza a validação das credenciais localmente.

**Validação de Credenciais:**

Apenas usuários com o nome "**admin**" e senha "**12345**" podem acessar o perfil.
Exibe uma mensagem de erro (alerta) caso o usuário insira credenciais incorretas.

**Perfil do Usuário:**

Após o login bem-sucedido, exibe um painel de perfil com:
Uma imagem de perfil representando o administrador.
O nome do usuário está registado.
Estilização moderna com uma foto de perfil redondo e um texto centralizado.

**Mostrar/Esconder Senha:**

Funcionalidade que permite ao usuário visualizar a senha ao clicar no botão "Mostrar".
O botão alterna entre "Mostrar" e "Esconder", dependendo do estado de visibilidade da senha.

**Sair:**

O usuário pode clicar no botão "Sair" para retornar ao formulário de login.
Os campos do formulário são limpos automaticamente ao ser desolado.

## Design Responsivo:

O layout se adapta a qualquer tamanho de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em computadores.
Gradiente moderno como plano de fundo para melhorar a estética.

**Estrutura Modular:**

O código está dividido em três arquivos:

**index.html** – Estrutura HTML do sistema.

**style.css** – Estilização do layout.

**script.js** – Funcionalidades de interação e validação.

## Objetivo Educacional

O projeto foi criado para ensinar e demonstrar os fundamentos do desenvolvimento web, incluindo:

Criação de interfaces interativas com HTML e CSS.

Implementação de lógica básica de autenticação usando JavaScript.

Estruturação modular do código, separando apresentação, estilo e lógica.

Design responsivo para diferentes dispositivos.

## Fluxo de Uso

**Conecte-se:**

O usuário acessou o formulário de login.
Insira o nome do usuário e a senha.
Ao clicar em "Entrar", o sistema valida os dados e redireciona para o perfil se forem válidos.

**Perfil:**

O usuário vê o painel com a imagem de perfil e o nome do usuário.
Tem acesso ao botão "Sair" para deslogar.

**Sair:**

Ao clicar em "Sair", o sistema retorna ao formulário de login com os campos limpos.

## Tecnologias Utilizadas

**HTML:** Estrutura básica da aplicação.

**CSS:** Estilização e design responsivo.

**JavaScript:** Funcionalidades de interação, validação e manipulação do DOM.
