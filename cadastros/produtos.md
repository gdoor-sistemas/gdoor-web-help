---
title: Cadastro de produtos
description: Veja como funciona o cadastro de produtos no Gweb
published: true
date: 2026-09-02T18:14:04.984Z
tags: cadastros, produtos, grade, estoque, visão geral, kits, categorias
editor: markdown
dateCreated: 2020-01-03T19:26:26.647Z
---

# Introdução

Este módulo permite que você cadastre os produtos e kits, que serão utilizados nas vendas de NF-e e NFC-e, assim como nas movimentações de compras.

Para visualizar ou alterar os cadastros de produtos, acesse no menu principal: **cadastros** » **produtos**.

![Lista de produtos](/produtos/lista_produtos.png)

# Cadastrar produto

É possível cadastrar um novo produto clicando no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial, ou no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso produtos, no painel lateral da página conforme a imagem acima.

A tela para "**novo cadastro**" será aberta:

![Novo cadastro de produto](/produtos/novo_cadastro.png)

## Identificação

Seção para identificação do produto.

![Identificação](/produtos/31_identificacao.png)


- **Nome**: informe o nome do produto;
- **Unidade de medida**: indique a unidade desejada ou clique em (<em class="mdi mdi-plus"></em>) para utilizar **unidades de medida adicionais** e **fator de conversão**;
- **IPPT**: informe se é produção **própria** ou de **terceiros**;
- **Tipo de mercadoria**: informe se é **mercadoria para revenda**, **material de uso e consumo** entre outros;
- **Comissão**: porcentagem de comissão do produto;
- **Observações**: informação adicional para o produto, se adicionada entre as tags também irá para a NF-e;
- **Imagem**: selecione um arquivo ou tire uma foto do produto;


<em class="mdi mdi-check-box-outline"></em> **Composição**

Ao marcar o checkbox, a seção para **criação da composição** do item será mostrada:

![Composição do produto](/produtos/1_composicao.png)

> [Clique aqui](#composicao-de-produtos) para obter informações detalhadas sobre a composição de produtos.
{.is-info}


<em class="mdi mdi-check-box-outline"></em> **Grade**

Ao marcar o checkbox, a seção para "**seleção da grade**" será mostrada:

![Selecione a grade](/produtos/grade_1.png)

> A [grade](#grades) já precisa estar cadastrada.
{.is-info}

**Selecione a grade** desejada e clique em "**editar propriedades na grade**":

![Propriedades da grade](/produtos/grade_2.png)

Escolha a "**informação a ser editada**", neste caso queremos editar a **quantidade atual** no estoque. Coloque as **quantidades desejadas para cada tamanho e cor** e clique em <span class="mat-button mdi ">salvar</span>.

![Editar produto na grade](/produtos/grade_3.png)

> Outras **informações podem ser editadas pela grade**, como: quantidade mínima, preço de custo, preço de venda, descrição, peso, NCM entre outras...
{.is-success}

Ao visualizar <span class="mat-button mdi ">mais detalhes</span> do produto cadastrado no estoque, observe que cada tamanho/cor gerou um "**subitem**", com seu respectivo código (#1, #2, #3...). Ao clicar no código, é possível visualizar as quantidades de cada item da grade:

![Detalhes do produto grade](/produtos/animação.gif) 

<em class="mdi mdi-check-box-outline"></em> **Nº de série**

Ao marcar o checkbox, a seção para "**gerenciar números de série**" será mostrada:

![Números de série](/produtos/número_serie.png)

Para adicionar clique em <span class="mat-button mdi "> gerenciar números de série</span> e em seguida em <span class="mat-button mdi "> adicionar nº de série</span>. Informe o número e clique em <span class="mat-button mdi "> confirmar</span>.

<em class="mdi mdi-check-box-outline"></em> **Sync. Ghub**

Ao marcar essa opção, o produto será enviado ao Ghub quando for ativada a integração com o [Gped](/pt-br/ferramentas/integracoes/gped).

## Categorias

As categorias de produtos são uma forma de classificar e organizar as mercadorias conforme os nichos de vendas.

Você pode **selecionar** na lista de [categorias](#categorias-1) já cadastradas ou digitar o nome da categoria e pressionar <span class="mat-button mdi "> enter</span> para **criar uma nova**.

![Categorias](/produtos/4_categorias.png)

> Produtos **cosméticos** por exemplo, podem ser divididos em categorias de: maquiagem, perfumaria, tratamento, cabelos, entre outras.
{.is-success}

## Detalhes

Seção para informar os detalhes do produto.

![Detalhes](/produtos/detalhes.png)

- **Descrição adicional**: descrição adicional do produto;
- **GTIN, EAN, UPC, etc.**: clique no botão (<em class="mdi mdi-dots-vertical"></em>) para adicionar o código de barras. Após clique em <span class="mat-button mdi ">adicionar gtin</span>, digite o código e clique em <span class="mat-button mdi ">confirmar</span>;
- **Referência**: neste campo um **código próprio** pode ser informado. Esse código poderá ser utilizado para busca do produto na NF-e e NFC-e;
- **Peso líquido**: peso em quilogramas por unidade do produto;
- **Peso bruto**: peso total do produto (soma do peso do produto e o peso da embalagem);
- **Quantidade em estoque**: quantidade atual do produto presente no estoque;
- **Quantidade mínima**: informe a quantidade ideal para o produto em questão. Com a informação deste campo, é possível gerar um relatório de **produtos na quantidade limite**;
- **Custo de compra**: custo da última compra do produto;
- **Custo médio**: pode ser informado manualmente;
- **Margem de lucro bruto**: calculada automaticamente ao alterar o preço de custo ou o preço de venda;
- **Preço de venda**: informe o preço de venda para a comercialização do produto;
- **Preço de atacado**: informe o preço de atacado para a comercialização do produto, obrigatoriamente deve ser menor que o preço de venda;
- **Quantidade mínima (PDV)**: informe a quantidade mínima de venda do produto para que o preço de atacado seja aplicado automaticamente no PDV. Preencha com 0 para não aplicar automaticamente.

## Informações tributárias

Seção para informações tributárias do produto.

![Informações tributárias](/produtos/6_informações_tributárias.png)

- **Origem**: indique a origem do produto, se é **nacional** ou **estrangeira**;
- **NCM**: a Nomenclatura Comum do MERCOSUL é o código fiscal que identifica a classe do produto e é obrigatório para a emissão dos documentos fiscais como NFC-e e NF-e. Ao clicar na "lupa" ao lado do campo é possível **procurar NCM** pelo código ou pela descrição;

> Caso o NCM do produto inicie entre **3001** e **3006**, será exibido o quadro **informações ANVISA**. ![Quadro informações ANVISA](/produtos/quadro-informacoes-anvisa.png)
{.is-info}


- **CEST**: o Código Especificador da Substituição Tributária possui 7 dígitos e deve ser preenchido de acordo com cada produto. Ao clicar na "lupa" ao lado do campo é possível **procurar CEST** pelo código ou pela descrição; 
- **ANP**: código a ser informado em produtos lubrificantes, combustíveis e derivados do petróleo;
**»** No cadastro de **gás de cozinha (GLP)**, ao informar o código ANP, a seção abaixo será habilitada para inclusão das informações de "**perc. GLP**", "**perc. GLGNn**", "**perc. GLGNi**" e "**valor de partida**":

![ANP](/produtos/anp.png)

Ao clicar no **ícone da bomba de combustível** ao lado do **ANP**, você poderá incluir a origem do produto:

![Origem Produto](/produtos/origem_glp.png)

Basta preencher os valores e clicar em <span class="mat-button">INCLUIR ORIGEM</span>.
> É importante lembrar que o campo **% de origem UF** deve somar **100%** com as origens informadas.
{.is-warning}


- **Escala relevante**: indique se o produto é:
**» Produzido em escala relevante**: bens e mercadorias sujeitas à Substituição Tributária, neste caso o parâmetro considera o Cálculo de ST na entrada e na saída quando o produto for sujeito a substituição tributária.
**» Produzido em escala *não* relevante**: produção realizada por empresas optantes pelo Simples Nacional, constituídas por um único estabelecimento e que tenham auferido nos últimos 12 meses, receita bruta de até R$ 180 mil. Neste caso, na entrada de mercadoria o produto não possuirá o Cálculo do ST e para as saídas não serão destacadas as substituições tributárias.
- **CNPJ do fabricante**: obrigatório informar o CNPJ do fabricante quando o produto for **produzido em escala não relevante**.

## Tributação

Seção para vincular regras de tributação para o produto.

> Para saber mais sobre a configuração de impostos e [regras de tributação clique aqui](/configuracoes/impostos/regras-de-tributacao).
{.is-info}

![Tributação](/produtos/7_tributação.png)

Para vincular uma regra, clique no botão <span class="mat-button mdi ">vincular regra</span> e selecione a desejada, em seguida clique em <span class="mat-button mdi ">confirmar</span>.

![Vincular regra](/produtos/vincular_regra.png)

Ao clicar no botão (<em class="mdi mdi-eye"></em>) é possível visualizar os detalhes da regra vinculada.

![Detalhes da regra](/produtos/detalhes_da_regra.png)

Após inserir todas as informações, clique em <span class="mat-button mdi ">salvar</span> para que o produto seja adicionado ao estoque.

# Categorias

As categorias de produtos são uma forma de classificar e organizar as mercadorias conforme os nichos de vendas.

Para adicionar uma categoria basta clicar no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso categorias, no painel lateral da página.

![Nova categoria](/produtos/nova_categoria.png)

Identifique a categoria como desejar e clique em <span class="mat-button mdi "> salvar</span>.

> Produtos de **vestuário**, por exemplo, podem ser divididos em categorias de: blazers, blusas, camisetas, calças, jaquetas, vestidos entre outras.
{.is-success}


# Informações nutricionais

Para acessar o menu de informações nutricionais, clique no menu **informações nutricionais** no menu direito. 

![Informações nutricionais](/produtos/informacoes_nutricionais.png)

Caso a empresa necessite que a etiqueta impressa na balança contenha as informações nutricionais do produto, o sistema Gdoor possibilita a geração de um arquivo para importar nos modelos de balança Toledo e Urano.

> Verifique com o nutricionista da empresa todas as informações nutricionais que devem ser apresentadas nos alimentos. Devido a alteração das regras de rotulagem nutricional, verifique também qual rótulo se adequa a sua empresa.
{.is-info}

## Formulário das informações nutricionais

O formulário de cadastro de informações nutricionais é divido em seções, são elas:

### Identificação

![informacao_nutricional_identificacao.png](/produtos/informacao_nutricional_identificacao.png)

- **Descrição**: informe a descrição para identificação da tabela de informações nutricionais. Se preferir, é possível cadastrar o nome do produto em que ela será utilizada;
- **Porção**: após informar a quantidade que compõe uma porção, selecione a unidade de medida correspondente: g (grama), ml (mililitro) ou un (unidade);
- **Medida inteira, Medida decimal e Medida utilizada**: Estes 3 campos compõe juntos uma medida caseira. informe a quantidade de medida caseira (um utensílio utilizado pelo consumidor para medir alimentos) correspondente ao valor informado na quantidade da porção.

> No exemplo acima, temos **“20g de porção”** e informamos que essa medida corresponde a **“0 1/2 colher(es) de sopa”** (meia colher de sopa).
{.is-info}

### RDC 359 e 360

![RDC 359 e 360](/produtos/rdc_359_e_360.png)

Preencha os campos da coluna **quantidade por porção** de acordo com as informações fornecidas pelo nutricionista:

- **Valor Energético (kcal = kj)**;
- **Carboidratos (g)**;
- **Proteínas (g)**;
- **Gorduras Totais (g)**;
- **Gorduras Saturadas (g)**;
- **Gorduras Trans (g)**;
- **Fibra Alimentar (g)**;
- **Sódio (mg)**.

> Ao informar os valores na coluna **quantidade por porção**, automaticamente será gerado o valor na coluna **valor diário**.
{.is-info}


### RDC 429

O principal objetivo da atualização para o **padrão 429** é tornar a r**otulagem nutricional** de mais fácil entendimento e usabilidade.

**Principais alterações que passam a ser obrigatórias no padrão RDC 429:**

– Criação de uma nova coluna na tabela com o **valor nutricional** e **energético para cada porção de 100g** ou **100ml**, a fim de facilitar a comparação entre produtos diferentes;
– apresentação da **quantidade de porções** do produto por embalagem;
– informação identificando a **quantidade de açúcares totais e adicionados**;
– adição de um **aviso** na parte frontal e superior do recipiente indicando **altos níveis de sódio, gorduras saturadas e/ou açúcares adicionados**.
–  a nota de rodapé sobre o valor diário foi alterada para “**Percentual de valores diários fornecidos pela porção**”.
– coloração contrastante da tabela também foi definida para **fundo branco com as letras e linhas 100% pretas**. Não há outra possibilidade de uso de outra coloração senão a estabelecida.

![RDC 429](/produtos/rdc_429.png)

> Para que a etiqueta apresente a **quantidade de porções por embalagem**, verifique com o técnico da sua balança se a opção **calcular automaticamente a quantidade de porções por embalagem** está marcada no **software da balança**. Assim, o cálculo será baseado nas informações cadastradas como **porção** e os dados dos campos **medida inteira, medida decimal e medida utilizada**.
{.is-info}

Preencha os campos da coluna “quantidade por porção” de acordo com as informações fornecidas pelo nutricionista:

- **Valor Energético (kcal = kj)**;
- **Carboidratos (g)**;
- **Açúcares Totais (g)**;
- **Açúcares Adicionados (g)**;
- **Proteínas (g)**;
- **Gorduras Totais (g)**;
- **Gorduras Saturadas (g)**;
- **Gorduras Trans (g)**;
- **Fibra Alimentar (g)**;
- **Sódio (mg)**;

> Ao informar os valores na coluna **quantidade por porção**, automaticamente será gerado o valor na coluna **valor diário**.
{.is-info}

- **Alto em**: selecione se o produto é alto em **açúcar adicionado, gordura saturada ou sódio**.

## Indicar tabela de informações nutricionais no produto

Após cadastrar as tabelas de informações nutricionais, é necessário indicar no produto a tabela correspondente ao mesmo. Acesse o cadastro do produto no estoque, selecione a tabela no campo **informações nutricionais**, e clique em <span class="mat-button mat-accent">salvar</span>.

![Informação nutricional](/produtos/informacao_nutricional_cad_produto.png)

## Impressão da tabela de informações nutricionais

Siga um dos procedimentos para geração de arquivo de configuração para balanças abaixo, e efetue a impressão da etiqueta na balança com as informações nutricionais do produto:


- [Balança de etiquetas com 6 dígitos no código do produto *Veja como configurar a leitura do código de barras com 6 dígitos no código do produto*](/tutoriais/configuracao-balanca-etiqueta-6-digitos)
- [Balança de etiquetas com 5 dígitos no código do produto *Veja como configurar a leitura do código de barras com 5 dígitos no código do produto*](/tutoriais/configuracao-balanca-etiqueta-5-digitos)
- [Balança de etiquetas com 4 dígitos no código do produto *Veja como configurar a leitura do código de barras com 4 dígitos no código do produto*](/tutoriais/configuracao-balanca-etiqueta-4-digitos)
{.links-list}

**Imagem ilustrativa demonstrando os valores nutricionais na etiqueta do padrão RDC 359 e 360:**

![359 e 360](/produtos/359_360.png)

**Imagem ilustrativa demonstrando os valores nutricionais na etiqueta do padrão RDC 429:**

![429](/produtos/429.png)


# Composição de produtos {#composicao-de-produtos}

A composição de produtos é um conceito utilizado para definir produtos que serão compostos por outros produtos, estes chamados de matérias-primas. Veja quais as funções disponíveis para a composição no do cadastro do produto.

![Composição de uma mesa](/produtos/2_composicao_mesa.png)

As ações disponíveis no canto superior direito da seção são:
- **Botão <em class="mdi mdi-printer"></em>**: imprime a ficha de produção do produto.
![Ficha de produto](/produtos/ficha_producao.png)

- **Botão <em class="mdi mdi-download-box-outline"></em>**: permite escolher uma nota de compra importada no GWeb para importar os produtos dela como matéria prima nesta composição.
![Importar nota de compra](/produtos/importar_nota_de_compra.png)

- **Botão <em class="mdi mdi-barcode"></em>**: Permite adicionar itens como matéria-prima nesta composição.
![Adicionar produtos](/produtos/adicionar_produtos.png)

Na tabela, os campos destacados da matéria-prima são:
![Tabela da composição](/produtos/tabela_composicao.png)
- **Produto matéria-prima**: nome do produto do estoque que irá compor o produto atual.
- **Custo unitário**: custo unitário do produto, esta informação é trazida do cadastro do produto matéria-prima.
- **Custo total**: custo total do produto, resultado do cálculo Quantidade × Custo unitário.
- **Quantidade**: quantidade do produto matéria-prima que será utilizada para compor **uma** unidade do produto atual.
- **Quantidade disponível**: quantidade em estoque disponível do produto, esta informação é trazida do cadastro do produto matéria-prima.
- **Ícone <em class="mdi mdi-trash-can" style="color: #b24040"></em>**: clique para remover o produto matéria-prima da composição do item atual.

Abaixo da tabela, as ações disponíveis são:
![Abaixo a tabela de composição](/produtos/abaixo_tabela_composicao.png)

- **Custo adicional**: informe aqui o somatório dos custos adicionais na composição do item, como por exemplo:  mão de obra, itens cujo estoque não seja controlado como uma cola, tinta, verniz, etc.
- **Custo unitário do item composto**: somatório dos custos de cada matéria-prima e dos custos adicionais, gerando o custo atualizado do produto atual.
- **Capacidade produtiva**: capacidade produtiva do item atual, ou seja, com base na quantidade em estoque das matérias-prima, quantas unidades do produto atual são possíveis montar.
- **Quantidade a montar**: informe quantos itens do produto atual serão montados.
- **Botão <span class="mat mat-button mat-accent">MONTAR COMPOSIÇÃO</span>**: clique para montar a quantidade informada, essa ação reduzirá o estoque das matérias-primas para aumentar o estoque do produto atual.


# Grades

A grade de produtos é um conceito utilizado para cadastrar **apenas um produto** com **características diferentes** no estoque. Podemos imaginar uma “tabela”, onde as variáveis são as linhas e colunas iniciais.

> Por exemplo, pode-se ter um modelo de camiseta nos tamanhos **P**, **M**, **G** e nas cores **laranja**, **preta** e **branca**.
{.is-success}

Para **adicionar uma grade**, clique no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso grades no painel lateral da página, ou no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela.

Digite o "**nome**" da grade, um "**título para as linhas**" e outro "**título para as colunas**". Utilize os botões (<em class="mdi mdi-plus"></em>) para adicionar linhas e colunas, insira o nome e clique em <span class="mat-button mdi "> confirmar</span>.

![Nova grade](/produtos/nova_grade.png)

Após a inclusão das linhas e colunas desejadas, basta clicar para <span class="mat-button mdi "> salvar</span> a grade.

Lista das grades cadastradas:

![Lista de grades](/produtos/lista_gradesw.png)

> Após a grade ser indicada em um produto, ainda é possível **adicionar linhas ou colunas**, mas não é possível remove-las.
{.is-warning}

# Kits

Kit é um conjunto de diversos produtos em um único pacote, como um kit de material escolar, um kit de manicure, um kit de maquiagem, etc. 
Geralmente, são oferecidas condições especiais para a compra do kit, como um valor mais baixo do que se os produtos fossem adquiridos separadamente.

O kit configura um **único produto**, que contém vários itens dentro dele. Isso possibilita uma venda rápida e prática, pois ao lançar o kit na venda, todos os produtos contidos nele serão incluídos.

> Para trabalhar em conformidade com a legislação, é importante ter cuidado para que o seu kit de produtos não se enquadre como uma *venda casada*. Para evitar essa situação, lembre-se de sempre oferecer também a opção do consumidor levar os itens do kit separadamente.
{.is-info}

Para **adicionar um kit**, clique no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso kits no painel lateral da página, ou no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela.

Digite um "**nome**" para kit e na seção "**itens**" clique em (<em class="mdi mdi-barcode"></em>) "**adicionar item**".

![Novo kit](/produtos/novo_kit.png)

Busque os "**produtos**" desejados pelo **código** ou **descrição**. 
Insira a "**quantidade**" e se preferir, é possível alterar o **valor unitário** desse produto no kit. Clique em <span class="mat-button mdi "> confirmar</span>.

![Item do kit](/produtos/3.png)

Após incluir os itens que irão compor o kit, basta clicar em <span class="mat-button mat-accent">salvar</span>.

![Salvar](/produtos/4.png)

Lista dos kits cadastrados:

![Lista de kits](/produtos/lista_kits.png)

# Tabelas de preços

Com as tabelas de preços é possível **definir preços diferenciados** para determinados produtos e/ou clientes de acordo com a forma de pagamento e negociação utilizada, **sem que haja discriminação de desconto ou acréscimo na venda**.

> Por exemplo: **tabela à vista** e **tabela cartão crédito**.
Na venda, o preço será exibido como **preço de venda** (de acordo com a tabela selecionada) e **não haverá destaque** de **descontos** ou **acréscimos**.
> {.is-success}

Para **cadastrar uma tabela de preço**, clique no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso tabelas de preços no painel lateral da página, ou no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela.

![Nova tabela de preço](/produtos/nova_tabela_de_preço.png)

### Identificação

- **Nome da tabela de preços**: descrição da tabela.
- **Fator de ajuste**: porcentagem de ajuste no preço.
- **Tipo de ajuste**: desconto ou acréscimo.
- <em class="mdi mdi-checkbox-blank-outline"></em> **Ajustar valores para terminar com R$ x,99**: todos os produtos dessa tabela, terão o valor final alterado para x,99.

### Produtos

- <em class="mdi mdi-barcode"></em> **Adicionar produtos**: selecione **todos** os produtos cadastrados ou utilize os critérios: **categoria**, **NCM**, **código ou código de barras**.
Em seguida, clique em <span class="mat-button mdi "> confirmar</span>.

- <em class="mdi mdi-calculator"></em> **Calcular valores**: todos os valores da tabela serão recalculados e substituídos.
Clique em <span class="mat-button mdi "> continuar</span> para substituir os valores.

-  <em class="mdi mdi-delete"></em> **Limpar tabela**: todos os itens serão removidos.
Clique em <span class="mat-button mdi "> continuar</span> para limpar a tabela.

- <em class="mdi mdi-checkbox-blank-outline"></em> **Mostrar somente itens com preço de tabela zerado**: exibe os itens sem valor definido.

![Tabela acréscimo](/produtos/tabela_acres.png)

Após efetuar a configuração desejada, clique em <span class="mat-button mat-accent">salvar</span>.

Lista das tabelas de preços cadastradas:

![Lista tabelas](/produtos/lista_tabelas.png)

# Carga da balança

No GWEB é possível gerar a carga para as balanças de etiquetas. Neste menu, será aberto a tela para que selecione a **marca** da balança, o **tipo de arquivo** que deverá ser gerado e quais os caracteres iniciais identificadores de peso

![Arquivo da balança](/produtos/1_gerar_arquivo.png)

Ao selecionar as opções que deseja, clique em gerar para fazer o download do arquivo.

Caso tenha dúvidas sobre como configurar os produtos para a etiqueta de balança, acesso um dos materiais abaixo de acordo com a configuração de sua balança:

- [Balança de etiquetas com 6 dígitos no código do produto *Veja como configurar a leitura do código de barras com 6 dígitos no código do produto*](/tutoriais/configuracao-balanca-etiqueta-6-digitos)
- [Balança de etiquetas com 5 dígitos no código do produto *Veja como configurar a leitura do código de barras com 5 dígitos no código do produto*](/tutoriais/configuracao-balanca-etiqueta-5-digitos)
- [Balança de etiquetas com 4 dígitos no código do produto *Veja como configurar a leitura do código de barras com 4 dígitos no código do produto*](/tutoriais/configuracao-balanca-etiqueta-4-digitos)
{.links-list}

# Etiquetas

A emissão de etiquetas utiliza as informações cadastradas nos produtos para gerar impressões com dados como descrição, preço e código de barras, evitando a necessidade de redigitação.

Os modelos podem ser configurados conforme o formato utilizado, permitindo trabalhar com etiquetas em folha ou bobina, definir quais informações serão impressas e reutilizar configurações já cadastradas.

## Consultar e cadastrar modelos de etiqueta

Acesse **"Cadastros"**, selecione **"Produtos"** e, na seção **"Ações"**, clique em **"Etiquetas"**. A tela apresenta os modelos de etiquetas cadastrados e as opções disponíveis para cada modelo.

![etiquetas-6.png](/produtos/etiquetas-6.png)

Utilize o campo **"Digite para buscar..."** para localizar um modelo pelo nome. Para atualizar a listagem, clique no ícone de **atualização**.

Cada registro apresenta as principais características da configuração, como:

- **Tipo:** identifica se o modelo utiliza folha ou bobina.
- **Página:** apresenta as dimensões da página configurada.
- **Etiqueta:** apresenta as dimensões da etiqueta.

Para cada modelo, estão disponíveis as seguintes ações:

- **Editar:** permite alterar a configuração do modelo.
- **Imprimir:** abre a tela para emissão das etiquetas utilizando o modelo selecionado.

> A listagem disponibiliza apenas as opções de **edição** e **impressão**. As opções para duplicar ou excluir modelos não fazem parte do escopo apresentado. {.is-warning}

### Configurar os modelos de medidas

Para cadastrar um modelo de medidas, acesse o menu **"Modelos de etiquetas"** e clique no botão **"+"**.

![etiquetas-23.png](/produtos/etiquetas-23.png)

Preencha os campos apresentados na tela conforme as características da página, das etiquetas e das margens utilizadas na impressão.

![etiquetas-24.png](/produtos/etiquetas-24.png)

Nas informações relacionadas à **"Página"**, considere:

- Tipo do papel;
- Largura da bobina ou da impressão web;
- Quantidade de etiquetas por linha;
- Margem esquerda;
- Margem direita.

Na configuração de **"Etiqueta"**, informe:

- Altura da etiqueta;
- Largura da etiqueta;
- Espaçamento entre colunas.

Em **"Margens"**, informe:
- Margem superior;
- Margem inferior;
- Margem esquerda;
- Margem direita.


### Configurar os modelos de informações

Ajuste as informações que serão impressas na etiqueta. Informe os dados básicos do modelo e defina as dimensões utilizadas como referência.

Acesse o menu **"Modelos de informações"** e clique no botão **"+"**.

![etiquetas-25.png](/produtos/etiquetas-25.png)


- **Nome do modelo:** informe um nome para identificar o modelo de etiqueta.

- **Descrição:** registre uma descrição para facilitar a identificação e indicar a finalidade do modelo.

- **Largura de referência (mm):** informe a largura da etiqueta em milímetros.

- **Altura de referência (mm):** informe a altura da etiqueta em milímetros.

As dimensões informadas servem como referência para a montagem do modelo. Ao aplicar a etiqueta, o conteúdo será ajustado proporcionalmente ao tamanho da etiqueta utilizada.

Utilize os recursos disponíveis na parte superior do editor para adicionar os elementos que farão parte da impressão.


- **Adicionar campo:** inclua informações provenientes do cadastro do produto, como nome, preço e demais campos disponíveis para seleção.
> Os campos relacionados aos produtos utilizam as informações já cadastradas no sistema, como descrição, preço de venda, código de barras e unidade. Não é necessário redigitar essas informações na etiqueta.{.is-warning}
- **Texto livre:** insira um texto fixo na etiqueta, sem depender de informações cadastradas no produto.
- **Código:** adicione um código para impressão na etiqueta, conforme as opções disponíveis no sistema.
- **Forma:** insira uma forma gráfica no modelo, permitindo compor visualmente a etiqueta.
- **Linha:** adicione linhas para separar ou organizar os elementos apresentados na etiqueta.

> A área central apresenta uma prévia da etiqueta enquanto o modelo é configurado. Os elementos podem ser posicionados para definir a disposição das informações na impressão. Na imagem apresentada, o modelo contém o **Nome do produto** na parte superior e o **Preço de venda** em destaque. {.is-info}

A tabela inferior apresenta os elementos adicionados ao modelo e permite ajustar as configurações de cada informação.

- **Campo:** identifica a informação utilizada na etiqueta, por exemplo **Nome do produto**, **Fundo do preço** e **Preço de venda**.
- **Posição topo:** define a posição vertical do elemento dentro da etiqueta.
- **Posição esquerda:** define a posição horizontal do elemento.
- **Altura:** determina a altura ocupada pelo elemento na etiqueta.
- **Fonte:** permite definir a fonte utilizada na informação.
- **Tamanho da fonte:** determina o tamanho do texto apresentado na etiqueta.
- **Negrito:** marque a opção para apresentar o conteúdo em negrito.
- **Itálico:** marque a opção para apresentar o conteúdo em itálico.
- **Sublinhado:** marque a opção para apresentar o conteúdo sublinhado.
- **Quebra de linha:** define se o conteúdo poderá ocupar mais de uma linha quando o texto ultrapassar o espaço disponível.
- **Alinhamento:** define o posicionamento do conteúdo dentro da área do campo, permitindo ajustar a informação conforme a disposição desejada na etiqueta.
- **Cor da fonte:** permite definir a cor utilizada na impressão do texto.
- **Cor de fundo:** define a cor preenchida na área correspondente ao campo.
- **Tamanho automático:** ajusta automaticamente o tamanho da fonte para que o conteúdo se adapte ao espaço definido para o campo.

Para **remover** um elemento, clique no ícone de **lixeira**.

> Para alterar a ordem dos elementos, arraste o ícone localizado à esquerda da respectiva linha. {.is-success}

O preview apresenta as alterações em tempo real, permitindo conferir a composição antes de **salvar**. 


## Cadastrar uma nova etiqueta

Para cadastrar uma nova etiqueta, clique no botão **"+"**, localizado no canto inferior da tela.

![etiquetas-6-1a.png](/produtos/etiquetas-6-1a.png)

Informe a **"Descrição"** do modelo, utilizando no máximo 30 caracteres.

![etiquetas-7-1.png](/produtos/etiquetas-7-1.png)

Na sequência, configure as medidas e as informações que serão impressas nas etiquetas.

![etiquetas-7-2.png](/produtos/etiquetas-7-2.png)


### Selecione as medidas e informações da etiqueta


Na aba **Medidas**, verifique o **"Modelo aplicado"**, que identifica a configuração utilizada pelo modelo atual.

> A legenda numerada identifica visualmente a área correspondente a cada medida configurada.{.is-success}

![etiquetas-7-3.png](/produtos/etiquetas-7-3.png)

Para utilizar uma configuração previamente cadastrada, clique em **"Usar modelo existente"**. A lista de modelos permite pesquisar por nome, descrição ou medida.

> Os modelos podem apresentar duas identificações:
**Padrão**: modelos disponibilizados pelo sistema.
**Meu modelo**: modelos cadastrados para utilização própria.{.is-info}

![etiquetas-18.png](/produtos/etiquetas-18.png).

Os modelos padrão apresentados são:

- A4 63,5 × 31 mm;
- A4 99 × 33,9 mm;
- Bobina 50 × 25 mm;
- Bobina 75 × 50 mm;
- Bobina 100 × 50 mm.

Expanda o modelo para consultar as informações de papel, etiqueta e grade antes de aplicá-lo.

![etiquetas-20.png](/produtos/etiquetas-20.png)

Clique em **"Aplicar modelo"** para utilizar a configuração selecionada.

> O preview é atualizado conforme os valores são alterados, permitindo conferir a distribuição das etiquetas antes de concluir o cadastro. {.is-info}

![etiquetas-21.png](/produtos/etiquetas-21.png)


Para reutilizar a configuração em outras etiquetas, marque **"Cadastrar as medidas atuais como modelo"**, informe o **"Nome do modelo"** e preencha a **"Descrição do modelo"**.

![etiquetas-22.png](/produtos/etiquetas-22.png)

Clique em **"Salvar"** para concluir o cadastro da etiqueta.

Em seguida, selecione o modelo de "Informações nas etiquetas", também cadastrado anteriormente.

![etiquetas-27.png](/produtos/etiquetas-27.png)

## Imprimir etiquetas

Na listagem de etiquetas, localize o modelo que será utilizado e clique no ícone de impressora correspondente.

> Também é possível acessar a impressão pela tela de edição do modelo. {.is-info}

![etiquetas-28.png](/produtos/etiquetas-28.png)

A tela de impressão permite incluir produtos manualmente ou importar itens a partir de um documento de compra.

![etiquetas-29.png](/produtos/etiquetas-29.png)

### Incluir produtos manualmente

Na tela de impressão, clique no botão **"Lançamento manual"** para adicionar os produtos.

![etiquetas-30.png](/produtos/etiquetas-30.png)

**Localize** e **selecione** os produtos que receberão as etiquetas e clique em **"Adicionar"**.

![etiquetas-30-1.png](/produtos/etiquetas-30-1.png)

Em seguida, informe a **quantidade de etiquetas** que serão impressas para cada produto.

![etiquetas-31.png](/produtos/etiquetas-31.png)

A relação de itens apresenta:

- **Descrição do produto;**
- **Quantidade:**
- **Grade;**
- **Serial.**

Para **remover** um item individualmente, clique no ícone de **lixeira** correspondente.

As demais informações da tela são:

- **Saída:** escolha o formato em que o documento será gerado.
- **Ordenação:** defina a ordem de organização dos produtos.
- **Iniciar na etiqueta nº:** utilizado para determinar a posição inicial da impressão.
> Utilize **"Iniciar na etiqueta nº"** quando houver uma folha parcialmente utilizada. Dessa forma, a impressão pode começar na primeira posição disponível, evitando o desperdício das etiquetas restantes. {.is-success}
- **Total de etiquetas:** atualizado automaticamente conforme a quantidade é alterada para cada produto.
- **Total de folhas:** atualizado automaticamente conforme a quantidade de etiquetas que será impressa.

Marque **"Visualizar preview"** para conferir a impressão ou clique em **"Prévia PDF"** para gerar uma prévia do resultado.

![etiquetas-31-1.png](/produtos/etiquetas-31-1.png)

![etiquetas-32.png](/produtos/etiquetas-32.png)

Para concluir a impressão, clique em **"Imprimir"**.


### Importar produtos por documento

Os produtos também podem ser incluídos automaticamente a partir de documentos de compra.

Na tela de impressão, clique no botão **"Importar produtos por nota"** e selecione **"Nota de compra"** ou **"NF-e"**. Utilize o campo de pesquisa para localizar o documento, selecione a nota e clique em **"Importar"**.


> Os produtos serão incluídos automaticamente na listagem, utilizando as quantidades informadas na nota. Se necessário, ajuste as quantidades antes de imprimir. {.is-warning}

![etiquetas-33.png](/produtos/etiquetas-33.png)

Marque **"Visualizar preview"** para conferir a impressão ou clique em **"Prévia PDF"** para gerar uma prévia do resultado.

![etiquetas-34.png](/produtos/etiquetas-34.png)
![etiquetas-35.png](/produtos/etiquetas-35.png)

Para concluir a impressão, clique em **"Imprimir"**.


# Unidade de medida

No GWEB é possível cadastrar unidades de medida personalizadas de acordo com a necessidade da empresa. Porém, o GWEB já vem com unidades de medida padrões para serem utilizadas.

> Recomenda-se utilizar o cadastro de **unidades de medida personalizadas** somente para **necessidades específicas** da empresa ou de seus clientes. No dia a dia, prefira as **unidades de medida já cadastradas**, pois estas estão no **padrão do [portal da NF-e](https://www.nfe.fazenda.gov.br/portal/principal.aspx)**.
{.is-info}

No formulário da unidade de medida, os campos disponíveis são:

![Formulário da unidade de medida](/produtos/unidade_de_medida_form.png)

- **Unidade de medida de entrada**: Digite a unidade de medida de entrada correspondente a unidade de medida que deseja cadastrar.
- **Unidade de medida tributável**: Digite a unidade de medida tributável correspondente a unidade de medida que deseja cadastrar.

Ao preencher os campos, clique em <span class="mat mat-button">ADICIONAR UNIDADE</span>.

Na lista de **unidades de medida cadastradas** clique no ícone <span class="mdi mdi-pencil"></span> para editar e no ícone <span style="color: darkred;" class="mdi mdi-delete"></span>


# Alteração em massa

Para acessar a funcionalidade, no cadastro de **Produtos**, clique no menu **Alteração em massa**.

![Menu de alterações em massa](/produtos/menu_alteracao_massa.png)

> As alterações em massa serão executadas em lote. **O processamento será enviado para uma fila em segundo plano.** Portanto, é necessário **aguardar até que seja concluído**.
{.is-warning}


Para realizar uma atualização em massa, siga os passos abaixo:

![menu_alteracao_massa2.png](/produtos/menu_alteracao_massa1.png)

### Identificar produtos


- **Quando**: selecione o campo que será utilizado como critério.
- **For:** informe o valor existente nos produtos que deverão receber a alteração.

### Aplicar alteração

- **Alterar**: escolha o campo a ser alterado e informe o valor a ser aplicado, conforme a condição definida anteriormente.

### Exemplo prático

**"Quando"** o campo **NCM** dos produtos **For** **2202.10.00**, **"Alterar"** o campo **NCM** dos produtos para **2009.89.90**.

> Os valores apresentados são meramente explicativos e não devem ser considerados como regra.
{.is-warning}

![menu_alteracao_massa2.png](/produtos/menu_alteracao_massa2.png)

> Caso necessário, marque a opção **"Em branco"** para filtrar campos sem informação ou remover valores preenchidos.
{.is-info}


Clique em <span class="mat mat-button">confirmar</span>. A alteração será executada em segundo plano e uma notificação será exibida ao final do processamento.


