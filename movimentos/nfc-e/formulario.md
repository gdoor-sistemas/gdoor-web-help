---
title: Formulário de NFC-e
description: Veja em detalhes como gerar suas NFC-e
published: true
date: 2021-07-07T20:02:53.007Z
tags: nfc-e
editor: markdown
dateCreated: 2020-09-02T19:49:36.155Z
---

# Introdução

A tela de lançamento da NFC-e tem por objetivo mostrar apenas o que você precisa para lançar produtos e visualizar o que está acontecendo. Todas as ações disponíveis para o lançamento estão disponíveis por atalho e por algum lugar clicável na tela, possibilitando o uso prático tanto em um computador, mesmo que só com o teclado, quanto em um dispositivo com tela de toque, como um tablet, por exemplo.

Neste artigo você verá detalhes da tela de lançamento da NFC-e, tanto de uma nova, como na edição de uma pendente. Se preferir, veja um vídeo que mostra alguns detalhes de como lançar uma NFC-e:

<div class=text-center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2PUfV6476j0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

# Criando uma NFC-e

Para criar uma nova NFC-e, você pode:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial da NFC-e;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso à lista, no painel lateral da NFC-e;
- Clicando na opção no meio da tela inicial;
- Pressionando a tecla <kbd>F2</kbd>.

Todas as opções acima estão indicadas na imagem abaixo:

![Opções para criar NFC-e](/movimentos/nfce/nfce-opcoes-criacao.png)

A imagem abaixo é a de uma NFC-e aberta com alguns itens adicionados:

![Tela da NFC-e aberta](/movimentos/nfce/nfce-aberta.png)

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

Quando a venda ocorrer pela internet (operação não presencial), e houver intermédio de alguma plataforma de terceiro como marketplaces e deliverys, é necessário indicar o intermediador da operação para acompanhamento da SEFAZ.

O código contendo a identificação do intermediador/marketplace deve constar no seu respectivo cadastrado de pessoa com atributo  [intermediador](/cadastros/pessoas#intermediador).

Para informar o intermediador na NFC-e, utilize a tecla <kbd>F8</kbd> ou clique em (<em class="mdi mdi-dots-vertical"></em>) seguido de (<em class="mdi mdi-dots-horizontal"></em> Outras opções).
Efetue a **busca** no campo intermediador/marketplace, selecione o desejado e clique em <span data-mat-button>Confirmar</span>.

![outras_opções.png](/movimentos/nfce/outras_opções.png)

> Caracteriza-se uma operação **sem intermediador** quando a venda for efetuada via site ou plataforma própria, sem envolver outra pessoa jurídica.
{.is-info}



