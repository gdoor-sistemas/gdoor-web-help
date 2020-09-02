---
title: Configurações da NFC-e
description: Configure o funcionamento mecânico da NFC-e, como certificado digital, série, etc.
published: true
date: 2020-09-02T12:41:37.596Z
tags: nfc-e
editor: markdown
---

# Configurações da NFC-e

Neste tópico você verá em detalhes o que pode ser configurado para o funcionamento da NFC-e.

As configurações da NFC-e são gerais para todos os usuários, e somente usuários com permissão podem alterá-las. Ao alterar cada seção, você precisará salvar individualmente. Veja abaixo os detalhes de cada seção/configuração.

## Operação padrão

![Configurar operação padrão na NFC-e](/movimentos/nfce/nfce-configurar-operacoes.png)

Nesta seção você configura a natureza da operação que será aplicada às novas NFC-e geradas. As opções disponíveis são as cadastradas no [Cadastro de operações](/cadastros/operacoes).

## Comportamento

![Configurar comportamento da NFC-e](/movimentos/nfce/nfce-configurar-comportamento.png =300x){.float-left .mr10}

Nesta seção você configura como o sistema deve se comportar em determinadas situações. Veja em detalhes as opções:

Solicitar cliente{.subtitle}

Se marcada esta opção, ao abrir uma nova venda, o sistema solicitará que o cliente seja informado. Não será obrigatório informar, podendo a solicitação ser fechada e a venda prosseguirá normalmente. Ainda será possível informar/alterar o cliente mais tarde.

Após o primeiro item{.subtitle}

Esta opção estará visível apenas se a anterior estiver marcada. Marcando esta opção, o sistema solicitará o cliente somente após o lançamento do primeiro item. Isso pode ser útil em casos onde o operador deixa sempre uma nova venda em aberto, assim, não será necessário informar o cliente logo na abertura da venda.

*Exigir* cliente após valor{.subtitle}

Com esta opção marcada, caso o valor da NFC-e seja maior do que o valor configurado aqui, será **obrigatório** informar o cliente para salvar a venda. Se você preencher o campo com o valor 0 (zero), será obrigatório informar o cliente sempre.

Transmitir após salvar a NFC-e{.subtitle}

Esta configuração permite escolher o que o sistema deve fazer — em relação à transmissão — quando você salvar uma NFC-e. Você pode fazer com que o GDOOR WEB:
- Transmita automaticamente
- Não transmita
- Pergunte o que fazer a cada NFC-e

## Certificado digital

![Configuração do certificado digital na NFC-e](/movimentos/nfce/nfce-configurar-certificado.png)

Nesta seção, você adiciona o [certificado digital](/glossario#certificado-digital) para emissão de NFC-e. Na imagem acima você vê as 3 aparências desta seção. Primeiro, você seleciona o arquivo do certificado digital A1. Depois informa a senha do certificado. Por fim, depois de enviar o arquivo, será exibido o nome da empresa para quem o certificado foi emitido e a data de validade, apenas para consulta. Para remover o certificado digital, clique no [<em class="mdi mdi-close"></em>] à direita do nome.

> Você pode ficar tranquilo ao enviar seu certificado digital, pois ele será armazenado nos servidores do GDOOR WEB sob camadas de segurança.
{.is-info}

## Ambiente da NFC-e {#ambiente}



## Impressão do DANFCe

## Meios de pagamento

## Mensagem promocional

## E-mail

## E-mails padrão

## Sangria e suprimento
