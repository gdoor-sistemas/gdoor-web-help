---
title: Orçamentos
description: Veja como registrar seus orçamentos no Gweb
published: false
date: 2022-10-05T18:39:20.583Z
tags: orçamentos
editor: markdown
dateCreated: 2022-10-05T14:30:35.360Z
---

# Introdução

O orçamento é uma operação  importante para gerenciamento das vendas, nele constam as intenções de compra e negociação com o cliente, e pode ser emitido também para **consumidor final**.

No orçamento você pode indicar o [cliente](https://help.gdoorweb.com.br/pt-br/movimentos/orçamentos#cliente), [vendedor](https://help.gdoorweb.com.br/pt-br/movimentos/orçamento#vendedor), [produtos](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#mercadorias), [serviços](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#servi%C3%A7os), formas de [pagamento](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#pagamentos) negociadas e [outras informações](https://help.gdoorweb.com.br/pt-br/movimentos/pedidos#outras-informa%C3%A7%C3%B5es).

Os pedidos de venda podem ser **impressos** ou enviados para o cliente via **e-mail**. Quando houver a confirmação da compra, o pedido de venda poderá ser enviado diretamente para faturamento e geração de [NFC-e](https://help.gdoorweb.com.br/movimentos/pdv/formulario#criando-uma-nfc-e) ou [NF-e](https://help.gdoorweb.com.br/pt-br/tutoriais/como-emitir-uma-nfe#emitindo-uma-nf-e).

Por padrão, ao acessar o módulo de pedidos de venda, você verá a seguinte tela:

### Vendedor

Ao informar o vendedor no pedido de venda, ele não ficará vinculado à venda como um todo, mas sim em cada item. Por isso, ao adicionar ou alterar o vendedor, ele será vinculado aos próximos itens adicionados. Caso você não tenha adicionado o vendedor antes de adicionar os itens, poderá informá-lo no final da venda e o sistema sugerirá vinculá-lo a todos os itens sem vendedor.

Para informar o vendedor no pedido de venda, basta selecionar o desejado no cabeçalho.

![Vendedor](/movimentos/pedidos/vendedor.png)

### Origem do preço

Selecione o preço que será aplicado no pedido, de [venda ou atacado](https://help.gdoorweb.com.br/pt-br/cadastros/produtos).

> Para selecionar o preço de atacado é necessário possuir a [permissão](https://help.gdoorweb.com.br/pt-br/configuracoes/permissoes) para "**alternar para preço de atacado**" marcada nos **pedidos**. 
{.is-info}

Os produtos com preço de atacado ficarão com a tag "**atacado**" na cor azul:

![Origem do preço](/movimentos/pedidos/origem_do_preço.gif)

## Cliente

Informar o cliente no pedido de venda é opcional, caso nenhum cliente seja informado, será indicado automaticamente "**consumidor final**".   
Para indicar um cliente é possível buscá-lo por **nome, CPF/CNPJ, código, telefone** ou **e-mail**.

**<em class="mdi mdi-checkbox-blank-outline"></em> Informar endereço de entrega**: ao marcar o checkbox é possível selecionar o endereço para entrega entre os [endereços cadastrados do cliente](/cadastros/pessoas#endereços).
 