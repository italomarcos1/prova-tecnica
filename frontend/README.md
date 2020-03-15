![EloGroup](../EloGroup.png)

---
#Especificação do Front-end
---

Construí uma SPA (Single-Page Application) em React, consumindo a API do Back-end. Contém a página principal do formulário, uma página de redirecionamento (exibida após o usuário preencher o formulário), com a opção de atualizar os dados já preenchidos.

Tomei a liberdade de criar uma página de Administrador, com email e senha de acesso para efetuar Login e ter acesso ao Dashboard, onde todas as respostas do formulário são listadas. 


###Estrutura de Pastas

```
src
├── components
|	├── Header
|	├── Input
|	├── InputMask
|	└── Select
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

Construí uma SPA (Single-Page Application) em React, consumindo a API do Back-end. Contém a página principal do formulário, uma página de redirecionamento (exibida após o usuário preencher o formulário), com a opção de atualizar os dados já preenchidos.





O que você deve construir:

---
1. O Formulário deverá conter os seguintes campos:
	* Nome: Tipo Texto
	* Telefone: Tipo Texto
	* Como nos conheceu: Tipo Combo box (select) com as seguintes opções: Tv, Internet e outros.
	* Possui rede social: Tipo rádio com as opções Sim e Não. Ao clicar em Sim, habilitar o campo abaixo.
	* Quais: Tipo checkbox com as seguintes opções Facebook, LinkedIn e Instagram.
---

2. Validações
	* Nome deve ser obrigatório e conter ao menos um sobrenome.
	* Telefone deve possuir somente números no seguinte formato: 99 – 99999999.
	* Os valores informados nos checkbox somente podem ser enviados se o campo Possui rede social estiver marcado como Sim.
	* As opções selecionadas nos campos do tipo checkbox devem ser enviadas em um Array.
---

3. Considerações
	* As mensagens de validação podem ser emitidas por qualquer meio (alert, toast, dentre outros).
	* Após o envio (considerar que se as validações de campos estiverem ok o envio ocorrerá com sucesso) o botão de enviar deve ser desabilitado.
---

4. Os códigos desenvolvidos deverão ser "commitados" em um repositório do git hub, contendo um arquivo README.md explicando a hierarquia dos arquivos e informando o nome utilizado na plataforma Gupy, compartilhado em modo somente leitura, apenas após a finalização do desafio, com o seguinte usuário: elogroup-t 

---
