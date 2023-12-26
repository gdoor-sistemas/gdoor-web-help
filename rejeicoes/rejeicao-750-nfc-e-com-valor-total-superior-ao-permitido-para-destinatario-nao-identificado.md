---
title: Rejeição 750: NFC-e com valor total superior ao permitido para destinatário não identificado
description: Veja como solucionar a rejeição 750: NFC-e com valor total superior ao permitido para destinatário não identificado.
published: true
date: 2023-12-26T12:29:10.160Z
tags: tutorial, rejeição
editor: markdown
dateCreated: 2023-12-26T12:29:10.160Z
---

# Rejeição 750: NFC-e com valor total superior ao permitido para destinatário não identificado

## Motivo

Ocorre quando a NFC-e tem um valor muito alto e não foi informado um cliente.

![Texto rejeição 750](/tutoriais/rejeicoes/750/msg_rej_750.png)


## Solução

Acesse a listagem de NFC-e, localize a NFC-e rejeitada, clique no ícone do lápis (<span class="mdi mdi-pencil"></span>) para editar a NFC-e.

![Editar a NFC-e](/tutoriais/rejeicoes/750/sol_rej_750_1.png)

Pressione a tecla <kbd>F7</kbd> ou clique nas opções (<span class="mdi mdi-dots-vertical"></span>) no canto superior direito e selecione a opção "**informar cliente**", **localize** ou **cadastre** um novo cliente e clique em <span class="mat mat-button">CONFIRMAR</span> e **finalize** a venda.

![Informar o cliente](/tutoriais/rejeicoes/750/sol_rej_750_2.png)

> Para **evitar** que ocorra novamente, verifique junto sua **contabilidade** qual o **valor máximo** que é aceito em seu estado para vendas **sem informar o cliente**.
{.is-warning}

Acesse as **configurações do PDV** no canto inferior direito.

![Acessar as configurações do PDV](/tutoriais/rejeicoes/750/sol_rej_750_3.png)

No quadro de **comportamento**, marque o campo **exigir cliente após valor** e informe o valor repassado pela sua contabilidade.

> Preencha o valor limite com **R$ 0,00** para sempre exigir o cliente nas vendas.
{.is-info}


![Informar valor para exigir cliente](/tutoriais/rejeicoes/750/sol_rej_750_4.png)

Ao terminar a configuração, clique em <span class="mat mat-button mat-accent">SALVAR</span> para gravar as configurações. 
Ao realizar novas vendas, o sistema solicitará automaticamente o cliente quando a venda estiver acima do valor cadastrado no campo.
