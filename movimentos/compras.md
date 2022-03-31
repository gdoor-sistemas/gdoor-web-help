---
title: Compras
description: Veja como você pode cadastrar as notas de compra manualmente e por meio da importação do XML
published: true
date: 2022-03-31T18:38:04.277Z
tags: nf-e, estoque, movimentos, compras, visão geral
editor: markdown
dateCreated: 2020-01-03T19:34:45.629Z
---

# Introdução

O módulo de compras fará a movimentação de entrada da mercadoria no estoque e também a movimentação financeira da empresa nas compras feitas de forma à vista ou a prazo.

# Lista

Ao acessar o módulo **movimentações » compras** a "**lista**" de **notas de compra** será exibida:

![lista](/movimentos/compras/lista.png)

## Filtrar

Os filtros podem ser definidos como padrão para que sempre que a lista seja aberta, já esteja filtrada. Para fazer um filtro na lista, clique no botão de "**filtro**" (<em class="mdi mdi-filter"></em>) ao lado do campo de busca e o painel de filtros será exibido:

![filtrar](/movimentos/compras/filtro_compra.png)

No painel de filtros destacado na imagem acima, no lado superior direito temos:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro. 

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![opções do filtro](https://help.gdoorweb.com.br/movimentos/nfce/opcoes-filtro-nfce.png)

> Sempre que um filtro estiver aplicado na lista, você verá o **botão de filtro na cor laranja**:
> 
> ![filtro aplicado](https://help.gdoorweb.com.br/movimentos/nfce/nfce-filtro-aplicado.png)
{.is-success .gw .gw-tip}

As opções de filtro são as seguintes:

-   **Cliente/Fornecedor**
    Mostra todos os pedidos efetuados para o cliente/fornecedor informado. Ao aplicar este filtro, serão exibidos apenas os pedidos de venda efetuados para o cliente/fornecedor indicado.
-   **Usuário**  
    Mostra todos os usuários que já gravaram algum pedido de venda. Ao aplicar este filtro, serão exibidos apenas os pedidos de venda salvos pelo usuário selecionado.
-   **Vendedor**  
    Mostra todos os vendedores referenciados em itens do pedido de venda. Ao aplicar este filtro, serão exibidos apenas os pedidos de venda que o vendedor selecionado está referenciado em ao menos 1 item.
-   **Status**  
    Mostra todos os status dos pedidos de venda. O status representa a situação atual do pedido de venda. Ao aplicar este filtro, serão exibidos apenas os pedidos de venda com o status selecionado.
-   **Data inicial**  
    Filtro por período. Para exibir apenas pedidos de venda gerados a partir de uma data específica, aplique este filtro.
-   **Data final**  
    Filtro por período. Para exibir apenas pedidos de venda gerados até uma data específica, aplique este filtro.

Para aplicar um filtro, clique no botão “**APLICAR**” no lado direito inferior do quadro de filtros. Depois de aplicado um filtro, você pode removê-lo, clicando em “**LIMPAR FILTROS**”:


## Cadastrar nota de compra

Para adicionar uma nota de compra manualmente, clique no botão de adição () no canto direito inferior da tela inicial;


concluir salva a nota e valida para dar entrada no estoque.
Isso irá realizar os movimentos do estoque e ela não poderá mais ser editada nem excluída: confirmar
salvar: apenas salva a nota de compra (ficara com status pendente)

# Manifestação do Destinatário eletrônica (MD-e)

A **Manifestação do Destinatário eletrônica (MD-e)** possibilita que a empresa **confirme** ou **recuse** sua participação em uma transação comercial, a fim de evitar que seu CNPJ e inscrição estadual sejam vítimas de fraudes.

Através do módulo de “**compras**” no Gweb é possível informar sobre o andamento da operação na NF-e e confirmar a veracidade das informações contidas na nota.

São quatro eventos possíveis: **confirmação da operação**, **desconhecimento da operação**, **operação não realizada** e **ciência da operação**.

Para efetuar a manifestação é necessário ter um “**certificado digital válido**” e estar em “**ambiente de produção**”.

> As configurações para a Manifestação do Destinatário eletrônica são as mesmas utilizadas nas “**configurações da NF-e**”. 
Caso utilize apenas NFC-e, não será possível utilizar a função de manifestação, pois ela trabalha em conjunto a NF-e.
{.is-info}

Para acessar o MD-e, no módulo de **compras**, clique em “**manifestação eletrônica**”, localizado no menu lateral direito.

![compras.png](/compras/manifestação/1_compras.png)

## Consultar 

Para verificar se há notas para manifestar, clique no botão (<em class="mdi mdi-cloud-download-outline"></em>)  “**consultar novas notas**” localizado no **canto inferior direito da tela**.

![consultar.png](/compras/manifestação/2_manifestação.png)

Ao clicar para consultar, observe que no canto superior direito aparecerá a mensagem “**consultando novos documentos**”, isso poderá levar alguns segundos. 
Após deverá aparecer a mensagem “**consulta realizada com sucesso**” e se houverem notas para manifestar, elas serão listadas na tela.

![lista notas.png](/compras/manifestação/3_notas.png)

### Opções

Clique no botão  (<em class="mdi mdi-dots-vertical"></em>) para que as opções de ações sejam exibidas.

![opções.png](/compras/manifestação/opções.png)

Será possível:

- <em class="mdi mdi-checkbox-marked"></em> **Marcar**, pode-se selecionar até 50 notas para manifestar juntamente;
- <em class="mdi mdi-content-copy"></em> **Copiar chave de acesso** da nota em questão;
- <em class="mdi mdi-file-send"></em> **Manifestar-se**, abrirá a tela para informar o evento;
- <em class="mdi mdi-download"></em> **Download XML** para baixar o arquivo;
- <em class="mdi mdi-cart-arrow-down"></em> **Importar XML** para a nota de compra;
- <em class="mdi mdi-refresh"></em> **Consultar na SEFAZ**, será direcionado ao site para consulta da NF-e;
- <em class="mdi mdi-cancel"></em> **Ignorar NF-e**, retira da lista uma nota que não deseja manifestar;
- <em class="mdi mdi-printer"></em> **Imprimir NF-e**, a tela para impressão do DANFE será aberta.

Para visualizar apenas dados pertinentes ao que você necessita, é possível efetuar uma **busca**, **filtrar** (<em class="mdi mdi-filter"></em>) e **ordenar** (<em class="mdi mdi-sort"></em>) as notas listadas. Clicando no botão (<em class="mdi mdi-refresh"></em>) a **lista é atualizada**.

![buscar.png](/compras/manifestação/7_buscar.png)

### Filtrar

Os filtros (<em class="mdi mdi-filter"></em>) também podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. 

![filtros.png](/compras/manifestação/8_filtros.png)

Opções de filtros:

- **Situação**: filtrar por notas “**manifestadas**” e “**não manifestadas**”;
- **Status**: por notas “**ignoradas**”, “**importadas**” para o compras e “**não importadas**”;
- **Emissão inicial**: filtrar por data de emissão, informe a data de início;
- **Emissão final**: filtrar por data de emissão, informe a data de término;
- **Tipo do evento**: filtrar pelo evento manifestado: **confirmação da operação**, **ciência da operação**, **desconhecimento da operação** ou **operação não realizada**.

Após informar o filtro desejado, basta clicar em <span class="mat-button mdi "> APLICAR</span>.

### Tags

De acordo com o status e eventos informados, tags serão adicionadas as notas:

![tags.png](/compras/manifestação/tags.png)

### Ordenar 

Ordene (<em class="mdi mdi-sort"></em>) a lista de acordo com sua preferência, por "**tipo**","**importadas**", "**NSU**", "**data**", "**nome**", entre outros:

![ordenar.png](/compras/manifestação/9_ordenar.png)

## Eventos

São quatro eventos disponíveis:

### Ciência da operação

Utilizado quando no retorno da consulta tiver apenas o "**resumo da NF-e**". Ele registra a solicitação do destinatário para a obtenção do arquivo XML, após o registro deste evento, será permitido o download do arquivo XML.

> Este evento não representa a manifestação do destinatário sobre a operação, sua finalidade é a obtenção do arquivo XML. 
{.is-warning}


### Confirmação da operação

Confirma a operação e o recebimento da mercadoria (para operações com circulação de mercadoria).

> Após a confirmação da operação pelo destinatário, a empresa emitente fica automaticamente impedida de cancelar a NF-e.
{.is-success}

### Operação não realizada

Este evento será informado pelo destinatário, quando por algum motivo, a operação legalmente acordada entre as partes não se realizou (devolução sem entrada física da mercadoria no estabelecimento do destinatário, sinistro da carga durante seu transporte entre outros).

### Desconhecimento da operação

Tem como finalidade possibilitar ao destinatário se manifestar quanto a utilização indevida de sua Inscrição Estadual, por parte do emitente da NF-e, para acobertar operações fraudulentas de remessas de mercadorias para destinatário diverso. Este evento protege o destinatário de passivos tributários envolvendo o uso indevido de sua Inscrição Estadual/CNPJ.

## Manifestar-se

Ao clicar em **manifestar-se** a tela para seleção do evento será aberta, informe o desejado.
 
![informar evento.png](/compras/manifestação/5_manifestar-se.png)

Após informar o evento basta clicar em <span class="mat-button mdi "> confirmar</span>.

![confirmar manifestação.png](/compras/manifestação/6.png)

# Importar XML
 
Localize o arquivo
cadastre o fornecedor se necessário
todos as informações do XMl serão importadas, efetue a conferencia e clique em salvar ou concluir
caso produto nao esteja cadastrado no estoque o sistema solicitara se deseja atribuir a outro produto ou cadastra-lo

# Configurações

Em breve...