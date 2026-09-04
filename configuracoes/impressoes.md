---
title: Impressões
description: 
published: false
date: 2026-09-04T18:12:00.946Z
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

# Acessar as configurações de impressão

Acesse o módulo "Configurações" e selecione "Impressões".

[INSERIR IMAGEM — Tela "Impressões", destacando as seções "Impressoras padrão por documento" e "Serviço de impressão direta".]

A tela apresenta as configurações relacionadas às impressoras utilizadas pelo sistema e ao serviço de impressão direta.

# Configurar a impressora padrão por documento

Na seção "Impressoras padrão por documento", localize o documento que receberá a configuração.

[INSERIR IMAGEM — Seção "Impressoras padrão por documento", mostrando a lista de documentos disponíveis.]

A lista pode apresentar documentos como:

Pedido de venda;
Orçamento;
NF-e;
NFC-e;
NF-e no PDV;
Pré-venda;
NFS-e;
Recibo;
Etiqueta.

Selecione, na respectiva linha, a impressora que será utilizada para a impressão do documento.

[INSERIR IMAGEM — Documento "Etiqueta" com uma impressora selecionada.]

A definição é realizada individualmente. Assim, cada tipo de documento pode utilizar uma impressora diferente, conforme a necessidade da operação.

# Configurar o serviço de impressão direta

Para utilizar a impressão direta, é necessário instalar o agente de impressão no computador responsável pela impressão.

Na seção "Serviço de impressão direta", clique em "Download" para baixar o instalador.

[INSERIR IMAGEM — Seção "Serviço de impressão direta", destacando o botão "Download".]

Instale o serviço no computador utilizado para realizar as impressões e mantenha-o em execução.

O agente realiza a comunicação entre o GWeb e as impressoras configuradas no computador, permitindo enviar os documentos diretamente para impressão.

INFORMAÇÃO: A impressão direta funciona por meio de um serviço instalado no computador. Por esse motivo, o agente deve estar instalado e em execução para que o envio automático para a impressora seja realizado.

#  Ativar o envio direto para um documento

Depois de instalar e iniciar o agente de impressão, acesse novamente a seção "Impressoras padrão por documento" e localize o documento que receberá a configuração.

[INSERIR IMAGEM — Lista de documentos, destacando a opção de envio direto para impressão.]

Marque a opção de envio direto na linha correspondente ao documento.

Ao posicionar o cursor sobre a opção, o sistema apresenta a descrição "Envia documento diretamente ao agente de impressão após a autorização".

Com a opção marcada, o documento será enviado automaticamente ao agente de impressão quando a operação for concluída, sem apresentar a janela de impressão do navegador.

Na mesma linha, selecione a impressora que receberá o documento.

[INSERIR IMAGEM — Documento configurado com a opção de envio direto marcada e a impressora selecionada.]

DICA: Configure o envio direto apenas nos documentos que normalmente precisam ser impressos imediatamente. Os demais documentos podem permanecer com o processo de impressão manual.

# Definir a quantidade de cópias

Ao ativar o envio direto para um documento, será disponibilizado o campo "Cópias" na respectiva linha.

[INSERIR IMAGEM — Documento configurado para impressão direta, destacando o campo "Cópias".]

Informe a quantidade de cópias que deverá ser impressa sempre que o documento for enviado diretamente ao agente.

Por exemplo, um "Pedido de venda" pode ser configurado para imprimir duas cópias, permitindo manter uma via para a empresa e entregar outra ao cliente.

INFORMAÇÃO: A quantidade de cópias é definida individualmente para cada tipo de documento. O número informado para um documento não altera a quantidade de cópias dos demais.

# Configurar o envio direto individualmente

A configuração da impressão direta é independente para cada documento.

Por exemplo, o "Pedido de venda" pode ser configurado para envio automático, enquanto o "Orçamento" permanece disponível apenas para impressão manual.

[INSERIR IMAGEM — Exemplo de documentos com configurações diferentes, destacando um documento com envio direto ativo e outro sem a configuração.]

Dessa forma, é possível adequar a impressão ao fluxo de cada operação, definindo quais documentos devem ser enviados automaticamente para a impressora.

# Verificar o agente de impressão

Quando o agente de impressão não estiver instalado ou não estiver em execução, o sistema apresentará uma mensagem antes da tentativa de impressão.

[INSERIR IMAGEM — Mensagem "Agente de impressão direta não encontrado".]

ATENÇÃO: Ao receber a mensagem "Agente de impressão direta não encontrado", verifique se o serviço foi instalado corretamente e se está em execução no computador utilizado para realizar a impressão.

Também é necessário confirmar se a impressora configurada para o documento está disponível e instalada no mesmo computador em que o agente de impressão está sendo executado.

# Resultado da configuração

Com o serviço de impressão direta configurado, os documentos selecionados podem ser enviados automaticamente para as respectivas impressoras.

A configuração permite definir, individualmente para cada documento:

A impressora utilizada;
O envio direto para o agente de impressão;
A quantidade de cópias.

Dessa forma, documentos que exigem impressão imediata podem ser enviados automaticamente, enquanto os demais permanecem disponíveis para impressão manual conforme a necessidade da operação.