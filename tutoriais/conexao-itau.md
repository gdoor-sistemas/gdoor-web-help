---
title: Conexão Itaú
description: Veja como configurar e utilizar a Conexão Itaú no Gweb.
published: false
date: 2025-07-21T16:48:30.589Z
tags: tutoriais, tutorial, pagamentos, nfc-e, pdv, pix
editor: markdown
dateCreated: 2025-07-21T12:33:23.889Z
---

# Configurar Conexão Itaú no Gweb
Veja como configurar e utilizar a Conexão Itaú no Gweb.

# Introdução

A integração do Gweb com a Conexão Itaú permite a cobrança via PIX no PDV além disso, também é possível devolver os pagamentos realizados ou visualizar as transações feitas.

# Ativando a integração

Primeiro passo é acessar o menu **Configurações > Ferramentas > Integrações ao lado direito**.

Ao acessar o menu clique na engrenagem ao lado de **Conexão Itaú**.
![Acessar conexão Itaú](/tutoriais/conexao-itau/1_menu_acesso_ativar_conexao.png)

Ao acessar a integração, clique no <span class="mdi mdi-plus"></span>

![Nova conexão](/tutoriais/conexao-itau/2_clicar_para_nova_integracao.png)

No formulário, preencha os dados de acordo com a realidade da empresa, **leia os termos** através do botão <em class="mdi mdi-text-box" style="color: #e64a19;"></em> e caso concorde, marque a caixa **Aceitar Termos**.

Clique em <span class="mat-button mat-accent">SALVAR</span> para gravar os dados da empresa.

![Formulário](/tutoriais/conexao-itau/3_formulario_conexao_itau.png)

Ao clicar em salvar, será redirecionado ao menu de configuração da Conexão Itaú com sua conexão criada.

![Lista de conexões Itaú](/tutoriais/conexao-itau/4_dados_integracao_prontos.png)

# Utilizando no PDV

Com a configuração da Conexão Itaú criada, certifique-se que a forma de pagamento criada pela integração esteja **ativa**. Acesse o menu **movimentações > PDV > configurações do PDV**, marque a opção "Conexão Itaú Pix à vista." e clique em <span class="mat-button mat-accent">salvar</span>.

![Ativar forma de pagamento](/tutoriais/conexao-itau/5_ativar_pagamento_conexao_itau.png)

Em uma nova venda, lance os produtos e na tela de pagamentos, utilize o atalho do "Conexão Itaú Pix à vista."

![Realizar cobrança](/tutoriais/conexao-itau/6_lancar_pagamento_no_pdv.png)

Clique em realizar cobrança e o QR Code será exibido.

Ao realizar o pagamento, ele será exibido na lista:

![Pagamentos feitos](/tutoriais/conexao-itau/7_pagamento_cancelado_pendente_realizado.png)

Os status da lista são:
- **Pendente:** Quando o QR Code é gerado na tela mas ainda não foi pago, neste caso, ao clicar no ícone <em class="mdi mdi-dots-vertical"></em> é possível, consultar se o pagamento já foi realizado, exibir novamente o QR Code ou cancelar a operação.
- **Aprovado:** Quando o QR Code foi gerado e o pagamento foi efetuado com sucesso, ao clicar no ícone <em class="mdi mdi-dots-vertical"></em> é possível devolver o valor que foi pago.
- **Cancelado:** Quando o pagamento foi feito com sucesso, mas foi cancelado manualmente logo em seguida.

Após realizar os pagamentos desejados com a integração, clique em <span class="mat-button">FECHAR</span> e continue a venda como desejar.

# Visualizando as transações realizadas

Para visualizar as transações que já foram realizadas em vendas anteriores, acesse o menu **cadastros > pagamentos > transações Itaú Pix** ao lado direito.

> Na lista de transações realizadas também é possível, consultar, cancelar, exibir o QR Code ou devolver as transações Pix.
{.is-info}

![Transações realizadas](/tutoriais/conexao-itau/8_transacoes_realizadas_itau_pix.png)

