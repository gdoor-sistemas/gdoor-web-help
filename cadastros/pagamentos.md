---
title: Pagamentos
description: Veja como cadastrar e usar as formas de pagamento no Gweb
published: true
date: 2025-10-23T20:55:32.208Z
tags: cadastros, pagamentos, visão geral
editor: markdown
dateCreated: 2020-01-03T19:30:35.400Z
---

# Introdução

Este módulo permite que você cadastre os de meios de pagamento para utilização nas vendas.

# Nova forma de pagamento

Para cadastrar uma nova forma de pagamento, clique no botão de adição (<em class="mdi mdi-plus"></em>) no **canto direito inferior** da tela inicial.

![listagem.png](/cadastros/pagamentos/nova_forma_pagamento.png)

A tela para identificação da forma de pagamento será aberta:

![nova forma pagamento.png](/cadastros/pagamentos/forma_pagamento.png)

- **Nome da forma de pagamento**: informe um nome para a forma de pagamento desejada, como por exemplo: à vista, cartão de crédito, dinheiro, boleto, PIX...(campo obrigatório);
- **Descrição**: campo opcional;
- **Tipo de pagamento**: selecione entre as opções disponíveis (campo obrigatório);
- **Referência na NF-e**: selecione entre as opções disponíveis (campo obrigatório);
>O campo **“Forma gerada no XML”** deve ser selecionado conforme a forma que será enviada no XML, pois a SEFAZ valida, no XML da NF-e/NFC-e, o campo **"tPag"**, responsável por identificar a forma de pagamento informada no documento fiscal.
Para consultar todas as formas de pagamento que a SEFAZ valida, acesse o [Portal da Nota Fiscal Eletrônica - Documentos - Diversos](/https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=/NJarYc9nus=) e localize a última Tabela de Meios de Pagamento atualizada.
{.is-info}
- **Conta financeira**: selecione uma [conta financeira](/financeiro/contas) já cadastrada para ser associada a este meio de pagamento;
- **Dispositivo**: Selecione o dispositivo que essa forma de pagamento utilizar.

> Na aba de **dispositivos**, na direita, fica a lista de dispositivos cadastrados para integração com o [Gdoor Pay](/ferramentas/integracoes/gdoorpay).
{.is-info}

Após preencher as informações clique em <span class="mat-button mat-accent mdi"> salvar</span>.

# Dispositivos

O cadastro de dispositivos fornece integração do **GWEB** com o **TEF** ou com o aplicativo **ZPOS** disponível nas maquininhas de cartão da **STONE**, **BANRISUL (Vero Smart POS)** e **PAGBANK**. Em breve nas maquininhas do **SICREDI**.


![cad-dispositivo01.png](/config/ferramentas/cad-dispositivo01.png)

## POS

Os campos disponíveis no formulário dos dispositivos POS são:

![Formulário POS](/cadastros/pagamentos/form_pos.png)

- **Tipo de dispositivo:** POS;
- **Nome (identificação):** Identificação da maquininha POS;
- **Integradora:** Selecione uma das integradoras disponíveis de acordo com a sua maquininha;
- **Número Serial (POS):** Código exibido no app do Zpos dentro da maquinha;
- **Imprimir documento da venda POS NFC-e (Decreto 56670/22 do RS):** Configuração para imprimir o documento da venda (NFC-e) dentro da maquininha POS.
- **Imprimir documento da venda POS NF-e (Decreto 56670/22 do MT):** Configuração para imprimir o documento da venda (NF-e) dentro da maquininha POS.

Para informações sobre como utilizar esta integração, [clique aqui](/pt-br/tutoriais/zpos).

> Algumas maquininhas, como a PagBank, exigem um campo adicional para identificar a maquininha 
{.is-info}

## TEF
Os campos disponíveis no formulário dos dispositivos TEF são:

![Formulário TEF](/cadastros/pagamentos/form_tef.png)

- **Tipo de dispositivo:** POS;
- **Nome (identificação):** Identificação da maquininha POS;
- **Código da empresa:** Código de identificação da empresa no TEF;
- **Código da filial:** Código de identificação da filial no TEF;
- **Código do terminal:** Código de identificação do terminal no TEF;
- **Código do operador:** Código de identificação do operador no TEF;
- **Porta USB PinPad:** Selecione a porta COM que identificará o TEF;
- **Integradora:** Selecione a empresa integradora do TEF;

Para informações sobre como utilizar esta integração, [clique aqui](/pt-br/tutoriais/tef-no-gweb).


