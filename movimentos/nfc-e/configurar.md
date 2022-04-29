---
title: Configurações da NFC-e
description: Configure o funcionamento mecânico da NFC-e, como certificado digital, série, etc.
published: true
date: 2021-06-02T12:12:44.959Z
tags: nfc-e, configurações
editor: markdown
dateCreated: 2020-09-01T12:15:15.980Z
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

![Configurar o ambiente da NFC-e](/movimentos/nfce/nfce-configurar-ambiente.png)

Nesta seção você configura dados para a geração da NFC-e. Abaixo, veja detalhes de cada configuração.

Série da NFC-e{.subtitle}

Série de emissão da NFC-e. Esta informação pode ser obtida com sua contabilidade.

Ambiente de emissão{.subtitle}

Aqui você determina se as suas NFC-e terão validade fiscal ou não. O ambiente de **homologação** é usado para testar a emissão, e tudo o que você transmitir será sem valor. Já no ambiente de produção, as NFC-e transmitidas terão valor fiscal.

Nº da próxima NFC-e{.subtitle}

Apenas informe um valor neste campo caso você já tenha transmitido NFC-e por outro sistema, assim você poderá continuar a numeração de onde parou. Ao salvar um número neste campo, a próxima NFC-e será gerada com esse número e as subsequentes terão o número sequencial. O próximo número disponível não fica gravado neste campo, ele serve apenas para informar um ponto de partida para o sistema.

> Não é necessário informar o número 1, caso você esteja começando a emitir NFC-e agora, pois o sistema naturalmente começará pelo número 1.
{.is-info}

Forma de emissão{.subtitle}

Neste campo você pode configurar a forma de emissão da NFC-e para: 
- **Normal**: emissão mais comum, sem condições específicas.
- **Contingência offline**: emissão da NFC-e em modo offline, para quando o servidor da [SEFAZ](/glossario#sefaz) estiver indisponível. [Entenda melhor](./contingencia).

Token ID{.subtitle}

ID do token gerado para sua geração do QRCode a ser impresso no [DANFCe](/glossario#danfce). A informação de como obter este código pode ser obtida com sua contabilidade.

Código CSC{.subtitle}

**C**ódigo de **S**egurança do **C**ontribuinte, usado para garantir a autenticidade do [DANFCe](/glossario#danfce). A informação de como obter este código pode ser obtida com sua contabilidade.

## Autorizados a baixar o XML

![Pessoas autorizadas a baixar o XML](/movimentos/nfce/nfce-configurar-autorizados-baixar-xml.png)

Nesta seção você informa o CPF ou CNPJ de pessoas ou empresas autorizadas a fazer o download do [XML](/glossario#xml) da NFC-e pelo site da [SEFAZ](/glossario#sefaz), por exemplo, a contabilidade da sua empresa. Os documentos informados aqui serão adicionados em cada NFC-e gerada. Para adicionar um documento, digite o número no campo intitulado "Adicionar CNPJ/CPF" e pressione <kbd>Enter</kbd> ou clique no botão à direita (<em class="mdi mdi-arrow-right"></em>). Para visualizar ou excluir documentos já adicionados, clique no botão [<em class="mdi mdi-eye"></em>].

## Impressão do DANFCe

![Configurar a impressão do DANFCe](/movimentos/nfce/nfce-configurar-impressao-danfce.png)

Nesta seção você configura detalhes sobre a impressão do [DANFCe](/glossario#danfce). Veja o que pode ser alterado:

Fonte{.subtitle}

Estilo da fonte da impressão. As opções são: **Times** (com serifa), **Arial** (sem serifa) e **Courier** (monoespaçada).

Imprimir logo{.subtitle}

Indique aqui se a impressão do DANFCe deve conter a logomarca da sua empresa. Será considerada a informada no [Cadastro do emitente](/configuracoes/emitente).

Imprimir depois de autorizar{.subtitle}

Indique aqui se após a autorização da NFC-e o sistema deve automaticamente abrir a janela para impressão do DANFCe.

> Atualmente o sistema não tem como enviar a impressão do DANFCe direto para uma impressora, pois isso é uma limitação comum de uma página da Web. No entanto, a impressão pode ser realizada normalmente por meio do diálogo de impressão que o navegador abrirá.

## Meios de pagamento

Nesta seção você pode escolher quais [meios de pagmento](/cadastros/pagamentos) cadastrados estarão disponíveis para uso na NFC-e. Você também pode determinar a ordem em que eles serão exibidos. O primeiro será considerado como padrão.

Para adicionar tornar um meio de pagamento disponível na NFC-e, depois de cadastrá-lo, marque a caixa de seleção à esquerda, como exibido abaixo. Quando você habilitar um pagamento, ele será reordenado, para que todos os meios de pagamento disponíveis apareçam por primeiro na lista da configuração. Ainda é possível reordenar os pagamentos habilitados, basta clicar no ícone [<em class="mdi mdi-drag-vertical"></em>] à direita do item e arrastá-lo para a posição desejada.

![Configurar meios de pagamento na NFC-e](/movimentos/nfce/nfce-configurar-pagamentos-ordem.gif)

## Mensagem promocional

![Configurar mensagem promocional na NFC-e](/movimentos/nfce/nfce-configurar-mensagem-promocional2.png)

Nesta seção você pode informar uma mensagem a ser impressa junto com as informações adicionais no [DANFCe](/glossario#danfce). Será aplicada somente nas novas NFC-e geradas.

## E-mail

![Configurar opções de e-mail da NFC-e](/movimentos/nfce/nfce-configurar-email.png)

Nesta seção você define configurações gerais sobre o envio de e-mails da NFC-e.

Na primeira parte você pode informar um endereço de resposta para os e-mails de NFC-e enviados pelo GDOOR WEB. Explicando melhor, o sistema envia os e-mails a partir do endereço `nao.responda@gdoorweb.com.br`. Se o seu cliente precisar responder o e-mail da NFC-e e o fizer para este endereço, o e-mail nunca chegará. Por isso, você pode definir aqui o nome e o endereço para resposta. Fica assim:

![Aplicação do e-mail de resposta](/movimentos/nfce/nfce-configurar-email-resposta.png)

As demais opções refletem no seguinte:

Enviar e-mail automaticamente{.subtitle}

Com esta opção marcada, após a **autorização** da NFC-e, o sistema enviará um e-mail para o endereço informado no [cadastro do cliente](/cadastros/pessoas#emails).

Cópia para o emitente{.subtitle}

Com esta opção marcada, sempre que enviar um e-mail de NFC-e, uma cópia será enviada para o endereço informado no [cadastro do emitente](/configuracoes/emitente).

Anexar PDF{.subtitle}

Com esta opção marcada, além do [arquivo XML](/glossario#xml) anexado ao e-mail — que é obrigatório — o PDF do [DANFCe](/glossario#danfce) também será anexado.

## E-mails padrão

![Configuração de conteúdo de e-mails](/movimentos/nfce/nfce-configurar-emails-padrao.png)

Nesta seção você pode configurar o conteúdo dos e-mails de NFC-e, tanto para notificar a autorização da NFC-e, quanto o seu cancelamento.

Para alterar o conteúdo, clique no botão (<em class="mdi mdi-pencil"></em>) à direita da opção que desejar; será aberto o [editor de texto estilizado](/dicas/editor-de-texto-estilizado) para fazer as modificações. No conteúdo do e-mail, você pode adicionar algumas variáveis que serão substituídas pelo valor correspondente na hora de enviar o e-mail. Para isso, basta digitar o caractere `[` (abre colchetes) e uma lista de opções será sugerida, como mostrado na imagem abaixo:

![Utilizando variáveis ao configurar o conteúdo do e-mail da NFC-e](/movimentos/nfce/nfce-configurar-emails-conteudo-variaveis.png)

> Você pode informar uma página HTML completa para o conteúdo do e-mail da NFC-e, mas precisa garantir que seja um código compatível com os possíveis programas de e-mail que o seu cliente possa ter.
{.is-success .gw .gw-tip}

## Sangria e suprimento

![Configurações de sangria e suprimento](/movimentos/nfce/nfce-configurar-sangria-suprimento.png)

Nesta seção você pode configurar o sistema para abrir a janela de impressão do comprovante de sangria/suprimento logo após a sua emissão. Você ainda poderá imprimir posteriormente o comprovante a partir da [lista de sangria/suprimento](../nfc-e/sangria-suprimento#lista) do dia.
