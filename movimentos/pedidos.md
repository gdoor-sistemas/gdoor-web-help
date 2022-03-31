---
title: Pedidos de venda
description: Veja como registrar seus pedidos de venda no Gweb
published: true
date: 2022-03-31T19:28:15.093Z
tags: produtos, movimentos, serviços
editor: markdown
dateCreated: 2021-05-25T12:24:39.280Z
---

# Introdução

O pedido de venda é uma operação  importante para gerenciamento das vendas, nele constam as intenções de compra do cliente, e por ser um documento que antecede a venda, não é necessário que todos os dados do cliente estejam cadastrados, podendo ser emitido também para **consumidor final**.

No pedido de venda você pode indicar o [cliente](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#cliente), [vendedor](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#vendedor), [produtos](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#mercadorias), [serviços](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#servi%C3%A7os), formas de [pagamento](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#pagamentos) negociadas e [outras informações](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#outras-informa%C3%A7%C3%B5es).

Os pedidos de venda podem ser **impressos** ou enviados para o cliente via **e-mail**. Quando houver a confirmação da compra, o pedido de venda poderá ser enviado diretamente para faturamento e geração de [NFC-e](https://help.gdoorweb.com.br/movimentos/nfc-e/formulario#criando-uma-nfc-e) ou [NF-e](https://help.gdoorweb.com.br/pt-br/tutoriais/como-emitir-uma-nfe#emitindo-uma-nf-e).

Por padrão, ao acessar o módulo de pedidos de venda, você verá a seguinte tela:

![tela_inicial_2.png](/movimentos/pedidos/tela_inicial_2.png)

# Novo pedido de venda

Para criar um pedido de venda, você pode:

-   Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto **direito inferior** da tela inicial do pedido de venda;
-   Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no **painel lateral** do pedido de venda, ao lado do acesso à lista.

Todas as opções acima estão indicadas na imagem abaixo:

![novo_pedido_2.png](/movimentos/pedidos/novo_pedido_2.png)

A imagem abaixo é de um novo pedido de venda:

![novo2.png](/movimentos/pedidos/novo2.png)

## Cabeçalho

No cabeçalho constam data e hora de “**emissão**” do pedido de venda, data e hora de “**entrega**” e "**vendedor**".

### Vendedor

Ao informar o vendedor no pedido de venda, ele não ficará vinculado à venda como um todo, mas sim em cada item. Por isso, ao adicionar ou alterar o vendedor, ele será vinculado aos próximos itens adicionados. Caso você não tenha adicionado o vendedor antes de adicionar os itens, poderá informá-lo no final da venda e o sistema sugerirá vinculá-lo a todos os itens sem vendedor.

Para informar o vendedor no pedido de venda, basta selecionar o desejado no cabeçalho.

![](/movimentos/pedidos/vendedor.png)

## Cliente

Informar o cliente no pedido de venda é opcional, caso nenhum cliente seja informado, será indicado automaticamente "**consumidor final**".   
Para indicar um cliente é possível buscá-lo por **nome, CPF/CNPJ, código, telefone** ou **e-mail**.

## Mercadorias

Você pode adicionar um produto clicando no ícone laranja conforme demonstrado na imagem abaixo ou utilizando a tecla <span class="mat-button mdi "> insert</span> do teclado. É possível lançar um produto informando o **código, código de barras** ou buscando pela **descrição**. 

![](/movimentos/pedidos/mercadorias.png)

É possível personalizar a ordem e os campos para visualização em tela, para isso clique no botão (<em class="mdi mdi-cog"></em>)  “**mais opções para os produtos**”, em seguida em “**colunas**” e marque/desmarque e mova os campos para a ordem que desejar.

![](/movimentos/pedidos/opções_produtos.png)

## Serviços

Para poder adicionar serviços no pedido de venda, você precisa habilitar o uso de serviços no sistema nas [configurações](https://help.gdoorweb.com.br/configuracoes/geral), e depois [cadastrar os serviços](https://help.gdoorweb.com.br/cadastros/servicos).

Para adicionar serviços no pedido de venda, você pode clicar no ícone laranja conforme demonstrado na imagem abaixo ou utilizar as teclas <span class="mat-button mdi "> shift</span> + <span class="mat-button mdi "> insert</span> no teclado.
É possível lançar um serviço pelo código numérico do serviço, digitando uma barra no campo de busca (\\ ou /) para que o sistema mostre os serviços encontrados ou digitando a descrição do serviço desejado.

![](/movimentos/pedidos/serviços.png)

Para personalizar a ordem e os campos para visualização em tela, para isso clique no botão de engrenagem (<em class="mdi mdi-cog"></em>)  “**mais opções para os serviços**”, em seguida em “**colunas**” e marque/desmarque e mova os campos para a ordem que desejar.

![](/movimentos/pedidos/opções_serviços.png)

## Pagamentos

Para adicionar o pagamento, você pode clicar no ícone laranja conforme demonstrado na imagem abaixo e as formas de pagamento serão exibidas.

![](/movimentos/pedidos/pagamentos.png)

## Outras informações

Campo para preenchimento de informações adicionais ao pedido de venda.

![](/movimentos/pedidos/outras_info.png)
 
> Nas “**configurações**” do pedido de venda, em “[informações adicionais](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#informa%C3%A7%C3%B5es-adicionais)” é possível definir uma mensagem padrão que será inserida automaticamente em todos os pedidos de venda.
{.is-success .gw .gw-tip}

# Lista

Na tela de lista, você visualiza os pedidos de venda efetuados e pode fazer uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#busca) ou [filtro](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#filtros) para visualizar apenas dados pertinentes ao que você precisa.

## Busca

Para localizar um pedido de venda, digite no campo de busca no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>).
Para aplicar [filtros](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#filtros) aprimorados, clique no botão "**filtrar**" (<em class="mdi mdi-filter"></em>). 
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).

![digite para buscar](/movimentos/compras/busca.png)

> O que você digitar será buscado entre as seguintes informações do pedido de venda:  
> **Campos numéricos**: código de barras e código do produto, número da nota;  
> **Campos textuais**: razão social e nome fantasia do cliente e nome dos produtos.
{.is-success .gw .gw-tip}

## Filtrar

Os filtros podem ser definidos como padrão. Para fazer um filtro na lista, clique no botão de "**filtro**" (<em class="mdi mdi-filter"></em>) e o painel será exibido:

![](/movimentos/pedidos/filtro.png)

No painel de filtros destacado na imagem acima temos:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro. 

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![Opções do filtro](https://help.gdoorweb.com.br/movimentos/nfce/opcoes-filtro-nfce.png)

> Sempre que um filtro estiver aplicado, você verá o **botão de filtro na cor laranja**: 
![filtro aplicado](https://help.gdoorweb.com.br/movimentos/nfce/nfce-filtro-aplicado.png)
{.is-success .gw .gw-tip}

As opções de filtro são as seguintes:

-   **Cliente/Fornecedor**;
-   **Usuário**;
-   **Vendedor**;
-   **Status**;
-   **Data inicial**;
-   **Data final**.

Para aplicar um filtro, clique no botão <span class="mat-button mdi "> aplicar</span>. Depois de aplicado, você pode removê-lo, clicando em <span class="mat-button mdi "> limpar filtros</span>:

![](/movimentos/pedidos/limpar_filtro.png)

## Lista

No quadro da lista, na barra superior, você encontra o controle de paginação, que permite visualizar os pedidos de venda em partes pra não carregar todos de uma vez. Você pode escolher o tamanho da página, ou seja, a quantidade de itens a cada carregamento, além de poder navegar entre as páginas.

![](/movimentos/pedidos/paginação.png)

Em cada item da lista você pode encontrar as seguintes informações:

![](/movimentos/pedidos/lista.png)
1.  Imagem vinculada ao cadastro do cliente. Apresentará uma imagem genérica quando não houver.
2.  Nome do cliente. Será apresentada a informação "consumidor final" quando o cliente não for informado.
3.  Número sequencial do pedido de venda, data e hora da criação. Também apresenta o valor total do pedido de venda.
4.  [Editar pedido](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#editar-pedido). Se o pedido de venda ainda estiver com status em aberto, poderá ser editado.
5.  [Menu de ações](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#a%C3%A7%C3%B5es) a serem executadas com o pedido de venda em questão.

### Editar pedido
Para os pedidos da lista que ainda não foram faturados (com status aberto), há um botão para "**edição**" (<span class="mdi mdi-pencil"></span>). Se estiver usando em um computador, este botão será exibido apenas sobre o item que você passar o mouse:


### Ações

Ao lado de cada item na lista, há um botão com ações de contexto para o pedido selecionado. Se estiver usando em um computador, este botão será exibido apenas sobre o item que você passar o mouse:

<span class="mat-button mdi mdi-check"> Selecionar</span>

Visível para todos os pedidos de venda. Inicia o modo de [seleção múltipla](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#sele%C3%A7%C3%A3o-m%C3%BAltipla).

<span class="mat-button ![br-map.png](/movimentos/pedidos/br-map.png)"> GERAR NF-e</span> 


Visível para os pedidos de venda com status aberto. Direciona para geração de uma nova [NF-e](https://help.gdoorweb.com.br/pt-br/tutoriais/como-emitir-uma-nfe#emitindo-uma-nf-e).

<span class="mat-button mdi mdi-qrcode"> gerar NFC-e</span>

Visível para os pedidos de venda com status aberto. Direciona para geração de uma nova [NFC-e](https://help.gdoorweb.com.br/movimentos/nfc-e/formulario#criando-uma-nfc-e).

<span class="mat-button mdi mdi-content-duplicate"> duplicar</span>

Visível para todos os pedidos de venda: com status aberto ou faturado. Possibilita duplicar, efetuar uma cópia do pedido de venda em questão.

<span class="mat-button mdi mdi-email"> Enviar por e-mail</span>

Visível para todos os pedidos de venda com status aberto ou faturado. Envia um e-mail para o endereço do cadastro do cliente com o pedido de venda.

<span class="mat-button mdi mdi-printer"> imprimir</span>

Visível para todos os pedidos de venda com status aberto ou faturado. Permite visualizar o pedido de venda em PDF no [visualizador de PDF](https://help.gdoorweb.com.br/dicas/visualizador-pdf) do Gweb e imprimi-lo se desejar.

<span class="mat-button mdi mdi-delete"> excluir</span>

Visível para os pedidos de venda com status aberto. Possibilita a exclusão do pedido de venda. Ele será eliminado da base de dados e não será possível recuperá-lo novamente.

<span class="mat-button ![br-map.png](/movimentos/pedidos/br-map.png)"> ver NF-e</span> 

Visível apenas para NF-e faturadas. Possibilita a visualização da NF-e.

<span class="mat-button mdi mdi-qrcode"> ver NFC-e</span>

Visível apenas para NFC-e faturadas. Possibilita a visualização da NFC-e.

### Seleção múltipla

O modo de seleção múltipla permite que você selecione vários pedidos de venda para executar uma ação com todos simultaneamente. Atualmente, as ações disponíveis para este modo são: <span class="mat-button mdi "> gerar nf-e</span> e <span class="mat-button mdi "> gerar nfc-e</span>.  
Você pode ativar o modo de seleção múltipla ao clicar no [menu de ações](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#a%C3%A7%C3%B5es) do pedido de venda na opção <span class="mat-button mdi mdi-check"> Selecionar</span>, ou no caso de dispositivos de toque, dar um toque longo no item.

![](/movimentos/pedidos/selecionar.png)

Depois de selecionar um pedido de venda, você poderá clicar em outros para marcar ou desmarcar. Só é possível marcar pedidos exibidos na página atual. Para ter mais opções para selecionar, você pode aumentar a quantidade de itens por página e/ou aplicar um [filtro](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#filtros).

![](/movimentos/pedidos/selecionar_ações.png)

As ações disponíveis conforme indicado na imagem acima são:  
1. Caixa que permite marcar/desmarcar todos os pedidos de venda em exibição na página;  
2. Gerar NF-e para os pedidos de venda selecionados;  
3. Gerar NFC-e para os pedidos de venda selecionados;  
4. Desmarcar todos e fechar o modo de seleção múltipla.  

As ações disponíveis no modo de seleção múltipla estarão visíveis apenas se todos os pedidos de venda selecionadas forem elegíveis para tal ação. Por exemplo, se você selecionar um pedido de venda faturado e outro em aberto, as ações não estarão disponíveis.

# Configurações do pedido de venda

Neste tópico você verá o que pode ser configurado no pedido de venda.

## Comportamento

Nesta seção você configura como o sistema deve se comportar em determinadas situações.

**Sugerir vendedor**: o usuário logado é sugerido preferencialmente ao efetuar um novo pedido.

![](/movimentos/pedidos/comportamento.png)

## Informações adicionais

Nesta seção você pode inserir uma mensagem padrão que aparecerá no campo de informações adicionais do pedido de venda. Ao efetuar um pedido de venda, a informação adicional pode ser editada ou apagada manualmente.

![](/movimentos/pedidos/inf_adicionais_2.png)

## Vídeo

<div class=text-center>
<iframe width="640" height="360" src="https://www.youtube.com/embed/9PmgTQ6XW88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>