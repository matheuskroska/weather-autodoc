## weather-autodoc

* deploy : https://autodoc-weather-238e2.web.app/

![](https://i.imgur.com/9hurVaz.png)

teste para a vaga de desenvolvedor frontend

## instruções

utilizar o env.example deste repositório, adicionar as chaves do firebase e renomear para .env

* npm run start - roda o projeto

## tech

* Redux + Redux Toolkit
* Firebase Firestore
* Styled Components
* Jest

## roadmap

* <s>exibir previsão dos próximos dias (a requisição já existe, mas optei por exibir apenas o dia corrente)</s>✔
* <s>slice para loaders no carregamento das requisições e envio de dados</s> ✔
* slice para mensagens de erro/sucesso ( toast ).
* adicionar transições no carregamento dos cards.
* refatorar o código para utilizar o listenerMiddleware do redux-toolkit como alternativa ao saga que não foi utilizado.

## considerações finais

pra respeitar o tempo do teste, não fiz, mas gostaria:

* de ter feito os roadmaps.
* de ter arquitetado a solução dessa forma:

![](https://i.imgur.com/UTNZNIf.png)
