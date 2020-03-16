![EloGroup](../EloGroup.png)

---
Especificação do Back-end
---

Construí um servidor com o framework [Express]() utilizando a **Arquitetura MVC** para receber os dados do formulário, efetuar validações e armazenar em um banco de dados, que roda em um container do **Docker**.

---
Estrutura de Pastas
---
```
src
├── app
|	├── controllers
|	|   ├── index.js
|       |   └── styles.js
|       |
|      ├── middlewares
|       |   ├── index.js
|       |   └── styles.js
|       |
|      ├── models
|	     ├── index.js
|            └── styles.js      
|   
├── config
|    ├──auth.js
|    └── database.js      
|
├── database
|   ├── migrations
|   ├── seeds
|   └── index.js
|      
├── app.js
├── routes.js
├── server.js
├── .eslintrc.js
└── .prettierrc.js

		
```
`src` - pasta principal do repositório.

`app` - pasta que contém os **models**, **controllers** e **middlewares** da aplicação.

`app/models` - define a abstração da tabela do banco de dados. Define os campos da tabela que são preenchidos pelo usuário, os dados que são enviados pela aplicação e são recebidos nas requisições do **controller**.

`app/controllers` - define os métodos executados ao acessar cada rota da aplicação. Aqui efetua validações dos dados recebidos, *queries* do banco de dados, cadastra as respostas do formulário, etc. Cuida das **regras de negócio** da aplicação e retorna dados pro Frontend.

`app/middlewares` - define um middleware de autenticação que bloqueia o acesso à rotas da aplicação. Por exemplo, não é permitido um usuário acessar o Dashboard se não estiver logado. Após o login, o Administrador recebe um token que permite-o acessar a página de Dashboard. Usa um token JWT no header da aplicação (vindo do client-side) para efetuar a validação.

`config` - contém o arquivo de configuração do banco de dados e um arquivo com os dados usados para configurar os tokens.

`config/auth.js` - arquivo com a chave para decodificar os tokens e um tempo de vencimento do token.

`config/database.js` - arquivo com credenciais de acesso ao banco de dados. A senha e usuário definidos na criação do container do Docker estão salvos aqui.

`database` - arquivos do banco de dados.

`database/migrations` - **migrations** representam as tabelas do banco e suas alterações como uma espécie de linha do tempo. Essa pasta guarda as tabelas que são armazenadas no banco de dados.

`database/seeds` - **seeds** são utilizadas para popular o banco de dados com dados iniciais. São executadas no início da aplicação com script `yarn start` para cadastrar o administrador e algumas respostas de formulário.

`database/index` - o arquivo de configuração do banco de dados. Instancia os **models** da aplicação e associa uma instância de conexão do banco para cada um dos **models**.

`App.js` - arquivo principal da aplicação. Define uma instância do Express, reúne o arquivo de rotas, instancia os middlewares, etc

`server.js` - arquivo que importa o App e executa o servidor expondo a porta **8080**

`.eslintrc.js & .prettierrc` - configuração do [ESLint](https://github.com/eslint/eslint) e [Prettier](https://github.com/prettier/prettier) para identar e formatar o código, usado durante o desenvolvimento da aplicação.

---
### Libs utilizadas:

- [Node.js](https://github.com/nodejs)
- [Express](https://github.com/expressjs/express) - o framework mais popular de Node.js para criar uma API REST.
- [CORS](https://github.com/expressjs/cors) - lib que permite aplicações externas acessarem a API.
- [Sequelize](https://github.com/sequelize/sequelize) - ORM para manipular o banco usando **migrations**. Uma das maiores vantagens é evitar o uso de SQL e manipular o banco com Javascript. Também fornece mais flexibilidade e tratar os dados (usando *hooks*) antes de repassar ao banco.
- [Yup](https://github.com/jquense/yup) - valida os dados recebidos pelo front-end, como um campo não preenchido, aplica confirmação de senha, entre outras funcionalidades.
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - autentica o administrador e bloqueia o acesso de outros usuários em rotas específicas usando um*middleware do **Express**.
- [Bcryptjs](https://www.npmjs.com/package/bcrypt) - criptografia de 
- [Yup](https://github.com/jquense/yup) - usado para validar os dados enviados no formulário.

---
Plataforma Gupy
---
Italo Marcos

---
LinkedIn
---

[Italo Marcos](https://www.linkedin.com/in/italomarcos1)
