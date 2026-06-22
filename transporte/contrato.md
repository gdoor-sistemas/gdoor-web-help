---
title: Contrato de frete
description: Este módulo permite cadastrar, gerenciar e emitir o CIOT (Código Identificador da Operação de Transporte).
published: true
date: 2026-06-22T13:55:10.252Z
tags: transporte, ciot
editor: markdown
dateCreated: 2026-06-22T13:37:14.427Z
---

# Como utilizar o Contrato de Frete (CIOT) no Gweb


# Introdução

O módulo Contrato de Frete (CIOT) permite cadastrar, gerenciar e emitir o CIOT (Código Identificador da Operação de Transporte) diretamente no Gweb, sem necessidade de utilizar sistemas externos.

Cada registro representa uma viagem e concentra em um único local todas as informações relacionadas ao transporte, incluindo dados de trajeto, motorista, veículos, carga, valores e pagamento.

A partir do cadastro da viagem, o sistema realiza a integração com a empresa responsável pela emissão do CIOT e acompanha o status do processo.

Com o módulo é possível:

Cadastrar viagens;
Reaproveitar cadastros já existentes de pessoas, motoristas, veículos e contas;
Emitir o CIOT por integração;
Acompanhar o status das viagens;
Editar registros;
Baixar registros;
Cancelar registros.

Informação: As imagens apresentadas neste artigo foram obtidas em ambiente de desenvolvimento. Os dados exibidos são fictícios.

Acessando o módulo Contrato de Frete

Acesse o módulo "Transporte", clique em "Contrato de frete".

[Inserir imagem do menu Transporte]

Alteração na estrutura do menu

Anteriormente os módulos MDF-e e CT-e ficavam localizados no grupo "Movimentações".

Com a criação do grupo "Transporte", os documentos relacionados ao transporte passaram a ficar organizados em um único local.

Atualmente o grupo "Transporte" reúne:

MDF-e;
CT-e;
Contrato de Frete (CIOT).

Informação: O módulo Contrato de Frete (CIOT) está disponível no grupo "Transporte", juntamente com os demais documentos relacionados ao transporte.

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