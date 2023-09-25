---
title: Nota de importação de mercadorias
description: Veja como emitir uma NF-e de importação de mercadorias no GWEB.
published: false
date: 2023-09-25T12:44:27.909Z
tags: tutoriais, nf-e, tutorial, como fazer, impostos, tributos, movimentos, compras, importação
editor: markdown
dateCreated: 2023-09-22T16:50:02.813Z
---

# Introdução
O módulo de NF-e do GWEB atende a emissão de **notas fiscais eletrônicas de importação**, esse documento é necessário para que a mercadoria comprada de **fornecedores estrangeiros** seja **legalmente nacionalizada** para o estoque da empresa importadora, e permitir que seja feito o devido recolhimento dos impostos por parte dos órgãos fiscais brasileiros.

Abaixo segue um **passo a passo** de como emitir esta nota fiscal no GWEB.

# Cadastrando a operação

Inicialmente é preciso cadastrar a natureza de operação acessando o menu de operações e no canto inferior direito clicar no botão com o **+**.

![Botão nova operação](/tutoriais/nota-importacao/botao_nova_operacao.png)

No formulário da operação, é necessário preencher ao menos o **nome da operação**, selecionar **entrada** e marcar a **caixa de importação**. Após isso, clique em <span class="mat-button mat-accent">SALVAR</span>.

![Cadastro da operação](/tutoriais/nota-importacao/cadastro_operacao.png)

Após o cadastro da operação, podemos partir para o cadastro do fornecedor.

# Cadastrando o fornecedor

Para cadastrar o fornecedor, é necessário primeiro acessar o menu de **pessoas** e no canto inferior direito clicar no **+**.

![Botão nova pessoa](/tutoriais/nota-importacao/botao_nova_pessoa.png)

No cadastro da pessoa que será o fornecedor, é necessário marcar a caixa de **fornecedor**, preencher o **nome** e alterar o campo do **país** para o **país correto do fornecedor**.
Estas informações estão destacadas na imagem abaixo:

![Campos do cadastro de pessoa](/tutoriais/nota-importacao/cadastro_pessoa.png)

> Note que ao alterar o **país**, o sistema exibe o campo **documento de identificação** (destacado acima), este campo é **obrigatório** e corresponde a algum documento que identifique o fornecedor no país dele.
{.is-info}

Além do campo do país citado anteriormente, também é necessário preencher os dados de **endereço** do **fornecedor**.

# Cadastrando o produto

Para cadastrar o produto para uma nota de importação não existe nenhum detalhe adicional, basta seguir o [cadastro de produto](/cadastros/produtos).

# Lançamento da NF-e

Para efetuar o lançamento de uma **nota fiscal de importaçã**o, é necessário acessar o menu de **NF-e**, clique no **+** no canto inferior direito.

![Botão nova NF-e](/tutoriais/nota-importacao/botao_nova_nfe.png)

## Natureza da operação

No **formulário da NF-e** o primeiro passo é alterar a **natureza da operação** para a natureza de **importação de mercadorias** cadastrada anteriormente.

![Natureza da operação](/tutoriais/nota-importacao/natureza_operacao_importacao.png)

## Fornecedor

Após selecionar a **operação**, selecione no campo correspondente o **fornecedor** criado anteriormente.

![Fornecedor da importação](/tutoriais/nota-importacao/fornecedor_importacao.png)

> **Dica:**
> Caso você **não** consiga localizar o fornecedor, é possível que tenha esquecido de informar o **país** dele ou de marcá-lo como **fornecedor** no **cadastro de pessoa**.
{.is-info}

## Produto

Com o **fornecedor** e a **operação** já selecionados, é possível incluir os **produtos** da importação. Clique no botão com o ícone <span class="mdi mdi-barcode"></span> ou pelo atalho <kbd>INSERT</kbd> do teclado.

Ao selecionar o produto da **nota de importação**, serão exibidas as abas de, **identificação**, **tributos**, **D.I**. e **adicionais**.

### Identificação

Na aba de identificação, ficam os dados da entrada do produto como **quantidade**, **valor unitário**, **desconto** e o **valor total** do produto.

![Aba de identificação](/tutoriais/nota-importacao/aba_identificacao_importacao.png)

### Tributos

Na aba de tributos, você pode preencher o **CFOP**, dados de **ICMS**, **IPI**, **PIS/COFINS** e **II(Imposto de importação)**. Abaixo segue cada uma das abas:

![Tributos parte 1 ICMS e PIS/COFINS](/tutoriais/nota-importacao/tributos_parte_1_icms_pis_cofins.png)

> **Para o correto preenchimento das informações tributárias, é necessário o auxílio da contabilidade.**
{.is-danger}

![Tributos parte 2 IPI e II](/tutoriais/nota-importacao/tributos_parte_2_ipi_ii.png)

### D.I. (Declaração de importação)
