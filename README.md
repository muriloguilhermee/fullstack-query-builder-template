# Fullstack Query Builder Template

Um projeto template para aprendizado de Query Builder utilizando Knex.js com Express.js e SQLite.

## 📋 Descrição

Este projeto é uma aplicação backend desenvolvida para demonstrar o uso de Query Builder com Knex.js. A aplicação gerencia cursos e módulos de cursos através de uma API REST, utilizando SQLite como banco de dados.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Express.js** - Framework web para Node.js
- **Knex.js** - Query Builder SQL para Node.js
- **SQLite3** - Banco de dados SQLite
- **tsx** - Executor TypeScript para desenvolvimento

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd fullstack-query-builder-template
```

2. Instale as dependências:
```bash
npm install
```

## 🗄️ Configuração do Banco de Dados

O projeto utiliza SQLite como banco de dados. O arquivo de banco de dados será criado automaticamente em `src/database/database.db` quando você executar as migrations.

### Executando Migrations

Para criar as tabelas no banco de dados:
```bash
npm run knex migrate:latest
```

Para reverter a última migration:
```bash
npm run knex migrate:rollback
```

### Executando Seeds

Para popular o banco de dados com dados iniciais:
```bash
npm run knex seed:run
```

## 📁 Estrutura do Projeto

```
fullstack-query-builder-template/
├── src/
│   ├── database/
│   │   ├── database.db          # Arquivo do banco de dados SQLite
│   │   ├── knex.ts               # Configuração do Knex
│   │   ├── migrations/           # Arquivos de migration
│   │   │   ├── 20251117145221_create-courses.ts
│   │   │   ├── 20251117150003_add-updated-courses.ts
│   │   │   └── 20251124145835_create-course-modules.ts
│   │   └── seeds/                # Arquivos de seed
│   │       └── insert-courses.ts
│   └── server.ts                 # Servidor Express
├── knexfile.ts                   # Configuração do Knex
├── package.json
├── tsconfig.json                 # Configuração TypeScript
└── README.md
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento com hot reload
- `npm run knex` - Acessa o CLI do Knex para executar comandos de migration e seed

## 📡 Endpoints da API

### Cursos

#### Criar um curso
```http
POST /courses
Content-Type: application/json

{
  "name": "Nome do Curso"
}
```

#### Listar todos os cursos
```http
GET /courses
```

Retorna todos os cursos ordenados por nome.

#### Atualizar um curso
```http
PUT /courses/:id
Content-Type: application/json

{
  "name": "Novo Nome do Curso"
}
```

#### Deletar um curso
```http
DELETE /courses/:id
```

### Módulos

#### Criar um módulo
```http
POST /modules
Content-Type: application/json

{
  "name": "Nome do Módulo",
  "course_id": 1
}
```

#### Listar todos os módulos
```http
GET /modules
```

#### Listar módulos de um curso específico
```http
GET /courses/:id/modules
```

Retorna os módulos do curso com informações do curso associado.

## 🗃️ Estrutura do Banco de Dados

### Tabela: `courses`

| Coluna      | Tipo        | Descrição                    |
|-------------|-------------|------------------------------|
| id          | INTEGER     | Chave primária (auto-increment) |
| name        | TEXT        | Nome do curso (não nulo)     |
| creted_at   | TIMESTAMP   | Data de criação (padrão: now) |
| updated_at  | TIMESTAMP   | Data de atualização (padrão: now) |

### Tabela: `course_modules`

| Coluna      | Tipo        | Descrição                    |
|-------------|-------------|------------------------------|
| id          | INTEGER     | Chave primária (auto-increment) |
| name        | TEXT        | Nome do módulo (não nulo)     |
| course_id   | INTEGER     | Chave estrangeira para courses.id |

## 🚀 Como Executar

1. Execute as migrations para criar as tabelas:
```bash
npm run knex migrate:latest
```

2. (Opcional) Execute os seeds para popular o banco:
```bash
npm run knex seed:run
```

3. Inicie o servidor:
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

## 📝 Exemplos de Uso

### Criar um curso
```bash
curl -X POST http://localhost:3333/courses \
  -H "Content-Type: application/json" \
  -d '{"name": "JavaScript"}'
```

### Listar cursos
```bash
curl http://localhost:3333/courses
```

### Criar um módulo
```bash
curl -X POST http://localhost:3333/modules \
  -H "Content-Type: application/json" \
  -d '{"name": "Introdução", "course_id": 1}'
```

## 👤 Autor

**Murilo Guilherme**

## 📄 Licença

Este projeto está sob a licença ISC.

