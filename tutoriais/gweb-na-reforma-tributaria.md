---
title: Reforma Tributária
description: Veja neste tópico informações e mudanças no GWEB relacionadas à reforma tributária.
published: false
date: 2025-09-10T12:30:21.813Z
tags: nf-e, impostos, tributos, operações, nota fiscal, configurações, emitente, nfc-e, cbs, ibs, imposto seletivo, ct-e
editor: markdown
dateCreated: 2025-08-25T14:11:33.853Z
---

# Mudanças no Gweb para a Reforma Tributária
Confira neste tópico as alterações feitas no Gweb para adequação à reforma tributária.

# Introdução
INTRODUÇÃO AQUI

# Alterações no Emitente

No menu **Configurações > Emitente**, está disponível um campo para aderir à **Reforma Tributária**.

![Emitente](/tutoriais/reforma-tributaria/1_emitente.png)

Assim que marcada a opção, é possível visualizar e configurar as novas informações tributárias disponíveis com a reforma.

> Solicite o acompanhamento da **contabilidade** em todo o processo de adequação à **Reforma Tributária**. 
{.is-warning}


# Alterações nas Regras de tributação

No menu **Configurações > Impostos**, ao criar uma nova regra de tributação, será possível optar pelo modelo tributário tradicional (**ICMS, PIS, COFINS e IPI**) ou pelo modelo da Reforma Tributária (**CBS, IBS e IS**).

![Selecionar modelo tributário](/tutoriais/reforma-tributaria/2_regra_tributacao_selecionar_tipo.png)

Ao selecionar o modelo tributário como **Impostos da Reforma Tributária**, realize a configuração dos impostos.



## Configuração dos impostos IBS/CBS

Na seção de **Impostos**, na aba **IBS/CBS**, selecione o **CST (Código da situação tributária)** e o **Código de classificação tributária**.

![3_regra_de_tributacao_aba2_cst_cct.png](/tutoriais/reforma-tributaria/3_regra_de_tributacao_aba2_cst_cct.png)

> O **Código de classificação tributária** é exibido de acordo com o **CST** selecionado acima.
{.is-info}

Na sequência, configure a alíquota de **CBS (Contribuição sobre bens e serviços) federal** e na seção **Alíquotas IBS**, na aba **Estados**, informe o percentual da **Base de cálculo** e a **Alíquota IBS (Imposto sobre bens e serviços)** de cada estado da federação.

![CBS e IBS](/tutoriais/reforma-tributaria/4_regra_tributacao_aba2_cbs_aliquota_estados.png)

Já na aba **Cidades**, adicione as cidades para onde serão realizadas vendas e a alíquota específica de cada uma.

![Alíquotas das cidades](/tutoriais/reforma-tributaria/5_regra_tributacao_aba2_aliquota_cidades.png)

> Caso a cidade **não** esteja na lista, o Gweb utilizará a **alíquota geral**.
{.is-info}

## Configuração do Imposto Seletivo (IS)

Na seção de **Impostos**, na aba **Imposto Seletivo**, selecione o **CST (Código da situação tributária)** e o **Código de classificação tributária**.

![Imposto Seletivo](/tutoriais/reforma-tributaria/6_regra_tributacao_aba2_imposto_seletivo.png)

> O **Código de classificação tributária** é exibido de acordo com o **CST** selecionado acima.
{.is-info}

# Alterações nas Naturezas de operação

No menu de **Cadastros > Operações**, inclua uma **Regra de tributação** da Reforma Tributária para a **Natureza de Operação**.

![Reforma de tributação na natureza de operação](/tutoriais/reforma-tributaria/7_natureza_operacao_regra_tributacao.png)

# Alterações na NF-e e NFC-e

Ao lançar o produto em qualquer documento fiscal do Gweb, na seção de **Impostos** serão exibidas as seguintes abas:

- ICMS
- PIS/COFINS
- IPI
- IBS/CBS
- IS

ESSA IMAGEM PRECISA SER AJUSTADA POIS FALTA O PIS/COFINS QUE NÃO ESTÁ APARECENDO NA TAREFA (POTTER IRÁ AJUSTAR).
![Impostos de produtos](/tutoriais/reforma-tributaria/8_nf_e_impostos_produtos.png)

Cada aba contém dados individuais que serão preenchidas com base nas regras de tributação configuradas.

> Esta tela está disponível na **NF-e** e na **Nota de compra** ao lançar um produto, ou no **PDV (NFC-e)** ao pressionar o atalho **<kbd>CTRL + D</kbd>** em um produto.
{.is-info}

# Alterações no CT-e

## AGUARDANDO NO RELEASER PARA SER FEITO

