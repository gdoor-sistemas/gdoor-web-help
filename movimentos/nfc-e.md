---
title: Nota Fiscal de Consumidor eletrônica
description: Veja como funciona o módulo de NFC-e no GDOOR WEB
published: true
date: 2022-03-07T11:48:16.393Z
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

# Lista

Na tela de lista, você visualiza as NFC-e emitidas e pode fazer uma busca ou filtro para visualizar apenas dados pertinentes ao que você precisa.

## Busca

Para localizar alguma NFC-e rapidamente, digite no campo de busca no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão para limpar a busca (<em class="mdi mdi-close"></em>) que fica no final do campo de busca. Para aplicar [filtros](#filtros) aprimorados, clique no botão "Filtrar" (<em class="mdi mdi-filter"></em>). Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "Atualizar lista" (<em class="mdi mdi-refresh"></em>) à direita.

![Busca na lista e filtros na NFC-e](/movimentos/nfce/nfce-lista-buscar.png)

> O que você digitar será buscado entre as seguintes informações da NFC-e: 
> Campos numéricos: **chave de acesso**, **código de barras** e **código** do produto, **número da nota**
> Campos textuais: **razão social** e **nome fantasia** do cliente e **nome dos produtos**
{.is-success .gw .gw-tip}

## Filtros

Os filtros podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. Os filtros serão salvos no navegador, então, se você trocar de computador ou usar outro navegador, precisará refazer os filtros, se for necessário. Para fazer um filtro na lista, clique no botão de filtro ao lado do campo de busca e será exibido o painel de filtros:

![Filtro na lista de NFC-e](/movimentos/nfce/filtro-lista-nfce.png)

No painel de filtros destacado na imagem acima, você encontra, no canto direito superior:

<span class="mdi mdi-refresh"></span>: Atualizar as opções de filtro. Os valores possíveis de filtro são baseados nas informações registradas nas NFC-e, por exemplo, o filtro **Usuário** só vai mostrar os usuários que registraram NFC-e, para facilitar o filtro. Assim, caso você precise atualizar as opções disponíveis, clique neste botão.

<span class="mdi mdi-filter-menu"></span>: Mostra ações relativas ao filtro padrão. Para definir um filtro como padrão, clique neste botão, depois em **Definir como padrão**. Para remover um filtro padrão, clique neste botão, depois em **Remover padrão**. A imagem ao lado mostra essas opções:

![Opções do filtro](https://help.gdoorweb.com.br/movimentos/nfce/opcoes-filtro-nfce.png)

> Sempre que um filtro estiver aplicado, você verá o botão de filtro laranjado, assim, se algumas NFC-e não estiverem aparecendo na lista, você poderá facilmente saber se um filtro está aplicado:
![nfce-filtro-aplicado.png](/movimentos/nfce/nfce-filtro-aplicado.png =250x)
{.is-success .gw .gw-tip}

As opções de filtro são as seguintes:

- **Usuário**
Mostra todos os usuários que já gravaram alguma NFC-e. Ao aplicar este filtro, serão exibidas apenas as NFC-e salvas pelo usuário selecionado.
- **Vendedor**
Mostra todos os vendedores referenciados em itens da NFC-e. Ao aplicar este filtro, serão exibidas apenas as NFC-e que o vendedor selecionado está referenciado em ao menos 1 item.
- **Status**
Mostra todos os status das NFC-e. Esse status é o que aparece colorido na lista, representa a situação atual da NFC-e. Ao aplicar este filtro, serão exibidas apenas as NFC-e com o status selecionado.
- **Data inicial**
Filtro por período. Para exibir apenas NFC-e geradas a partir de uma data específica, aplique este filtro.
- **Data final**
Filtro por período. Para exibir apenas NFC-e geradas até uma data específica, aplique este filtro.

Para aplicar um filtro, clique no botão <span class=mat-button>Aplicar</span>, no canto direito inferior do quadro de filtros. Depois de aplicado um filtro, você pode removê-lo, clicando em <span class=mat-button>Limpar filtros</span>:

![Aplicar e limpar filtros na lista de NFC-e](/movimentos/nfce/nfce-filtros-aplicar-limpar.png)

## Lista

No quadro da lista, na barra superior, você encontra o controle de paginação, que permite visualizar as NFC-e em partes pra não carregar todas de uma vez. Você pode escolher o tamanho da página, ou seja, a quantidade de itens a cada carregamento, além de poder navegar entre as páginas.

![Controle de paginação](/movimentos/nfce/nfce-paginacao.png)

Em cada item da lista você pode encontrar as seguintes informações:

![nfce-item-lista-informacoes.png](/movimentos/nfce/nfce-item-lista-informacoes.png){.float-right}

1. Imagem vinculada ao cadastro do cliente. Apresentará uma imagem genérica quando não houver.
2. Nome do cliente. Será apresentada a informação "Consumidor final" quando o cliente não for informado.
3. Número sequencial da NFC-e, modelo (sempre 65), [série](/movimentos/nfc-e/configurar#ambiente) e data da emissão. Também apresenta o valor total da NFC-e.
4. Chave de acesso e status da NFC-e.
5. [Menu de ações](#acoes) a serem executadas com a NFC-e em questão. Caso a NFC-e ainda não tenha sido transmitida para a [SEFAZ](/glossario#sefaz), ao lado deste botão será exibido outro (<em class="mdi mdi-pencil"></em>) para editar a NFC-e.

### Ações{#acoes}

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

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o DANFCe em PDF no [visualizador de PDF](/dicas/visualizador-pdf) do GDOOR WEB.

<span class="mat-button mdi mdi-xml"> Visualizar XML</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o [arquivo XML](/glossario#xml) gerado para a NFC-e.

<span class="mat-button mdi mdi-file-eye"> Pré-visualizar DANFCe</span>

Visível para as NFC-e ainda não transmitidas. Permite ter uma prévia se como ficaria o DANFCe no caso de a NFC-e ser autorizada com os dados atuais. A pré-visualização será aberta em PDF no [visualizador de PDF](/dicas/visualizador-pdf) do GDOOR WEB.

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

O modo de seleção múltipla permite que você selecione várias NFC-e para executar uma ação com todas simultaneamente. Atualmente, as ações disponíveis para este modo são: consultar, transmitir e excluir. Você pode ativar o modo de seleção múltipla por usar o [menu de ações](#acoes) da NFC-e na opção "Selecionar", ou no caso de dispositivos de toque, dar um toque longo no item. 

![Seleção múltipla na lista de NFC-e](/movimentos/nfce/nfce-selecao-multipla.png)

Depois de selecionada uma NFC-e, você poderá clicar em outras para marcar ou desmarcar. Só é possível marcar as NFC-e sendo exibidas na página atual. Para ter mais opções para selecionar, você pode aumentar a quantidade de itens por página e/ou aplicar um [filtro](#filtros).

![Opções da seleção múltipla](/movimentos/nfce/nfce-selecao-multipla-opcoes.png){.float-right .ml8}

As ações disponíveis conforme indicado na imagem ao lado são: 1) **consultar** o status das NFC-e na [SEFAZ](/glossario#sefaz), 2) **transmitir** as NFC-e selecionadas, 3) **excluir** as NFC-e selecionadas e 4) desmarcar todas e **fechar** o modo de seleção múltipla. Ainda, na esquerda você conta com uma caixa que lhe permite marcar todas as NFC-e em exibição na página.
As ações disponíveis no modo de seleção múltipla estarão visíveis apenas se todas as NFC-e selecionadas forem elegíveis para tal ação. Por exemplo, se você selecionar uma NFC-e **Pendente** e outra **Autorizada**, as ações não estarão disponíveis.

> Utilizando a transmissão pelo modo de seleção múltipla, as NFC-e serão enviadas para uma fila de processamento em segundo plano e poderão demorar alguns minutos para serem transmitidas. Assim que forem processadas, seu sistema será notificado e elas serão atualizadas instantaneamente.
> Ainda, enquanto as NFC-e estiverem aguardando processamento, elas terão um indicativo conforme a imagem abaixo:
![Indicativo de envio de NFC-e em segundo plano](/movimentos/nfce/nfce-envio-segundo-plano.png)
{.is-info}

# Inutilizar numeração

A inutilização é um processo herdado do tempo em que se faziam as notas fiscais de formulário, quando os blocos eram impressos com a numeração fixa. Quando uma nota era preenchida incorretamente ou rasurada, havia a necessidade de se inutilizar aquela nota para justificar o lapso na numeração. Com o surgimento da NF-e, onde a nota em si só existe depois de enviada para a [SEFAZ](/glossario#sefaz) esse processo se torna menos comum, uma vez que o sistema pode reutilizar a numeração caso haja falha na autorização do documento. No entanto, ainda há situações que fazem necessário informar uma quebra na numeração sequencial à Receita, como por exemplo: havendo um erro na transmissão de uma nota, o operador continua transmitindo outras até que o problema seja resolvido, no entanto a demora e tanta, que ao tentar transmitir aquela nota novamente, o servidor a rejeita por ser de emissão muito antiga ou o problema talvez não seja resolvido. Assim, há necessidade de gerar uma nova nota, deixando uma falha no número que aquela problemática assumiu. Para casos assim, a inutilização da numeração se faz útil. 

> Considerando que a nota não existe perante a SEFAZ, chamamos este processo de inutilização da **numeração**, e não da nota.

## Como fazer no GDOOR WEB?

Para inutilizar uma numeração de NFC-e no GDOOR WEB, clique no botão <span class=mat-button><u>I</u>nutilizar numeração</span> no painel lateral da NFC-e:

![Acesso à inutilização na NFC-e](/movimentos/nfce/nfce-inutilizar-acesso.png)

---

![nfce-modal-inutilizacao.png](/movimentos/nfce/nfce-modal-inutilizacao.png){.align-right}

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

Algumas contabilidades pedem que as empresas enviem no início do mês, todos os arquivos XML de notas emitidas no mês anterior. Pensando nisso, o GDOOR WEB possui um assistente para que você possa compactar todos os arquivos e baixar ou enviar diretamente por e-mail para a contabilidade. Veja a seguir, como realizar esse processo.

## Compactando arquivos

Para iniciar, clique no botão <span data-mat-button><u>X</u>ML do mês</span> no painel lateral da NFC-e:

![Compactar XML do mês da NFC-e](/movimentos/nfce/nfce-xml-do-mes.png)

Na tela que abrir o sistema carregará todos os meses em que você emitiu NFC-e pelo GDOOR WEB. Selecione o mês e se você quer **baixar** o arquivo ou **enviar por e-mail**. Nesta última opção, você precisará informar o endereço de e-mail para qual deseja enviar. Depois, clique no botão <span data-mat-button>Confirmar</span>.

![Enviar arquivo compactado para a contabilidade](/movimentos/nfce/nfce-xml-do-mes-enviar.png)


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

