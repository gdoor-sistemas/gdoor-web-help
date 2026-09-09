---
title: MDF-e
description: Veja como gerar o Manifesto de Documentos Fiscais eletrônico no Gweb
published: true
date: 2026-09-09T17:52:33.902Z
tags: mdf-e, manifesto, transporte
editor: markdown
dateCreated: 2022-08-08T14:14:20.352Z
---

# Introdução

O MDF-e realiza o **agrupamento dos documentos fiscais transportados na carga** e é utilizado no transporte de mercadorias entre diferentes estados.

O módulo é destinado a micro e pequenas empresas do comércio que possuem veículos próprios para realizar entregas diretamente ao destinatário ou recebedor.

![Visão geral](/movimentos/mdf-e/1_visao_geral.png)

# Novo MDF-e

Para criar um MDF-e, existem duas opções:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial do MDF-e;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no painel lateral do MDF-e, ao lado do acesso à lista.

Todas as opções acima estão indicadas na imagem abaixo:

![Novo MDF-e](/movimentos/mdf-e/novo.png)

Também é possível gerar um MDF-e a partir da **NF-e**. Dessa forma, todas as informações contidas na NF-e serão importadas para o MDF-e:

![NF-e gerar MDF-e](/movimentos/mdf-e/nf-e.gif)

A emissão é dividida em 4 etapas: **Geral**, **Modal rodoviário**, **Documentos** e **Seguro**, sendo possível navegar entre elas.

Veja abaixo os campos disponíveis para preenchimento. Alguns campos não são obrigatórios. Em caso de dúvida, consulte a contabilidade da empresa.

## Aba geral

Esta seção reúne os dados gerais referentes ao transporte e à localização do MDF-e. Os campos disponíveis são:

![Geral](/movimentos/mdf-e/aba_gerall.png)

- **UF**: do início do carregamento (campo obrigatório);
- **Município**: do término do transporte (campo obrigatório);
- **Início da viagem**: data e horário de partida;
- **Unidade de medida:** selecione a unidade utilizada para informar o peso bruto da carga, em KG ou TON (campo obrigatório);
- **Peso bruto**: total da carga;
- **Valor total**: da mercadoria/carga transportada;
- **UF de percurso**: informe as UF a serem percorridas conforme a ordem da rota;
- **Carregamento posterior**: ao marcar o checkbox, será possível transmitir o MDF-e sem informar nenhum "**documento**", possibilitando adicionar "**NF-e por evento**" posterior.
- **Municípios de carregamento**: informe os municípios de carregamento conforme a ordem da rota.

## Aba modal rodoviário

Aba destinada ao cadastro do modal rodoviário, referente ao transporte, produto e participantes do MDF-e.

![Modal rodoviário](/movimentos/mdf-e/aba_modal.png)

- **Veículo**: [veículo](https://help.gdoorweb.com.br/pt-br/cadastros/veiculos) principal da operação (campo obrigatório);
- **Tipo da carga**: selecione entre as opções disponíveis (campo obrigatório);
- **CEP carregamento**: onde foi carregado o MDF-e;
- **CEP descarregamento**: onde será descarregado o MDF-e;
- **Descrição do produto**: predominante na carga (campo obrigatório);
- **Condutores**: adicione o [condutor](https://help.gdoorweb.com.br/pt-br/cadastros/pessoas#atributos) (campo obrigatório);
- **NCM**: informe o NCM do produto predominante;
- **Condutores**: selecione uma pessoa cadastrada como condutora (campo obrigatório);
- **Informações de pagamento:** informe os componentes e a forma de pagamento do transporte;
![19_formulario_pagamento.png](/movimentos/mdf-e/19_formulario_pagamento.png)
- **CIOT**: informe o número do CIOT e CPF/CNPJ do responsável pela geração do CIOT;
- **Reboques**: adicione informações dos reboques;
- **Vale pedágio**: informe o CNPJ do fornecedor do vale pedágio, responsável, comprovante de compra e valor;
![20_vale_pedagio.png](/movimentos/mdf-e/20_vale_pedagio.png)
- **Contratante/tomador**: efetue a busca entre os clientes cadastrados ou cadastre um novo.

## Aba documentos

- **Documentos transportados**: importe o "**XML**" ou informe a "**chave**" dos documentos transportados  (campo obrigatório);
- **Outras informações**: informações adicionais e de interesse do Fisco.

![Documentos](/movimentos/mdf-e/documentoss.png)

## Aba seguro

- **Seguro**: informe o responsável pelo seguro, nome e CNPJ da seguradora, número da apólice e da averbação.

![Seguro](/movimentos/mdf-e/aba_seguro.png)

Para concluir, clique na opção desejada para **salvar** ou **transmitir** o MDF-e.

# Lista

Na lista, são apresentados os MDF-e emitidos. É possível realizar uma **busca** ou aplicar **filtros** para localizar as informações necessárias.

> Na barra superior da lista, está disponível o controle de paginação, que permite definir a quantidade de itens exibidos por página e navegar entre elas pelos botões **< >**.
{.is-info}

As informações mostradas variam de acordo com a situação atual do documento exibido na lista, veja mais detalhes abaixo:

### MDF-e pendente

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Enquanto o MDF-e estiver **pendente**, será possível **editá-lo**. Para isso, clique em **"Editar MDF-e"**.

Para visualizar as "**opções**" clique nos três pontos. Será possível: **Marcar**, **Transmitir**, **Pré-visualizar DAMDF-e**, **Pré-visualizar XML** ou **Excluir**.

![MDF-e pendente](/movimentos/mdf-e/pendente.png)

### Autorizado o uso do MDF-e

Nesta etapa as edições não são permitidas.

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Para visualizar as "**opções**" clique nos três pontos. Será possível: **Marcar**, **Consultar status**, **Encerrar**, **Cancelar**, **Visualizar DAMDF-e** ou **Visualizar XML**.

![Autorizado o uso do MDF-e](/movimentos/mdf-e/autorizado_o_uso.png)

### MDF-e encerrado

Nesta etapa as edições não são permitidas.

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Para visualizar as "**opções**" clique nos três pontos. Será possível: **Marcar**, **Visualizar DAMDF-e** ou **Visualizar XML**.

![MDF-e encerrado](/movimentos/mdf-e/encerrado.png)

### Rejeição

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Enquanto houver **rejeição** do MDF-e será possível **editá-lo**, basta clicar em (<em class="mdi mdi-pencil"></em>) para "**editar MDF-e**".

Para visualizar as "**opções**" clique nos três pontos. Será possível: **Marcar**, **Transmitir**, **Pré-visualizar DAMDF-e**, **<Pré-visualizar XML** ou **Excluir**.

![Rejeição](/movimentos/mdf-e/rejeição.png)

### MDF-e cancelado

Nesta etapa as edições não são permitidas.

Para **duplicar o MDF-e** clique em (<em class="mdi mdi-content-duplicate"></em>).

Para visualizar as "**opções**" clique nos três pontos. Será possível: **Marcar**, **Visualizar DAMDF-e** ou **Visualizar XML**.

![MDF-e cancelado](/movimentos/mdf-e/cancelado.png)

## Buscar

Para localizar um MDF-e, digite a informação desejada no campo de busca indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>).
Para aplicar [filtros](https://help.gdoorweb.com.br/pt-br/transporte/mdf-e#filtrar) aprimorados, clique no botão "**filtrar**" (<em class="mdi mdi-filter"></em>). 
Para ordenar a lista por número ou data de emissão clique em "**ordenar**" (<em class="mdi mdi-sort"></em>).
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).

![Buscar](/movimentos/mdf-e/buscar.png)

## Filtrar

Para fazer um filtro na lista, clique no botão "**filtro**" (<em class="mdi mdi-filter"></em>) e o painel será exibido:

![Filtrar](/movimentos/mdf-e/filtrar.png)

As opções de filtro são:

- **Status**;
- **Data inicial**;
- **Data final**;
- **Veículo tração**;
- **Veículo reboque**;
- **Ambiente de emissão**;
- **UF de início**;
- **Cidade de término**;
- **Tipo de carga**;
- **Condutor**;
- **Contratante/tomador**.

Para aplicar um filtro, clique no botão correspondente. Para removê-lo, clique no botão de **remoção**.

![Aplicar limpar filtros](/movimentos/mdf-e/filtro.png)

Na parte superior do painel de filtros temos os botões:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro. 

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![Opções filtros](/movimentos/mdf-e/mais_opções_filtros.png)

> Sempre que um filtro estiver aplicado, você verá o **botão de filtro na cor laranja**: 
![filtro aplicado](/movimentos/mdf-e/filtro-aplicado.png)
{.is-success .gw .gw-tip}

# Ações

## Contingência

O modo de contingência offline pode ser acessado pelo menu de acesso rápido, localizado à direita da tela, na opção **"Contingência (desativado)"**, ou pelas [configurações do MDF-e](https://help.gdoorweb.com.br/pt-br/transporte/mdf-e#configura%C3%A7%C3%B5es).

![Contingência desativada](/movimentos/mdf-e/desativada.png)

Para ativar o modo de contingência, informe o "**motivo**" e clique em <span class="mat-button mdi "> confirmar</span>.

![Informe o motivo da entrada em contingência](/movimentos/mdf-e/conti.png)

Observe que no menu de acesso rápido a descrição será alterada para "contingência (ativado)".

![Contingência ativada](/movimentos/mdf-e/ativada.png)

A partir desse momento, os MDF-e emitidos receberão a identificação **"MDF-e emitidos em contingência offline"**.

![MDF-e em contingência](/movimentos/mdf-e/mdf-e_em_contingencia.png)

Para sair do modo de contingência, clique em "**contingência (ativado)**" no menu de acesso rápido.

A mensagem abaixo será exibida. Clique em **Transmitir**, para transmitir automaticamente todos os MDF-e gerados em contingência ou em **"Não"** para realizar a transmissão manualmente.

Se desejar permanecer no modo de contingência, clique em **"Cancelar"**.

![Sair contingência](/movimentos/mdf-e/sair_contingencia.png)

## XML do mês

Caso seja necessário enviar os **XMLs** de determinado mês para a **contabilidade**, utilize a opção **"XML do mês"** no GWeb.

![XML do mês](/movimentos/mdf-e/xml_do_mes.png)

Informe o **mês** dos XMLs que deseja separar e, abaixo, marque os documentos fiscais desejados. Selecione também se deseja **baixar o arquivo** ou enviá-lo para o **e-mail da contabilidade** diretamente pelo GWeb. Caso escolha a segunda opção, informe o **nome** e **e-mail** do contador.

Clique na opção **Agendar Envio do XML** para abrir o formulário de agendamento de envio do XML do mês.

![Agendar envio do arquivo XML](/movimentos/mdf-e/agendar_arquivo_xml_mes.png)

- **Dia do mês:** informe o dia em que o arquivo deverá ser gerado e enviado;
- **E-mail**: E-mail de destino do envio dos XMLs;
- **Nome**: Razão social ou nome do destinatário do e-mail;
- **Incluir XML**: Selecione os arquivos que deseja gerar o XML com base nos dados anteriores. 

## Encerrar MDF-e

No menu de acesso rápido, localizado à direita da tela, clique em **"Encerrar MDF-e"**. A tela abaixo será exibida. Informe a "**Chave do documento**", "**Nº protocolo**", "**Município de encerramento**" e clique em **"Confirmar"**.

![Encerrar MDF-e](/movimentos/mdf-e/encerrar.png)

# Configurações 

As configurações do MDF-e são aplicadas a todos os usuários, e somente usuários com permissão podem alterá-las.

> Cada seção possui seu próprio botão **Salvar**. Ao realizar alterações, é necessário salvar individualmente cada seção. {.is-warning}

![config_mdfe1.png](/transporte/config_mdfe1.png)


## Certificado digital

O certificado digital utilizado para emissão do MDF-e deve ser configurado nas ["Configurações gerais"](/configuracoes/geral) do GWEB.

![config_mdfe2.png](/transporte/config_mdfe2.png)

## Ambiente do MDF-e

Nesta seção são configuradas as informações utilizadas na emissão do MDF-e.

![config_mdfe3.png](/transporte/config_mdfe3.png)

- **Série do MDF-e:** informe a série utilizada para emissão do MDF-e.
- **Ambiente de emissão:** define o ambiente utilizado para emissão dos MDF-e:
	- **Homologação:** utilizado para testes. Os MDF-e transmitidos nesse ambiente não possuem validade fiscal.
	- **Produção:** utilizado para as emissões oficiais. Os MDF-e transmitidos nesse ambiente possuem validade fiscal.
- **Nº do próximo MDF-e:** informe um número nesse campo somente quando a empresa já realizava a emissão de MDF-e por outro sistema e for necessário continuar a sequência de numeração.
- **Forma de emissão:** define a forma de emissão do MDF-e. As opções disponíveis são:
	- **Normal.**
	- **Contingência offline.**
  
## Averbação

Nesta seção são configuradas as informações relacionadas à averbação dos documentos fiscais.

![config_mdfe4.png](/transporte/config_mdfe4.png)

- **Seguradora:** selecione a seguradora utilizada para realizar a averbação.

- **Averbar automaticamente o autorizador:** quando habilitada, essa opção realiza automaticamente a averbação do documento quando o autorizador retornar o status.

- **Cancelar averbação automaticamente:** quando habilitada, essa opção permite realizar automaticamente o cancelamento da averbação quando o documento fiscal for cancelado.

> O funcionamento da averbação automática depende da integração configurada com a seguradora. [Clique aqui](/tutoriais/averbacao) para acessar o tutorial completo referente à **"Averbação do seguro"**. {.is-info}

## Informações de seguro padrão do MDF-e

As configurações de seguro permitem definir os dados da seguradora, do responsável pelo seguro e da apólice que serão utilizados como padrão na emissão do MDF-e.

![info_seg1.png](/transporte/info_seg1.png){.is-success}

Preencha os campos conforme as informações do seguro:

- **Responsável pelo seguro:** selecione quem é o responsável pelo seguro do transporte. As opções correspondem ao emitente ou ao contratante do serviço de transporte.
- **CNPJ/CPF do responsável pelo seguro:** informe o CNPJ ou CPF da pessoa ou empresa responsável pelo seguro.
- **Nome da seguradora:** informe o nome da empresa responsável pelo seguro.
- **CNPJ da seguradora:** informe o CNPJ da seguradora.
- **Número da apólice:** informe o número da apólice de seguro utilizada no transporte.

> Com a configuração cadastrada, os dados podem ser preenchidos automaticamente durante a emissão dos documentos, reduzindo a necessidade de informar repetidamente informações que normalmente permanecem iguais durante a vigência da apólice. Mantenha o número da apólice atualizado para evitar divergências nas informações do seguro. {.is-info}

## Opções de e-mail

Nesta seção são configuradas as opções para envio do MDF-e por e-mail.

![config_mdfe5.png](/transporte/config_mdfe5.png)

- **Enviar e-mail automaticamente:** quando habilitada, envia automaticamente o e-mail ao tomador do MDF-e após a autorização do documento.
- **Cópia para o emitente:** quando habilitada, envia uma cópia do e-mail para o endereço do emitente.
- **Anexar PDF:** quando habilitada, adiciona o PDF do MDF-e como anexo ao e-mail.
- **Enviar cópia para os condutores:** quando habilitada, envia uma cópia do e-mail aos condutores informados no MDF-e.

## E-mails padrão

Nesta seção são configurados os modelos de e-mail utilizados no envio dos documentos.

Para alterar o modelo de mensagem, clique em **"Editar"** e cadastre a mensagem correspondente ao e-mail do MDF-e.

![config_mdfe6.png](/transporte/config_mdfe6.png)


## Autorizados a baixar o XML

Nesta seção, informe o CPF ou CNPJ de pessoas ou empresas autorizadas a realizar o download do **XML do MDF-e** pelo site da [SEFAZ](/glossario#sefaz), como, por exemplo, a contabilidade da empresa. 

![config_mdfe7.png](/transporte/config_mdfe7.png)

Os documentos informados aqui serão adicionados em cada MDF-e gerado. Para adicionar um documento, digite o número no campo intitulado "**Adicionar CNPJ/CPF**" e pressione **"Enter"** ou clique no botão à direita (seta). Para visualizar ou excluir documentos já adicionados, clique no botão **"Visualizar"**.

## Impressão do DAMDFe

Nesta seção são configuradas as opções de impressão do DAMDFE.

![config_mdfe8.png](/transporte/config_mdfe8.png)

- **Orientação:** define a orientação utilizada na impressão:
	- Retrato.
	- Paisagem.

- **Fonte:** define a fonte utilizada na impressão. As opções disponíveis são:
	- Times: fonte com serifa.
	- Arial: fonte sem serifa.
	- Courier: fonte monoespaçada.
  
- **Posição da logomarca:** define o posicionamento da logomarca no documento:
	- Centralizada.
	- Esquerda.
	- Direita.


## Informações adicionais

Nesta seção pode ser cadastrada uma mensagem padrão para as informações adicionais dos MDF-e emitidos no GWeb.

![config_mdfe9.png](/transporte/config_mdfe9.png)

> Utilize essa configuração para informações que precisam ser apresentadas de forma padronizada nos MDF-e, evitando a necessidade de informar o mesmo texto manualmente em cada emissão. {.is-success}

## Vídeo

<div class="text-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/-xPeUYkPoWg?si=ysJWaC0r656dKsjG&amp;start=203" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>