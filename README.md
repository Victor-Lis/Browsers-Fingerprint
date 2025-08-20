# Cloudflare Browsers Fingerprint

Este projeto é uma aplicação serverless utilizando [Cloudflare Workers](https://workers.cloudflare.com/) e [Cloudflare D1](https://developers.cloudflare.com/d1/) para registrar e exibir fingerprints de navegadores de visitantes.

## Funcionalidades

- Captura automática de informações do visitante (IP, user agent, idioma, plataforma, localização, ISP, colo, etc).
- Armazena os dados em um banco de dados SQL (D1).
- Painel administrativo protegido por autenticação para visualizar os registros.
- Interface web estilizada para feedback ao visitante e para o painel de administração.

## Estrutura do Projeto

- `src/index.js`: Ponto de entrada do Worker, roteando requisições.
- `src/routes/fingerprint.js`: Captura e armazena o fingerprint do visitante.
- `src/routes/admin.js`: Exibe o painel de registros, protegido por autenticação.
- `src/utils/`: Componentes de UI em HTML para respostas do Worker.
- `migrations/`: Scripts SQL para criação das tabelas no banco D1.

## Como funciona

- Acessando `/`, o visitante tem seu fingerprint registrado e recebe uma confirmação.
- Acessando `/admin?username=admin&password=admin`, um administrador pode visualizar os registros (usuário e senha configuráveis em `wrangler.json`).

## Configuração e Deploy

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie um banco de dados [D1](https://developers.cloudflare.com/d1/get-started/) com o nome "d1-template-database":
   ```bash
   npx wrangler d1 create d1-template-database
   ```
   ...e atualize o campo `database_id` em `wrangler.json` com o novo ID do banco de dados.
3. Execute a seguinte migração para inicializar o banco de dados (note o diretório `migrations` neste projeto):
   ```bash
   npx wrangler d1 migrations apply --remote d1-template-database
   ```
4. Faça o deploy do projeto!
   ```bash
   npx wrangler deploy
   ```

# Auto
- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)