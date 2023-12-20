---
title: Tutorial: Cadastrar PIX
description: Tutorial de como cadastrar uma forma de pagamento PIX
published: true
date: 2023-12-20T13:34:42.382Z
tags: tutoriais, tutorial, como fazer, pagamentos, financeiro, contas, pix
editor: markdown
dateCreated: 2023-08-07T19:57:49.172Z
---

# Cadastrando uma forma de pagamento PIX

> Caso deseje utilizar a integração do **Gdoor Pay Pix**, acesse o [passo a passo](/pt-br/ferramentas/integracoes/gdoorpaypix) específico.
{.is-info}


Uma das funcionalidades do Gweb é a exibição do QR Code do PIX na hora de finalizar uma venda no PDV ou na NF-e, como mostrado na imagem abaixo:

![QR Code Pix](/tutoriais/cadastrar-pix/qr-code-pix.png)

> A opção de **pagamento PIX com geração de QR code** para leitura trata-se de um facilitador para agilizar a venda, **não é integrada com a conta**. Sendo assim, **não haverá confirmação do recebimento na tela**, portanto a finalização da venda deve ser feita de forma manual pelo usuário.
{.is-warning}

Abaixo, veja o passo-a-passo para cadastrar uma forma de pagamento para essa funcionalidade.

## Antes de começar

Antes de começar, é preciso que o cliente tenha acesso ao módulo **financeiro** do sistema, esse módulo é necessário pois é onde será cadastrado a **conta bancária** com a **chave PIX**.

> Para maior agilidade, é preferencial que tenha em mãos os dados bancários do cliente, bem como a chave PIX do mesmo.
{.is-info}

Com os dados em mãos e o módulo **financeiro** liberado, o primeiro passo é cadastrar a conta bancária que vai ser utilizada.

## Cadastrando a conta bancária

Para efetuar esse cadastro, é preciso acessar o menu de [**contas**](/pt-br/financeiro/contas) e clicar no <em class="mdi mdi-plus-circle"></em>, destacado na imagem abaixo.

![Lista de contas financeiras](/tutoriais/cadastrar-pix/menu-financeiro-contas.png)

Dentro do cadastro da conta financeira, é necessário marcar a caixa <em class="mdi mdi-checkbox-marked"></em> **Conta bancária**, para liberar os campos pertinentes a identificação da conta, além dos campos para o **PIX**, que são:
- **Tipo da chave**: Se a chave PIX é **e-mail**, **CNPJ**, **CPF**, **telefone** ou uma **chave aleatória**.
- **Chave PIX**: Digite ou cole a chave PIX correspondente a que marcou no **Tipo da chave**.

Ambos os campos estão destacados na imagem abaixo.

![Cadastro da conta financeira](/tutoriais/cadastrar-pix/cadastro-conta-financeira.png)

Após informar os dados, clique em <span class="mat-button mat-accent">Salvar</span>.

Com o cadastro da conta finalizado, podemos partir para o cadastro da **forma de pagamento**.

## Cadastrando a forma de pagamento PIX

Para cadastrar a forma de pagamento, é preciso acessar o menu de [**pagamentos**](/pt-br/cadastros/pagamentos) e clicar no <em class="mdi mdi-plus-circle"></em>, como mostrado na imagem abaixo.

![Lista das formas de pagamento](/tutoriais/cadastrar-pix/lista-forma-pagamentos.png)

Dentro do cadastro da forma de pagamento, é necessário que selecione no campo **Referência na NF-e** a opção **Pagamento instantâneo (PIX)**.

![Campo Referência na NF-e](/tutoriais/cadastrar-pix/campo-referencia-nfe.png)

No campo **Conta financeira** devemos marcar a conta financeira criada anteriormente, como destacado abaixo.

![Cadastro das formas de pagamento](/tutoriais/cadastrar-pix/nova_forma_de_pagamento.png)

> Para o correto funcionamento da forma de pagamento, é recomendado que o **Tipo de pagamento** seja marcado a opção **À vista**.
{.is-info}

Após informar os dados, clique em <span class="mat-button mat-accent">Salvar</span>.

## Utilizando a forma de pagamento PIX

### Na NF-e

Na [NF-e](/pt-br/movimentos/nf-e), a forma de pagamento já pode ser utilizada, basta selecioná-la na hora do pagamento e clicar no <em class="mdi mdi-qrcode"></em>**Qr Code** para exibi-lo.

![Pagamento por PIX na NF-e](/tutoriais/cadastrar-pix/pagamento-nfe-pix.png)

### No PDV

No **PDV**, é necessário habilitar a forma de pagamento cadastrada, para isso deve-se acessar as **configurações do PDV**, [clique aqui para saber mais](/pt-br/movimentos/pdv#meios-de-pagamento).


## Conclusão

O processo para o cadastro de uma **Forma de Pagamento PIX com QR Code** é esse, ao final das vendas, o valor pago no Gweb será transferido para a **conta financeira** vinculada à chave PIX.

Para ver mais detalhes sobre cada módulo envolvido neste processo, acesse os tópicos:

- [Cadastro de Contas Financeiras](/pt-br/financeiro/contas)
- [Cadastro de Formas de Pagamento](/pt-br/cadastros/pagamentos)
- [NF-e](/pt-br/tutoriais/como-emitir-uma-nfe)
- [PDV](/pt-br/movimentos/pdv)