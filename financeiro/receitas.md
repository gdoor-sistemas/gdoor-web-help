---
title: Receitas
description: 
published: true
date: 2022-02-04T19:16:32.195Z
tags: 
editor: markdown
dateCreated: 2021-12-22T11:36:46.680Z
---

# Introdução

No quadro de receitas, é possível registrar todas as **entradas** relativas à administração da empresa, finalizadas e futuras. Como por exemplo: vendas.

![receitas](/receitas/1_receitas.png)

# Nova receita

Para adicionar uma nova receita, clique no botão de adição (<em class="mdi mdi-plus"></em>) no canto inferior esquerdo.

Tela para cadastro da receita:

![nova receita](/receitas/2_nova_receita.png)

## Dados da receita

Nos dados da receita, temos por padrão as seguintes informações:

- **Valor**: quantia que entrará na conta;
- **Emissão**: data em que a receita foi cadastrada;
- **Vencimento**: data de vencimento da receita.

> Atenção!
Ao marcar o **checkbox** “**recebida**” localizado ao lado do valor, indica que a receita está paga. 
{.is-warning}


## Dados da movimentação


Ao marcar a receita como “**recebida**”, o campo para informar os “**dados da movimentação**” será exibido:

- **Conta destino**: informe para qual conta o recurso irá (bancária, caixa, cofre, etc);
- **Espécie**: informe a forma de pagamento;
- **Descrição**: campo opcional para registrar a movimentação na conta.

## Cliente

Ao clicar em cliente, inicia-se a busca em todos os clientes cadastrados. Também é possível efetuar a busca por CPF/CNPJ, código, nome, e-mail e telefone clicando no ícone lupa.
Para adicionar um novo cliente, basta clicar no sinal de adição (<em class="mdi mdi-plus"></em>). 

## Identificação

Para adicionar uma receita através do número de identificação, basta clicar em “**documento**” e escolher o código identificador (pode ser através de letras, números e/ou caracteres).
No campo “**descrição**” é possível incluir detalhes da movimentação.

## Vínculos

No campo “**plano de contas**” serão mostrados os planos cadastrados em [contas](https://help.gdoorweb.com.br/pt-br/financeiro/contas#planos-de-contas). Sendo possível escolher o plano de acordo com o tipo da receita.
No campo “**centro de custos**” é possível incluir o centro de custos.

## Tags

É possível buscar entre as tags cadastradas ou criar uma nova, para isso basta digitar o nome e pressionar a tecla enter.

Após preencher os campos mencionados acima, clique em “**salvar**”.

# Renegociação de parcelas

Ao efetuar um acordo financeiro com o cliente, você tem a facilidade do gerenciamento do módulo financeiro para gerar as novas parcelas referentes a renegociação e abandonar as parcelas antigas.

Em receitas, as parcelas desejadas podem ser selecionadas de duas formas:

- Clicando no ícone de "imagem" ao lado das informações da receita:

![1_renegociação.png](/renegociação/1_renegociação.png)

- Ou clicar no botão (<em class="mdi mdi-dots-vertical"></em>), seguido de **marcar** e selecionar todas as parcelas que você deseja:

![2_renegociação_web.jpg](/renegociação/2_renegociação_web.jpg)

Depois de selecionar as parcelas para renegociar, basta clicar no botão (<em class="mdi mdi-dots-vertical"></em>) e selecionar a opção (<em class="mdi mdi-sync"></em>)  **renegociar**.

Nesta tela você verá as informações das parcelas renegociadas, como o **documento**, **vencimento**, **situação** e os **valores**. 

O sistema somara **valor total da renegociação** e do **nº de parcelas**, é possível informar o **plano de contas** e **centro de custos**.

![3_nova.png](/renegociação/3_nova.png)![3_nova.png](/renegociação/3_nova.png)

Clicando no botão (<em class="mdi mdi-launch"></em>) você verá os detalhes da receita original como **data de emissão**, **vencimento da parcela**, **dia do cancelamento** e **informações gerais do cliente**.

No cabeçalho dos detalhes da receita, você encontra algumas opções:

![detalhes_receita.png](/renegociação/detalhes_receita.png)

- Editar - edita todos os dados dessa receita;
- Receber - efetiva o recebimento dessa parcela;
- Renegociar - faz um novo parcelamento dos valores pendentes;
- Excluir - as parcelas serão excluídas e não poderão mais ter movimentação. Aparecerão somente se filtrar as parcelas com status de ‘excluídas’;
- Atualizar - atualiza os dados após uma ação.




![4_gerar_parcelas.png](/renegociação/4_gerar_parcelas.png)

> No exemplo acima, foi escolhido um intervalo de 2 em 2 meses para os pagamentos da renegociação, o sistema gera os vencimentos  automaticamente, mas eles podem ser editados.
{.is-info}

Após essas configurações, clique em gerar renegociação, no canto inferior direito. 



Na listagem inicial podemos ver todas as entradas finalizadas e futuras, de acordo com o status. 
As parcelas provenientes de uma renegociação, aparecem como pendentes e clicando em cima é possível visualizar as parcelas vinculadas ao acordo, onde é exibido um detalhamento das parcelas novas e antigas

FOTO 07 DETALHAMENTO RENEGOCIAÇÃO 

 Ao clicar nos três pontinhos ao lado do status da parcela, podemos executar algumas ações:

Marcar: Seleciona uma ou mais parcelas
Ver detalhes: Será exibido detalhes da receita


Editar: Ao editar a receita, você pode marcar como recebida. Nesse caso pode incluir os dados da movimentação, como a conta destino do valor, a espécie de pagamento e caso deseje descrever a movimentação. 

Receber: Ao efetivar o recebimento da receita, você define a data do recebimento, taxas, juros e acréscimos. A espécie de recebimento também é uma opção para ser incluída. Já no campo Recebido, você escolhe o valor que deu entrada, com esse procedimento você pode receber valores parciais. Mais abaixo, tem a opção de definir a conta, ou seja, para onde esse valor será registrado. 

FOTO 06 RECEBER PARCELA

Renegociar: Você pode renegociar os valores que constam pendentes. Tanto no módulo de Receitas quanto no módulo Despesas

Excluir: Ao excluir a receita, não há mais possibilidade de movimentá-la. Para visualizar as parcelas excluídas, é necessário realizar um filtro de parcelas com status: excluídas

Abandonar: Ao abandonar uma parcela, esta ficará inativada, mas poderá ser quitada ou excluída posteriormente. Utilizamos esse recurso, quando a parcela já está a bastante tempo vencida e queremos tirar listagem de receitas pendentes.
# Acessos

Na barra lateral direita há um menu padrão que integra o quadro de contas, despesas e receitas:

## Lista

Clicando em “**lista**” serão apresentadas todas as receitas cadastradas. Clicando no botão de adição (<em class="mdi mdi-plus"></em>) é possível cadastrar uma nova receita.

![lista](/receitas/3_lista.png)

Na **listagem**, ao clicar sobre uma receita, os “**detalhes da despesa**” serão exibidos. Sendo possível clicar em mais detalhes para visualizar mais informações e executar operações como “**receber**” ou "**editar**" a receita.

![detalhes da receita](/receitas/4_detalhes_da_receita.png)

No cabeçalho há a opção de **paginação**, que permite escolher a quantidade de itens a cada carregamento, além de poder navegar entre as páginas.

### Busca

Para localizar uma receita, digite no campo “**busca**” no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>). 
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).

![buscar](/receitas/5_busca.png)

### Filtros
Os filtros podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. Para fazer um filtro aprimorado na lista, clique no botão de "filtro" (<em class="mdi mdi-filter"></em>) ao lado do campo busca e será exibido o painel de filtros:

![filtrar](/receitas/6_filtro.png)

### Ordenar

Opção para ordenar as receitas por “**nº documento**”, “**valor**”, “**emissão**”, “**vencimento**” e “**finalizada**” (receitas já recebidas). A opção selecionada aparecerá no topo da listagem.

![ordenar](/receitas/7_ordenar.png)

# Auxiliares

Logo abaixo dos acessos, podemos visualizar os campos auxiliares, esses estão padronizados em todo o módulo financeiro. 

## Planos de contas 

O plano de contas é uma ferramenta de organização, com a finalidade de **identificação**, facilitando os registros de **entradas**.

Para adicionar um novo plano de contas, você pode clicar no botão (<em class="mdi mdi-plus"></em>) e informar:

- **Nome**: nome do plano de contas;
- **Código**: pode-se definir um código específico (números e/ou letras) para facilitar no momento da busca;
- **Tipo**: se é entrada ou saída.

![planos de contas](/receitas/8_planos_de_contas.png)

> Ao acessar a lista de planos de contas pelo módulo de receitas, serão exibidos somente os planos de contas de entrada, pois são relevantes neste módulo. Para listar todos os planos de contas, acesse pelo módulo **Financeiro** &raquo; **Contas**.{.gw .gw-note .is-info}

## Centros de custos

Para facilitar a análise financeira da empresa, é possível cadastrar os centros de custos, que são **unidades dentro de um plano de contas**.

Para adicionar um novo centro de custos, você pode clicar no botão (<em class="mdi mdi-plus"></em>) e informar:

- **Nome**: nome do centro de custos;
- **Código**: pode-se definir um código específico (números e/ou letras) para facilitar no momento da busca;
- **Tipo**: se é entrada ou saída.

![centros de custos](/receitas/9_centros_de_custos.png)
