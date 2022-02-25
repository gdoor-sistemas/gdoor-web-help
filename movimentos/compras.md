---
title: Compras
description: Veja como você pode cadastrar as notas de compra manualmente e por meio da importação do XML
published: true
date: 2022-02-25T17:14:19.404Z
tags: nf-e, estoque, movimentos, compras, visão geral
editor: markdown
dateCreated: 2020-01-03T19:34:45.629Z
---

# Introdução

O módulo de compras fará a movimentação de entrada da mercadoria no estoque e também a movimentação financeira da empresa nas compras feitas de forma à vista ou a prazo.

# Lista

Em breve

# Manifestação do Destinatário eletrônica (MD-e)

A **Manifestação do Destinatário eletrônica (MD-e)** possibilita que a empresa confirme ou recuse sua participação em uma transação comercial, a fim de evitar que seu CNPJ e inscrição estadual sejam vítimas de fraudes.

Através do módulo de “**compras**” no Gweb é possível informar sobre o andamento da operação na NF-e e confirmar a veracidade das informações contidas na nota.

São quatro eventos possíveis: **confirmação da operação**, **desconhecimento da operação**, **operação não realizada** e **ciência da operação**.

Para efetuar a manifestação é necessário ter um “**certificado digital válido**” e estar em “**ambiente de produção**”.

> As configurações para a Manifestação do Destinatário eletrônica são as mesmas utilizadas nas “**configurações da NF-e**”. 
Caso utilize apenas NFC-e, basta aplicar as mesmas configurações para a NF-e.
{.is-info}

Para acessar o MD-e, no módulo de compras, clique em “**manifestação eletrônica**”, localizado no menu lateral direito.

![compras.png](/compras/manifestação/1_compras.png)

## Consultar 

Para verificar se há notas para manifestar, clique no botão “**consultar novas notas**” localizado no canto inferior direito da tela.

![consultar.png](/compras/manifestação/2_manifestação.png)

Ao clicar para consultar, observe que no canto superior direito aparecerá a mensagem “**consultando novos documentos**”, isso poderá levar alguns segundos. 
Após deverá aparecer a mensagem “**consulta realizada com sucesso**” e se houverem notas para manifestar, elas serão listadas na tela.

![lista notas.png](/compras/manifestação/3_notas.png)

Clique no botão  (<em class="mdi mdi-dots-vertical"></em>) para que as opções de ações sejam exibidas.

![opções.png](/compras/manifestação/4_menu.png)

Será possível:

- **Marcar**, pode-se selecionar até 50 notas para manifestar juntamente;
- **Copiar chave de acesso** da nota em questão;
- **Manifestar-se**, abrirá a tela para informar o evento;
- **Download XML** para baixar o arquivo;
- **Importar XML** para a nota de compra;
- **Consultar na SEFAZ**, será direcionado ao site para consulta da NF-e;
- **Ignorar NF-e**, retira da lista uma nota que não deseja manifestar;
- **Imprimir NF-e**, a tela para impressão do DANFE será aberta.

## Eventos

São quatro eventos disponíveis:

### Ciência da Operação

Utilizado quando no retorno da consulta tiver apenas o "**resumo da NF-e**". Ele registra a solicitação do destinatário para a obtenção do arquivo XML, após o registro deste evento, será permitido o download do arquivo XML.

> Este evento não representa a manifestação do destinatário sobre a operação, sua finalidade é a obtenção do arquivo XML. 
{.is-warning}


### Confirmação da Operação

Confirma a operação e o recebimento da mercadoria (para operações com circulação de mercadoria).

> Após a confirmação da operação pelo destinatário, a empresa emitente fica automaticamente impedida de cancelar a NF-e.
{.is-success}

### Operação não Realizada

Este evento será informado pelo destinatário, quando por algum motivo, a operação legalmente acordada entre as partes não se realizou (devolução sem entrada física da mercadoria no estabelecimento do destinatário, sinistro da carga durante seu transporte entre outros).

### Desconhecimento da Operação

Tem como finalidade possibilitar ao destinatário se manifestar quanto a utilização indevida de sua Inscrição Estadual, por parte do emitente da NF-e, para acobertar operações fraudulentas de remessas de mercadorias para destinatário diverso. Este evento protege o destinatário de passivos tributários envolvendo o uso indevido de sua Inscrição Estadual/CNPJ.

## Manifestar-se

Ao clicar em **manifestar-se** a tela para seleção do evento será aberta, informe a operação e clique em “**confirmar**”.
 





# Importar XML

Em breve

# Configurações

Em breve