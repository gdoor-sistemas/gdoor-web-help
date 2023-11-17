---
title: Nota de exportação de mercadorias 
description: Veja como emitir uma NF-e de exportação de mercadorias no GWEB.
published: false
date: 2023-11-17T18:31:07.069Z
tags: tutoriais, nf-e, tutorial, como fazer, impostos, tributos, movimentos, compras, exportação
editor: markdown
dateCreated: 2023-11-16T11:56:04.282Z
---

# Introdução

O módulo de NF-e do GWEB atende a emissão de **notas fiscais eletrônicas de exportação**, esse documento é útil para indicar a **Receita Federal** que a carga que está sendo **comercializada** para o **exterior**.
Abaixo segue um passo a passo de como emitir esta nota fiscal no GWEB.

# Cadastrando a regra de tributação

Inicialmente é necessário realizar o cadastro da [regra de tributação](/configuracoes/impostos/regras-de-tributacao), para isso, acesse o menu de configurações >> impostos e clique no botão (+) na direita inferior.

Dentro do cadastro de uma nova regra, na aba de **identificação**, preencha o campo do **nome da regra** com um texto fácil de identificar o propósito da mesma, como **regra para exportação de mercadorias**.
No campo **operação**, marque a opção **geral**.

![Nova regra de tributação](/tutoriais/nota-exportacao/nova_regra.png)

Nas aba de **vínculos**, deixe a opção **sem vínculo agora** marcada. Na aba seguinte, de **tipo de imposto**, marque a opção **ICMS**, como mostrado abaixo:

![Abas de vínculo e tipo de imposto](/tutoriais/nota-exportacao/nova_regra_2_3.png)

Na aba de **impostos** teremos o campo do **CST** ou **CSOSN**. Caso a empresa seja do **regime normal**, deve marcar o CST **41 - Não tributada**, caso seja do **simples nacional** deve marcar a opção **300 - Imune**.

![Aba de impostos](/tutoriais/nota-exportacao/nova_regra_4.png)

Após selecionar o CST ou CSOSN, pode clicar em <span class="mat-button mat-accent">SALVAR</span> no canto direito inferior e partir para o cadastro da operação.

# Cadastrando a operação

Com o cadastro da **regra de tributação** finalizado, é possível iniciar o cadastro da **operação de exportação**, para isso, basta acessar o menu de Cadastros >> Operações e clicar no botão na direita inferior (+).

Dentro do cadastro da operação, no campo **nome da operação**, deve escrever o texto completo da operação, como por exemplo **exportação de mercadorias**.
Para esta operação também devemos marcar as opções de **saída** e **exportação**.

Além disso, na parte de tributação, devemos selecionar a regra de tributação criada anteriormente, como mostrado abaixo:

![Cadastro da operação](/tutoriais/nota-exportacao/cadastro_operacao.png)

Após finalizar o cadastro da operação, pode clicar em <span class="mat-button mat-accent">SALVAR</span> e partir para o cadastro do cliente.

# Cadastrando o cliente

Para cadastrar o cliente, é necessário primeiro acessar o menu de **pessoas** e no canto inferior direito clique em nova pessoa, conforme exibido abaixo.

![Botão nova pessoa](/tutoriais/nota-exportacao/botao_nova_pessoa.png)

No cadastro da pessoa que será o cliente, é necessário marcar a caixa de **cliente**, preencher o **nome** e alterar o campo do **país** para o **país correto do fornecedor**.
Estas informações estão destacadas na imagem abaixo:

![Campos do cadastro da pessoa](/tutoriais/nota-exportacao/cadastro_pessoa.png)

> Note que ao alterar o **país**, o sistema exibe o campo **documento de identificação** (destacado acima). Este campo é **obrigatório** e corresponde a algum documento que identifique o cliente no país dele.
{.is-info}

Além do campo do país citado anteriormente, também é necessário preencher os dados de **endereço** do **cliente**.

# Cadastrando o produto

Para cadastrar o **produto** para uma **nota de exportação** basta seguir o [**cadastro de um produto**](/cadastros/produtos) comum.

Dentro do cadastro do produto, deve atentar-se ao campo **unidade de medida tributável**, que fica dentro do ícone <span class="mdi mdi-plus"></span> ao lado da unidade de medida de venda, como destacado abaixo:

![Cadastro do produto](/tutoriais/nota-exportacao/cadastro_produto.png)

Caso não tenha certeza de qual é a unidade de medida tributável do produto, é possível realizar a consulta pelo NCM em um planilha disponibilizada pela secretaria da fazenda [aqui](https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=/NJarYc9nus=), localize por *Tabela de NCM e respectiva uTrib(Comércio Exterior)*.

# Lançamento

## Natureza da operação
No **formulário da NF-e** o primeiro passo é alterar a **natureza da operação** para a natureza de **exportação de mercadorias**, cadastrada anteriormente.

![Natureza de exportação](/tutoriais/nota-exportacao/natura_operacao_exportacao.png)

## Cliente

Após selecionar a **operação**, selecione no campo correspondente o **cliente** criado anteriormente.

![Cliente da exportação](/tutoriais/nota-exportacao/cliente_exportacao.png)

> Dica:
> Caso **não** consiga localizar o **cliente**, é possível que não tenha informado o **país** ou não o marcou como **cliente**, ambos no cadastro de [pessoas](/cadastros/pessoas).
{.is-success}

## Produto

Com o **cliente** e a **operação** selecionados, é possível incluir os **produtos** da exportação. Basta clicar no botão **adicionar produto** ou pelo atalho <kbd>INSERT</kbd> do teclado.

Ao **selecionar** o produto da nota de exportação, serão exibidas as abas de: **identificação**, **tributos**, **D.I.** e **adicionais**.

### Identificação
Na aba de **identificação**, ficam os dados da entrada do produto, como **quantidade**, **valor unitário**, **desconto** e **valor total do produto**.

![Identificação do produto](/tutoriais/nota-exportacao/produto_exportacao_identificacao.png)

### Tributos

Na aba de tributos, você pode preencher o **CFOP** da exportação, iniciado em **7**, os dados de **ICMS** serão puxados da **regra de tributação** cadastrada anteriormente.

![Tributos do produto](/tutoriais/nota-exportacao/produto_exportacao_tributos.png)

## Informações de exportação

Em uma exportação, existem informações obrigatórias a serem preenchidas na nota fiscal, estas ficam no final da nota fiscal, são elas: **UF de embarque**, **Local do embarque** e **UF de despacho**.

![informacoes_exportacao.png](/tutoriais/nota-exportacao/informacoes_exportacao.png)

## Pagamento e finalização

Para finalizar, é possível informar os **dados de pagamento** conforme as [**formas de pagamento**](/cadastros/pagamentos) cadastradas anteriormente.

Após o **pagamento**, clique em <span class="mat-button mat-accent">SALVAR</span> para **salvar** a nota fiscal e ter a possibilidade de pré-visualizar a **DANFE** e o **XML** da nota de exportação, ou clique em <span class="mat-button">SALVAR E TRANSMITIR</span> caso deseje **transmitir** a nota fiscal para a **SEFAZ**.

> **É recomendado que você clique em <span class="mat-button mat-accent">SALVAR</span> e assim gerar o XML e a DANFE da nota de exportação, para verificar com a contabilidade se os dados estão corretos ou precisam de ajuste.**
{.is-danger}

# Conclusão
O processo para o **lançamento** de uma **nota de exportação de mercadorias** no GWEB é esse, ao **transmitir a nota**, será gerado o **financeiro** no módulo [**receitas**](/financeiro/receitas) e **sairá** do seu estoque a **quantidade** declarada na nota fiscal.

Para ver mais detalhes sobre cada módulo envolvido neste processo, acesse os tópicos:

- [Operações](/pt-br/cadastros/operacoes)
- [Regras de tributação](/configuracoes/impostos/regras-de-tributacao)
- [Pessoas](/pt-br/cadastros/pessoas)
- [Produtos](/pt-br/cadastros/produtos)
- [NF-e](/pt-br/tutoriais/como-emitir-uma-nfe)
- [Receitas](/pt-br/financeiro/receitas)