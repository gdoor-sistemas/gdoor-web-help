---
title: Tutorial: Emitir uma NF-e
description: Passo-a-passo para emitir uma NF-e no GDOOR WEB
published: true
date: 2022-04-29T18:51:29.784Z
tags: tutoriais, nf-e
editor: markdown
dateCreated: 2019-11-19T19:06:44.442Z
---

# Emitindo uma NF-e

Uma das pricipais funcionalidades do sistema é a emissão de NF-e. Abaixo, veja o passo-a-passo para emitir uma NF-e simples.

## Antes de emitir

Antes de emitir uma NF-e, é necessário que você tenha algumas informações em mãos.

**Certificado digital**

O [certificado digital](/glossario#certificado-digital) é sua assinatura eletrônica e é usado para garantir a autenticidade e validade do [XML](/glossario#xml) da NF-e. É obrigatório para a emissão de NF-e.


> No momento, o GDOOR WEB só é compatível com certificado digital do tipo A1.
{.is-warning}

**Número e série da NF-e**

O número da NF-e é gerado pelo sistema automática e sequencialmente. No entanto, se a sua empresa já havia emitido NF-e em outro sistema, é necessário informar ao GDOOR WEB o número da próxima NF-e para que seja dada a sequência correta. 

A série deve ser verificada com a contabilidade da empresa. Normalmente, começa na série **1**.

**Cadastro do emitente**

Verifique se os dados cadastrais do emitente estão de acordo com as informações constantes na [SEFAZ](/glossario#sefaz) do estado de origem da empresa.

Esses dados cadastrais estão acessíveis em **Configurações** &raquo; **Emitente**.


## Configurar

Antes de emitir a NF-e efetivamente, é necessário fazer algumas configurações.

### Certificado digital

Obtenha o arquivo `.pfx` do [certificado A1](/glossario#certificado-digital) e adicione ao sistema acessando **Movimentações** &raquo; **NF-e** &raquo; **Configurações** &raquo; **Certificado digital**, conforme indicado na imagem abaixo:

![Acessar as configurações da NF-e](/tutoriais/emitir-nfe/acessar-config-nfe.png)

Clique em <span class="mat-button">Carregar certificado</span>, selecione o arquivo na janela que abrir, informe a senha do certificado e clique em <span class="mat-button mat-accent">Enviar</span>: 

![Senha do certificado](/tutoriais/emitir-nfe/cert-senha.png)

> Para mais detalhes sobre as demais configurações, veja [Configurações da NF-e](/movimentos/nf-e/configuracoes).
{.is-info}

## Cadastrar produto

Precisamos cadastrar o produto a ser informado na NF-e. Para isto, acesse **Cadastros** &raquo; **Produtos** e clique no botão para adicionar no canto direito inferior da tela:

![Cadastro de produtos](/tutoriais/emitir-nfe/produtos.png)

Para transmitir a NF-e com sucesso, você precisa cadastrar o produto com **nome**, **quantidade** disponível, o código da **[NCM](/glossario#ncm)** e o **[GTIN](/glossario#gtin)** (ou informar que o produto não tem). Demais informações como preço e dados tributários, podem ser informados na hora de adicionar o item à NF-e.

> Informando uma NCM para o produto, ele automaticamente será vinculado a uma regra de tributação genérica que vem préviamente cadastrada no sistema. Para mais informações sobre como vincular tributação ao produto, veja [Configurações de impostos](/configuracoes/impostos).
{.is-info}

## Cadastrar cliente

A NF-e precisa ter um destinatário (cliente ou fornecedor). Para cadastrar, acesse **Cadastros** &raquo; **Pessoas**.

![Cadastro de pessoas](/tutoriais/emitir-nfe/pessoas.png)

Logo após a criação da conta, o sistema já vem com duas pessoas cadastradas: uma delas é a própria empresa, e a outra é o primeiro usuário. 

Para emitir uma NF-e de saída, é necessário informar um cliente, então, você pode cadastrar uma nova pessoa ou editar o cadastro de uma já cadastrada e marcar a caixa **Cliente**:

![Marcar checkbox Cliente](/tutoriais/emitir-nfe/cliente.png)

> No GDOOR WEB, o cadastro de pessoas é unificado, o que significa que uma pessoa pode ser um cliente e um fornecedor ao mesmo tempo, sem a necessidade de repetir o cadastro.
{.is-success .gw .gw-tip}

O esquema da NF-e exige que alguns campos sejam preenchidos no cadastro da pessoa. O GDOOR WEB permite que uma pessoa seja cadastrada com apenas o nome preenchido, mas para poder emitir a NF-e, os seguintes campos são obrigatórios:

- Nome
- CPF ou CNPJ
- Logradouro
- Número
- Bairro
- Município

## Gerar documento

Tecnicamente, antes de ser transmitida, uma NF-e não existe, é apenas um registro no sistema, pois não está no banco de dados da [SEFAZ](/glossario#sefaz). Depois de gerar esse documento, você precisa enviá-lo para a SEFAZ — usamos o termo *transmitir*.

Para gerar o documento, acesse **Movimentações** &raquo; **NF-e** e clique no botão de adição no canto inferior direito da tela:

![Acessar módulo de NF-e](/tutoriais/emitir-nfe/acessar-nfe.png)

No formulário de NF-e, o primeiro dado que precisa ser informado é a natureza da operação. Ao iniciar uma nova NF-e, o sistema irá carregar automaticamente a operação que estiver configurada como padrão.

> Caso deseje alterar as operações existentes ou criar novas operações, veja o tópico [Cadastro de operações](/cadastros/operacoes).
{.is-info}

Depois, é necessário informar o cliente. No campo apropriado, você pode digitar o nome de um cliente que esteja cadastrado para fazer uma busca, ou digitar diretamente o código, se souber.

A próxima informação necessária é o produto. Os produtos só podem ser adicionados depois da operação e do cliente porque algumas informações tributárias dependem desses dados para serem definidas. Para adicionar um produto, clique no botão **Adicionar produto** na seção **Itens**:

![Formulário de NF-e](/tutoriais/emitir-nfe/form-nfe.png)

Na tela de adição de produto, você pode buscar por **código**, **[GTIN](/glossario#gtin)** (código de barras) ou pela **descrição**. Depois de informar o produto, você pode alterar a quantidade, o preço unitário e informar o desconto, se for o caso.

![Tela de adição de produto](/tutoriais/emitir-nfe/tela-produto.png)

No topo desta tela, há outras abas para navegar entre outras seções de informação específicas do item sendo adicionado/alterado. Por exemplo, na aba **Tributos** você pode alterar dados referentes a [ICMS](/glossario#icms), [Substituição Tributária](/glossario#icms-st), [IPI](/glossario#ipi) e outros. 

O sistema possibilita que você configure uma tributação padrão para o produto, para que você não precise se preocupar com isso a cada NF-e emitida. Entretanto, esta seção ainda é apresentada para que você possa alterar particularidades, ou mesmo conferir se os valores estão corretos.

> Para mais detalhes sobre os demais campos do produto e da NF-e, veja o tópico [Formulário da NF-e](/movimentos/nf-e#formulário).
{.is-info}

Depois de informar os dados necessários, salve o documento pressionando <kbd>Ctrl</kbd>+<kbd>S</kbd> ou clicando no botão <span class="mat-button mat-accent">Salvar</span> no final do formulário. O botão <span class=mat-button>Salvar e transmitir</span> fará o [próximo passo](#transmitir-nf-e) automaticamente.

## Transmitir NF-e

Neste momento, depois que o documento está pronto e revisado, vamos enviá-lo para a [SEFAZ](/glossario#sefaz). Depois disso este documento vai passar a ter valor fiscal, então o [DANFE](/glossario#danfe) poderá ser impresso e a mercadoria poderá transitar.

Se você salvou o documento sem transmitir, foi direcionado para a página de detalhes da NF-e. Nesta tela, clique no botão de ações da NF-e (![br-map.png](/comum/br-map.png){.inline}) na parte de cima, ou pressione a tecla <kbd>N</kbd> para abrir o menu de opções e clique na opção **Transmitir**, ou pressione a tecla <kbd>T</kbd>.

![Menu da NF-e - Transmitir](/tutoriais/emitir-nfe/botao-transmitir.png)

## Conclusão

O processo simplificado para emissão de uma NF-e é esse. Naturalmente, há muitas outras particularidades envolvidas no processo completo, no entanto, não cabe a este tutorial contemplá-las. Para ver mais detalhes sobre cada módulo envolvido neste processo, acesse os tópicos:

- [Cadastro de pessoas](/cadastros/pessoas)
- [Cadastro de produtos](/cadastros/produtos)
- [NF-e](/movimentos/nf-e)