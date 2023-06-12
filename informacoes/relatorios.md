---
title: Relatórios
description: 
published: false
date: 2023-06-12T20:42:41.582Z
tags: 
editor: markdown
dateCreated: 2023-05-31T12:48:03.254Z
---

# Introdução

Este módulo permite que você gere diversos relatórios das operações realizadas no sistema.
Os relatórios desempenham um papel importante na comunicação de informações objetivas e fundamentadas. Eles ajudam a tomar decisões informadas, fornecer atualizações, documentar resultados e transmitir conhecimentos de forma clara e sistemática.
![lista_relatorios.png](/informações/lista_relatorios.png)

# Lista
Para visualizar os relatórios disponíveis, acesse no menu principal: **Informações &raquo; Relatórios**:
![lista_relatorios2.png](/informações/lista_relatorios2.png)





# Configurações dos Relatórios
![config_relatorios.png](/informações/config_relatorios.png)


## Aparência




## Impressão

- **Cabeçalho**
- **Rodapé**
- **Compra de mercadorias**
- **Devolução de compra de mercadorias**
- Transferência de mercadorias
- Remessa de mercadoria para demonstração
- Remessa de mercadoria para conserto
- Remessa de mercadoria em consignação

As operações em **negrito** são utilizadas para controle do sistema e não podem ser excluídas. As demais operações já vêm inclusive com uma tributação genérica vinculada, com o CFOP específico para essas operações, mas tanto a operação quando as regras de tributação podem ser alteradas conforme a sua necessidade.

# Cadastro de operações

Você pode cadastrar uma nova operação acessando o módulo de cadastro de operações e clicando no botão de inclusão no canto direito inferior da tela. Para alterar uma operação, basta clicar sobre ela na lista de operações. O formulário de cadastro de operações tem essa aparência:

![Formulário para cadastro de operações](/cadastros/operacoes/formulario-para-cadastro-de-operacoes.png)

## Identificação 

- **Nome da operação**. Nome identificador da operação, será utilizados nas listas de seleção.
- **Descrição**. Descrição mais detalhada da operação. Útil para quando há várias operações com nome semelhante para você identificar mais detalhes sobre a operação.

## Definições

- **Entrada/Saída**. Indica se é uma operação de entrada ou saída.
- **Importação/Exportação**. Indica se é uma operação de comércio exterior.
- **Operação de ajuste**. Indica se é uma operação para ser referenciada em uma [NF-e de ajuste](/movimentos/nf-e/ajuste).
- **Operação de complemento**. Indica se é uma operação para ser referenciada em uma [NF-e de complemento](/movimentos/nf-e/complemento).
- **Movimenta estoque**. Indica se notas feitas com esta operação devem alterar a quantidade dos produtos no estoque.
- **Devolução**. Infica se é uma operação para ser referenciada em uma [NF-e de devolução](/movimentos/nf-e/devolucao).
- **Saída/Entrada para consumo**. Indica se a operação será feita para consumo. Com esta opção marcada, a nota fiscal será identificada como destinada a consumidor final e a incidência da tributação pode ser diferenciada.
- **Ativa**. Esta opção aparece apenas ao editar a operação e indica. Ao desmarcar esta opção, a operação não ficará disponível para selecionar nas notas. Você não poderá inativar uma operação se ela for a operação padrão de algum tipo de nota.

## Tributação

Nesta seção você pode vincular a operação a uma [regra de tributação](/configuracoes/impostos/regras-de-tributacao) cadastrada para que esta regra seja aplicada na venda selecionada. Informar a tributação na operação não é obrigatório, mas caso você informe, a regra da operação terá prioridade sobre qualquer outra regra que possa ser aplicada na venda. Para mais informações, veja [como são aplicadas as regras de tributação na nota fiscal](/configuracoes/impostos/regras-de-tributacao#aplicacao).