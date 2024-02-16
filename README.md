# Projeto Painel Analítico

## Descrição do Projeto

O Painel Analítico é uma aplicação desenvolvida para fornecer uma interface intuitiva e poderosa para visualização e análise de dados com base na quantidade de acesso a aplicação. Com recursos avançados e uma interface moderna, este painel oferece insights valiosos para impulsionar a tomada de decisões informadas.

## Principais Funcionalidades

- **Visualização de Dados:** Oferece uma variedade de opções de visualização de dados, incluindo gráficos de barras e dados númericos para a melhor interpretação dos dados.

- **Integração com Redis:** Utiliza o módulo `@upstash/redis` para integração com o Redis, permitindo armazenamento e persistência eficiente dos dados.

- **Análise Temporal:** Implementação de funcionalidades para análise temporal, permitindo aos usuários analisar tendências ao longo do tempo.

- **Exibição de Países:** Utilização do componente `react-country-flag` para exibir bandeiras de países em conjuntos de dados geográficos.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@tremor/react`: ^3.14.0
- `@upstash/redis`: ^1.28.3
- `date-fns`: ^3.3.1
- `lucide-react`: ^0.331.0
- `next`: ^14.1.0
- `react`: ^18
- `react-country-flag`: ^3.1.0
- `react-dom`: ^18
- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `autoprefixer`: ^10.0.1
- `eslint`: ^8
- `eslint-config-next`: 14.1.0
- `postcss`: ^8
- `tailwindcss`: ^3.3.0
- `typescript`: ^5

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
REDIS_TOKEN=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse o dashboard em `http://localhost:3000` e explore todas as funcionalidades de visualização e análise de dados oferecidas pelo projeto.
