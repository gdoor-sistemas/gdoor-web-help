---
title: Reforma Tributária
description: Veja neste tópico informações e mudanças no GWEB relacionadas à reforma tributária.
published: false
date: 2025-09-10T12:05:32.295Z
tags: nf-e, impostos, tributos, operações, nota fiscal, configurações, emitente, nfc-e, cbs, ibs, imposto seletivo, ct-e
editor: markdown
dateCreated: 2025-08-25T14:11:33.853Z
---

# Mudanças no Gweb para a Reforma Tributária
Confira neste tópico as alterações feitas no Gweb para adequação à reforma tributária.

# Introdução
INTRODUÇÃO AQUI

# Alterações no emitente

No menu **Configurações > Emitente** foi incluído um novo campo para aderir à **Reforma Tributária**.

![Emitente](/tutoriais/reforma-tributaria/1_emitente.png)

Assim que aderir, é possível visualizar e configurar as novas informações tributárias disponíveis com a reforma.

> Solicite o acompanhamento da **contabilidade** em todo o processo do cadastro para adequação à **Reforma Tributária**. 
{.is-warning}


# Alterações nas regras de tributação

No menu **Configurações > Impostos**, ao criar uma nova regra de tributação, será possível optar pelo modelo tributário tradicional (**ICMS, PIS, COFINS e IPI**) ou pelo modelo da reforma tributária (**CBS, IBS e IS**).

![Selecionar modelo tributário](/tutoriais/reforma-tributaria/2_regra_tributacao_selecionar_tipo.png)

Ao selecionar o modelo da reforma tributária, o formulário de cadastro de uma nova regra de tributação será diferente.

No formulário da regra, a seção de **identificação** permanece a mesma, com o **nome da regra** e **descrição** para identificação da mesma.

## Seção dos impostos IBS/CBS

Na seção de **Impostos**, na aba **IBS/CBS** é possível selecionar o **CST (Código da situação tributária)** e o **Código de classificação tributária**.

![3_regra_de_tributacao_aba2_cst_cct.png](/tutoriais/reforma-tributaria/3_regra_de_tributacao_aba2_cst_cct.png)

> O **Código de classificação tributária** é exibido de acordo com o **CST** selecionado acima.
{.is-info}

Logo mais abaixo, configure a alíquota de **CBS (Contribuição sobre bens e serviços) federal**.
No submenu **estados** abaixo, a base de cálculo e alíquotas de **IBS (Imposto sobre bens e serviços)** de cada estado da federação.

![CBS e IBS](/tutoriais/reforma-tributaria/4_regra_tributacao_aba2_cbs_aliquota_estados.png)

Clicando no submenu de **cidades**, adicione as cidades para as quais você vende e a alíquota específica delas.

![Alíquotas das cidades](/tutoriais/reforma-tributaria/5_regra_tributacao_aba2_aliquota_cidades.png)

> Caso a cidade **não** esteja na lista, o Gweb irá utilizar a **alíquota geral**.
{.is-info}

## Seção do Imposto Seletivo (IS)

Na seção de **Impostos**, na de aba **Imposto Seletivo** é possível selecionar o **CST (Código da situação tributária)** e o **Código de classificação tributária**.

![Imposto Seletivo](/tutoriais/reforma-tributaria/6_regra_tributacao_aba2_imposto_seletivo.png)

> O **Código de classificação tributária** é exibido de acordo com o **CST** selecionado acima.
{.is-info}

# Alterações nas naturezas de operação

No menu de **Cadastros > Operações** é possível incluir uma regra de tributação da reforma tributária para a natureza de tributação.

![Reforma de tributação na natureza de operação](/tutoriais/reforma-tributaria/7_natureza_operacao_regra_tributacao.png)

# Alterações na NF-e e NFC-e

Ao lançar o produto em qualquer documento fiscal do Gweb, na seção de **impostos** serão exibidas as seguintes abas:

- ICMS
- PIS/COFINS
- IPI
- IBS/CBS
- IS

ESSA IMAGEM PRECISA SER AJUSTADA POIS FALTA O PIS/COFINS QUE NÃO ESTÁ APARECENDO NA TAREFA (POTTER IRÁ AJUSTAR).
![Impostos de produtos](/tutoriais/reforma-tributaria/8_nf_e_impostos_produtos.png)

Cada aba contém dados individuais e todas são preenchidas com base nas regras de tributação configuradas.

> Esta tela está disponível na **NF-e** e na **compra** ao **lançar um produto**, ou no **PDV (NFC-e)** ao pressionar o atalho **<kbd>CTRL + D</kbd>** em um produto.
{.is-info}

# Alterações no CT-e

## AGUARDANDO NO RELEASER PARA SER FEITO

