---
title: Lista de NFC-e
description: Veja como filtrar e manipular suas NFC-e pela lista
published: true
date: 2020-09-01T16:14:29.787Z
tags: nfc-e
editor: markdown
---

# Lista de NFC-e

Na tela de lista, você visualiza as NFC-e emitidas e pode fazer uma busca ou filtro para visualizar apenas dados pertinentes ao que você precisa.

## Filtros

Os filtros podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. Os filtros serão salvos no navegador, então, se você trocar de computador ou usar outro navegador, precisará refazer os filtros, se for necessário. Para fazer um filtro na lista, clique no botão de filtro ao lado do campo de busca e será exibido o painel de filtros:

![Filtro na lista de NFC-e](/movimentos/nfce/filtro-lista-nfce.png)

No painel de filtros destacado na imagem acima, você encontra, no canto direito superior:

<span class="mdi mdi-refresh"></span>: Atualizar as opções de filtro. Os valores possíveis de filtro são baseados nas informações registradas nas NFC-e, por exemplo, o filtro **Usuário** só vai mostrar os usuários que registraram NFC-e, para facilitar o filtro. Assim, caso você precise atualizar as opções disponíveis, clique neste botão.

![Opções do filtro](/movimentos/nfce/opcoes-filtro-nfce.png =200x){.float-right}

<span class="mdi mdi-filter-menu"></span>: Mostra ações relativas ao filtro padrão. Para definir um filtro como padrão, clique neste botão, depois em **Definir como padrão**. Para remover um filtro padrão, clique neste botão, depois em **Remover padrão**. A imagem ao lado mostra essas opções:

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
Filtro por perído. Para exibir apenas NFC-e geradas a partir de uma data específica, aplique este filtro.
- **Data final**
Filtro por perído. Para exibir apenas NFC-e geradas até uma data específica, aplique este filtro.

Para aplicar um filtro, clique no botão <span class=mat-button>Aplicar</span>, no canto direito inferior do quadro de filtros. Depois de aplicado um filtro, você pode removê-lo, clicando em <span class=mat-button>Limpar filtros</span>:

![Aplicar e limpar filtros na lista de NFC-e](/movimentos/nfce/nfce-filtros-aplicar-limpar.png)


## Lista

No quadro da lista, na barra superior, você encontra o controle de paginação, que permite visualizar as NFC-e em partes pra não carregar todas de uma vez. Você pode escolher o tamanho da página, ou seja, a quantidade de itens a cada carregamento, além de poder navegar entre as páginas.

![Controle de paginação](/movimentos/nfce/nfce-paginacao.png)

Em cada item da lista você pode encontrar as seguintes informações:

![nfce-item-lista-informacoes.png](/movimentos/nfce/nfce-item-lista-informacoes.png){.float-right}

1. Imagem vinculada ao cadastro do cliente. Apresentará uma imagem genérica quando não houver.
2. Nome do cliente. Será apresentada a informação "Consumidor final" quando o cliente não for informado.
3. Número sequencial da NFC-e, modelo (sempre 65) e [série](/movimentos/nfc-e/configurar#ambiente). Também apresenta o valor total da NFC-e.
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

Visível para as NFC-e enviadas para a SEFAZ e sem resposta, lote recebido, autorizadas, canceladas, com duplicidade. Consulta e atualiza o status da NFC-e perante à SEFAZ. Se a NFC-e não estava autorizada no sistema, e a consulta retornou que ela está, os processos de autorização da nota, tal como baixa de estoque, serão executados.

<span class="mat-button mdi mdi-content-copy"> Copiar chave de acesso</span>

Visível para as NFC-e que possuem chave de acesso. Copia a chave de acesso para a área de transferência.

<span class="mat-button mdi mdi-email"> Enviar por e-mail</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Envia um e-mail para o endereço do cadastro do cliente com o XML da NFC-e. Caso esteja configurado, envia também o DANFCe. [Veja como configurar](/movimentos/nfc-e/configurar#email).

<span class="mat-button mdi mdi-file-pdf"> Visualizar DANFCe</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o DANFCe em PDF no [visualizador de PDF](/dicas/visualizador-pdf) do GDOOR WEB.

<span class="mat-button mdi mdi-xml"> Visualizar XML</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o [arquivo XML](/glossario#xml) gerado para a NFC-e.

<span class="mat-button mdi mdi-file-eye"> Pré-visualizar DANFCe</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o DANFCe em PDF no [visualizador de PDF](/dicas/visualizador-pdf) do GDOOR WEB.

<span class="mat-button mdi mdi-xml"> Visualizar XML</span>

Visível para as NFC-e autorizadas, geradas em contingência, canceladas ou denegadas. Permite visualizar o [arquivo XML](/glossario#xml) gerado para a NFC-e.
