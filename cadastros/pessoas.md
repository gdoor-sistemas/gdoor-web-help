---
title: Cadastro de pessoas
description: Veja como funciona o cadastro de clientes, fornecedores e outras pessoas para trabalhar com o GDOOR WEB
published: true
date: 2020-01-06T14:35:13.085Z
tags: cadastros, pessoas
---

# Cadastro de pessoas

O cadastro de pessoas no GDOOR WEB é unificado. Isso significa que no mesmo lugar, você cadastra **clientes**, **fornecedores**, **transportadoras**, **vendedores** e **funcionários**. Não só é possível cadastrar no mesmo lugar, como uma só pessoa pode ter todos esses atributos, não sendo necessário repetir cadastros.

Ao abrir o módulo de pessoas você verá a lista de todas as que já estão cadastradas. Na parte superior da tela há um quadro com um campo para busca. Você pode procurar determinado cadastro buscando por:

- Digitando apenas números: **código**, **CNPF/CNPJ**, **telefone**, **celular** ou **fax**.
- Digitando caracteres mistos: **nome**, **fantasia/apelido**, **CNPF/CNPJ**, **telefone**, **celular**, **fax** ou **estado (UF)**.

À direita do campo de busca se encontra o botão para atualizar a lista (![Atualizar](/comum/refresh.png){.inline}). Ele pode ser útil para quando a tela ficar parada por um longo tempo, e você queira atualizar a lista de clientes sem perder o que digitou na busca ou ter que atualizar a página inteira. Também pode ser que você esteja aguardando o cadastro ser completado por outro usuário ou outro dispositivo, então terá que atualizar para ver as novas informações.

Na parte superior do quadro que contém a lista, você encontra o controle de paginação, onde pode determinar o tamanho da página e navegar entre páginas de conteúdo.

> O tamanho da página ficará salvo no navegador que você estiver utilizando e será usado em todas as listas.
{.is-success .gw .gw-tip}

Ao passar o *mouse* sobre um item da lista, serão exibidos os botões de edição (![Editar](/comum/edit.png){.inline}) e mais opções (![Mais opções](/comum/more.png){.inline}). As opções de ação para esta tela são:

- **Ver detalhes**: vai para a tela de [detalhes](#detalhes);
- **Nova venda**: vai para a [tela de NF-e](/movimentos/nf-e#formulario) com a pessoa já referenciada. Esta opção só estará disponível se a pessoa tiver o [atributo](#atributos) **cliente**;
- **Apagar**: apaga o cadastro sob confirmação. Somente será possível apagar o cadastro se ele não estiver referenciado em outros módulos do sistema.

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

O formulário de cadastro será exibido quando você for **criar** ou **atualizar** o cadastro de uma pessoa. Para criar uma pessoa, você clica no botão de adição no canto inferior direito nas telas de lista e [detalhes](#detalhes).

![botao-adicionar.png](/cadastros/pessoas/botao-adicionar.png =500x)

A tela de formulário não terá sempre a mesma aparência. Alguns campos são exibidos de acordo com os [atributos](#atributos), e outros de acordo com os dados informados no próprio cadastro.
