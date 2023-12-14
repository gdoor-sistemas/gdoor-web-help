---
title: Rejeição 527: Operação de exportação com informação de ICMS incompatível
description: Veja como solucionar a rejeição 527: Operação de exportação com informação de ICMS incompatível no Gweb.
published: true
date: 2023-12-14T16:57:26.977Z
tags: tutoriais, rejeição
editor: markdown
dateCreated: 2023-09-29T18:08:18.866Z
---


# Rejeição 527: Operação de exportação com informação de ICMS incompatível

## Motivo

Essa **rejeição** ocorre quando é feita uma **NF-e de exportação de mercadorias** e o **ST** dos itens está incorreto.

![Mensagem da rejeição](/tutoriais/rejeicoes/527/msg_rej_527.png)

## Solução

Nestes casos, é necessário alterar o **ST** dos produtos **dentro da NF-e**. Para **alterar** clique em um **produto** e acesse a aba de **tributos**.
No campo correspondente você deve selecionar o **CST** ou **CSOSN** correto para o item.

![Alterar tributos direto no item](/tutoriais/rejeicoes/527/sol_rej_527.png)

> **Para o preenchimento correto das informações tributárias, é necessário o auxílio da contabilidade.**
{.is-danger}

Para facilitar, É possível utilizar a ação **Alterar Atributos**, dentro das opções dos **produtos**, como destacado abaixo:

![Alterar atributos dos produtos](/tutoriais/rejeicoes/527/sol_rej_527_1.png)

Na janela apresentada em tela, **selecione** o campo a ser alterado em todos os itens da nota.
No campo correspondente você deve selecionar o **CST** ou **CSOSN** correto para aplicar aos itens.

![Alteração de CST/CSOSN dos produtos dentro da nota fiscal](/tutoriais/rejeicoes/527/sol_rej_527_2.png)

> **Para o preenchimento correto das informações tributárias, é necessário o auxílio da contabilidade.**
{.is-danger}

Após **selecionar** o correto, clique em <span class="mat-button">CONFIRMAR</span> para aplicar o **CST** ou **CSOSN** em **todos os produtos** na nota fiscal.
