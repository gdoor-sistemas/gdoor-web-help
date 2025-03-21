---
title: Receitas
description: Identifique as contas a receber da empresa no Gweb e controlá-las através através dos planos de contas e centros de custos.
published: true
date: 2025-01-23T16:36:22.917Z
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

![nova_receita.png](/receitas/nova_receita.png)

## Dados da receita

Nos dados da receita, temos por padrão as seguintes informações:

- **Valor**: quantia que entrará na conta;
- **Emissão**: data em que a receita foi cadastrada;
- **Vencimento**: data de vencimento da receita;
- **Recebida**: ao marcar o **checkbox** “**recebida**” localizado ao lado do valor, indica que a receita está **paga**; 
- **Parcelamento**: ao marcar o **checkbox** “**parcelamento**”,  a aba para **parcelamento da receita** será exibida. Nela será possível **parcelar valor** ou **repetir valor**, além de informar o **nº de parcelas**, **intervalo** e **período** de vencimento da receita.

![parcelamento](/receitas/parcelamento.png)

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

## Status

Na tela inicial das receitas podemos visualizar a listagem com todas as receitas e seus respectivos status: **vencida**, **vence hoje**, **pendente**, **recebida**, **devolvida**, **abandonada** e **excluída**. 

Ao clicar no botão (<em class="mdi mdi-dots-vertical"></em>) da receita, as ações dos menus ficarão disponíveis de acordo com o status dela:

![status listagem](/receitas/capturar.png)

> Parcelas com status "**excluídas**" e "**abandonadas**" não aparecerão na listagem, para visualizá-las é necessário **filtrar** as parcelas conforme o status desejado.
{.is-warning}

### Vencida

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da receita.
- **Editar**: ao editar a receita, você pode marcar como recebida, incluir os dados da movimentação, como a conta destino do valor, a espécie de pagamento e caso deseje descrever a movimentação.
- **Receber**: ao efetivar o recebimento da receita, você define a data do recebimento, taxas, juros e acréscimos. A espécie de recebimento também é uma opção para ser incluída. Já no campo **recebido**, você escolhe o valor que deu entrada, com esse procedimento você pode receber valores parciais, e a opção definir conta, para onde esse valor será registrado.
- **Renegociar**: você pode renegociar os valores que constam pendentes. 
- **Excluir**: ao excluir a receita, não há mais possibilidade de movimentá-la.
- **Abandonar**: ao abandonar uma parcela, esta ficará inativa, mas poderá ser quitada ou excluída posteriormente. Utilizamos esse recurso, quando a parcela já está a bastante tempo vencida e queremos tirar listagem de receitas pendentes.

### Vence hoje

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da receita.
- **Editar**: ao editar a receita, você pode marcar como recebida, incluir os dados da movimentação, como a conta destino do valor, a espécie de pagamento e caso deseje descrever a movimentação.
- **Receber**: ao efetivar o recebimento da receita, você define a data do recebimento, taxas, juros e acréscimos. A espécie de recebimento também é uma opção para ser incluída. Já no campo **recebido**, você escolhe o valor que deu entrada, com esse procedimento você pode receber valores parciais, e a opção definir conta, para onde esse valor será registrado.
- **Renegociar**: você pode renegociar os valores que constam pendentes.
- **Excluir**: ao excluir a receita, não há mais possibilidade de movimentá-la.

### Pendente

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da receita.
- **Editar**: ao editar a receita, você pode marcar como recebida, incluir os dados da movimentação, como a conta destino do valor, a espécie de pagamento e caso deseje descrever a movimentação.
- **Receber**: ao efetivar o recebimento da receita, você define a data do recebimento, taxas, juros e acréscimos. A espécie de recebimento também é uma opção para ser incluída. Já no campo **recebido**, você escolhe o valor que deu entrada, com esse procedimento você pode receber valores parciais, e a opção definir conta, para onde esse valor será registrado.
- **Renegociar**: você pode renegociar os valores que constam pendentes. 
- **Excluir**: ao excluir a receita, não há mais possibilidade de movimentá-la.

### Recebida

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da receita.
- **Imprimir recibo**: será gerado o recibo de pagamento para impressão da parcela recebida.
- **Devolver**: essa opção traz a possibilidade de devolver um valor que já foi recebido. Após a devolução o status da parcela mudará e ficará como devolvida. Depois dessa alteração de status, você só poderá marcar e visualizar detalhes da movimentação.
- **Estornar**: ao estornar um recebimento, o valor voltará a ficar pendente. Importante lembrar que após esse processo a movimentação dessa parcela não poderá mais ser desfeita.

### Devolvida

Ficarão com status **devolvida**, parcelas devolvidas **manualmente**.

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da receita.
- **Imprimir recibo**: será gerado o recibo de pagamento para impressão da parcela recebida.

### Abandonada

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da receita.
- **Editar**: ao editar a receita, você pode marcar como recebida, incluir os dados da movimentação, como a conta destino do valor, a espécie de pagamento e caso deseje descrever a movimentação.
- **Receber**: ao efetivar o recebimento da receita, você define a data do recebimento, taxas, juros e acréscimos. A espécie de recebimento também é uma opção para ser incluída. Já no campo **recebido**, você escolhe o valor que deu entrada, com esse procedimento você pode receber valores parciais, e a opção definir conta, para onde esse valor será registrado.
- **Renegociar**: você pode renegociar os valores que constam pendentes.
- **Excluir**: ao excluir a receita, não há mais possibilidade de movimentá-la.

### Excluída

Ficarão com status **excluída**, parcelas oriundas de **nota fiscal cancelada** ou **exclusão de parcela manual**.

- **Marcar**: seleciona uma ou mais parcelas.
- **Ver detalhes**: será exibido detalhes da receita.
- **Receber**: ao efetivar o recebimento da receita, você define a data do recebimento, taxas, juros e acréscimos. A espécie de recebimento também é uma opção para ser incluída. Já no campo **recebido**, você escolhe o valor que deu entrada, com esse procedimento você pode receber valores parciais, e a opção definir conta, para onde esse valor será registrado.

# Renegociação de parcelas

Ao efetuar uma renegociação financeira com o cliente, você tem a facilidade do gerenciamento do módulo financeiro para gerar as novas parcelas referentes a renegociação e abandonar as parcelas antigas.

Em **receitas**, as parcelas desejadas podem ser selecionadas de duas formas:

- Clicando no ícone de "imagem" ao lado das informações da receita:

![marcar parcelas](/renegociação/1_renegociação.png)

- Ou clicar no botão (<em class="mdi mdi-dots-vertical"></em>), seguido de **marcar** e selecionar todas as parcelas que você desejar:

![marcar parcelas](/renegociação/2_renegociação_web.jpg)

Depois de selecionar as parcelas para renegociar, basta clicar no botão (<em class="mdi mdi-sync"></em>) **renegociar** localizado no menu superior.

![renegociar](/renegociação/selecionar.png)

Na tela seguinte você verá as informações das parcelas marcadas para renegociação, como o **documento**, **vencimento**, **situação** e os **valores**. 

O sistema somará os valores das parcelas indicadas e trará o **valor total da renegociação** que pode ser editado. 
No campo abaixo informe o **nº de parcelas** desejadas para a renegociação, ao lado é possível informar o **plano de contas** e **centro de custos**.

![renegociação](/renegociação/3_nova.png)

> No exemplo acima, foi escolhido um intervalo de **2 meses** para os pagamentos da renegociação. O sistema gera os vencimentos  automaticamente, mas eles podem ser editados.
{.is-info}

![parcelamento](/renegociação/parcelamento.png)

Para ver os detalhes da receita original, basta clicar no botão (<em class="mdi mdi-launch"></em>) ao lado de cada parcela.
No cabeçalho dos detalhes da receita, você encontra algumas opções:

![detalhes da receita](/renegociação/detalhes_receita.png)

- **Editar** - edita todos os dados dessa receita;
- **Receber** - efetiva o recebimento dessa parcela;
- **Renegociar** - faz um novo parcelamento dos valores pendentes;
- **Excluir** - as parcelas serão excluídas e não poderão mais ter movimentação. Aparecerão somente se filtrar as parcelas com status de ‘excluídas’;
- **Atualizar** - atualiza os dados após uma ação.

Após informar todos os dados, clique em "**gerar renegociação**", no canto inferior direito. 

![gerar renegociação](/renegociação/gerar_renegociação.png)

Na tela inicial das receitas podemos visualizar a listagem com todas as receitas e seus respectivos status. 
As parcelas provenientes de uma renegociação, aparecem com status de **pendentes**. Ao clicar em uma delas, seguido de "**ver parcelas vinculadas**" será exibido o **detalhamento** da renegociação, com as parcelas novas e antigas.

![detalhamento](/renegociação/7_detalhamento_renegociação.jpg) 

# Auxiliares

Logo abaixo dos acessos, podemos visualizar os campos auxiliares, esses estão padronizados em todo o módulo financeiro. 

## Planos de contas 

Aqui é possível visualizar e cadastrar os planos de contas de entrada que serão utilizados no financeiro.

![planos de contas](/contas/8_planos_de_contas.png)

> Ao acessar a lista de planos de contas pelo módulo de despesas, serão exibidos somente os planos de contas de entrada, pois são relevantes neste módulo. Para listar todos os planos de contas, acesse pelo módulo **Financeiro** &raquo; **Contas**.{.gw .gw-note .is-info}

Para saber mais sobre os planos de contas acesse:
- [Planos de contas *Veja detalhes sobre o cadastro de planos de contas no GWEB*](/pt-br/financeiro/planos-de-contas)
{.links-list}

## Centros de custos

Aqui é possível visualizar e cadastrar os centros de custos que serão utilizados no financeiro.

![centros de custos](/contas/9_centros_de_custos.png)

Para saber mais sobre os centros de custos acesse:
- [Centros de custos *Veja detalhes sobre o cadastro de centros de custos no GWEB*](/pt-br/financeiro/centros-de-custos)
{.links-list}

# Configurações

Neste menu é possível verificar e personalizar algumas funcionalidades do financeiro do GWEB.

## Configuração de juros mensal

A configuração de juros mensal é aplicada no momento do recebimento de uma receita, baseando-se na data de vencimento da receita e nas configurações abaixo preenchidas.

![Configurações de juros mensal](/receitas/configuracoes_juros_mensal.png)

- **Percentual de juros mensal**: Informe o percentual de juros mensal para ser calculado nas receitas.
- **Multa (valor fixo)**: Valor em Reais (R$) da multa por atraso.
- **Dias de carência**: Dias de carência para aplicação da multa e juros com base na data de vencimento.
