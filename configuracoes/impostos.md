---
title: Configurações de impostos
description: Veja em detalhes como configurar o GDOOR WEB para calcular os impostos nos documentos fiscais
published: true
date: 2020-01-30T13:21:49.342Z
tags: impostos, icms, icms st, ipi, pis, cofins, configurações, fcp
---

# Configuração de impostos

Configuração de impostos é geralmente uma tarefa confusa, difícil de entender e muito trabalhosa. Essa parte do GDOOR WEB foi desenvolvida tendo como foco principal a praticidade, para que o usuário possa fazer isso sem muita dor de cabeça. Ainda é importante que isso seja feito com a ajuda de um responsável pela contabilidade da empresa, pois documentos com a declaração de impostos incorreta podem acarretar em pagamento de imposto indevido, multa, ou pode ser necessário depois de um tempo, pagar impostos atrasados.

O GDOOR WEB já vem com uma configuração genérica pré-definida, que pode ser alterada e/ou incrementada. Os impostos abrangidos pelo serviço, são os incidentes sobre a circulação de mercadorias: [ICMS](/glossario#icms), [ICMS ST](/glossario#icms-st), [FCP](/glossario#fcp), [IPI](/glossario#ipi), [PIS](/glossario#pis) e [COFINS](/glossario#cofins).

Acesse o módulo de [Impostos](/configuracoes/impostos) sob a seção **Configurações** no menu principal do sistema:

![Acessar configurações de impostos](/config/impostos/acessar-config-imposto.png)

Primariamente, o sistema vem com 4 configurações, uma para cada operação onde a incidência do imposto pode variar: **venda de produtos importados**, **venda para consumidor final** e **venda para revenda**, além de uma **geral**, que será aplicada quando não houver configuração específica. O vínculo entre a configuração de imposto e o produto é a [NCM](/glossario#ncm), você informa a faixa de NCM que a regra abrange, e os produtos cuja NCM estiverem dentro dessa faixa, serão vinculados a esta regra. O gráfico abaixo representa como o vínculo é feito: há 3 regras disponíveis, cada uma abrangendo uma faixa de NCM e o produto possui uma NCM que está dentro da faixa abrangida por uma regra.

![Como é feito o vínculo entre produto e tributação do GDOOR WEB](/config/impostos/vinculo-produto-imposto.png =800x)

Deste modo, as 4 configurações iniciais abrangem todos os produtos que forem cadastrados com NCM, pois elas abrangem a faixa de NCM de **0000.00.01** a **9999.99.99**.

De modo semelhante ao vínculo por NCM, o sistema também faz um vínculo pelo [CEST](/glossario#cest). Esse vínculo é uma exceção para especificar a configuração de [Substituição Tributária](/glossario#icms-st).

## Criando uma regra

Para criar uma regra personalizada de tributação, clique no botão de adição no canto inferior direito da tela e será direcionado para o formulário de adição de regra. O GDOOR WEB possui um assistente para criação de regras para facilitar esse processo, abaixo iremos detalhar cada um dos passos desse assistente, que são:

- [Identificação](#identificacao)
- [Vínculos](#vinculos)
- [Tipo de imposto](#tipo-de-imposto)
- [Impostos](#impostos)
- [Revisão](#revisao)

![Assistente de configuração de regra](/config/impostos/formulario.png)

### Identificação

No primeiro passo você precisa definir um **nome** para identificar a regra e o tipo de **operação** que ela vai abranger. No campo **descrição** você pode detalhar o objetivo da regra e em que tipo de situação ela vai se encaixar; é um campo opcional e apenas informativo. As opções de operação são aplicáveis nas seguintes situações, em sua respectiva ordem de prioridade:

- **Produtos importados**: Quando o produto tem origem estrangeira. Isto é indicado pelo campo **Origem** no [cadastro do produto](/cadastros/produtos).
- **Consumidor final**: Quando a NF-e está marcada como operação para consumidor final.
- **Revenda**: Quando a NF-e **não** está marcada como operação para consumidor final.
- **Geral**: Em qualquer operação, <u>desde que não tenha encontrado uma regra específica antes</u>.

> Caso o produto seja uma exceção dentro de uma faixa de NCM, é possível vinculá-lo diretamente a uma regra. Este vínculo direto é feito no cadastro do produto e tem prioridade sobre as outras operações.
{.is-info .gw .gw-note}

### Vínculos

![Vínculos possíveis para a regra](/config/impostos/regra-vinculos.gif)

Neste passo você pode definir se esta regra será vinculada aos produtos por **NCM**, por **CEST** ou se vai deixar **sem vínculo**. Em qualquer uma das 3 opções, a regra ainda pode ser vinculada diretamente ao produto. Caso você escolha vínculo por NCM ou CEST, deve informar quais NCM/CEST vão direcionar para esta regra. Por exemplo, caso você escolha o vínculo por NCM, clique no botão <span class=mat-button>Vincular NCM</span> e, no diálogo que aparecer, informe o código específico ou a faixa de NCM.

![Adicionar vínculo por NCM](/config/impostos/modal-vinculo-ncm.png =400x){.align-left}

Vamos começar identificando as NCM que estarão vinculadas a esta regra. Para isso, clique no botão <span class=mat-button>Vincular NCM</span> e informe o código específico ou a faixa de NCM.

Ao confirmar o sistema verificará se não há conflito com outra regra para a mesma operação. Se duas faixas em regras diferentes para uma mesma operação se interceptarem, será mostrado um alerta e a faixa não poderá ser adicionada. Por exemplo: a **Regra 1**, para operações com **produtos importados** abrange a faixa de NCM **0101.00.00** até **0201.99.99**. A **Regra 2**, também para **produtos importados** abrange de **0200.00.00** até **0299.99.99**. Supondo que um determinado produto tenha a NCM **0200.01.01**, o sistema não saberá qual regra aplicar porque há duas conflitando. Por este motivo, o sistema não pode aceitar que duas regras para a mesma operação dentro da mesma faixa de NCM.

### CEST vinculados
{.clearfix}

O vínculo por CEST será habilitado quando a regra possuir configuração de ICMS ST ([veja mais abaixo](#icms-st)). O padrão de vínculo é o mesmo utilizado para a NCM.

### Tributos

Nesta seção você pode determinar quais impostos serão incidentes sobre os produtos abrangidos por esta regra. Para adicionar um imposto à regra, clique no botão correspondente e uma aba será exibida no painel abaixo para configurar. Para remover o imposto da regra, passe ou mouse sobre a aba e clique sobre o botão Remover (![Remover imposto](/comum/remove.png){.inline}).

#### ICMS

Para adicionar ICMS à regra, clique no botão <span class=mat-button>Configurar ICMS</span> e uma aba será exibida no painel abaixo dele.

Primeiro, você informa o [CST](/glossario#cst)/[CSOSN](/glossario#csosn) padrão para esta regra e com base nesse código serão apresentados os campos que podem ser preenchidos. A imagem a seguir mostra duas opções diferentes de configuração com seus respectivos campos a serem configurados:

![Campos para configuração do ICMS](/config/impostos/config-icms-campos.png)

A tabela de alíquotas possui uma linha para cada UF porque o cenário da tributação pode mudar de acordo com as UF envolvidas, inclusive de acordo com a direção da operação. Se os valores para cada UF forem iguais, ou pelo menos para grande parte iguais, não é necessário preencher linha a linha, você pode preencher uma linha e replicar o valor para todas as outras, ou para as que ainda não foram preenchidas.

![Replicar informação](/config/impostos/icms-replicate.gif)

#### ICMS ST

Se o [CST](/glossario#cst)/[CSOSN](/glossario#csosn) informado na aba **ICMS** indicar que há cobrança de ICMS por **Substituição Tributária**, também será habilitada a configuração de ICMS ST e o vínculo por CEST.

![Configuração de ICMS ST](/config/impostos/config-icms-st.png)

Assim como na configuração de ICMS, a configuração de ICMS ST tem uma tabela com uma linha para cada UF. Por padrão, o sistema já preenche as alíquotas internas de cada UF conforme disposto pela [CONFAZ](/glossario#confaz):

![Tabela de alíquotas do ICMS](/config/impostos/tabela-icms.jpg)

E esta tabela pode ser alterada do mesmo modo como explicado sobre a tabela de configuração do ICMS:

![Campos para configuração do ICMS ST](/config/impostos/config-icms-st-campos.png)

> O sistema traz alguns valores pré-preenchidos para facilitar a configuração. No entanto, é de extrema importância que você consulte a **contabilidade** da empresa para auxiliar nesse processo.
{.is-warning .gw .gw-important}

#### IPI

Para adicionar IPI à regra, clique no botão <span class=mat-button>Configurar IPI</span> e uma aba será exibida no painel abaixo dele.

![Campos para configuração do IPI](/config/impostos/config-ipi.png)

Nesta tela você configura um [CST](/glossario#cst) para as operações de entrada e outro para as operações de saída. Se o código indicar isenção de IPI, será necessário informar o código do enquadramento legal do IPI, que classifica a incidência do imposto. Para obter esse código, você pode buscar uma tabela na internet ou consultar a contabilidade.

Diferentemente do ICMS, que é um imposto **estadual**, o IPI é **federal**, portanto, é o mesmo em todo o país, não havendo necessidade de configurar por UF. Assim, é só preencher a alíquota que pode ser um percentual e que considera o valor da mercadoria, ou no caso de algumas mercadorias, usa-se a **alíquota específica**, que é um valor fixo por unidade do produto.

#### PIS/COFINS

Para adicionar PIS e COFINS à regra, clique no botão <span class=mat-button>Configurar PIS/COFINS</span> e uma aba será exibida no painel abaixo dele.

![Campos para configuração de PIS e COFINS](/config/impostos/config-pis-cofins.png)

Nesta tela você configura um [CST](/glossario#cst) para as operações de entrada e outro para as operações de saída. A base de cálculo é a mesma para os dois tributos, mas a alíquota é específica de cada um.
