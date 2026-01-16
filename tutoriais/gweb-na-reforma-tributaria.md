---
title: Reforma Tributária
description: Veja neste tópico informações e mudanças no GWEB relacionadas à reforma tributária.
published: true
date: 2026-01-16T13:57:06.095Z
tags: nf-e, impostos, tributos, operações, nota fiscal, configurações, emitente, nfc-e, cbs, ibs, imposto seletivo, ct-e
editor: markdown
dateCreated: 2025-08-25T14:11:33.853Z
---

# Mudanças no Gweb para a Reforma Tributária
Confira neste tópico as alterações feitas no Gweb para adequação à **Reforma Tributária**.


> Em breve, todas as alterações apresentadas neste material estarão disponíveis para uso.
{.is-warning}

# Introdução
Com a implementação da Reforma Tributária, o Gweb passou por adequações importantes para atender às novas exigências legais. A reforma trouxe ajustes significativos na estrutura de tributos, impactando empresas de diferentes segmentos e exigindo atenção redobrada na gestão das rotinas. Diante desse cenário, torna-se fundamental compreender as alterações e alinhar cada detalhe junto à contabilidade, assegurando que os processos sigam de forma correta e em conformidade com a legislação. 

Neste material, serão apresentadas as principais alterações realizadas no sistema.

> Para conhecer em detalhes as alterações da Reforma Tributária, acesse a [cartilha do SEBRAE](https://sebrae.com.br/Sebrae/Portal%20Sebrae/Reforma%20tributaria/CTDs/Reforma_Tributária_Pequenos_Negócios_-_ebook.pdf) ou assista aos [vídeos](/tutoriais/gweb-na-reforma-tributaria#assista-aos-v%C3%ADdeos-sobre-a-reforma-tribut%C3%A1ria) disponíveis no final deste material.
{.is-info}

# Novos Impostos: CBS, IBS e IS

Entre as principais mudanças, três novos tributos passaram a compor a estrutura fiscal brasileira. Cada um deles substitui impostos já existentes. São eles:

- **CBS** – Contribuição sobre Bens e Serviços: a CBS substitui PIS e COFINS, unificando regras de cálculo sobre bens e serviços. É um imposto em esfera federal e com o objetivo de arrecadar fundos para financiar projetos sociais.
- **IBS** – Imposto sobre Bens e Serviços: o IBS substitui ICMS e ISS, sendo um tributo compartilhado entre estados e municípios, com alíquotas unificadas.
- **IS** – Imposto Seletivo: criado para incidir sobre produtos considerados nocivos à saúde ou ao meio ambiente, adicionando uma tributação extra. Este imposto vai substituir o IPI, e entra em vigência somente em 2027.

# Alterações no Emitente

No menu **Configurações > Emitente**, está disponível um campo para aderir à **Reforma Tributária**.

![Emitente](/tutoriais/reforma-tributaria/1_emitente.png)

Assim que marcada a opção, é possível visualizar e configurar as novas informações tributárias disponíveis com a reforma.

> Solicite o acompanhamento da **contabilidade** em todo o processo de adequação à **Reforma Tributária**. 
{.is-warning}


# Alterações nas Regras de Tributação

No menu **Configurações > Impostos**, ao criar uma nova regra de tributação, será possível optar pelo modelo tributário tradicional (**ICMS, PIS, COFINS e IPI**) ou pelo modelo da Reforma Tributária (**CBS, IBS e IS**).

![Selecionar modelo tributário](/tutoriais/reforma-tributaria/2_regra_tributacao_selecionar_tipo.png)

Ao selecionar o modelo tributário como **Impostos da Reforma Tributária**, realize a configuração dos impostos.



## Configuração dos impostos IBS/CBS

Na seção de **Impostos**, na aba **IBS/CBS**, selecione o **CST (Código da situação tributária)** e o **Código de classificação tributária**.

![3_regra_de_tributacao_aba2_cst_cct.png](/tutoriais/reforma-tributaria/3_regra_de_tributacao_aba2_cst_cct.png)

> O **Código de classificação tributária** é exibido de acordo com o **CST** selecionado.
{.is-info}

Na sequência, configure o percentual da **Alíquota federal CBS (Contribuição sobre bens e serviços)** e, na seção **Alíquotas IBS**, na aba **Estados**, informe o percentual da **Base de cálculo** e a **Alíquota IBS (Imposto sobre bens e serviços)** de cada estado da federação.

![CBS e IBS](/tutoriais/reforma-tributaria/4_regra_tributacao_aba2_cbs_aliquota_estados.png)

Já na aba **Cidades**, adicione os municípios de destino das vendas e informe a alíquota específica de cada um.

![Alíquotas das cidades](/tutoriais/reforma-tributaria/5_regra_tributacao_aba2_aliquota_cidades.png)

> Caso a cidade **não** constar na lista, o Gweb aplicará a **alíquota geral**.
{.is-info}

## Configuração do Imposto Seletivo (IS)

Na seção de **Impostos**, na aba **Imposto Seletivo**, selecione o **CST (Código da situação tributária)** e o **Código de classificação tributária**.

![Imposto Seletivo](/tutoriais/reforma-tributaria/6_regra_tributacao_aba2_imposto_seletivo.png)

> O **Código de classificação tributária** é exibido de acordo com o **CST** selecionado.
{.is-info}

# Alterações no cadastro do produto

 No menu de **Cadastros > Produtos**, ao editar um produto, existe o campo **código de classificação tributária**.

Ao informar este código, o GWeb irá vincular automaticamente a regra de tributação cadastrada para esse código.
 
![Cadastro de produto](/tutoriais/reforma-tributaria/13_cad_produto.png)

# Alterações nas Naturezas de Operação

No menu de **Cadastros > Operações**, inclua uma **Regra de tributação** da Reforma Tributária para a **Natureza de Operação**.

![Reforma de tributação na natureza de operação](/tutoriais/reforma-tributaria/7_natureza_operacao_regra_tributacao.png)

# Alterações na NF-e e NFC-e

Ao lançar o produto em qualquer documento fiscal do Gweb, na seção de **Impostos**, estarão disponíveis as abas **IBS/CBS** e **IS** (além das abas existentes ICMS, IPI e PIS/COFINS).


### IBC/CBS

Exibe a alíquota de para **UF**, **município** e **CBS**.

![Aba IBS/CBS](/tutoriais/reforma-tributaria/11_aba_ibs_cbs.png)

### IS

Exibe a **alíquota**, **base de cálculo**, **valor total** e **alíquota específica** do IS.
>Este imposto substituirá o IPI e entrará em **vigência somente em 2027**.
{.is-warning}

![Aba IS](/tutoriais/reforma-tributaria/12_aba_iss.png)

Cada aba contém dados individuais que serão preenchidos com base nas [regras de tributação](#alterações-nas-regras-de-tributação) configuradas.

> Esta tela está disponível na **NF-e** e na **nota de compra** ao lançar um produto, ou no **PDV (NFC-e)** ao pressionar o atalho **<kbd>CTRL + D</kbd>** em um item.
{.is-info}

# Regimes e Cronograma



![14_-_regime_e_cronograma.png](/tutoriais/reforma-tributaria/14_-_regime_e_cronograma.png)


# Alterações no CT-e
No menu **Impostos**, acesse a aba **IBS/CBS**, selecione o **CST (Código da situação tributária)** e o **Código de classificação tributária**.

> O **Código de classificação tributária** é exibido de acordo com o **CST** selecionado.
{.is-info}

![Aba de impostos do CT-e](/tutoriais/reforma-tributaria/9_aba_impostos_ct_e.png)

De acordo com o **CST** e o **código da classificação tributária** selecionados, as alíquotas para o **IBS UF**, **IBS Município** e **CBS** serão disponibilizadas.

![10_aba_impostos_cte.png](/tutoriais/reforma-tributaria/10_aba_impostos_cte.png)

# Alterações na NFS-e

As alterações na NFS-e ainda estão em andamento. Este material será atualizado assim que estiverem disponíveis.

# Assista aos vídeos sobre a Reforma Tributária

Confira os vídeos preparados pela Zucchetti com explicações completas sobre as principais mudanças da Reforma Tributária:

- **Webinar | Reforma Tributária** - 
	<iframe width="560" height="315" src="https://www.youtube.com/embed/WfM3w40FScI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
 - **Reforma Tributária: o que muda no varejo?** 
 	<iframe width="560" height="315" src="https://www.youtube.com/embed/oCUYdeoqjLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  
  

