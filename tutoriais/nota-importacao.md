---
title: Nota de importação de mercadorias
description: Veja como emitir uma NF-e de importação de mercadorias no GWEB.
published: false
date: 2023-09-25T13:36:27.504Z
tags: tutoriais, nf-e, tutorial, como fazer, impostos, tributos, movimentos, compras, importação
editor: markdown
dateCreated: 2023-09-22T16:50:02.813Z
---

# Introdução
O módulo de NF-e do GWEB atende a emissão de **notas fiscais eletrônicas de importação**, esse documento é necessário para que a mercadoria comprada de **fornecedores estrangeiros** seja **legalmente nacionalizada** para o estoque da empresa importadora, e permitir que seja feito o devido recolhimento dos impostos por parte dos órgãos fiscais brasileiros.

Abaixo segue um **passo a passo** de como emitir esta nota fiscal no GWEB.

# Cadastrando a operação

Inicialmente é preciso cadastrar a natureza de operação acessando o menu de operações e no canto inferior direito clique em nova operação, conforme exibido abaixo.

![Botão nova operação](/tutoriais/nota-importacao/botao_nova_operacao.png)

No formulário da operação, é necessário preencher ao menos o **nome da operação**, selecionar **entrada** e marcar a **caixa de importação**. Após isso, clique em <span class="mat-button mat-accent">SALVAR</span>.

![Cadastro da operação](/tutoriais/nota-importacao/cadastro_operacao.png)

Após o cadastro da operação, podemos partir para o cadastro do fornecedor.

# Cadastrando o fornecedor

Para cadastrar o fornecedor, é necessário primeiro acessar o menu de **pessoas** e no canto inferior direito clique em nova pessoa, conforme exibido abaixo.

![Botão nova pessoa](/tutoriais/nota-importacao/botao_nova_pessoa.png)

No cadastro da pessoa que será o fornecedor, é necessário marcar a caixa de **fornecedor**, preencher o **nome** e alterar o campo do **país** para o **país correto do fornecedor**.
Estas informações estão destacadas na imagem abaixo:

![Botão nova pessoa](/tutoriais/nota-importacao/cadastro_pessoa.png)

> Note que ao alterar o **país**, o sistema exibe o campo **documento de identificação** (destacado acima), este campo é **obrigatório** e corresponde a algum documento que identifique o fornecedor no país dele.
{.is-info}

Além do campo do país citado anteriormente, também é necessário preencher os dados de **endereço** do **fornecedor**.

# Cadastrando o produto

Para cadastrar o **produto** para uma **nota de importação** não existe nenhum detalhe adicional, basta seguir o [**cadastro de um produto**](/cadastros/produtos) comum.

# Lançamento

Para efetuar o lançamento de uma nota fiscal de importação, você deve acessar o menu de NF-e e no canto inferior direito clique em nova NF-e, conforme exibido abaixo.

![Botão nova NF-e](/tutoriais/nota-importacao/botao_nova_nfe.png)

## Natureza da operação

No **formulário da NF-e** o primeiro passo é alterar a **natureza da operação** para a natureza de **importação de mercadorias** cadastrada anteriormente.

![Natureza da operação de importação de mercadorias](/tutoriais/nota-importacao/natureza_operacao_importacao.png)

## Fornecedor

Após selecionar a **operação**, selecione no campo correspondente o **fornecedor** criado anteriormente.

![cadastro_pessoa.png](/tutoriais/nota-importacao/cadastro_pessoa.png)

> Dica:
> Caso você **não** consiga localizar o **fornecedor**, é possível que tenha esquecido de informar o **país** ou de marcá-lo como **fornecedor**, ambos no cadastro de pessoa.
{.is-success}

## Produto

# Conclusão

O processo para o **lançamento** de uma **nota de importação de mercadorias** no GWEB é esse, ao **transmitir a nota**, será gerado o **financeiro** no módulo [**despesas**](/financeiro/despesas) e **entrará** no seu estoque a **quantidade** declarada na nota fiscal.

Para ver mais detalhes sobre cada módulo envolvido neste processo, acesse os tópicos:

- [Natureza da operação](/pt-br/cadastros/operacoes)
- [Pessoas](/pt-br/cadastros/pessoas)
- [Produtos](/pt-br/cadastros/produtos)
- [NF-e](/pt-br/tutoriais/como-emitir-uma-nfe)
- [Despesas](/pt-br/financeiro/despesas)
