---
title: Rejeição 681: RNTRC informado inexistente
description: Veja como solucionar a rejeição 681: RNTRC informado inexistente no Gweb.
published: false
date: 2024-01-29T19:47:36.258Z
tags: tutorial, rejeição
editor: markdown
dateCreated: 2024-01-29T19:47:36.258Z
---


# Rejeição 681: RNTRC informado inexistente

## Motivo

Quando for emitido um **MDF-e** (modelo 58) e o **RNTRC** (Registro Nacional de Transportadores Rodoviários de Carga) não foi informado, haverá a rejeição pelo motivo **681 – RNTRC informado inexistente**.

![Texto da rejeição](/tutoriais/rejeicoes/681/msg_rej_681.png)

## Solução

### Caso o **veículo** não for do **emitente**:

- Verificar se o **RNTRC** no **cadastro do proprietário do veículo** está correto.

> O **cadastro do proprietário** pode ser consultado no menu de **cadastros >> pessoas**.
{.is-info}


### Caso o **veículo** seja do **emitente** e a empresa **não for** prestadora de serviço de transporte:
- Acessar o cadastro do emitente em **configurações >> emitente**.
- Marcar **transportador de carga própria** no campo **tipo do emitente**.

### Caso o veículo seja do emitente e a empresa for prestadora de serviço de transporte:
- Acessar o cadastro do emitente em **configurações >> emitente**.
- Marcar a opção correta de **prestador de serviço de transporte** no campo **tipo do emitente**.

> Confirme com sua contabilidade em qual dos tipos de emitente sua empresa se enquadra.
{.is-warning}

- Informar o **RNTRC** correto no emitente e no veículo.

Após realizar as alterações, **refaça ou edite** o MDF-e para aplicar os ajustes. Clique em <span class="mat-button mat-accent">SALVAR E TRANSMITIR</span> na aba do **seguro**.
