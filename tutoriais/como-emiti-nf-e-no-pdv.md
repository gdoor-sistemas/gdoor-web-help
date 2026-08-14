---
title: Como emitir NF-e no PDV
description: 
published: true
date: 2026-08-14T17:57:37.415Z
tags: 
editor: markdown
dateCreated: 2026-07-21T19:47:17.366Z
---

# Como emitir NF-e pelo PDV
Confira neste tópico os procedimentos para emitir NF-e pelo PDV.

# Introdução 
A emissão de NF-e pelo PDV permite realizar vendas utilizando a Nota Fiscal Eletrônica sem a necessidade de acessar o módulo tradicional de NF-e.

Toda a operação é realizada no próprio frente de caixa, utilizando a mesma rotina já conhecida pelos operadores, mantendo integração com a tributação, numeração da NF-e, fechamento de caixa e demais recursos do sistema.

Além da emissão manual, também é possível gerar NF-e a partir de orçamentos, pedidos de venda e pré-vendas, reduzindo o retrabalho e agilizando o atendimento.

# Configurações do PDV

Antes de emitir NF-e pelo PDV, verifique as configurações necessárias e realize os ajustes, se necessário. Acesse o módulo **"Movimentações"**, clique em **"PDV"** e selecione **"Configurações do PDV"**.

![1-config-nfe-pdv.png](/movimentos/pdv/1-config-nfe-pdv.png)

## Comportamento

Recomenda-se habilitar a opção **"Solicitar cliente"** para que todas as vendas e pré-vendas sejam registradas com um cliente vinculado. Dessa forma, esses documentos poderão ser utilizados posteriormente para gerar NF-e por meio da listagem de lançamentos.

> Ao iniciar a emissão da NF-e durante a venda por meio da tecla F9, o sistema solicitará automaticamente a identificação do cliente, independentemente de a opção "Solicitar cliente" estar habilitada, pois essa informação é obrigatória para a emissão da NF-e. {.is-info}

![2-config-nfe-pdv.png](/movimentos/pdv/2-config-nfe-pdv.png)

## Configurações da NF-e

Configure a operação padrão, a impressão automática após a autorização da NF-e e o modelo de impressão do DANFE.

![3-config-nfe-pdv.png](/movimentos/pdv/3-config-nfe-pdv.png)

- **Operação padrão:** determina a tributação utilizada durante a emissão da NF-e pelo PDV.
- **Configurar impressão automática:** quando habilitada, o documento será aberto automaticamente após a autorização da NF-e, dispensando a impressão manual.
- **Modelo de impressão padrão:** define o modelo de DANFE utilizado automaticamente nas emissões realizadas pelo PDV. Selecione uma das opções disponíveis:
		- **DANFE A4:** impressão em folha A4.
		- **DANFE Simplificado:** impressão em bobina térmica de 80 mm (40 colunas).
		- **DANFE Simplificado Etiqueta:** impressão em etiqueta para identificação de volumes.
    
Clique em **"Salvar"**.


## Ambiente da NF-e

A sequência numérica utilizada na NF-e emitida pelo PDV é compartilhada com o módulo de NF-e. Caso a NF-e já esteja configurada no sistema, não será necessário realizar alterações.

![4-config-nfe-pdv.png](/movimentos/pdv/4-config-nfe-pdv.png)


> Sempre que uma nota for autorizada, independentemente do local da emissão (módulo NF-e ou PDV), será utilizado o próximo número disponível da sequência. {.is-info}


# Emitir NF-e pelo PDV

Após concluir as configurações, acesse o módulo **"Movimentações"**, clique em **"PDV"** e selecione **"Nova venda"** ou pressione a tecla **"F2"**.

![5-config-nfe-pdv.png](/movimentos/pdv/5-config-nfe-pdv.png)

Realize o lançamento dos produtos e pressione o atalho **F9** para alternar para NF-e e selecione o **Cliente**.

> Como a identificação do destinatário é obrigatória na NF-e, o sistema solicitará a identificação de um cliente antes de prosseguir. {.is-warning}

![6-config-nfe-pdv.png](/movimentos/pdv/6-config-nfe-pdv.png)

O sistema alterará o documento fiscal da Pré-venda ou NFC-e para NF-e. A venda continuará normalmente, passando a utilizar a NF-e como documento fiscal.

![7-config-nfe-pdv.png](/movimentos/pdv/7-config-nfe-pdv.png)


Finalize a venda conforme o processo habitual do PDV.

> O processo de venda permanece praticamente igual ao utilizado na NFC-e, com alteração apenas do documento fiscal emitido. {.is-info}


## Consultar as NF-e emitidas

Todas as NF-e emitidas pelo PDV ficam disponíveis na listagem de documentos.

![8-config-nfe-pdv.png](/movimentos/pdv/8-config-nfe-pdv.png)

Ao abrir o menu de um documento, estão disponíveis as seguintes opções:

![9-config-nfe-pdv.png](/movimentos/pdv/9-config-nfe-pdv.png)

 - **Marcar:** seleciona o documento para realizar ações em lote.
- **Consultar status:** consulta novamente a situação do documento na SEFAZ.
- **Copiar chave de acesso:** copia a chave de acesso da NF-e ou NFC-e para a área de transferência.
- **Enviar por e-mail:** envia o XML e/ou DANFE para o endereço de e-mail do destinatário.
- **Visualizar DANFE:** abre a representação gráfica do documento fiscal nos modelos A4, Simplificado ou Simplificado Etiqueta.
- **Visualizar XML:** exibe o arquivo XML autorizado.
- **Eventos da NF-e:** permite consultar ou executar eventos fiscais relacionados ao documento, como "Carta de Correção", "Conciliação Financeira (ECONF)" ou "Eventos da Reforma Tributária".
- **Ajustar (NF-e de ajuste):** gera uma NF-e de ajuste vinculada ao documento.
- **Complementar (NF-e complementar):** permite emitir uma NF-e complementar quando necessário.
- **Gerar CT-e:** inicia a emissão de um Conhecimento de Transporte Eletrônico relacionado ao documento.
- **Gerar contrato de frete (CIOT):** permite gerar o contrato de frete e o respectivo CIOT, quando aplicável.
- **Salvar documento:** realiza o download dos arquivos relacionados ao documento fiscal.
- **Cancelar NF-e:** solicita o cancelamento da nota fiscal, desde que a operação esteja dentro das regras e do prazo permitido pela legislação.



## Filtrar somente NF-e

Para facilitar a localização das notas fiscais, a listagem de documentos conta com um filtro específico para NF-e. Dessa forma, a consulta fica mais rápida, principalmente em empresas que também emitem NFC-e. Os filtros disponíveis são:

![10-config-nfe-pdv.png](/movimentos/pdv/10-config-nfe-pdv.png)

- **Cliente/Fornecedor;**
- **Usuário;**
- **Vendedor;**
- **Status;**
- **Data inicial e data final;**
- **Ambiente de emissão;**
- **Espécie de pagamento;**
- **Tipo de documento;**
- **Incluir pré-vendas com documento fiscal emitido.**


## Fechamento de caixa

As vendas realizadas por meio de NF-e também são consideradas no fechamento de caixa do PDV.

Ao realizar o fechamento, o sistema apresenta um bloco específico para esse documento fiscal, permitindo identificar separadamente os valores referentes às NF-e emitidas.

![12-config-nfe-pdv.png](/movimentos/pdv/12-config-nfe-pdv.png)


## Período de testes

Empresas que ainda não possuem o módulo de NF-e contratado podem testar a emissão desse documento fiscal diretamente pelo PDV, sem a necessidade de contratar o módulo imediatamente.

Ao alternar o documento fiscal para NF-e, o sistema verifica automaticamente se o módulo está habilitado na licença. Caso não esteja, será apresentada uma mensagem oferecendo a ativação do período de testes.

![11-config-nfe-pdv.png](/movimentos/pdv/11-config-nfe-pdv.png)

Ao confirmar a ativação, a emissão de NF-e pelo PDV ficará disponível por 24 horas. Durante esse período, as notas poderão ser emitidas normalmente, permitindo avaliar o funcionamento do recurso antes da contratação definitiva.

Ao término das 24 horas, o período de testes será encerrado automaticamente e novas emissões de NF-e serão bloqueadas.





