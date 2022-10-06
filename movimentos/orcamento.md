---
title: Orçamentos
description: Veja como registrar seus orçamentos no Gweb
published: false
date: 2022-10-06T13:30:12.791Z
tags: orçamentos
editor: markdown
dateCreated: 2022-10-05T14:30:35.360Z
---

# Introdução

O orçamento é uma operação  importante para gerenciamento das vendas, nele constam as intenções de compra e negociação com o cliente, e pode ser emitido também para **consumidor final**.

No orçamento você pode indicar o [cliente](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#cliente), [vendedor](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#vendedor), [produtos](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#mercadorias), [serviços](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#servi%C3%A7os), formas de [pagamento](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#pagamentos) negociadas e [outras informações](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#outras-informa%C3%A7%C3%B5es).

Os orçamentos podem ser **duplicados**, **impressos**, enviados para o cliente via **e-mail** e transformados em [pedido de venda](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos). Além disso, quando houver a confirmação da compra, o orçamento também poderá ser enviado diretamente para faturamento e geração de [NFC-e](https://help.gdoorweb.com.br/movimentos/pdv/formulario#criando-uma-nfc-e) ou [NF-e](https://help.gdoorweb.com.br/pt-br/tutoriais/como-emitir-uma-nfe#emitindo-uma-nf-e).

Por padrão, ao acessar o módulo de orçamentos, você verá a seguinte tela:

![Tela inicial](/movimentos/orçamentos/tela_inicial.png)

# Novo orçamento

Para criar um orçamento, você pode:

-   Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto **direito inferior** da tela inicial do orçamento;
-   Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no **painel lateral** do orçamento, ao lado do acesso à lista.

Todas as opções acima estão indicadas na imagem abaixo:

![Cadastrar novo orçamento](/movimentos/orçamentos/novo.png)

A imagem abaixo é de um novo orçamento:

![Novo orçamento](/movimentos/orçamentos/novo_orçamento.png)

## Cabeçalho

No cabeçalho constam data e hora de “**emissão**” do orçamento, data e hora de “**entrega**”, "**vendedor**", "**validade**" e "**origem do preço**".

### Vendedor

Ao informar o vendedor no orçamento, ele não ficará vinculado à venda como um todo, mas sim em cada item. Por isso, ao adicionar ou alterar o vendedor, ele será vinculado aos próximos itens adicionados. Caso você não tenha adicionado o vendedor antes de adicionar os itens, poderá informá-lo no final da venda e o sistema sugerirá vinculá-lo a todos os itens sem vendedor.

Para informar o vendedor no orçamento, basta selecionar o desejado no cabeçalho.

![Vendedor](/movimentos/orçamentos/vendedor.png)

### Validade

É possível digitar ou informar pelo calendário a data de validade do orçamento.

![Validade](/movimentos/orçamentos/validade.png)

### Origem do preço

Selecione o preço que será aplicado no orçamento: [venda ou atacado](https://help.gdoorweb.com.br/pt-br/cadastros/produtos).

> Para selecionar o preço de atacado é necessário possuir a [permissão](https://help.gdoorweb.com.br/pt-br/configuracoes/permissoes) para "**alternar para preço de atacado**" marcada nos **pedidos**. 
{.is-info}

Os produtos com preço de atacado ficarão com a tag "**atacado**" na cor azul:

![Origem do preço](/movimentos/orçamentos/origem_do_preço.gif)

## Cliente

Informar o cliente no orçamento é opcional, caso nenhum cliente seja informado, será indicado automaticamente "**consumidor final**".   
Para indicar um cliente é possível buscá-lo por **nome, CPF/CNPJ, código, telefone** ou **e-mail**.

**<em class="mdi mdi-checkbox-blank-outline"></em> Informar endereço de entrega**: ao marcar o checkbox é possível selecionar o endereço para entrega entre os [endereços cadastrados do cliente](/cadastros/pessoas#endereços).

![Endereço de entrega](/movimentos/orçamentos/endereço_de_entrega.gif)

## Produtos

Você pode adicionar um produto clicando no ícone laranja conforme demonstrado na imagem abaixo ou utilizando a tecla <span class="mat-button mdi "> insert</span> do teclado. É possível lançar um produto informando o **código, código de barras** ou buscando pela **descrição**. 

![Produtos](/movimentos/orçamentos/produtos.png)

É possível personalizar a ordem e os campos para visualização em tela, para isso clique no botão (<em class="mdi mdi-cog"></em>)  “**mais opções para os produtos**”, em seguida em “**colunas**” e marque/desmarque e mova os campos para a ordem que desejar.

![Personalizar](/movimentos/orçamentos/personalizar.png)

## Serviços

Para poder adicionar serviços no orçamento, você precisa habilitar o uso de serviços no sistema nas [configurações](https://help.gdoorweb.com.br/configuracoes/geral), e depois [cadastrar os serviços](https://help.gdoorweb.com.br/cadastros/servicos).

Para adicionar serviços no orçamento, você pode clicar no ícone laranja conforme demonstrado na imagem abaixo ou utilizar as teclas <span class="mat-button mdi "> shift</span> + <span class="mat-button mdi "> insert</span> no teclado.
É possível lançar um serviço pelo código numérico do serviço, digitando uma barra no campo de busca (\\ ou /) para que o sistema mostre os serviços encontrados ou digitando a descrição do serviço desejado.

![Serviços](/movimentos/orçamentos/serviços.png)

Para personalizar a ordem e os campos para visualização em tela, clique no botão de engrenagem (<em class="mdi mdi-cog"></em>)  “**mais opções para os serviços**”, em seguida em “**colunas**” e marque/desmarque e mova os campos para a ordem que desejar.

![Opções serviços](/movimentos/orçamentos/opções_serviços.png)

## Pagamentos

Para adicionar o pagamento, você pode clicar no ícone laranja conforme demonstrado na imagem abaixo e as formas de pagamento serão exibidas.

![Pgamentos](/movimentos/orçamentos/pagamentoss.png)

## Outras informações

Campo para preenchimento de informações adicionais ao orçamento.

![Outras informações](/movimentos/orçamentos/outras_informações.png)

# Lista

Na lista, você visualiza os orçamentos emitidos e pode fazer uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#buscar) ou [filtrar](https://help.gdoorweb.com.br/pt-br/movimentos/orcamento#filtrar) informações para visualizar apenas dados pertinentes ao que você precisa.

> Na barra superior do quadro lista, temos o controle de paginação, que permite escolher a quantidade de itens que serão exibidos "**por página**", além de poder navegar entre elas < >.
{.is-info}

As informações mostradas variam de acordo com a situação atual do orçamento exibido na lista, veja mais detalhes abaixo:

### Orçamento em aberto



