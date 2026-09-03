---
title: Configurações gerais
description: Veja detalhes das configurações gerais do sistema
published: true
date: 2026-09-03T20:17:28.759Z
tags: configurações
editor: markdown
dateCreated: 2020-01-03T19:57:44.951Z
---

# Introdução

As configurações gerais do sistema Gweb podem ser aplicadas em diferentes módulos e operações, como precisão numérica, utilização de serviços, autenticação, comissões, gestão de estoque, parcelamentos e documentos fiscais.

Para acessar, no menu **Configurações** e clique em **Geral**.


A tela abaixo será mostrada:

![configurações_gerais_1.png](/config/gerais/configurações_gerais_1.png)

# Certificado digital

Nesta seção, é possível adicionar o [certificado digital](/glossario#certificado-digital) que será utilizado nos módulos que realizam emissão de documentos fiscais.

Para adicionar o certificado, na seção **Certificado digital**, clique no botão **"Carregar certificado"** e selecione o arquivo do certificado digital **A1** no computador. Em seguida, informe a senha do certificado e confirme a inclusão.

> No momento, o Gweb é compatível com certificado digital do tipo A1.
{.is-warning}


![Configurar Certificado digital](/config/gerais/configurar-certificado.png)

Para remover o certificado digital, clique no X à direita do certificado cadastrado.

# Precisão numérica

Permite configurar a quantidade de casas decimais utilizadas pelo sistema para **quantidades** e **preços**.


> Casas decimais são os números apresentados após a vírgula. Por exemplo, 0,392 possui três casas decimais.
{.is-success}

![precisão numérica](/config/gerais/precisão_numérica.png)

- Quantidade: informa o número de casas decimais utilizadas para as quantidades dos produtos.
- Preço: informa o número de casas decimais utilizadas para os preços dos produtos e serviços.

Após informar os campos, clique em **"Salvar"**.


# Serviços

Configuração para uso de serviços em documentos fiscais.

Clique em "**Habilitar o uso de serviços no sistema**".
Em seguida indique o "**Local padrão do fato gerador do ISS**" que se trata do **local onde o serviço será executado**, isso também será base para geração do imposto (ISS).

![serviços](/config/gerais/serviços.png)

- **Cidade do emissor**: serviço prestado dentro do município do emitente.
- **Cidade do destinatário**: para serviço prestado fora do município, terá como base o município indicado no cadastro do cliente.
- **Cidade específica**: permite definir um município específico como local padrão da prestação do serviço.

Ao selecionar Cidade específica, serão habilitados os campos:

- **UF:** informe o estado correspondente ao local da prestação do serviço.
- **Município:** informe o município onde o serviço será executado.

![cidade específica](/config/gerais/serviços2.png)

Na seção **"Tributação PIS e COFINS"**, defina qual regra de tributação de PIS e COFINS será considerada para os serviços. As opções disponíveis são:
- **Padrão:** utiliza a regra padrão de tributação de PIS e COFINS configurada para o serviço.
- **Com Retenção:** considera a tributação de PIS e COFINS com retenção para o serviço.

![serviços3.png](/config/gerais/serviços3.png)

Após realizar as configurações, clique em **"Salvar"**.

> Para saber mais sobre a configuração de impostos de serviços [clique aqui](/configuracoes/impostos/servicos).
{.is-info}

# Contador

Permite selecionar o contador responsável pela empresa e configurar o envio de lembretes relacionados aos documentos fiscais.

![geral-contador.png](/config/gerais/geral-contador.png)

- **Contador:** permite pesquisar e selecionar o contador cadastrado no sistema. A pessoa selecionada deve possuir o atributo Contador em seu cadastro.

> O contador selecionado também será referenciado na geração do SPED Fiscal. {.is-success}

![geral-contador2.png](/config/gerais/geral-contador2.png)

- **Dia para envio dos documentos:** permite selecionar o dia do mês em que o sistema deverá notificar o usuário para realizar o envio dos documentos fiscais à contabilidade.

Após selecionar a pessoa, clique em **"Salvar"**.

# Autenticação

Ao marcar a opção **"Desativar verificação de IP durante a autenticação no sistema"**, desativa a verificação do endereço IP durante o processo de autenticação.

> A desativação da verificação de IP pode reduzir a segurança do acesso ao sistema. Recomenda-se **utilizar essa opção somente em situações de problemas de conectividade** ou logoffs constantes. 
{.is-warning}

![autenticação](/config/gerais/autenticação.png)

Após alterar a opção, clique em **"Salvar"**.


# Comissões

Determine o comportamento para **geração de comissão dos vendedores** quando houver comissão do **vendedor** e do **produto** simultaneamente na venda.

![comissões](/config/gerais/comissões.png)

Em **Comissão preferencial**, selecione uma das opções disponíveis:

- **Vendedor:** considera a comissão configurada no cadastro do vendedor.
- **Produto:** considera a comissão configurada no cadastro do produto ou serviço.
- **Maior:** considera a maior porcentagem entre as comissões configuradas.
- **Menor:** considera a menor porcentagem entre as comissões configuradas.
- **Ambas:** mantém as comissões configuradas para o vendedor e para o produto ou serviço.

Após selecionar a opção desejada, clique em Salvar.


# Gestão de estoque

**Quantidade negativa de estoque:**

Ao marcar a opção "**permitir estoque negativo**", será possível efetuar movimentações mesmo com quantidades negativas no estoque. Ao desmarcar, é habilitada a opção **avisar quantidade insuficiente no lançamento do produto** para o sistema exibir um aviso no [PDV](/pt-br/movimentos/pdv) e na [NF-e](/pt-br/tutoriais/como-emitir-uma-nfe).

**Avisar quantidade insuficiente no lançamento do produto:**

Ao marcar a opção **Avisar quantidade insuficiente no lançamento do produto**, o GWeb irá bloquear o lançamento de itens que estão com a quantidade negativa. Com ela desmarcada, o GWeb permite lançar, mas bloqueia na transmissão da venda.

**Montar composições automaticamente:**

Ao habilitar a opção **Montar composições automaticamente**, o GWeb passa a montar o produto composto de forma automática sempre que ele for utilizado nos documentos.


Após marcar, clique em <span class="mat-button mdi "> salvar</span>.

# Parcelamentos

Defina como será o comportamento do sistema em vendas parceladas.

- **Data inicial dos parcelamentos**: Define se a primeira parcela deve assumir a data do movimento ou se fica para o próximo período;
- **Prazo mínimo para considerar dia de acerto**: Para clientes que possuem dia de acerto no [cadastro de cliente](/pt-br/cadastros/pessoas);
- **Vencimento em dias úteis**: Define o comportamento do sistema caso a data de vencimento não caia em um dia útil.

![geral-parcelamento.png](/config/gerais/geral-parcelamento.png)
Após configurar como deseja, clique em <span class="mat-button mat-accent"> salvar</span>.



# NF-e/NFC-e

Defina como será o comportamento geral do sistema na NF-e e na NFC-e.

![NFC-e](/config/gerais/nfce.png)

- **Emitir NFC-e no recebimento de parcelas**: Ao **receber uma parcela** no **PDV** ou no **módulo de Receitas**, uma** NFC-e será emitida** referente a esse recebimento.
- **Gerar as TAGs \<CNPJReceb> e \<idTermPag> no XML**: Os campos **CNPJReceb** e **idTermPag** são destinados a informar o **CNPJ do beneficiário** do pagamento e o **Identificador do terminal** de pagamento para fins de **integração do pagamento** com a **emissão do documento** fiscal eletrônico.

Após marcar, clique em <span class="mat-button mat-active"> salvar</span>.


# Configurações gerais dos documentos

Defina como serão as configurações ao salvar os documentos (Orçamento, Pedido, NF-e, PDV, CT-e, NFS-e)

![config_geral_docs.png](/config/gerais/config_geral_docs.png)

 - **Verificar limite ao salvar documentos a prazo:**
 - **Verificar limite ao salvar documentos em todos os tipos de pagamentos:**
 - **Não faturar documentos a prazo para clientes inadimplentes:**
 - **Não faturar para clientes inadimplentes, independentemente da forma de pagamento:**

