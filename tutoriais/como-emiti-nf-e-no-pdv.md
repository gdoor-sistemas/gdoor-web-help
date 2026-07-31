---
title: Como emitir NF-e no PDV
description: 
published: true
date: 2026-07-31T20:53:14.019Z
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

![5-config-nfe-pdv.png](/movimentos/pdv/5-config-nfe-pdv.png)

Realize o lançamento dos produtos e pressione o atalho **F9** para alternar para NF-e e selecione o **Cliente**.

> Como a identificação do destinatário é obrigatória na **NF-e**, será solicitado o cadastro de um cliente antes de prosseguir. {.is-warning}

![6-config-nfe-pdv.png](/movimentos/pdv/6-config-nfe-pdv.png)

O sistema alterará a emissão de Pré-venda ou NFC-e para NF-e. A venda continuará normalmente, porém agora utilizando NF-e como documento fiscal.

![7-config-nfe-pdv.png](/movimentos/pdv/7-config-nfe-pdv.png)


Finalize a venda conforme o processo habitual do PDV.

> O processo de venda permanece praticamente igual ao utilizado na NFC-e, alterando apenas o documento fiscal emitido. {.is-info}


## Consultar as NF-e emitidas

Todas as NF-e emitidas pelo PDV ficam disponíveis na listagem de documentos.

![8-config-nfe-pdv.png](/movimentos/pdv/8-config-nfe-pdv.png)

Ao abrir o menu de um documento, estão disponíveis as seguintes opções:

![9-config-nfe-pdv.png](/movimentos/pdv/9-config-nfe-pdv.png)

 - **Marcar:** seleciona o documento para execução de ações em lote.
- **Consultar status:** consulta novamente a situação do documento na SEFAZ.
- **Copiar chave de acesso:** copia a chave de acesso da NF-e ou NFC-e para a área de transferência.
- **Enviar por e-mail:** envia o XML e/ou DANFE para o endereço eletrônico do destinatário.
- **Visualizar DANFE:** abre a representação gráfica do documento fiscal no tamanho A4, Simplificado etiqueta ou Simplificado.
- **Visualizar XML:** exibe o arquivo XML autorizado.
- **Eventos da NF-e:** permite consultar ou executar eventos fiscais relacionados ao documento, como "Carta de Correção", "Conciliação Financeira (ECONF)" ou "Eventos da reforma tributária.
- **Ajustar (NF-e de ajuste):** gera uma NF-e de ajuste vinculada ao documento.
- **Complementar (NF-e complementar):** permite emitir uma NF-e complementar quando necessário.
- **Gerar CT-e:** inicia a emissão de um Conhecimento de Transporte Eletrônico relacionado ao documento.
- **Gerar contrato de frete (CIOT):** permite gerar o contrato de frete e o respectivo CIOT quando aplicável.
- **Salvar documento:** realiza o download dos arquivos do documento fiscal.
- **Cancelar NF-e:** solicita o cancelamento da nota fiscal, desde que esteja dentro das regras e do prazo permitido pela legislação.



## Filtrar somente NF-e

Para facilitar a localização das notas fiscais, foi disponibilizado um novo filtro na listagem de documentos. Dessa forma, a consulta fica mais rápida, principalmente em empresas que também realizam emissão de NFC-e. Os campos disponíveis são:

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





