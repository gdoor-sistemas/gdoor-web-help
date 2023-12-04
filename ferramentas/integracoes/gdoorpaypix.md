---
title: Gdoor Pay Pix
description: Veja como interligar seu sistema com o pix da Gdoor Pay
published: false
date: 2023-12-04T14:18:11.829Z
tags: tutorial, pix
editor: markdown
dateCreated: 2023-11-29T11:32:47.988Z
---

# Introdução

Na integração do sistema **Gweb** com o **Gdoor Pay Pix**, o sistema aguarda o recebimento da confirmação do pagamento para finalizar a venda e registra os dados da transação automaticamente.

# Ativação do Gdoor Pay Pix
Acessando **Configurações » Ferramentas » Integrações**, selecione a integração **Gdoor Pay Pix** e clique no botão (<em class="mdi mdi-cog"></em>) no lado direito.

![Ativação da Integração](/config/ferramentas/gdoor_pay_pix/ativacao_da_integracao.png)

Será direcionado para a tela de **configuração da integração** do Gdoor Pay Pix.

# Configurar Integração

Dentro da tela de configuração, clique no botão (<em class="mdi mdi-plus"></em>) para abrir o formulário de habilitação.

![Configurar integração](/config/ferramentas/gdoor_pay_pix/configurar_integracao_botao.png)

Neste formulário, **preencha** os campos correspondentes com as **informações retiradas do seu painel do Gdoor Pay**.

![Formulário de Habilitação](/config/ferramentas/gdoor_pay_pix/formulario_habilitacao.png)

Ao clicar em <span class="mat-button mat-accent">SALVAR</span>, o sistema irá **automaticamente** criar uma nova forma de pagamento chamada **"Gdoor Pay Pix à vista"**, e na **lista de pagamentos** é possível visualizar as **transações pix** realizadas no sistema.

# Ativando a forma de pagamento no PDV

Para utilizar esta nova forma de pagamento, acesse **Movimentações » PDV**, clique ao lado direito da tela na opção **configurações do PDV** e verifique na listagem dos meios de pagamento disponíveis para uso no PDV se está selecionado (<em class="mdi mdi-checkbox-marked"></em>) o meio de pagamento **Gdoor Pay Pix à vista**.

Caso não esteja marcado, marque o meio de pagamento e clique em <span class="mat-button mat-accent">SALVAR</span>.

![Habilitar forma de pagamento](/config/ferramentas/gdoor_pay_pix/configuracoes_do_pdv_habilitar.png)

# Utilizando a forma de pagamento no PDV


Em uma venda no PDV, dentro da aba de **pagamentos do PDV** é possível selecionar a forma de pagamento **Gdoor Pay Pix à vista** através do botão <span class="mat-button"><em class="mdi mdi-cash"></em> PAGAMENTO POR INTEGRAÇÃO</span> ou do atalho específico da forma de pagamento, como o <kbd>B</kbd> na imagem abaixo:

![Finalizando venda no PDV](/config/ferramentas/gdoor_pay_pix/finalizando_venda.png)

Ao selecionar a forma de pagamento, a tela da **cobrança por integração** será aberta, é possível informar nela o **valor** a ser cobrado do cliente via PIX.

> **Dica:**
É possível dividir o valor da venda em mais de uma forma de pagamento PIX, para duas ou mais pessoas.
{.is-info}

![Realizar cobrança por integração](/config/ferramentas/gdoor_pay_pix/pagamento_por_integracao_inicio.png)

Ao clicar em <span class="mat-button">REALIZAR COBRANÇA</span> será aberto a tela com o QR Code para pagamento.

![cobranca_gdoor_pay_pix.png](/config/ferramentas/gdoor_pay_pix/cobranca_gdoor_pay_pix.png)

Quando o pagamento for realizado, o sistema irá retornar a tela de **cobranças por integração** com o pagamento listado.

![lista_cobrancas_pix.png](/config/ferramentas/gdoor_pay_pix/lista_cobrancas_pix.png)

Na lista de pagamentos, é possível realizar as seguintes ações:

**<em class="mdi mdi-block-helper"></em> Devolver:** Devolve o **valor pago** pelo cliente, esta opção só é liberada se o pagamento estiver **aprovado**. 

**<em class="mdi mdi-refresh-circle"></em> Consultar status:** Consulta se o pagamento foi **realizado**, esta opção só é liberada se o pagamento estiver **pendente**.

**<em class="mdi mdi-qrcode"></em> Exibir QR Code:** Exibe novamente o Qr Code para leitura e pagamento, esta opção só é liberada se o pagamento estiver **pendente**.

Com todos os pagamentos realizados por PIX **aprovados**, clique em <span class="mat-button">FECHAR</span> para retornar a aba de **pagamentos do PDV** e finalizar a NFC-e.

# Transações realizadas

Dentro do menu de **cadastros >> pagamentos**, é possível visualizar as **transações PIX** já realizadas. É possível **<em class="mdi mdi-block-helper"></em> Devolver**, **<em class="mdi mdi-refresh-circle"></em> Consultar status** e **<em class="mdi mdi-qrcode"></em> Exibir QR Code**.

![Transações Gdoor pay PIX](/config/ferramentas/gdoor_pay_pix/transacoes.png)

# Conclusão
O processo para o cadastro e uso da integração do **GWEB** com o **Gdoor Pay Pix** é esse: ao final das vendas, o valor pago através do PIX ficará registrado no financeiro da empresa e nas transações PIX no menu de **Cadastros > Pagamentos**.

Para ver mais detalhes sobre cada módulo envolvido neste processo, acesse os tópicos:

- [Integrações](/ferramentas/integracoes)
- [Cadastro de Formas de Pagamento](/cadastros/pagamentos)
- [Configurações do PDV](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#configura%C3%A7%C3%B5es-do-pdv)
- [PDV](/movimentos/pdv)