---
title: Cadastro de operações
description: Veja como cadastrar naturezas de operações no GDOOR WEB para usar nos documentos
published: true
date: 2021-03-05T14:33:46.979Z
tags: cadastros, operações, visão geral
editor: markdown
dateCreated: 2020-01-03T19:29:43.125Z
---

# Introdução

Este módulo permite que você cadastre previamente as naturezas de operação que serão utilizadas na emissão de [NF-e](/movimentos/nf-e) e [NFC-e](/movimentos/nfc-e) e para referência na [compras](/movimentos/compras). Apesar de no [XML](/glossario#xml) da NF-e a natureza da operação ser somente um campo textual para descrição, dentro do GDOOR WEB essas naturezas de operação determinam o tipo de operação sendo realizada e podem determinar também a tributação dessa operação.

Para visualizar e alterar o cadastro de operações, acesse no menu principal: **Cadastros &raquo; Operações**:

![Acessar o módulo de operações](/cadastros/operacoes/acessar-operacoes.png)

O GDOOR WEB vem com as operações mais comuns já cadastradas, prontas para serem utilizadas. As operações são:

- **Venda de mercadorias**
- **Devolução de venda de mercadorias**
- **Compra de mercadorias**
- **Devolução de compra de mercadorias**
- Transferência de mercadorias
- Remessa de mercadoria para demonstração
- Remessa de mercadoria para conserto
- Remessa de mercadoria em consignação

As operações em **negrito** são utilizadas para controle do sistema e não podem ser excluídas. As demais operações já vêm inclusive com uma tributação genérica vinculada, com o CFOP específico para essas operações, mas tanto a operação quando as regras de tributação podem ser alteradas conforme a sua necessidade.

# Cadastro de operações

Você pode cadastrar uma nova operação acessando o módulo de cadastro de operações e clicando no botão de inclusão no canto direito inferior da tela. Para alterar uma operação, basta clicar sobre ela na lista de operações. O formulário de cadastro de operações tem essa aparência:

![Formulário para cadastro de operações](/cadastros/operacoes/formulario-para-cadastro-de-operacoes.png)

### Identificação 

- **Nome da operação**. Nome identificador da operação, será utilizados nas listas de seleção.
- **Descrição**. Descrição mais detalhada da operação. Útil para quando há várias operações com nome semelhante para você identificar mais detalhes sobre a operação.

### Definições

- **Entrada/Saída**. Indica se é uma operação de entrada ou saída.
- **Importação/Exportação**. Indica se é uma operação de comércio exterior.
- **Operação de ajuste**. Indica se é uma operação para ser utilizada em uma [NF-e de ajuste](/movimentos/nf-e/ajuste).
