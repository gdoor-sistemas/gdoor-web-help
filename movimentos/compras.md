---
title: Compras
description: Veja como você pode cadastrar as notas de compra manualmente e por meio da importação do XML
published: true
date: 2022-02-24T20:25:26.711Z
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

imagem 1

## Consultar 

Para verificar se há notas para manifestar, clique no botão “**consultar novas notas**” localizado no canto inferior direito da tela.

imagem 2

Ao clicar para consultar, observe que no canto superior direito aparecerá a mensagem “**consultando novos documentos**”, isso poderá levar alguns segundos. 
Após deverá aparecer a mensagem “**consulta realizada com sucesso**” e se houverem notas para manifestar, elas serão listadas na tela.

imagem 3

Clique no botão  (<em class="mdi mdi-dots-vertical"></em>) para que as opções de ações sejam exibidas.

imagem 4 VAI MUDAR

Será possível:

- **Marcar**, podendo selecionar até 50 notas para manifestar juntamente;
- **Copiar chave de acesso** da nota em questão;
- **Manifestar-se**, a tela para informar o evento será aberta;
- **Download do XML** para baixar o arquivo;
- **Importar XML** para a nota de compra;
- **Consultar SEFAZ**, será direcionado para o site para verificação;
- **Ignorar NF-e** retira da lista uma nota que não deseja importar;
- **Imprimir NF-e**, a tela para impressão do DANFE será aberta.

## Eventos

São quatro eventos:

### Confirmação da Operação

Confirma a operação e o recebimento da mercadoria (para as operações com circulação de mercadoria).

Caso ocorra devolução total ou parcial das mercadorias, além da Nota Fiscal de devolução, poderá ser efetuado o evento de “Confirmação da Operação”, possibilitando assim, a empresa efetuar o download da NF-e conforme especificado no “Serviço de Download da NF-e Confirmada”.

> Após a confirmação da operação pelo destinatário, a empresa emitente fica automaticamente impedida de cancelar a NF-e.
{.is-success}


### Desconhecimento da Operação

Tem como finalidade possibilitar ao destinatário se manifestar quanto a utilização indevida de sua Inscrição Estadual, por parte do emitente da NF-e, para acobertar operações fraudulentas de remessas de mercadorias para destinatário diverso. Este evento protege o destinatário de passivos tributários envolvendo o uso indevido de sua Inscrição Estadual/CNPJ.

### Operação não Realizada

Este evento será informado pelo destinatário, quando por algum motivo, a operação legalmente acordada entre as partes não se realizou (devolução sem entrada física da mercadoria no estabelecimento do destinatário, sinistro da carga durante seu transporte entre outros).

### Ciência da Operação

Registra na NF-e a solicitação do destinatário para a obtenção do arquivo XML, após o registro deste evento, será permitido que o destinatário efetue o download do arquivo XML.
Este evento não representa a manifestação do destinatário sobre a operação, tem como finalidade a obtenção do arquivo XML. Ele registra na NF-e que o destinatário tem conhecimento que o documento foi emitido, mas ainda não expressou uma manifestação conclusiva para a operação.

## Manifestar-se

Ao clicar em **manifestar-se** a tela para seleção do evento será aberta, informe a operação e clique em “**confirmar**”.
 





# Importar XML

Em breve

# Configurações

Em breve