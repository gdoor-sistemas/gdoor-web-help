---
title: Controle de caixa no GWEB
description: Veja como configurar e utilizar o controle de caixa no GWEB
published: false
date: 2024-07-31T19:56:46.906Z
tags: caixa, abertura, fechamento, controle, gaveta, suprimento, sangria
editor: markdown
dateCreated: 2024-07-29T17:30:51.160Z
---

## Controle de caixa
Nesta seção encontram-se as configurações para o controle de caixa no GWEB.

![Configurações do caixa](/movimentos/pdv/configuracoes_caixa.png)

Para habilitar o controle de caixa no GWEB, é necessário marcar a caixa <em class="mdi mdi-checkbox-marked"></em> Controle de caixa.

> Caso deseje saber mais sobre o uso do caixa, acesse o tutorial sobre o [controle de caixa no GWEB](/tutoriais/controle-de-caixa).
{.is-info}

As opções disponíveis para o controle de caixa são:

 - **Controle de caixa**: Marque esta opção para habilitar o controle de caixa e liberar os outros campos para configuração.
 - **Fechamento de caixa Cego**: Marque esta opção para não exibir os valores do caixa no momento do fechamento (fechamento sem conferência de valores).
 - **Utilizar caixa já aberto**: Marque esta opção para habilitar que todos os computadores utilizem o mesmo caixa que fora aberto.
 - **Somente usuário que abriu pode fechar o caixa**: Marque esta opção para permitir que apenas o usuário que abriu o caixa possa fechá-lo.
 - **Abater troco da espécie**: Ao marcar esta opção, o valor de troco será abatido da espécie de recebimento e o troco não será exibido no fechamento de caixa.
 
### Lista de caixas cadastrados
 Após habilitar a opção para utilizar o controle de caixa, é necessário cadastrar todos os PDVs que irão utilizar o GWEB. Clique em **cadastrar** ou **visualizar** para abrir o **ambiente do controle de caixa** e visualizar os PDVs cadastrados ou cadastrar novos.
 
![Ambiente do controle de caixa](/movimentos/pdv/ambiente_controle_de_caixa.png)

Para cadastrar um caixa as opções disponíveis são:
- **Nome do PDV**: Informe aqui um identificador para o PDV.
- **Responsável**: Selecione aqui um [usuário](/configuracoes/usuarios) cadastrado que será responsável por esse caixa. Ao selecionar um usuário, este caixa só poderá ser aberto e usado por esse usuário.
- **Controle de gaveta**: Marque esta caixa para habilitar o controle de gaveta para este caixa.


<!-- REMOVER DEPOIS O QUE TEM ACIMA -->

# Controle de caixa
Listamos neste tópico configuração, **abertura**, **suprimento**, **fechamento**, **sangria** e também como efetuar o **fechamento de caixa cego**.

O **fechamento** e **abertura** do caixa podem ser efetuados diversas vezes ao dia, ao final de cada turno ou a cada troca de operador.

# Configuração

Para acessar as configurações do controle de caixa, você deve acessar o menu **movimentações > PDV**, e no menu à direita a opção **configurações do PDV**.

Para habilitar o controle de caixa no GWEB, é necessário marcar a caixa <em class="mdi mdi-checkbox-marked"></em> Controle de caixa.

![Marcar controle de caixa](/tutoriais/controle-caixa/habilitar_controle_caixa.png)

> Para conferir mais detalhes sobre a configuração, acesse as [configurações do controle de caixa](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#controle-de-caixa).
{.is-info}


# Abertura do caixa

Efetuada a configuração, aparecerá **PDV fechado**, para abri-lo basta iniciar uma venda ou utilizar a tecla de atalho <kbd>Ctrl + A</kbd>.
Na caixa de confirmação de abertura clique em <span class="mat mat-button mat-accent">CONFIRMAR</span>.

![Abrir o PDV](/tutoriais/controle-caixa/2_abrir_pdv_1.png)

Caso o seu usuário não esteja **vinculado diretamente** a um caixa, o GWEB irá pedir qual **caixa** que você deseja utilizar.

![Escolher o caixa](/tutoriais/controle-caixa/3_escolher_caixa.png)

> Caso o você vincule um usuário à um caixa nas **configurações do PDV**, esta tela não irá aparecer.
{.is-warning}

## Suprimento

Após a seleção do caixa que deseja usar, é possível efetuar o **suprimento** para a **abertura do caixa**, informando o **valor** e uma **observação**, caso deseje.

![Suprimento](/tutoriais/controle-caixa/4_suprimento_abertura.png)

> Também é possível realizar suprimentos com o caixa **já aberto**, basta clicar na opção **suprimento** no menu à direita do PDV.
{.is-info}

# Fechamento do caixa

Ao finalizar o período de trabalho, deve-se efetuar o **fechamento do caixa**. Para isso utilize a tecla de atalho <kbd>Ctrl + F</kbd> e na caixa de confirmação de fechamento clique em <span class="mat mat-button mat-accent">sim, fechar</span>.

![Fechar o caixa](/tutoriais/controle-caixa/5_fechamento_caixa.png)

## Sangria

Após a confirmação para **fechamento do caixa**, abrirá a tela para informar a **sangria**. O sistema sugerirá o **valor somado** das movimentações em espécie, também é possíve inserir uma observação, caso deseje.
Após verificação, clique em <span class="mat mat-button">confirmar</span>.

> Também é possível realizar sangrias durante o uso do caixa, basta clicar na opção **sangria** no menu à direita do PDV.
{.is-info}

![Sangria](/tutoriais/controle-caixa/6_sangria_fechamento.png)

> Caso opte por trabalhar com o **fechamento de caixa cego**, nesta tela **não** serão exibidos os valores do caixa **e nem será sugerido** o **valor somado** das movimentações.
{.is-info}

## Fechamento de caixa - espécies

Após a confirmação da **sangria de fechamento**, é possível informar os valores por espécie de pagamento, este passo não é obrigatório..

Após informar os dados desejados, clique em <span class="mat mat-button mat-accent">salvar</span>.

![Fechamento por espécie](/tutoriais/controle-caixa/7_fechamento_especies.png)

# Relatório

Concluída a **sangria** e o **fechamento das espécies**, o GWEB irá exibir o impresso das movimentações deste caixa para conferência.

![Relatório de fechamento](/tutoriais/controle-caixa/8_relatorio_fechamento.png)

# Reimpressão de fechamentos

Caso deseje efetuar a **reimpressão** de um fechamento de caixa, é possível acessar o menu à direita **Rel. de Fechamento**
Para realizar a reimpressão, basta clicar na opção **Visualizar** do menu do caixa.

![Reimpressão](/tutoriais/controle-caixa/9_reimpressao.png)