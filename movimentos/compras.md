---
title: Compras
description: Veja como você pode cadastrar as notas de compra manualmente e por meio da importação do XML
published: true
date: 2023-12-13T20:19:39.144Z
tags: nf-e, estoque, movimentos, compras, visão geral
editor: markdown
dateCreated: 2020-01-03T19:34:45.629Z
---

# Introdução

O módulo de compras fará a movimentação de entrada dos produtos no estoque e também a movimentação financeira das [despesas](/financeiro/despesas) das compras efetuadas de forma à vista ou a prazo.

# Lista

Ao acessar o módulo **movimentações » compras**, você visualiza a **lista** de **notas de compra**. Pode [cadastrar nota de compra](https://help.gdoorweb.com.br/pt-br/movimentos/compras#cadastrar-nota-de-compra) e fazer uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/compras#buscar) ou [filtrar](https://help.gdoorweb.com.br/pt-br/movimentos/compras#filtrar) informações para visualizar apenas dados pertinentes ao que você precisa:

![lista](/movimentos/compras/lista.png)

## Buscar

Para localizar uma nota de compra, **digite no campo de busca** no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>).
Para aplicar [filtros](https://help.gdoorweb.com.br/pt-br/movimentos/compras#filtrar) aprimorados, clique no botão "**filtrar**" (<em class="mdi mdi-filter"></em>). 
Para atualizar a lista, considerando os registros adicionados mais recentemente, clique no botão "**atualizar lista**" (<em class="mdi mdi-refresh"></em>).
 
![digite para buscar](/movimentos/compras/busca.png)
 
> O que você digitar será buscado entre as seguintes informações das notas de compra:  
> **Campos numéricos**: código de barras e código do produto, número da nota;  
> **Campos textuais**: razão social e nome fantasia do fornecedor e nome dos produtos.
{.is-success .gw .gw-tip}

## Filtrar

Os filtros também podem ser definidos como padrão. Para efetuar um filtro na lista, clique no botão "**filtro**" (<em class="mdi mdi-filter"></em>) e o painel será exibido:

![filtrar](/movimentos/compras/filtro_compra.png)

No painel de filtros destacado na imagem acima temos:

<span class="mdi mdi-refresh"></span>: atualizar as opções de filtro;

<span class="mdi mdi-filter-menu"></span>: mostra ações relativas ao filtro padrão. 

Para definir um filtro como padrão, clique no botão "**mais opções** (<span class="mdi mdi-filter-menu"></span>), depois em "**definir como padrão**" (<span class="mdi mdi-filter-plus"></span>).
Para remover um filtro padrão, clique no botão "**mais opções**" (<span class="mdi mdi-filter-menu"></span>), depois em "**remover padrão**" (<span class="mdi mdi-filter-remove"></span>). A imagem abaixo mostra essas opções:

![opções do filtro](https://help.gdoorweb.com.br/movimentos/nfce/opcoes-filtro-nfce.png)

> Sempre que um filtro estiver aplicado na lista, você verá o **botão de filtro na cor laranja**:
![filtro aplicado](https://help.gdoorweb.com.br/movimentos/nfce/nfce-filtro-aplicado.png)
{.is-success .gw .gw-tip}

As opções de filtro são as seguintes:

-   **Fornecedor**;
-   **Usuário**;
-   **Data cadastro inicial**;
-   **Data cadastro final**;
-   **Status**;
-   **Data emissão inicial**;
-   **Data emissão final**.

Para aplicar um filtro, clique no botão <span class="mat-button mdi "> aplicar</span>. Depois de aplicado, você pode removê-lo, clicando em <span class="mat-button mdi "> limpar filtros</span>:

![](/movimentos/pedidos/limpar_filtro.png)

## Detalhes da nota de compra

Ao clicar em uma nota de compra, abrirá a tela de **detalhes da compra**. Aqui é possível visualizar todos os dados que envolvem a compra, desde dados do fornecedor até dados de tributação dos itens.

No canto superior direito, estão disponíveis as ações de <em class="mdi mdi-pencil"></em> **Editar**, <em><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 32 32"><path fill="#424242" d="M16.604 27.976a.561.561 0 01-.008-.188c.011-.142.016-.155.073-.195.08-.056.09-.072.09-.145.001-.07-.078-.156-.16-.176-.05-.013-.214-.184-.214-.224a.245.245 0 00-.051-.08c-.038-.045-.068-.061-.116-.061-.054 0-.085-.022-.196-.138-.075-.08-.148-.139-.17-.139-.02 0-.066-.026-.099-.059-.046-.045-.072-.056-.108-.047-.04.01-.073-.013-.196-.13l-.149-.14-.098.05c-.153.077-.2.065-.227-.059-.017-.08-.393-.483-.45-.483a.417.417 0 00-.14.06c-.097.06-.13.069-.236.062-.037-.003-.054-.014-.053-.038 0-.02.295-.34.656-.714l.656-.679.366-.214.366-.215.222-.013c.122-.007.226-.02.231-.028.01-.015-.009-.036-.074-.082-.027-.02-.036-.072-.047-.266a1.143 1.143 0 00-.04-.286 6.037 6.037 0 01-.082-.153c-.125-.239-.133-.247-.237-.247-.078 0-.094-.007-.099-.04-.003-.026.018-.055.067-.088l.072-.049-.01-.366a2.743 2.743 0 01.008-.412c.02-.055.007-.08-.027-.046-.035.035-.065.029-.13-.026-.08-.067-.17-.064-.269.01a.239.239 0 01-.173.06c-.133 0-.165-.038-.182-.216-.012-.118-.024-.153-.074-.21-.045-.05-.074-.122-.12-.3a1.789 1.789 0 00-.09-.276c-.018-.03-.084-.063-.189-.099-.157-.053-.17-.054-.561-.05a2.729 2.729 0 01-.437-.013c-.03-.017-.037-.059-.049-.297-.013-.262-.018-.29-.101-.519a2.356 2.356 0 01-.088-.271c0-.016.027-.065.06-.107a.367.367 0 00.058-.096.24.24 0 00-.05-.077c-.08-.096-.066-.14.094-.291.14-.133.142-.136.116-.192a.877.877 0 01-.037-.219l-.01-.162.062-.035c.078-.045.079-.095.001-.175a.262.262 0 01-.075-.168c-.02-.142-.068-.229-.146-.262a.587.587 0 01-.146-.114c-.078-.082-.083-.094-.105-.269l-.023-.182.052-.062c.104-.124.101-.125-.516-.136a6.469 6.469 0 01-.57-.023 1.014 1.014 0 01-.037-.198c-.02-.165-.031-.195-.097-.281-.09-.118-.086-.14.031-.177.058-.018.048-.232-.016-.34a.814.814 0 01-.077-.255c-.033-.202-.066-.284-.12-.295a10.396 10.396 0 00-.453-.03c-.333-.018-.423-.029-.458-.055-.024-.019-.151-.13-.283-.248l-.24-.214-.085.013c-.087.013-.122-.005-.166-.084-.018-.031-.023-.031-.078.001-.088.052-.164.044-.228-.023-.053-.055-.064-.058-.253-.064l-.197-.007-.151-.163c-.083-.09-.167-.163-.186-.163-.039 0-.138-.143-.174-.252a.72.72 0 01-.012-.228.525.525 0 00-.037-.285c-.049-.13-.046-.166.02-.22.057-.048.032-.256-.036-.302a.86.86 0 00-.201-.015c-.166 0-.2.007-.461.1a1.957 1.957 0 00-.546.275c-.23.152-.278.176-.378.188-.164.02-.172.026-.26.162-.078.12-.083.123-.165.123a.736.736 0 01-.198-.039c-.097-.034-.162-.04-.505-.04-.367 0-.396-.002-.444-.04-.047-.037-.052-.054-.052-.172 0-.071-.01-.16-.024-.195-.02-.056-.017-.08.02-.17.046-.111.06-.318.022-.341-.02-.013-.035-.004-.343.22-.134.098-.186.125-.217.115a1.465 1.465 0 00-.202-.027.57.57 0 01-.192-.04c-.018-.014-.037-.06-.044-.1-.012-.075-.029-.093-.199-.208-.06-.04-.087-.047-.154-.037-.122.018-.144-.019-.099-.167.04-.134.035-.15-.085-.242-.063-.049-.128-.138-.242-.332-.147-.25-.156-.273-.156-.381 0-.104.006-.121.061-.171.052-.048.058-.062.04-.097-.039-.072-.025-.095.133-.217.194-.15.217-.198.173-.355a1.534 1.534 0 01-.032-.127c0-.013.864-.808.953-.877.045-.035.067-.04.117-.025a.368.368 0 00.303-.083c.05-.046.077-.056.158-.056.063 0 .12.014.162.04.124.075.28.035.282-.071 0-.021.013-.056.03-.077.018-.025.028-.085.028-.173 0-.082.011-.152.028-.179.05-.078.069-.245.151-1.347l.082-1.085.067-.066c.096-.094.088-.18-.028-.305-.043-.045-.066-.054-.154-.054h-.103l-.07-.139a.453.453 0 01-.059-.166c.021-.055.134-.07.54-.07h.408l.056-.06c.031-.032.068-.058.08-.058.014 0 .048.031.077.07l.054.07.134-.12a.625.625 0 01.166-.119c.017 0 .056.038.086.084.046.071.056.11.065.261l.01.178.059.007c.032.003.26.059.505.123s.47.117.5.117c.074 0 .187-.063.268-.149.038-.04.112-.108.165-.15.077-.061.111-.076.178-.076.077 0 .091-.009.181-.113a.534.534 0 00.108-.17c.008-.045.026-.062.087-.083a.659.659 0 00.194-.143c.093-.093.118-.13.12-.184l.003-.067-.217-.01a1.41 1.41 0 01-.253-.028c-.058-.027-.07-.09-.058-.31.01-.177.017-.213.057-.26.073-.088.063-.175-.027-.25a.247.247 0 00-.128-.06c-.06 0-.141-.067-.128-.105.004-.014.06-.026.14-.03l.134-.005.096.09c.053.049.099.09.102.09l.173.018c.147.014.171.022.208.069.04.049.052.052.17.047l.126-.006.006-.076c.006-.065.019-.083.098-.133.082-.052.108-.058.256-.058.182 0 .194-.004.433-.158.1-.064.176-.099.216-.099.052 0 .078-.02.173-.14a.647.647 0 00.111-.173c0-.062.044-.081.181-.081.112 0 .137.006.154.038.032.06.025.09-.042.198-.07.112-.068.117.064.183a.537.537 0 01.161.143c.095.127.1.21.016.307-.032.038-.059.089-.06.114a.228.228 0 01-.024.089c-.046.084-.087.45-.06.526.024.063.738.906.769.908.013 0 .23-.095.483-.211l.46-.213h.83l-.007-.159c-.005-.13 0-.164.026-.186.026-.022.041-.022.07-.004.063.039.16.027.292-.036a.786.786 0 01.15-.059c.052 0 .129.082.141.15.014.074.036.081.14.044.058-.021.078-.018.155.02.101.048.23.056.264.016.013-.016.084-.033.162-.041.11-.011.15-.007.187.017.03.02.092.031.179.031.13 0 .133-.001.203-.082a2.65 2.65 0 00.22-.398c.13-.274.174-.345.326-.53.097-.116.192-.217.211-.224.044-.015.188.094.214.162.01.027.018.137.018.246v.198l.076.087c.082.092.102.167.102.378 0 .106.002.11.124.236.111.115.134.13.218.139.083.01.1.02.152.095.053.077.058.1.058.247 0 .222.078.483.149.5.038.01.049.026.049.07 0 .032-.01.064-.02.07-.01.007-.02.028-.02.047 0 .02-.012.05-.026.07-.023.032-.043.035-.16.023-.153-.017-.174-.042-.119-.144.03-.055.032-.07.01-.084-.036-.022-.256-.068-.269-.055-.005.006.008.058.03.116a.62.62 0 01.04.17c0 .045.012.065.04.075.03.009.04.03.04.078 0 .117-.113.176-.16.084a.48.48 0 00-.03-.052c-.005-.005-.034.016-.066.047-.077.074-.112.056-.13-.068-.014-.106-.023-.115-.152-.146-.05-.012-.058-.005-.131.14a1.676 1.676 0 01-.139.23.259.259 0 00-.06.133c0 .034-.024.082-.062.125-.056.063-.058.072-.03.1.057.057.028.103-.088.146-.171.064-.088.12.123.083a.675.675 0 00.251-.104c.112-.071.147-.084.24-.085h.108l.035.111c.026.08.06.133.12.19.079.072.094.078.236.088.132.01.161.02.226.073l.074.062.056-.07c.064-.08.127-.09.18-.03.025.026.062.04.113.04.081 0 .089-.008.678-.63l.138-.145.27.008c.18.004.28.015.296.031.013.014.062.024.108.024.062 0 .09.01.104.037.014.025.05.04.122.049a.318.318 0 01.135.041c.049.045.17.09.238.09.034 0 .094.023.134.05.056.038.098.05.183.05.093 0 .125.01.194.06a.365.365 0 01.094.087.403.403 0 00.11.092.33.33 0 01.165.35c-.01.091-.026.124-.083.182-.088.091-.089.187-.002.234.055.03.056.03.138-.062.064-.072.102-.096.163-.106a.28.28 0 00.12-.051c.028-.026.09-.043.19-.055a.593.593 0 00.196-.048c.056-.04.217-.042.29-.004.028.015.1.064.16.108.098.074.117.08.227.08.074 0 .137.012.162.03.03.021.058.024.102.011.069-.02.257.02.281.06.011.019.113.016.446-.01l.431-.034.129.059c.07.032.234.13.364.219.13.088.25.16.268.16.082 0 .162.046.189.11.02.045.104.123.289.264.144.11.275.224.292.253.02.034.088.081.188.13l.157.077.395.027c.25.017.417.037.456.055.053.024.07.051.113.18.04.116.046.16.03.19-.015.03-.012.056.011.105.035.073.041.23.012.285-.015.03.006.067.109.198.13.166.147.213.104.306-.017.038-.017.069 0 .127.028.09-.003.255-.072.39-.029.057-.039.102-.03.142.009.046-.005.085-.061.177-.06.096-.07.13-.06.184.01.062-.003.084-.186.309a2.606 2.606 0 00-.208.278.932.932 0 01-.15.17c-.136.13-.14.133-.22.12-.072-.01-.079-.008-.066.023.008.02.019.048.023.065.005.017-.067.11-.175.225-.1.107-.21.245-.242.306-.047.088-.07.112-.114.117-.064.007-.11.072-.064.09.033.012.04.082.01.1-.011.007-.02.039-.02.07 0 .046-.048.113-.22.31-.12.139-.23.26-.245.267-.016.01-.052-.01-.097-.052-.093-.088-.16-.105-.226-.055-.048.035-.05.049-.05.203 0 .13-.01.183-.043.245a.643.643 0 00-.052.207c-.01.107-.005.14.03.201l.04.073-.042.103c-.043.103-.043.105-.012.411.018.17.04.323.05.342.01.019.018.126.018.239 0 .18-.005.209-.04.24-.029.027-.039.061-.04.136a.297.297 0 01-.028.137c-.015.02-.022.05-.016.066.006.016-.008.055-.031.086-.053.072-.054.146-.002.213.028.035.037.067.029.1-.015.059-.339.417-.377.417-.017 0 0 .036.044.094l.072.093-.014.227c-.01.18-.022.242-.055.296a.508.508 0 00-.053.129c-.01.043-.033.069-.086.095-.055.027-.074.049-.074.084a.3.3 0 01-.046.122.564.564 0 00-.06.131c-.015.06-.418.584-.45.584-.01 0-.012.022-.005.048.006.026.002.053-.01.06-.032.02-.026.16.008.189.036.03.04.119.005.161-.048.06-.237.174-.29.174-.068 0-.135.071-.23.247a.924.924 0 01-.094.151c-.01.007-.13.02-.265.027-.278.016-.367-.006-.39-.098-.01-.042-.019-.046-.05-.03-.027.015-.038.042-.038.099 0 .07-.007.082-.068.11-.063.031-.071.031-.118 0a.13.13 0 00-.1-.02.234.234 0 01-.111-.01c-.052-.018-.073-.015-.124.016-.041.025-.074.032-.102.021-.05-.019-.166.027-.166.065 0 .055-.088.11-.198.124a.512.512 0 00-.327.162c-.073.073-.087.079-.23.091-.113.01-.173.027-.222.06a.447.447 0 01-.155.06c-.12.017-.272.113-.512.322-.111.098-.249.2-.305.229a.32.32 0 00-.128.104.171.171 0 01-.06.07c-.104.05-.104.05-.098.135.004.074-.005.096-.076.18-.099.118-.118.179-.118.383 0 .102-.01.172-.027.197-.019.028-.03.138-.037.375-.008.25-.024.404-.064.603-.029.148-.06.28-.068.293a.514.514 0 01-.151.074c-.115.042-.163.075-.303.21-.092.09-.165.173-.162.186a.378.378 0 01-.046.123.462.462 0 00-.05.16.574.574 0 01-.061.182 4.15 4.15 0 01-.415.637.334.334 0 00-.076.103c0 .027-.333.31-.492.418a.403.403 0 01-.19.081c-.126.008-.128.007-.128-.088 0-.086.002-.088.114-.15.3-.168.395-.242.468-.368a.866.866 0 01.16-.195.476.476 0 00.108-.115.524.524 0 01.06-.095c.081-.1-.012-.163-.097-.065-.056.064-.086.062-.16-.012-.096-.096-.13-.073-.131.088-.002.132-.004.136-.085.21-.077.07-.082.08-.07.154.015.09.005.1-.138.132-.09.02-.1.03-.112.085a.428.428 0 01-.095.152c-.075.082-.081.096-.081.202a.501.501 0 01-.06.242c-.034.07-.07.177-.082.237a.335.335 0 01-.097.192c-.042.046-.077.101-.077.123 0 .028-.053.075-.177.158-.185.125-.243.143-.275.083zm1.82-19.757c-.03-.012-.032-.154-.003-.293.012-.054.02-.19.017-.3-.003-.191-.001-.204.046-.251.073-.073.137-.082.25-.034.085.037.134.042.412.042.202 0 .335.009.368.023.049.023.05.029.038.134-.016.133-.023.147-.148.297-.077.093-.11.119-.154.119-.036 0-.076.023-.122.07-.06.062-.077.07-.139.06-.061-.01-.079-.003-.137.057-.076.08-.152.09-.207.03-.046-.05-.056-.05-.12.01-.055.05-.06.053-.102.036zm-.25-.119c-.02-.02-.014-.194.009-.217.014-.015 0-.033-.05-.062-.115-.068-.076-.164.08-.193.09-.017.146.02.146.092 0 .046-.014.068-.06.093-.071.041-.072.051-.01.08.042.018.05.036.05.1 0 .059-.01.085-.038.1-.043.023-.107.027-.126.007zm-.683-.075c-.02-.024-.018-.04.009-.081a.59.59 0 00.057-.132.329.329 0 01.113-.156c.098-.083.134-.084.177-.005.024.045.02.054-.047.123a.313.313 0 00-.073.096.67.67 0 01-.194.184c-.01 0-.03-.013-.043-.03zm1.337-.741c-.05-.031-.042-.084.024-.147.054-.051.062-.054.118-.03.047.019.06.037.06.079 0 .03-.012.064-.026.076-.04.033-.137.045-.176.022z"/></svg></em> **Gerar NF-e de devolução**, <em class="mdi mdi-trash-can"></em> **Excluir** e <em class="mdi mdi-reload"></em> **Atualizar**.

![Opções detalhe da compra](/movimentos/compras/opcoes-detalhe-compra.png)

> **Gerar NF-e de devolução**.
Ao clicar em <em><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 32 32"><path fill="#424242" d="M16.604 27.976a.561.561 0 01-.008-.188c.011-.142.016-.155.073-.195.08-.056.09-.072.09-.145.001-.07-.078-.156-.16-.176-.05-.013-.214-.184-.214-.224a.245.245 0 00-.051-.08c-.038-.045-.068-.061-.116-.061-.054 0-.085-.022-.196-.138-.075-.08-.148-.139-.17-.139-.02 0-.066-.026-.099-.059-.046-.045-.072-.056-.108-.047-.04.01-.073-.013-.196-.13l-.149-.14-.098.05c-.153.077-.2.065-.227-.059-.017-.08-.393-.483-.45-.483a.417.417 0 00-.14.06c-.097.06-.13.069-.236.062-.037-.003-.054-.014-.053-.038 0-.02.295-.34.656-.714l.656-.679.366-.214.366-.215.222-.013c.122-.007.226-.02.231-.028.01-.015-.009-.036-.074-.082-.027-.02-.036-.072-.047-.266a1.143 1.143 0 00-.04-.286 6.037 6.037 0 01-.082-.153c-.125-.239-.133-.247-.237-.247-.078 0-.094-.007-.099-.04-.003-.026.018-.055.067-.088l.072-.049-.01-.366a2.743 2.743 0 01.008-.412c.02-.055.007-.08-.027-.046-.035.035-.065.029-.13-.026-.08-.067-.17-.064-.269.01a.239.239 0 01-.173.06c-.133 0-.165-.038-.182-.216-.012-.118-.024-.153-.074-.21-.045-.05-.074-.122-.12-.3a1.789 1.789 0 00-.09-.276c-.018-.03-.084-.063-.189-.099-.157-.053-.17-.054-.561-.05a2.729 2.729 0 01-.437-.013c-.03-.017-.037-.059-.049-.297-.013-.262-.018-.29-.101-.519a2.356 2.356 0 01-.088-.271c0-.016.027-.065.06-.107a.367.367 0 00.058-.096.24.24 0 00-.05-.077c-.08-.096-.066-.14.094-.291.14-.133.142-.136.116-.192a.877.877 0 01-.037-.219l-.01-.162.062-.035c.078-.045.079-.095.001-.175a.262.262 0 01-.075-.168c-.02-.142-.068-.229-.146-.262a.587.587 0 01-.146-.114c-.078-.082-.083-.094-.105-.269l-.023-.182.052-.062c.104-.124.101-.125-.516-.136a6.469 6.469 0 01-.57-.023 1.014 1.014 0 01-.037-.198c-.02-.165-.031-.195-.097-.281-.09-.118-.086-.14.031-.177.058-.018.048-.232-.016-.34a.814.814 0 01-.077-.255c-.033-.202-.066-.284-.12-.295a10.396 10.396 0 00-.453-.03c-.333-.018-.423-.029-.458-.055-.024-.019-.151-.13-.283-.248l-.24-.214-.085.013c-.087.013-.122-.005-.166-.084-.018-.031-.023-.031-.078.001-.088.052-.164.044-.228-.023-.053-.055-.064-.058-.253-.064l-.197-.007-.151-.163c-.083-.09-.167-.163-.186-.163-.039 0-.138-.143-.174-.252a.72.72 0 01-.012-.228.525.525 0 00-.037-.285c-.049-.13-.046-.166.02-.22.057-.048.032-.256-.036-.302a.86.86 0 00-.201-.015c-.166 0-.2.007-.461.1a1.957 1.957 0 00-.546.275c-.23.152-.278.176-.378.188-.164.02-.172.026-.26.162-.078.12-.083.123-.165.123a.736.736 0 01-.198-.039c-.097-.034-.162-.04-.505-.04-.367 0-.396-.002-.444-.04-.047-.037-.052-.054-.052-.172 0-.071-.01-.16-.024-.195-.02-.056-.017-.08.02-.17.046-.111.06-.318.022-.341-.02-.013-.035-.004-.343.22-.134.098-.186.125-.217.115a1.465 1.465 0 00-.202-.027.57.57 0 01-.192-.04c-.018-.014-.037-.06-.044-.1-.012-.075-.029-.093-.199-.208-.06-.04-.087-.047-.154-.037-.122.018-.144-.019-.099-.167.04-.134.035-.15-.085-.242-.063-.049-.128-.138-.242-.332-.147-.25-.156-.273-.156-.381 0-.104.006-.121.061-.171.052-.048.058-.062.04-.097-.039-.072-.025-.095.133-.217.194-.15.217-.198.173-.355a1.534 1.534 0 01-.032-.127c0-.013.864-.808.953-.877.045-.035.067-.04.117-.025a.368.368 0 00.303-.083c.05-.046.077-.056.158-.056.063 0 .12.014.162.04.124.075.28.035.282-.071 0-.021.013-.056.03-.077.018-.025.028-.085.028-.173 0-.082.011-.152.028-.179.05-.078.069-.245.151-1.347l.082-1.085.067-.066c.096-.094.088-.18-.028-.305-.043-.045-.066-.054-.154-.054h-.103l-.07-.139a.453.453 0 01-.059-.166c.021-.055.134-.07.54-.07h.408l.056-.06c.031-.032.068-.058.08-.058.014 0 .048.031.077.07l.054.07.134-.12a.625.625 0 01.166-.119c.017 0 .056.038.086.084.046.071.056.11.065.261l.01.178.059.007c.032.003.26.059.505.123s.47.117.5.117c.074 0 .187-.063.268-.149.038-.04.112-.108.165-.15.077-.061.111-.076.178-.076.077 0 .091-.009.181-.113a.534.534 0 00.108-.17c.008-.045.026-.062.087-.083a.659.659 0 00.194-.143c.093-.093.118-.13.12-.184l.003-.067-.217-.01a1.41 1.41 0 01-.253-.028c-.058-.027-.07-.09-.058-.31.01-.177.017-.213.057-.26.073-.088.063-.175-.027-.25a.247.247 0 00-.128-.06c-.06 0-.141-.067-.128-.105.004-.014.06-.026.14-.03l.134-.005.096.09c.053.049.099.09.102.09l.173.018c.147.014.171.022.208.069.04.049.052.052.17.047l.126-.006.006-.076c.006-.065.019-.083.098-.133.082-.052.108-.058.256-.058.182 0 .194-.004.433-.158.1-.064.176-.099.216-.099.052 0 .078-.02.173-.14a.647.647 0 00.111-.173c0-.062.044-.081.181-.081.112 0 .137.006.154.038.032.06.025.09-.042.198-.07.112-.068.117.064.183a.537.537 0 01.161.143c.095.127.1.21.016.307-.032.038-.059.089-.06.114a.228.228 0 01-.024.089c-.046.084-.087.45-.06.526.024.063.738.906.769.908.013 0 .23-.095.483-.211l.46-.213h.83l-.007-.159c-.005-.13 0-.164.026-.186.026-.022.041-.022.07-.004.063.039.16.027.292-.036a.786.786 0 01.15-.059c.052 0 .129.082.141.15.014.074.036.081.14.044.058-.021.078-.018.155.02.101.048.23.056.264.016.013-.016.084-.033.162-.041.11-.011.15-.007.187.017.03.02.092.031.179.031.13 0 .133-.001.203-.082a2.65 2.65 0 00.22-.398c.13-.274.174-.345.326-.53.097-.116.192-.217.211-.224.044-.015.188.094.214.162.01.027.018.137.018.246v.198l.076.087c.082.092.102.167.102.378 0 .106.002.11.124.236.111.115.134.13.218.139.083.01.1.02.152.095.053.077.058.1.058.247 0 .222.078.483.149.5.038.01.049.026.049.07 0 .032-.01.064-.02.07-.01.007-.02.028-.02.047 0 .02-.012.05-.026.07-.023.032-.043.035-.16.023-.153-.017-.174-.042-.119-.144.03-.055.032-.07.01-.084-.036-.022-.256-.068-.269-.055-.005.006.008.058.03.116a.62.62 0 01.04.17c0 .045.012.065.04.075.03.009.04.03.04.078 0 .117-.113.176-.16.084a.48.48 0 00-.03-.052c-.005-.005-.034.016-.066.047-.077.074-.112.056-.13-.068-.014-.106-.023-.115-.152-.146-.05-.012-.058-.005-.131.14a1.676 1.676 0 01-.139.23.259.259 0 00-.06.133c0 .034-.024.082-.062.125-.056.063-.058.072-.03.1.057.057.028.103-.088.146-.171.064-.088.12.123.083a.675.675 0 00.251-.104c.112-.071.147-.084.24-.085h.108l.035.111c.026.08.06.133.12.19.079.072.094.078.236.088.132.01.161.02.226.073l.074.062.056-.07c.064-.08.127-.09.18-.03.025.026.062.04.113.04.081 0 .089-.008.678-.63l.138-.145.27.008c.18.004.28.015.296.031.013.014.062.024.108.024.062 0 .09.01.104.037.014.025.05.04.122.049a.318.318 0 01.135.041c.049.045.17.09.238.09.034 0 .094.023.134.05.056.038.098.05.183.05.093 0 .125.01.194.06a.365.365 0 01.094.087.403.403 0 00.11.092.33.33 0 01.165.35c-.01.091-.026.124-.083.182-.088.091-.089.187-.002.234.055.03.056.03.138-.062.064-.072.102-.096.163-.106a.28.28 0 00.12-.051c.028-.026.09-.043.19-.055a.593.593 0 00.196-.048c.056-.04.217-.042.29-.004.028.015.1.064.16.108.098.074.117.08.227.08.074 0 .137.012.162.03.03.021.058.024.102.011.069-.02.257.02.281.06.011.019.113.016.446-.01l.431-.034.129.059c.07.032.234.13.364.219.13.088.25.16.268.16.082 0 .162.046.189.11.02.045.104.123.289.264.144.11.275.224.292.253.02.034.088.081.188.13l.157.077.395.027c.25.017.417.037.456.055.053.024.07.051.113.18.04.116.046.16.03.19-.015.03-.012.056.011.105.035.073.041.23.012.285-.015.03.006.067.109.198.13.166.147.213.104.306-.017.038-.017.069 0 .127.028.09-.003.255-.072.39-.029.057-.039.102-.03.142.009.046-.005.085-.061.177-.06.096-.07.13-.06.184.01.062-.003.084-.186.309a2.606 2.606 0 00-.208.278.932.932 0 01-.15.17c-.136.13-.14.133-.22.12-.072-.01-.079-.008-.066.023.008.02.019.048.023.065.005.017-.067.11-.175.225-.1.107-.21.245-.242.306-.047.088-.07.112-.114.117-.064.007-.11.072-.064.09.033.012.04.082.01.1-.011.007-.02.039-.02.07 0 .046-.048.113-.22.31-.12.139-.23.26-.245.267-.016.01-.052-.01-.097-.052-.093-.088-.16-.105-.226-.055-.048.035-.05.049-.05.203 0 .13-.01.183-.043.245a.643.643 0 00-.052.207c-.01.107-.005.14.03.201l.04.073-.042.103c-.043.103-.043.105-.012.411.018.17.04.323.05.342.01.019.018.126.018.239 0 .18-.005.209-.04.24-.029.027-.039.061-.04.136a.297.297 0 01-.028.137c-.015.02-.022.05-.016.066.006.016-.008.055-.031.086-.053.072-.054.146-.002.213.028.035.037.067.029.1-.015.059-.339.417-.377.417-.017 0 0 .036.044.094l.072.093-.014.227c-.01.18-.022.242-.055.296a.508.508 0 00-.053.129c-.01.043-.033.069-.086.095-.055.027-.074.049-.074.084a.3.3 0 01-.046.122.564.564 0 00-.06.131c-.015.06-.418.584-.45.584-.01 0-.012.022-.005.048.006.026.002.053-.01.06-.032.02-.026.16.008.189.036.03.04.119.005.161-.048.06-.237.174-.29.174-.068 0-.135.071-.23.247a.924.924 0 01-.094.151c-.01.007-.13.02-.265.027-.278.016-.367-.006-.39-.098-.01-.042-.019-.046-.05-.03-.027.015-.038.042-.038.099 0 .07-.007.082-.068.11-.063.031-.071.031-.118 0a.13.13 0 00-.1-.02.234.234 0 01-.111-.01c-.052-.018-.073-.015-.124.016-.041.025-.074.032-.102.021-.05-.019-.166.027-.166.065 0 .055-.088.11-.198.124a.512.512 0 00-.327.162c-.073.073-.087.079-.23.091-.113.01-.173.027-.222.06a.447.447 0 01-.155.06c-.12.017-.272.113-.512.322-.111.098-.249.2-.305.229a.32.32 0 00-.128.104.171.171 0 01-.06.07c-.104.05-.104.05-.098.135.004.074-.005.096-.076.18-.099.118-.118.179-.118.383 0 .102-.01.172-.027.197-.019.028-.03.138-.037.375-.008.25-.024.404-.064.603-.029.148-.06.28-.068.293a.514.514 0 01-.151.074c-.115.042-.163.075-.303.21-.092.09-.165.173-.162.186a.378.378 0 01-.046.123.462.462 0 00-.05.16.574.574 0 01-.061.182 4.15 4.15 0 01-.415.637.334.334 0 00-.076.103c0 .027-.333.31-.492.418a.403.403 0 01-.19.081c-.126.008-.128.007-.128-.088 0-.086.002-.088.114-.15.3-.168.395-.242.468-.368a.866.866 0 01.16-.195.476.476 0 00.108-.115.524.524 0 01.06-.095c.081-.1-.012-.163-.097-.065-.056.064-.086.062-.16-.012-.096-.096-.13-.073-.131.088-.002.132-.004.136-.085.21-.077.07-.082.08-.07.154.015.09.005.1-.138.132-.09.02-.1.03-.112.085a.428.428 0 01-.095.152c-.075.082-.081.096-.081.202a.501.501 0 01-.06.242c-.034.07-.07.177-.082.237a.335.335 0 01-.097.192c-.042.046-.077.101-.077.123 0 .028-.053.075-.177.158-.185.125-.243.143-.275.083zm1.82-19.757c-.03-.012-.032-.154-.003-.293.012-.054.02-.19.017-.3-.003-.191-.001-.204.046-.251.073-.073.137-.082.25-.034.085.037.134.042.412.042.202 0 .335.009.368.023.049.023.05.029.038.134-.016.133-.023.147-.148.297-.077.093-.11.119-.154.119-.036 0-.076.023-.122.07-.06.062-.077.07-.139.06-.061-.01-.079-.003-.137.057-.076.08-.152.09-.207.03-.046-.05-.056-.05-.12.01-.055.05-.06.053-.102.036zm-.25-.119c-.02-.02-.014-.194.009-.217.014-.015 0-.033-.05-.062-.115-.068-.076-.164.08-.193.09-.017.146.02.146.092 0 .046-.014.068-.06.093-.071.041-.072.051-.01.08.042.018.05.036.05.1 0 .059-.01.085-.038.1-.043.023-.107.027-.126.007zm-.683-.075c-.02-.024-.018-.04.009-.081a.59.59 0 00.057-.132.329.329 0 01.113-.156c.098-.083.134-.084.177-.005.024.045.02.054-.047.123a.313.313 0 00-.073.096.67.67 0 01-.194.184c-.01 0-.03-.013-.043-.03zm1.337-.741c-.05-.031-.042-.084.024-.147.054-.051.062-.054.118-.03.047.019.06.037.06.079 0 .03-.012.064-.026.076-.04.033-.137.045-.176.022z"/></svg></em> **Gerar NF-e de devolução**, o sistema levará os dados da **nota de compra** para o módulo [NF-e](/pt-br/tutoriais/como-emitir-uma-nfe), além disso, também irá **referenciar a chave de acesso da nota** e selecionar a [operação](/pt-br/cadastros/operacoes) de **devolução de compra** automaticamente.
{.is-success}

## Cadastrar nota de compra

Para cadastrar uma nota de compra manualmente, clique no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da [tela inicial](https://help.gdoorweb.com.br/pt-br/movimentos/compras#lista) ou no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso lista.
A tela "**nova compra**" será exibida.

---
- **Cabeçalho**
Insira as informações constantes na nota de compra, como: **número, modelo, série, emissão, entrada** e **natureza da operação**:

![cabeçalho](/movimentos/compras/cabeçalhoo.png)

---
- **Fornecedor**
Busque o fornecedor pelo **CNPJ, nome, código, e-mail** ou **telefone**. Caso o fornecedor não esteja cadastrado, clique no botão (<em class="mdi mdi-plus"></em>) para cadastrar.

![fornecedor](/movimentos/compras/fornecedor.png)

---
- **Produtos**
Para buscar **produtos** utilize a tecla <kbd>Insert</kbd> do teclado, ou clique no botão (<em class="mdi mdi-barcode"></em>). Informe a **quantidade**, **valor unitário** e demais campos conforme consta na nota de compra, em seguida clique em <span class="mat-button mdi "> confirmar</span>.

![produtos](/movimentos/compras/produtos.png)

---
- **Totais da compra**
Preencha as informações de acordo com a nota de compra, em caso de dúvidas, sugerimos que verifique com o contador da empresa.

![totais da compra](/movimentos/compras/totais_da_compra.png)

---
- **Pagamentos**
Nesta seção, há duas opções:

**<em class="mdi mdi-checkbox-blank-outline"></em> Não informar pagamentos**: sem geração de histórico financeiro;

**Adicionar pagamento**: geração da [despesa](/financeiro/despesas) no financeiro.

![pagamentos](/movimentos/compras/pagamentos_1.png)

---
- **Transporte**
Na seção de transporte, alguns campos são exibidos de acordo com o "**tipo de frete**" selecionado:

**Sem transporte**: não haverá informação de transportadora ou veículo;

**Contratado pelo remetente, destinatário** ou **terceiros**: habilita os campos para informar a transportadora e veículo;

**Transporte próprio por conta do remetente ou destinatário**: habilita os campos para informar a transportadora e veículo.

![transporte](/movimentos/compras/transporte.png)

Após a inclusão das informações conforme a nota fiscal de compra, há opção para:

- <span class="mat-button mdi "> concluir</span>: **salva e valida** a nota de compra para dar entrada no estoque. Isso realizará a movimentação do estoque e a nota não poderá mais ser editada nem excluída. Ficará na lista com status **concluída**.

- <span class="mat-button mdi "> salvar</span>: apenas **salva** a nota de compra, que ficará na lista com status **pendente**, sendo possível realizar as ações de **editar compra** (<em class="mdi  mdi-pencil"></em>) ou **concluir compra** (<em class="mdi  mdi-check"></em>):

![nota pendente](/movimentos/compras/nota_pendente.png)

# Manifestação do Destinatário eletrônica (MD-e)

A **Manifestação do Destinatário eletrônica (MD-e)** possibilita que a empresa **confirme** ou **recuse** sua participação em uma transação comercial, a fim de evitar que seu CNPJ e inscrição estadual sejam vítimas de fraudes.

Através do módulo de “**compras**” no Gweb é possível informar sobre o andamento da operação na NF-e e confirmar a veracidade das informações contidas na nota.

São quatro eventos possíveis: **confirmação da operação**, **desconhecimento da operação**, **operação não realizada** e **ciência da operação**.

Para efetuar a manifestação é necessário ter um “**certificado digital válido**”, para configurar o certificado digital para utilizar a manifestação do destinatário, acesse as [Configurações gerais](/configuracoes/geral) do GWEB.

Para acessar o MD-e, no módulo de **compras**, clique em “**manifestação eletrônica**”, localizado no menu lateral direito.

![compras](/compras/manifestação/1_compras.png)

## Consultar 

Para verificar se há notas para manifestar, clique no botão (<em class="mdi mdi-cloud-download-outline"></em>)  “**consultar novas notas**” localizado no **canto inferior direito da tela**.

![consultar](/compras/manifestação/2_manifestação.png)

Ao clicar para consultar, observe que no canto superior direito aparecerá a mensagem “**consultando novos documentos**”, isso poderá levar alguns segundos. 
Após deverá aparecer a mensagem “**consulta realizada com sucesso**” e se houverem notas para manifestar, elas serão listadas na tela.

![lista notas](/compras/manifestação/3_notas.png)

### Opções

Clique no botão  (<em class="mdi mdi-dots-vertical"></em>) para que as opções de ações sejam exibidas.

![opções](/compras/manifestação/opções.png)

Será possível:

- <em class="mdi mdi-checkbox-marked"></em> **Marcar**, pode-se selecionar até 50 notas para manifestar juntamente;
- <em class="mdi mdi-content-copy"></em> **Copiar chave de acesso** da nota em questão;
- <em class="mdi mdi-file-send"></em> **Manifestar-se**, abrirá a tela para informar o evento;
- <em class="mdi mdi-download"></em> **Download XML** para baixar o arquivo;
- <em class="mdi mdi-cart-arrow-down"></em> **Importar XML** para a nota de compra;
- <em class="mdi mdi-refresh"></em> **Consultar na SEFAZ**, será direcionado ao site para consulta da NF-e;
- <em class="mdi mdi-cancel"></em> **Ignorar NF-e**, retira da lista uma nota que não deseja manifestar;
- <em class="mdi mdi-printer"></em> **Imprimir NF-e**, a tela para impressão do DANFE será aberta.

Para visualizar apenas dados pertinentes ao que você necessita, é possível efetuar uma **busca** (<em class="mdi mdi-magnify"></em>), **filtrar** (<em class="mdi mdi-filter"></em>) e **ordenar** (<em class="mdi mdi-sort"></em>) as notas listadas. Clicando no botão (<em class="mdi mdi-refresh"></em>) a **lista é atualizada**.

![menu](/compras/manifestação/7_buscar.png)

### Filtrar

Os filtros (<em class="mdi mdi-filter"></em>) também podem ser definidos como padrão para que sempre que você abrir a lista, ela já esteja filtrada. 

![filtros](/compras/manifestação/8_filtros.png)

Opções de filtros:

- **Situação**: filtrar por notas “**manifestadas**” e “**não manifestadas**”;
- **Status**: por notas “**ignoradas**”, “**importadas**” para o compras e “**não importadas**”;
- **Emissão inicial**: filtrar por data de emissão, informe a data de início;
- **Emissão final**: filtrar por data de emissão, informe a data de término;
- **Tipo do evento**: filtrar pelo evento manifestado: **confirmação da operação**, **ciência da operação**, **desconhecimento da operação** ou **operação não realizada**.

Após informar o filtro desejado, basta clicar em <span class="mat-button mdi "> APLICAR</span>.

### Tags

De acordo com o status e eventos informados, tags serão adicionadas as notas:

![tags](/compras/manifestação/tags.png)

### Ordenar 

Ordene (<em class="mdi mdi-sort"></em>) a lista de acordo com sua preferência, por "**tipo**","**importadas**", "**NSU**", "**data**", "**nome**", entre outros:

![ordenar](/compras/manifestação/9_ordenar.png)

## Eventos

São quatro eventos disponíveis:

### Ciência da operação

Utilizado quando no retorno da consulta tiver apenas o "**resumo da NF-e**". Ele registra a solicitação do destinatário para a obtenção do arquivo XML, após o registro deste evento, será permitido o download do arquivo XML.

> Este evento não representa a manifestação do destinatário sobre a operação, sua finalidade é a obtenção do arquivo XML. 
{.is-warning}

### Confirmação da operação

Confirma a operação e o recebimento da mercadoria (para operações com circulação de mercadoria).

> Após a confirmação da operação pelo destinatário, a empresa emitente fica automaticamente impedida de cancelar a NF-e.
{.is-success}

### Operação não realizada

Este evento será informado pelo destinatário, quando por algum motivo, a operação legalmente acordada entre as partes não se realizou (devolução sem entrada física da mercadoria no estabelecimento do destinatário, sinistro da carga durante seu transporte entre outros).

### Desconhecimento da operação

Tem como finalidade possibilitar ao destinatário se manifestar quanto a utilização indevida de sua Inscrição Estadual, por parte do emitente da NF-e, para acobertar operações fraudulentas de remessas de mercadorias para destinatário diverso. Este evento protege o destinatário de passivos tributários envolvendo o uso indevido de sua Inscrição Estadual/CNPJ.

## Manifestar-se

Ao clicar em **manifestar-se** a tela para seleção do evento será aberta, informe o desejado.
 
![informar evento](/compras/manifestação/5_manifestar-se.png)

Após informar o evento basta clicar em <span class="mat-button mdi "> confirmar</span>.

![confirmar manifestação](/compras/manifestação/6.png)

# Importar XML

Ao acessar o módulo **movimentações » compras** clique em "**importar XML**", localizado no painel lateral da página conforme a imagem abaixo:

![importar XML](/movimentos/compras/importar_xml.png)

A tela para seleção do arquivo XML será aberta, localize o desejado e clique em **abrir**, todas as informações que estiverem no XMl serão importadas. 

Se o **fornecedor** ou a  **transportadora** não estiverem cadastrados, a tela para **cadastro** será exibida, verifique as informações e clique em <span class="mat-button mdi "> confirmar</span>.

## Vincular produto cadastrado

Se o sistema identificar produtos novos no XML, a observação de "**novo produto**" constará logo abaixo da descrição.

> Esse produto pode já estar cadastrado no sistema, porém com uma descrição diferente, sendo assim, é possível vincular o item para não ter cadastros repetidos.
{.is-success}

Para isso, clique no botão "**vínculo**" (<em class="mdi mdi-call-merge"></em>) localizado ao lado do item desejado.

![vínculo](/movimentos/compras/vincular_1.png)

A tela para "**vincular item**" será mostrada, busque o "**produto**" desejado, utilize o "**fator de conversão**" se necessário e clique em <span class="mat-button mdi "> vincular</span>.

![vincular](/movimentos/compras/vincular_2.png)

Na observação do produto constará o vínculo:

![produto vinculado](/movimentos/compras/vincular_3.png)

Efetue a conferência das demais informações da nota fiscal e para finalizar a importação do XML, clique em:

- <span class="mat-button mdi "> concluir</span>: **salva e valida** a nota de compra para dar entrada no estoque. Isso realizará a movimentação do estoque e a nota não poderá mais ser editada nem excluída. Ficará na lista com status **concluída**.

- <span class="mat-button mdi "> salvar</span>: apenas **salva** a nota de compra, que ficará na lista com status **pendente**, sendo possível realizar as ações de **editar compra** (<em class="mdi  mdi-pencil"></em>) ou **concluir compra** (<em class="mdi  mdi-check"></em>):

![nota pendente](/movimentos/compras/nota_pendente.png)

## Cadastrar novo produto

Se o sistema identificar produtos novos no XML, a observação de "**novo produto**" constará logo abaixo da descrição:

![produto](/movimentos/compras/produtos_novos_1.png)

É possível **cadastrar o produto** diretamente pela nota de compra.
Para **editar o cadastro**, basta clicar sobre o mesmo e a janela abaixo será exibida.
Clique na aba "**novo produto**" e edite/insira as informações necessárias, em seguida clique em <span class="mat-button mdi "> confirmar</span>.

![novo produto](/movimentos/compras/novo.png)

Observe que a descrição do produto foi alterada e na observação consta **novo produto**:

![nova descrição](/movimentos/compras/novo_2.png)

Efetue a conferência das demais informações da nota fiscal e clique em:

- <span class="mat-button mdi "> concluir</span>: **salva e valida** a nota de compra para dar entrada no estoque. Isso realizará a movimentação do estoque e a nota não poderá mais ser editada nem excluída. Ficará na lista com status **concluída**.

- <span class="mat-button mdi "> salvar</span>: apenas **salva** a nota de compra, que ficará na lista com status **pendente**, , sendo possível realizar as ações de **editar compra** (<em class="mdi  mdi-pencil"></em>) e **concluir compra** (<em class="mdi  mdi-check"></em>).

Como produtos novos foram identificados no XML, a mensagem abaixo será exibida. Para que eles sejam adicionados ao cadastro de estoque, clique em <span class="mat-button mdi "> cadastrar</span>.

![cadastrar produtos novos](/movimentos/compras/cadastrar.png)

Clique em <span class="mat-button mdi "> rever</span> se desejar efetuar alguma alteração ou [vincular](https://help.gdoorweb.com.br/pt-br/movimentos/compras#vincular-produto-cadastrado) algum produto.

## Alterar Tributos da entrada

No GWEB é possível alterar o **ST** de escrituração para geração dos arquivos fiscais [SPED](/arquivos-fiscais/sped) e [SINTEGRA](/arquivos-fiscais/sintegra). Para fazer essa alteração, clique na aba de "**Tributos**" dentro do item.

![Tributação de Compra](/movimentos/compras/tributos-compra.png)

Nesta aba, aparecerão outras 3 abas referentes aos impostos que podem ser ajustados. São eles, o **ICMS**, o **IPI** e o **PIS/COFINS**.

![Abas de tributos do item](/movimentos/compras/abas-tributos-compras.png)

Clicando em cada uma das abas é possível definir a **Situação Tributária para escrituração**. Como mostrado abaixo.

![compra_gif.gif](/movimentos/compras/compra_gif.gif)

Após efetuar todas as alterações necessárias, clique em <span class="mat-button mdi "> CONFIRMAR</span>.

# Configurações

Nesta seção é possível determinar a [operação padrão](https://help.gdoorweb.com.br/pt-br/movimentos/compras#opera%C3%A7%C3%A3o-padr%C3%A3o) para novas compras e configurações referentes à [Manifestação do Destinatário eletrônica (MD-e)](https://help.gdoorweb.com.br/pt-br/movimentos/compras#manifesta%C3%A7%C3%A3o-eletr%C3%B4nica).

![configurações de compras](/movimentos/compras/configurações_de_compras.png)

## Operação padrão

Configure uma operação padrão para novas compras, desta forma não será necessário escolher manualmente a cada nota. Quando for cadastrar uma nova compra, esta será a operação escolhida por padrão.
Após informar, clique em <span class="mat-button mdi "> salvar</span>.

## Manifestação eletrônica

Informe o último **NSU** (Número Sequencial Único) para utilização no download de documentos eletrônicos, após clique em <span class="mat-button mdi "> salvar</span>.

## Impressão do DANFE

Configurações para a impressão do DANFe dentro da manifestação eletrônica.
Após informar, clique em <span class="mat-button mdi "> salvar</span>.

## Certificado digital

Para configurar o certificado digital para emissão de NF-e, acesse as [Configurações Gerais](/configuracoes/geral) do Gweb.

## Composição de custo da compra

Marque as opções que deseja para o cálculo do custo de compra e custo médio do produto na compra.
Selecione quais valores deseja na composição do custo dos produtos e clique em <span class="mat-button mdi ">SALVAR</span>.