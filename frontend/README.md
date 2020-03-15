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

`components` - cada sub-pasta representa os componentes que foram reutilizados em várias partes da aplicação, assim reduz o código duplicado, compartilha o mesmo estilo entre as páginas e torna o desenvolvimento mais produtivo. Cada sub-pasta contém o arquivo **index.js** que define o componente em si, e um **styles.js** que contém a estilização e os componentes internos da página.

`components/Header` - o cabeçalho da aplicação, aparece na página principal do Administrador. 

`components/Input` - componente de input da lib [Unform](https://github.com/rocketseat/unform). Permite estilização e validações.

`components/InputMask` - componente de input especial que permite aplicar máscara no input, usado pra preencher o campo de telefone e não permitir caracteres que não sejam númericos. Usa uma **regex** para validar o telefone informado. Provém da **lib** [React Input Mask](https://github.com/sanniassin/react-input-mask).

`components/Select` - componente que substitui o ComboBox padrão do JavaScript. Permite aplicar validação nos valores, é altamante estilizável e permite listar valores puxados da API. Provém da **lib** [React Select](https://react-select.com/async).

`config` - contém o arquivo de configuração do [Reactotron](https://github.com/infinitered/reactotron), um debugger para React e React Native que utilizo durante o desenvolvimento da aplicação para monitorar os reducers, chamadas à API e fazer log dos erros.

`pages/Admin/Dashboard` - página principal do Administrador, lista todas as respostas do formulário. O cabeçalho de `components/Header` é exibido nesta página.

`pages/Admin/Login` - página de Login do Administrador. Efetua validação usando a lib [Yup](https://github.com/jquense/yup) e utiliza [Redux](https://github.com/reduxjs/redux) para se comunicar a API, compartilhar dados entre os componentes e salvar os dados no LocalStorage do navegador, para o usuário permanecer logado na aplicação.

`pages/Form` - página principal do formulário, que o cliente terá acesso. Utiliza o componente [Form](https://unform.dev/guides/basic-form) da lib [Unform](https://github.com/rocketseat/unform) e os inputs listados acima. Conta com validações também utilizando a lib [Yup](https://github.com/jquense/yup). Usa toasts da lib [React Toastify](https://github.com/fkhadra/react-toastify) para avisar quando o usuário não preenche algum campo corretamente. O usuário é bloqueado de acessar essa página após preencher o formulário, e é redirecionado para a página `AfterForm`.

`pages/AfterForm` - página de redirecionamento acessada após o usuário preencher o formulário. O usuário é impedido de acessar esta página se não preencheu o formulário, e após preencher, não pode preencher novamente o formulário. É possível apenas modificar seus dados, mas não preencher uma nova resposta.

`pages/UpdateForm` - reutiliza o formulário da página `Form` para permitir atualizar os dados do usuário. Apenas modifica os dados preenchidos, não é adicionada uma nova resposta ao banco.

`services/api` - arquivo de conexão à API utilizando a lib [Axios](https://github.com/axios/axios).

`services/history` - arquivo de configuração do `history`, da lib [History](https://github.com/ReactTraining/history), utilizado para redirecionar o usuário entre páginas.

---
Plataforma Gupy
---
Italo Marcos

---
LinkedIn
---
[Italo Marcos](https://www.linkedin.com/in/italomarcos1)
