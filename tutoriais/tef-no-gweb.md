---
title: TEF no GWEB
description: Veja como configurar o TEF no GWEB.
published: false
date: 2025-05-16T19:04:37.436Z
tags: nfc-e, pdv, pré-venda-gerencial, pdv híbrido, vendas, tef
editor: markdown
dateCreated: 2025-05-16T12:55:02.228Z
---

# Introdução
Na integração do **GWEB** com o **TEF**, o sistema **comunica com um serviço instalado em seu computador**, este serviço **requisita o pagamento no dispositivo TEF** conectado ao computador e o retorna ao GWEB confirmando a operação.

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

> Atenção
Caso deseje utilizar a integração do ZPOS, acesse o [passo a passo](/pt-br/tutoriais/zpos) específico.
{.is-info}

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

No formulário da forma de pagamento, no campo **Referência na NF-e**, selecione **"Cartão de crédito"**, **"Cartão de débito"** ou **Pagamento instantâneo (PIX) - Estático** e marque a opção **Utilizar dispositivos TEF**.

Preencha os demais campos de acordo com a necessidade.

![Cadastro da forma de pagamento TEF](/tutoriais/tef/4_form_forma_pagamento_com_tef.png)

Ao finalizar o cadastro, clique em <span class="mat mat-button mat-accent">salvar</span> para gravar a forma de pagamento.

# Configurar o PDV e habilitar o TEF

No GWEB, acesse o menu **Movimentações > PDV** e clique no submenu **Configurações do PDV** no canto inferior direito.

![Configurações do PDV](/tutoriais/tef/5_acessar_config_pdv.png)

Na seção de **meios de pagamento** das configurações do PDV, marque a **forma de pagamento** que acabou de cadastrar e clique em <span class="mat mat-button mat-accent">salvar</span> para gravar as informações.

![Formas de pagamento no PDV](/tutoriais/tef/5_1_configurar_formas.png)

Ainda nas configurações do PDV, na seção **configuração TEF** marque a opção **configurar serviço TEF (Gdoor Payments)**.

Preencha os dados de acordo com a configuração do seu TEF, os campos disponíveis são:

![Configurar TEF](/tutoriais/tef/6_configurar_tef_pdv.png)

- **URL do serviço:** URL do local que possui o TEF conectado, se o TEF está conectado no seu próprio computador, utilize "localhost", caso contrário, informe o IP ou URL do TEF;
- **Tipo do TEF:** Selecione entre **Dial (Texto)** ou **Dedicado(DLL)**;
- **Modelo do TEF:** Selecione o modelo do seu TEF dentre as opções disponíveis na lista;
- **Display do QR Code:** Selecione onde será exibido o QR Code ou selecione **Não suportado** caso seu TEF não possua essa função;
- **Opção de impressão:** Selecione quantas vias deseja imprimir;
- **Confirmar tansação automaticamente:** Marque esta opção se deseja que a transação seja confirmada automaticamente no dispositivo TEF;

Por fim, realize o download e instalação do **Gdoor Payments Service** no computador através do botão <span class="mat mat-button mat-accent">download</span>.

# Uso no PDV

No PDV do GWEB, inclua um ou mais produtos na venda e avance até a **tela de pagamentos**. Nela, **pressione o atalho** da forma de pagamento cadastrada para utilizar a integração com TEF.

![Pagamento no PDV](/tutoriais/tef/7_pagamento_pdv.png)

Selecione o dispositivo TEF que deseja e clique em <span class="mat mat-button">realizar cobrança</span>

![8_selecionar_tef.png](/tutoriais/tef/8_selecionar_tef.png)

> Na **primeira venda** será necessário selecionar o dispositivo TEF que deseja utilizar, este dispositivo **ficará salvo** e será utilizado **automaticamente nas próximas vendas**.
{.is-info}

![9_confirmacao_tef.png](/tutoriais/tef/9_confirmacao_tef.png)

Quando o pagamento for confirmado pelo **TEF**, o GWEB receberá o código da transação e o exibirá na tela, após isso, a venda pode ser continuada.