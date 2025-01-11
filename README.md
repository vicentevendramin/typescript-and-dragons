# 🐉 Typescript and Dragons

O **Typescript and Dragons** é um projeto que simula um sistema de RPG (Role Playing Game) aplicando conceitos avançados de Programação Orientada a Objetos (POO) e os princípios da arquitetura **SOLID**. Este projeto explora a criação de personagens, raças, arquétipos e batalhas, fornecendo uma estrutura robusta para jogos RPG.

---

## 📝 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar e consolidar os seguintes conceitos:

- **Princípios de POO**: Herança, encapsulamento, polimorfismo e abstração.
- **Arquitetura SOLID**: Criação de código modular, reutilizável e fácil de manter.
- **TypeScript**: Uso de tipagem estática e interfaces para aumentar a segurança do código.

A estrutura desenvolvida é modular, permitindo a expansão para novos tipos de personagens, batalhas e funcionalidades no futuro.

---

## 🚀 Funcionalidades

- **Raças**:
  - Criação de raças (Elfos, Anões, Orcs, etc.).
  - Cada raça possui atributos específicos, como pontos de vida.

- **Arquétipos**:
  - Criação de arquétipos (Guerreiro, Mago, Necromante, etc.).
  - Cada arquétipo define o estilo de combate e as habilidades do personagem.

- **Personagens e Monstros**:
  - Criação de personagens jogáveis e monstros com atributos personalizáveis.
  - Implementação de classes para diferentes tipos de lutadores.

- **Batalhas**:
  - Sistema de batalhas Player vs Player (PVP).
  - Sistema de batalhas Player vs Environment (PVE), incluindo combates contra múltiplos monstros.

---

## 📂 Estrutura do Projeto

A estrutura do projeto segue o padrão modular e organizado, com as seguintes pastas principais:

```plaintext
📁 src/
   ├── Archetypes/             # Arquétipos (ex.: Mago, Guerreiro)
   │   ├── Archetype.ts
   │   ├── Mage.ts
   │   ├── Necromancer.ts
   │   ├── Ranger.ts
   │   └── Warrior.ts
   │
   ├── Battle/                 # Lógica de batalhas
   │   ├── Battle.ts
   │   ├── PVE.ts
   │   └── PVP.ts
   │
   ├── Fighter/                # Interfaces e classes de lutadores
   │   ├── Fighter.ts
   │   ├── SimpleFighter.ts
   │
   ├── Races/                  # Raças (ex.: Elfos, Orcs)
   │   ├── Race.ts
   │   ├── Dwarf.ts
   │   ├── Elf.ts
   │   ├── Halfling.ts
   │   └── Orc.ts
   │
   ├── Character.ts            # Criação de personagens jogáveis
   ├── Dragon.ts               # Classe para dragões
   ├── Energy.ts               # Interface para energia
   ├── Monster.ts              # Classe para monstros
   ├── index.ts                # Arquivo principal
   └── utils.ts                # Funções utilitárias
```

---

## 🔧 Tecnologias Utilizadas

- **TypeScript**: Tipagem estática e organização do código.
- **POO**: Herança, polimorfismo, abstração e encapsulamento.
- **SOLID**: Organização e boas práticas de arquitetura.

## 🛠️ Como Rodar o Projeto

- Clone o repositório:

    ```bash
    git clone https://github.com/vicentevendramin/typescript-and-dragons.git
    cd typescript-and-dragons
    ```

- Instale as dependências:

    ```bash
    npm install
    ```

- Execute o projeto:

    ```bash
    npm start
    ```