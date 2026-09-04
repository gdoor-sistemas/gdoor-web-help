---
title: Averbação
description: 
published: false
date: 2026-09-04T17:36:46.602Z
tags: 
editor: markdown
dateCreated: 2026-09-04T16:56:57.497Z
---

# Averbação de seguro de carga

Listamos neste artigo as orientações para configurar a averbação de seguro de carga no GWeb, realizar o cadastro necessário na AT&M, definir o envio automático das averbações, cancelar averbações quando necessário e utilizar as informações do seguro nos documentos de transporte.

# Introdução

A averbação de seguro é o processo utilizado para comunicar à operação de seguro os embarques realizados, vinculando as informações da carga à apólice contratada.

Na prática, a operação informa os dados do transporte para a plataforma responsável pela averbação. Após o processamento, é gerado um número que identifica aquela averbação e pode ser utilizado nas informações de seguro dos documentos de transporte.

A integração disponível no GWeb é realizada com a AT&M, permitindo automatizar esse processo a partir da emissão dos documentos.

A AT&M disponibiliza soluções de averbação eletrônica integradas aos processos de emissão de documentos fiscais de transporte, como CT-e e NF-e, com a geração do número de averbação utilizado nas operações relacionadas ao MDF-e.

> A averbação não substitui a contratação do seguro. A apólice e a averbação possuem funções diferentes: a apólice estabelece a cobertura contratada, enquanto a averbação comunica os embarques conforme as regras da operação de seguro. {.is-info}

Antes de utilizar a integração no GWeb, é necessário possuir o cadastro e as credenciais de acesso da AT&M.

# Realizar o cadastro na AT&M

Para utilizar a integração, inicialmente é necessário realizar o cadastro junto à AT&M e obter as credenciais utilizadas para acessar o serviço de averbação.

A configuração no GWeb utiliza os mesmos dados disponibilizados para acesso à operação da AT&M:

Usuário;
Senha;
Código.

[INSERIR IMAGEM — Portal ou tela da AT&M utilizada para acesso, demonstrando que o cadastro e as credenciais devem ser obtidos antes da configuração no GWeb.]

A integração depende dessas credenciais para realizar a comunicação entre o GWeb e a AT&M.

> O GWeb não realiza o cadastro da empresa junto à AT&M. Antes de configurar a integração, confirme com a AT&M quais dados devem ser utilizados e se o acesso está habilitado para a operação de averbação. {.is-warning}

A AT&M possui uma solução específica para averbação eletrônica de documentos, permitindo integrar o processo de emissão aos serviços de averbação.

# Como funciona a averbação de seguro

A averbação funciona como a comunicação das informações de um embarque à operação responsável pelo seguro.

Os dados da carga e do transporte são enviados para processamento e, quando a averbação é realizada, é gerado um número que identifica aquela operação.

Esse número pode ser utilizado nas informações de seguro dos documentos de transporte.

O processo automatizado reduz a necessidade de acessar separadamente a plataforma de averbação para registrar manualmente cada operação.

[INSERIR IMAGEM — Fluxo ilustrativo: emissão do documento no GWeb → envio das informações para a AT&M → processamento da averbação → retorno do número de averbação.]

A integração com a AT&M permite que esse processo seja realizado a partir da emissão dos documentos configurados no sistema.

A legislação e as regras do seguro devem ser observadas conforme a operação e a cobertura contratada. Documentos como CT-e e MDF-e possuem funções fiscais distintas: o CT-e documenta digitalmente a prestação do serviço de transporte, enquanto o MDF-e vincula os documentos fiscais à operação de transporte.

# Configurar a averbação de seguro
## Ativar o recurso

A averbação de seguro é disponibilizada como um recurso adicional do módulo de MDF-e.

A ativação pode ser realizada inicialmente em período de teste de 15 dias. Após esse período, a continuidade da utilização depende da ativação do recurso pela revenda.

Acesse o módulo "MDF-e", selecione "Configurações" e localize a seção "Averbação de seguro".

[INSERIR IMAGEM — Tela de configurações do MDF-e, destacando a seção ou o recurso "Averbação de seguro".]

Selecione a opção disponível para ativar o recurso.

Com o recurso ativo, será possível configurar a integração com a plataforma de averbação.

> Inicialmente, a integração de averbação disponível no recurso é realizada com a AT&M. {.is-info}

## Configurar a integração com a AT&M

Depois de ativar o recurso, acesse novamente as configurações do MDF-e e localize a seção "Averbação de seguro".

[INSERIR IMAGEM — Configuração da averbação, mostrando as opções de integração disponíveis.]

Selecione "AT&M" como integração.

Em seguida, informe as credenciais obtidas durante o cadastro na plataforma:

Usuário: identificação utilizada para acesso à AT&M.
Senha: senha utilizada na autenticação.
Código: código disponibilizado para a operação de averbação.

[INSERIR IMAGEM — Configuração da AT&M, destacando os campos "Usuário", "Senha" e "Código".]

Salve a configuração para permitir a comunicação entre o GWeb e a AT&M.

> Utilize os mesmos dados fornecidos para a operação da empresa na plataforma da AT&M. Antes de iniciar a utilização, confirme se as credenciais estão corretas e habilitadas para o serviço de averbação.{.is-success}

# Configurar o envio automático

Depois de configurar as credenciais da AT&M, defina como as averbações serão realizadas.

A configuração permite automatizar o envio quando um documento for autorizado.

[INSERIR IMAGEM — Configuração da averbação, destacando a opção de realizar automaticamente a averbação após a autorização do documento.]

Marque a opção de averbação automática para enviar as informações à AT&M no momento da autorização do documento.

Com essa configuração ativa, o GWeb realiza automaticamente a solicitação de averbação ao autorizar os documentos compatíveis com o recurso.

O processo pode ser utilizado em documentos como:

CT-e;
NF-e;
MDF-e.

Após o processamento, as informações retornadas pela integração ficam disponíveis no documento.

> A automação evita a necessidade de realizar individualmente a averbação de cada documento pela plataforma da AT&M. {.is-info}

# Configurar o cancelamento automático da averbação

Também é possível configurar o cancelamento da averbação quando o documento correspondente for cancelado.

[INSERIR IMAGEM — Configuração da averbação, destacando a opção de cancelamento automático.]

Marque a opção de cancelamento automático para que o GWeb envie a solicitação de cancelamento da averbação quando o documento relacionado for cancelado.

Por exemplo, quando um CT-e já averbado for cancelado, o sistema poderá realizar automaticamente o cancelamento da averbação correspondente.

Essa configuração reduz a necessidade de acessar manualmente cada documento para solicitar o cancelamento da averbação.

> O funcionamento do cancelamento está relacionado às regras e ao processamento da integração. Quando necessário, confirme a situação da averbação e do respectivo cancelamento junto à operação de seguro. {.is-warning}

# Configurar as informações do seguro de carga

Além das configurações da integração, o GWeb permite cadastrar previamente informações do seguro utilizadas com frequência nos documentos de transporte.

Essa configuração evita a necessidade de informar repetidamente os mesmos dados durante a emissão de cada MDF-e.

Acesse o módulo "MDF-e", selecione "Configurações" e localize a seção "Informações do seguro de carga".

[INSERIR IMAGEM — Tela de configurações do MDF-e, destacando a seção "Informações do seguro de carga".]

Informe os dados utilizados nas operações de seguro, como:

Responsável pelo seguro;
Número da apólice;
Seguradora;
CNPJ da seguradora.

[INSERIR IMAGEM — Configuração das informações do seguro de carga, mostrando os campos preenchidos.]

Salve as informações.

Com a configuração cadastrada, os dados podem ser preenchidos automaticamente durante a emissão dos documentos, reduzindo a necessidade de informar repetidamente informações que normalmente permanecem iguais durante a vigência da apólice.

> Mantenha o número da apólice atualizado. Mesmo quando as demais informações permanecem constantes, a apólice possui período de vigência e deve ser revisada sempre que houver alteração na contratação do seguro. {.is-success}

# Utilizar a averbação na emissão dos documentos
## Averbação automática

Com a integração configurada e a averbação automática ativa, o processo é realizado durante a autorização do documento.

[INSERIR IMAGEM — Documento autorizado com indicação de que a averbação foi realizada.]

Quando a averbação for concluída, o GWeb registra as informações retornadas pela integração.

No documento, é possível identificar que a operação foi averbada.

[INSERIR IMAGEM — Lista de CT-e, destacando o indicador de documento averbado.]

O indicador permite identificar rapidamente os documentos que possuem averbação registrada.

## Consultar os dados da averbação

Abra o documento averbado para consultar as informações retornadas pela integração.

[INSERIR IMAGEM — Detalhes do CT-e, destacando o número da averbação.]

Nos detalhes do documento, são disponibilizadas informações como:

Número da averbação;
Número do cancelamento da averbação, quando o cancelamento tiver sido realizado.

Essas informações permitem acompanhar o resultado da integração diretamente pelo documento.

# Realizar a averbação manualmente

Quando a averbação automática não estiver configurada ou quando for necessário realizar o processo manualmente, acesse a lista de documentos correspondente.

Localize o documento e utilize a opção "Averbar".

[INSERIR IMAGEM — Lista de documentos, destacando a opção "Averbar".]

O GWeb envia a solicitação para a integração configurada.

Depois da conclusão do processo, o documento passa a apresentar a indicação de que está averbado.

> Quando o documento já possuir uma averbação registrada, a opção disponível será alterada para permitir o cancelamento da averbação. {.is-info}

# Cancelar uma averbação manualmente

Para cancelar manualmente uma averbação, acesse a lista de documentos e localize o documento que possui a averbação.

[INSERIR IMAGEM — Documento já averbado, destacando a opção "Cancelar averbação".]

Utilize a opção "Cancelar averbação".

O GWeb envia a solicitação de cancelamento pela integração configurada.

Após o processamento, as informações relacionadas ao cancelamento ficam registradas nos detalhes do documento.

[INSERIR IMAGEM — Detalhes do documento, destacando o número da averbação e o número do cancelamento.]

# Utilizar as informações no MDF-e

Durante a emissão de um MDF-e, acesse a seção "Seguro".

[INSERIR IMAGEM — Emissão do MDF-e, destacando a seção "Seguro".]

Quando as informações do seguro e da averbação estiverem disponíveis, o GWeb poderá preencher automaticamente os dados correspondentes.

Isso é especialmente útil quando a operação já possui documentos vinculados que foram averbados anteriormente.

[INSERIR IMAGEM — Seção "Seguro" do MDF-e, destacando o número da averbação preenchido automaticamente.]

As informações configuradas previamente em "Informações do seguro de carga" também podem ser utilizadas para preencher automaticamente os dados recorrentes.

Dessa forma, durante a emissão do MDF-e, é necessário apenas complementar ou conferir as informações específicas da operação.

> Configure previamente os dados utilizados com frequência antes de iniciar as emissões. Dessa forma, informações como responsável pelo seguro, seguradora e número da apólice podem ser reaproveitadas nas novas operações. {.is-success}
