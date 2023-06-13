---
title: README
description: 
published: true
date: 2022-04-29T18:53:06.097Z
tags: 
editor: markdown
dateCreated: 2020-09-04T13:52:30.768Z
---

# Configurar o Wiki.js

Nesta pasta estão os arquivos de estilo (css) e scripts (javascript) injetados no Wiki.js para aparência e comportamento característicos do GDOOR WEB.
Estes arquivos não são automaticamente lidos pelo Wiki.js, sendo necessário colar seu conteúdo na área administrativa correspondente.

## Sobreposição de CSS

O arquivo [style.css](style.css) contém o estilo sobreposto ao do Wiki.js.
Na área administrativa, fica na seção **Tema** (/a/theme), no quadro **Injeção de código** &raquo; **Sobreposição de CSS**.

## HTML injetado na tag `head`

O arquivo [head.html](head.html) contém o HTML que será injetado na tag `head` das páginas, logo antes do fechamento dessa tag.
Na área administrativa, fica na seção **Tema** (/a/theme), no quadro **Injeção de código** &raquo; **HTML injetado no head**.

## Injeção de HMTL na tag `body`

O arquivo [body.html](body.html) contém o HTML que será injetado na tag `body` das páginas, logo antes do fechamento dessa tag.
Na área administrativa, fica na seção **Tema** (/a/theme), no quadro **Injeção de código** &raquo; **HTML injetado no body**.
