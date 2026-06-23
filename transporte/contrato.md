---
title: Contrato de frete
description: Este módulo permite cadastrar, gerenciar e emitir o CIOT (Código Identificador da Operação de Transporte).
published: false
date: 2026-06-23T17:22:18.625Z
tags: transporte, ciot
editor: markdown
dateCreated: 2026-06-22T13:37:14.427Z
---

# Introdução

O módulo **"Contrato de Frete (CIOT)"** permite cadastrar, gerenciar e emitir o **CIOT (Código Identificador da Operação de Transporte)** no Gweb. 

Cada contrato de frete representa uma operação de transporte e centraliza as informações da viagem, incluindo origem, destino, motorista, veículos, carga transportada, valores e forma de pagamento.

A partir do cadastro da viagem, o sistema realiza a integração com a empresa responsável pela emissão do CIOT e acompanha o status do processo.

Com o módulo,  é possível:

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

- **Empresa integradora**: empresa responsável pela emissão do CIOT;
- **Ambiente de emissão**: determina o ambiente utilizado para emissão dos CIOT.
	As opções disponíveis são:	
  - **Homologação**: utilizada para testes;
  - **Produção**: utilizada para emissões com efeito fiscal.
  
> Em caso de dúvidas no preenchimento das informações, consulte a contabilidade da empresa.
{.is-info}

![Configura2.png](/transporte/6-configura2.png)



# Novo contrato de frete (CIOT)

Para criar um contrato, escolha uma das opções:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto superior, ao lado do acesso à "Lista".

![Novo Contrato.png](/transporte/1-novo.png)

O cadastro é dividido em quatro etapas: **Geral**, **Motorista e Veículo**, **Carga e Valores** e **Pagamento**, sendo possível navegar entre elas durante o preenchimento.

> Os campos identificados com asterisco (*) possuem preenchimento obrigatório.
{.is-warning}


## Geral
A aba "Geral" concentra as informações iniciais da viagem e do trajeto. Os campos disponíveis são:

![Geral.png](/transporte/4-geral.png)

- **Status da viagem**: selecione a situação inicial do registro;
- **Tipo da operação**: selecione a modalidade da operação de transporte;
- **Distância da viagem (KM)**: informe a distância total do trajeto em quilômetros;
- **Data da coleta**: cadastre a data e horário da coleta da carga;
- **Previsão de entrega**: informe a data e horário previsto para entrega.

> Quando já existir um trajeto cadastrado com a mesma origem e destino, o campo "Distância da viagem (KM)" será preenchido automaticamente.{.is-info}

### Trajeto

Nas seções **"Origem"** e **"Destino"**, selecione os participantes relacionados ao transporte.

Ao selecionar um cadastro existente, os seguintes dados são preenchidos automaticamente:

- **CNPJ/CPF**;
- **Inscrição Estadual**;
- **Endereço**.

> Caso o cadastro ainda não exista, clique em **"+"** para realizar o registro. {.is-success .gw .gw-tip}

Após concluir o preenchimento, clique em **"Próximo"**.

## Motorista e Veículo

Nesta etapa devem ser informados o motorista e os veículos utilizados na operação. Preencha os campos:

![Motorista e Veículo.png](/transporte/4-motorista-veículo.png)

- **Condutor**: selecione ou cadastre o motorista responsável pela viagem;
> Caso o condutor não esteja cadastrado, clique no botão **"+"** para adicionar. {.is-success .gw .gw-tip}
- **Veículo principal**: veículo de tração utilizado no transporte;
- **Primeira carreta**: informe o primeiro reboque da composição, quando existir;
- **Segunda carreta**: informe o segundo reboque da composição, quando existir.

Em seguida, marque as opções referentes às características da operação:

- **Operação de alto desempenho**: identifica viagens enquadradas como operação de alto desempenho;
- **Retorno vazio**: informa que o veículo retornará sem carga;
- **Composição veicular**: identifica operações com utilização de reboques ou carretas.

> Verifique cuidadosamente o veículo informado antes da emissão. Após a emissão do CIOT, a placa do veículo **não poderá ser alterada**. Em casos de substituição do veículo durante a operação, será necessário cancelar o CIOT emitido e realizar uma nova emissão.{.is-warning}

Após concluir o preenchimento, clique em **"Próximo"**.

## Carga e Valores

Nesta etapa são informadas as características da carga transportada e os valores envolvidos na operação. Preencha os campos:

![Carga e Valores.png](/transporte/4-carga-valores.png)

- **Produto predominante**: principal mercadoria transportada;
- **Natureza da carga**: classificação da carga transportada;
- **Unidade de medida**: unidade utilizada para controle da quantidade;
- **Quantidade**: quantidade transportada;
- **Peso**: peso total da carga;
- **Valor da mercadoria**: valor dos bens transportados;
- **Valor do frete**: valor cobrado pelo transporte;
- **Valor do pedágio**: total dos pedágios previstos para a operação.

> O valor informado no campo **"Valor do frete"** será utilizado como base da operação de transporte.{.is-info}

Após concluir o preenchimento, clique em **"Próximo"**.



## Pagamento
Nesta etapa são configuradas as informações de pagamento do frete. Clique no botão **"+"** e preencha os campos:

> É possível cadastrar múltiplos pagamentos para a mesma viagem quando o valor do frete for dividido entre diferentes contas ou formas de pagamento.{.is-info}

![4-pagamento.png](/transporte/4-pagamento.png)

- Forma de pagamento: forma utilizada para pagamento do frete;
- Instituição financeira: banco da conta de destino;
- Agência: agência bancária;
- Conta: número da conta;
- Tipo de conta: tipo da conta bancária.
- Adicionando múltiplos pagamentos

> Utilize o botão **"+"** localizado na seção "Informações de pagamento" para adicionar novos pagamentos. Esse recurso pode ser utilizado, por exemplo, quando o valor do frete será dividido entre contas diferentes.{.is-success} 

### Trabalhando com parcelas

- Quando a opção "A prazo" estiver habilitada, o sistema disponibilizará a seção "Parcelas" para configuração dos vencimentos.
- Utilize o botão **"+"** para adicionar parcelas.
- Para cada parcela devem ser informadas as seguintes informações:
		Número da parcela;
    Data de vencimento;
    Valor da parcela.
- O ícone <em class="mdi mdi-delete"></em> permite excluir:
		Pagamentos cadastrados;
		Parcelas cadastradas.  

> Antes da emissão, confirme se as configurações da integração foram preenchidas corretamente e se o ambiente selecionado está correto. {.is-warning}


### Salvar

Após concluir o preenchimento das informações, estarão disponíveis duas opções:

- **Salvar**: grava o cadastro da viagem sem realizar a emissão do CIOT. O registro permanecerá com status **"Rascunho"**, permitindo alterações futuras.

> Revise cuidadosamente todas as informações preenchidas nas abas "Geral", "Motorista e Veículo", "Carga e Valores" e "Pagamento".
Caso ainda existam informações pendentes ou que necessitem de conferência, utilize a opção **"Salvar"** para manter o registro como **Rascunho** e concluir o preenchimento posteriormente. {.is-warning}

- **Salvar e emitir CIOT**: grava o cadastro e envia as informações para a integração responsável pela emissão.

> Utilize **"Salvar e emitir CIOT"** somente quando **todos os dados estiverem revisados**, principalmente as informações do veículo..{.is-info}

Quando a emissão for concluída, será gerado o número oficial do CIOT.

# Lista
Na tela **"Lista"**, são exibidos todos os contratos de frete cadastrados. A tela disponibiliza diversos recursos para localização e gerenciamento dos registros.

![3-lista1.png](/transporte/3-lista1.png)

- **Digite para buscar**: pesquisa textual dos registros;
- **Filtrar**: aplica filtros na listagem;
- **Ordenar**: altera a ordenação dos registros;
- **Por página**: define a quantidade de registros exibidos por página;
- **<** e **>**: navegação entre páginas;

Algumas informações exibidas podem variar conforme a situação do contrato de frete. Cada linha da listagem representa uma viagem cadastrada. As informações exibidas, normalmente, são:

![3-lista2.png](/transporte/3-lista2.png)

- **Nº**: identificador interno do registro;
- **Número CIOT**: número oficial gerado na emissão;
- **Origem / Destino**: pessoas relacionadas ao trajeto;
- **Data**: data da operação;
- **Total**: valor total do frete;
- **Motorista**: motorista vinculado à viagem;
- **Veículo**: placa do veículo utilizado no transporte;
- **Status**: situação da viagem e da integração.


## Entendendo os status do CIOT

A listagem apresenta duas colunas de status:![7-status.png](/transporte/7-status.png)

### Status da viagem
- **Rascunho**: indica que o registro foi salvo, porém ainda não foi emitido. Registros nessa situação podem ser editados normalmente;
- **Concluída**: indica que a viagem foi finalizada ou baixada;
- **Cancelada**: indica que a viagem foi cancelada.

### Status da integração
- **Integrado**: indica que os dados foram enviados com sucesso para a integradora e que o número oficial do CIOT foi retornado.

> Uma viagem pode apresentar simultaneamente os status **"Concluída"** e **"Integrado"**. O primeiro representa a situação operacional da viagem e o segundo representa a situação da emissão do CIOT.{.is-info}
