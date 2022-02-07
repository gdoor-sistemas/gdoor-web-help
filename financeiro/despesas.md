---
title: Despesas
description: Identifique as contas a pagar da empresa no GDOOR WEB
published: true
date: 2022-02-07T20:41:46.234Z
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

# Renegociação de parcelas

Ao efetuar uma renegociação financeira com o fornecedor, você tem a facilidade do gerenciamento do módulo financeiro para gerar as novas parcelas referentes a renegociação e abandonar as parcelas antigas.

Em despesas, as parcelas desejadas podem ser selecionadas de duas formas:

- Clicando no ícone de "imagem" ao lado das informações da despesa:

![marcar parcelas](/despesas/marcar_parcelas.png)

- Ou clicar no botão (<em class="mdi mdi-dots-vertical"></em>), seguido de marcar e selecionar todas as parcelas que você desejar:

![marcar parcelas](/despesas/marcar_parcelas_2.png)

Depois de selecionar as parcelas para renegociar, basta clicar no botão (<em class="mdi mdi-sync"></em>) **renegociar** localizado no menu superior.





# Auxiliares

Logo abaixo dos [acessos](https://help.gdoorweb.com.br/pt-br/financeiro/despesas#acessos), podemos visualizar os campos auxiliares, esses estão padronizados em todo o módulo financeiro. 

## Planos de contas 

O plano de contas é uma ferramenta de organização, com a finalidade de **identificação**, facilitando os registros de **saídas**.

Para adicionar um novo plano de contas, você pode clicar no botão (<em class="mdi mdi-plus"></em>) e informar:

- **Nome**: nome do plano de contas, exemplo: aluguel;
- **Código**: pode-se definir um código específico (números e/ou letras) para facilitar no momento da busca;
- **Tipo**: se é entrada ou saída.

![planos de contas](/despesas/8_plano_de_contas.png)

> Ao acessar a lista de planos de contas pelo módulo de despesas, serão exibidos somente os planos de contas de saída, pois são relevantes neste módulo. Para listar todos os planos de contas, acesse pelo módulo **Financeiro** &raquo; **Contas**.{.gw .gw-note .is-info}

## Centros de custos

Para facilitar a análise financeira da empresa, é possível cadastrar os centros de custos, que são **unidades dentro de um plano de contas**. Exemplo: o aluguel é um plano de conta, mas o aluguel da sala 01 e da sala 02 são exemplos de centro de custos.


Para adicionar um novo centro de custos, você pode clicar no botão (<em class="mdi mdi-plus"></em>) e informar:

- **Nome**: nome do centro de custos, exemplo: aluguel da sala 02;
- **Código**: pode-se definir um código específico (números e/ou letras) para facilitar no momento da busca;
- **Tipo**: se é entrada ou saída.

![centros de custos](/despesas/9_centros_de_custos.png)
