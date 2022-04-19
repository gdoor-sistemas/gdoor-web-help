---
title: Ponto de venda
description: Veja como funciona o módulo de PDV no Gweb
published: true
date: 2022-04-19T17:55:22.723Z
tags: estoque, movimentos, nfc-e, visão geral
editor: markdown
dateCreated: 2020-08-05T19:18:19.255Z
---

# Introdução

O módulo PDV é totalmente online, o que significa que será necessário ter uma conexão com a internet para utilizá-lo. 
No **PDV** é possível configurar o comportamento do sistema de acordo com a dinâmica de trabalho da sua empresa: emissão direta de **NFC-e**, ou emissão de **pré-venda** seguido de geração de **NFC-e** para finalização da venda.

Além disso, você também pode definir o momento em que será efetuada a **movimentação do estoque** e **geração dos registros financeiros**.

O módulo foi desenvolvido visando a praticidade do uso, para que o operador possa utilizar as funções mais importantes sem utilizar o mouse e em modo **tela cheia**. Para entrar ou sair do modo tela cheia, você pode clicar no botão [<i class="mdi mdi-fullscreen"></i> ou <i class="mdi mdi-fullscreen-exit"></i>] na barra superior ou pressionar a tecla <kbd>F11</kbd>.

# Pré-venda

# NFC-e

Veja uma série de vídeos que fornecem uma visão geral sobre o módulo de NFC-e:

<div class=text-center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLtTr046tMpDsgQ9YIG1F3UEUSG7LX9w7Z" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

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

![opcões de criação NFC-e](/movimentos/nfce/pdv_livre.png)

## Adicionando produtos

Você pode lançar um produto informando o **código**, **código de barras** ou buscando pela **descrição**. Se você digitar apenas números e pressionar <kbd>Enter</kbd> o sistema imediatamente tentará encontrar um produto com esse código ou com esse código de barras. Se digitar caracteres não numéricos, será feita uma busca e os resultados serão apresentados para você escolher:

![Busca de produtos na NFC-e](/movimentos/nfce/nfce-busca-produtos.png)

> Nesta busca, também serão considerados os kits de produtos, caso você tenha cadastrado.
{.is-info}

> Não é necessário que o campo de busca esteja com o foco para você lançar o produto, o foco só precisa estar em algum lugar da página. Basta você digitar qualquer coisa e o sistema automaticamente joga o foco para o campo de busca.
{.is-success .gw .gw-tip}

### Buscando pela referência

No cadastro de produtos há o campo **referência**. Ele existe para que você possa informar um código pelo qual a sua empresa já controlava o produto e não está no padrão de código de barras, uma vez que o código no Gweb é sequencial e inalterável.

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

Ao informar o vendedor na NFC-e, ele não ficará vinculado à venda como um todo, mas em cada item,  ele será vinculado aos próximos itens adicionados. Se o vendedor for alterado, o novo será vinculado aos próximos itens adicionados. Caso você não tenha adicionado o vendedor antes de adicionar os itens, poderá informá-lo no final da venda e o sistema sugerirá vinculá-lo a todos os itens sem vendedor.

Para informar o vendedor na NFC-e, pressione a tecla <kbd>F6</kbd> ou acesse o menu de opções da NFC-e aberta, no canto direito superior (<em class="mdi mdi-dots-vertical"></em>), depois em <span class="mat-button mdi mdi-badge-account">Alterar vendedor</span>. Na tela que abrir, basta escolher o vendedor e clicar em <span data-mat-button>Confirmar</span>.

## Cliente

Informar o cliente na NFC-e é opcional. Além disso, se você quiser informar ou tiver no seu estado algum incentivo fiscal, é possível adicionar apenas o CPF do consumidor sem ele estar cadastrado.

Para informar o cliente na NFC-e, pressione a tecla <kbd>F7</kbd> ou acesse o menu de opções da NFC-e aberta, no canto direito superior (<em class="mdi mdi-dots-vertical"></em>), depois em <span class="mat-button mdi mdi-account">Informar cliente</span>. Na tela que abrir, você pode buscar um cliente ou apenas informar o CPF. Ao pressionar <kbd>Enter</kbd> ou clicar em <span data-mat-button>Confirmar</span> e for um CPF válido, o sistema tentará encontrar esse CPF no cadastro e se não encontrar, poderá informar mesmo assim. Também é possível informar o nome do cliente opcionalmente.

![Informar CPF do cliente na NFC-e](/movimentos/nfce/informar-cpf-na-nfce.png)

## Intermediador/Marketplace

Quando a venda ocorrer pela internet (operação não presencial), e houver intermédio de alguma plataforma de terceiro como marketplaces e deliverys, é necessário indicar o intermediador da operação para geração da tag no XML e acompanhamento da SEFAZ.

O código contendo a identificação do intermediador/marketplace deve constar no seu respectivo cadastro de pessoa jurídica com [atributo intermediador](/cadastros/pessoas#intermediador) marcado.

Para informar o intermediador na NFC-e, utilize a tecla <kbd>F8</kbd> ou clique em (<em class="mdi mdi-dots-vertical"></em>) seguido de (<em class="mdi mdi-dots-horizontal"></em> Outras opções).
No campo intermediador/marketplace efetue a busca (<em class="mdi mdi-magnify"></em>), selecione o intermediador desejado e clique em <span data-mat-button>Confirmar</span>.

![outras opções](/movimentos/nfce/outras_opções.png)

> Caracteriza-se uma operação **sem intermediador** quando a venda for efetuada via site ou plataforma própria, sem envolver outra pessoa jurídica.
{.is-info}

## Finalizar venda

Ao clicar em "**finalizar**" a venda, a tela com os valores totais será exibida:

![finalizar venda](/movimentos/nfce/fina_venda.png)

As formas de [pagamentos](/cadastros/pagamentos) disponíveis serão exibidas de acordo com os [meios de pagamento configurados na NFC-e](/movimentos/nfc-e#suprimento), basta utilizar a desejada.

Ao selecionar a opção de pagamento "**PIX**" a mensagem será exibida:

![pagamento com PIX](/movimentos/nfce/venda_2.png)

Clicando em "**sim**", será gerado o "**QR code**" para leitura com o respectivo valor da venda.

![Qr Code](/movimentos/nfce/venda_3.png)

> A opção de **pagamento PIX com geração de QR code** para leitura trata-se de um facilitador para agilizar a venda, **não é integrada com a conta**, sendo assim, **não haverá confirmação do recebimento na tela**.
{.is-warning}

O cliente é opcional, mas **dependendo da forma de pagamento selecionada** pode ser obrigatório informá-lo.

# Lista

Na lista, você visualiza as NFC-e emitidas e pode fazer uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/nfc-e#buscar) ou [filtrar](https://help.gdoorweb.com.br/pt-br/movimentos/nfc-e#filtrar) informações para visualizar apenas dados pertinentes ao que você precisa.

## Buscar

Para localizar alguma NFC-e rapidamente, digite no campo de busca no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão para limpar a busca (<em class="mdi mdi-close"></em>). 
Para aplicar [filtros](https://help.gdoorweb.com.br/pt-br/movimentos/nfc-e#filtrar) aprimorados, clique no botão "filtrar" (<em class="mdi mdi-filter"></em>). 
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "atualizar lista" (<em class="mdi mdi-refresh"></em>).

![digite para buscar](/movimentos/compras/busca.png)

> O que você digitar será buscado entre as seguintes informações da NFC-e: 
> Campos numéricos: **chave de acesso**, **código de barras** e **código** do produto, **número da nota**
> Campos textuais: **razão social** e **nome fantasia** do cliente e **nome dos produtos**
{.is-success .gw .gw-tip}

## Filtrar

Os filtros podem ser definidos como padrão. Para fazer um filtro na lista, clique no botão "**filtro**" (<em class="mdi mdi-filter"></em>) e o painel será exibido:

![Filtro na lista de NFC-e](/movimentos/nfce/filtro-lista-nfce.png)

No painel de filtros destacado na imagem acima, você encontra:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro.

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![Opções do filtro](https://help.gdoorweb.com.br/movimentos/nfce/opcoes-filtro-nfce.png)

> Sempre que um filtro estiver aplicado, você verá o botão de filtro laranjado:
![filtro aplicado](/movimentos/nfce/nfce-filtro-aplicado.png =250x)
{.is-success .gw .gw-tip}

As opções de filtro são as seguintes:

- **Usuário**;
- **Vendedor**;
- **Status**;
- **Data inicial**;
- **Data final**.

Para aplicar um filtro, clique no botão <span class="mat-button mdi "> aplicar</span>. Depois de aplicado, você pode removê-lo, clicando em <span class="mat-button mdi "> limpar filtros</span>.

![Aplicar e limpar filtros na lista de NFC-e](/movimentos/nfce/nfce-filtros-aplicar-limpar.png)

## Lista

No quadro da lista, na barra superior, você encontra o controle de paginação, que permite visualizar as NFC-e em partes para não carregar todas de uma vez. Você pode escolher o tamanho da página, ou seja, a quantidade de itens a cada carregamento, além de poder navegar entre as páginas.

![Controle de paginação](/movimentos/nfce/nfce-paginacao.png)

Em cada item da lista você pode encontrar as seguintes informações:

![nfce-item-lista-informacoes.png](/movimentos/nfce/nfce-item-lista-informacoes.png)

1. Imagem vinculada ao cadastro do cliente. Apresentará uma imagem genérica quando não houver.
2. Nome do cliente. Será apresentada a informação "Consumidor final" quando o cliente não for informado.
3. Número sequencial da NFC-e, modelo (sempre 65), [série](/movimentos/nfc-e/configurar#ambiente) e data da emissão. Também apresenta o valor total da NFC-e.
4. Chave de acesso e status da NFC-e.
5. [Menu de ações](#acoes) a serem executadas com a NFC-e em questão. Caso a NFC-e ainda não tenha sido transmitida para a [SEFAZ](/glossario#sefaz), ao lado deste botão será exibido outro (<em class="mdi mdi-pencil"></em>) para editar a NFC-e.

### Ações

Ao lado de cada item na lista, há um botão com ações de contexto para a NFC-e selecionada. Se estiver usando em um computador, este botão será exibido apenas sobre o item que você passar o mouse:

![Ações de contexto para a NFC-e](/movimentos/nfce/nfce-acoes-contexto.gif)

As opções disponíveis neste menu variam de acordo com a situação atual da NFC-e, e são as seguintes:

<span class="mat-button mdi mdi-check"> Selecionar</span>

Visível para todas NFC-e. Inicia o modo de [seleção múltipla](#selecao-multipla).

<span class="mat-button mdi mdi-file-refresh"> Atualizar e transmitir</span>

Visível para as NFC-e geradas em contingência e rejeitadas na transmissão. Aplica na NFC-e a tributação conforme as configurações, depois transmite a nota autorizada para a [SEFAZ](/glossario#sefaz).

<span class="mat-button mdi mdi-content-duplicate"> Invalidar e criar nova</span>

Visível para as NFC-e geradas em contingência e rejeitadas na transmissão. Inutiliza a numeração atribuída a esta NFC-e e gera uma nova, com os mesmos dados da atual, com a próxima numeração disponível. A nova NFC-e gerada será aberta para edição.

<span class="mat-button mdi mdi-file-send"> Transmitir</span>

Visível para as NFC-e ainda não transmitidas. Envia o [XML](/glossario#xml) da NFC-e para a SEFAZ.

<span class="mat-button mdi mdi-refresh-circle"> Consultar status</span>

Visível para as NFC-e enviadas para a SEFAZ e sem resposta, lote recebido, autorizadas, canceladas, com duplicidade. Consulta e atualiza o status da NFC-e perante a SEFAZ. Se a NFC-e não estava autorizada no sistema, e a consulta retornou que ela está, os processos de autorização da nota, tal como baixa de estoque, serão executados.

<span class="mat-button mdi mdi-content-copy"> Copiar chave de acesso</span>

Visível para as NFC-e que possuem chave de acesso. Copia a chave de acesso para a área de transferência.

<span class="mat-button mdi mdi-email"> Enviar por e-mail</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Envia um e-mail para o endereço do cadastro do cliente com o XML da NFC-e. Caso esteja configurado, envia também o DANFCe. [Veja como configurar](/movimentos/nfc-e/configurar#email).

<span class="mat-button mdi mdi-file-pdf"> Visualizar DANFCe</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o DANFCe em PDF no [visualizador de PDF](/dicas/visualizador-pdf) do Gweb.

<span class="mat-button mdi mdi-xml"> Visualizar XML</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o [arquivo XML](/glossario#xml) gerado para a NFC-e.

<span class="mat-button mdi mdi-file-eye"> Pré-visualizar DANFCe</span>

Visível para as NFC-e ainda não transmitidas. Permite ter uma prévia de como ficaria o DANFCe no caso de a NFC-e ser autorizada com os dados atuais. A pré-visualização será aberta em PDF no [visualizador de PDF](/dicas/visualizador-pdf) do Gweb.

<span class="mat-button mdi mdi-file-code"> Pré-visualizar XML</span>

Visível para as NFC-e ainda não transmitidas. Permite visualizar como o [arquivo XML](/glossario#xml) será gerado para a NFC-e para transmissão. É só uma visualização e o arquivo sempre será gerado novamente a partir dos dados atualizados da NFC-e no momento da transmissão.

<span class="mat-button mdi mdi-download"> Salvar documento</span>

Visível para as NFC-e autorizadas. Possibilita download do arquivo XML da NFC-e, bem como o DANFCe em PDF.

<span class="mat-button mdi mdi-cancel"> Cancelar NFC-e</span>

Visível para as NFC-e autorizadas. Possibilita cancelar a NFC-e perante a SEFAZ.

<span class="mat-button mdi mdi-delete"> Excluir NFC-e</span>

Visível para as NFC-e não autorizadas. Possibilita a exclusão da NFC-e. Ela será eliminada da base de dados e não será possível recuperá-la novamente.

<a id="selecao-multipla"></a>

### Seleção múltipla

O modo de seleção múltipla permite que você seleciona várias NFC-e para executar uma ação com todas simultaneamente. Atualmente, as ações disponíveis para este modo são: consultar, transmitir e excluir. Você pode ativar o modo de seleção múltipla no [menu de ações](#acoes) da NFC-e na opção "Selecionar", ou no caso de dispositivos de toque, dar um toque longo no item. 

![Seleção múltipla na lista de NFC-e](/movimentos/nfce/nfce-selecao-multipla.png)

Depois de selecionada uma NFC-e, você poderá clicar em outras para marcar ou desmarcar. Só é possível marcar as NFC-e sendo exibidas na página atual. Para ter mais opções para selecionar, você pode aumentar a quantidade de itens por página e/ou aplicar um [filtro](#filtros).

![Opções da seleção múltipla](/movimentos/nfce/nfce-selecao-multipla-opcoes.png)

As ações disponíveis conforme indicado na imagem ao lado são: 
1) **consultar** o status das NFC-e na [SEFAZ](/glossario#sefaz);
2) **transmitir** as NFC-e selecionadas;
3) **excluir** as NFC-e selecionadas;
4) desmarcar todas e **fechar** o modo de seleção múltipla. Ainda, na esquerda você conta com uma caixa que lhe permite marcar todas as NFC-e em exibição na página.

As ações disponíveis no modo de seleção múltipla estarão visíveis apenas se todas as NFC-e selecionadas forem elegíveis para tal ação. Por exemplo, se você selecionar uma NFC-e **Pendente** e outra **Autorizada**, as ações não estarão disponíveis.

> Utilizando a transmissão pelo modo de seleção múltipla, as NFC-e serão enviadas para uma fila de processamento em segundo plano e poderão demorar alguns minutos para serem transmitidas. Assim que forem processadas, seu sistema será notificado e elas serão atualizadas instantaneamente.
> Ainda, enquanto as NFC-e estiverem aguardando processamento, elas terão um indicativo conforme a imagem abaixo:
![Indicativo de envio de NFC-e em segundo plano](/movimentos/nfce/nfce-envio-segundo-plano.png)
{.is-info}

# Inutilizar numeração

A inutilização é um processo herdado do tempo em que se faziam as notas fiscais de formulário, quando os blocos eram impressos com a numeração fixa. Quando uma nota era preenchida incorretamente ou rasurada, havia a necessidade de se inutilizar aquela nota para justificar o lapso na numeração. Com o surgimento da NF-e, onde a nota em si só existe depois de enviada para a [SEFAZ](/glossario#sefaz), esse processo se torna menos comum, uma vez que o sistema pode reutilizar a numeração caso haja falha na autorização do documento. 

No entanto, ainda há situações que fazem necessário informar uma quebra na numeração sequencial à Receita, como por exemplo: havendo um erro na transmissão de uma nota, o operador continua transmitindo outras até que o problema seja resolvido, no entanto a demora e tanta, que ao tentar transmitir aquela nota novamente, o servidor a rejeita por ser de emissão muito antiga ou o problema talvez não seja resolvido. Assim, há necessidade de gerar uma nova nota, deixando uma falha no número que aquela problemática assumiu. Para casos assim, a inutilização da numeração se faz útil. 

> Considerando que a nota não existe perante a SEFAZ, chamamos este processo de inutilização da **numeração**, e não da nota.

## Como inutilizar numeração

Para inutilizar uma numeração de NFC-e no Gweb, clique no botão <span class=mat-button><u>I</u>nutilizar numeração</span> no painel lateral da NFC-e:

![Acesso à inutilização na NFC-e](/movimentos/nfce/nfce-inutilizar-acesso.png)

---

![nfce-modal-inutilizacao.png](/movimentos/nfce/nfce-modal-inutilizacao.png)

Será aberta a tela apresentada ao lado, os campos a serem preenchidos são:

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

# XML do mês

O Gweb possui um assistente para que você possa compactar todos os arquivos e baixar ou enviar diretamente por e-mail para a contabilidade. Veja a seguir, como realizar esse processo.

## Compactar arquivos

Para iniciar, clique no botão <span data-mat-button><u>X</u>ML do mês</span> no painel lateral da NFC-e:

![Compactar XML do mês da NFC-e](/movimentos/nfce/nfce-xml-do-mes.png)

Na tela que abrir o sistema carregará todos os meses em que você emitiu NFC-e pelo Gweb. Selecione o mês e se você quer **baixar** o arquivo ou **enviar por e-mail**. Nesta última opção, você precisará informar o endereço de e-mail para qual deseja enviar. Depois, clique no botão <span data-mat-button>Confirmar</span>.

![Enviar arquivo compactado para a contabilidade](/movimentos/nfce/nfce-xml-do-mes-enviar.png)

# Contingência

Em breve...

# Sangria 

Em breve...

# Suprimento

Em breve...

# Configurações do PDV

As configurações do PDV envolvem as emissões de pré-venda e NFC-e. As mesmas são gerais para todos os usuários e somente usuários com permissão podem alterá-las. 
Ao alterar cada seção, você precisará clicar em <span class="mat-button mdi "> salvar</span> individualmente. Veja abaixo os detalhes de cada seção/configuração.

## Comportamento

Nesta seção você configura como o sistema deve se comportar em determinadas situações. Veja em detalhes as opções:

![configurar comportamento do PDV](/movimentos/pdv/comportamento_pdv.png)

### Movimentar estoque?{.subtitle}
Por padrão, a movimentação do estoque ocorre na emissão da NFC-e. Ativando esta opção, a movimentação do estoque se dará na conclusão da pré-venda (posteriormente, ao emitir a NFC-e o estoque não será movimentado, pois a baixa já ocorreu na pré-venda).
- **Não**: o estoque será movimentado ao emitir o documento fiscal.
- **Sim**: o estoque será movimentado quando a pré-venda for concluída.

### Gerar financeiro?{.subtitle}

Por padrão, a geração dos registros financeiros ocorrem na emissão da NFC-e. Ativando esta opção, a geração dos registros financeiros se darão na conclusão da pré-venda (posteriormente, ao emitir a NFC-e não haverá movimentação financeira, pois os registros já foram efetuados na pré-venda).
- **Não**: os registros financeiros serão gerados ao emitir o documento fiscal.
- **Sim**: os registros financeiros serão gerados quando a pré-venda for concluída.

### Solicitar cliente{.subtitle}

Se marcada esta opção, ao abrir uma nova venda, o sistema solicitará que o cliente seja informado. Não será obrigatório informar, podendo a solicitação ser fechada e a venda prosseguirá normalmente. Ainda será possível informar/alterar o cliente mais tarde.

### Após o primeiro item{.subtitle}

Esta opção estará visível apenas se "**solicitar cliente**" **estiver marcada**. Marcando esta opção, o sistema solicitará o cliente somente após o lançamento do primeiro item. Isso pode ser útil em casos onde o operador deixa sempre uma nova venda em aberto, assim, não será necessário informar o cliente logo na abertura da venda.

### Sugerir vendedor{.subtitle}

Se o usuário logado possuir o [atributo vendedor](https://help.gdoorweb.com.br/pt-br/cadastros/pessoas#atributos), será sugerido preferencialmente na venda.

### Exigir cliente após valor{.subtitle}

Com esta opção marcada, caso o valor da venda seja maior do que o valor configurado aqui, será **obrigatório** informar o cliente para salvar a venda. Se você preencher o campo com o valor 0 (zero), será obrigatório informar o cliente sempre.

### Ação ao salvar a venda{.subtitle}

Esta configuração permite escolher o comportamento do sistema em relação às vendas:

- **Perguntar sempre**: ao selecionar esta opção, sempre que concluir uma venda no PDV, **será solicitado o que deseja fazer**:

![PDV perguntar sempre](/movimentos/pdv/o_que.gif)

> É possível selecionar a opção desejada utilizando apenas as teclas no teclado <kbd>S</kbd> (apenas **s**alvar), <kbd>C</kbd> (**c**oncluir pré-venda) e <kbd>N</kbd> (gerar **N**FC-e), seguido de <kbd>Enter</kbd> para confirmar.
{.is-info}

- **Apenas salvar**: selecionando esta opção, uma **pré-venda em aberto** será salva, sendo que a mesma poderá ser **alterada** e **concluída** posteriormente.

- **Concluir pré-venda**: ao selecionar esta opção, uma pré-venda será **salva** e **concluída**, ela **não** poderá mais ser alterada. A movimentação do [estoque](https://help.gdoorweb.com.br/pt-br/movimentos/nfc-e#movimentar-estoque) e [financeiro](https://help.gdoorweb.com.br/pt-br/movimentos/nfc-e#gerar-financeiro) dependerá da configuração selecionada. Ainda será possível gerar uma NFC-e a partir dela.

- **Gerar NFC-e**: uma NFC-e será gerada e transmitida e fará a movimentação do estoque e financeiro.

### Mesclar pré-venda{.subtitle}

Selecione a rotina do Gweb ao converter várias pré-vendas em NFC-e: 
- **Perguntar sempre**: ao selecionar esta opção, sempre será solicitado se deseja **mesclar as pré-vendas em uma única NFC-e**.
- **Mesclar**: uma única NFC-e será gerada com todas as pré-vendas selecionadas (por cliente).
- **Não mesclar**: uma NFC-e por pré-venda será gerada em segundo plano. Você poderá continuar utilizando o sistema normalmente enquanto as NFC-e são geradas.

## Financeiro

Para informação dos vínculos financeiros padrão.
Informe a "**conta**" padrão para geração da movimentação, **plano de contas** e **centro de custos** desejado. Clique em <span class="mat-button mdi "> salvar</span>.

![financeiro](/movimentos/nfce/financeiro.png)

## Meios de pagamento

Nesta seção você pode escolher quais [meios de pagamento](/cadastros/pagamentos) estarão disponíveis para uso no PDV e determinar a ordem em que eles serão exibidos. O primeiro será considerado como padrão.

Depois de [cadastrar o meio de pagamento](https://help.gdoorweb.com.br/cadastros/pagamentos#nova-forma-de-pagamento), para torná-lo disponível no PDV é necessário marcar a caixa de seleção à esquerda, conforme exibido abaixo. Ainda é possível reordenar os pagamentos habilitados, basta clicar no ícone [<em class="mdi mdi-drag-vertical"></em>] à direita do item e arrastá-lo para a posição desejada.

![meios_de_pagamento](/movimentos/pdv/meios_de_pagamento.gif)

## Mensagem promocional

Nesta seção você pode informar uma mensagem a ser impressa junto com as informações adicionais no [DANFCe](/glossario#danfce).

![configurar mensagem promocional](/movimentos/nfce/nfce-configurar-mensagem-promocional2.png)

## Sangria e suprimento

Nesta seção você pode configurar o sistema para abrir a janela de impressão do comprovante de sangria/suprimento logo após a sua emissão. Você ainda poderá imprimir posteriormente o comprovante a partir da [lista de sangria/suprimento](../nfc-e/sangria-suprimento#lista) do dia.

![configurações de sangria e suprimento](/movimentos/nfce/nfce-configurar-sangria-suprimento.png)

# Configurações da NFC-e

As configurações da NFC-e são gerais para todos os usuários, e somente usuários com permissão podem alterá-las. Ao alterar cada seção, você precisará clicar em <span class="mat-button mdi "> salvar</span> individualmente. Veja abaixo os detalhes de cada seção/configuração.

## Operação padrão

Nesta seção você configura a natureza da operação que será aplicada às novas NFC-e geradas. As opções disponíveis são as cadastradas no [cadastro de operações](/cadastros/operacoes).

![configurar operação padrão na NFC-e](/movimentos/nfce/nfce-configurar-operacoes.png)

## Certificado digital

Nesta seção, você adiciona o [certificado digital](/glossario#certificado-digital) para emissão de NFC-e. Na imagem acima você vê as 3 aparências desta seção. Primeiro, você seleciona o arquivo do certificado digital A1. Depois informa a senha do certificado. Por fim, depois de enviar o arquivo, será exibido o nome da empresa para quem o certificado foi emitido e a data de validade, apenas para consulta. Para remover o certificado digital, clique no [<em class="mdi mdi-close"></em>] à direita do nome.

![configuração do certificado digital na NFC-e](/movimentos/nfce/nfce-configurar-certificado.png)

## Ambiente da NFC-e

Nesta seção você configura dados para a geração da NFC-e. Abaixo, veja detalhes de cada configuração.

![configurar o ambiente da NFC-e](/movimentos/nfce/nfce-configurar-ambiente.png)

Série da NFC-e{.subtitle}

Série de emissão da NFC-e. Esta informação pode ser obtida com sua contabilidade.

Ambiente de emissão{.subtitle}

Aqui você determina se as suas NFC-e terão validade fiscal ou não. O ambiente de **homologação** é usado para testar a emissão, e tudo o que você transmitir será sem valor. Já no ambiente de **produção**, as NFC-e transmitidas terão valor fiscal.

Nº da próxima NFC-e{.subtitle}

Apenas informe um valor neste campo se sua empresa já emitia NFC-e por outro sistema, assim você poderá continuar a numeração de onde parou. Ao salvar um número neste campo, a próxima NFC-e será gerada com esse número e as subsequentes terão o número sequencial. O próximo número disponível não fica gravado neste campo, ele serve apenas para informar um ponto de partida para o sistema.

Forma de emissão{.subtitle}

Neste campo você pode configurar a forma de emissão da NFC-e para: 
- **Normal**: emissão mais comum, sem condições específicas.
- **Contingência offline**: emissão da NFC-e em modo offline, para quando o servidor da [SEFAZ](/glossario#sefaz) estiver indisponível. [Entenda melhor](./contingencia).

Token ID{.subtitle}

ID do token gerado para sua geração do QR Code a ser impresso no [DANFCe](/glossario#danfce). A informação de como obter este código pode ser obtida com sua contabilidade.

Código CSC{.subtitle}

**C**ódigo de **S**egurança do **C**ontribuinte, usado para garantir a autenticidade do [DANFCe](/glossario#danfce). A informação de como obter este código pode ser obtida com sua contabilidade.

## Autorizados a baixar o XML

Nesta seção você informa o CPF ou CNPJ de pessoas ou empresas autorizadas a fazer o download do [XML](/glossario#xml) da NFC-e pelo site da [SEFAZ](/glossario#sefaz), por exemplo, a contabilidade da sua empresa. 

![pessoas autorizadas a baixar o XML](/movimentos/nfce/nfce-configurar-autorizados-baixar-xml.png)

Os documentos informados aqui serão adicionados em cada NFC-e gerada. Para adicionar um documento, digite o número no campo intitulado "Adicionar CNPJ/CPF" e pressione <kbd>Enter</kbd> ou clique no botão à direita (<em class="mdi mdi-arrow-right"></em>). Para visualizar ou excluir documentos já adicionados, clique no botão [<em class="mdi mdi-eye"></em>].

## Impressão do DANFCe

Nesta seção você configura detalhes sobre a impressão do [DANFCe](/glossario#danfce). 

![configurar a impressão do DANFCe](/movimentos/nfce/nfce-configurar-impressao-danfce.png)

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

![configuração de conteúdo de e-mails](/movimentos/nfce/nfce-configurar-emails-padrao.png)

Para alterar o conteúdo, clique no botão (<em class="mdi mdi-pencil"></em>) à direita da opção que desejar; será aberto o [editor de texto estilizado](/dicas/editor-de-texto-estilizado) para efetuar as modificações. 
No conteúdo do e-mail, você pode adicionar algumas variáveis que serão substituídas pelo valor correspondente na hora de enviar o e-mail. Para isso, basta digitar o caractere `[` (abre colchetes) e uma lista de opções será sugerida, como mostrado na imagem abaixo:

![utilizando variáveis ao configurar o conteúdo do e-mail da NFC-e](/movimentos/nfce/nfce-configurar-emails-conteudo-variaveis.png)

> Você pode informar uma página HTML completa para o conteúdo do e-mail da NFC-e, mas precisa garantir que seja um código compatível com os possíveis programas de e-mail que o seu cliente possa ter.
{.is-success .gw .gw-tip}

## E-mail

Nesta seção você define configurações gerais sobre o envio de e-mails da NFC-e.

![configurar opções de e-mail da NFC-e](/movimentos/nfce/nfce-configurar-email.png)

Na primeira parte, você pode informar um endereço de resposta para os e-mails de NFC-e enviados pelo Gweb, pois o sistema envia os e-mails a partir do endereço `nao.responda@gdoorweb.com.br`. Sendo assim, se o seu cliente precisar responder o e-mail da NFC-e e o fizer para este endereço, o e-mail nunca chegará. Por isso, você pode definir aqui o nome e o endereço para resposta:

![Aplicação do e-mail de resposta](/movimentos/nfce/nfce-configurar-email-resposta.png)

As demais opções refletem no seguinte:

Enviar e-mail automaticamente{.subtitle}

Com esta opção marcada, após a **autorização** da NFC-e, o sistema enviará um e-mail para o endereço informado no [cadastro do cliente](/cadastros/pessoas#emails).

Cópia para o emitente{.subtitle}

Com esta opção marcada, sempre que enviar um e-mail de NFC-e, uma cópia será enviada para o endereço informado no [cadastro do emitente](/configuracoes/emitente).

Anexar PDF{.subtitle}

Com esta opção marcada, além do [arquivo XML](/glossario#xml) anexado ao e-mail (que é obrigatório), o PDF do [DANFCe](/glossario#danfce) também será anexado.

# Preferências do PDV

As configurações de preferências podem ser diferentes para cada usuário e permitem que ele molde o sistema à sua maneira de trabalhar. Nesta área, você pode ajustar alguns comportamentos de acordo com seu fluxo de trabalho. 

## Comportamento

![preferências de comportamento PDV](/movimentos/pdv/comportamento.png)

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
