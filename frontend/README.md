![EloGroup](../EloGroup.png)

---
Especificação do Front-end
---

Construí uma **SPA** (Single-Page Application) em **React**, consumindo a API do Back-end. Contém a página principal do formulário, uma página de redirecionamento (exibida após o usuário preencher o formulário), com a opção de atualizar os dados já preenchidos.

Tomei a liberdade de criar uma página de **Administrador**, com email e senha de acesso para efetuar **Login** e ter acesso ao **Dashboard**, onde todas as respostas do formulário são listadas. 

---
Estrutura de Pastas
---
```
src
├── components
|	├── Header
|	|	├── index.js
|   | 	└── styles.js
|   |
|	├── Input
|	|	├── index.js
|   | 	└── styles.js
|   |
|	├── InputMask
|	|	├── index.js
|   | 	└── styles.js
|   |
|	└── Select
|		├── index.js
|    	└── styles.js
|   
├── config
|   └── ReactotronConfig.js
|
├── pages
|   ├── Admin
|   |	├── Dashboard
|   |	|	├── index.js
|   | 	|	└── styles.js
|   | 	|
|   |	└── Login
|   |		├── index.js
|   | 		└── styles.js
|   |
|   ├── AfterForm
|   |	├── index.js
|   | 	└── styles.js
|   |
|   ├── Form
|   |	├── index.js
|   | 	└── styles.js
|   |
|   ├── UpdateForm
|   	├── index.js
|    	└── styles.js
|
├── services
|   ├── api.js
|   └── history.js
|
├── store
|   ├── modules
|   |   ├── auth
|   |   |  ├── actions.js
|   |   |  ├── reducer.js
|   |   |  └── sagas.js
|   |   ├── rootReducer.js
|   |   └── rootSaga.js
|   ├── createStore.js
|   ├── index.js
|   ├── persistReducers.js
|
├── styles
|	└── global.js
|      
├── App.js
├── index.js
├── routes.js
├── .eslintrc.js
└── .prettierrc.js

		
```
`src` - pasta principal do repositório.

`components` - contém os componentes que foram reutilizados em várias partes da aplicação, assim reduz o código duplicado, compartilha o mesmo estilo entre as páginas e torna o desenvolvimento mais produtivo. Cada componente contém o arquivo **index.js** que define o componente em si, e um **styles.js** que contém a estilização e os sub-componentes internos da página.

`Header` - o cabeçalho da aplicação, aparece na página principal do Administrador. 

`Input` - componente de input da lib [Unform](https://github.com/rocketseat/unform). Permite estilização e validações.

`InputMask` - componente de input especial que permite aplicar máscara no input, usado pra preencher o campo de telefone e não permitir caracteres que não sejam númericos. Usa uma **regex** para validar o telefone informado. Provém da **lib** [React Input Mask](https://github.com/sanniassin/react-input-mask).

`Select` - componente que substitui o ComboBox padrão do JavaScript. Permite aplicar validação nos valores, é altamante estilizável e permite listar valores puxados da API. Provém da **lib** [React Select](https://react-select.com/async).

`config` - contém o arquivo de configuração do [Reactotron](https://github.com/infinitered/reactotron), um debugger para React e React Native que utilizo durante o desenvolvimento da aplicação para monitorar os reducers, chamadas à API e fazer log dos erros.


---
Plataforma Gupy
---
Italo Marcos

---
LinkedIn
---
[Italo Marcos](https://www.linkedin.com/in/italomarcos1)
