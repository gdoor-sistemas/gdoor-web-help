---
title: Rejeição 840: NCM de medicamento e não informado o grupo de medicamento
description: Veja como solucionar a rejeição 840: NCM de medicamento e não informado o grupo de medicamento no Gweb.
published: true
date: 2023-10-04T17:29:44.124Z
tags: tutorial, rejeição
editor: markdown
dateCreated: 2023-10-04T17:29:44.124Z
---

# Rejeição 840: NCM de medicamento e não informado o grupo de medicamento

## Motivo

Essa mensagem ocorre quando no cadastro do [produto](/cadastros/produtos) o **NCM** iniciar com **3001**, **3002**, **3003**, **3004**, **3005** ou **3006** e não foi informado os campos **Código de produto da ANVISA** e **preço máximo ao consumidor**.

![Mensagem da rejeição](/tutoriais/rejeicoes/840/msg_rej_840.png)

## Solução

Acesse o cadastro de [produtos](/cadastros/produtos) e **edite** o produto da nota fiscal.
Dentro do formulário do produto, é necessário preencher os campos **Código de produto da ANVISA** e **preço máximo ao consumidor** dentro da sessão **informações ANVISA**, ambos destacados abaixo:

![Campos no formulário do produto](/tutoriais/rejeicoes/840/sol_rej_840_1.png)

Além disso, também é **obrigatório** informar o **lote** na venda para os produtos dentro dessa faixa de **NCM**.
Para informar o lote no GWEB, após lançar o item no módulo [NF-e](/tutoriais/como-emitir-uma-nfe) ficará disponível a aba **rastreamento**:

![Aba de rastreamento na NF-e](/tutoriais/rejeicoes/840/sol_rej_840_2.png)

Clique em <span class="mat-button">ADICIONAR</span> para abrir o formulário de **rastreamento**:

![Formulário de rastreamento](/tutoriais/rejeicoes/840/sol_rej_840_3.png)

Após informar os dados do **lote** para **rastreabilidade**, clique em <span class="mat-button mat-accent">CONFIRMAR</span> para **adicionar** o **lote** ao produto, e clique em <span class="mat-button">CONFIRMAR</span> novamente para **finalizar** o **lançamento** do produto na **nota fiscal**.
