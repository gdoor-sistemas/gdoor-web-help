---
title: Gdoor Pay
description: Veja como interligar seu sistema com o aplicativo Gdoor Pay
published: false
date: 2023-05-16T17:17:52.535Z
tags: 
editor: markdown
dateCreated: 2023-05-10T19:42:10.949Z
---

# Introdução

A integração do sistema **Gweb** com a maquininha do **POS Vero Smart**, o sistema aguarda o recebimento do pagamento para finalizar a venda e registra os dados do cartão (bandeira, NSU, nº autorização) automaticamente.

A comunicação entre sistema e equipamento é feita por meio de um app instalado no **POS Vero Smart**. Para esta comunicação, é necessário contactar o **POS Vero Smart** à internet.


# Habilitar novo dispositivo

## Ativação do Gdoor Pay

Acessando **Configurações » Ferramentas » Integrações**, selecione a integração **Gdoor Pay**, clique no botão (<em class="mdi mdi-cog"></em>) no lado direito.

![acesso-configurar.png](/config/ferramentas/acesso-configurar.png)

Será apresentada a uma mensagem informando que a integração Gdoor Pay foi ativada. 


![integ-ativa.png](/config/ferramentas/integ-ativa.png)

> É necessário ativar a integração uma única vez.
{.is-info}

## Cadastros de dispositivos

A ativação do dispositivo é feita de forma rápida, acessando o seu PDV (computador) e o dispositivo (POS Vero smart).

### PDV - Computador

Para habilitar um novo dispositivo móvel, clique no botão de adição (<em class="mdi mdi-plus-circle"></em>) ao lado direito da listagem.

![cad-dispositivo01.png](/config/ferramentas/cad-dispositivo01.png)

Um aviso será apresentado em tela, informando um **"código de vinculação"** que deve ser informado no app do POS Vero Smart.

![cad-dispositivo02.png](/config/ferramentas/cad-dispositivo02.png)

### Dispositivo - POS Vero smart

Acesse a **loja de aplicativos** no seu **POS Vero Smart**, pesquise por **"Gdoor pay"** e efetue a instalação.

![inicial3.png](/config/ferramentas/inicial3.png)

Ao finalizar a instalação, abra o aplicativo. Serão apresentadas as seguintes opções para ativação:

<li><strong>Código de vinculação: </strong>código de 6 dígitos apresentado no <strong>"pdv"</strong>. </li>
<li><strong>Nome do terminal:</strong> cadastre um nome, com até 30 caracteres, para a identificação do dispositivo.</li>

![ativacao-web3.png](/config/ferramentas/ativacao-web3.png)

Digite o código de **6 dígitos**, informe o **nome do terminal** e clique no botão **"ativar"**.

Ao retornar para o pdv no computador, verifique se o novo dispositivo ativado aparece na listagem.

![cad-dispositivo03.png](/config/ferramentas/cad-dispositivo03.png)

## Vincular dispositivo com meio de pagamento
Após realizar o cadastro do dispositivo, será necessário vincular a maquininha a um meio de pagamento. Podem ser cadastrados vários meios de pagamento para a utilização da mesma maquininha.
Acessando **Cadastros » Pagamentos**, localize os meios de pagamentos que utilizaão a maquininha.

![meio-pgto01.png](/config/ferramentas/meio-pgto01.png)

Dê um duplo clique para abrir o cadastro e na opção **dispositivo de pagamento**, localize e selecione a maquininha cadastrada anteriormente.
![form-pgto01.png](/config/ferramentas/form-pgto01.png)

Realize o mesmo processo de cadastro para todas as formas de pagamento que utilizarão a comunicação com a maquininha.
![form-pgto02png.png](/config/ferramentas/form-pgto02png.png)

Finalizando os vínculos entre todas as maquininhas **POS Vero smart** e as **formas de pagamento**, clique em **Salvar**.

## Configuração do PDV

Acesse **Movimentações » PDV**, clique ao lado direito da tela na opção **configurações do PDV** e verifique na listagem dos **meios de pagamento disponíveis para uso no PDV** se estão selecionados os meios de pagamento onde vinculou a utilização da maquininha.

Caso não estejam marcados, marque os meios de pagamento e clique em **salvar**.


![marcar-meio-pgto.png](/config/ferramentas/marcar-meio-pgto.png)


## Utilizando a integração com POS Vero Smart

Após ativar o seu aplicativo e abrir ele na sua maquininha, será apresentada uma mensagem com o nome do terminal cadastrado anteriormente e a mensagem "aguardando pagamentos".

![aguardando-pgto3.png](/config/ferramentas/aguardando-pgto3.png)

Na tela de finalização da venda em seu PDV, quando selecionar a forma de pagamento no ícone  (canto direito superior da tela), escolha o tipo de cartão e clique no botão **realizar cobrança**.

![venda02.png](/config/ferramentas/venda02.png)

É possível selecionar o meio de pagamento utilizando as teclas de atalho, identificadas por letras ao lado direito do nome do meio de pagamento.

![venda03.png](/config/ferramentas/venda03.png)



![venda04.png](/config/ferramentas/venda04.png)


No POS Vero smart, verifique a solicitação para que "aproxime ou passe o cartão", apresentando o "valor da venda" e a "forma de pagamento".

![inserir-cartao-vero3.png](/config/ferramentas/inserir-cartao-vero3.png)


A partir deste momento, basta seguir as orientações solicitadas em sua maquininha. Ao finalizar o processo no POS Vero smart, o sistema finalizará a venda com a impressão do documento fiscal.















