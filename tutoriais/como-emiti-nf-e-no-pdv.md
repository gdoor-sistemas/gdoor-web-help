---
title: Como emitir NF-e no PDV
description: 
published: true
date: 2026-07-22T20:52:59.685Z
tags: 
editor: markdown
dateCreated: 2026-07-21T19:47:17.366Z
---

# # Como emitir NF-e no PDV
Confira neste tópico todos os passos para emitir a NF-e por dentro do PDV.

# Introdução 
A emissão de NF-e pelo PDV permite realizar vendas utilizando Nota Fiscal Eletrônica sem a necessidade de acessar o módulo tradicional de NF-e.

Toda a operação é realizada no próprio frente de caixa, utilizando a mesma rotina já conhecida pelos operadores, mantendo integração com a tributação, numeração da NF-e, fechamento de caixa e demais recursos do sistema.

Além da emissão manual, também é possível gerar NF-e a partir de orçamentos, pedidos de venda e pré-vendas, reduzindo retrabalho e agilizando o atendimento.

# Como configurar

Antes de emitir NF-e pelo PDV, algumas configurações devem ser realizadas.

## Definir a operação padrão

A operação padrão determina qual tributação será utilizada por padrão durante a emissão da NF-e pelo PDV.

Acesse **Fiscal > NF-e > Configurações**

Localize o campo Operação padrão e selecione a operação que deverá ser utilizada nas emissões realizadas pelo PDV.

Sempre que existir uma regra tributária vinculada à operação, ela terá prioridade sobre as informações cadastradas no produto.

Caso não exista uma regra definida para a operação, o sistema utilizará a tributação cadastrada no produto.

Observação

Caso a empresa já utilize emissão de NF-e pelo módulo tradicional, recomenda-se utilizar a mesma operação padrão para manter o mesmo comportamento tributário.

Configurar o modelo de impressão

Também é possível definir qual modelo de DANFE será utilizado automaticamente nas emissões realizadas pelo PDV.

Nas configurações do PDV, selecione uma das opções disponíveis:

DANFE A4;
DANFE Simplificado;
DANFE Simplificado Etiqueta.

Essa configuração define o modelo utilizado como padrão durante a impressão da nota.

Configurar impressão automática

Ainda nas configurações do PDV, é possível habilitar a impressão automática do DANFE.

Quando essa opção estiver ativada, o documento será aberto automaticamente após a autorização da NF-e, dispensando a necessidade de solicitar a impressão manual.

Esse comportamento é semelhante ao já utilizado na emissão da NFC-e.

Configurar a numeração da NF-e

A sequência numérica utilizada pela NF-e emitida no PDV é compartilhada com o módulo tradicional de NF-e.

Acesse:

Fiscal > NF-e > Configurações

Configure normalmente a sequência numérica da NF-e.

Sempre que uma nota for autorizada, independentemente do local da emissão (módulo NF-e ou PDV), será utilizado o próximo número disponível da sequência.

Caso ocorram emissões simultâneas nos dois módulos, a numeração continuará sequencial entre ambos.

