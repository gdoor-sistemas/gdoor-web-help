---
title: Composição de produtos no GWeb
description: Confira neste tópico, detalhes, como configurar e utilizar a composição de produtos no GWeb.
published: false
date: 2025-11-10T20:44:29.904Z
tags: nf-e, produtos, nfc-e, pdv, pré-venda-gerencial
editor: markdown
dateCreated: 2025-10-21T19:08:06.007Z
---

# Introdução
A composição é um processo que consiste em utilizar determinados produtos para montar um produto específico ou desmembrar um determinado item em vários produtos.
Por exemplo, para montar uma cadeira, serão necessários o assento, o encosto, a base e as rodinhas. Esses itens, utilizados na montagem da cadeira, chamaremos de **matéria-prima** neste tutorial.

# Cadastrando os produtos matéria-prima e produto final

No **cadastro de produtos**, cadastre os produtos que compõem a cadeira, ou seja, a matéria-prima: o assento, o encosto, a base, as rodinhas e os braços.

Em seguida, é necessário cadastrar o produto final: a **cadeira** marcando a caixa de **composição**.

![Cadastro da mesa](/tutoriais/composicao/1_cadastro_mesa.png)

É necessário que as matérias-primas possuam quantidades e custos cadastrados, pois esses valores serão usados na composição, calculando o custo total do produto final.

> Lembrando que o produto final, mesa, deve ser cadastrado com a **quantidade zerada** no estoque, pois será a partir da montagem da composição que o saldo no estoque ficará positivo.
{.is-info}

# Montando o produto composto

Acesse o cadastro do produto **cadeira** e localize a seção **Composição do produto**. Clique no botão <em class="mdi mdi-barcode"></em> e selecione os **produtos** necessários e suas respectivas **quantidades** para montar **uma cadeira**.

![Formulário da composição do produto](/tutoriais/composicao/2_form_parcial_homolog.png)

Defina a quantidade de cadeiras que serão montadas para o estoque no campo **Quantidade a montar**.

![Informar quantidade a montar](/tutoriais/composicao/3_form_parcial_quantidade_montar.png)

> Na parte inferior da seção, informe os custos adicionais da produção, como mão de obra ou cola, no caso de uma mesa. Além disso, também é possível visualizar o custo unitário do item composto e a **capacidade produtiva** com base nas quantidades disponíveis das matérias-primas.
{.is-info}

Para excluir um dos itens, clique no ícone <em class="mdi mdi-trash-can" style="color: #b24040"></em> ao lado do item na lista.

> Ao montar o produto composto, o estoque das matérias-primas será reduzido conforme o uso, e o produto final, como a **cadeira**, terá sua unidade registrada em estoque.
{.is-warning}

# Importanto itens pela nota de compra

Para não ser necessário cadastrar os itens manualmente, é possível incluí-los todos de uma vez por meio de uma nota de compra. Clique no ícone <em class="mdi mdi-download-box-outline"></em> localizado no canto superior direito.

![Botão para importar compra](/tutoriais/composicao/4_botao_importar_compra.png)

Selecione a nota de entrada e clique em **importar**. 

>A busca pela nota pode ser feita pelo fornecedor, número da nota ou chave de acesso por meio do campo “Digite para buscar”.
{.is-info}

![Botão para importar nota de compra](/tutoriais/composicao/5_selecionar_e_importar.png)

Após importar os itens, realize o processo de composição repassado anteriormente.

# Desmontando o produto composto

O procedimento de desmontagem de um produto composto segue o caminho inverso ao da montagem. No módulo **Cadastros > Produtos**, localize o produto composto e clique em **Editar**.

Selecione a opção Desmontar, informe a quantidade a desmontar e acione o botão <span class="mat mat-button mat-accent">DESMONTAR</span>.

Ao realizar o procedimento, a quantidade do produto composto será reduzida e a quantidade dos produtos matérias-primas serão aumentadas no estoque, proporcionalmente à quantidade desmontada.


