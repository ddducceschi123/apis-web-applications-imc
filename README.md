# APIs Web Applications IMC

## Descrição do Projeto

Este projeto é uma aplicação web para calcular o Índice de Massa Corporal (IMC). A aplicação recebe o peso e a altura do usuário, calcula o IMC e retorna a categoria correspondente (Magreza, Normal, Sobrepeso ou Obesidade).

## Estrutura do Projeto

O projeto segue as boas práticas de SOLID e utiliza TypeScript. A estrutura do projeto é organizada da seguinte forma:

```bash
apis-web-applications-imc/
├── dist/
├── node_modules/
├── public/
│ └── imc.html
├── src/
│ ├── controllers/
│ │ └── imc.controller.ts
│ ├── interfaces/
│ │ └── imc.interface.ts
│ ├── services/
│ │ └── imc.service.ts
│ ├── strategies/
│ │ └── imc.strategy.ts
│ └── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Tecnologias Usadas

- Node.js
- Express
- TypeScript
- PM2 (Process Manager)
- HTML

## Como Utilizar

### Pré-requisitos

- Node.js (v14.x ou superior)
- NPM (v6.x ou superior)
- PM2 (instalado globalmente)

### Instalação
Clone o repositório para o seu ambiente local:

   ```bash
    git clone git@github.com:ddducceschi123/apis-web-applications-imc.git
    cd apis-web-applications-imc

    Instale as dependências do projeto:
    npm install

    Compile o projeto TypeScript:
    npm run build
    
```
## Executando a Aplicação
Inicie a aplicação com PM2:
npm start

A aplicação estará rodando em http://localhost:3000. Abra o navegador e acesse essa URL.

Acesse o formulário HTML em http://localhost:3000/imc.html para inserir os valores de weight e height e calcular o IMC.

Desenvolvimento
Durante o desenvolvimento, você pode usar o seguinte comando para assistir as mudanças e reiniciar o servidor automaticamente:
npm run dev

## Estrutura do Código
```bash
public/imc.html: Página HTML que contém o formulário para inserção dos valores de weight e height.

src/controllers/imc.controller.ts: Controlador que gerencia a rota de cálculo de IMC.

src/interfaces/imc.interface.ts: Interface que define a estrutura do resultado do IMC.

src/services/imc.service.ts: Serviço que contém a lógica de cálculo de IMC.

src/strategies/imc.strategy.ts: Estratégia que implementa a lógica de cálculo de IMC de acordo com diferentes faixas de valores.

src/index.ts: Arquivo principal que inicializa a aplicação Express.
```
## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou contribuir com pull requests.
