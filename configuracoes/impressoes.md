---
title: Impressões
description: 
published: false
date: 2026-09-08T17:23:49.961Z
tags: 
editor: markdown
dateCreated: 2026-09-04T18:01:01.181Z
---

# Configurar a impressora e a impressão direta

Listamos neste artigo como definir as impressoras utilizadas nos documentos do sistema e configurar o serviço de impressão direta, incluindo a instalação do agente, o envio automático para a impressora e a quantidade de cópias por documento.

# Introdução

O GWeb permite definir impressoras específicas para cada tipo de documento e configurar o envio direto para impressão.

Com o serviço de impressão direta instalado e em execução no computador, os documentos configurados podem ser enviados automaticamente para a impressora definida, sem apresentar a janela de impressão do navegador.

A configuração é realizada individualmente para cada documento. Dessa forma, determinados documentos podem utilizar o envio direto, enquanto os demais continuam utilizando o processo de impressão manual.

# Configurar o serviço de impressão direta

Para utilizar a impressão direta, é necessário instalar o agente de impressão no computador responsável pela impressão. 

Acesse **"Configurações"** e selecione **"Impressões"**. Na seção **"Serviço de impressão direta"**, clique em **"DOWNLOAD"** para baixar o aplicativo.

![imp_auto1.png](/config/impressões/imp_auto1.png)

Instale o serviço no computador que será utilizado para realizar as impressões.

> O agente realiza a comunicação entre o GWeb e as impressoras configuradas no computador, permitindo enviar os documentos diretamente para impressão. Por esse motivo, o agente deve estar instalado e em execução para que o envio automático para a impressora seja realizado. {.is-info}


![imp_auto2.png](/config/impressões/imp_auto2.png)

Após a instalação, o serviço será iniciado automaticamente e uma mensagem será apresentada solicitando a **"Permissão"** para utilização do recurso.

![imp_auto3.png](/config/impressões/imp_auto3.png)

> Quando o agente de impressão não estiver instalado ou não estiver em execução, o sistema apresentará uma mensagem "Agente de impressão direta não encontrado". Verifique as configurações do navegador de internet utilizado. Se necessário, redefina as configurações do navegador e teste novamente. {.is-success}


# Configurar a impressora padrão por documento

Na seção **"Impressoras padrão por documento"**, localize o documento que receberá a configuração.

![imp_auto5.png](/config/impressões/imp_auto5.png)

A lista pode apresentar documentos como:

- **Pedido de venda**;
- **Orçamento**;
- **NF-e**;
- **NFC-e**;
- **NF-e** no **PDV**;
- **Pré-venda**;
- **NFS-e**;
- **Recibo**;
- **Etiqueta**.

Selecione, na respectiva linha, a impressora que será utilizada para a impressão do documento.

> A definição é realizada individualmente. Assim, cada tipo de documento pode utilizar uma impressora diferente, conforme a necessidade da operação. {.is-info}

![imp_auto4.png](/config/impressões/imp_auto4.png)

Para cada tipo de documento, configure:

- Marque a opção de **envio direto** na linha correspondente ao documento;
- Selecione a **impressora** que será utilizada;
- Informe a **quantidade de cópias** que deverá ser impressa sempre que o documento for enviado diretamente pelo agente de impressão.

> Configure o envio direto apenas nos documentos que normalmente precisam ser **impressos imediatamente**. Os demais documentos podem permanecer com o processo de impressão manual. Por exemplo, o **"Pedido de venda"** pode ser configurado para envio automático, enquanto o **"Orçamento"** permanece disponível apenas para impressão manual.{.is-success}

![imp_auto6.png](/config/impressões/imp_auto6.png)

Ao concluir as configurações, clique em **"Salvar"** para aplicá-las.



