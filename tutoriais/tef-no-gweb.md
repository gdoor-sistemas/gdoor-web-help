---
title: TEF no GWEB
description: Veja como configurar o TEF no GWEB.
published: false
date: 2025-05-19T20:20:40.511Z
tags: nfc-e, pdv, pré-venda-gerencial, pdv híbrido, vendas, tef
editor: markdown
dateCreated: 2025-05-16T12:55:02.228Z
---

# Introdução

Na integração do **GWEB** com o **TEF**, o sistema se **comunica com um serviço instalado no computador**. É esse serviço que **solicita o pagamento ao dispositivo TEF** conectado e retorna a confirmação da operação ao GWEB.

Atualmente a integração TEF no GWEB está disponível nas seguintes integradoras:

- **CIELO**
- **REDE**
- **BANRISUL**
- **PAGBANK**

> A comunicação entre o GWEB e o TEF funciona apenas em dispositivos **com sistema operacional Windows**.
{.is-info}

Listamos, neste tópico, o passo a passo completo para a configuração e teste do TEF no GWEB.

# Cadastrando um novo dispositivo TEF

No GWEB, acesse o menu **Cadastros > Pagamentos** e clique ícone <span class="mdi mdi-plus"></span>, disponível no submenu **Dispositivos**, para cadastrar um novo dispositivo TEF.

![Menu de dispositivos](/tutoriais/tef/1_menu_cadastro_pagamentos_dispositivos_.png)

Na tela do **novo cadastro**, selecione o **tipo "TEF"** e preencha os dados conforme as informações do seu terminal.

![Formulário de dispositivos TEF](/tutoriais/tef/2_form_dispositivo_tef.png)

Os campos disponíveis são:

- **Nome (identificação)**: nome do TEF para identificação interna da empresa;
- **Código da empresa:** código da empresa cadastrado no sistema TEF;
- **Código da filial:** código da filial vinculada à empresa no cadastro do TEF (pode ser o mesmo código da empresa);
- **Código do terminal:** código do terminal TEF que está sendo instalado;
- **Código do operador:** código do operador do TEF (pode ser o sistema ou um usuário específico);
- **Porta USB PinPad:** porta de comunicação com o dispositivo TEF;
- **Integradora:** selecione a integradora do seu TEF, dentre as opções disponíveis na lista.

Ao finalizar o cadastro, clique em <span class="mat mat-button mat-accent">salvar</span> para gravar o novo dispositivo.

# Cadastrando uma nova forma de pagamento

No GWEB, acesse o menu **Cadastros > Pagamentos** e clique no ícone <span class="mdi mdi-plus"></span> localizado no canto inferior direito da tela.



![Cadastro de formas de pagamento](/tutoriais/tef/3_menu_cadastro_pagamentos_formas_.png)

Na tela do **novo cadastro**, no campo **Referência na NF-e**, selecione **"Cartão de crédito"**, **"Cartão de débito"** ou **"Pagamento instantâneo (PIX)** - Estático" e marque a opção **"Utilizar dispositivos TEF"**.


Preencha os demais campos conforme a necessidade.

![Cadastro da forma de pagamento TEF](/tutoriais/tef/4_form_forma_pagamento_com_tef.png)

Ao finalizar o cadastro, clique em <span class="mat mat-button mat-accent">salvar</span> para gravar a nova forma de pagamento.

# Configurar o PDV e habilitar o TEF
No GWEB, acesse o menu **Movimentações > PDV** e clique no submenu **Configurações do PDV**, no canto inferior direito.

![Configurações do PDV](/tutoriais/tef/5_acessar_config_pdv.png)

Na seção de **Meios de pagamento**, marque a **forma de pagamento** cadastrada e clique em <span class="mat mat-button mat-accent">salvar</span> para gravar as informações.

![Formas de pagamento no PDV](/tutoriais/tef/5_1_configurar_formas.png)

Ainda nas configurações do PDV, na seção **Configuração TEF**, marque a opção **"Configurar serviço TEF (Gdoor Payments)"**.


Preencha os dados de acordo com a configuração do seu TEF. Os campos disponíveis são:


![Configurar TEF](/tutoriais/tef/6_configurar_tef_pdv.png)

- **URL do serviço:** endereço do servidor com o TEF conectado. Se o TEF estiver no mesmo computador, utilize “localhost”; caso contrário, informe o IP ou URL correspondente;
- **Tipo do TEF:** selecione entre **"Dial (Texto)"** ou **"Dedicado (DLL)"**;
- **Modelo do TEF:** selecione o modelo entre as opções disponíveis;
- **Display do QR Code:** escolha onde o QR Code será exibido ou selecione **"Não suportado"** caso o TEF não ofereça essa função;
- **Opção de impressão:** defina quantas vias deseja imprimir;
- **Confirmar tansação automaticamente:** marque esta opção se desejar que a transação seja confirmada automaticamente no dispositivo TEF, assim que for retornada ao GWEB.

Por fim, realize o download e instalação do **Gdoor Payments Service** no computador através do botão <span class="mat mat-button mat-accent">download</span>.

# Uso no PDV

No PDV do GWEB, inclua um ou mais produtos na venda e avance até a **tela de pagamentos**. Nela, **pressione o atalho** da forma de pagamento cadastrada para utilizar a integração com TEF.

![Pagamento no PDV](/tutoriais/tef/7_pagamento_pdv.png)

Selecione o dispositivo TEF que deseja e clique em <span class="mat mat-button">realizar cobrança</span>

![8_selecionar_tef.png](/tutoriais/tef/8_selecionar_tef.png)

> Na **primeira venda** será necessário selecionar o dispositivo TEF que deseja utilizar, este dispositivo **ficará salvo** e será utilizado **automaticamente nas próximas vendas**.
{.is-info}

![9_confirmacao_tef.png](/tutoriais/tef/9_confirmacao_tef.png)

Quando o pagamento for confirmado pelo **TEF**, o GWEB receberá o código da transação e o exibirá na tela.

Agora o **TEF** pode ser utilizado em qualquer venda no GWEB. E caso julgar necessário, ainda é possível **cadastrar outras formas de pagamento** que utilizem a integração.