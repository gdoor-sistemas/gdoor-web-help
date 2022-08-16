---
title: MDF-e
description: Veja como gerar o Manifesto eletrônico de Documentos Fiscais no Gweb
published: true
date: 2022-08-16T19:25:00.435Z
tags: mdf-e, manifesto, transporte
editor: markdown
dateCreated: 2022-08-08T14:14:20.352Z
---

# Introdução

O MDF-e efetua o **agrupamento de todos os documentos fiscais transportados na carga** e é necessário no transporte de mercadorias interestaduais e/ou vários estados.

O módulo é destinado a micro e pequenas empresas de comércio, as quais possuem veículos próprios para entrega direta no destinatário ou recebedor.

![Visão geral](/movimentos/mdf-e/1_visao_geral.png)

# Novo MDF-e

Para criar um MDF-e, você pode:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial do MDF-e;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no painel lateral do MDF-e, ao lado do acesso à lista.

Todas as opções acima estão indicadas na imagem abaixo:

![Novo MDF-e](/movimentos/mdf-e/novo.png)

Também é possível gerar um MDF-e a partir da NF-e:



A emissão é dividida em 4 abas: [geral](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-geral), [modal rodoviário](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-modal-rodovi%C3%A1rio), [documentos](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-documentos) e [seguro](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-seguro), sendo possível navegar entre elas. 
Veja abaixo os campos para preenchimento, alguns campos não são obrigatórios, em caso de dúvida é possível consultar o contador da sua empresa.

## Aba geral

- **UF**: do início do carregamento (campo obrigatório);
- **Município**: do término do transporte (campo obrigatório);
- **Início da viagem**: data e horário de partida;
- **Unidade de medida**: peso bruto da carga KG ou TON (campo obrigatório);
- **Peso bruto**: total da carga;
- **Valor total**: da mercadoria/carga transportada;
- **UF de percurso**: informe as UF a serem percorridas por ordem de passagem;
- **Municípios de carregamento**: informe os municípios de carregamento por ordem de passagem.

![Geral](/movimentos/mdf-e/aba_geral.png)

## Aba modal rodoviário

- **Veículo**: [veículo](https://help.gdoorweb.com.br/pt-br/cadastros/veiculos) principal da operação (campo obrigatório);
- **Tipo da carga**: selecione entre as opções disponíveis (campo obrigatório);
- **CEP carregamento**: onde foi carregado o MDF-e;
- **CEP descarregamento**: onde foi descarregado o MDF-e;
- **Descrição do produto**: predominante na carga (campo obrigatório);
- **Condutores**: adicione o [condutor](https://help.gdoorweb.com.br/pt-br/cadastros/pessoas#atributos) (campo obrigatório);
- **CIOT**: informe o número do CIOT e CPF/CNPJ do responsável pela geração do CIOT;
- **Reboques**: adicione informações dos reboques;
- **Vale pedágio**: informe o CNPJ do fornecedor do vale pedágio, responsável, comprovante de compra e valor;
- **Contratante/tomador**: efetue a busca entre os clientes cadastrados ou cadastre um novo.

![Modal rodoviário](/movimentos/mdf-e/aba_modal.png)

## Aba documentos

![Documentos](/movimentos/mdf-e/aba_documentos.png)

## Aba seguro

![Seguro](/movimentos/mdf-e/aba_seguro.png)

# Lista

Na lista, você visualiza os MDF-e emitidos, podendo efetuar uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#buscar) ou [filtrar](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#filtrar)  informações para visualizar apenas dados pertinentes ao que você precisa.

> Na barra superior do quadro lista, temos o controle de paginação, que permite escolher a quantidade de itens que serão exibidos "por página", além de poder navegar entre elas **< >**.
{.is-info}

As informações mostradas variam de acordo com a situação atual do documento exibido na lista, veja mais detalhes abaixo:

### MDF-e pendente

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Note que enquanto o MDF-e estiver **pendente** será possível **editá-lo**, basta clicar em (<em class="mdi mdi-pencil"></em>) para "**editar MDF-e**".

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-file-send"></em> transmitir**, **<em class="mdi mdi-file-eye"></em> pré-visualizar DAMDF-e**, **<em class="mdi mdi-file-code"></em> pré-visualizar XML** ou **<em class="mdi mdi-delete"></em> excluir**.

![MDF-e pendente](/movimentos/mdf-e/pendente.png)

### Autorizado o uso do MDF-e

Nesta etapa as edições não são permitidas.

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-refresh-circle"></em> consultar status**, **<em class="mdi mdi-file-cancel-outline"></em> encerrar**, **<em class="mdi mdi-cancel"></em> cancelar**, **<em class="mdi mdi-file-pdf"></em> visualizar DAMDF-e** ou **<em class="mdi mdi-xml"></em> visualizar XML**.

![Autorizado o uso do MDF-e](/movimentos/mdf-e/autorizado_o_uso.png)

### MDF-e encerrado

Nesta etapa as edições não são permitidas.

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-file-pdf"></em> visualizar DAMDF-e** ou **<em class="mdi mdi-xml"></em> visualizar XML**.

![MDF-e encerrado](/movimentos/mdf-e/encerrado.png)

### Rejeição

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Enquanto houver **rejeição** do MDF-e será possível **editá-lo**, basta clicar em (<em class="mdi mdi-pencil"></em>) para "**editar MDF-e**".

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-file-send"></em> transmitir**, **<em class="mdi mdi-file-eye"></em> pré-visualizar DAMDF-e**, **<em class="mdi mdi-file-code"></em> pré-visualizar XML** ou **<em class="mdi mdi-delete"></em> excluir**.

![Rejeição](/movimentos/mdf-e/rejeição.png)

### MDF-e cancelado

Nesta etapa as edições não são permitidas.

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-file-eye"></em> visualizar DAMDF-e** ou **<em class="mdi mdi-file-code"></em> visualizar XML**.

![MDF-e cancelado](/movimentos/mdf-e/cancelado.png)

## Buscar

Para localizar um MDF-e, digite no campo de busca no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>).
Para aplicar [filtros](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#filtrar) aprimorados, clique no botão "**filtrar**" (<em class="mdi mdi-filter"></em>). 
Para ordenar a lista por número ou data de emissão clique em "**ordenar**" (<em class="mdi mdi-sort"></em>).
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).

![Buscar](/movimentos/mdf-e/buscar.png)

## Filtrar

Para fazer um filtro na lista, clique no botão "**filtro**" (<em class="mdi mdi-filter"></em>) e o painel será exibido:

![Filtrar](/movimentos/mdf-e/filtrar.png)

As opções de filtro são:

- **Status**;
- **Data inicial**;
- **Data final**;
- **Veículo tração**;
- **Veículo reboque**;
- **Ambiente de emissão**;
- **UF de início**;
- **Cidade de término**;
- **Tipo de carga**;
- **Condutor**;
- **Contratante/tomador**.

Para aplicar um filtro, clique no botão <span class="mat-button mdi "> aplicar</span>, para removê-lo clique em <span class="mat-button mdi "> limpar filtros</span>.

![Aplicar limpar filtros](/movimentos/mdf-e/filtro.png)

Na parte superior do painel de filtros temos os botões:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro. 

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![Opções filtros](/movimentos/mdf-e/mais_opções_filtros.png)

> Sempre que um filtro estiver aplicado, você verá o **botão de filtro na cor laranja**: 
![filtro aplicado](/movimentos/mdf-e/filtro-aplicado.png)
{.is-success .gw .gw-tip}

# Configurações

As configurações do MDF-e são gerais para todos os usuários e somente usuários com permissão podem alterá-las. 
Ao alterar cada seção, **você precisará clicar em <span class="mat-button mdi "> salvar</span> individualmente**. Veja abaixo os detalhes de cada seção/configuração.

## Certificado digital

Nesta seção, você adiciona o [certificado digital](/glossario#certificado-digital) para emissão de MDF-e. Clique em <span class="mat-button mdi "> carregar certificado</span> e selecione o arquivo do certificado digital A1 no computador. Em seguida informe a senha e clique em <span class="mat-button mdi "> salvar</span>.
Para remover o certificado digital, clique no [<em class="mdi mdi-close"></em>] à direita do nome.

![Certificado digital](/movimentos/mdf-e/certificado_digital.png)

## Ambiente do MDF-e

Nesta seção você configura dados para a geração do MDF-e. Abaixo, veja detalhes de cada configuração.

![Ambiente do MDF-e](/movimentos/mdf-e/ambiente.png)

Série do MDF-e{.subtitle}

Série de emissão do MDF-e. Esta informação pode ser obtida com sua contabilidade.

Ambiente de emissão{.subtitle}

Aqui você determina se os MDF-e terão validade fiscal ou não. O ambiente de **homologação** é usado para testar a emissão, e tudo o que você transmitir será sem valor. Já no ambiente de **produção**, os MDF-e transmitidos terão valor fiscal.

Nº do próximo MDF-e{.subtitle}

Apenas informe um número neste campo se sua empresa já emitia MDF-e por outro sistema, assim você poderá continuar a numeração de onde parou. Ao salvar um número neste campo, o próximo MDF-e será gerado com esse número e os subsequentes terão o número sequencial.

Forma de emissão{.subtitle}

Neste campo você pode configurar a forma de emissão do MDF-e.

## Autorizados a baixar o XML

Nesta seção você informa o CPF ou CNPJ de pessoas ou empresas autorizadas a fazer o download do [XML](/glossario#xml) do MDF-e pelo site da [SEFAZ](/glossario#sefaz), por exemplo, a contabilidade da sua empresa. 

![Autorizados a baixar o XML](/movimentos/mdf-e/auto.png)

Os documentos informados aqui serão adicionados em cada MDF-e gerado. Para adicionar um documento, digite o número no campo intitulado "**Adicionar CNPJ/CPF**" e pressione <kbd>Enter</kbd> ou clique no botão à direita (<em class="mdi mdi-arrow-right"></em>). Para visualizar ou excluir documentos já adicionados, clique no botão [<em class="mdi mdi-eye"></em>].

## Impressão do DAMDFe

Nesta seção você configura detalhes sobre a impressão do DAMDFe. 

![Impressão do DAMDFe](/movimentos/mdf-e/impressao.png)

Veja o que pode ser alterado:

Orientação{.subtitle}

Orientação para impressão do MDF-e em modo **retrato** ou **paisagem**.

Fonte{.subtitle}

Estilo da fonte da impressão. As opções são: **Times** (com serifa), **Arial** (sem serifa) e **Courier** (monoespaçada).

Posição da logomarca{.subtitle}

Define a posição da logomarca, **centralizada**, à **esquerda** ou à **direita**.