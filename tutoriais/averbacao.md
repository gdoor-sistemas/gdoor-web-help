---
title: Averbação
description: 
published: false
date: 2026-09-09T19:33:56.710Z
tags: 
editor: markdown
dateCreated: 2026-09-04T16:56:57.497Z
---

# Averbação de seguro de carga

Listamos neste artigo as orientações para configurar a averbação de seguro de carga no GWeb, realizar o cadastro necessário na AT&M (ATM), definir o envio automático das averbações, configurar o cancelamento automático e utilizar as informações do seguro nos documentos de transporte.

# Introdução

A averbação de seguro é o processo utilizado para comunicar à seguradora os embarques realizados, vinculando as informações da carga à apólice contratada.

Na prática, os dados do transporte são enviados para a plataforma responsável pela averbação. Após o processamento, é gerado um número que identifica aquela averbação e pode ser utilizado nas informações de seguro dos documentos de transporte.

A integração disponível no GWeb é realizada com a AT&M (ATM), permitindo automatizar esse processo a partir da emissão dos documentos.

A AT&M (ATM) disponibiliza soluções de averbação eletrônica integradas aos processos de emissão de documentos fiscais de transporte, como CT-e e NF-e, com a geração do número de averbação utilizado nas operações relacionadas ao MDF-e.

> A averbação não substitui a contratação do seguro. A apólice e a averbação possuem funções diferentes: a apólice estabelece a cobertura contratada, enquanto a averbação comunica os embarques conforme as regras da operação de seguro. {.is-info}

Antes de utilizar a integração no GWeb, é necessário possuir o cadastro e as credenciais de acesso da AT&M (ATM).

# Realizar o cadastro na AT&M (ATM)

Para utilizar a integração, inicialmente é necessário realizar o cadastro junto à [AT&M (ATM)](https://ww2.atmtec.com.br/) e obter as credenciais utilizadas para acessar o serviço de averbação.

![averba1.png](/transporte/averba1.png)

A configuração no GWeb utiliza os mesmos dados disponibilizados para acesso à operação da AT&M (ATM):

- **Usuário;**
- **Senha;**
- **Código ATM.**

A integração depende dessas credenciais para realizar a comunicação entre o GWeb e a AT&M (ATM).

> O GWeb não realiza o cadastro da empresa junto à AT&M (ATM). Antes de configurar a integração, confirme com a AT&M quais dados devem ser utilizados e se o acesso está habilitado para a operação de averbação. {.is-warning}

# Configurar a averbação de seguro
## Ativar o recurso

A averbação de seguro é disponibilizada como um recurso adicional do módulo de MDF-e.

> A ativação pode ser realizada inicialmente em período de teste de 15 dias. Após esse período, a continuidade da utilização depende da ativação do recurso pela revenda. {.is-success}

Acesse o módulo **"Transporte"**, selecione **"MDF-e"** e localize **"Configurações do MDF-e"**. 

![averba2.png](/transporte/averba2.png)


Na seção **"Averbação"**, configure os campos:

![averba3.png](/transporte/averba3.png)

- **Seguradora:** selecione **"ATM"** como integração.
- **Usuário ATM:** identificação utilizada para acesso à AT&M (ATM).
- **Senha ATM:** senha utilizada na autenticação.
- **Código ATM:** código disponibilizado para a operação de averbação.

[INSERIR IMAGEM — Configuração da AT&M, destacando os campos "Usuário", "Senha" e "Código".]

**Salve** a configuração para permitir a comunicação entre o GWeb e a AT&M (ATM).

> Utilize os mesmos dados fornecidos para a operação da empresa na plataforma da AT&M (ATM). Antes de iniciar a utilização, confirme se as credenciais estão corretas e habilitadas para o serviço de averbação.{.is-warning}

# Configurar o envio automático

A configuração permite automatizar o envio quando um documento for autorizado. Marque a opção de **averbação automática** para enviar as informações à AT&M no momento da autorização do documento.

![averba4.png](/transporte/averba4.png)

Com essa configuração ativa, o GWeb realiza automaticamente a solicitação de averbação ao autorizar os documentos compatíveis com o recurso. O processo pode ser utilizado em documentos como:
- **CT-e**;
- **NF-e**;
- **MDF-e**.


> A automação evita a necessidade de realizar individualmente a averbação de cada documento pela plataforma da AT&M. {.is-success}

# Configurar o cancelamento automático da averbação

Também é possível configurar o cancelamento da averbação quando o documento correspondente for cancelado. Marque a opção de **cancelamento automático** para que o GWeb envie a solicitação de cancelamento da averbação quando o documento relacionado for cancelado.

![averba5.png](/transporte/averba5.png) 


Por exemplo, quando um CT-e já averbado for cancelado, o sistema poderá realizar automaticamente o cancelamento da averbação correspondente.

> O funcionamento do cancelamento está relacionado às regras e ao processamento da integração. Valide o retorno da seguradora após a autorização ou cancelamento. O sistema não reenvia automaticamente em caso de instabilidade da API.{.is-warning}

# Configurar as informações do seguro de carga

As configurações de seguro permitem definir os dados da seguradora, do responsável pelo seguro e da apólice que serão utilizados como informações padrão na emissão do MDF-e.

Ainda na tela de **"Configurações do MDF-e"** e localize a seção **"Informações do seguro de carga"**.

![info_seg1.png](/transporte/info_seg1.png){.is-success}

Preencha os campos conforme as informações do seguro:

- **Responsável pelo seguro:** selecione quem é o responsável pelo seguro do transporte. As opções correspondem ao emitente ou ao contratante do serviço de transporte.
- **CNPJ/CPF do responsável pelo seguro:** informe o CNPJ ou CPF da pessoa ou empresa responsável pelo seguro.
- **Nome da seguradora:** informe o nome da empresa responsável pelo seguro.
- **CNPJ da seguradora:** informe o CNPJ da seguradora.
- **Número da apólice:** informe o número da apólice de seguro utilizada no transporte.

> Com a configuração cadastrada, os dados podem ser preenchidos automaticamente durante a emissão dos documentos, reduzindo a necessidade de informar repetidamente informações que normalmente permanecem iguais durante a vigência da apólice. Mantenha o número da apólice sempre atualizado. {.is-info}

**Salve** as informações.


# Realizar a averbação ou cancelamento manualmente

Quando a averbação automática não estiver configurada ou quando for necessário realizar o processo manualmente, acesse a lista de documentos correspondente.

Localize o documento e utilize a opção **"Averbar"**.

![config_mdfe10.png](/transporte/config_mdfe10.png)

O GWeb envia a solicitação para a integração configurada.

Depois da conclusão do processo, o documento passa a apresentar a indicação de que está averbado.

> Caso o documento estiver **"Averdabo"**, a opção disponível será referente ao **cancelamento**. Após o processamento, as informações relacionadas ao cancelamento ficam registradas nos detalhes do documento. {.is-success}
