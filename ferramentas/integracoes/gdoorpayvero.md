---
title: Gdoor Pay
description: Veja como integrar seu sistema com o Gdoor Pay
published: true
date: 2023-12-08T17:20:26.501Z
tags: tutorial, pix
editor: markdown
dateCreated: 2023-12-08T17:19:29.288Z
---

# Introdução

Na integração do sistema **Gweb** com a maquininha do **POS Vero Smart**, o sistema aguarda o recebimento do pagamento para finalizar a venda e registra os dados do cartão (bandeira, NSU, nº autorização) automaticamente.

A comunicação entre sistema e equipamento é feita por meio de um App instalado no **POS Vero Smart**. Para esta comunicação, é necessário contactar o **POS Vero Smart** à internet.


# Habilitar novo dispositivo

## Ativação do Gdoor Pay

Acessando **Configurações » Ferramentas » Integrações**, selecione a integração **Gdoor Pay** e clique no botão (<em class="mdi mdi-cog"></em>) no lado direito.

![configurar](/config/ferramentas/acesso-configurar.png)

Será apresentada uma mensagem informando que a **integração** Gdoor Pay foi **ativada**. 

![integração ativa](/config/ferramentas/integ-ativa.png)

> É necessário ativar a integração apenas uma vez.
{.is-info}

## Cadastro de dispositivos

A ativação do dispositivo é simples, basta acessar o **PDV (computador)** e o **dispositivo (POS Vero Smart)**.

### PDV - Computador

Para habilitar um novo dispositivo móvel, clique no botão de adição (<em class="mdi mdi-plus-circle"></em>) ao lado direito da listagem.

![cadastrar dispositivo](/config/ferramentas/cad-dispositivo01.png)

Será apresentado um aviso na tela, informando o **"código de vinculação"** que deve ser informado no App do POS Vero Smart.

![novo cadastro](/config/ferramentas/cad-dispositivo02.png)

### Dispositivo - POS Vero Smart

Acesse a **loja de aplicativos** no seu **POS Vero Smart**, pesquise por **"Gdoor Pay"** e efetue a instalação.

![tela inicia](/config/ferramentas/inicial3.png)

Ao finalizar a instalação, abra o aplicativo. Serão apresentadas as seguintes opções para ativação:

<li><strong>Código de vinculação: </strong>código de 6 dígitos apresentado no <strong>"Gweb"</strong>. </li>
<li><strong>Nome do terminal:</strong> cadastre um nome com até 30 caracteres, para a identificação do dispositivo.</li>

![ativacao Gweb](/config/ferramentas/ativacao-web3.png)

Digite o código de **6 dígitos**, informe o **nome do terminal** e clique no botão **"ativar"**.

Ao retornar para o PDV no computador, verifique se o novo dispositivo ativado consta na listagem.

![dispositivos cadastrados](/config/ferramentas/cad-dispositivo03.png)

# Vincular dispositivo com o meio de pagamento

Após realizar o cadastro do dispositivo, será necessário vincular a maquininha a um meio de pagamento. Podem ser cadastrados vários meios de pagamento para a utilização da mesma maquininha.
Acessando **Cadastros » Pagamentos**, localize na listagem os meios de pagamento que serão utilizados na maquininha.

![meios de pagamento](/config/ferramentas/meio-pgto01.png)

Dê um duplo clique para acessar o cadastro e na opção **dispositivo de pagamento**, localize e selecione a maquininha cadastrada que deseja utilizar para este meio de pagamento.

![editar forma pgto](/config/ferramentas/form-pgto01.png)

Realize o mesmo processo de cadastro para todas as formas de pagamento que utilizarão a comunicação com a maquininha.

![editar forma pgto](/config/ferramentas/form-pgto02png.png)

Finalizando os vínculos entre todas as maquininhas **POS Vero Smart** e as **formas de pagamento**, clique em <span class="mat-button mdi ">salvar</span>.

# Configuração do PDV

Acesse **Movimentações » PDV**, clique ao lado direito da tela na opção **configurações do PDV** e verifique na listagem dos **meios de pagamento disponíveis para uso no PDV** se estão selecionados os meios de pagamento onde vinculou a utilização da maquininha.

Caso não estejam marcados, marque os meios de pagamento e clique em <span class="mat-button mdi ">salvar</span>.

![marcar meio pgto](/config/ferramentas/marcar-meio-pgto.png)

# Utilizando a integração com POS Vero Smart

Ao acessar o aplicativo na maquininha POS Vero Smart, será apresentado o **nome do terminal** cadastrado com a mensagem **"aguardando pagamentos"**.

![aguardando pagamentos](/config/ferramentas/aguardando-pgto3.png)

Na tela de finalização da venda no PDV Gweb, quando selecionar a forma de pagamento no ícone <em class= "mdi mdi-credit-card-plus" ></em> (no canto direito superior da tela), escolha o tipo de cartão e clique no botão <span class="mat-button mdi ">realizar cobrança</span>.

![realizar cobrança](/config/ferramentas/venda02.png)

> É possível selecionar o meio de pagamento utilizando as teclas de atalho, identificadas por letras ao lado direito do nome do meio de pagamento.
![teclas atalho](/config/ferramentas/venda03.png)
{.is-info}

O sistema inicia neste momento a comunicação com a maquininha **POS Vero Smart** e aguarda o retorno do pagamento.

![enviando pagamento](/config/ferramentas/venda04.png)

No POS Vero Smart, verifique a solicitação para que "aproxime ou passe o cartão", apresentando o "valor da venda" e a "forma de pagamento".

![aproxime ou insira cartao](/config/ferramentas/inserir-cartao-vero3.png)

A partir deste momento, basta seguir as orientações apresentadas na maquininha. 

Ao concluir o processo no **POS Vero Smart**, o sistema **finalizará a venda com a impressão do documento fiscal**.
