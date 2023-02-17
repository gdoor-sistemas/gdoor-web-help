---
title: Conhecimento de Transporte Eletrônico - CT-e
description: 
published: false
date: 2023-02-17T20:40:14.525Z
tags: 
editor: markdown
dateCreated: 2023-02-09T12:51:41.589Z
---

# Introdução

O módulo de CT-e é responsável pelo lançamento do conhecimentos de transporte eletronico, documento que tem a finalidade de registrar as prestações de serviço do transporte rodoviário de cargas e também a movimentação financeira (módulo adicional) das [receitas](/financeiro/receitas) dos conhecimentos  efetuados de forma à vista ou a prazo.

# Lista

Ao acessar o módulo  **movimentações » CT-e**, você visualiza a sua **lista** de **conhecimentos de transporte lançados**. Pode [cadastrar um ct-e](https://help.gdoorweb.com.br/pt-br/movimentos/CT-e#cadastrar-ct-e) e fazer uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/CT-e#buscar) ou [filtrar](https://help.gdoorweb.com.br/pt-br/movimentos/CT-e#filtrar) informações para visualizar apenas dados pertinentes ao que você precisa:

![lista.png](/movimentos/cte/lista.png)

## Buscar

Para localizar uma nota de compra, **digite no campo de busca** no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>).
Para aplicar [filtros](https://help.gdoorweb.com.br/pt-br/movimentos/CT-e#filtrar) aprimorados, clique no botão "**filtrar**" (<em class="mdi mdi-filter"></em>). 
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).
 
![busca.png](/movimentos/cte/busca.png)
 
> O que você digitar será buscado entre as seguintes informações das notas de compra:  
> **Campos numéricos**: código de barras e código do produto, número da nota;  
> **Campos textuais**: razão social e nome fantasia do fornecedor e nome dos produtos.
{.is-success .gw .gw-tip}

## Filtrar

Os filtros também podem ser definidos como padrão. Para efetuar um filtro na lista, clique no botão "**filtro**" (<em class="mdi mdi-filter"></em>) e o painel será exibido:

![filtrar](/movimentos/CT-e/filtro_compra.png)

No painel de filtros destacado na imagem acima temos:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro;

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão "**mais opções** (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão "**mais opções**" (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![opções do filtro](https://help.gdoorweb.com.br/movimentos/CT-e/opcoes-filtro-nfce.png)

> Sempre que um filtro estiver aplicado na lista, você verá o **botão de filtro na cor laranja**:
![filtro aplicado](https://help.gdoorweb.com.br/movimentos/CT-e/nfce-filtro-aplicado.png)
{.is-success .gw .gw-tip}

As opções de filtro são as seguintes:

-   **Fornecedor**;
-   **Usuário**;
-   **Data cadastro inicial**;
-   **Data cadastro final**;
-   **Status**;
-   **Data emissão inicial**;
-   **Data emissão final**.

Para aplicar um filtro, clique no botão <span class="mat-button mdi "> aplicar</span>. Depois de aplicado, você pode removê-lo, clicando em <span class="mat-button mdi "> limpar filtros</span>:

![](/movimentos/pedidos/limpar_filtro.png)

## Cadastrar CT-e

Para cadastrar uma nota de compra manualmente, clique no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da [tela inicial](https://help.gdoorweb.com.br/pt-br/movimentos/CT-e#lista) ou no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso lista.
A tela "**nova compra**" será exibida.

---
- **Cabeçalho**
Insira as informações constantes na nota de compra, como: **número, modelo, série, emissão, entrada** e **natureza da operação**:

![cabeçalho](/movimentos/CT-e/cabeçalhoo.png)

---
- **Fornecedor**
Busque o fornecedor pelo **CNPJ, nome, código, e-mail** ou **telefone**. Caso o fornecedor não esteja cadastrado, clique no botão (<em class="mdi mdi-plus"></em>) para cadastrar.

![fornecedor](/movimentos/CT-e/fornecedor.png)

---
- **Produtos**
Para buscar **produtos** utilize a tecla <kbd>Insert</kbd> do teclado, ou clique no botão (<em class="mdi mdi-barcode"></em>). Informe a **quantidade**, **valor unitário** e demais campos conforme consta na nota de compra, em seguida clique em <span class="mat-button mdi "> confirmar</span>.

![produtos](/movimentos/CT-e/produtos.png)

---
- **Totais da compra**
Preencha as informações de acordo com a nota de compra, em caso de dúvidas, sugerimos que verifique com o contador da empresa.

![totais da compra](/movimentos/CT-e/totais_da_compra.png)

---
- **Pagamentos**
Nesta seção, há duas opções:

**<em class="mdi mdi-checkbox-blank-outline"></em> Não informar pagamentos**: sem geração de histórico financeiro;

**Adicionar pagamento**: geração da [despesa](/financeiro/despesas) no financeiro.

![pagamentos](/movimentos/CT-e/pagamentos_1.png)

---
- **Transporte**
Na seção de transporte, alguns campos são exibidos de acordo com o "**tipo de frete**" selecionado:

**Sem transporte**: não haverá informação de transportadora ou veículo;

**Contratado pelo remetente, destinatário** ou **terceiros**: habilita os campos para informar a transportadora e veículo;

**Transporte próprio por conta do remetente ou destinatário**: habilita os campos para informar a transportadora e veículo.

![transporte](/movimentos/CT-e/transporte.png)

Após a inclusão das informações conforme a nota fiscal de compra, há opção para:

- <span class="mat-button mdi "> concluir</span>: **salva e valida** a nota de compra para dar entrada no estoque. Isso realizará a movimentação do estoque e a nota não poderá mais ser editada nem excluída. Ficará na lista com status **concluída**.

- <span class="mat-button mdi "> salvar</span>: apenas **salva** a nota de compra, que ficará na lista com status **pendente**, sendo possível realizar as ações de **editar compra** (<em class="mdi  mdi-pencil"></em>) ou **concluir compra** (<em class="mdi  mdi-check"></em>):

![nota pendente](/movimentos/CT-e/nota_pendente.png)

# Manifestação do Destinatário eletrônica (MD-e)

A **Manifestação do Destinatário eletrônica (MD-e)** possibilita que a empresa **confirme** ou **recuse** sua participação em uma transação comercial, a fim de evitar que seu CNPJ e inscrição estadual sejam vítimas de fraudes.

Através do módulo de “**compras**” no Gweb é possível informar sobre o andamento da operação na NF-e e confirmar a veracidade das informações contidas na nota.

São quatro eventos possíveis: **confirmação da operação**, **desconhecimento da operação**, **operação não realizada** e **ciência da operação**.

Para efetuar a manifestação é necessário ter um “**certificado digital válido**” e estar em “**ambiente de produção**”.

> As configurações para a Manifestação do Destinatário eletrônica são as mesmas utilizadas nas “**configurações da NF-e**”. 
Caso utilize apenas NFC-e, não será possível utilizar a função de manifestação, pois ela trabalha em conjunto com a NF-e.
{.is-info}

Para acessar o MD-e, no módulo de **compras**, clique em “**manifestação eletrônica**”, localizado no menu lateral direito.

![compras](/compras/manifestação/1_compras.png)

## Consultar 

Para verificar se há notas para manifestar, clique no botão (<em class="mdi mdi-cloud-download-outline"></em>)  “**consultar novas notas**” localizado no **canto inferior direito da tela**.

![consultar](/compras/manifestação/2_manifestação.png)

Ao clicar para consultar, observe que no canto superior direito aparecerá a mensagem “**consultando novos documentos**”, isso poderá levar alguns segundos. 
Após deverá aparecer a mensagem “**consulta realizada com sucesso**” e se houverem notas para manifestar, elas serão listadas na tela.

![lista notas](/compras/manifestação/3_notas.png)

### Opções

Clique no botão  (<em class="mdi mdi-dots-vertical"></em>) para que as opções de ações sejam exibidas.

![opções](/compras/manifestação/opções.png)

Será possível:

- <em class="mdi mdi-checkbox-marked"></em> **Marcar**, pode-se selecionar até 50 notas para manifestar juntamente;
- <em class="mdi mdi-content-copy"></em> **Copiar chave de acesso** da nota em questão;
- <em class="mdi mdi-file-send"></em> **Manifestar-se**, abrirá a tela para informar o evento;
- <em class="mdi mdi-download"></em> **Download XML** para baixar o arquivo;
- <em class="mdi mdi-cart-arrow-down"></em> **Importar XML** para a nota de compra;
- <em class="mdi mdi-refresh"></em> **Consultar na SEFAZ**, será direcionado ao site para consulta da NF-e;
- <em class="mdi mdi-cancel"></em> **Ignorar NF-e**, retira da lista uma nota que não deseja manifestar;
- <em class="mdi mdi-printer"></em> **Imprimir NF-e**, a tela para impressão do DANFE será aberta.

Para visualizar apenas dados pertinentes ao que você necessita, é possível efetuar uma **busca** (<em class="mdi mdi-magnify"></em>), **filtrar** (<em class="mdi mdi-filter"></em>) e **ordenar** (<em class="mdi mdi-sort"></em>) as notas listadas. Clicando no botão (<em class="mdi mdi-refresh"></em>) a **lista é atualizada**.

![menu](/compras/manifestação/7_buscar.png)

### Filtrar

Os filtros (<em class="mdi mdi-filter"></em>) também podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. 

![filtros](/compras/manifestação/8_filtros.png)

Opções de filtros:

- **Situação**: filtrar por notas “**manifestadas**” e “**não manifestadas**”;
- **Status**: por notas “**ignoradas**”, “**importadas**” para o compras e “**não importadas**”;
- **Emissão inicial**: filtrar por data de emissão, informe a data de início;
- **Emissão final**: filtrar por data de emissão, informe a data de término;
- **Tipo do evento**: filtrar pelo evento manifestado: **confirmação da operação**, **ciência da operação**, **desconhecimento da operação** ou **operação não realizada**.

Após informar o filtro desejado, basta clicar em <span class="mat-button mdi "> APLICAR</span>.

### Tags

De acordo com o status e eventos informados, tags serão adicionadas as notas:

![tags](/compras/manifestação/tags.png)

### Ordenar 

Ordene (<em class="mdi mdi-sort"></em>) a lista de acordo com sua preferência, por "**tipo**","**importadas**", "**NSU**", "**data**", "**nome**", entre outros:

![ordenar](/compras/manifestação/9_ordenar.png)

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
 
![informar evento](/compras/manifestação/5_manifestar-se.png)

Após informar o evento basta clicar em <span class="mat-button mdi "> confirmar</span>.

![confirmar manifestação](/compras/manifestação/6.png)

# Importar XML

Ao acessar o módulo **movimentações » compras** clique em "**importar XML**", localizado no painel lateral da página conforme a imagem abaixo:

![importar XML](/movimentos/compras/importar_xml.png)

A tela para seleção do arquivo XML será aberta, localize o desejado e clique em **abrir**, todas as informações que estiverem no XMl serão importadas. 

Se o **fornecedor** ou a  **transportadora** não estiverem cadastrados, a tela para **cadastro** será exibida, verifique as informações e clique em <span class="mat-button mdi "> confirmar</span>.

## Vincular produto cadastrado

Se o sistema identificar produtos novos no XML, a observação de "**novo produto**" constará logo abaixo da descrição.

> Esse produto pode já estar cadastrado no sistema, porém com uma descrição diferente, sendo assim, é possível vincular o item para não ter cadastros repetidos.
{.is-success}

Para isso, clique no botão "**vínculo**" (<em class="mdi mdi-call-merge"></em>) localizado ao lado do item desejado.

![vínculo](/movimentos/compras/vincular_1.png)

A tela para "**vincular item**" será mostrada, busque o "**produto**" desejado, utilize o "**fator de conversão**" se necessário e clique em <span class="mat-button mdi "> vincular</span>.

![vincular](/movimentos/compras/vincular_2.png)

Na observação do produto constará o vínculo:

![produto vinculado](/movimentos/compras/vincular_3.png)

Efetue a conferência das demais informações da nota fiscal e para finalizar a importação do XML, clique em:

- <span class="mat-button mdi "> concluir</span>: **salva e valida** a nota de compra para dar entrada no estoque. Isso realizará a movimentação do estoque e a nota não poderá mais ser editada nem excluída. Ficará na lista com status **concluída**.

- <span class="mat-button mdi "> salvar</span>: apenas **salva** a nota de compra, que ficará na lista com status **pendente**, sendo possível realizar as ações de **editar compra** (<em class="mdi  mdi-pencil"></em>) ou **concluir compra** (<em class="mdi  mdi-check"></em>):

![nota pendente](/movimentos/compras/nota_pendente.png)

## Cadastrar novo produto

Se o sistema identificar produtos novos no XML, a observação de "**novo produto**" constará logo abaixo da descrição:

![produto](/movimentos/compras/produtos_novos_1.png)

É possível **cadastrar o produto** diretamente pela nota de compra.
Para **editar o cadastro**, basta clicar sobre o mesmo e a janela abaixo será exibida.
Clique na aba "**novo produto**" e edite/insira as informações necessárias, em seguida clique em <span class="mat-button mdi "> confirmar</span>.

![novo produto](/movimentos/compras/novo.png)

Observe que a descrição do produto foi alterada e na observação consta **novo produto**:

![nova descrição](/movimentos/compras/novo_2.png)

Efetue a conferência das demais informações da nota fiscal e clique em:

- <span class="mat-button mdi "> concluir</span>: **salva e valida** a nota de compra para dar entrada no estoque. Isso realizará a movimentação do estoque e a nota não poderá mais ser editada nem excluída. Ficará na lista com status **concluída**.

- <span class="mat-button mdi "> salvar</span>: apenas **salva** a nota de compra, que ficará na lista com status **pendente**, , sendo possível realizar as ações de **editar compra** (<em class="mdi  mdi-pencil"></em>) e **concluir compra** (<em class="mdi  mdi-check"></em>).

Como produtos novos foram identificados no XML, a mensagem abaixo será exibida. Para que eles sejam adicionados ao cadastro de estoque, clique em <span class="mat-button mdi "> cadastrar</span>.

![cadastrar produtos novos](/movimentos/compras/cadastrar.png)

Clique em <span class="mat-button mdi "> rever</span> se desejar efetuar alguma alteração ou [vincular](https://help.gdoorweb.com.br/pt-br/movimentos/compras#vincular-produto-cadastrado) algum produto.

# Configurações

Nesta seção é possível determinar a [operação padrão](https://help.gdoorweb.com.br/pt-br/movimentos/compras#opera%C3%A7%C3%A3o-padr%C3%A3o) para novas compras e configurações referentes à [Manifestação do Destinatário eletrônica (MD-e)](https://help.gdoorweb.com.br/pt-br/movimentos/compras#manifesta%C3%A7%C3%A3o-eletr%C3%B4nica).

![configurações de compras](/movimentos/compras/configurações_de_compras.png)

## Operação padrão

Configure uma operação padrão para novas compras, desta forma não será necessário escolher manualmente a cada nota. Quando for cadastrar uma nova compra, esta será a operação escolhida por padrão.
Após informar, clique em <span class="mat-button mdi "> salvar</span>.

## Manifestação eletrônica

Informe o último **NSU** (Número Sequencial Único) para utilização no download de documentos eletrônicos, após clique em <span class="mat-button mdi "> salvar</span>.