---
title: Configurações gerais
description: Veja detalhes das configurações gerais do sistema
published: true
date: 2022-03-30T18:58:10.882Z
tags: configurações
editor: markdown
dateCreated: 2020-01-03T19:57:44.951Z
---

# Introdução

Saiba mais sobre as configurações gerais, que serão aplicadas em diversos módulos do sistema Gweb, como precisão numérica, serviços, autenticação, comissões, quantidade negativa de estoque.

Para iniciar, acesse no menu principal: **configurações » geral**.

A tela abaixo será mostrada:

![configurações gerais](/config/gerais/configurações_gerais.png)

# Precisão numérica

Determine as casas decimais para **quantidades** e para **preços**.

![precisão numérica](/config/gerais/precisão_numérica.png)

> Números que ficarão após a vírgula. Exemplo: 0,392 é um número decimal com 3 casas decimais após a vírgula.
{.is-success}

# Serviços

Configuração para uso de serviços em documentos fiscais.

Clique em "**habilitar o uso de serviços no sistema**".
Em seguida indique o "**local padrão do fato gerador do ISS**" que se trata do **local onde o serviço será executado**, isso também será base para geração do imposto (ISS).

![serviços](/config/gerais/serviços.png)

- **Cidade do emissor**: serviço prestado dentro do município do emitente.
- **Cidade do destinatário**: para serviço prestado fora do município, terá como base o município indicado no cadastro do cliente.
- **Cidade específica**: será habilitada a seção para informação do **UF** e **cidade**:

![cidade específica](/config/gerais/serviços2.png)

Após o preenchimento das informações, clique em <span class="mat-button mdi "> salvar</span>.

> Para saber mais sobre a configuração de impostos de serviços [clique aqui](/configuracoes/impostos/servicos).
{.is-info}

# Comissões

Determine o comportamento para geração de comissão dos vendedores quando houver comissão do **vendedor** e do **produto** simultaneamente.

Selecione qual será a **comissão preferencial**: a do cadastro do **vendedor**, do cadastro do **produto**, a com porcentagem **mais alta**, com porcentagem **mais baixa** ou se **ambas** (vendedor e produto) serão mantidas.

![comissões](/config/gerais/comissões.png)

Em seguida clique em <span class="mat-button mdi "> salvar</span>.

# Quantidade negativa de estoque

![quantidade negativa de estoque](/config/gerais/quantidade_negativa_de_estoque.png)

# Autenticação

![autenticação](/config/gerais/autenticação.png)
