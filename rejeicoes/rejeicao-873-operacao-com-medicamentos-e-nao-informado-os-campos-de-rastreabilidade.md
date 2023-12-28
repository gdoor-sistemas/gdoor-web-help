---
title: Rejeição 873: Operação com medicamentos e não informado os campos de rastreabilidade
description: Veja como solucionar a rejeição 873: Operação com medicamentos e não informado os campos de rastreabilidade
published: true
date: 2023-12-28T13:14:42.303Z
tags: tutorial, rejeição
editor: markdown
dateCreated: 2023-12-28T12:47:48.894Z
---

# Rejeição 873: Operação com medicamentos e não informado os campos de rastreabilidade

## Motivo

Quando no cadastro do produto estiver preenchido o campo **código de produto da ANVISA** e o **NCM** iniciar com **3001, 3002, 3003, 3004, 3005 ou 3006** será necessário preencher os dados de **rastreabilidade do produto**.

![Texto da rejeição](/tutoriais/rejeicoes/873/msg_rej_873.png)

## Solução

Dentro da NF-e, clique na **linha do produto**, para acessar os **detalhes** do mesmo. Na aba de **rastreabilidade** clique em <span class="mat mat-button">ADICIONAR</span> para adicionar dados de rastreabilidade do lote.

![Formulário para informar rastreabilidade do lote](/tutoriais/rejeicoes/873/sol_rej_873.png)

Preencha o formulário de **rastreamento** e clique em <span class="mat-button mat-accent">CONFIRMAR</span> para adicionar o **rastreamento ao produto**.

> **Caso não tenha certeza dos dados a serem lançados no formulário de rastreamento, consulte sua contabilidade.**
{.is-info}


Após o produto ter o **rastreamento do lote** informado, clique em <span class="mat-button">CONFIRMAR</span> para gravar os **dados do produto na nota fiscal** e depois em <span class="mat-button">SALVAR E TRANSMITIR</span>.