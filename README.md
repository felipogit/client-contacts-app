## Frontend do Projeto Client-Contacts
Bem-vindo ao frontend do Projeto Tech! Este repositório contém o código-fonte do frontend da aplicação, que interage com a API por meio do Axios. Siga as instruções abaixo para configurar e executar o frontend localmente.

## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js (v14.0.0 ou superior)
npm (v6.0.0 ou superior)
Instalação
Clone este repositório em sua máquina local:
git clone https://github.com/seu-usuario/projeto-tech-frontend.git


## Navegue até o diretório do projeto:
cd client-contacts-app
Instale as dependências utilizando o npm:
npm install
Configuração da API

## A API deste projeto está em um arquivo separado chamado api.ts. Certifique-se de que as configurações da API estão corretas antes de iniciar o frontend.

// src/services/api.js

import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
});

## Verifique se o baseURL está configurado corretamente com o endereço da sua API.

Executando o Frontend
Após a instalação das dependências e configuração da API, você pode iniciar o frontend localmente. Execute o seguinte comando:

npm run dev

Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador padrão.

Acesse http://localhost:5173 para visualizar o frontend.
