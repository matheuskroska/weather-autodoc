## Weather-autodoc

* deploy : https://autodoc-weather-238e2.web.app/

![](https://i.imgur.com/mchSd7S.png)

teste para a vaga de desenvolvedor frontend

## Instruções

### OBRIGATÓRIO 🚩 afim de testar e validar a aplicação pelo console do firebase:

- criar um repositorio [firebase](https://firebase.google.com/) e iniciar um banco firestore.
- utilizar o `env.example` deste repositório, adicionar as chaves do firestore e renomear para `.env`
- executando o projeto no seu ambiente:

```npm install```
```npm run start```

- ou executando o projeto em um container 🐳:

```npm run dev```

## Tech

* Redux + Redux Toolkit
* Firebase Firestore
* Styled Components
* Jest

## Roadmap

* <s>exibir previsão dos próximos dias (a requisição já existe, mas optei por exibir apenas o dia corrente)</s>✔
* <s>slice para loaders no carregamento das requisições e envio de dados</s> ✔
* slice para mensagens de erro/sucesso ( toast ).
* adicionar transições no carregamento dos cards.
* refatorar o código para utilizar o listenerMiddleware do redux-toolkit como alternativa ao saga que não foi utilizado.

## Considerações finais

não fiz, mas gostaria:

* de ter feito todos os roadmaps.
* de ter arquitetado a solução dessa forma:

![](https://i.imgur.com/UTNZNIf.png)
