---
title: Composição de produtos no GWeb
description: Confira neste tópico, detalhes, como configurar e utilizar a composição de produtos no GWeb.
published: false
date: 2025-11-10T20:35:49.420Z
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

Para que não seja necessário cadastrar os itens manualmente, você tem a opção de incluir todos de uma vez, através de uma nota de compra.
Para isso, basta clicar no ícone <em class="mdi mdi-download-box-outline"></em> localizado no canto superior direito.

![Botão para importar compra](/tutoriais/composicao/4_botao_importar_compra.png)

Selecione a nota de entrada desejada e clique em **importar** no canto inferior direito. Há também possibilidade de realizar a busca pelo fornecedor, número da nota ou chave de acesso, basta clicar no campo “Digite para buscar...”.

![Botão para importar nota de compra](/tutoriais/composicao/5_selecionar_e_importar.png)

Após importar os itens, basta dar continuidade no processo de composição. 

# Desmontando o produto composto

O procedimento de desmontagem do produto composto é o inverso ao da montagem. No módulo **cadastros > produtos** selecione o produto composto e edite.

Selecione a opção Desmontar, informe a quantidade a desmontar e clique no botão <span class="mat mat-button mat-accent">DESMONTAR</span>.

Ao efetuar este procedimento, a quantidade do produto composto irá reduzir e a quantidade dos produtos matéria-prima irão aumentar, de acordo com a quantidade desmontada.


