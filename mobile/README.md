![EloGroup](../EloGroup.png)

---
Especificação do aplicativo Mobile
---

Construí um aplicativo em **React Native** com o formulário para os usuários. Vale ressaltar que essa aplicação consome a mesma a API do Frontend. Contém a página principal do formulário, uma página de redirecionamento (exibida após o usuário preencher o formulário).

Aqui está um link mostrando a aplicação rodando. Assista ao [vídeo](https://www.youtube.com/watch?v=isAx11mOVbo). (duração de 1min40seg).

---
Estrutura de Pastas
---
```
src
├── components
|	├── CustomButton
|	|   ├── index.js
|       |   └── styles.js
|       |
|       └── Input
|           ├── index.js
|           └── styles.js
|          
├── config
|   └── ReactotronConfig.js
|
├── pages
|   ├── After
|   |	├── index.js
|   | 	└── styles.js
|   |
|   ├── Main
|   	├── index.js
|   	└── styles.js
|
├── services
|    └── api.js
|    
├── index.js
├── routes.js
├── .eslintrc.js
└── .prettierrc.js

		
```
`src` - pasta principal do repositório.

`components` - cada sub-pasta representa os componentes que foram reutilizados em várias partes da aplicação, assim reduz o código duplicado, compartilha o mesmo estilo entre as páginas e torna o desenvolvimento mais produtivo. Cada sub-pasta contém o arquivo **index.js** que define o componente em si, e um **styles.js** que contém a estilização e os componentes internos da página.

`components/CustomButton` - um botão customizado que recebe um ícone da lib [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons). 

`components/Input` - componente de input da lib [Unform](https://github.com/rocketseat/unform). Permite estilização e validações.

`config` - contém o arquivo de configuração do [Reactotron](https://github.com/infinitered/reactotron), um debugger para React e React Native que utilizo durante o desenvolvimento da aplicação para monitorar os reducers, chamadas à API e fazer log dos erros.

`pages/Main` - página principal do formulário, que o cliente terá acesso. Exibe **alerts** do Android para avisar quando o usuário não preenche algum campo corretamente. O usuário é bloqueado de acessar essa página após preencher o formulário, e é redirecionado para a página `After`.

`pages/After` - página de redirecionamento acessada após o usuário preencher o formulário. O usuário é impedido de acessar esta página se não preencheu o formulário, e após preencher, não pode preencher novamente o formulário.

`services/api` - arquivo de conexão à API utilizando a lib [Axios](https://github.com/axios/axios). Usado para enviar os dados à API, no caso, o droplet da DigitalOcean.

`App,js` - componente principal da aplicação. Reúne o componente de rotas, e todos os componentes necessários para a aplicação rodar.

`routes,js` - componente que efetua o roteamento das páginas usando a lib [React Navigation](https://reactnavigation.org/). Define o roteamento e a SPA em si.

`index.js` - arquivo que renderiza o componente principal `App`, rodando a aplicação no browser.

`.eslintrc.js & .prettierrc` - configuração do [ESLint](https://github.com/eslint/eslint) e [Prettier](https://github.com/prettier/prettier) para identar e formatar o código, usado durante o desenvolvimento da aplicação.


---
### Libs e Frameworks utilizados:

Outras libs utilizadas no desenvolvimento da aplicação, além das libs já listadas acima.

- [React Native](https://github.com/facebook/react-native)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Reactotron](https://github.com/infinitered/reactotron) - usado em desenvolvimento para debugar a aplicação, monitorar e gerenciar o estado do Redux, e lidar com os dados recebidos da API.
- [Styled Components](https://github.com/styled-components/styled-components) - cria componentes estilizados permitindo encadear os estilos (estilizar componentes e estruturas internas do componente), e estilizar baseado em propriedades.
- [Axios](https://github.com/axios/axios) - usado para fazer as requisições a API e consumir os dados do back-end, para exibí-los na aplicação.
- [Prop Types](https://github.com/facebook/prop-types) - validação dos dados passados como propriedades nos componentes.

---
Plataforma Gupy
---

Italo Marcos

---
LinkedIn
---

[Italo Marcos](https://www.linkedin.com/in/italomarcos1)
