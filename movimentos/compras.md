---
title: Compras
description: Veja como você pode cadastrar as notas de compra manualmente e por meio da importação do XML
published: true
date: 2022-02-25T18:22:26.633Z
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

### Opções

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

Para visualizar apenas dados pertinentes ao que você precisa, é possível efetuar uma **busca**, **filtrar** e **ordenar** as notas listadas. Clicando no botão a **lista é atualizada**.

![buscar.png](/compras/manifestação/7_buscar.png)

### Filtrar

Os filtros também podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. 

![filtros.png](/compras/manifestação/8_filtros.png)

Opções de filtros:

- **Situação**: filtrar por notas “**manifestadas**” e “**não manifestadas**”;
- **Status**: por notas “**ignoradas**”, “**importadas**” para o compras e “**não importadas**”;
- **Emissão inicial**: filtrar por data de emissão, informe a data de início;
- **Emissão final**: filtrar por data de emissão, informe a data de término;
- **Tipo do evento**: filtrar pelo evento manifestado: **confirmação da operação**, **ciência da operação**, **desconhecimento da operação** ou **operação não realizada**.

Após informar o filtro desejado, basta clicar em "**aplicar**".

### Ordenar 

Ordene a lista de acordo com sua preferência, por "**tipo**","**importadas**", "**NSU**", "**data**", "**nome**", entre outros:

![ordenar.png](/compras/manifestação/9_ordenar.png)

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

Ao clicar em **manifestar-se** a tela para seleção do evento será aberta, informe o desejado.
 
![informar evento.png](/compras/manifestação/5_manifestar-se.png)

Após informar o evetno basta clicar em “**confirmar**”.

![confirmar manifestação.png](/compras/manifestação/6.png)



# Importar XML

Em breve

# Configurações

Em breve