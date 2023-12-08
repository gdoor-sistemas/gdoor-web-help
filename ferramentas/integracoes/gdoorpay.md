---
title: Conta Gdoor Pay
description: Veja como interligar seu sistema com o pix do Gdoor Pay
published: false
date: 2023-12-08T18:48:03.050Z
tags: tutorial, pix
editor: markdown
dateCreated: 2023-05-10T19:42:10.949Z
---

# Introdução

Para criar a sua conta **Gdoor pay**, será necessário cadastrar seus dados e encaminhar os documentos solicitados, os quais serão avalilados para aprovação da conta.

# Cadastro da conta Gdoor Pay

Acessando o endereço https://gdoorpay.gdoor.com.br/register



# Ativação do Gdoor Pay Pix
Acessando **Configurações » Ferramentas » Integrações**, selecione a integração **Gdoor Pay Pix** e clique no botão (<em class="mdi mdi-cog"></em>) no lado direito.

![Ativação da Integração](/config/ferramentas/gdoor_pay_pix/ativacao_da_integracao.png)

Será direcionado para a tela de **configuração da integração** do Gdoor Pay Pix.

# Configurar Integração

Dentro da tela de configuração, clique no botão (<em class="mdi mdi-plus"></em>) para abrir o formulário de habilitação.

![Configurar integração](/config/ferramentas/gdoor_pay_pix/configurar_integracao_botao.png)

Neste formulário, **preencha** os campos correspondentes com as **informações retiradas do seu [painel do Gdoor Pay](https://hom-gdoorpay.gdoor.com.br/register)**.


![Formulário de Habilitação](/config/ferramentas/gdoor_pay_pix/formulario_habilitacao.png)

Ao clicar em <span class="mat-button mat-accent">SALVAR</span>, o sistema cria **automaticamente** uma nova forma de pagamento chamada **"Gdoor Pay Pix à vista"** e na **lista de pagamentos** é possível visualizar as **transações pix** realizadas no sistema.

# Ativando a forma de pagamento no PDV

Para utilizar esta nova forma de pagamento, acesse **Movimentações » PDV** e clique ao lado direito da tela na opção **configurações do PDV**. Marque o checkbox (<em class="mdi mdi-checkbox-marked"></em>) referente ao meio de pagamento **Gdoor Pay Pix à vista** e clique em <span class="mat-button mat-accent">SALVAR</span>.

![Habilitar forma de pagamento](/config/ferramentas/gdoor_pay_pix/configuracoes_do_pdv_habilitar.png)

# Utilizando a forma de pagamento no PDV


No momento da finalização da venda, ao informar a forma de **pagamento do PDV**, selecione **Gdoor Pay Pix à vista** através do botão <span class="mat-button"><em class="mdi mdi-cash"></em> PAGAMENTO POR INTEGRAÇÃO</span> ou do atalho específico da forma de pagamento, representado pela letra <kbd>B</kbd> na imagem abaixo:

![Finalizando venda no PDV](/config/ferramentas/gdoor_pay_pix/finalizando_venda.png)

A tela da **cobrança por integração** será aberta. Informe o **valor** a ser cobrado do cliente via PIX.

> **Dica:**
É possível dividir o valor da venda em mais de uma forma de pagamento PIX, para duas ou mais pessoas.
{.is-info}

![Realizar cobrança por integração](/config/ferramentas/gdoor_pay_pix/pagamento_por_integracao_inicio.png)

Clique em <span class="mat-button">REALIZAR COBRANÇA</span> para abrir a tela com o QR Code do pagamento.

![cobranca_gdoor_pay_pix.png](/config/ferramentas/gdoor_pay_pix/cobranca_gdoor_pay_pix.png)

Quando o pagamento for realizado, o sistema irá retornar a tela de **cobranças por integração** com o pagamento listado.

![lista_cobrancas_pix.png](/config/ferramentas/gdoor_pay_pix/lista_cobrancas_pix.png)

Na lista de pagamentos, é possível realizar as seguintes ações:

**<em class="mdi mdi-block-helper"></em> Devolver:** devolve o **valor pago** pelo cliente. Esta opção só é liberada se o pagamento estiver **aprovado**. 

**<em class="mdi mdi-refresh-circle"></em> Consultar status:** consulta se o pagamento foi **realizado**. Esta opção só é liberada se o pagamento estiver **pendente**.

**<em class="mdi mdi-qrcode"></em> Exibir QR Code:** exibe novamente o Qr Code para leitura e pagamento. Esta opção só é liberada se o pagamento estiver **pendente**.

Com todos os pagamentos realizados por PIX **aprovados**, clique em <span class="mat-button">FECHAR</span> para retornar a aba de **pagamentos do PDV** e finalizar a NFC-e.

# Transações realizadas

Dentro do menu de **cadastros >> pagamentos** estarão disponíveis todas as **transações PIX** já realizadas. Nesta tela também é possível executar as ações para **<em class="mdi mdi-block-helper"></em> Devolver**, **<em class="mdi mdi-refresh-circle"></em> Consultar status** ou **<em class="mdi mdi-qrcode"></em> Exibir QR Code** dos pagamentos.

![Transações Gdoor pay PIX](/config/ferramentas/gdoor_pay_pix/transacoes.png)