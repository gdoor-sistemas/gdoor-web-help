---
title: Composição de produtos no GWeb
description: Confira neste tópico, detalhes, como configurar e utilizar a composição de produtos no GWeb.
published: false
date: 2025-10-24T19:00:03.919Z
tags: nf-e, produtos, nfc-e, pdv, pré-venda-gerencial
editor: markdown
dateCreated: 2025-10-21T19:08:06.007Z
---

# Introdução
Listamos neste tópico, o procedimento de montagem e desmontagem de produtos compostos, e como criar a **composição** do produto.

A composição é realizada através de um produto composto, onde você utiliza determinados produtos para montar um outro produto em específico.
Vamos utilizar como exemplo, uma mesa. Para fazer uma mesa, precisamos de outros produtos (que chamaremos aqui de matéria-prima).

# Cadastrando os produtos matéria-prima e produto final

No cadastro de produtos, você deve cadastrar previamente os produtos que compõe a mesa, ou seja a matéria-prima: a base, os parafusos, as dobradiças, as pernas e outros, com as suas respectivas quantidades.

Em seguida, é necessário cadastrar o produto final: a mesa marcando a caixa de **composição**.

![Cadastro da mesa](/tutoriais/composicao/1_cadastro_mesa.png)

É necessário que as matérias-primas tenham quantidades e custos cadastrados, pois estes valores serão usados ao fazer a composição, calculando o custo total do produto final.

> Lembrando que o produto final: mesa, deve ser cadastrado com a **quantidade zerada** no estoque, pois será a partir da montagem da composição, que o saldo no estoque ficará positivo.
{.is-info}

# Montando o produto composto

No cadastro de produtos, edite o produto mesa, e localize no formulário do produto, a seção **Composição do produto**.

![Formulário da composição do produto](/tutoriais/composicao/2_form_parcial_homolog.png)

No canto superior direito, clique no ícone <em class="mdi mdi-barcode"></em> e selecione os produtos necessários e suas respectivas quantidades para montar a mesa, como no exemplo acima.

No exemplo que estamos utilizando, vamos montar apenas uma unidade de pizza. Mas você pode definir a quantidade desejada, com um duplo clique no botão “montar”.

