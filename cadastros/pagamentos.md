---
title: Pagamentos
description: Veja como cadastrar e usar as formas de pagamento no Gweb
published: true
date: 2024-01-19T12:17:27.533Z
tags: cadastros, pagamentos, visão geral
editor: markdown
dateCreated: 2020-01-03T19:30:35.400Z
---

# Introdução

Este módulo permite que você cadastre os de meios de pagamento para utilização nas vendas.

## Nova forma de pagamento

Para cadastrar uma nova forma de pagamento, clique no botão de adição (<em class="mdi mdi-plus"></em>) no **canto direito inferior** da tela inicial.

![listagem.png](/cadastros/pagamentos/nova_forma_pagamento.png)

A tela para identificação da forma de pagamento será aberta:

![nova forma pagamento.png](/cadastros/pagamentos/forma_pagamento.png)

- **Nome da forma de pagamento**: informe um nome para a forma de pagamento desejada, como por exemplo: à vista, cartão de crédito, dinheiro, boleto, PIX...(campo obrigatório);
- **Descrição**: campo opcional;
- **Tipo de pagamento**: selecione entre as opções disponíveis (campo obrigatório);
- **Referência na NF-e**: selecione entre as opções disponíveis (campo obrigatório);
- **Conta financeira**: selecione uma [conta financeira](/financeiro/contas) já cadastrada para ser associada a este meio de pagamento;
- **Dispositivo**: Selecione o dispositivo que essa forma de pagamento utilizar.

> Na aba de **dispositivos**, na direita, fica a lista de dispositivos cadastrados para integração com o [Gdoor Pay](/ferramentas/integracoes/gdoorpay).
{.is-info}

Após preencher as informações clique em <span class="mat-button mat-accent mdi"> salvar</span>.

## Dispositivos

O cadastro de dispositivos fornece integração entre o **GWEB** e o aplicativo **ZPOS** disponível nas maquininhas de cartão da **STONE**, **BANRISUL (Vero Smart POS)** e **PAGBANK**. Em breve nas maquininhas do **SICREDI**.

![cad-dispositivo01.png](/config/ferramentas/cad-dispositivo01.png)

Para informações sobre como utilizar esta integração, [clique aqui](/pt-br/tutoriais/zpos).
