---
title: Rejeição 740: O proprietário do veículo quando informado deve ser diferente do emitente do MDF-e
description: Veja como solucionar a rejeição 70: O proprietário do veículo quando informado deve ser diferente do emitente do MDF-e.
published: true
date: 2023-11-23T14:39:14.615Z
tags: tutorial, rejeição
editor: markdown
dateCreated: 2023-11-23T14:34:02.813Z
---

# Rejeição 740: O proprietário do veículo quando informado deve ser diferente do emitente do MDF-e

## Motivo

Essa mensagem ocorre quando o veículo é próprio do emitente, mas foi informado um proprietário com os dados iguais aos do emitente.

![Texto da rejeição](/tutoriais/rejeicoes/740/msg_rej_740.png)

## Solução

Primeiro acesse o cadastro de [**veículos**](/cadastros/veiculos), localize o **veículo** utilizado no **MDF-e** e clique no ícone do lápis para **editá-lo**.

Dentro do cadastro do veículo, note que o proprietário possui os dados iguais ao do emitente, porém o código da pessoa é diferente de **"#1"**, como mostrado abaixo.

![Cadastro do emitente duplicado](/tutoriais/rejeicoes/740/sol_rej_740.png)

Para identificar os **veículos próprios** do emitente, você deve colocar o **proprietário** com o código **"#1"**, que é o código interno que identifica o emitente, como mostrado no GIF abaixo:

![Alteração do proprietário](/tutoriais/rejeicoes/740/sol_rej_740_alterar-proprietario.gif)

Após **alterar** os dados do proprietário, clique em <span class="mat-button mat-accent">SALVAR</span> para **gravar** as informações do veículo. Agora com o **proprietário** **correto** informado no veículo, é possível transmitir novamente o **MDF-e**.
