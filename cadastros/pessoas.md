---
title: Cadastro de pessoas
description: Veja como funciona o cadastro de clientes, fornecedores e outras pessoas para trabalhar com o GDOOR WEB
published: true
date: 2020-01-06T19:47:16.405Z
tags: cadastros, pessoas
---

# Cadastro de pessoas

O cadastro de pessoas no GDOOR WEB é unificado. Isso significa que no mesmo lugar, você cadastra **clientes**, **fornecedores**, **transportadoras** e **vendedores**. Não só é possível cadastrar no mesmo lugar, como uma só pessoa pode ter todos esses [atributos](#atributos), não sendo necessário repetir cadastros.

## Lista

Ao abrir o módulo de pessoas você verá a lista de todas as que já estão cadastradas. Na parte superior da tela há um quadro com um campo para busca. Você pode procurar determinado cadastro buscando por:

- Digitando apenas números: **Código**, **CNPF/CNPJ**, **telefone**, **celular** ou **fax**.
- Digitando caracteres mistos: **Nome**, **fantasia/apelido**, **CNPF/CNPJ**, **telefone**, **celular**, **fax** ou **estado (UF)**.

À direita do campo de busca se encontra o botão para atualizar a lista (![Atualizar](/comum/refresh.png){.inline}). Ele pode ser útil para quando a tela ficar parada por um longo tempo, e você queira atualizar a lista de clientes sem perder o que digitou na busca ou ter que atualizar a página inteira. Também pode ser que você esteja aguardando o cadastro ser completado por outro usuário ou outro dispositivo, então terá que atualizar para ver as novas informações.

Na parte superior do quadro que contém a lista, você encontra o controle de paginação, onde pode determinar o tamanho da página e navegar entre páginas de conteúdo.

> O tamanho da página ficará salvo no navegador que você estiver utilizando e será usado em todas as listas.
{.is-success .gw .gw-tip}

Ao passar o *mouse* sobre um item da lista, serão exibidos os botões de edição (![Editar](/comum/edit.png){.inline}) e mais opções (![Mais opções](/comum/more.png){.inline}). As opções de ação para esta tela são:

- **Ver detalhes**: Vai para a tela de [detalhes](#detalhes);
- **Nova venda**: Vai para a [tela de NF-e](/movimentos/nf-e#formulario) com a pessoa já referenciada. Esta opção só estará disponível se a pessoa tiver o [atributo](#atributos) **cliente**;
- **Apagar**: Apaga o cadastro sob confirmação. Somente será possível apagar o cadastro se ele não estiver referenciado em outros módulos do sistema.

![Opções do item na lista](/cadastros/pessoas/lista-opcoes.png)

Ao clicar sobre um item dessa lista, você verá uma pré-visualização do cadastro com algumas informações chave:

![Pré-visualização de pessoas](/cadastros/pessoas/preview.png)

A partir desta tela você pode visualizar a ficha cadastral completa da pessoa clicando no botão <span class=mat-button>Mais detalhes</span> ou editar o cadastro, clicando em <span class=mat-button>Editar</span>. Os ícones laranjados ao lado dos campos são links para, caso seu dispositivo de acesso suporte, acessar o aplicativo para fazer ligação telefônica ou enviar e-mail.

## Detalhes

A tela de detalhes possibilita ter uma visão completa do cadastro:

![Detalhes do cadastro](/cadastros/pessoas/detalhes.png)

No cabeçalho dessa tela, você encontra algumas informações básicas do cadastro que são repetidas mais abaixo, mas facilita a visualização rápida. Na direita constam informações das datas de cadastro e alteração, bem como que usuário as executou. No canto superior direiro, o menu com mais opções (![Mais opções](/comum/more.png){.inline}) permite que você:

- Acesse a tela de edição do cadastro;
- Abra a [tela de NF-e](/movimentos/nf-e#formulario) com a pessoa já referenciada. Esta opção só estará disponível se a pessoa tiver o [atributo](#atributos) **cliente**.

![Mais opções.png](/cadastros/pessoas/mais-opcoes.png)

Logo abaixo do cabeçalho há duas abas: **Identificação** e **Histórico**. Sempre que você abrir a tela de detalhes, a aba identificação, que contém os dados de cadastro da pessoa, virá aberta por padrão. Na aba Histórico, você encontra os registros relacionados a esta pessoa em outros módulos do sistema. Veja detalhes sobre esta seção no tópico [Histórico](/cadastros/pessoas/historico).

## Formulário

O formulário de cadastro será exibido quando você for **criar** ou **atualizar** o cadastro de uma pessoa. Para criar uma pessoa, você clica no botão de adição no canto inferior direito nas telas de [lista](#lista) e [detalhes](#detalhes). A tela de formulário não terá sempre a mesma aparência. Alguns campos são exibidos de acordo com os [atributos](#atributos), e outros de acordo com os dados informados no próprio cadastro.

### Identificação

Neste quadro as informações são para a definição da pessoa. São as informações mais utilizadas pelo sistema.

![identificacao.png](/cadastros/pessoas/identificacao.png)

#### Atributos

Os atributos são usados para identificar onde a pessoa pode ser referenciada e também para possibilitar informações adicionais ao cadastro.

![atributos.png](/cadastros/pessoas/atributos.png)

##### Cliente

Indica que a pessoa pode ser referenciada nas [NF-e](/movimentos/nf-e) de saída. Também habilita campos que permitem informar:

- **Dia de acerto**: Usado para gerar o parcelamento, onde as parcelas vencerão no dia informado neste campo;
- **Limite de crédito**: Usado para limitar o valor de vendas a prazo pendentes para o cliente.

![campos-cliente.png](/cadastros/pessoas/campos-cliente.png)

> O **limite de crédito** do cliente não tem como ser aplicado porque o GDOOR WEB não tem módulo financeiro ainda. Assim, não há como saber se o parcelamento pendente já foi quitado ou não. Quando o módulo financeiro for habilitado, a informação presente neste campo será utilizada.
> O parcelamento também não é controlado pelo sistema ainda, no entanto, as parcelas já estão sendo geradas e armazenadas junto com a NF-e.
{.is-danger .gw .gw-important}

##### Fornecedor

Indica que a pessoa pode ser referenciada nas [compras](/movimentos/compras) e nas [NF-e](/movimetos/nf-e) de entrada. Não possui campos para informação adicional.

##### Vendedor

Indica que a pessoa pode ser selecionada como vendedor nos campos apropriados. Habilita os campos:

- **Comissão à vista**: Percentual de comissão para vendas à vista;
- **Comissão a prazo**: Percentual de comissão para vendas à prazo;
- **Percentual máx. desconto**: Máximo de desconto em percentual que um vendedor pode aplicar em um documento. O percentual se aplica em relação ao valor total do documento;
- **Valor máx. desconto**: Máximo de desconto em valor que um vendedor pode aplicar em um documento.

Nos campos de limite de desconto, a seguinte regra se aplica: Se o campo estiver **vazio**, o vendedor não tem limite de desconto. Se o campo estiver **zerado**, o vendedor não poderá aplicar descontos.

![campos-vendedor.png](/cadastros/pessoas/campos-vendedor.png)

> O percentual de comissão **a prazo** não tem como ser aplicado porque o sistema não tem módulo financeiro ainda. Assim, não há como saber se o parcelamento pendente já foi quitado ou não. Quando o módulo financeiro for habilitado, a informação presente neste campo será utilizada.
{.is-danger .gw .gw-important}

##### Transportador

Indica que esta pessoa poderá ser referenciada como transportadora nos documentos que pedem essa informação. Habilita o quadro de veículos, que permite informar os veículos que o transportador usa e facilitar o lançamento dessa informação nos documentos.

![campos-transportador.png](/cadastros/pessoas/campos-transportador.png)

Clique no botão <span class=mat-button>Adicionar veículo</span> para abrir o diálogo de adição de veículo:

![adicionar-veiculo.png](/cadastros/pessoas/adicionar-veiculo.png)

Para editar as informações de um veículo, altere nos campos exibidos na lista mesmo. Para remover um veículo, clique no botão ao lado da descrição (![remove.png](/comum/remove.png){.inline}).