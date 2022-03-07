---
title: Nota Fiscal de Consumidor eletrônica
description: Veja como funciona o módulo de NFC-e no GDOOR WEB
published: true
date: 2022-03-07T11:39:38.028Z
tags: estoque, movimentos, nfc-e, visão geral
editor: markdown
dateCreated: 2020-08-05T19:18:19.255Z
---

# Introdução

O módulo de NFC-e do GDOOR WEB é o recurso que o sistema tem para ser usado como PDV. É totalmente online, o que significa que será necessário ter uma conexão com a internet para poder usá-lo. O módulo foi desenvolvido visando a praticidade do uso, para que o operador possa utilizar as funções mais importantes sem utilizar o mouse.

Veja uma série de vídeos que fornecem uma visão geral sobre o módulo de NFC-e:

<div class=text-center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLtTr046tMpDsgQ9YIG1F3UEUSG7LX9w7Z" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Na tela inicial você pode rapidamente acessar funções básicas como: **abrir** uma venda, acessar a **lista** de NFC-e, fazer uma **sangria** ou **suprimento** ou ainda, acessar as **configurações**. Você também pode personalizar a tela inicial, de modo que ao entrar no módulo de NFC-e, outra tela seja aberta por primeiro, como a lista ou uma nova venda ([Veja como fazer](/movimentos/nfc-e/preferencias)).

O módulo de NFC-e foi tratado para se adaptar ao modo **tela cheia**, assim, ao usar PDV, o operador pode ficar sem distrações. Para entrar ou sair do modo tela cheia, você pode clicar no botão [<i class="mdi mdi-fullscreen"></i> ou <i class="mdi mdi-fullscreen-exit"></i>] na barra superior ou pressionar a tecla <kbd>F11</kbd>.

Em todas as telas da NFC-e, você verá na área central superior uma barra que contém: na esquerda, o título da tela que identifica onde você está; na direita, ações disponíveis na tela atual, e o botão para alternar o modo tela cheia.

![Barra superior da NFC-e](/movimentos/nfce/barra-superior-nfce.png)

# Nova NFC-e

Todas as ações disponíveis para o lançamento estão disponíveis por atalho e por algum lugar clicável na tela, possibilitando o uso prático tanto em um computador, mesmo que só com o teclado, quanto em um dispositivo com tela de toque, como um tablet, por exemplo.

Se preferir, veja um vídeo que mostra alguns detalhes de como lançar uma NFC-e:

<div class=text-center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2PUfV6476j0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Para criar uma nova NFC-e, você pode:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial da NFC-e;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso à lista, no painel lateral da NFC-e;
- Clicando na opção no meio da tela inicial;
- Pressionando a tecla <kbd>F2</kbd>.

Todas as opções acima estão indicadas na imagem abaixo:

![Opções para criar NFC-e](/movimentos/nfce/nfce-opcoes-criacao.png)

## Adicionando produtos

Você pode lançar um produto informando o **código**, **código de barras** ou buscando pela **descrição**. Se você digitar apenas números e pressionar <kbd>Enter</kbd> o sistema imediatamente tentará encontrar um produto com esse código ou com esse código de barras. Se digitar caracteres não numéricos, será feita uma busca e os resultados serão apresentados para você escolher:

![Busca de produtos na NFC-e](/movimentos/nfce/nfce-busca-produtos.png)

> Nesta busca, também serão considerados os kits de produtos, caso você tenha cadastrado.
{.is-info}

> Não é necessário que o campo de busca esteja com o foco para você lançar o produto, o foco só precisa estar em algum lugar da página. Basta você digitar qualquer coisa e o sistema automaticamente joga o foco para o campo de busca.
{.is-success .gw .gw-tip}

### Buscando pela referência

No cadastro de produtos há um campo chamado **Referência**. Ele existe para que você possa informar um código pelo qual a sua empresa já controlava o produto e não está no padrão de código de barras, uma vez que o código no GDOOR WEB é sequencial e inalterável.

Para adicionar o produto pela referência, basta digitar um ponto (.) e o código da referência, depois pressionar <kbd>Enter</kbd>.

> É possível imprimir etiquetas com a referência em código de barras no padrão UPC, que aceita caracteres não numéricos. Se você gerar a etiqueta com o ponto e o código de referência, poderá usar o leitor de código de barras para adicionar o produto na NFC-e.
{.is-success .gw .gw-tip}

## Adicionando kits de produtos

Caso você tenha cadastrado [kits de produtos](/cadastros/produtos/kits), você poderá lançar seus produtos na NFC-e. Para isso, digite o caractere <kbd>+</kbd>. Se você souber o código numérico do kit, poderá informá-lo e pressionar <kbd>Enter</kbd> para lançar imediatamente. Caso contrário, digite caracteres não numéricos e o sistema mostrará os resultados de kits encontrados:

![Busca de kits de produtos na NFC-e](/movimentos/nfce/nfce-busca-kits.png)

> Apesar de o sistema já trazer os kits na busca por produtos, pode ser interessante usar o <kbd>+</kbd> para buscar **apenas** kits.
{.is-success .gw .gw-tip}

## Adicionando serviços

Para poder adicionar serviços na NFC-e, você precisa habilitar o uso de serviços no sistema nas [configurações](/configuracoes/geral), e depois [cadastrar os serviços](/cadastros/servicos).

Para adicionar serviços na NFC-e, comece digitando uma barra no campo de busca (<kbd>\\</kbd> ou <kbd>/</kbd>). Se você souber o código numérico do serviço, digite-o e pressione <kbd>Enter</kbd> para carregar o serviço imediatamente. Caso contrário, digite caracteres não numéricos e o sistema mostrará os resultados de serviços encontrados:

![Busca de seviços na NFC-e](/movimentos/nfce/nfce-busca-servicos.png)

## Vendedor

Ao informar o vendedor na NFC-e, ele não ficará vinculado à venda como um todo, mas em cada item. Por isso, ao adicionar um vendedor, ele será vinculado aos próximos itens adicionados. Se o vendedor for alterado, o novo será vinculado aos próximos itens adicionados. Caso você não tenha adicionado o vendedor antes de adicionar os itens, poderá informá-lo no final da venda e o sistema sugerirá vinculá-lo a todos os itens sem vendedor.

Para informar o vendedor na NFC-e, pressione a tecla <kbd>F6</kbd> ou acesse o menu de opções da NFC-e aberta, no canto direito superior (<em class="mdi mdi-dots-vertical"></em>), depois em <span class="mat-button mdi mdi-badge-account">Alterar vendedor</span>. Na tela que abrir, basta escolher o vendedor e clicar em <span data-mat-button>Confirmar</span>.

## Cliente

Informar o cliente na NFC-e é opcional. Além disso, se você quiser informar ou tiver no seu estado algum incentivo fiscal, é possível adicionar apenas o CPF do consumidor sem ele estar cadastrado.

Para informar o cliente na NFC-e, pressione a tecla <kbd>F7</kbd> ou acesse o menu de opções da NFC-e aberta, no canto direito superior (<em class="mdi mdi-dots-vertical"></em>), depois em <span class="mat-button mdi mdi-account">Informar cliente</span>. Na tela que abrir, você pode buscar um cliente ou apenas informar o CPF. Ao pressionar <kbd>Enter</kbd> ou clicar em <span data-mat-button>Confirmar</span> e for um CPF válido, o sistema tentará encontrar esse CPF no cadastro e se não encontrar, poderá informar mesmo assim. Também é possível informar o nome do cliente opcionalmente.

![Informar CPF do cliente na NFC-e](/movimentos/nfce/informar-cpf-na-nfce.png)

## Intermediador/Marketplace

Quando a venda ocorrer pela internet (operação não presencial), e houver intermédio de alguma plataforma de terceiro como marketplaces e deliverys, é necessário indicar o intermediador da operação para geração da tag no XML e acompanhamento da SEFAZ.

O código contendo a identificação do intermediador/marketplace deve constar no seu respectivo cadastro de pessoa jurídica com atributo  [intermediador](/cadastros/pessoas#intermediador).

Para informar o intermediador na NFC-e, utilize a tecla <kbd>F8</kbd> ou clique em (<em class="mdi mdi-dots-vertical"></em>) seguido de (<em class="mdi mdi-dots-horizontal"></em> Outras opções).
No campo intermediador/marketplace efetue a busca (<em class="mdi mdi-magnify"></em>), selecione o intermediador desejado e clique em <span data-mat-button>Confirmar</span>.

![outras_opções.png](/movimentos/nfce/outras_opções.png)

> Caracteriza-se uma operação **sem intermediador** quando a venda for efetuada via site ou plataforma própria, sem envolver outra pessoa jurídica.
{.is-info}

## Lista{.hidden}
- [Lista *Faça filtros e manipule suas NFC-e pela lista*](/movimentos/nfc-e/lista)
{.links-list}

## Inutilizar numeração{.hidden}
- [Inutilizar numeração *Inutilize numeração que tenha pulado*](/movimentos/nfc-e/inutilizar)
{.links-list}

## XML do mês{.hidden}
- [XML do mês *Baixe ou envie para a contabilidade*](/movimentos/nfc-e/xml-mes)
{.links-list}

## Contingência{.hidden}
- [Contingência *Habilite ou desabilite a NFC-e offline*](/movimentos/nfc-e/contingencia)
{.links-list}

## Sangria e suprimento{.hidden}
- [Sangria/suprimento *Controle o dinheiro do seu caixa*](/movimentos/nfc-e/sangria-suprimento)
{.links-list}

## Configurações{.hidden}
- [Configurações *Configure o funcionamento da sua NFC-e*](/movimentos/nfc-e/configurar)
{.links-list}

## Preferências{.hidden}
- [Preferências *Defina preferências de comportamento da NFC-e para o seu usuário*](/movimentos/nfc-e/preferencias)
{.links-list}

