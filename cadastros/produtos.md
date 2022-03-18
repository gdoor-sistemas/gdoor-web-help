---
title: Cadastro de produtos
description: Veja como funciona o cadastro de produtos no Gweb
published: true
date: 2022-03-18T14:31:53.455Z
tags: cadastros, produtos, grade, estoque, visão geral, kits, categorias
editor: markdown
dateCreated: 2020-01-03T19:26:26.647Z
---

# Introdução

Este módulo permite que você cadastre os produtos que serão utilizados nas vendas de NF-e e NFC-e, assim como nas movimentações de compras.

Para visualizar ou alterar os cadastros de produtos, acesse no menu principal: **cadastros** » **produtos**.

![Tela inicial do módulo.png](/produtos/1_novo.png)

# Produtos

É possível cadastrar um novo produto clicando no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial, ou no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso produtos, no painel lateral da página conforme a imagem acima.

A tela para "**novo cadastro**" será aberta:

![Tela novo cadastro de produto.png](/produtos/2_novo.png)

## Identificação

Seção para identificação do produto.

![Identificação.png](/produtos/3_identificação.png)

- **Nome**: informe o nome do produto;
- **Unidade de medida**: indique a unidade desejada ou clique em (<em class="mdi mdi-plus"></em>) para utilizar **unidades de medida adicionais** e **fator de conversão**;
- **IPPT**: informe se é produção **própria** ou de **terceiros**;
- **Tipo de mercadoria**: informe se é **mercadoria para revenda**, **material de uso e consumo** entre outros;
- **Comissão**: porcentagem de comissão do produto;
- **Observações**: informação adicional para o produto, se adicionada entre as tags também irá para a NF-e;
- **Imagem**: selecione um arquivo ou tire uma foto do produto;
- **Grade**: ao marcar o checkbox a seção para "**seleção da grade**" será mostrada:

![grade.png](/produtos/grade.png)

> A [grade](#grades) precisa estar cadastrada.
{.is-info}

- **Nº de série**: ao marcar o checkbox a seção para "**gerenciar números de série**" será mostrada:

![números de série.png](/produtos/número_serie.png)

Para adicionar clique em <span class="mat-button mdi "> gerenciar números de série</span> e em seguida em <span class="mat-button mdi "> adicionar nº de série</span>. Informe o número e clique em <span class="mat-button mdi "> confirmar</span>.

## Categorias

As categorias de produtos são uma forma de classificar e organizar as mercadorias conforme os nichos de vendas.

Você pode **selecionar** na lista de [categorias](#categorias-1) já cadastradas ou digitar o nome da categoria e pressionar <span class="mat-button mdi "> enter</span> para **criar uma nova**.

![Categorias.png](/produtos/4_categorias.png)

> Produtos **cosméticos** por exemplo, podem ser divididos em categorias de: maquiagem, perfumaria, tratamento, cabelos, entre outras.
{.is-success}


## Detalhes

![Detalhes.png](/produtos/5_detalhes.png)

- **Descrição adicional**: descrição adicional do produto;
- **GTIN, EAN, UPC, etc.**: clique no botão (<em class="mdi mdi-dots-vertical"></em>) para adicionar o código de barras. Após clique em <span class="mat-button mdi ">adicionar gtin</span>, digite o código e clique em <span class="mat-button mdi ">confirmar</span>;
- **Referência**:
- **Peso líquido**: peso em quilogramas por unidade do produto;
- **Peso bruto**: peso total do produto (soma do peso do produto e o peso da embalagem);
- **Quantidade em estoque**: quantidade atual do produto presente no estoque;
- **Quantidade mínima**: informe a quantidade ideal para o produto em questão. Com a informação deste campo, é possível gerar um relatório de **produtos na quantidade limite**;
- **Custo de compra**: custo da última compra do produto;
- **Custo médio**: campo calculado pelo sistema, faz uma média entre os valores de todas as compras;
- **Margem de lucro bruto**: percentual de valor a ser aplicado sobre o preço de custo de compra para gerar o preço de venda;
- **Preço de venda**: informe o preço de venda para a comercialização do produto.

## Informações tributárias

![Informações tributárias.png](/produtos/6_informações_tributárias.png)

- **Origem**: indique a origem do produto, se é **nacional** ou **estrangeira**;
- **NCM**: a Nomenclatura Comum do MERCOSUL é o código fiscal que identifica a classe do produto e é obrigatório para a emissão dos documentos fiscais como NFC-e e NF-e. Ao clicar na "lupa" ao lado do campo é possível **procurar NCM** pelo código ou pela descrição;
- **CEST**: o Código Especificador da Substituição Tributária possui 7 dígitos e dece ser preenchido de acordo com cada produto. Ao clicar na "lupa" ao lado do campo é possível **procurar CEST** pelo código ou pela descrição; 
- **ANP**: código a ser informado em produtos lubrificantes, combustíveis e derivados do petróleo;
- **Escala relevante**: indique se o produto é produzido em **escala relevante** (bens e mercadorias que podem não se submeter ao regime de Substituição Tributária) ou **escala não relevante** (produção realizada por empresas optantes pelo Simples Nacional, constituídas por um único estabelecimento e que tenham auferido nos últimos 12 meses, receita bruta de até R$ 180 mil);
- **CNPJ do fabricante**:

## Tributação



![Tributação.png](/produtos/7_tributação.png)


# Categorias

As categorias de produtos são uma forma de classificar e organizar as mercadorias conforme os nichos de vendas.

Para adicionar uma categoria basta clicar no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso categorias, no painel lateral da página.

![nova_categoria.png](/produtos/nova_categoria.png)

Identifique a categoria como desejar e clique em <span class="mat-button mdi "> salvar</span>.

> Produtos de **vestuário** por exemplo, podem ser divididos em categorias de: blazers, blusas, camisetas, calças, jaquetas, vestidos entre outras.
{.is-success}

# Grades

A grade de produtos é um conceito utilizado para cadastrar **apenas um produto** com **características diferentes** no estoque. Podemos imaginar uma “tabela”, onde as variáveis são as linhas e colunas iniciais.

> Por exemplo, pode-se ter um modelo de camiseta nos tamanhos **P**, **M**, **G** e nas cores **laranja**, **preta** e **branca**.
{.is-success}

Para **adicionar uma grade**, clique no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso grades, no painel lateral da página.

Digite o "**nome**" da grade, um "**título para as linhas**" e outro "**título para as colunas**". Utilize os botões (<em class="mdi mdi-plus"></em>) para adicionar linhas e colunas, insira o nome e clique em <span class="mat-button mdi "> confirmar</span>.

![nova_grade.png](/produtos/nova_grade.png)

Após a inclusão das linhas e colunas desejadas, basta clicar para <span class="mat-button mdi "> salvar</span> a grade.

# Kits
