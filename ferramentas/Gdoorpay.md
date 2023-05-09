---
title: Gdoor Pay
description: 
published: true
date: 2023-05-09T18:44:05.862Z
tags: 
editor: markdown
dateCreated: 2023-05-09T18:38:43.109Z
---

# Introdução

A integração do sistema **Gweb** com a máquininha do **POS Vero Smart** possibilita ao sistema uma funcionalidade similar a utilização do TEF(Transferência Eletrônica de Fundos), onde o sistema aguarda o recebimento do pagamento para finalizar a venda e registra os dados do cartão (bandeira, NSU, nº autorização) automaticamente.

A comunicação entre sistema e equipamento é feita por meio de um app instalado no **POS Vero Smart**. Para esta comunicação, o **POS Vero Smart** precisa de uma conexão com internet.

# Lista
Acessando **Configurações » Ferramentas » Integrações**, você visualiza a lista de integrações disponíveis para seu sistema.

![tela-integracoes.png](/config/ferramentas/tela-integracoes.png)

## Habilitar novo dispositivo móvel
Selecionando a integração **Glink**, clique no botão (<em class="mdi mdi-cog"></em>) no lado direito.

![acesso-configurar.png](/config/ferramentas/acesso-configurar.png)

Será apresentada a listagem de todos os equipamentos (celular ou tablet) que foram habilitados para a empresa utilizar na emissão de pedidos.

Para habilitar um novo dispositivo móvel, clique no botão de adição (<em class="mdi mdi-plus-circle"></em>) ao lado direito da listagem.

![listagem-equipamentos.png](/config/ferramentas/listagem-equipamentos.png)

Na tela apresentada para habilitar a integração, informe os seguintes dados do dispositivo:

![tela-habilitacao.png](/config/ferramentas/tela-habilitacao.png)

- **Identificação**: escolha um nome para a identificação do dispositivo;
- **Validade da habilitação**: selecione uma validade de 15 dias, 1 mês, 2 meses, 3 meses ou por tempo indeterminado;
- **Usuário**: informe um usuário cadastrado no sistema Gweb;
- **Vendedor**: informe um vendedor cadastrado no sistema Gweb;
- **Vendedor fixo**: marcando esta opção, ao acessar o aplicativo no seu dispositivo não será possível alterar o vendedor no pedido.


Finalizando a digitação dos dados, clique no botão **gerar código**. Baixe o App **"Glink: Pedido de venda externo"** na Play Store ou App Store do seu dispositivo móvel. Acesse o aplicativo e realize a leitura do **QR Code**. Caso não tenha câmera no dispositivo, copie o código e cole no aplicativo.

![tela-qrcode.png](/config/ferramentas/tela-qrcode.png)

Após a habilitação dos dispositivos, todos os equipamentos liberados serão apresentados na listagem. Para remover uma habilitação (como ocorre quando a empresa "desligar" um vendedor), clique no botão **"revogar"**.

![revogar.png](/config/ferramentas/revogar.png)


Para conhecer o funcionamento do aplicativo **Glink**, [clique aqui](https://bdc.gdoor.com.br/artigos/novo-glink/#dashboard).










