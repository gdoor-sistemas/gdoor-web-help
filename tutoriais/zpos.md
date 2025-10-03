---
title: ZPOS no GWEB
description: Veja como configurar o aplicativo ZPOS das maquininhas no GWEB
published: true
date: 2025-10-03T14:19:53.799Z
tags: tutorial, zpos
editor: markdown
dateCreated: 2024-01-10T12:54:23.554Z
---

# Introdução

Na integração do sistema **Gweb** com o aplicativo **ZPOS**, o sistema aguarda o recebimento do pagamento para finalizar a venda e registra os dados do cartão (bandeira, NSU, nº autorização) automaticamente. 

A comunicação entre sistema e equipamento é feita por meio de um app instalado na sua maquininha. Ele está disponível nos modelos a seguir:


![Lista de dispositivos compatíveis com o ZPOS](/config/ferramentas/maquininhas_.png)

>Para esta comunicação, é necessário conectar a maquininha à internet.
{.is-info}

# Habilitar novo dispositivo

## Cadastro de dispositivos

A ativação do dispositivo é simples, basta acessar a sua **maquininha** e o **PDV (Sistema Web)**.

### Dispositivo - Maquininha

Acesse a **loja de aplicativos** na sua **maquininha**, pesquise por **"ZPOS"** e efetue a instalação.

![tela inicia](/config/ferramentas/inicial3.png)

Ao finalizar a instalação, abra o aplicativo **ZPOS**.

### PDV - Sistema Web

Para habilitar um novo dispositivo móvel, acesse o menu **cadastros >> pagamentos** e nos **dispositivos** clique no botão de adição (<em class="mdi mdi-plus-circle"></em>) ao lado direito da listagem.

![cadastrar dispositivo](/config/ferramentas/cad-dispositivo01.png)

Será apresentado o formulário de cadastro de uma nova maquininha, os campos disponíveis são:

![novo cadastro](/config/ferramentas/cad-dispositivo02.png)

- **Nome (identificação)**: cadastre nomes diferentes e únicos para cada maquininha afim de facilitar a identificação no momento do uso.
- **Integradora**: Selecione entre **Stone**, **PagBank**, **Vero (Banrisul)**, **Rede**, **Cielo**, **Clover**, **Sipag**, **Caixa**, **Bin** e **Sicredi**.
- **Número serial (POS)**: informação disponível na tela da maquininha, no campo **número de série** do aplicativo **ZPOS**.
- **Imprimir documento da venda no POS**: Configuração para o GWEB imprimir a NFC-e diretamente na maquininha POS para atender ao decreto 56670/22 do RS 

![Número de série no aplicativo ZPOS](/config/ferramentas/numero_serie.png)

Após preencher o cadastro da maquininha, clique em <span class="mat-button">SALVAR</span>.

# Vincular dispositivo com o meio de pagamento

Após realizar o cadastro do dispositivo, será necessário vincular a maquininha a um meio de pagamento. Podem ser cadastrados vários meios de pagamento para a utilização da mesma maquininha.
Acessando **Cadastros » Pagamentos**, localize na listagem os meios de pagamento que serão utilizados na maquininha.

![meios de pagamento](/config/ferramentas/meio-pgto-vero-01.png)

Dê um duplo clique para acessar o cadastro e na opção **dispositivo de pagamento**, localize e selecione a maquininha cadastrada que deseja utilizar para este meio de pagamento.

![editar forma pagamento](/config/ferramentas/form-pgto-vero-01.png)

Realize o mesmo processo de cadastro para todas as formas de pagamento que utilizarão a comunicação com a maquininha.

![editar forma pagamento](/config/ferramentas/form-pgto-vero-02.png)

Nesta tela, os campos disponíveis referente ao dispositivos de pagamento são:

**Dispositivo:** Selecione uma das maquininhas cadastradas anteriormente.

**Responsável pelo parcelamento:** Selecione a pessoa responsável pelo parcelamento, **emissor refere-se ao emissor do cartão** e **lojista refere-se a própria loja**. Consulte os responsáveis pela maquininha para saber qual opção sua loja irá trabalhar.

Finalizando os vínculos entre todas as maquininhas e as **formas de pagamento**, clique em <span class="mat-button mat-accent">salvar</span>.

# Configuração do PDV

Acesse **Movimentações » PDV**, clique ao lado direito da tela na opção **configurações do PDV** e verifique na listagem dos **meios de pagamento disponíveis para uso no PDV** se estão selecionados os meios de pagamento onde vinculou a utilização da maquininha.

Caso não estejam marcados, marque os meios de pagamento e clique em <span class="mat-button mat-accent">salvar</span>.

![marcar meio pgto](/config/ferramentas/marcar-meio-pgto-vero.png)

# Utilizando a integração com a maquininha

Ao acessar o aplicativo **ZPOS** na maquininha, será apresentada a mensagem **"Conectado, aguardando vendas..."**.

![aguardando pagamentos](/config/ferramentas/aguardando-pgto3.png)

Na tela de finalização da venda no PDV Gweb, quando selecionar a forma de pagamento no botão <span class="mat-button"><em class= "mdi mdi-cash" ></em> Pagamento por integração</span>, escolha o tipo de cartão e clique no botão <span class="mat-button mdi ">realizar cobrança</span>.

![realizar cobrança](/config/ferramentas/venda02-vero.png)

> É possível selecionar o meio de pagamento utilizando as teclas de atalho, identificadas por letras ao lado direito do nome do meio de pagamento.
![teclas atalho](/config/ferramentas/venda03-vero.png)
{.is-info}

O sistema inicia neste momento a comunicação com a maquininha e aguarda o retorno do pagamento.

![enviando pagamento](/config/ferramentas/venda04-vero.png)

Na maquininha, verifique a solicitação para que **aproxime, insira ou passe o cartão**, apresentando o **valor da venda** e a **forma de pagamento**.

![aproxime ou insira cartao](/config/ferramentas/inserir-cartao-vero3.png)

A partir deste momento, basta seguir as orientações apresentadas na maquininha. 

Ao concluir o processo na maquininha, o sistema **registrará** a transação, basta clicar em <span class="mat-button mat-accent">SALVAR</span> para **finalizar a venda** e fazer a **impressão do documento fiscal**.
