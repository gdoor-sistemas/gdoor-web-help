---
title: Configurações gerais
description: Veja detalhes das configurações gerais do sistema
published: true
date: 2025-10-24T14:31:23.588Z
tags: configurações
editor: markdown
dateCreated: 2020-01-03T19:57:44.951Z
---

# Introdução

Saiba mais sobre as configurações gerais, que serão aplicadas em diversos módulos do sistema Gweb, como precisão numérica, serviços, autenticação, comissões, quantidade negativa de estoque.

Para iniciar, acesse no menu principal: **configurações » geral**.
<!--
Material parcial composição
![configurações_gerais_1.png](/config/gerais/configurações_gerais_1.png)
-->
A tela abaixo será mostrada:
![configurações gerais](/config/gerais/configurações_gerais.png)
# Certificado digital

Nesta seção, você adiciona o [certificado digital](/glossario#certificado-digital) para utilizar em todos os módulos do sistema. Clique em <span class="mat-button mdi "> carregar certificado</span> e selecione o arquivo do certificado digital A1 no computador. Em seguida informe a senha e clique em <span class="mat-button mdi "> ENVIAR</span>.
Para remover o certificado digital, clique no [<em class="mdi mdi-close"></em>] à direita do nome.

![Configurar Certificado digital](/config/gerais/configurar-certificado.png)

> No momento, o GDOOR WEB só é compatível com certificado digital do tipo A1.
{.is-warning}

# Precisão numérica

Determine as casas decimais para **quantidades** e para **preços**.

![precisão numérica](/config/gerais/precisão_numérica.png)

Após informar os campos, clique em <span class="mat-button mat-accent"> salvar</span>.

> Números que ficarão após a vírgula. Exemplo: 0,392 é um número com 3 casas decimais após a vírgula.
{.is-success}

# Serviços

Configuração para uso de serviços em documentos fiscais.

Clique em "**habilitar o uso de serviços no sistema**".
Em seguida indique o "**local padrão do fato gerador do ISS**" que se trata do **local onde o serviço será executado**, isso também será base para geração do imposto (ISS).

![serviços](/config/gerais/serviços.png)

- **Cidade do emissor**: serviço prestado dentro do município do emitente.
- **Cidade do destinatário**: para serviço prestado fora do município, terá como base o município indicado no cadastro do cliente.
- **Cidade específica**: será habilitada a seção para informação do **UF** e **cidade**:

![cidade específica](/config/gerais/serviços2.png)

Após o preenchimento das informações, clique em <span class="mat-button mat-accent mdi "> salvar</span>.

> Para saber mais sobre a configuração de impostos de serviços [clique aqui](/configuracoes/impostos/servicos).
{.is-info}

# Contador

Selecione o contador que irá ser referenciado na geração do [SPED FISCAL](/pt-br/arquivos-fiscais/sped), é necessário que a pessoa tenha o atributo [Contador](/pt-br/cadastros/pessoas#formulário).
Também é possível definir em que **dia do mês** o sistema irá **notificar** o usuário para enviar os **documentos fiscais** a **contabilidade**.

![geral-contador.png](/config/gerais/geral-contador.png)

Após selecionar a pessoa, clique em <span class="mat-button mat-accent"> salvar</span>.

# Comissões

Determine o comportamento para **geração de comissão dos vendedores** quando houver comissão do **vendedor** e do **produto** simultaneamente na venda.

Selecione qual será a **comissão preferencial**: a do cadastro do **vendedor**, do cadastro do **produto**, a porcentagem **mais alta**, a porcentagem **mais baixa** ou se **ambas** (vendedor e produto) serão mantidas.

![comissões](/config/gerais/comissões.png)

Após selecionar, clique em <span class="mat-button mdi "> salvar</span>.

# Gestão de estoque

**Quantidade negativa de estoque:**

Ao marcar a opção "**permitir estoque negativo**", será possível efetuar movimentações mesmo com quantidades negativas no estoque. Ao desmarcar, é habilitada a opção **avisar quantidade insuficiente no lançamento do produto** para o sistema exibir um aviso no [PDV](/pt-br/movimentos/pdv) e na [NF-e](/pt-br/tutoriais/como-emitir-uma-nfe).

**Avisar quantidade insuficiente no lançamento do produto:**

Ao marcar a opção **Avisar quantidade insuficiente no lançamento do produto**, o GWeb irá bloquear o lançamento de itens que estão com a quantidade negativa. Com ela desmarcada, o GWeb permite lançar, mas bloqueia na transmissão da venda.

<!--
Material parcial composição
**Montar composições automaticamente:**

Ao marcar a opção **Montar composições automaticamente**, o GWeb irá montar automaticamente o produto composto quado este for utilizado nos documentos.
-->

Após marcar, clique em <span class="mat-button mdi "> salvar</span>.

# Parcelamentos

Defina como será o comportamento do sistema em vendas parceladas.

- **Data inicial dos parcelamentos**: Define se a primeira parcela deve assumir a data do movimento ou se fica para o próximo período;
- **Prazo mínimo para considerar dia de acerto**: Para clientes que possuem dia de acerto no [cadastro de cliente](/pt-br/cadastros/pessoas);
- **Vencimento em dias úteis**: Define o comportamento do sistema caso a data de vencimento não caia em um dia útil.

![geral-parcelamento.png](/config/gerais/geral-parcelamento.png)
Após configurar como deseja, clique em <span class="mat-button mat-accent"> salvar</span>.

# Autenticação

Ao marcar esta opção, a verificação de IP para autenticar-se no sistema será **desativada**.

> Ativar esta configuração pode ser um risco à segurança dos dados da empresa. 
{.is-danger}

Sugerimos que a **utilize somente em caso de problemas** de conectividade ou logoffs constantes.

![autenticação](/config/gerais/autenticação.png)

Após marcar, clique em <span class="mat-button mat-accent"> salvar</span>.

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

