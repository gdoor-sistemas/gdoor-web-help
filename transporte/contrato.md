---
title: Contrato de frete
description: Este módulo permite cadastrar, gerenciar e emitir o CIOT (Código Identificador da Operação de Transporte).
published: false
date: 2026-06-22T20:39:13.984Z
tags: transporte, ciot
editor: markdown
dateCreated: 2026-06-22T13:37:14.427Z
---

# Introdução

O módulo **Contrato de Frete** permite cadastrar, gerenciar e emitir o **CIOT (Código Identificador da Operação de Transporte)** no Gweb. 

Cada registro representa uma viagem e concentra em um único local todas as informações relacionadas ao transporte, incluindo dados de trajeto, motorista, veículos, carga, valores e pagamento.

A partir do cadastro da viagem, o sistema realiza a integração com a empresa responsável pela emissão do CIOT e acompanha o status do processo.

Com o módulo é possível:

- **Cadastrar viagens**;
- **Reaproveitar cadastros já existentes de pessoas, motoristas, veículos e contas**;
- **Emitir o CIOT por integração**;
- **Acompanhar o status das viagens**;
- **Editar registros**;
- **Baixar registros**;
- **Cancelar registros**.

Para acessar o módulo, clique no menu **"Transporte"** e escolha **"Contrato de frete"**.

![Novo Contrato.png](/transporte/1-novo.png)




# Configurando a emissão de CIOT

Antes de emitir o primeiro CIOT, é necessário configurar a integração responsável pela emissão. Clique em "Configurações do CIOT" no lado direito da tela.

![5-configura.png](/transporte/5-configura.png)

Preencha os campos conforme necessário:

- **Empresa integradora**: empresa responsável pela emissão do CIOT. Exemplo: ANTT (frota própria);
- **Ambiente de emissão**: determina o ambiente utilizado para emissão dos CIOTs.
	As opções disponíveis são:	
  - **Homologação**: utilizada para testes;
  - **Produção**: utilizada para emissões com efeito fiscal.
  
> Em caso de dúvidas no preenchimento das informações, consulte a contabilidade da empresa.
{.is-info}

![Configura2.png](/transporte/6-configura2.png)


# Novo contrato de frete (CIOT)

Acesse o módulo **"Transporte"** e clique em **"Contrato de frete"**.

![Novo Contrato.png](/transporte/1-novo.png)

Para criar um contrato, escolha uma das opções:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto superior, ao lado do acesso à "Lista".


A emissão é dividida em 4 abas: **geral**, [geral](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-geral), [modal rodoviário](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-modal-rodovi%C3%A1rio), [documentos](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-documentos) e [seguro](https://help.gdoorweb.com.br/pt-br/movimentos/mdf-e#aba-seguro), sendo possível navegar entre elas. 
Veja abaixo os campos para preenchimento, alguns campos não são obrigatórios, em caso de dúvida é possível consultar o contador da sua empresa.

## Aba geral

Aba destinada aos dados gerais referentes ao transporte e localização do MDF-e, os campos disponíveis nesta aba são:

![Geral](/movimentos/mdf-e/aba_gerall.png)

- **UF**: do início do carregamento (campo obrigatório);
- **Município**: do término do transporte (campo obrigatório);
- **Início da viagem**: data e horário de partida;
- **Unidade de medida**: peso bruto da carga KG ou TON (campo obrigatório);
- **Peso bruto**: total da carga;
- **Valor total**: da mercadoria/carga transportada;
- **UF de percurso**: informe as UF a serem percorridas conforme a ordem da rota;
- **<em class="mdi mdi-checkbox-blank-outline"></em> Carregamento posterior**: ao marcar o checkbox, será possível transmitir o MDF-e sem informar nenhum "**documento**", possibilitando adicionar "**NF-e por evento**" posterior.
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
- **Condutores**: Selecione uma pessoa cadastrada como condutora.
- **Informações de pagamento**: inclua os componentes do pagamento e a forma de pagamento do transporte;
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

Para concluir, clique na opção desejada <span class="mat-button mdi "> salvar e transmitir</span> ou apenas <span class="mat-button mat-accent mdi "> salvar</span> o MDF-e.

# Lista

Na lista, será exibida a listagem de todos os contratos de frete cadastrados, podendo efetuar uma **busca**, **filtrar** informações para visualizar apenas dados que necessita, **ordenar** a listagem ou **atualizar** as informações.

> Na barra superior do quadro lista, temos o controle de paginação, que permite escolher a quantidade de itens que serão exibidos "Por página", além de poder navegar entre elas **< >**.
{.is-info}

![3-lista1.png](/transporte/3-lista1.png)

As informações mostradas variam de acordo com a situação atual do documento exibido na lista. Cada linha da listagem representa uma viagem cadastrada. As informações exibidas, normalmente, são:

![3-lista2.png](/transporte/3-lista2.png)

- **Nº**: identificador interno do registro;
- **Número CIOT**: número oficial gerado na emissão;
- **Origem / Destino**: pessoas relacionadas ao trajeto;
- **Data**: data da operação;
- **Total**: valor total do frete;
- **Motorista**: motorista vinculado à viagem;
- **Veículo**: placa do veículo utilizado no transporte;
- **Status**: situação da viagem e da integração.


















































Configurando a emissão de CIOT

Antes de emitir o primeiro CIOT, é necessário configurar a integração responsável pela emissão.

Acesse o módulo "Transporte", clique em "Contrato de frete", selecione "Configurações" e clique em "Configurações do CIOT".

[Inserir imagem da tela Configurações do CIOT]

Preencha os campos conforme necessário:

Empresa integradora: empresa responsável pela emissão do CIOT. Exemplo: ANTT (frota própria);
Ambiente de emissão: determina o ambiente utilizado para emissão dos CIOTs.

As opções disponíveis são:

Homologação: utilizada para testes;
Produção: utilizada para emissões reais.

Após concluir o preenchimento, clique em "Salvar".

Alerta: Utilize o ambiente Homologação para validar o fluxo de emissão sem gerar CIOTs reais.

Alerta: Altere para Produção somente quando estiver preparado para realizar emissões válidas de viagens reais.

Conhecendo a listagem do módulo

Ao acessar o módulo, será exibida a listagem de todos os contratos de frete cadastrados.

[Inserir imagem da listagem]

Cada linha da listagem representa uma viagem cadastrada.

As informações exibidas são:

Nº: identificador interno do registro;
Número CIOT: número oficial gerado na emissão;
Origem / Destino: pessoas relacionadas ao trajeto;
Data: data da operação;
Total: valor total do frete;
Motorista: motorista vinculado à viagem;
Veículo: veículo utilizado no transporte;
Status: situação da viagem e da integração.
Ferramentas disponíveis na listagem

A tela disponibiliza diversos recursos para localização e gerenciamento dos registros.

Digite para buscar: pesquisa textual dos registros;
Filtrar: aplica filtros na listagem;
Ordenar: altera a ordenação dos registros;
Por página: define a quantidade de registros exibidos por página;
< e >: navegação entre páginas;
Botão "+": criação de um novo contrato de frete.

No painel lateral também estão disponíveis os atalhos:

Acesso > Lista
Configurações > Configurações do CIOT
Cadastrando um novo Contrato de Frete (CIOT)

Para criar um novo CIOT, clique no botão "+" localizado na parte inferior da tela.

O cadastro é dividido nas seguintes etapas:

Geral;
Motorista e Veículo;
Carga e Valores;
Pagamento.
Aba Geral

A aba "Geral" concentra as informações iniciais da viagem e do trajeto.

[Inserir imagem da aba Geral]

Dados da viagem

Preencha os campos conforme necessário:

Status da viagem: situação inicial do registro. Exemplo: Rascunho;
Tipo da operação: modalidade do CIOT. Exemplo: Operação Carga Lotação;
Distância da viagem (KM): distância total do trajeto em quilômetros;
Data da coleta: data e horário da coleta da carga;
Previsão de entrega: data e horário previstos para entrega.

Informação: Quando já existir um trajeto cadastrado com a mesma origem e destino, o campo "Distância da viagem (KM)" será preenchido automaticamente.

Origem e Destino

Nas seções "Origem" e "Destino", selecione as pessoas relacionadas ao transporte.

O sistema reutiliza os cadastros já existentes.

Ao selecionar uma pessoa, os seguintes dados são preenchidos automaticamente:

CNPJ/CPF;
Inscrição Estadual;
Endereço.

Também é possível:

Utilizar a lupa para localizar um cadastro existente;
Utilizar o botão "+" para cadastrar uma nova pessoa sem sair da tela.

Informação: Os campos identificados com "*" são obrigatórios.

Após concluir o preenchimento da aba, clique em "Próximo".

Aba Motorista e Veículo

Nesta etapa devem ser informados o motorista e os veículos utilizados na operação.

[Inserir imagem da aba Motorista e Veículo]

Preencha os campos:

Condutor: motorista responsável pela viagem;
Veículo principal: veículo de tração utilizado no transporte;
Primeira carreta: primeiro reboque da composição, quando existir;
Segunda carreta: segundo reboque da composição, quando existir.

Informação: Ao selecionar o condutor, o CPF será exibido automaticamente.

Também é possível:

Utilizar a lupa para localizar motoristas já cadastrados;
Utilizar o botão "+" para cadastrar um novo motorista.
Características da operação

Marque as opções conforme a operação realizada:

Operação de alto desempenho;
Retorno vazio;
Composição veicular.
Significado das opções
Operação de alto desempenho: identifica operações enquadradas nessa modalidade;
Retorno vazio: informa que o veículo retornará sem carga;
Composição veicular: identifica operações com utilização de reboques ou carretas.

Alerta: Verifique cuidadosamente o veículo informado antes da emissão.

Alerta: Depois que o CIOT for integrado, a placa do veículo não poderá ser alterada. Em situações de troca de veículo ou quebra durante a viagem, será necessário cancelar o CIOT e emitir um novo registro.

Após concluir o preenchimento, clique em "Próximo".

Aba Carga e Valores

Nesta etapa são informadas as características da carga transportada e os valores envolvidos na operação.

[Inserir imagem da aba Carga e Valores]

Preencha os campos:

Produto predominante: principal mercadoria transportada;
Natureza da carga: classificação da carga transportada;
Unidade de medida: unidade utilizada para controle da quantidade;
Quantidade: quantidade transportada;
Peso: peso total da carga;
Valor da mercadoria: valor dos bens transportados;
Valor do frete: valor cobrado pelo transporte;
Valor do pedágio: valor dos pedágios relacionados à viagem.

Informação: O campo "Valor do frete" compõe o valor total da operação de transporte.

Após concluir o preenchimento, clique em "Próximo".

Aba Pagamento

Nesta etapa são configuradas as informações de pagamento do frete.

[Inserir imagem da aba Pagamento]

O sistema permite cadastrar um ou mais pagamentos para a mesma viagem.

Dados do pagamento

Preencha os campos:

Forma de pagamento: forma utilizada para pagamento do frete;
Instituição financeira: banco da conta de destino;
Agência: agência bancária;
Conta: número da conta;
Tipo de conta: tipo da conta bancária.
Adicionando múltiplos pagamentos

Utilize o botão "+" localizado na seção "Informações de pagamento" para adicionar novos pagamentos.

Esse recurso pode ser utilizado, por exemplo, quando o valor do frete será dividido entre contas diferentes.

Trabalhando com parcelas

Quando a opção "A prazo" estiver habilitada, o sistema disponibilizará a seção "Parcelas".

Utilize o botão "+" para adicionar parcelas.

Para cada parcela devem ser informadas as seguintes informações:

Número da parcela;
Data de vencimento;
Valor da parcela.

O ícone de lixeira permite excluir:

Pagamentos cadastrados;
Parcelas cadastradas.
Salvando ou emitindo o CIOT

Ao concluir o preenchimento da aba "Pagamento", estarão disponíveis duas opções.

Salvar

A opção "Salvar" grava o cadastro da viagem sem realizar a emissão do CIOT.

O registro permanecerá com status "Rascunho", permitindo alterações futuras.

Salvar e emitir CIOT

A opção "Salvar e emitir CIOT" grava o cadastro e envia as informações para a integração responsável pela emissão.

Quando a emissão for concluída, será gerado o número oficial do CIOT.

Dica: Utilize a opção "Salvar" enquanto existirem pendências ou informações que ainda precisam ser conferidas.

Dica: Utilize "Salvar e emitir CIOT" somente quando todos os dados estiverem revisados.

Alerta: Antes da emissão, confirme se as configurações da integração foram preenchidas corretamente e se o ambiente selecionado está correto.

Alerta: Sem a configuração da integração, a emissão do CIOT não poderá ser executada.

Entendendo os status do CIOT

A listagem apresenta dois tipos de status:

Status da viagem;
Status da integração.
Status da viagem
Rascunho

Indica que o registro foi salvo, porém ainda não foi emitido.

Registros nessa situação podem ser editados normalmente.

Concluída

Indica que a viagem foi finalizada ou baixada.

Cancelada

Indica que a viagem foi cancelada.

Status da integração
Integrado

Indica que a viagem foi enviada com sucesso para a empresa responsável pela emissão e que o número oficial do CIOT foi gerado.

Informação: Uma viagem pode apresentar simultaneamente os status "Concluída" e "Integrado". O primeiro representa a situação operacional da viagem e o segundo representa a situação da emissão do CIOT.

Os registros podem ser consultados a qualquer momento na listagem do módulo. Enquanto estiverem em situação compatível, também será possível realizar edições, baixas e cancelamentos conforme as regras do processo operacional.


