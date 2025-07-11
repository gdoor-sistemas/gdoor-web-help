---
title: Cadastro de pessoas
description: Veja como funciona o cadastro de clientes, fornecedores e outras pessoas para trabalhar com o Gweb
published: true
date: 2025-07-03T13:07:03.926Z
tags: cadastros, pessoas, visão geral
editor: markdown
dateCreated: 2020-01-03T11:35:26.037Z
---

# Cadastro de pessoas

O cadastro de pessoas no Gweb é unificado. Isso significa que no mesmo lugar, você cadastra **cliente**, **fornecedor**, **vendedor**, **transportador**, **condutor**, **contador** e **intermediador/marketplace** da operação. Não só é possível cadastrar no mesmo lugar, como uma só pessoa pode ter todos esses [atributos](#atributos), não sendo necessário repetir cadastros.

# Lista

Ao abrir o módulo de pessoas você verá a lista de todas as que já estão cadastradas. Na parte superior da tela há um quadro com um campo para busca. Você pode procurar determinado cadastro buscando por:

- Digitando apenas números: **código**, **CPF/CNPJ**, **telefone**, **celular** ou **fax**.
- Digitando caracteres mistos: **nome**, **fantasia/apelido**, **CPF/CNPJ**, **telefone**, **celular**, **fax**, **e-mail principal** ou **cidade**.

À direita do campo de busca se encontra o botão para **atualizar a lista** (<em class="mdi mdi-refresh"></em>). 

Na parte superior do quadro que contém a lista, você encontra o controle de paginação, onde pode determinar o tamanho da página e navegar entre páginas de conteúdo.

> O tamanho da página ficará salvo no navegador que você estiver utilizando e será usado em todas as listas.
{.is-info .gw .gw-note}

Ao passar o *mouse* sobre um item da lista, serão exibidos os botões de edição (<em class="mdi mdi-pencil"></em>) e mais opções (<em class="mdi mdi-dots-vertical"></em>). As opções de ação para esta tela são:

- **Ver detalhes**: direciona para a tela de [detalhes](#detalhes);
- **Nova venda**: direciona para a [tela de NF-e](/movimentos/nf-e) com a pessoa já referenciada. Esta opção só estará disponível se a pessoa tiver o [atributo](#atributos) **cliente**;
- **Apagar**: apaga o cadastro sob confirmação. Somente será possível apagar o cadastro se ele não estiver referenciado em outros módulos do sistema.

![Opções do item na lista](/cadastros/pessoas/lista-opcoes.png)

Ao clicar sobre um item dessa lista, você terá uma pré-visualização do cadastro com algumas informações chave:

![Pré-visualização de pessoas](/cadastros/pessoas/preview.png)

A partir desta tela você pode visualizar a ficha cadastral completa da pessoa clicando no botão <span class=mat-button>Mais detalhes</span> ou editar o cadastro, clicando em <span class=mat-button>Editar</span>.

# Detalhes

A tela de detalhes possibilita ter uma visão completa do cadastro:

![Detalhes do cadastro](/cadastros/pessoas/detalhes.png)

No cabeçalho desta tela, você encontra algumas informações básicas do cadastro que são repetidas mais abaixo, mas facilita a visualização rápida. Na direita constam informações das datas de cadastro e alteração, bem como que usuário as executou. No canto superior direito, o menu com mais opções (<em class="mdi mdi-dots-vertical"></em>) permite que você:

- Acesse a tela de edição do cadastro;
- Abra a [tela de NF-e](/movimentos/nf-/formulario) com a pessoa já referenciada. Esta opção só estará disponível se a pessoa tiver o [atributo](#atributos) **cliente**.

![Mais opções](/cadastros/pessoas/mais-opcoes.png)

Logo abaixo do cabeçalho há duas abas: **identificação** e **histórico**. Sempre que você abrir a tela de detalhes, a aba identificação, que contém os dados de cadastro da pessoa, virá aberta por padrão. Na aba Histórico, você encontra os registros relacionados a esta pessoa em outros módulos do sistema.

> Veja detalhes sobre esta seção no tópico [histórico](/cadastros/pessoas/historico).
{.is-info}

# Formulário

O formulário de cadastro será exibido ao **adicionar** ou **atualizar** o cadastro de uma pessoa. Para cadastrar uma pessoa, clique no botão de adição (<em class="mdi mdi-plus"></em>) localizado no canto inferior direito nas telas de [lista](#lista) e [detalhes](#detalhes). A tela de formulário não terá sempre a mesma aparência. Alguns campos são exibidos de acordo com os [atributos](#atributos), e outros de acordo com os dados informados no próprio cadastro.

## Identificação

Neste quadro as informações são para a definição da pessoa. São as informações mais utilizadas pelo sistema.

![Quadro identificação](/cadastros/pessoas/quadro_identificaçãooo.png)

### Atributos

Os atributos são usados para identificar onde a pessoa pode ser referenciada e também para possibilitar informações adicionais ao cadastro.

![Atributos](/cadastros/pessoas/atributos.png)

- **Cliente**: indica que a pessoa pode ser referenciada nas movimentações;
- **Fornecedor**: indica que a pessoa pode ser referenciada nas [compras](/movimentos/compras) e nas [NF-e](/movimetos/nf-e) de entrada;
- **Vendedor**: indica que a pessoa pode ser selecionada como vendedor nos campos apropriados. Habilita o quadro [vendedor](#vendedor);
- **Transportador**: indica que a pessoa poderá ser referenciada como transportadora nos documentos que pedem essa informação;
- **Condutor**: indica que a pessoa poderá ser referenciada como condutor nos documentos que pedem essa informação;
- **Contador**: Indica que a pessoa jurídica poderá ser referenciada como contador para a geração do [SPED Fiscal](/pt-br/arquivos-fiscais/sped);
- **Intermediador**: indica o intermediador da operação, que poderá ser referenciado quando a venda ocorrer por alguma plataforma de terceiro, como marketplaces e deliverys. Para habilitar a seleção e informar o [intermediador](#intermediador), é necessário que seja selecionada a opção **pessoa jurídica**.

Os campos neste quadro variam bastante. A seguir, os campos destacados em **negrito** são os que são exibidos conforme o cenário. 

Se for uma <u>pessoa física</u>, serão mostrados os campos **apelido**, **CPF** e **RG**. 

Se for <u>pessoa jurídica</u>, serão mostrados os campos **nome fantasia**, **CNPJ**, **IE, IM**, **CRT**, **CNAE**, **intermediador/marketplace**, **nome do responsável** e **CPF do responsável**.

Outra possibilidade tem prioridade sobre estas duas: caso a pessoa seja do <u>exterior</u> é mostrado o campo **documento de identificação**.

À direita deste quadro, você pode adicionar uma **imagem** que identifique a pessoa, como por exemplo a logo de um fornecedor ou a foto de um cliente. 
Você também identifica a pessoa como **física** ou **jurídica**, ou seja, uma pessoa real ou uma empresa, respectivamente. Se preferir, no caso de pessoa física, especifique o **gênero**. 

Também é possível inativar um cadastro desmarcando a caixa **ativo**. Isto pode ser utilizado no caso de um cadastro que já foi referenciado e não pode ser excluído, mas você não quer que seja sugerido para referenciar em novos documentos, por exemplo: ao buscar clientes por nome na hora de adicionar na NF-e, os cadastros inativos não serão buscados.

> Para ver mais detalhes sobre a adição de imagens, veja o tópico sobre [imagens](/cadastros/comum/imagens).
{.is-info .gw .gw-note}

### Cliente

Este quadro será exibido quando o [atributo](#atributos) **cliente** estiver marcado.

- **Dia de acerto**: indica o dia do mês em que vencerão as contas geradas para o cliente;
- **Limite de crédito**: limite de crédito do cliente, ele será respeitado de acordo com a [configuração](/pt-br/configuracoes/geral) marcada;
**Valores em atraso:** Valores que este cliente tem em atraso no financeiro;

- **Tabela de preços preferencial**: indica a [tabela de preços](/pt-br/cadastros/produtos#tabelas-de-preços) que deve ser utilizada quando esse cliente for indicado em uma venda.
- **Vendedor do cliente**: indica o vendedor preferencial para este cliente. Esta informação será utilizada nas vendas que serão realizadas para este cliente no GWEB e no GPED.

![Quadro cliente](/cadastros/pessoas/campos-cliente.png)

### Vendedor

Este quadro será exibido quando o [atributo](#atributos) **vendedor** estiver marcado.

- **Comissão para produtos**: Informe o percentual de comissão à vista e à prazo para a venda de produtos;
- **Comissão para serviços**: Informe o percentual de comissão à vista e à prazo para a prestação de serviços.

![campos-vendedor.png](/cadastros/pessoas/campos-vendedor.png)

### Intermediador

Este quadro será exibido quando o [atributo](#atributos) **intermediador** estiver marcado. 

O cadastro da pessoa jurídica deve ser preenchido com todas as informações do intermediador (razão social, CNPJ...) e no quadro indicado na imagem abaixo, inserir o código de identificação do **intermediador/marketplace**, obtido diretamente na plataforma de vendas on-line (marketplace, delivery...)   

![Quadro intermediador](/cadastros/pessoas/intermediador.png)

### Transportador
Este quadro será exibido quando o [atributo](#atributos) **transportador** estiver marcado.

- **RNTRC - Registro Nacional de Transporte Rodoviário de Carga**: é o registro obrigatório para profissionais que exercem atividades ligadas ao transporte rodoviário de carga;
- **Tipo da transportadora**: indica o tipo da empresa transportadora de acordo com a atividade que exerce;
- **Tipo do proprietário**: indica o tipo do proprietário de acordo com o veículo e como ele é fretado.

![Quadro transportador](/cadastros/pessoas/campos-transportadora.png)

### Contador
Este quadro será exibido quando o [atributo](#atributos) **contador** estiver marcado. 

- **CRC**: É o registro regular do contador no Conselho Regional de Contabilidade(CRC).

![Quadro contador](/cadastros/pessoas/campos-contador.png)

## Endereços

No cadastro da pessoa há um endereço principal e pode-se incluir **endereços adicionais** para entrega ou cobrança.
A lista de endereços adicionais cadastrados ficará abaixo do endereço principal.

![Endereços](/cadastros/pessoas/endereços.png)

Para incluir um **endereço adicional**, clique no botão (<em class="mdi mdi-plus"></em>) e a tela para preenchimento do endereço será exibida. Será possível indicar se o endereço é de **entrega** ou **cobrança**, uma descrição para o endereço, assim como os **dados do recebedor**.

![Endereço adicional](/cadastros/pessoas/endereço_adicional.png)

> Para facilitar o preenchimento do endereço, você pode informar primeiro o CEP. Ao sair do campo, o sistema buscará o endereço do CEP, sendo necessário, na maioria das vezes, preencher apenas o número e o complemento.
{.is-success .gw .gw-tip}

## Telefones

Você pode informar três telefones no cadastro principal (**telefone**, **celular** e **fax**) e mais telefones adicionais. Clique no botão (<em class="mdi mdi-plus"></em>) e será exibida uma tela para preenchimento do telefone adicional, que pede uma descrição, por exemplo, "*telefone da fábrica*", e o número. Para remover um telefone adicional incluído, clique no botão **remover** (<em class="mdi mdi-window-close"></em>), ao lado do número.

![Quadro telefones](/cadastros/pessoas/telefoness.png)

## Endereços eletrônicos

Além do e-mail principal e do site, você pode adicionar ao cadastro outros endereços de e-mail, por exemplo, para contato com outros setores ou pessoas. Clique no botão (<em class="mdi mdi-plus"></em>) e será exibida uma tela para preenchimento do e-mail adicional, que pede uma descrição, por exemplo, "*e-mail financeiro*", e o próprio e-mail. Para remover um e-mail adicional incluído, clique no botão **remover** (<em class="mdi mdi-window-close"></em>), ao lado do e-mail.

![Quadro endereços eletrônicos](/cadastros/pessoas/eletronico.png)

## Veículos

Ao marcar na caixa de seleção do cabeçalho da página que a empresa ou pessoa é um **Transportador**, a seção **Veículos** será exibida. Para adicionar um novo veículo, clique no botão (<em class="mdi mdi-plus"></em>) e preencha os campos solicitados.


- **Descrição**: descrição do veículo, é usado para identificar o veículo internamente;
- **Placa**: placa do veículo cadastrado;
- **UF**: unidade Federativa do veículo;
- **RNTRC - Registro Nacional de Transporte Rodoviário de Carga**: é o registro obrigatório para profissionais que exercem atividades ligadas ao transporte rodoviário de carga;
- **Renavam**: número do Renavam do veículo;
- **Tara (kg)**: peso do veículo em kg;
- **Capacidade (kg)**: capacidade de carga do veículo, em kg;
- **Capacidade (m³)**: capacidade do veículo em m³;
- **Tipo de rodado**: tipo do veículo;
- **Tipo de carroceria**: tipo da carroceria do veículo;
- **Reboque**: veículo sem tração própria e depende de outro para se mover.

> O cadastro dos veículos também pode ser realizado no menu [Veículos](/cadastros/veiculos).
{.is-info}


## Observações

Campo livre para preenchimento de informações adicionais. 

![Quadro observações](/cadastros/pessoas/observacoes.png)

