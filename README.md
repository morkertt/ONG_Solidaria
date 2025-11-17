# Plataforma Web para ONGs - Experiência Prática I

Este repositório contém a solução para a **Experiência Prática I** da disciplina "Fundamentos da Web e Estruturação de Interfaces", focada na criação da estrutura HTML5 semântica para uma plataforma de Organizações Não Governamentais (ONGs).

## Requisitos Atendidos (Entrega I)

1.  **Estrutura HTML5 Semântica:** Implementação de 3 páginas com uso de tags semânticas e hierarquia de títulos consistente.
2.  **Páginas Obrigatórias:**
    *   `index.html`: Página inicial com informações institucionais e de contato.
    *   `projetos.html`: Página de projetos sociais, voluntariado e doações.
    *   `cadastro.html`: Página com formulário complexo.
3.  **Formulário Complexo e Interativo:**
    *   Formulário em `cadastro.html` com os campos obrigatórios (Nome Completo, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade e Estado).
    *   Uso de **tipos de input HTML5** adequados (`email`, `tel`, `date`, `select`, `radio`).
    *   **Validação nativa** implementada com atributos HTML5 (`required`, `minlength`, `pattern`, `title`).
    *   **Agrupamento lógico** utilizando a tag `<fieldset>` e `<legend>`.

## Requisitos Atendidos (Entrega II - CSS)

1.  **Sistema de Design:**
    *   **Variáveis CSS Customizadas:** Definidas no `:root` para cores, tipografia e espaçamento modular.
    *   **Paleta de Cores:** Mínimo de 8 cores (primárias, secundárias, neutras, erro).
    *   **Tipografia Hierárquica:** Mínimo de 5 tamanhos de fonte (`--font-size-h1` a `--font-size-h4`, `base`, `small`).
    *   **Espaçamento Modular:** Sistema de espaçamento modular baseado em 8px (`--spacing-xs` a `--spacing-xxl`).
2.  **Leiautes Responsivos com Flexbox e Grid:**
    *   **Layout Principal:** Uso de CSS Grid para a estrutura geral (`header`, `main`, `footer`).
    *   **Flexbox:** Utilizado para componentes internos (navegação, hero section, oportunidades de voluntariado).
    *   **Breakpoints Responsivos:** 5 breakpoints definidos (`576px`, `768px`, `992px`, `1200px`) com abordagem **Mobile-First**.
    *   **Sistema de Grid Customizado:** Implementação de classes `.col-1` a `.col-12` para um sistema de 12 colunas.
3.  **Navegação Sofisticada e Interativa:**
    *   **Menu Principal Responsivo:** Implementado com menu hambúrguer para mobile.
    *   **Submenu Dropdown:** Adicionado ao item "Projetos Sociais" para desktop.
4.  **Componentes de Interface:**
    *   **Cards Responsivos:** Estilização para os projetos em `projetos.html`.
    *   **Botões com Estados Visuais:** Estilização para `hover`, `focus` e `active` no `.cta-button`.
    *   **Formulários Estilizados:** Estilização completa do formulário com foco na usabilidade e **validação visual nativa** (o campo fica vermelho se inválido).
    *   **Componentes de Feedback:** Implementação de classes `.alert-success`, `.alert-error`, `.alert-info`.
    *   **Badges e Tags:** Implementação de classes `.badge` para categorização.
5.  **CSS Organizados:** O arquivo `css/style.css` contém todos os estilos de forma organizada e comentada.

## Requisitos Atendidos (Entrega III - JavaScript)

1.  **Código JavaScript Modular:** O código está organizado em módulos (`main.js`, `router.js`, `templates.js`, `formValidation.js`) dentro da pasta `js/`.
2.  **Manipulação do DOM:** O sistema SPA e a validação de formulário manipulam o DOM para exibir conteúdo e mensagens de feedback.
3.  **Sistema de Single Page Application (SPA) Básico:** Implementado em `js/router.js`, que intercepta cliques nos links de navegação e carrega o conteúdo real da tag `<main>` das páginas HTML, simulando o carregamento dinâmico.
4.  **Sistema de Templates JavaScript:** Implementado em `js/templates.js`, que contém funções para gerar HTML de componentes reutilizáveis (ex: `createProjectCard`, `createAlert`).
5.  **Sistema de Verificação de Consistência de Dados em Formulários:** Implementado em `js/formValidation.js`, que:
    *   Verifica a validação nativa do HTML5.
    *   Adiciona uma **verificação de consistência** adicional para CPF e Telefone.
    *   Exibe um **aviso ao usuário de preenchimento incorreto** (usando o template de alerta) no topo do formulário.


## Estrutura do Projeto

```
.
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
├── css/
│   └── style.css <-- Arquivo com todo o CSS da Entrega II
├── img/
│   └── ... (arquivos de imagem)
└── js/
    ├── main.js
    ├── router.js
    ├── templates.js
    └── formValidation.js
```