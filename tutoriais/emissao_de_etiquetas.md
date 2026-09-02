---
title: Emissão de Etiquetas
description: 
published: true
date: 2026-09-02T17:57:22.637Z
tags: 
editor: markdown
dateCreated: 2026-08-26T20:49:20.170Z
---

# Emissão de Etiquetas

Listamos neste artigo as orientações para consultar e cadastrar modelos de etiquetas, configurar as medidas e as informações que serão impressas, gerar etiquetas manualmente ou a partir de documentos de compra, configurar a impressão direta e utilizar o código interno como código de barras.


## Introdução

A emissão de etiquetas utiliza as informações cadastradas nos produtos para gerar impressões com dados como descrição, preço e código de barras, evitando a necessidade de redigitação.

Os modelos podem ser configurados conforme o formato utilizado, permitindo trabalhar com etiquetas em folha ou bobina, definir quais informações serão impressas e reutilizar configurações já cadastradas.

## Consultar e cadastrar modelos de etiqueta

Acesse **"Cadastros"**, selecione **"Produtos"** e, na seção **"Ações"**, clique em **"Etiquetas"**. A tela apresenta os modelos de etiquetas cadastrados e as opções disponíveis para cada modelo.

![etiquetas-6.png](/produtos/etiquetas-6.png)

Utilize o campo **"Digite para buscar..."** para localizar um modelo pelo nome. Para atualizar a listagem, clique no ícone de **atualização**.

Cada registro apresenta as principais características da configuração, como:

- **Tipo:** identifica se a impressão utiliza folha ou bobina.
- **Página:** apresenta as dimensões da página configurada.
- **Etiqueta:** apresenta as dimensões da etiqueta.

Para cada modelo, estão disponíveis as seguintes ações:

- **Editar:** permite alterar a configuração do modelo.
- **Imprimir:** abre a tela para emissão das etiquetas utilizando o modelo selecionado.

> A listagem disponibiliza apenas as opções de **edição** e **impressão**. As opções para duplicar ou excluir modelos não fazem parte do escopo apresentado. {.is-warning}

### Configurar os modelos de medidas

Para cadastrar um modelo conforme a necessidade, acesse o menu **"Modelos de etiquetas"** e clique no botão **"+"**.

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
- **Código:** adicione um código para impressão na etiqueta, conforme as opções disponibilizadas pelo sistema.
- **Forma:** insira uma forma gráfica no modelo, permitindo compor visualmente a etiqueta.
- **Linha:** adicione linhas para separar ou organizar os elementos apresentados na etiqueta.

> A área central apresenta uma prévia da etiqueta enquanto o modelo é configurado. Os elementos podem ser posicionados para definir a disposição das informações na impressão. Na imagem apresentada, o modelo contém o **Nome do produto** na parte superior e o **Preço de venda** em destaque. {.is-info}

A tabela inferior apresenta os elementos adicionados ao modelo e permite ajustar as características de cada informação.

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

Na sequência, configure as medidas e as informações que serão impressas.

![etiquetas-7-2.png](/produtos/etiquetas-7-2.png)


### Selecione as medidas e informações da etiqueta


Na aba **Medidas**, verifique o **"Modelo aplicado"**, que identifica a configuração utilizada pelo modelo atual.

> A legenda numerada apresenta visualmente a área correspondente a cada medida configurada. {.is-success}

![etiquetas-7-3.png](/produtos/etiquetas-7-3.png)

Para utilizar uma configuração previamente cadastrada, clique em **"Usar modelo existente"**. A relação de modelos permite pesquisar por nome, descrição ou medida.

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

Clique em **"Aplicar modelo"** para utilizar uma configuração disponível.

> O preview é atualizado conforme os valores são alterados, permitindo conferir a distribuição das etiquetas antes de concluir o cadastro. {.is-info}

![etiquetas-21.png](/produtos/etiquetas-21.png)


Para reutilizar a configuração em outras etiquetas, marque **"Cadastrar as medidas atuais como modelo"**, informe o **"Nome do modelo"** e preencha a **"Descrição do modelo"**.

![etiquetas-22.png](/produtos/etiquetas-22.png)

Clique em **"Salvar"** para concluir o cadastro da etiqueta.

Em seguida, selecione o o modelo de **"Informações nas etiquetas"**, também cadastrado anteriormente.

![etiquetas-27.png](/produtos/etiquetas-27.png)

## Imprimir etiquetas

Na listagem de etiquetas, localize o modelo que será utilizado e clique no ícone de impressora correspondente.

> Também é possível acessar a impressão pela tela de edição do modelo. {.is-info}

![etiquetas-28.png](/produtos/etiquetas-28.png)


A tela de impressão permite incluir os produtos manualmente ou importar os itens de um documento de compra.

![etiquetas-29.png](/produtos/etiquetas-29.png)

### Incluir produtos manualmente

Na tela de impressão, clique no botão **"Lançamento manual"** para adicionar os produtos.

![etiquetas-30.png](/produtos/etiquetas-30.png)

**Localize** e **selecione** os produtos que receberão as etiquetas, e clique em **"Adicionar"**.

![etiquetas-30-1.png](/produtos/etiquetas-30-1.png)

Em seguida, informe a **quantidade de etiquetas** que serão impressas para cada produto.

![etiquetas-31.png](/produtos/etiquetas-31.png)

A relação de itens apresenta:

- **Descrição do produto;**
- **Quantidade:**
- **Grade;**
- **Serial.**

Para **remover** um item individualmente, clique no ícone de **lixeira** correspondente.

AS demais informações da tela são:

- **Saída:** escolha o formato que o documento será gerado.
- **Ordenação:** defina conforme a necessidade de organização dos produtos.
- **Iniciar na etiqueta nº:** utilizado para determinar a posição inicial da impressão.
> Utilize **"Iniciar na etiqueta nº"** quando houver uma folha parcialmente utilizada. Dessa forma, a impressão pode começar na primeira posição disponível, evitando o desperdício das etiquetas restantes. {.is-success}
- **Total de etiquetas:** atializada confirme a quaquantidade é alterada para cada produto.
- **Total de folhas:** ajusta automaticamente conforme a quantidade que será impressa.


Marque **"Visualizar preview"** para conferir a impressão ou clique em **"Prévia PDF"** para gerar uma prévia do resultado.

![etiquetas-31-1.png](/produtos/etiquetas-31-1.png)

![etiquetas-32.png](/produtos/etiquetas-32.png)

Para concluir a impressão, clique em **"Imprimir"**.


### Importar produtos por documento

Os produtos também podem ser incluídos automaticamente a partir de documentos de compra.

Na tela de impressão, clique no botão **"Importar produtos por nota"**, selecione **"Nota de compra"** ou a **"NF-e"**. Utilize o campo de pesquisa para localizar o documento, selecione a nota e clique em **"Importar"**.

> Os produtos serão incluídos automaticamente na listagem, utilizando as quantidades informadas na nota. Se necessário, ajuste as quantidades antes de imprimir {.is-warning}

![etiquetas-33.png](/produtos/etiquetas-33.png)

Marque **"Visualizar preview"** para conferir a impressão ou clique em **"Prévia PDF"** para gerar uma prévia do resultado.

![etiquetas-34.png](/produtos/etiquetas-34.png)
![etiquetas-35.png](/produtos/etiquetas-35.png)

Para concluir a impressão, clique em **"Imprimir"**.



### Configurar a impressora e a impressão direta

Para utilizar uma impressora específica para as etiquetas, acesse "Configurações" e selecione "Impressões".

[INSERIR PRINT — Tela "Configurações de impressão", destacando "Impressoras padrão por documento", "Etiqueta" e "Serviço de impressão direta".]

Na seção "Impressoras padrão por documento", localize o documento "Etiqueta".

Selecione a impressora que será utilizada para esse tipo de impressão.

A relação também apresenta outros documentos, como:

Pedido de venda;
Orçamento;
NF-e;
NFC-e;
NF-e no PDV;
Pré-venda;
NFS-e;
Recibo.
Ativar o envio direto para impressão

Para utilizar o envio direto, marque "Configurar serviço de impressão direta".

Utilize o botão "Download" para instalar o agente de impressão no computador.

O agente permite enviar o documento diretamente para a impressora configurada, sem utilizar a caixa de diálogo de impressão do navegador.

[INSERIR PRINT — Configuração do serviço de impressão direta com o botão "Download".]

Quando o envio direto estiver ativado para um documento, será disponibilizado o campo "Cópias" na respectiva linha.

Informe a quantidade de cópias que o agente deverá imprimir a cada envio.

[INSERIR PRINT — Linha de "Etiqueta" com impressora selecionada e campo "Cópias".]

(informação) A quantidade de cópias é independente para cada tipo de documento. O recurso não é exclusivo das etiquetas: qualquer documento configurado para envio direto pode apresentar o campo "Cópias".

#### Verificar o agente de impressão

Quando o agente não estiver instalado ou em execução, o sistema apresentará uma mensagem indicando o problema antes da tentativa de impressão.

[INSERIR PRINT — Mensagem "Agente de impressão direta não encontrado".]

(alerta) Ao receber a mensagem "Agente de impressão direta não encontrado", verifique se o serviço foi instalado e se está em execução no computador utilizado para a impressão.

### Replicar código interno no código de barras

Produtos sem código de barras podem utilizar o código interno como identificação para impressão.

Para configurar esse recurso, acesse "Configurações", selecione "Geral" e localize o bloco "Gestão de estoque".

[INSERIR PRINT — Tela "Geral", destacando o bloco "Gestão de estoque" e a opção "Replicar código interno no código de barras".]

Marque "Replicar código interno no código de barras".

A opção permite utilizar o código interno do produto como código de barras, reduzindo a necessidade de cadastrar ou informar manualmente outro código.

O bloco anteriormente denominado "Controlar quantidades do estoque" passa a utilizar o nome "Controlar estoque e identificação dos produtos" e apresenta a opção de replicação acompanhada da identificação "NOVO".

Aplicar a replicação aos produtos cadastrados

Ao marcar a opção, será apresentada a janela "Aplicar aos produtos já cadastrados?".

[INSERIR PRINT — Janela "Aplicar aos produtos já cadastrados?", destacando as opções disponíveis.]

Selecione uma das opções:

Replicar

Adiciona o código interno como mais um código de barras cadastrado para o produto.

Replicar e definir como principal

Adiciona o código interno como código de barras e também define esse código como principal.

Depois de selecionar a opção, defina como a configuração deverá ser aplicada.

A janela apresenta três ações:

"Fechar": encerra a janela sem aplicar alterações.
"Somente novos produtos": mantém a configuração ativa para produtos cadastrados posteriormente, sem alterar os produtos existentes.
"Aplicar": executa a opção escolhida também para os produtos já cadastrados.

[INSERIR PRINT — Janela com os botões "Fechar", "Somente novos produtos" e "Aplicar".]

Ao clicar em "Aplicar", o sistema executa o processamento em lote.

Durante o procedimento, será apresentado o progresso da aplicação.

Ao finalizar, o sistema informa:

Quantidade de produtos atualizados;
Opção utilizada na replicação.

(informação) Executar novamente a aplicação não duplica os códigos de barras que já tenham sido replicados.

#### Desativar a replicação

Para interromper a replicação para novos produtos, desmarque "Replicar código interno no código de barras".

(alerta) Desmarcar a opção não remove os códigos de barras que já foram aplicados aos produtos existentes. A alteração apenas interrompe a replicação para novos produtos.

Fluxo recomendado para emissão

Para realizar a emissão de etiquetas de forma organizada, acesse "Cadastros", selecione "Produtos", clique em "Ações" e escolha "Etiquetas". Em seguida, consulte um modelo existente ou cadastre uma nova etiqueta, defina as medidas da página e da etiqueta, componha as informações que serão impressas e salve o modelo para reutilização, quando necessário.

Na sequência, acesse a impressão pelo ícone de impressora, inclua os produtos manualmente ou importe os itens de uma "Nota de compra" ou "NF-e", defina a ordenação e a posição inicial da impressão, gere a "Prévia PDF" para conferir o resultado e clique em "Imprimir" para concluir.

(dica) Quando a operação utilizar repetidamente o mesmo formato de etiqueta, salve as configurações de medidas e informações como modelos. Dessa forma, novos cadastros podem reutilizar configurações já validadas, reduzindo o trabalho de configuração.

Observação sobre o recurso de código de barras

(informação) O recurso de replicação do código interno permite reduzir um dos principais motivos de produtos sem código de barras: a ausência de um código cadastrado. Ao ativar a opção, o código interno pode passar a alimentar o código de barras do produto, permitindo utilizar essa identificação na emissão das etiquetas.

[INSERIR PRINT — Resultado da aplicação da replicação, mostrando a configuração ativa e a quantidade de produtos atualizados.]