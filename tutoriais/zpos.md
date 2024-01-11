---
title: ZPOS no GWEB
description: Veja como configurar o aplicativo ZPOS no GWEB
published: false
date: 2024-01-11T11:23:12.450Z
tags: tutorial, zpos
editor: markdown
dateCreated: 2024-01-10T12:54:23.554Z
---

# Introdução

Na integração do sistema **Gweb** com o **ZPOS**, o sistema aguarda o recebimento do pagamento para finalizar a venda e registra os dados do cartão (bandeira, NSU, nº autorização) automaticamente.

A comunicação entre sistema e equipamento é feita por meio de um app instalado na sua maquininha. Para esta comunicação, é necessário conectar a maquininha à internet.

Até o momento o aplicativo está liberado para as maquininhas **POS VERO SMART (Banrisul)**, **Stone** e **Moderninha Pagbank**. Basta acessar a loja de aplicativos da sua maquininha, localizar e instalar o aplicativo **ZPOS**. 

# Habilitar novo dispositivo

## Cadastro de dispositivos

A ativação do dispositivo é simples, basta acessar a sua **maquininha** e o **PDV (computador)**.

### Dispositivo - Maquininha

Acesse a **loja de aplicativos** na sua **maquininha**, pesquise por **"ZPOS"** e efetue a instalação.

![tela inicia](/config/ferramentas/inicial3.png)

Ao finalizar a instalação, abra o aplicativo **ZPOS**.

### PDV - Computador

Para habilitar um novo dispositivo móvel, acesse o menu **cadastros >> pagamentos** e nos **dispositivos** clique no botão de adição (<em class="mdi mdi-plus-circle"></em>) ao lado direito da listagem.

![cadastrar dispositivo](/config/ferramentas/cad-dispositivo01.png)

Será apresentado o formulário de cadastro de uma nova maquininha, os campos disponíveis são:

![novo cadastro](/config/ferramentas/cad-dispositivo02.png)

- **Nome (identificação)**: Um nome para identificar essa maquininha.
- **Integradora**: Selecione entre **STONE**, **PAGBANK** e **BANRISUL**.
- **Número serial (POS)**: **número de série** disponível na tela do aplicativo **ZPOS** na maquininha.

Após preencher o cadastro da maquininha, clique em <span class="mat-button">SALVAR</span>.

# Vincular dispositivo com o meio de pagamento

Após realizar o cadastro do dispositivo, será necessário vincular a maquininha a um meio de pagamento. Podem ser cadastrados vários meios de pagamento para a utilização da mesma maquininha.
Acessando **Cadastros » Pagamentos**, localize na listagem os meios de pagamento que serão utilizados na maquininha.

![meios de pagamento](/config/ferramentas/meio-pgto01.png)

Dê um duplo clique para acessar o cadastro e na opção **dispositivo de pagamento**, localize e selecione a maquininha cadastrada que deseja utilizar para este meio de pagamento.

![editar forma pgto](/config/ferramentas/form-pgto01.png)

Realize o mesmo processo de cadastro para todas as formas de pagamento que utilizarão a comunicação com a maquininha.

![editar forma pgto](/config/ferramentas/form-pgto02png.png)

Finalizando os vínculos entre todas as maquininhas e as **formas de pagamento**, clique em <span class="mat-button mdi ">salvar</span>.

# Configuração do PDV

Acesse **Movimentações » PDV**, clique ao lado direito da tela na opção **configurações do PDV** e verifique na listagem dos **meios de pagamento disponíveis para uso no PDV** se estão selecionados os meios de pagamento onde vinculou a utilização da maquininha.

Caso não estejam marcados, marque os meios de pagamento e clique em <span class="mat-button mdi ">salvar</span>.

![marcar meio pgto](/config/ferramentas/marcar-meio-pgto.png)

# Utilizando a integração com a maquininha

Ao acessar o aplicativo **ZPOS** na maquininha, será apresentado o **nome do terminal** cadastrado com a mensagem **"aguardando pagamentos"**.

![aguardando pagamentos](/config/ferramentas/aguardando-pgto3.png)

Na tela de finalização da venda no PDV Gweb, quando selecionar a forma de pagamento no ícone <em class= "mdi mdi-credit-card-plus" ></em> (no canto direito superior da tela), escolha o tipo de cartão e clique no botão <span class="mat-button mdi ">realizar cobrança</span>.

![realizar cobrança](/config/ferramentas/venda02.png)

> É possível selecionar o meio de pagamento utilizando as teclas de atalho, identificadas por letras ao lado direito do nome do meio de pagamento.
![teclas atalho](/config/ferramentas/venda03.png)
{.is-info}

O sistema inicia neste momento a comunicação com a maquininha e aguarda o retorno do pagamento.

![enviando pagamento](/config/ferramentas/venda04.png)

Na maquininha, verifique a solicitação do ZPOS para que "aproxime, insira ou passe o cartão", apresentando o "valor da venda" e a "forma de pagamento".

![aproxime ou insira cartao](/config/ferramentas/inserir-cartao-vero3.png)

A partir deste momento, basta seguir as orientações apresentadas na maquininha. 

Ao concluir o processo na maquininha, o sistema **finalizará a venda com a impressão do documento fiscal**.
