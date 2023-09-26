---
title: Nota de importação de mercadorias
description: Veja como emitir uma NF-e de importação de mercadorias no GWEB.
published: false
date: 2023-09-26T19:10:19.671Z
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

![Campos do cadastro da pessoa](/tutoriais/nota-importacao/cadastro_pessoa.png)

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

![Selecionar fornecedor na importação](/tutoriais/nota-importacao/fornecedor_importacao.png)

> Dica:
> Caso **não** consiga localizar o **fornecedor**, é possível que não tenha informado o **país** ou não marcou-o como **fornecedor**, ambos no cadastro de [pessoa](/cadastros/pessoas).
{.is-success}

## Produto

Com o **fornecedor** e a **operação** selecionados, é possível incluir os **produtos** da importação, basta clicar no botão **adicionar produto** ou pelo atalho <kbd>INSERT</kbd> do teclado.

Ao **selecionar** o produto da nota de importação, serão exibidas as abas de, **identificação**, **tributos**, **D.I.** e **adicionais**.

### Identificação
Na aba de **identificação**, ficam os dados da entrada do produto, como **quantidade**, **valor unitário**, **desconto** e **valor total do produto**.

![Aba de identificação](/tutoriais/nota-importacao/aba_identificacao_importacao.png)

### Tributos

Na aba de tributos, você pode preencher o **CFOP**, os dados de **ICMS**, **IPI**, **PIS/COFINS** e **II(Imposto de Importação)**.

![Tributos parte 1 - ICMS e PIS/COFINS](/tutoriais/nota-importacao/tributos_parte_1_icms_pis_cofins.png)

> **Para o correto preenchimento das informações tributárias, é necessário o auxílio da contabilidade.**
{.is-danger}

![Tributos parte 2 - IPI e II](/tutoriais/nota-importacao/tributos_parte_2_ipi_ii.png)

### D.I. (declaração de importação)

Na aba de **D.I.** você pode incluir os dados de uma ou mais **declarações de importação**, bem como as **adições** de cada uma das **D.I.** da nota.

Para adicionar uma nova D.I. clique no botão <span class="mat-button">INCLUIR D.I.</span>.

![Formulário da declaração de importação](/tutoriais/nota-importacao/formulario_di.png)

> **Para o correto preenchimento das informações da D.I. é necessário o auxílio da contabilidade.**
{.is-danger}

Após a inclusão de pelo menos uma **D.I.** o botão <span class="mat-button">INCLUIR ADIÇÃO</span> será liberado. Clique para abrir o formulário da adição.

![Formulário da adição da D.I.](/tutoriais/nota-importacao/formulario_adicao_di.png)

> **Para o correto preenchimento das informações da adição é necessário o auxílio da contabilidade.**
{.is-danger}

Após informar os **dados do produto**, clique em <span class="mat-button">CONFIRMAR</span> para lançá-lo na NF-e.

## Pagamento e finalização

Para finalizar, é possível informar os **dados de pagamento** conforme as [**formas de pagamento**](/cadastros/pagamentos) cadastradas anteriormente.

Após o **pagamento**, clique em <span class="mat-button mat-accent">SALVAR</span> para **salvar** a nota fiscal e ter a possibilidade de pré-visualizar a **DANFE** e o **XML** da nota de importação, ou clique em <span class="mat-button">SALVAR E TRANSMITIR</span> caso deseje **transmitir** a nota fiscal para a **SEFAZ**.

> **É recomendado que você clique em <span class="mat-button mat-accent">SALVAR</span> e assim gerar o XML e a DANFE da nota de importação para verificar com a contabilidade se os dados estão corretos ou precisam de ajuste.**
{.is-danger}

# Conclusão

O processo para o **lançamento** de uma **nota de importação de mercadorias** no GWEB é esse, ao **transmitir a nota**, será gerado o **financeiro** no módulo [**despesas**](/financeiro/despesas) e **entrará** no seu estoque a **quantidade** declarada na nota fiscal.

Para ver mais detalhes sobre cada módulo envolvido neste processo, acesse os tópicos:

- [Natureza da operação](/pt-br/cadastros/operacoes)
- [Pessoas](/pt-br/cadastros/pessoas)
- [Produtos](/pt-br/cadastros/produtos)
- [NF-e](/pt-br/tutoriais/como-emitir-uma-nfe)
- [Despesas](/pt-br/financeiro/despesas)
