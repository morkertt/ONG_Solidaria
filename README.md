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

## Estrutura do Projeto

```
.
├── index.html
├── projetos.html
├── cadastro.html
├── README.md
├── css/
│   └── style.css (Arquivo vazio)
└── img/
    └── ... (arquivos de imagem)
```