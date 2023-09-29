Sistema de Registro de Usuários

## Visão Geral
- Este documento fornece informações detalhadas sobre o sistema de registro de usuários desenvolvido para o evento "Como Ganhar Dinheiro com a Internet". O sistema permite que os participantes se registrem fornecendo seus nomes, números de telefone e endereços de e-mail para receber mais informações sobre o evento.

## Funcionalidades
### Página de Registro
- Um formulário de registro na página inicial onde os participantes podem inserir suas informações.
- Campos para nome, número de telefone e endereço de e-mail.
- Um botão "Vamos Juntos" para enviar o registro.


## Banco de Dados
- Um banco de dados PostgreSQL é usado para armazenar as informações dos usuários registrados.
- A tabela users armazena os campos: id, name, phone, e email.


## Validação
- Validação dos campos do formulário para garantir que os dados inseridos sejam válidos.
- Verificação de duplicatas para evitar registros duplicados no banco de dados.


## Interface Gráfica
- Estilos CSS para criar uma página de registro atraente e responsiva.
- Usei fontes do Google Fonts para uma aparência estilizada.


## JavaScript
- Melhorias de experiência do usuário, como transições suaves e validação em tempo real.
- Adiciona um contador de tempo para exibir a contagem regressiva até o fim da oferta.


## Configuração
- Requisitos de Software
- PostgreSQL
- VSCode (ou qualquer editor de texto de sua preferência)


## Instalação e Execução
- Clone o repositório do projeto.
- Configure o PostgreSQL e crie um banco de dados chamado "user_registration".
- Execute o comando npm install para instalar as dependências.
- Configure as variáveis de ambiente no arquivo .env para a conexão com o banco de dados.
- Execute o aplicativo com o comando npm start.
- Acesse a página de registro no navegador em http://localhost:5000.


## Uso
- Acesse a página de registro.
- Preencha o formulário com seu nome, número de telefone e endereço de e-mail.
- Clique no botão "Vamos Juntos" para enviar o registro.
- Seu registro será salvo no banco de dados.


## Contribuição
- Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou propor solicitações de pull (pull requests) no repositório do projeto.

## Licença
- Este projeto está licenciado sob a Licença MIT.