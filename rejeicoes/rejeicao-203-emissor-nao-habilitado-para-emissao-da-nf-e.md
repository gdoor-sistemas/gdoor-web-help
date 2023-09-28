---
title:  Rejeição 203: Emissor não habilitado para emissão da NF-e
description: Veja como solucionar a rejeição 203: Emissor não habilitado para emissão da NF-e no Gweb.
published: false
date: 2023-09-28T16:37:35.369Z
tags: tutorial, rejeição
editor: markdown
dateCreated: 2023-09-28T16:37:35.369Z
---

# Rejeição 464: Código Hash no QR-code difere do calculado

## Motivo

Essa mensagem ocorre quando as informações de **token Id**, **código CSC** ou **ambiente**, cadastradas nas **Configurações da NFC-e**, estiverem incorretas.

![Texto da rejeição](/tutoriais/rejeicoes/464/msg_rej_464.png)

## Solução

Acesse primeiramente o [**PDV**](/movimentos/pdv), e no canto inferior direito, acesse as [**Configurações da NFC-e**](/movimentos/pdv#configurações-da-nfc-e). Na aba de **Ambiente da NFC-e**, informe os campos **token Id**, **código CSC** e **ambiente** corretamente.

> Essas informações são **fornecidas** pela **contabilidade** da empresa, pois é ela quem registra o cadastro junto a **SEFAZ**.
{.is-info}

![Solução da rejeição](/tutoriais/rejeicoes/464/sol_rej_464.png)

Após **informar** os dados **corretos**, clique em <span class="mat-button mat-accent">SALVAR</span> para **gravar** as informações.
