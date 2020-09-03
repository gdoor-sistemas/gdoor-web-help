---
title: Inutilizar numeração de NFC-e
description: Informe à SEFAZ os números que você pulou
published: true
date: 2020-09-03T14:50:12.954Z
tags: nfc-e, sefaz
editor: markdown
---

## O que é a inutilização?

A inutilização é um processo herdado do tempo em que se faziam as notas fiscais de formulário, quando os blocos eram impressos com a numeração fixa. Quando uma nota era preenchida incorretamente ou rasurada, havia a necessidade de se inutilizar aquela nota para justificar o lapso na numeração. Com o surgimento da NF-e, onde a nota em si só existe depois de enviada para a [SEFAZ](/glossario#sefaz) esse processo se torna menos comum, uma vez que o sistema pode reutilizar a numeração caso haja falha na autorização do documento. No entanto, ainda há situações que fazem necessário informar uma quebra na numeração sequencial à Receita, como por exemplo: havendo um erro na transmissão de uma nota, o operador continua transmitindo outras até que o problema seja resolvido, no entanto a demora e tanta, que ao tentar transmitir aquela nota novamente, o servidor a rejeita por ser de emissão muito antiga ou o problema talvez não seja resolvido. Assim, há necessidade de gerar uma nova nota, deixando uma falha no número que aquela problemática assumiu. Para casos assim, a inutilização da numeração se faz útil. 

> Considerando que a nota não existe perante à SEFAZ, chamamos este processo de inutilização da **numeração**, e não da nota.

## Como fazer no GDOOR WEB?

Para inutilizar uma numeração de NFC-e no GDOOR WEB, clique no botão <span class=mat-button><u>I</u>nutilizar numeração</span> no painel lateral da NFC-e:

![Acesso à inutilização na NFC-e](/movimentos/nfce/nfce-inutilizar-acesso.png)

---

![nfce-modal-inutilizacao.png](/movimentos/nfce/nfce-modal-inutilizacao.png){.align-right}

Será aberta a tela apresentada ao lado, os campos a serem preenchidos são:

Série{.subtitle}

Série da numeração a ser inutilizada, geralmente, a que você está utilizando atualmente na NFC-e.

Nº inicial{.subtitle}

Número inicial da faixa que deseja inutilizar.

Nº final{.subtitle}

Número final da faixa que deseja inutilizar.

Justificativa do pedido de inutilização{.subtitle}

Com no mínimo 15 caracteres, descreva o motivo da inutilização dessa numeração.

> Para inutilizar apenas 1 número, preencha o mesmo nos campos **Nº inicial** e **Nº final**.
{.is-success .gw .gw-tip}

Clicando no botão <span data-mat-button>Ver inutilizados</span>