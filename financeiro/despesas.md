---
title: Despesas
description: Identifique as contas a pagar da empresa no Gweb e controlá-las através através dos planos de contas e centros de custos.
published: true
date: 2024-02-15T19:17:19.216Z
tags: 
editor: markdown
dateCreated: 2021-12-22T11:36:03.597Z
---

# Introdução

No quadro de despesas, é possível registrar todas as **saídas** relativas à administração da empresa, finalizadas e futuras. Como por exemplo: contas de água, luz e internet.

![despesas](/despesas/1_despesas.png)

# Nova despesa 

Para adicionar uma nova despesa, clique no botão de adição (<em class="mdi mdi-plus"></em>) no canto inferior esquerdo.

Tela para cadastro da despesa:

![nova despesa](/despesas/nova_despesa.png)

## Dados da despesa

Nos dados da despesa, temos por padrão as seguintes informações:
- **Valor**: quantia do gasto efetuado;
- **Emissão**: data em que a despesa foi cadastrada;
- **Vencimento**: data de vencimento da despesa;
- **Recebida**: ao marcar o **checkbox** “**paga**” localizado ao lado do valor, indica que a despesa está paga. 
- **Parcelamento**: ao marcar o **checkbox “parcelamento”**, a aba para **parcelamento da despesa** será exibida. Nela será possível **parcelar valor** ou **repetir valor**, além de informar o **nº de parcelas**, **intervalo** e **período** de vencimento da despesa.

![parcelamento](/despesas/parcelamento.png)

## Dados da movimentação

Ao marcar a despesa como “**paga**”, o campo para informar os “**dados da movimentação**” será exibido:
- **Conta destino**: informe de qual conta o recurso saiu (bancária, caixa, cofre, etc);
- **Espécie**: informe a forma de pagamento;
- **Descrição**: campo opcional para registrar a movimentação na conta.


## Fornecedor 

Ao clicar em fornecedor, inicia-se a busca em todos os fornecedores cadastrados. Também é possível efetuar a busca por CPF/CNPJ, código, nome, e-mail e telefone clicando no ícone lupa.
Para adicionar um novo fornecedor, basta clicar no sinal de adição (<em class="mdi mdi-plus"></em>). 


## Identificação

Para adicionar uma despesa através do número de identificação, basta clicar em “**documento**” e escolher o código identificador (pode ser através de letras, números e/ou caracteres).
No campo “**descrição**” é possível incluir detalhes da movimentação.

## Vínculos

No campo “**plano de contas**” serão mostrados os planos cadastrados em [contas](https://help.gdoorweb.com.br/pt-br/financeiro/contas#planos-de-contas). Sendo possível escolher o plano de acordo com o tipo de despesa.
No campo “**centro de custos**” é possível incluir o centro de custos.

## Tags

É possível buscar entre as tags cadastradas ou criar uma nova, para isso basta digitar o nome e pressionar a tecla enter.

Após preencher os campos mencionados acima, clique em “**salvar**”.

# Acessos

Na barra lateral direita há um menu padrão que integra o quadro de contas, despesas e receitas:

## Lista

Clicando em “**lista**” serão apresentadas todas as despesas cadastradas. Clicando no botão de adição (<em class="mdi mdi-plus"></em>) é possível cadastrar uma nova despesa.

![lista](/despesas/3_lista.png)

Na **listagem**, ao clicar sobre uma despesa, os “**detalhes da despesa**” serão exibidos. Sendo possível clicar em mais detalhes para visualizar mais informações e executar operações como “**pagar**” ou "**editar**" a despesa.

![detalhes da despesa](/despesas/4_detalhe.png)

No cabeçalho há a opção de **paginação**, que permite escolher a quantidade de itens a cada carregamento, além de poder navegar entre as páginas.

### Busca

Para localizar uma despesa, digite no campo “**busca**” no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>). 
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).

![buscar](/despesas/5_busca.png)

### Filtros

Os filtros podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. Para fazer um filtro aprimorado na lista, clique no botão de "filtro" (<em class="mdi mdi-filter"></em>) ao lado do campo busca e será exibido o painel de filtros:

![filtros](/despesas/6_filtros.png)

### Ordenar
Opção para ordenar as despesas por “**nº documento**”, “**valor**”, “**emissão**”, “**vencimento**” e “**finalizada**” (despesas já pagas). A opção selecionada aparecerá no topo da listagem.

![ordenar](/despesas/7_ordenar.png)

## Status

Na tela inicial das despesas podemos visualizar a listagem com todas as despesas e seus respectivos status: **vencida**, **vence hoje**, **pendente**, **paga**, **devolvida**, **abandonada** e **excluída**. 

Ao clicar no botão (<em class="mdi mdi-dots-vertical"></em>) da despesa, as ações dos menus ficarão disponíveis de acordo com o status dela:

![status_listagem.png](/despesas/status_listagem.png)

> Parcelas com status "**excluídas**" e "**abandonadas**" não aparecerão na listagem, para visualizá-las é necessário **filtrar** as parcelas conforme o status desejado.
{.is-warning}

### Vencida

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da despesa.
- **Editar**: edita as informações da parcela.
- **Pagar**: você quita essa parcela, podendo escolher data, valor, acrescentar taxas e juros e definir a conta (de qual banco ou lugar, foi debitado esse valor).
- **Renegociar**: possibilidade de efetuar um parcelamento de todos os valores pendentes ou vencendo hoje.
- **Excluir**: ao excluir a despesa, não há mais possibilidade de movimentá-la.
- **Abandonar**: a parcela ficará inativa, mas poderá ser quitada ou excluída posteriormente. 

### Vence hoje

- **Marcar:** seleciona uma ou mais parcelas.
- **Ver detalhes:** será exibido detalhes da despesa.
- **Editar:** ao editar a despesa, você pode marcar como paga, incluir os dados da movimentação, como a conta origem do valor, a espécie de pagamento e caso deseje, descrever a movimentação.
- **Pagar:** ao efetivar o pagamento da despesa, você define a data do pagamento, taxas, juros, acréscimos e a forma de pagamento, além de definir de onde o valor foi debitado.
- **Renegociar:** você pode renegociar as despesas que constam pendentes.
- **Excluir:** ao excluir a despesa, não há mais possibilidade de movimentá-la. 

### Pendente

- **Marcar:**  seleciona uma ou mais parcelas.
- **Ver detalhes:**  mostra todos os detalhes da despesa.
- **Editar:**  edita as informações da parcela.
- **Pagar:** você quita essa parcela, podendo escolher data, valor, acrescentar taxas e juros e definir a conta (de qual banco ou lugar, foi debitado esse valor).
- **Renegociar:**  temos a possibilidade de efetuar um novo parcelamento de todos os valores pendentes ou vencendo hoje.
- **Excluir:** ao excluir, você não poderá mais recuperar essa parcela. Ela só aparece na listagem de filtros, como excluída.

### Paga

- **Marcar:** seleciona uma ou mais parcelas.
- **Ver detalhes:** mostra todos os detalhes da despesa e dados do respectivo pagamento
- **Devolver:** pode ocorrer a devolução de um pagamento já efetuado.
- **Estonar:** a movimentação do pagamento será estornada e a parcela voltará ao seu status original.

### Devolvida

Ficarão com status devolvida, pagamentos devolvidos manualmente.

- **Marcar:** seleciona uma ou mais parcelas.
- **Ver detalhes:** mostra todos os detalhes da despesa devolvida, inclusive as parcelas que estão vinculadas à devolução e ao pagamento anterior.

### Abandonada

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da despesa.
- **Editar**: editar a despesa.
- **Pagar**: você quita essa parcela, podendo escolher data, valor, acrescentar taxas e juros e definir a conta (de qual banco ou lugar, foi debitado esse valor).
- **Renegociar**: temos a possibilidade de efetuar um novo parcelamento de todos os valores pendentes ou vencendo hoje.
- **Excluir**: ao excluir, você não poderá mais recuperar essa parcela. Ela só aparece na listagem de filtros, como excluída.

### Excluída

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da despesa.
- **Pagar**: você quita essa parcela, podendo escolher data, valor, acrescentar taxas e juros e definir a conta (de qual banco ou lugar, foi debitado esse valor).

# Renegociação de parcelas

Ao efetuar uma renegociação financeira com o fornecedor, você tem a facilidade do gerenciamento do módulo financeiro para gerar as novas parcelas referentes a renegociação e abandonar as parcelas antigas.

Em despesas, as parcelas desejadas podem ser selecionadas de duas formas:

- Clicando no ícone de "imagem" ao lado das informações da despesa:

![marcar parcelas](/despesas/marcar_parcelas.png)

- Ou clicar no botão (<em class="mdi mdi-dots-vertical"></em>), seguido de marcar e selecionar todas as parcelas que você desejar:

![marcar parcelas](/despesas/marcar_parcelas_2.png)

Depois de selecionar as parcelas para renegociar, basta clicar no botão (<em class="mdi mdi-sync"></em>) **renegociar** localizado no menu superior.

![renegociar](/despesas/renegociar.png)

Na tela seguinte você verá as informações das parcelas marcadas para renegociação, como o **documento**, **vencimento**, **situação** e os **valores**. 

O sistema somará os valores das parcelas indicadas e trará o **valor total da renegociação** que pode ser editado. 
No campo abaixo informe o **nº de parcelas** desejadas para a renegociação, ao lado é possível informar o **plano de contas** e **centro de custos**.

![renegociação](/despesas/renegociação.png)

> No exemplo acima, foi escolhido um intervalo de **3 meses** para os pagamentos da renegociação. O sistema gera os vencimentos  automaticamente, mas eles podem ser editados.
{.is-info}

![parcelamento](/despesas/parcelamento.png)

Para ver os detalhes da despesa original, basta clicar no botão (<em class="mdi mdi-launch"></em>) ao lado de cada parcela.
No cabeçalho dos detalhes da despesa, você encontra algumas opções:

![detalhes da despesa](/despesas/detalhes_da_despesa.png)

- **Editar** - edita todos os dados dessa despesa;
- **Receber** - efetiva o recebimento dessa parcela;
- **Renegociar** - faz um novo parcelamento dos valores pendentes;
- **Excluir** - as parcelas serão excluídas e não poderão mais ter movimentação. Aparecerão somente se filtrar as parcelas com status de ‘excluídas’;
- **Atualizar** - atualiza os dados após uma ação.

Após informar todos os dados, clique em "**gerar renegociação**", no canto inferior direito. 

![gerar renegociação](/despesas/gerar_renegociação.png)

Na tela inicial das despesas podemos visualizar a listagem com todas as despesas e seus respectivos status. 
As parcelas provenientes de uma renegociação, aparecem com status de **pendentes**. Ao clicar em uma delas, seguido de "**ver parcelas vinculadas**" será exibido o **detalhamento** da renegociação, com as parcelas novas e antigas.

![detalhamento](/despesas/detalhamento.png)

# Auxiliares

Logo abaixo dos [acessos](https://help.gdoorweb.com.br/pt-br/financeiro/despesas#acessos), podemos visualizar os campos auxiliares, esses estão padronizados em todo o módulo financeiro. 

## Planos de contas 

Aqui é possível visualizar e cadastrar os planos de contas de saída que serão utilizados no financeiro.

![planos de contas](/contas/8_planos_de_contas.png)

> Ao acessar a lista de planos de contas pelo módulo de despesas, serão exibidos somente os planos de contas de saída, pois são relevantes neste módulo. Para listar todos os planos de contas, acesse pelo módulo **Financeiro** &raquo; **Contas**.{.gw .gw-note .is-info}

Para saber mais sobre os planos de contas acesse:
- [Planos de contas *Veja detalhes sobre o cadastro de planos de contas no GWEB*](/pt-br/financeiro/planos-de-contas)
{.links-list}

## Centros de custos

Aqui é possível visualizar e cadastrar os centros de custos que serão utilizados no financeiro.

![centros de custos](/contas/9_centros_de_custos.png)

Para saber mais sobre os centros de custos acesse:
- [Centros de custos *Veja detalhes sobre o cadastro de centros de custos no GWEB*](/pt-br/financeiro/centros-de-custos)
{.links-list}

