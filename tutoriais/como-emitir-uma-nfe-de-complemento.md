---
title: Tutorial: Emitir uma nota de complemento
description: Passo-a-passo para emitir uma NF-e de complemento no GWEB
published: false
date: 2024-02-01T17:55:22.811Z
tags: tutoriais, nf-e, complemento
editor: markdown
dateCreated: 2024-02-01T17:55:22.811Z
---

# Nota fiscal complementar
Listamos neste **tutorial** como emitir **NF-e complementar** para operações de **ajuste de quantidade** de produto, **valores e impostos** da nota fiscal original.

Por se tratar de um documento bem especifico, caso você consiga fazer o **cancelamento** ou a **devolução**, este é o caminho mais fácil.

# Em que casos posso emitir uma Nota Fiscal Complementar?

A legislação prevê a sua emissão nos seguintes casos:

- Quando há diferença no preço ou na quantidade de mercadoria;
- No lançamento ou correção de imposto, quando há erro de cálculo ou de classificação fiscal;
- Na exportação quando o valor do dólar, por exemplo, for diferente na hora da emissão da NF-e e do recebimento da mercadoria. Nesse caso a NF-e Complementar é para ajustar os valores.

# Como emitir uma nota fiscal complementar no GWEB?

## Cadastrando a operação de complemento
O primeiro passo é o cadastro da **operação de complemento**, acesse o menu **cadastros >> operações** e no canto inferior direito clique no botão (<span class="mdi mdi-plus"></span>).

No formulário, preencha o nome da operação de acordo com o que deseja complementar na nota original e marque a caixa **operação de complemento**.

![Cadastro da operação](/tutoriais/nfe-complemento/cadastro_operacao.png)

Após preencher os dados da operação de complemento, clique em <span class="mat-button mat-accent">SALVAR</span> para gravar as informações.

## Emitindo a nota fiscal complementar

No GWEB existem **duas** formas de emitir a **nota fiscal complementar**, manualmente adicionando a **chave de acesso**, **destinatário** e **produtos**, ou gerando a **nota de complemento** a partir de uma nota que você já tem no sistema, **importando automaticamente** os dados citados anteriormente.

### Emitindo a nota fiscal complementar a partir de uma nota do sistema

Acesse o menu **movimentações >> NF-e**, localize a nota fiscal que deseja complementar, clique no menu (<span class="mdi mdi-dots-vertical"></span>) dela e selecione a opção **Complementar (NF-e de complemento)**.

![NF-e de complemento a partir de outra NF-e](/tutoriais/nfe-complemento/complemento_a_partir_nf-e.png)

Ao selecionar a opção de **Complementar (NF-e de complemento)**, o sistema irá **importar** os **produtos** e o **cliente** da NF-e original para uma nova nota de complemento, **pulando** o primeiro passo, que é vinculação da **chave de acesso da NF-e a ser referenciada**.

No segundo passo, você deve **marcar** os produtos que deseja **complementar**, ao selecioná-los, clique em <span class="mat-button mat-accent">PRÓXIMO</span>
![passo_2_selecionar_produtos.png](/tutoriais/nfe-complemento/passo_2_selecionar_produtos.png)

No terceiro passo, você deve selecionar a **natureza de operação de complemento** que foi cadastrada e **informar os dados a serem complementados** clicando no produto para exibir os campos.
