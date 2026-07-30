---
title: Como emitir NF-e no PDV
description: 
published: true
date: 2026-07-30T19:32:15.627Z
tags: 
editor: markdown
dateCreated: 2026-07-21T19:47:17.366Z
---

#  Como emitir NF-e no PDV
Confira neste tópico todos os passos para emitir a NF-e por dentro do PDV.

# Introdução 
A emissão de NF-e pelo PDV permite realizar vendas utilizando Nota Fiscal Eletrônica sem a necessidade de acessar o módulo tradicional de NF-e.

Toda a operação é realizada no próprio frente de caixa, utilizando a mesma rotina já conhecida pelos operadores, mantendo integração com a tributação, numeração da NF-e, fechamento de caixa e demais recursos do sistema.

Além da emissão manual, também é possível gerar NF-e a partir de orçamentos, pedidos de venda e pré-vendas, reduzindo retrabalho e agilizando o atendimento.

# Configurações do PDV

Antes de emitir NF-e pelo PDV, algumas configurações devem ser verificadas e se necessário realizadas. Acesse o módulo **"Movimentações"**, clique em **"PDV"** e selecione **"Configurações do PDV"**.

![1-config-nfe-pdv.png](/movimentos/pdv/1-config-nfe-pdv.png)

## Comportamento

Recomenda-se habilitar a opção **"Solicitar cliente"** para que todas as vendas e pré-vendas sejam registradas com um cliente vinculado. Dessa forma, esses documentos poderão ser utilizados posteriormente para a geração de NF-e por meio da listagem de lançamentos.

> Ao iniciar a emissão da NF-e durante a venda por meio da tecla **F9**, o sistema solicitará automaticamente a identificação do cliente, independentemente da opção **"Solicitar cliente"** estar habilitada, pois essa informação é obrigatória para a emissão da NF-e. {.is-info}

![2-config-nfe-pdv.png](/movimentos/pdv/2-config-nfe-pdv.png)

## Configurações da NF-e

Configure a operação padrão, a impressão automática depois de autorizar a NF-e e o modelo de impressão do DANFE.

![3-config-nfe-pdv.png](/movimentos/pdv/3-config-nfe-pdv.png)

- **Operação padrão:** a operação padrão determina qual tributação será utilizada por padrão durante a emissão da NF-e pelo PDV.
- **Configurar impressão automática:** quando essa opção estiver ativada, o documento será aberto automaticamente após a autorização da NF-e, dispensando a necessidade de solicitar a impressão manual.
- **Modelo de impressão padrão:** é possível definir qual modelo de DANFE será utilizado automaticamente nas emissões realizadas pelo PDV. Selecione uma das opções disponíveis:
		- DANFE A4: impressão em folha A4.
		- DANFE Simplificado: impressão em bobina térmica de 80 mm (40 colunas).
		- DANFE Simplificado Etiqueta: impressão em etiqueta para identificação de volumes.
    
Clique em **"Salvar"**


## Ambiente da NF-e

A sequência numérica utilizada pela NF-e emitida no PDV é compartilhada com o módulo normal de NF-e. Caso a NF-e já esteja configurada no sistema, não será necessário fazer alterações.

![4-config-nfe-pdv.png](/movimentos/pdv/4-config-nfe-pdv.png)


> Sempre que uma nota for autorizada, independentemente do local da emissão (módulo NF-e ou PDV), será utilizado o próximo número disponível da sequência. {.is-info}


# Emitir NF-e pelo PDV

Após concluir as configurações, acesse o módulo **"Movimentações"**, clique em **"PDV"** e selecione **"Nova venda"** ou pressione a tecla **"F2"**.




Durante a venda, pressione o atalho F9 para alternar o documento fiscal.

O sistema alterará a emissão de NFC-e para NF-e.

Como a identificação do destinatário é obrigatória na NF-e, será solicitado o cadastro de um cliente antes de prosseguir.

Selecione o cliente desejado.

Após a confirmação, a venda continuará normalmente, porém agora utilizando NF-e como documento fiscal.

Realize o lançamento dos produtos normalmente.

Finalize a venda conforme o processo habitual do PDV.

Após a autorização pela SEFAZ, o DANFE será disponibilizado para impressão conforme o modelo configurado.

Importante

O processo de venda permanece praticamente igual ao utilizado na NFC-e, alterando apenas o documento fiscal emitido.

## Consultar as NF-e emitidas

Todas as NF-e emitidas pelo PDV ficam disponíveis na listagem de documentos.

Acesse a tela de documentos do PDV para visualizar todas as emissões realizadas.

Além da consulta, é possível acessar os detalhes da nota para conferir todas as informações transmitidas.

## Filtrar somente NF-e

Para facilitar a localização das notas fiscais, foi disponibilizado um novo filtro na listagem de documentos.

Selecione o filtro NF-e para exibir somente esse tipo de documento.

Dessa forma, a consulta fica mais rápida, principalmente em empresas que também realizam emissão de NFC-e.

## Modelos de DANFE

A emissão da NF-e pelo PDV disponibiliza três modelos de impressão do DANFE.

Cada modelo atende uma necessidade específica da empresa.

### DANFE A4

O DANFE A4 é o modelo tradicional da Nota Fiscal Eletrônica.

Esse modelo contém todas as informações exigidas para acompanhar o transporte da mercadoria e deve ser utilizado quando houver necessidade de impressão em papel A4.

É recomendado para empresas que utilizam impressoras convencionais.

### DANFE Simplificado

O DANFE Simplificado foi desenvolvido para impressão em impressoras térmicas de 80 mm (40 colunas).

Esse modelo apresenta praticamente as mesmas informações do DANFE tradicional, porém adaptadas para um formato reduzido.

São apresentados:

dados do emitente;
dados do destinatário;
produtos;
totais da nota;
chave de acesso;
QR Code, quando aplicável;
demais informações fiscais necessárias.

Esse modelo permite reaproveitar a mesma impressora utilizada para emissão da NFC-e.

Dica

O DANFE Simplificado é recomendado para empresas que desejam emitir NF-e diretamente no caixa utilizando impressoras térmicas.

### DANFE Simplificado Etiqueta

O DANFE Simplificado Etiqueta possui uma finalidade diferente do modelo anterior.

Ele foi desenvolvido para identificação dos volumes durante o transporte.

Nesse modelo não são impressos os produtos nem os valores da nota.

São apresentados apenas os dados necessários para identificar a entrega, como:

emitente;
destinatário;
endereço;
chave da NF-e;
informações de transporte.

Esse modelo é indicado para ser fixado na embalagem durante o transporte da mercadoria.

Importante

Como o objetivo é apenas identificar a entrega, as informações comerciais da nota não são exibidas nesse modelo.

## Importar documentos

Além da emissão manual, também é possível gerar NF-e utilizando documentos previamente cadastrados no sistema.

Essa funcionalidade reduz o retrabalho, evitando novo lançamento dos produtos.

### Gerar NF-e a partir de um orçamento

Acesse o módulo de Orçamentos.

Selecione o orçamento desejado.

Em seguida, utilize a opção Gerar NF-e pelo PDV.

Os produtos serão carregados automaticamente para o PDV, permitindo apenas a conferência e finalização da venda.

### Gerar NF-e a partir de um pedido de venda

Também é possível emitir NF-e utilizando um pedido de venda.

Acesse o módulo de Pedidos de Venda.

Selecione o pedido desejado.

Utilize a opção Gerar NF-e pelo PDV.

Todas as informações do pedido serão importadas automaticamente.

### Gerar NF-e a partir de uma pré-venda

As pré-vendas também podem ser convertidas em NF-e.

Localize a pré-venda desejada.

Finalize normalmente a operação escolhendo a emissão de NF-e pelo PDV.

Esse processo mantém o mesmo fluxo operacional já utilizado para NFC-e.



## Fechamento de caixa

As vendas realizadas por meio de NF-e também fazem parte do fechamento de caixa do PDV.

Ao realizar o fechamento, o sistema apresenta um novo bloco específico para esse documento fiscal, permitindo identificar separadamente os valores referentes às NF-e emitidas.

Além dos totalizadores das vendas, o sistema também considera as movimentações relacionadas às NF-e, mantendo o mesmo comportamento aplicado aos demais documentos fiscais.

Caso existam cancelamentos de NF-e, essas informações também serão apresentadas durante o fechamento, permitindo uma conferência completa das movimentações realizadas no caixa.

## Período de testes

Empresas que ainda não possuem o módulo de NF-e contratado podem utilizar um período de testes diretamente pelo PDV.

Ao tentar alternar o documento fiscal para NF-e, o sistema verifica automaticamente se o módulo está habilitado na licença.

Caso não esteja, será apresentada uma mensagem oferecendo a ativação do período de testes.

Ao confirmar a ativação, a emissão de NF-e pelo PDV ficará disponível durante 24 horas.

Importante

O período de testes habilita apenas a emissão de NF-e pelo PDV. As funcionalidades do módulo tradicional de NF-e permanecem indisponíveis.

Durante esse período, todas as emissões poderão ser realizadas normalmente, permitindo conhecer o funcionamento da funcionalidade antes da contratação definitiva.

Após o encerramento das 24 horas, novas emissões serão bloqueadas automaticamente.

Ao tentar emitir uma nova NF-e, será apresentada uma mensagem informando que o período de avaliação foi encerrado e que será necessário entrar em contato com a revenda para adquirir o módulo.









### Mensagens e validações

Durante a utilização da funcionalidade, algumas mensagens poderão ser apresentadas pelo sistema conforme o cenário da emissão.

#### Cliente não informado

Ao tentar alterar a emissão para NF-e sem selecionar um cliente, o sistema solicitará a identificação do destinatário, pois esse dado é obrigatório para a emissão da Nota Fiscal Eletrônica.

#### Módulo não habilitado

Caso a empresa não possua o módulo de NF-e contratado, será apresentada uma mensagem oferecendo a ativação do período de testes.

Após a ativação, a emissão ficará disponível durante 24 horas.

#### Período de testes encerrado

Quando o período de avaliação expirar, o sistema informará que a funcionalidade não está mais disponível.

Para continuar emitindo NF-e pelo PDV, será necessário adquirir o módulo junto à revenda.

