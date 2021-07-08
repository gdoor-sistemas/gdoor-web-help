---
title: Cadastro de pessoas
description: Veja como funciona o cadastro de clientes, fornecedores e outras pessoas para trabalhar com o GDOOR WEB
published: true
date: 2021-07-08T13:13:29.326Z
tags: cadastros, pessoas, visão geral
editor: markdown
dateCreated: 2020-01-03T11:35:26.037Z
---

# Cadastro de pessoas

O cadastro de pessoas no GDOOR WEB é unificado. Isso significa que no mesmo lugar, você cadastra **clientes**, **fornecedores**, **transportadoras**, **vendedores** e **intermediador/marketplace** da operação. Não só é possível cadastrar no mesmo lugar, como uma só pessoa pode ter todos esses [atributos](#atributos), não sendo necessário repetir cadastros.

## Lista

Ao abrir o módulo de pessoas você verá a lista de todas as que já estão cadastradas. Na parte superior da tela há um quadro com um campo para busca. Você pode procurar determinado cadastro buscando por:

- Digitando apenas números: **Código**, **CNPF/CNPJ**, **telefone**, **celular** ou **fax**.
- Digitando caracteres mistos: **Nome**, **fantasia/apelido**, **CNPF/CNPJ**, **telefone**, **celular**, **fax**, **e-mail principal** ou **cidade**.

À direita do campo de busca se encontra o botão para atualizar a lista (![Atualizar](/comum/refresh.png){.inline}). Ele pode ser útil para quando a tela ficar parada por um longo tempo, e você queira atualizar a lista de clientes sem perder o que digitou na busca ou ter que atualizar a página inteira. Também pode ser que você esteja aguardando o cadastro ser completado por outro usuário ou outro dispositivo, então terá que atualizar para ver as novas informações.

Na parte superior do quadro que contém a lista, você encontra o controle de paginação, onde pode determinar o tamanho da página e navegar entre páginas de conteúdo.

> O tamanho da página ficará salvo no navegador que você estiver utilizando e será usado em todas as listas.
{.is-info .gw .gw-note}

Ao passar o *mouse* sobre um item da lista, serão exibidos os botões de edição (![Editar](/comum/edit.png){.inline}) e mais opções (![Mais opções](/comum/more.png){.inline}). As opções de ação para esta tela são:

- **Ver detalhes**: Vai para a tela de [detalhes](#detalhes);
- **Nova venda**: Vai para a [tela de NF-e](/movimentos/nf-e/formulario) com a pessoa já referenciada. Esta opção só estará disponível se a pessoa tiver o [atributo](#atributos) **cliente**;
- **Apagar**: Apaga o cadastro sob confirmação. Somente será possível apagar o cadastro se ele não estiver referenciado em outros módulos do sistema.

![Opções do item na lista](/cadastros/pessoas/lista-opcoes.png)

Ao clicar sobre um item dessa lista, você terá uma pré-visualização do cadastro com algumas informações chave:

![Pré-visualização de pessoas](/cadastros/pessoas/preview.png)

A partir desta tela você pode visualizar a ficha cadastral completa da pessoa clicando no botão <span class=mat-button>Mais detalhes</span> ou editar o cadastro, clicando em <span class=mat-button>Editar</span>.

## Detalhes

A tela de detalhes possibilita ter uma visão completa do cadastro:

![Detalhes do cadastro](/cadastros/pessoas/detalhes.png)

No cabeçalho dessa tela, você encontra algumas informações básicas do cadastro que são repetidas mais abaixo, mas facilita a visualização rápida. Na direita constam informações das datas de cadastro e alteração, bem como que usuário as executou. No canto superior direito, o menu com mais opções (![Mais opções](/comum/more.png){.inline}) permite que você:

- Acesse a tela de edição do cadastro;
- Abra a [tela de NF-e](/movimentos/nf-/formulario) com a pessoa já referenciada. Esta opção só estará disponível se a pessoa tiver o [atributo](#atributos) **cliente**.

![Mais opções](/cadastros/pessoas/mais-opcoes.png)

Logo abaixo do cabeçalho há duas abas: **Identificação** e **Histórico**. Sempre que você abrir a tela de detalhes, a aba identificação, que contém os dados de cadastro da pessoa, virá aberta por padrão. Na aba Histórico, você encontra os registros relacionados a esta pessoa em outros módulos do sistema.

> Veja detalhes sobre esta seção no tópico [histórico](/cadastros/pessoas/historico).
{.is-info}

## Formulário

O formulário de cadastro será exibido quando você for **criar** ou **atualizar** o cadastro de uma pessoa. Para criar uma pessoa, clique no botão de adição no canto inferior direito nas telas de [lista](#lista) e [detalhes](#detalhes). A tela de formulário não terá sempre a mesma aparência. Alguns campos são exibidos de acordo com os [atributos](#atributos), e outros de acordo com os dados informados no próprio cadastro.

### Identificação

Neste quadro as informações são para a definição da pessoa. São as informações mais utilizadas pelo sistema.

![quadro_identificação.png](/cadastros/pessoas/quadro_identificação.png)

#### Atributos

Os atributos são usados para identificar onde a pessoa pode ser referenciada e também para possibilitar informações adicionais ao cadastro.

![Atributos](/cadastros/pessoas/atributos.png)

- **Cliente**: Indica que a pessoa pode ser referenciada nas [NF-e](/movimentos/nf-e), [NFC-e](/movimentos/nfc-e) e [pedido de venda](/movimentos/pedidodevenda);
- **Fornecedor**: Indica que a pessoa pode ser referenciada nas [compras](/movimentos/compras) e nas [NF-e](/movimetos/nf-e) de entrada;
- **Vendedor**: Indica que a pessoa pode ser selecionada como vendedor nos campos apropriados. Habilita o quadro [Vendedor](#vendedor);
- **Transportador**: Indica que a pessoa poderá ser referenciada como transportadora nos documentos que pedem essa informação. Habilita o quadro [Veículos](#veiculos).
- **Intermediador**: Indica o intermediador da operação, que poderá ser referenciado quando a venda ocorrer por alguma plataforma de terceiro, como marketplaces e deliverys. Para habilitar a seleção e informar o [Intermediador](#intermediador), é necessário que seja selecionada a opção **pessoa jurídica**.

Os campos neste quadro variam bastante. A seguir, os campos destacados em **negrito** são os que são exibidos conforme o cenário. 
Se for uma <u>pessoa física</u>, são mostrados os campos **Apelido**, **CPF** e **RG**. 
Se for <u>pessoa jurídica</u>, o campo **Gênero** fica desabilitado e são mostrados os campos **Nome fantasia**, **CNPJ**, **IE, IM**, **CRT**, **CNAE**, **Intermediador/Marketplace**, **Nome do responsável** e **CPF do responsável**. 
Ainda uma outra possibilidade tem prioridade sobre estas duas: caso a pessoa seja do <u>exterior</u> (país diferente do Brasil) é mostrado o campo **Documento de identificação**.

À direita deste quadro, você pode adicionar uma **imagem** que identifique a pessoa, como por exemplo a logo de um fornecedor ou a foto de um cliente. 
Você também identifica a pessoa como **física** ou **jurídica**, ou seja, uma pessoa real ou uma empresa, respectivamente. Se preferir, no caso de pessoa física, especifique o **gênero**. 
Também é possível inativar um cadastro desmarcando a caixa **Ativo**. Isto pode ser utilizado no caso de um cadastro que já foi referenciado e não pode ser excluído, mas você não quer que seja sugerido para referenciar em novos documentos, por exemplo: ao buscar clientes por nome na hora de adicionar na NF-e, os cadastros inativos não serão buscados.

> Para ver mais detalhes sobre a adição de imagens, veja o tópico sobre [Imagens](/cadastros/comum/imagens).
{.is-info .gw .gw-note}

### Vendedor

Este quadro será exibido quando o [atributo](#atributos) **Vendedor** estiver marcado. 

- **Comissão à vista**: Percentual de comissão para vendas à vista;
- **Percentual máx. desconto**: Máximo de desconto em percentual que um vendedor pode aplicar em um documento. O percentual se aplica em relação ao valor total do documento;
- **Valor máx. desconto**: Máximo de desconto em valor que um vendedor pode aplicar em um documento.

Nos campos de máximo de desconto, a seguinte regra se aplica: Se o campo estiver **vazio**, o vendedor não tem limite de desconto. Se o campo estiver **zerado**, o vendedor não poderá aplicar descontos.

![Quadro Vendedor](/cadastros/pessoas/campos-vendedor.png)

### Intermediador

Este quadro será exibido quando o [atributo](#atributos) **Intermediador** estiver marcado. 
O cadastro da pessoa jurídica deve ser preenchido com todas as informações do intermediador (razão social, CNPJ...) e no quadro indicado na imagem abaixo, inserir o código de identificação do **intermediador/marketplace**, obtido diretamente na plataforma de vendas on-line (marketplace, delivery...)   

![intermediador.png](/cadastros/pessoas/intermediador.png)

### Endereços{#enderecos}

No cadastro da pessoa há um endereço principal e você pode incluir endereços adicionais. Clique no botão <span class=mat-button>Adicionar endereço</span> e uma tela para preenchimento do endereço será exibida. A lista de endereços adicionais ficará abaixo do endereço principal.

> Para facilitar o preenchimento do endereço, você pode informar primeiro o CEP. Ao sair do campo, o sistema buscará o endereço do CEP, sendo necessário, na maioria das vezes, preencher apenas o número e o complemento.
{.is-success .gw .gw-tip}

![Quadro Endereços](/cadastros/pessoas/enderecos.png)

### Telefones

Você pode informar três telefones no cadastro principal (**telefone**, **celular** e **fax**) e mais telefones adicionais. Clique em <span class=mat-button>Adicionar telefone</span> e será exibida uma tela para preenchimento do telefone adicional, que pede uma descrição, por exemplo, "*Telefone da fábrica*", e o número. Para remover um telefone adicional incluído, clique no botão Remover (![Remover](/comum/remove.png){.inline}), ao lado do número.

![Quadro Telefones](/cadastros/pessoas/telefones.png)

### Endereços eletrônicos{#emails}

Além do e-mail principal e do site, você pode adicionar ao cadastro outros endereços de e-mail, por exemplo, para contato com outros setores ou pessoas. Clique em <span class=mat-button>Adicionar e-mail</span> e será exibida uma tela para preenchimento do e-mail adicional, que pede uma descrição, por exemplo, "*E-mail financeiro*", e o próprio e-mail. Para remover um e-mail adicional incluído, clique no botão Remover (![Remover](/comum/remove.png){.inline}), ao lado do e-mail.

![Quadro Endereços eletrônicos](/cadastros/pessoas/enderecos-eletronicos.png)

### Veículos{#veiculos}

Este quadro será exibido quando o [atributo](#atributos) **Transportador** estiver marcado. Permite informar os veículos que o transportador usa. O cadastro dos veículos facilita o lançamento dessa informação nos documentos como a [NF-e](/movimentos/nf-e), onde é possível informar veículos.

![Quadro veículos](/cadastros/pessoas/campos-transportador.png)

Clique no botão <span class=mat-button>Adicionar veículo</span> para abrir o diálogo de adição de veículo:

![Diálogo para adicionar veículo](/cadastros/pessoas/adicionar-veiculo.png)

Para editar as informações de um veículo, altere nos campos exibidos na lista mesmo. Para remover um veículo, clique no botão ao lado da descrição (![Remover](/comum/remove.png){.inline}).

### Observações

Campo livre para preenchimento de informações adicionais.

![Quadro observações](/cadastros/pessoas/observacoes.png)

