![EloGroup](EloGroup.png)

---
Prova Técnica para Desenvolvedor - EloGroup
---

O projeto está dividido em duas partes, o **backend** e o **frontend**, nas suas respectivas pastas.

---
Pré-requisitos
---

- [Node.js](https://nodejs.org/en/download/) instalado.
- [Docker](https://docs.docker.com/install/) e [Docker-cli](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-engine---community-1). O Docker-cli permite usar comandos do terminal para executar o Docker.

---
Como executar a aplicação
---

Abra um terminal e execute os seguintes comandos da maneira como foram definidos, não altere nada.

- Clone o repositório:
```
git clone https://github.com/italomarcos1/prova-tecnica.git
```
- Crie um container do Docker com uma imagem do Postgres para armazenar os dados respondidos no formulário: 
```
sudo docker run --name=provatecnica -e POSTGRES_PASSWORD=challenge -e POSTGRES_USER=elogroup-t -d -p 5432:5432 postgres:11
```
- Inicie o container criado acima:
```
docker start provatecnica
```
- Entre na pasta que contém os arquivos do servidor:
```
cd prova-tecnica/backend
```
- Rode o comando abaixo para instalar as dependências e popular o banco (**seeds**) com os dados do Administrador e alguns dados de usuários:
```
yarn && yarn touch
```
- Por fim, execute a aplicação com o script abaixo:

```
yarn dev
```
