---
title: Ponto de venda
description: Veja como funciona o módulo de PDV, pré-vendas gerenciais e NFC-e no Gweb
published: true
date: 2024-05-13T14:24:15.091Z
tags: estoque, movimentos, nfc-e, visão geral, pré-venda-gerencial
editor: markdown
dateCreated: 2020-08-05T19:18:19.255Z
---

# Introdução

O módulo PDV é totalmente online, o que significa que será necessário ter uma conexão com a internet para utilizá-lo.

No **PDV** é possível configurar o comportamento do sistema de acordo com a dinâmica de trabalho da sua empresa: emissão direta de **NFC-e**, ou emissão de **pré-venda gerencial** seguido de geração de **NFC-e** para finalização da venda.
Além disso, você também pode definir o momento em que será efetuada a **movimentação do estoque** e **geração dos registros financeiros**.

O módulo foi desenvolvido visando a praticidade do uso, para que o operador possa utilizar as funções mais importantes sem utilizar o mouse e em modo **tela cheia**. Para entrar ou sair do modo tela cheia, você pode clicar no botão [<i class="mdi mdi-fullscreen"></i> ou <i class="mdi mdi-fullscreen-exit"></i>] na barra superior ou pressionar a tecla <kbd>F11</kbd>.

![PDV](/movimentos/pdv/pdv.png)

# Pré-venda gerencial

O comportamento do sistema ao efetuar uma venda será de acordo com as configurações efetuadas na seção [ação ao salvar a venda](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#a%C3%A7%C3%A3o-ao-salvar-a-venda). Se desejar trabalhar com **emissão de pré-venda gerencial** (que antecede a emissão do documento fiscal), na [configuração](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#a%C3%A7%C3%A3o-ao-salvar-a-venda) selecione uma das opções:
- **Apenas salvar**: selecionando esta opção, uma **pré-venda gerencial em aberto** será salva, sendo que a mesma poderá ser **alterada** e **concluída** posteriormente.

- **Concluir pré-venda gerencial**: ao selecionar esta opção, uma pré-venda gerencial será **salva** e **concluída**, ela **não** poderá mais ser alterada. A movimentação do [estoque](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#movimentar-estoque) e [financeiro](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#gerar-financeiro) dependerá da configuração selecionada. Será possível gerar uma NFC-e a partir dela.

> Clique aqui para saber mais sobre as [configurações do PDV](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#configura%C3%A7%C3%B5es-do-pdv) e [configurações da NFC-e](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#configura%C3%A7%C3%B5es-da-nfc-e).
{.is-info}

Todas as ações disponíveis para o **lançamento de pré-venda gerencial** estão disponíveis por atalho e por algum lugar clicável na tela, possibilitando o uso prático tanto em um computador, mesmo que só com o teclado, quanto em um dispositivo com tela de toque, como um tablet, por exemplo.

Para criar uma **nova pré-venda gerencial**, você pode:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial do PDV;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso à lista, no painel lateral do PDV;
- Clicando na opção no meio da tela inicial;
- Utilizando a tecla <kbd>F2</kbd>.

Todas as opções acima estão indicadas na imagem abaixo:

![Opcões de criação de pré-venda gerencial](/movimentos/nfce/pdv_livre.png)

## Adicionar produtos

Você pode lançar um produto informando o **código**, **código de barras** ou buscando pela **descrição** (também serão considerados os **kits** de produtos). Se você digitar apenas números e pressionar <kbd>Enter</kbd> o sistema imediatamente tentará encontrar um produto com esse código ou com esse código de barras. Se digitar caracteres não numéricos, será feita uma busca e os resultados serão apresentados para você escolher:

> Inicialmente irão aparecer apenas **15** produtos, ao chegar no último produto, será carregado outros 15 e assim sucessivamente.
{.is-info}

![Buscar produtos](/movimentos/pdv/adicionar_produto.png)

> Não é necessário que o campo de busca esteja com o foco para você lançar o produto, o foco só precisa estar em algum lugar da página. Basta você digitar qualquer coisa e o sistema automaticamente joga o foco para o campo de busca.
{.is-success .gw .gw-tip}

### Buscar pela referência

No cadastro de produtos há o campo [referência](https://help.gdoorweb.com.br/pt-br/cadastros/produtos#detalhes). Ele existe para que você possa informar um código pelo qual a sua empresa já controlava o produto e não está no padrão de código de barras, uma vez que o código no Gweb é sequencial e inalterável.

Para adicionar o produto pela referência, basta digitar um ponto (.) e o código da referência, depois pressionar <kbd>Enter</kbd>.

> É possível imprimir etiquetas com a referência em código de barras no padrão UPC, que aceita caracteres não numéricos. Se você gerar a etiqueta com o ponto e o código de referência, poderá usar o leitor de código de barras para adicionar o produto na pré-venda gerencial.
{.is-success .gw .gw-tip}

### Preço de atacado

No PDV, o preço de atacado pode ser aplicado automaticamente quando atingido a quantidade mínima de venda do produto no atacado (conforme configuração no [cadastro do produto](https://help.gdoorweb.com.br/pt-br/cadastros/produtos)).

Para aplicar o preço de atacado **sem quantidade mínima** utilize o atalho no teclado <kbd>Ctrl</kbd> <kbd>1</kbd> e adicione o produto desejado.

> Para alternar manualmente para o preço de atacado é necessário possuir a [permissão](https://help.gdoorweb.com.br/pt-br/configuracoes/permissoes) para "**alternar para preço de atacado**" marcada no **PDV**. 
{.is-info}

Os produtos com preço de atacado ficarão com a tag "**atacado**" na cor azul:

![Preço de atacado no pedido](/movimentos/pedidos/pre_venda.png)

## Adicionar kits de produtos

Caso possua [kits de produtos](https://help.gdoorweb.com.br/pt-br/cadastros/produtos#kits) cadastrados, você poderá lançá-los na pré-venda gerencial. 
Para isso, digite o caractere <kbd>+</kbd> seguido da descrição ou do código numérico do kit e o sistema mostrará os resultados de kits encontrados:

![Buscar kits de produtos](/movimentos/pdv/adicionar_kitt.png)

> Apesar de o sistema já trazer os kits na busca por produtos, pode ser interessante usar o <kbd>+</kbd> para **buscar apenas kits**.
{.is-success .gw .gw-tip}

## Adicionar serviços

Para adicionar serviços na pré-venda gerencial, você precisa habilitar o uso de serviços nas [configurações](https://help.gdoorweb.com.br/pt-br/configuracoes/geral#serviços) e depois [cadastrar os serviços](/cadastros/servicos).

Para adicionar serviços, digite uma barra (<kbd>\\</kbd> ou <kbd>/</kbd>) no campo de busca, seguida da descrição ou do código numérico do serviço e o sistema mostrará os resultados dos serviços encontrados:

![Buscar serviços](/movimentos/pdv/adicionar_serviço.png)

## Informar vendedor

Ao informar o vendedor na pré-venda gerencial, ele não ficará vinculado à venda como um todo, mas sim em cada item, sendo vinculado aos próximos itens adicionados. Se o vendedor for alterado, o novo será vinculado aos próximos itens lançados. 
Caso você não tenha adicionado o vendedor antes de adicionar os itens, poderá informá-lo no final da venda e o sistema sugerirá vinculá-lo a todos os itens sem vendedor.

Para informar o vendedor, pressione a tecla <kbd>F6</kbd> ou acesse o menu de opções (<em class="mdi mdi-dots-vertical"></em>) na pré-venda gerencial aberta. Em seguida clique em <span class="mat-button mdi mdi-badge-account">Alterar vendedor</span>, escolha o desejado e clique em <span data-mat-button>Confirmar</span>.

## Informar cliente

Informar o cliente na pré-venda gerencial é opcional. Além disso, se você quiser informar ou tiver no seu estado algum incentivo fiscal, é possível adicionar apenas o CPF do consumidor sem ele estar cadastrado.

Para informar o cliente, pressione a tecla <kbd>Ctrl</kbd> + <kbd>2</kbd>, em seguida clique em <kbd>INFORMAR CLIENTE</kbd>, busque um cliente ou cadastre um novo. 

<kbd>SELECIONAR ENDEREÇO DE ENTREGA</kbd>: ao clicar aqui é possível selecionar o endereço para entrega entre os [endereços cadastrados do cliente](/cadastros/pessoas#endereços).

![Endereço de entrega PDV](/movimentos/pdv/endereço_de_entrega_pdv.gif)

## Finalizar venda

Ao clicar em "**finalizar**" a venda, a tela com os valores totais será exibida:

![Finalizar venda](/movimentos/nfce/fina_venda.png)

As formas de [pagamentos](/cadastros/pagamentos) disponíveis serão exibidas de acordo com os [meios de pagamento configurados no PDV](https://help.gdoorweb.com.br/movimentos/pdv#meios-de-pagamento), basta utilizar a desejada: cartão, dinheiro, boleto...

Ao selecionar a opção de pagamento "**PIX**" a mensagem será exibida:

![Pagamento com PIX](/movimentos/nfce/venda_2.png)

Clicando em "**sim**", será gerado o "**QR code**" para leitura com o respectivo valor da venda.

![Qr code](/movimentos/nfce/venda_3.png)

> A opção de **pagamento PIX com geração de QR code** para leitura trata-se de um facilitador para agilizar a venda, **não é integrada com a conta**, sendo assim, **não haverá confirmação do recebimento na tela**.
{.is-warning}

Caso deseje configurar a **forma de pagamento pix** como mostrado acima, siga o nosso [passo a passo](/tutoriais/cadastrar-pix).

O cliente é opcional, mas **dependendo da forma de pagamento selecionada** pode ser obrigatório informá-lo.

# NFC-e

Veja uma série de vídeos que fornecem uma visão geral sobre o módulo de NFC-e:

<div class=text-center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLtTr046tMpDsgQ9YIG1F3UEUSG7LX9w7Z" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

O comportamento do sistema ao efetuar uma venda será de acordo com as configurações efetuadas na seção [ação ao salvar a venda](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#a%C3%A7%C3%A3o-ao-salvar-a-venda). Se desejar trabalhar **somente com emissão de NFC-e** (sem pré-venda gerencial), na [configuração](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#a%C3%A7%C3%A3o-ao-salvar-a-venda) selecione a opção "**gerar NFC-e**".

> Clique aqui para saber mais sobre as [configurações do PDV](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#configura%C3%A7%C3%B5es-do-pdv) e [configurações da NFC-e](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#configura%C3%A7%C3%B5es-da-nfc-e).
{.is-info}

Todas as ações disponíveis para o **lançamento de NFC-e** estão disponíveis por atalho e por algum lugar clicável na tela, possibilitando o uso prático tanto em um computador, mesmo que só com o teclado, quanto em um dispositivo com tela de toque, como um tablet, por exemplo.

Se preferir, veja um vídeo que mostra alguns detalhes de [como fazer vendas na NFC-e](https://youtu.be/2PUfV6476j0) do GWEB:

Para criar uma **nova NFC-e**, você pode:

- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da tela inicial do PDV;
- Clicar no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso à lista, no painel lateral do PDV;
- Clicando na opção no meio da tela inicial;
- Pressionando a tecla <kbd>F2</kbd>.

Todas as opções acima estão indicadas na imagem abaixo:

![Opcões de criação NFC-e](/movimentos/nfce/pdv_livre.png)

## Adicionar produtos

Você pode lançar um produto informando o **código**, **código de barras** ou buscando pela **descrição** (também serão considerados os kits de produtos). Se você digitar apenas números e pressionar <kbd>Enter</kbd> o sistema imediatamente tentará encontrar um produto com esse código ou com esse código de barras. Se digitar caracteres não numéricos, será feita uma busca e os resultados serão apresentados para você escolher:

> Inicialmente irão aparecer apenas **15** produtos, ao chegar no último produto, será carregado outros 15 e assim sucessivamente.
{.is-info}

![Buscar produtos](/movimentos/nfce/nfce-busca-produtos.png)

> Não é necessário que o campo de busca esteja com o foco para você lançar o produto, o foco só precisa estar em algum lugar da página. Basta você digitar qualquer coisa e o sistema automaticamente joga o foco para o campo de busca.
{.is-success .gw .gw-tip}

### Buscar pela referência

No cadastro de produtos há o campo [referência](https://help.gdoorweb.com.br/pt-br/cadastros/produtos#detalhes). Ele existe para que você possa informar um código pelo qual a sua empresa já controlava o produto e não está no padrão de código de barras, uma vez que o código no Gweb é sequencial e inalterável.

Para adicionar o produto pela referência, basta digitar um ponto (.) e o código da referência, depois pressionar <kbd>Enter</kbd>.

> É possível imprimir etiquetas com a referência em código de barras no padrão UPC, que aceita caracteres não numéricos. Se você gerar a etiqueta com o ponto e o código de referência, poderá usar o leitor de código de barras para adicionar o produto na NFC-e.
{.is-success .gw .gw-tip}

### Preço de atacado

No PDV, o preço de atacado pode ser aplicado automaticamente quando atingido a quantidade mínima de venda do produto no atacado (conforme configuração no [cadastro do produto](https://help.gdoorweb.com.br/pt-br/cadastros/produtos#detalhes)).

Para aplicar o preço de atacado **sem quantidade mínima** utilize o atalho no teclado <kbd>Ctrl</kbd> <kbd>1</kbd> e adicione o produto desejado.

> Para alternar manualmente para o preço de atacado é necessário possuir a [permissão](https://help.gdoorweb.com.br/pt-br/configuracoes/permissoes) para "**alternar para preço de atacado**" marcada no **PDV**. 
{.is-info}

Os produtos com preço de atacado ficarão com a tag "**atacado**" na cor azul:

![Preço atacado na NFC-e](/movimentos/pedidos/nfc-e.png)

## Adicionar kits de produtos

Caso possua [kits de produtos](https://help.gdoorweb.com.br/pt-br/cadastros/produtos#kits) cadastrados, você poderá lançá-los na NFC-e.
Para isso, digite o caractere <kbd>+</kbd> seguido da descrição ou do código numérico do kit e o sistema mostrará os resultados de kits encontrados:

![Buscar kits de produtos](/movimentos/nfce/nfce-busca-kits.png)

> Apesar do sistema já trazer os kits na busca por produtos, pode ser interessante usar o <kbd>+</kbd> para **buscar apenas kits**.
{.is-success .gw .gw-tip}

## Adicionar serviços

Para adicionar serviços na NFC-e, você precisa habilitar o uso de serviços nas [configurações](/configuracoes/geral) e depois [cadastrar os serviços](/cadastros/servicos).

Para adicionar serviços, digite uma barra (<kbd>\\</kbd> ou <kbd>/</kbd>) no campo de busca, seguida da descrição ou do código numérico do serviço e o sistema mostrará os resultados dos serviços encontrados:

![Buscar seviços](/movimentos/nfce/nfce-busca-servicos.png)

## Informar vendedor

Ao informar o vendedor na NFC-e, ele não ficará vinculado à venda como um todo, mas sim em cada item, sendo vinculado aos próximos itens adicionados. Se o vendedor for alterado, o novo será vinculado aos próximos itens lançados. 
Caso você não tenha adicionado o vendedor antes de adicionar os itens, poderá informá-lo no final da venda e o sistema sugerirá vinculá-lo a todos os itens sem vendedor.

Para informar o vendedor, pressione a tecla <kbd>F6</kbd> ou acesse o menu de opções (<em class="mdi mdi-dots-vertical"></em>) na NFC-e aberta. Em seguida clique em <span class="mat-button mdi mdi-badge-account">Alterar vendedor</span>, escolha o desejado e clique em <span data-mat-button>Confirmar</span>.

## Informar cliente

Informar o cliente na pré-venda gerencial é opcional. Além disso, se você quiser informar ou tiver no seu estado algum incentivo fiscal, é possível adicionar apenas o CPF do consumidor sem ele estar cadastrado.

Para informar o cliente, pressione a tecla <kbd>Ctrl</kbd> + <kbd>2</kbd>, em seguida clique em <kbd>INFORMAR CLIENTE</kbd>, busque um cliente ou cadastre um novo. 

<kbd>SELECIONAR ENDEREÇO DE ENTREGA</kbd>: ao clicar aqui é possível selecionar o endereço para entrega entre os [endereços cadastrados do cliente](/cadastros/pessoas#endereços).

![Endereço de entrega PDV](/movimentos/pdv/endereço_de_entrega_pdv.gif)

## Intermediador/Marketplace

Quando a venda ocorrer pela internet (operação não presencial), e houver intermédio de alguma plataforma de terceiro como marketplaces e deliverys, é necessário indicar o intermediador da operação para geração da tag no XML e acompanhamento da SEFAZ.

O código contendo a identificação do intermediador/marketplace deve constar no seu respectivo cadastro de pessoa jurídica com [atributo intermediador](/cadastros/pessoas#intermediador) marcado.

Para informar o intermediador na NFC-e, utilize a tecla <kbd>F8</kbd> ou clique em (<em class="mdi mdi-dots-vertical"></em>) seguido de (<em class="mdi mdi-dots-horizontal"></em> Outras opções).
No campo intermediador/marketplace efetue a busca (<em class="mdi mdi-magnify"></em>), selecione o intermediador desejado e clique em <span data-mat-button>Confirmar</span>.

![Outras opções](/movimentos/nfce/outras_opções.png)

> Caracteriza-se uma operação **sem intermediador** quando a venda for efetuada via site ou plataforma própria, sem envolver outra pessoa jurídica.
{.is-info}

## Finalizar venda

Ao clicar em "**finalizar**" a venda, a tela com os valores totais será exibida:

![Finalizar venda](/movimentos/nfce/fina_venda.png)

As formas de [pagamentos](/cadastros/pagamentos) disponíveis serão exibidas de acordo com os [meios de pagamento configurados no PDV](https://help.gdoorweb.com.br/movimentos/pdv#meios-de-pagamento), basta utilizar a desejada: cartão, dinheiro, boleto...

Ao selecionar a opção de pagamento "**PIX**" a mensagem será exibida:

![Pagamento com PIX](/movimentos/nfce/venda_2.png)

Clicando em "**sim**", será gerado o "**QR code**" para leitura com o respectivo valor da venda.

![Qr Code](/movimentos/nfce/venda_3.png)

> A opção de **pagamento PIX com geração de QR code** para leitura trata-se de um facilitador para agilizar a venda, **não é integrada com a conta**, sendo assim, **não haverá confirmação do recebimento na tela**.
{.is-warning}

O cliente é opcional, mas **dependendo da forma de pagamento selecionada** pode ser obrigatório informá-lo.

# PDV Offline

Você pode baixar o **PDV Offline** do GWEB caso deseje continuar a **emitir cupons** enquanto você estiver sem internet.

Para realizar o download do PDV Offline, acesse o menu **movimentações > PDV > configurações offline** no menu à direita.

IMAGEM DA OPÇÃO

Após realizar o download, efetue a instalação do PDV Offline.

![Instalação do PDV Offline](/movimentos/pdv/2_instalacao.png)

Após a instalação, abra o PDV Offline e entre com o seu usuário.

![Login do PDV Offline](/movimentos/pdv/3_tela_login_pdv_offline.png)

No primeiro acesso, o PDV Offline do GWEB irá exibir o formulário de **configurações offline**.

![Configuração Offline inicial](/movimentos/pdv/4_tela_configuracao_offline.png)

O campos deste formulário são:
 - **Nome do PDV**: Insira aqui um nome identificador para o PDV.
 - **Série da NFC-e**: Informe a série que deseja utilizar **quando o PDV ficar offline**.
 - **Ambiente da emissão**: Irá trazer a configuração padrão da sua NFC-e.
 - **Nº da próxima NFC-e**: Informe o número da próxima NFC-e que deseja utilizar **quando o PDV ficar offline**.
 
 O **PDV Offline** irá entrar **automaticamente** no **modo offline** quando o GWEB identificar que você está sem internet. A mensagem ao entrar no modo offline aparecerá no meio da tela.

![Mensagem do modo offline](/movimentos/pdv/5__mensagem_offline.png)

Quando a internet voltar, o GWEB irá **identificar** e sincronizará as **informações**, **pré-vendas** e **notas emitidas**.

Para ter uma visualização dos PDVs que estão configurados, você pode acessar as [séries offline](#séries-offline).


# Lista

Na lista, você visualiza as pré-vendas gerenciais e NFC-e emitidas, podendo efetuar uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#buscar) ou [filtrar](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#filtrar) informações para visualizar apenas dados pertinentes ao que você precisa.

> Na barra superior do quadro lista, temos o controle de paginação, que permite escolher a quantidade de itens que serão exibidos "**por página**", além de poder navegar entre elas **< >**.
{.is-info}

As informações mostradas variam de acordo com a **situação atual** e o **tipo de documento** exibido na lista do PDV, veja mais detalhes abaixo:

### Pré-venda gerencial em aberto

Note que enquanto a pré-venda gerencial estiver **em aberto** será possível **editá-la**, basta clicar em (<em class="mdi mdi-pencil"></em>) para "**editar**".

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-check"></em> concluir**   ou **<em class="mdi mdi-delete"></em> excluir** a pré-venda gerencial. 

![Pré-venda gerencial aberta](/movimentos/pdv/pv_aberta.png)

### Pré-venda gerencial concluída

Quando a pré-venda gerencial estiver **concluída**, ela **não poderá** mais ser editada. 
Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-qrcode"></em> gerar NFC-e** ou **<em class="mdi mdi-printer"></em> imprimir** a pré-venda gerencial.

A [movimentação do estoque](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#movimentar-estoque) e [geração do financeiro](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#gerar-financeiro) **podem ou não ser efetuadas** nesta etapa, de acordo com a [configuração](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#comportamento) selecionada.

![Pré-venda gerencial concluída](/movimentos/pdv/pv_concluida.png)

### Autorizado o uso da NFC-e

Nesta etapa as edições não são permitidas. Se a [movimentação do estoque](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#movimentar-estoque) e [geração do financeiro](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#gerar-financeiro) **não tiver ocorrido ao concluir a pré-venda gerencial**, ela ocorrerá nesta etapa (ao emitir o documento fiscal).

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). 
Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-refresh-circle"></em> consultar status**, **<em class="mdi mdi-content-copy"></em> copiar chave de acesso**, **<em class="mdi mdi-email"></em> enviar por e-mail**, **<em class="mdi mdi-file-pdf"></em> visualizar DANFCE**, **<em class="mdi mdi-xml"></em> visualizar XML**, **<em class="mdi mdi-download"></em> salvar documento** ou **<em class="mdi mdi-cancel"></em> cancelar NFC-e**.

![Autorizado uso](/movimentos/pdv/nfce_autorizada.png)

### Rejeição da NFC-e

Quando uma NFC-e é rejeitada na transmissão, a mensagem com a descrição do erro será exibida. Dependendo do motivo, será possível **editá-la** para transmitir novamente, basta clicar em (<em class="mdi mdi-pencil"></em>) "**editar**".

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). 
Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-file-send"></em> transmitir**, **<em class="mdi mdi-content-copy"></em> copiar chave de acesso**, **<em class="mdi mdi-file-eye"></em> pré-visualizar DANFCE**, **<em class="mdi mdi-file-code"></em> pré-visualizar XML** ou **<em class="mdi mdi-delete"></em> excluir**.

![Rejeição NFC-e](/movimentos/pdv/nfc-e_rejeição.png)

### NFC-e com falha na pré-validação dos dados

Quando uma NFC-e possui alguma informação incorreta ou faltante, a falha pode ocorrer na transmissão. Será possível verificar os detalhes e **editá-la** para transmitir novamente, basta clicar em (<em class="mdi mdi-pencil"></em>) "**editar**".

Para visualizar as "**opções**" clique em (<em class="mdi mdi-dots-vertical"></em>). 
Será possível: **<em class="mdi mdi-checkbox-marked"></em> marcar**, **<em class="mdi mdi-file-send"></em> transmitir**, **<em class="mdi mdi-file-eye"></em> pré-visualizar DANFCE**, **<em class="mdi mdi-file-code"></em> pré-visualizar XML** ou **<em class="mdi mdi-delete"></em> excluir**.

![NFC-e com falha na pré-validação dos dados](/movimentos/pdv/falha.png)

<a id="selecao-multipla"></a>

## Seleção múltipla

O modo de seleção múltipla permite que você selecione várias **pré-vendas gerenciais** ou **NFC-e** para executar uma ação com todas simultaneamente. 

> As opções de seleção múltipla ficarão visíveis apenas se **todas as vendas selecionadas** pertencerem ao mesmo **tipo de documento** e possuírem a **mesma situação**.
Por exemplo, se você selecionar uma **NFC-e autorizada** e outra **NFC-e rejeitada**, as ações não estarão disponíveis, assim como se selecionar uma **pré-venda gerencial** e uma **NFC-e**.
{.is-success}

Você pode ativar o modo de **seleção múltipla** utilizando a opção <em class="mdi mdi-checkbox-marked"></em> **marcar** ou clicando sobre o **campo imagem** a esquerda do documento (no caso de dispositivos touch dê um toque longo no item):

![Marcar item](/movimentos/pdv/marcar.gif)

> Só é possível marcar as pré-vendas gerenciais ou NFC-e exibidas na página atual. Para ter mais opções para selecionar, você pode aumentar a quantidade de itens exibidos por página e/ou aplicar um [filtro](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#filtrar).
{.is-info}

As opções mostradas na seleção múltipla variam de acordo com a **situação atual** e o **tipo de documento** selecionado na lista do PDV, veja mais detalhes abaixo:

**Seleção múltipla de pré-venda gerencial em aberto**{.subtitle}

As ações disponíveis são:
- <em class="mdi mdi-delete"></em>: excluir as vendas selecionadas
- <em class="mdi mdi-close"></em>: fechar seleção

![Seleção múltipla pré-venda gerencial em aberto](/movimentos/pdv/aberta.png)

**Seleção múltipla de pré-venda gerencial concluída**{.subtitle}

As ações disponíveis são:
- <em class="mdi mdi-qrcode"></em>: gerar NFC-e
- <em class="mdi mdi-delete"></em>: excluir as vendas selecionadas
- <em class="mdi mdi-close"></em>: fechar seleção

![Seleção múltipla pré-venda gerencial concluída](/movimentos/pdv/concluid.png)

> Ao **<em class="mdi mdi-qrcode"></em> gerar NFC-e** pelo modo de seleção múltipla, elas serão enviadas para processamento em segundo plano. Dependendo da quantidade, o processo poderá levar alguns minutos para ser concluído (veja como a opção [mesclar pré-venda gerencial](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#mesclar-pr%C3%A9-venda) pode acelerar essa rotina). Assim que forem processadas, seu sistema será notificado e elas serão atualizadas instantaneamente.
> Ainda, enquanto as NFC-e estiverem aguardando processamento, elas terão um indicativo conforme a imagem abaixo:
![Indicativo de envio de NFC-e em segundo plano](/movimentos/nfce/nfce-envio-segundo-plano.png)
Ao gerar NFC-e de múltiplas pré-vendas gerenciais, com diferentes clientes informados, será gerado gerado uma NFC-e para cada cliente distinto.
{.is-info}

**Seleção múltipla de NFC-e autorizado o uso**{.subtitle}

As ações disponíveis são:
- <em class="mdi mdi-refresh-circle"></em>: consultar o status das NFC-e na [SEFAZ](/glossario#sefaz)
- <em class="mdi mdi-delete"></em>: excluir as vendas selecionadas
- <em class="mdi mdi-close"></em>: fechar seleção

![Seleção múltipla de NFC-e autorizado o uso](/movimentos/pdv/autorizad.png)

**Seleção múltipla de NFC-e rejeitada**{.subtitle}

As ações disponíveis são:
- <em class="mdi mdi-file-send"></em>: transmitir as NFC-e selecionadas
- <em class="mdi mdi-delete"></em>: excluir as vendas selecionadas
- <em class="mdi mdi-close"></em>: fechar seleção

![Seleção múltipla de NFC-e autorizado rejeitada](/movimentos/pdv/rejeitad.png)

## Buscar

Para localizar alguma pré-venda gerencial ou NFC-e rapidamente, digite no campo de busca no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão para "**limpar a busca**" (<em class="mdi mdi-close"></em>). 
Para aplicar [filtros](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#filtrar) aprimorados, clique no botão "**filtrar**" (<em class="mdi mdi-filter"></em>). 
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).

![Digite para buscar](/movimentos/compras/busca.png)

> O que você digitar será buscado entre as seguintes informações no PDV: 
> Campos numéricos: **chave de acesso**, **código de barras**, **código** do produto, **número da venda**.
> Campos textuais: **razão social**, **nome fantasia** do cliente, **nome dos produtos**.
{.is-success}

## Filtrar

Para fazer um filtro na lista, clique no botão "**filtro**" (<em class="mdi mdi-filter"></em>) e o painel será exibido:

![Filtro na lista do PDV](/movimentos/pdv/lista_do_pdv.png)

As opções de filtro são:

- **Cliente**;
- **Usuário**;
- **Vendedor**;
- **Status**;
- **Data inicial**;
- **Data final**;
- **Ambiente de emissão**;
- **Espécie de pagamento**;
- **Tipo de documento**;
- <em class="mdi mdi-checkbox-blank-outline"></em> **Incluir pré-vendas gerenciais com documento fiscal emitido**: quando uma NFC-e é gerada a partir de uma pré-venda gerencial, essa pré-venda gerencial é ocultada da lista.
Quando o **tipo de documento** filtrado for **pré-venda gerencial**, ao marcar esse checkbox, além das pré-vendas gerenciais **em aberto** e **concluída**, também serão exibidas as que já geraram NFC-e (ocultas).

Para aplicar um filtro, clique no botão <span class="mat-button mdi "> aplicar</span>, para removê-lo clique em <span class="mat-button mdi "> limpar filtros</span>.

![Aplicar e limpar filtros na lista do PDV](/movimentos/nfce/nfce-filtros-aplicar-limpar.png)

Na parte superior do painel de filtros temos os botões:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro.

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![Opções do filtro](https://help.gdoorweb.com.br/movimentos/nfce/opcoes-filtro-nfce.png)

> Sempre que um filtro estiver aplicado, você verá o **botão de filtro na cor laranja**:
![Filtro aplicado](/movimentos/nfce/nfce-filtro-aplicado.png =250x)
{.is-success}

# Recebimento de parcelas

No PDV do GWEB é possível realizar o **recebimento de parcelas** através do menu no canto superior direito ou no atalho <kbd>F9</kbd>.

> Também é possível configurar a emissão de uma NFC-e ao realizar o recebimento de uma parcela, basta ativar a configuração disponível nas [configurações gerais](/configuracoes/geral#nfc-e).
{.is-info}

![Recebimento de parcelas](/movimentos/nfce/tela_inicial_recebimento.png)

## Lista de receitas
No recebimento de parcelas do PDV, é possível selecionar uma ou mais parcelas para recebê-las.

![Lista de receitas](/movimentos/pdv/lista_receitas.png)

Ao selecioná-las e clicar em <span class="mat-button">receber</span>, será aberto o formulário para efetivar as receitas.

## Efetivar receitas

![Efetivar receita](/movimentos/nfce/efetivar_receita.png)

No formulário é possível informar os **juros**, **taxas** e **desconto**, na parte de **meios de pagamentos** você seleciona a forma de pagamento, valor que deseja e clique em <span class="mat-button mat-accent">ADICIONAR</span> para colocá-la na lista.

Ao informar todos os dados que deseja, clique em <span class="mat-button mat-accent">EFETIVAR</span>.

# Configurações do PDV

As configurações do PDV envolvem as emissões de pré-venda gerencial e NFC-e. As mesmas são gerais para todos os usuários e somente usuários com permissão podem alterá-las. 
Ao alterar cada seção, **você precisará clicar em <span class="mat-button mat-accent"> salvar</span> individualmente**. Veja abaixo os detalhes de cada seção/configuração.

## Comportamento

Nesta seção você configura como o sistema deve se comportar em determinadas situações. Veja em detalhes as opções:

![Configurar comportamento do PDV](/movimentos/pdv/comportamento_pdv.png)

### Movimentar estoque?{.subtitle}
Por padrão, a movimentação do estoque ocorre na emissão da NFC-e. Ativando esta opção, a movimentação do estoque se dará na conclusão da pré-venda gerencial (posteriormente, ao emitir a NFC-e o estoque não será movimentado, pois a baixa já ocorreu na pré-venda gerencial).
- **Não**: o estoque será movimentado ao emitir o documento fiscal.
- **Sim**: o estoque será movimentado quando a pré-venda gerencial for concluída.

### Gerar financeiro?{.subtitle}

Por padrão, a geração dos registros financeiros ocorre na emissão da NFC-e. Ativando esta opção, a geração dos registros financeiros se darão na conclusão da pré-venda gerencial (posteriormente, ao emitir a NFC-e não haverá movimentação financeira, pois os registros já foram efetuados na pré-venda gerencial).
- **Não**: os registros financeiros serão gerados ao emitir o documento fiscal.
- **Sim**: os registros financeiros serão gerados quando a pré-venda gerencial for concluída.

### Solicitar cliente{.subtitle}

Se marcada esta opção, ao abrir uma nova venda, o sistema solicitará que o cliente seja informado. Não será obrigatório informar, podendo a solicitação ser fechada e a venda prosseguir normalmente. Ainda será possível informar/alterar o cliente mais tarde.

### Após o primeiro item{.subtitle}

Esta opção estará visível apenas se "**solicitar cliente**" **estiver marcada**. Marcando esta opção, o sistema solicitará o cliente somente após o lançamento do primeiro item. Isso pode ser útil em casos onde o operador deixa sempre uma nova venda em aberto, assim, não será necessário informar o cliente logo na abertura da venda.

### Sugerir vendedor{.subtitle}

Se o usuário logado possuir o [atributo vendedor](https://help.gdoorweb.com.br/pt-br/cadastros/pessoas#atributos), será sugerido preferencialmente na venda.

### Exigir cliente após valor{.subtitle}

Com esta opção marcada, caso o valor da venda seja maior do que o valor configurado aqui, será **obrigatório** informar o cliente para salvar a venda. Se você preencher o campo com o valor 0 (zero), será obrigatório informar o cliente sempre.

### Ação ao salvar a venda{.subtitle}

Esta configuração permite escolher o comportamento do sistema em relação às vendas:

- **Apenas salvar**: selecionando esta opção, uma **pré-venda gerencial em aberto** será salva, sendo que a mesma poderá ser **alterada** e **concluída** posteriormente.

- **Concluir pré-venda gerencial**: ao selecionar esta opção, uma pré-venda gerencial será **salva** e **concluída**, ela **não** poderá mais ser alterada. A movimentação do [estoque](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#movimentar-estoque) e geração do [financeiro](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#gerar-financeiro) dependerá da configuração selecionada. Será possível gerar uma NFC-e a partir dela.

- **Gerar NFC-e**: uma NFC-e será gerada e transmitida e fará a movimentação do estoque e financeiro.

- **Perguntar sempre**: ao selecionar esta opção, sempre que concluir uma venda no PDV, **será solicitado o que deseja fazer**:

![PDV perguntar sempre](/movimentos/pdv/o_que.gif)

> É possível selecionar a opção desejada utilizando apenas as teclas no teclado <kbd>S</kbd> (apenas **s**alvar), <kbd>C</kbd> (**c**oncluir pré-venda gerencial) e <kbd>N</kbd> (gerar **N**FC-e), seguido de <kbd>Enter</kbd> para confirmar.
{.is-info}

### Mesclar pré-venda gerencial{.subtitle}

Selecione a rotina do Gweb ao converter várias pré-vendas gerenciais em NFC-e: 
- **Perguntar sempre**: ao selecionar esta opção, sempre será solicitado se deseja **mesclar as pré-vendas gerenciais em uma única NFC-e**.
- **Mesclar**: uma única NFC-e (por cliente) será gerada com todas as pré-vendas gerenciais selecionadas.
> Ao selecionar pré-vendas gerenciais que tenham o **cliente informado** e pré-vendas gerenciais para **consumidor final**, o sistema assumirá que são todas do mesmo cliente informado (mesclando as pré-vendas gerenciais do cliente informado e do consumidor).
{.is-info}

- **Não mesclar**: uma NFC-e por pré-venda gerencial será gerada em segundo plano. Você poderá continuar utilizando o sistema normalmente enquanto as NFC-e são geradas.

### Tabela de preços{.subtitle}

Defina o comportamento padrão para as tabelas de preços, é necessário [cadastrar uma tabela de preços](/pt-br/cadastros/produtos#tabelas-de-preços) anteriormente:
- **Não utilizar**: não utilizar tabela de preços no PDV;
- **Perguntar ao iniciar***: perguntar qual tabela de preços que o cliente quer utilizar ao iniciar a venda no PDV, ele pode optar por **Não utilizar tabela de preço**;

![Opção perguntar ao iniciar](/movimentos/pdv/perguntar-ao-iniciar.png)

- **Iniciar com padrão**: Iniciar com uma tabela de preço padrão, ao selecionar essa opção, irá habilitar o quadro da **Tabela de preços padrão**.

![Tabela de preços padrão](/movimentos/pdv/tabela-de-precos-padrao.png)

## Financeiro

Para informação dos vínculos financeiros padrão.
Informe a "**conta**" padrão para geração da movimentação, **plano de contas** e **centro de custos** desejado.

![PDV financeiro](/movimentos/pdv/pdv_financeiro.png)

## Meios de pagamento

Nesta seção você pode escolher quais [meios de pagamento](/cadastros/pagamentos) estarão disponíveis para uso no PDV e determinar a ordem em que eles serão exibidos. O primeiro será considerado como padrão.

Depois de [cadastrar o meio de pagamento](https://help.gdoorweb.com.br/cadastros/pagamentos#nova-forma-de-pagamento), para torná-lo disponível no PDV é necessário marcar a caixa de seleção à esquerda, conforme exibido abaixo. Ainda é possível reordenar os pagamentos habilitados, basta clicar no ícone [<em class="mdi mdi-drag-vertical"></em>] à direita do item e arrastá-lo para a posição desejada.

![Meios de pagamento](/movimentos/pdv/meios_de_pagamento.gif)

## Mensagem promocional

Nesta seção você pode informar uma mensagem a ser impressa junto com as informações adicionais no [DANFCe](/glossario#danfce).

![Configurar mensagem promocional](/movimentos/nfce/nfce-configurar-mensagem-promocional2.png)

## Sangria e suprimento

Nesta seção você pode configurar o sistema para abrir a janela de impressão do comprovante de sangria/suprimento logo após a sua emissão. Você ainda poderá imprimir posteriormente o comprovante a partir da **lista de sangria/suprimento do dia**.

![Configurações de sangria e suprimento](/movimentos/nfce/nfce-configurar-sangria-suprimento.png)

## Intermediador

Nesta seção você pode definir como tratar o intermediado ao converter em NFC-e: **não informar intermediador** ou informar um **intermediador específico**.

![Intermediador](/movimentos/pdv/intermediador.png)

## Preferências de impressão

Nesta seção você pode definir as configurações de impressão da pré-venda gerencial, quais informações serão impressas.

![Preferências de impressão](/movimentos/pdv/pref_impressao.png)

# Configurações da NFC-e

As configurações da NFC-e são gerais para todos os usuários, e somente usuários com permissão podem alterá-las. Ao alterar cada seção, **você precisará clicar em <span class="mat-button mdi "> salvar</span> individualmente**. Veja abaixo os detalhes de cada seção/configuração.

## Operação padrão

Nesta seção você configura a natureza da operação que será aplicada às novas NFC-e geradas. As opções disponíveis são as cadastradas no [cadastro de operações](/cadastros/operacoes).

![Configurar operação padrão na NFC-e](/movimentos/nfce/nfce-configurar-operacoes.png)

## Certificado digital

Para configurar o certificado digital para emissão de NFC-e, acesse as [Configurações gerais](/configuracoes/geral) do GWEB.

## Ambiente da NFC-e

Nesta seção você configura dados para a geração da NFC-e. Abaixo, veja detalhes de cada configuração.

![Configurar o ambiente da NFC-e](/movimentos/nfce/nfce-configurar-ambiente.png)

Série da NFC-e{.subtitle}

Série de emissão da NFC-e. Esta informação pode ser obtida com sua contabilidade.

Ambiente de emissão{.subtitle}

Aqui você determina se as suas NFC-e terão validade fiscal ou não. O ambiente de **homologação** é usado para testar a emissão, e tudo o que você transmitir será sem valor. Já no ambiente de **produção**, as NFC-e transmitidas terão valor fiscal.

Nº da próxima NFC-e{.subtitle}

Apenas informe um número neste campo se sua empresa já emitia NFC-e por outro sistema, assim você poderá continuar a numeração de onde parou. Ao salvar um número neste campo, a próxima NFC-e será gerada com esse número e as subsequentes terão o número sequencial. 

Forma de emissão{.subtitle}

Neste campo você pode configurar a forma de emissão da NFC-e para: 
- **Normal**: emissão mais comum, sem condições específicas.
- **Contingência offline**: emissão da NFC-e em modo offline, para quando o servidor da [SEFAZ](/glossario#sefaz) estiver indisponível.

Token ID{.subtitle}

ID do token gerado para sua geração do QR Code a ser impresso no [DANFCe](/glossario#danfce). A informação de como obter este código pode ser obtida com sua contabilidade.

Código CSC{.subtitle}

**C**ódigo de **S**egurança do **C**ontribuinte, usado para garantir a autenticidade do [DANFCe](/glossario#danfce). A informação de como obter este código pode ser obtida com sua contabilidade.

## Autorizados a baixar o XML

Nesta seção você informa o CPF ou CNPJ de pessoas ou empresas autorizadas a fazer o download do [XML](/glossario#xml) da NFC-e pelo site da [SEFAZ](/glossario#sefaz), por exemplo, a contabilidade da sua empresa. 

![Pessoas autorizadas a baixar o XML](/movimentos/nfce/nfce-configurar-autorizados-baixar-xml.png)

Os documentos informados aqui serão adicionados em cada NFC-e gerada. Para adicionar um documento, digite o número no campo intitulado "Adicionar CNPJ/CPF" e pressione <kbd>Enter</kbd> ou clique no botão à direita (<em class="mdi mdi-arrow-right"></em>). Para visualizar ou excluir documentos já adicionados, clique no botão [<em class="mdi mdi-eye"></em>].

## Impressão do DANFCe

Nesta seção você configura detalhes sobre a impressão do [DANFCe](/glossario#danfce). 

![Configurar a impressão do DANFCe](/movimentos/nfce/nfce-configurar-impressao-danfce.png)

Veja o que pode ser alterado:

Fonte{.subtitle}

Estilo da fonte da impressão. As opções são: **Times** (com serifa), **Arial** (sem serifa) e **Courier** (monoespaçada).

Imprimir logo{.subtitle}

Indique aqui se a impressão do DANFCe deve conter a logomarca da sua empresa. Será considerada a informada no [cadastro do emitente](/configuracoes/emitente).

Imprimir depois de autorizar{.subtitle}

Indique aqui se após a autorização da NFC-e o sistema deve automaticamente abrir a janela para impressão do DANFCe.

> Devido a limitação comum em páginas na web, o sistema não tem como enviar a impressão do DANFCe direto para uma impressora. No entanto, a impressão pode ser realizada normalmente por meio do diálogo de impressão que o navegador abrirá.

## E-mails padrão

Nesta seção você pode configurar o conteúdo dos e-mails de NFC-e, tanto para notificar a autorização da NFC-e, quanto o seu cancelamento.

![Configuração de conteúdo de e-mails](/movimentos/nfce/nfce-configurar-emails-padrao.png)

Para alterar o conteúdo, clique no botão (<em class="mdi mdi-pencil"></em>) à direita da opção que desejar; será aberto o [editor de texto estilizado](/dicas/editor-de-texto-estilizado) para efetuar as modificações. 
No conteúdo do e-mail, você pode adicionar algumas variáveis que serão substituídas pelo valor correspondente na hora de enviar o e-mail. Para isso, basta digitar o caractere `[` (abre colchetes) e uma lista de opções será sugerida, como mostrado na imagem abaixo:

![Utilizando variáveis ao configurar o conteúdo do e-mail da NFC-e](/movimentos/nfce/nfce-configurar-emails-conteudo-variaveis.png)

> Você pode informar uma página HTML completa para o conteúdo do e-mail da NFC-e, mas precisa garantir que seja um código compatível com os possíveis programas de e-mail que o seu cliente possa ter.
{.is-success .gw .gw-tip}

## E-mail

Nesta seção você define configurações gerais sobre o envio de e-mails da NFC-e.

![Configurar opções de e-mail da NFC-e](/movimentos/nfce/nfce-configurar-email.png)

Na primeira parte, você pode informar um endereço de resposta para os e-mails de NFC-e enviados pelo Gweb, pois o sistema envia os e-mails a partir do endereço `nao.responda@gdoorweb.com.br`. Sendo assim, se o seu cliente precisar responder o e-mail da NFC-e e o fizer para este endereço, o e-mail nunca chegará. Por isso, você pode definir aqui o nome e o endereço para resposta:

![Aplicação do e-mail de resposta](/movimentos/nfce/nfce-configurar-email-resposta.png)

As demais opções refletem no seguinte:

Enviar e-mail automaticamente{.subtitle}

Com esta opção marcada, após a **autorização** da NFC-e, o sistema enviará um e-mail para o endereço informado no [cadastro do cliente](/cadastros/pessoas#emails).

Cópia para o emitente{.subtitle}

Com esta opção marcada, sempre que enviar um e-mail de NFC-e, uma cópia será enviada para o endereço informado no [cadastro do emitente](/configuracoes/emitente).

Anexar PDF{.subtitle}

Com esta opção marcada, além do [arquivo XML](/glossario#xml) anexado ao e-mail (que é obrigatório), o PDF do [DANFCe](/glossario#danfce) também será anexado.

## Séries Offline

Aqui é possível pode acompanhar as séries offline que foram configuradas em cada um dos PDVs Desktops.

![Séries Offline](/movimentos/pdv/6_lista_pdvs_offline.png)

Clique no ícone <span style="color: red;" class="mdi mdi-trash-can"></span> para excluir a configuração ou no ícone <span class="mdi mdi-eye"></span> para visualizar todos os dados configurados neste PDV.

![Série configurada](/movimentos/pdv/7_serie_configurada.png)

# Preferências do PDV

As configurações de preferências podem ser diferentes para cada usuário e permitem que ele molde o sistema à sua maneira de trabalhar. Nesta área, você pode ajustar alguns comportamentos de acordo com seu fluxo de trabalho. 

## Comportamento

![Preferências de comportamento PDV](/movimentos/pdv/comportamento.png)

Iniciar em tela cheia{.subtitle}

Com esta opção marcada, ao entrar no PDV, o modo tela cheia será ativado automaticamente. No modo tela cheia, os menus laterais ficam ocultos, mas ainda é possível acessá-los clicando sobre o botão de menu (<em class="mdi mdi-menu"></em>) nos cantos superiores.

Tela inicial{.subtitle}

Determine qual será a tela inicial ao abrir o PDV, as opções são: "**início**", "**lista do PDV**" e "**nova venda**".

Tela final{.subtitle}

Determine para qual tela você será redirecionado após salvar uma venda. As opções são: "**nova venda**", "**lista do PDV**" e "**detalhes da venda salva**".

Solicitar vendedor na abertura{.subtitle}

Marcando esta opção, ao iniciar uma venda, o sistema pedirá para informar o vendedor ao abrir a venda. Isso pode ser útil para terminais compartilhados entre diversos vendedores.

Veja o vídeo que exemplifica maneiras de você ajustar as suas preferências de uso do PDV:

<div class=text-center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/TORKwnc7ric" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

# XML do mês

O Gweb possui um assistente para que você possa compactar todos os arquivos XML das NFC-e emitidas e baixar ou enviar diretamente por e-mail para a contabilidade. Veja como realizar o processo:

Compactar arquivos{.subtitle}

Clique no botão <span data-mat-button><u>X</u>ML do mês</span> no painel lateral do PDV:

![Compactar XML do mês da NFC-e](/movimentos/pdv/xml_do_mes.png)

A tela com todos os meses em que houve emissão de NFC-e no Gweb será aberta. Selecione o mês e se você deseja **baixar** o arquivo ou **enviar por e-mail**. Nesta última opção, você precisará informar o endereço de e-mail para qual deseja enviar. Depois, clique no botão <span data-mat-button>Confirmar</span>.

![Enviar arquivo compactado para a contabilidade](/movimentos/nfce/nfce-xml-do-mes-enviar.png)

# Inutilizar numeração

Há situações que fazem necessário informar uma quebra na numeração sequencial à Receita, para casos assim, a inutilização da numeração se faz útil. 

> Considerando que a nota não existe perante a SEFAZ, chamamos este processo de inutilização da **numeração**, e não da nota.

Como inutilizar numeração{.subtitle}

Para inutilizar uma numeração de NFC-e no Gweb, clique no botão <span class=mat-button><u>I</u>nutilizar numeração</span> no painel lateral do PDV:

![Menu inutilizar numeração](/movimentos/pdv/inutilizar_numeraç.png)

Será aberta a tela apresentada abaixo, os campos a serem preenchidos são:

![Inutilizar numeração de NFC-e](/movimentos/nfce/nfce-modal-inutilizacao.png)

Série{.subtitle}

Série da numeração a ser inutilizada, geralmente, a que você está utilizando atualmente na NFC-e.

Nº inicial{.subtitle}

Número inicial da faixa que deseja inutilizar.

Nº final{.subtitle}

Número final da faixa que deseja inutilizar.

Justificativa do pedido de inutilização{.subtitle}

Com no mínimo 15 caracteres, descreva o motivo da inutilização dessa numeração.

> Para inutilizar apenas 1 número, preencha o mesmo nos campos **Nº inicial** e **Nº final**.
{.is-success .gw .gw-tip}

Todos os campos são obrigatórios. Depois de preencher as informações, clique em <span data-mat-button>Confirmar</span> e aguarde o retorno.

Clicando no botão <span data-mat-button>Ver inutilizados</span> você pode ver todas as numerações já inutilizadas:

![Lista de numerações inutilizadas](/movimentos/nfce/nfce-inutilizacao-lista.png)

> Se por algum motivo você inutilizar uma numeração superior ao último número de NFC-e registrada no sistema, ao gerar a próxima, ele considerará a inutilização para gerar o próximo número.
{.is-info}
