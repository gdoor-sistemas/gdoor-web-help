---
title: TEF no GWEB
description: Veja como configurar o TEF no GWEB.
published: false
date: 2025-05-16T17:30:47.474Z
tags: nfc-e, pdv, pré-venda-gerencial, pdv híbrido, vendas, tef
editor: markdown
dateCreated: 2025-05-16T12:55:02.228Z
---

# Introdução
Na integração do **GWEB** com o **TEF**, o sistema **comunica com um novo serviço instalado**, e este serviço **requisita o pagamento no dispositivo TEF** conectado ao computador.

Atualmente a integração TEF no GWEB está disponível nas seguintes integradoras:

- **CIELO**
- **REDE**
- **BANRISUL**
- **PAGBANK**

> A comunicação do GWEB com o TEF funciona apenas em dispositivos **Windows**.
{.is-info}


Os **passos necessários** para a **habilitação do TEF** no GWEB são os seguintes:

1.	Cadastrar um novo dispositivo TEF;
2.	Cadastrar uma forma de pagamento que utilizará TEF;
3.	Habilitar o uso do TEF no PDV e configurar a integração;
4.	Baixar e instalar o *Gdoor Payments Service*;
5.	Testar e usar a integração;

# Cadastrando um novo dispositivo TEF

No GWEB, acesse o menu **Cadastros > Pagamentos** e clique ícone <span class="mdi mdi-plus"></span> no submenu **Dispositivos** à direita para cadastrar um novo dispositivo TEF.

![Menu de dispositivos](/tutoriais/tef/1_menu_cadastro_pagamentos_dispositivos_.png)

No formulário de dispositivos, selecione o **tipo "TEF"** e preencha os dados de acordo com o seu TEF. Os campos disponíveis são:

![Formulário de dispositivos TEF](/tutoriais/tef/2_form_dispositivo_tef.png)

- **Nome (identificação**: Nome do TEF para identificação interna da empresa;
- **Código da empresa:** Código da sua empresa no cadastro do TEF;
- **Código da filial:** Código da sua filial ligada a empresa no cadastro do TEF (pode ocorrer de ser o mesmo código da empresa);
- **Código do terminal:** Código do terminal TEF que está sendo instalado;
- **Código do operador:** Código do operador do TEF (sistema ou usuário);
- **Porta USB PinPad:** Porta de comunicação com o dispositivo TEF;
- **Integradora:** Selecione a integradora do seu TEF, dentre as disponíveis na lista;

Ao finalizar o cadastro, clique em <span class="mat mat-button mat-accent">salvar</span> para gravar o dispositivo.

# Cadastrando uma nova forma de pagamento

No GWEB, acesse o menu **Cadastros > Pagamentos** e clique ícone <span class="mdi mdi-plus"></span> no canto inferior direito da tela.

![Cadastro de formas de pagamento](/tutoriais/tef/3_menu_cadastro_pagamentos_formas_.png)

No formulário da forma de pagamento, no campo **Referência na NF-e**, selecione **"Cartão de crédito"** ou **"Cartão de débito"** e marque a opção **Utilizar dispositivos TEF** preencha os campos de acordo com a necessidade

![Cadastro da forma de pagamento TEF](/tutoriais/tef/4_form_forma_pagamento_com_tef.png)


