---
title: Atualizações
description: Confira as últimas atualizações que deixaram o Gweb ainda mais robusto e funcional
published: true
date: 2022-09-19T11:51:43.059Z
tags: novidades
editor: markdown
dateCreated: 2021-06-28T18:13:29.393Z
---

# 19/09/2022
f2.7.3, b3.6.2 {.versions}


## Novidades
- Adicionado aos módulos um atalho que redireciona para os relatórios específicos do módulo em questão.

## Ajustes
- Corrigida as informações adicionais do produto que não estavam sendo salvas na pré-venda.
- Ajustada a rolagem de tela em dispositivos móveis. Na navegação de algumas telas não era possível "deslizar" pela listagem.
- Corrigido o XML do mês que estava incluindo notas rejeitadas juntamente com as autorizadas e canceladas.
- Corrigida a consulta do CNPJ no cadastro de Pessoas. Anteriormente ao consultar o CNPJ alguns dados de endereço não estavam sendo preenchidos no formulário.
- Ajustada a pré-venda para gravar dados de clientes não cadastrados. Ao criar uma pré-venda informando o CPF e nome de um cliente não cadastrado no sistema, o mesmo não estava apresentando essas informações após concluir a pré-venda.
- Corrigida a emissão de pedidos e pré-vendas com serviços. Ao gerar pedidos e pré-vendas com serviços não estava sendo possível salvar os respectivos documentos.

# 16/09/2022
f2.7.1, b3.6.1 {.versions}

## Ajustes
- Na NF-e, agora são rateados também entre os serviços o frete, seguro e outras despesas, pois em notas com apenas serviços apresentava uma rejeição.
- Corrigido erro ao aplicar desconto sobre o total da venda. Ao gerar uma pré-venda ou NF-e e aplicar um desconto sobre o total o rateio estava sendo feito porém o total da fatura estava ficando incorreto.

# 13/09/2022
f2.6.3, b3.5.4 {.versions}

## Ajustes
- Ajustada edição de NF-e/pedido de venda com endereço de entrega. Ao editar uma NF-e/pedido de venda não estava apresentando o checkbox "informar endereço de entrega" marcado e quando era marcado não mostrava os endereços salvos.
- Corrigido o cadastro de endereço de entrega. Anteriormente ao cadastrar um endereço novo e selecioná-lo o mesmo não era salvo com o documento.
- Ajustada exibição do endereço de entrega nos detalhes da NF-e. Ao gerar uma NF-e com endereço de entrega não estava sendo mostrado nos detalhes da nota o endereço em questão.

# 10/09/2022
f2.6.1, b3.5.2 {.versions}

## Ajustes
- Ajustada falha  ao informar uma chave de acesso manualmente no MDF-e.
- Ajustada numeração do MDF-e ao excluir. Anteriormente quando um MDF-e era excluído a numeração em questão não estava mais sendo usada, passando assim para o próximo número.

# 08/09/2022
b3.5.1 {.versions}

## Ajustes
- Corrigida falha ao salvar pessoas/endereços sem o município informado.

# 07/09/2022
f2.6.0, b3.5.0 {.versions}

## Novidades
- Adicionado o relatório de Romaneio de carga. Ao acessar o módulo MDF-e foi criada uma opção para acessar os relatórios do MDF-e.
- Adicionada opção de encerrar MDF-e emitido em outros sistemas.
- Criado evento de inclusão de condutores após emissão do MDF-e. 
- Adicionada opção para selecionar múltiplas NF-e para gerar o MDF-e.
- Criada configuração para incluir na impressão da pré-venda dados do cliente, número de série do produto e informações adicionais da venda e do produto.
- Incluída a opção de informar endereço de entrega nas vendas.
- Criado suporte para integrações via Ghub.
- Incluído o cadastro para endereço de entrega e cobrança.

## Ajustes
- Ajustada Nota Complementar para que seja possível informar o CFOP em notas que não foram emitidas no Gweb. Anteriormente para estas notas estava sendo utilizado um CFOP padrão, não permitindo a edição.
- Ajustada a emissão de pedidos para que não permita produtos com o mesmo número de série. Ao criar um pedido com produtos com número de série e informar o mesmo para mais de um produto o sistema estava deixando salvar o pedido sem mostrar a duplicidade nas séries.
- Corrigido campos do MDF-e que exibiam o código identificador no lugar da descrição ao consultar.
- Ajustada a geração do XML para reboque quando o proprietário é pessoa física.
- Aumentado valor máximo para o campo lucro bruto. Agora é permitido um valor de até 99.999,99 %.
- Adicionado botão para transmitir e encerrar MDF-e em lote. Devido a um problema esta opção não estava sendo exibida.
- Corrigidas divergências na edição de veículos. Haviam inconsistências no cadastro de veículos dependendo de onde este era realizado.

# 23/08/2022
b3.4.9 {.versions} 

## Ajustes
- Ajustado xml do MDFe quando proprietário do veículo é Pessoa Física.


# 19/08/2022
f2.5.2, b3.4.8 {.versions} 

## Ajustes
- Ajustado ambiente de transmissão do MDF-e, para que respeite as configurações do módulo.


# 18/08/2022
f2.5.2, b3.4.7 {.versions} 

## Ajustes
- Removida a obrigatoriedade do RNTRC para a emissão do MDF-e, exceto quando o emitente for empresa de transporte. Neste caso a tag ANTT não vai ser preenchido no XML.
- Ajustado título incorreto na tela de edição de formas de pagamento.


# 17/08/2022
f2.5.1, b3.4.6 {.versions} 

## Novidades
- Adicionada a funcionalidade de Manifesto Eletrônico de Documentos Fiscais (MDF-e) 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/movimentos/mdf-e) (módulo habilitável à parte).

# 16/08/2022
f2.5.0, f2.5.1, b3.4.6 {.versions}

## Novidades
- Implementado o cálculo automático do preço de venda ao informar a margem de lucro/preço de custo. Agora, ao alterar a margem de lucro o sistema automaticamente ajustará o preço de venda em relação ao preço de custo. Também, ao alterar diretamente o campo de preço de venda ou preço de custo, o sistema ajustará a margem de lucro para a correspondente.

## Ajustes
- Padronizado o campo de "Informações adicionais de interesse do Fisco" para aceitar 2000 caracteres. Anteriormente este campo permitia a digitação de 5000 caracteres quando deveria aceitar 2000, gerando uma falha de validação no XML.
- Ajustado vínculo do produto ao importar XML. Ao cadastrar uma compra e vincular um item a um produto já existente, mesmo que o vínculo tenha sido removido, o item continuava apresentando o nome do produto ao qual foi vinculado.
- Corrigida a emissão de pré-venda e NFC-e de produtos com número de série. Não era possível realizar vendas pois a quantidade e valor unitários estavam ficando zerados.
- Ajustada verificação de estoque para produtos controlados por número de série. A verificação era feita em alguns casos para produtos não controlados por número de série.

# 04/08/2022
f2.4.2 {.versions}

## Ajustes
- Corrigido cálculo do ICMS ST quando havia redução na base de cálculo do ICMS normal e ICMS ST.

# 01/08/2022
f2.4.1, b3.4.1 {.versions}

## Ajustes
- Corrigido o número de série e número da próxima nota (NF-e/NFC-e) que estava saindo zerado e com o número 1 respectivamente.

- Restaurada a exibição da Manifestação do Destinatário Eletrônica. As informações referentes ao MD-e não estavam sendo apresentadas na tela.

# 27/07/2022
f2.3.0, b3.3.0 {.versions}

## Novidades
- Criada uma configuração para a quantidade de casas decimais que são apresentadas no DANF-e. Agora é possível configurar o número de casas decimais para a quantidade e para o preço unitário dos itens.

## Ajustes
- Ajustada as operações de sangria/suprimento para clientes que não possuem o financeiro habilitado. Não estava sendo possível fazer estas transferências sem que o módulo financeiro estivesse ativo.
- Ajustado fuso-horário do sistema para usuários que estão em um fuso diferente do America/Sao_Paulo (que é o padrão do BD). Anteriormente ao salvar algumas informações as datas de criação e atualização estavam ficando com o horário divergente do que realmente aconteceram.
- Corrigida a duplicidade de itens na grade dos produtos. Ao alterar a quantidade de itens de uma grade, quando buscávamos o produto na venda os itens alterados estavam aparecendo duplicados na pesquisa.

# 18/07/2022

## Ajustes
f2.2.1, b3.2.3 {.versions}
- Corrigida consulta de notas canceladas na SEFAZ.
- Ajustado layout do cadastro de veículos.
- Ajustadas visualização, edição, impressão e importação de pedidos de venda feitos antes da última atualização.
- Corrigido problema ao informar pagamento parcelado no PDV.

# 17/07/2022
f2.2.0, b3.2.0 {.versions}

## Novidades
- Adicionado ao histórico de vendas do cliente um filtro para pesquisa por natureza da operação.
- Criado um novo módulo para cadastro de veículos.
- Melhorada as funcionalidades da Nota de Ajuste permitindo que sejam feitas notas com chaves de acesso de fora do GWEB, gerar ajuste sem informar chave e caso a nota tenha sido emitida no GWEB a mesma busca automaticamente os produtos.
- Inseridos feriados padrões de 2023 até 2099.
- Criação de rota para listar produtos selecionáveis no GHub.

## Ajustes
- Corrigido erro de SQL durante a geração do relatório de Total de NF-e por situação.
- Ajustado Centro de Custos para que fique salvo nas receitas/despesas.
- Ajustada a exportação para gerar dados dos produtos com serial.
- Ajustado as notas de compra e devolução (de entrada e saída) para que o campo "vendedor" não seja mostrado.
- Corrigido o label de pré-venda concluída na listagem do PDV.
- Ajustado o botão "nova transferência financeira".
- Ocultado o acesso a MD-e quando o módulo de NF-e não está habilitado.

# 08/07/2022

## Novidades
- Adicionado relatório que lista [Documentos fiscais emitidos](https://app.gdoorweb.com.br/relatorios/documentos-fiscais-emitidos).

## Ajustes
- Ajustado relatório de [Total de NF-e/NFC-e por situação](https://app.gdoorweb.com.br/relatorios/total-de-nfe-por-situacao) (anteriormente *Total de NF-e por situação*) para deixar de considerar o movimento de estoque. Isso porque nem todos os documentos fiscais não trasmitidos ainda não movimentaram estoque, então o vínculo não poderia ser estabelecido. O relatório agora agrupará os documentos fiscais (NF-e e NFC-e) de acordo com os filtros, independentemente de os documentos terem movimentado estoque.
- Ajustados os relatórios a seguir para considerar documentos sem produtos (apenas serviços). As datas a serem consideradas nos filtros para esses casos será a data de saída da nota.
  * [Movimentos (Completo)](https://app.gdoorweb.com.br/relatorios/movimentos-completo)
  * [Movimentos NFC-e](https://app.gdoorweb.com.br/relatorios/movimentos-nfc-e)
  * [Movimentos (Simplificado)](https://app.gdoorweb.com.br/relatorios/movimentos-simplificado)
  * [Pagamentos NFC-e](https://app.gdoorweb.com.br/relatorios/pagamentos-nfc-e)
  * [Total de vendas por cidade](https://app.gdoorweb.com.br/relatorios/total-de-vendas-por-cidade)
  * [Total de vendas por UF](https://app.gdoorweb.com.br/relatorios/total-de-vendas-por-estado) (anteriormente *Total de vendas por estado*)
  * [Total de vendas por meio de pagamento](https://app.gdoorweb.com.br/relatorios/total-de-vendas-por-meio-de-pagamento)

# 05/07/2022

## Ajustes
- Corrigido relatório "Comissão por vendedor", que apresentava valores incorretos.

# 23/06/2022

## Ajustes
- Restaurada a exibição dos serviços na impressão da pré-venda.

# 02/06/2022
f2.1.2, b3.1.3 {.versions} 

## Ajustes

- Ajustado para que não seja possível selecionar uma operação que não movimenta estoque como padrão para NF-e/ NFC-e.

- Ajustada as movimentações do financeiro que estavam indo para a conta padrão ao invés de serem encaminhadas para a conta configurada no PDV.

- Corrigido troco que não estava sendo descontado do valor pago ao gerar o financeiro.

- Ajustado para que o sistema "salve" nos produtos o vendedor incluso no cabeçalho dos pedidos, NF-e e NFC-e.

- Corrigida a configuração de contas do PDV que não estava gravando corretamente as informações.

# 27/05/2022
f2.1.1 {.versions} 

## Ajustes

- Corrigida verificação de permissão ao cancelar venda em aberto no PDV.

# 18/05/2022

## Ajustes

- Ajustada soma incorreta no relatório "Produtos com saída".

# 11/05/2022
b3.1.0,  f2.1.0 {.versions} 

## Novidades
- Implementado o cancelamento de pré-venda.

## Ajustes

- Ajustada a visualização do menu de relatórios conforme permissões. Esse erro ocorria em usuários que tinham as permissões dos relatórios que foram removidos na última atualização.
- Corrigida a geração do relatório de comissão por vendedor e inclusas as comissões geradas por pré-vendas que movimentam estoque.
- Ajustado a geração do arquivo de exportação de dados para constar somente os atributos dos módulos exportados. Anteriormente ao exportar uma base sem o financeiro estava gerando o atributo do financeiro.
- Corrigido o link de visualização da pré-venda que aparece no cadastro de produtos - aba movimentos. Anteriormente ao clicar no botão não estava abrindo a pré-venda que originou a movimentação.
- Ajustado o formato dos campos de data e hora na conexão com a base de dados.
- Ajustado a edição de produtos para não permitir incluir grade em produtos com movimentação.

# 05/05/2022

## Ajustes
 
- Ajustado relatório "Produtos com saída" para considerar as movimentações da pré-venda.

# 04/05/2022
b3.0.4,  f2.0.4 {.versions} 

## Ajustes
 
- Corrigida a devolução de compras que estava somando valores no estoque e registrando como entrada nos movimentos do produto.

- Ajustada a visualização dos movimentos no cadastro de produtos.


# 01/05/2022
b3.0.0,  f2.0.0 {.versions} 

## Novidades

- Adicionada a funcionalidade Pré-venda 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/movimentos/pdv) (Módulo habilitável à parte).

- Bloqueada a consulta na manifestação eletrônica quando não forem encontradas novas notas. Para evitar o bloqueio previsto legalmente ao consultar em menos de 60 minutos.

- Implementado o relatório geral de pedidos “Pedidos de venda (Simplificado)”, no qual constam todos os pedidos com número, data, valores, situação e número da nota, assim como os filtros de datas e usuário. Os relatórios “Pedido de venda” e “Recibo” não estão mais na listagem de relatórios e devem ser impressos por dentro do pedido e financeiro respectivamente.

- Implementada a configuração para geração de parcelamentos. Agora será possível definir nas configurações gerais do sistema a data inicial, período mínimo para clientes que possuem dia de acerto, escolha dos dias úteis e cadastro de feriados.

- Possibilitada a propagação de alterações nas transições financeiras. Agora será possível ao alterar o dado de uma parcela efetuar a mudança nas outras parcelas também.

- Atualizadas as fontes e logomarca do Gweb para seguir o novo padrão da Gdoor.

- Implementada a importação de dados financeiros.

- Implementada a movimentação das contas associadas a meios de pagamento na NFC-e. Antigamente, essa movimentação ocorria somente na NF-e.

- Implementada mensagem de confirmação em NF-e com valor inferior ao total dos produtos.

## Ajustes
 
- Ajustados os filtros do relatório de movimentos simplificado para permitir filtrar por vendedor.

- Ajustado o botão do filtro dos detalhes financeiros para não sobrepor o número dos documentos.

- Alterada a mensagem apresentada quando as contas do usuário não estão disponíveis para login. A nova mensagem é “Não foi encontrada uma conta ativa para este usuário”.

- Ajustada a alteração de dados no perfil para que sejam aplicadas em todas as contas e para alterar também o nome do usuário que aparece acima da versão do sistema.

- Ajustada a geração da NF-e a partir de um pedido para trazer as informações adicionais do pedido e incluir os CPF/CNPJ autorizados.

- Ajustada a quantidade de casas permitidas para os valores de FCP na NF-e. Quando o valor tinha mais de 6 casas estava ocorrendo erro no banco de dados.

- Ajustado o comportamento do sistema ao tentar ajustar nota de fora do sistema. Antes o sistema não apresentava mensagem e permanecia sempre carregando, agora apresenta mensagem informando que essa operação não é possível.

- Incluída mensagem informando quando não foi possível importar o pedido. Anteriormente trazia um documento em branco.

- Ajustada a geração de NF-e baseada em pedidos com parcelamento.

- Corrigida a impressão de "pedido de venda" e "recibos" no Firefox.

- Corrigidas as permissões de pedidos.


# 11/04/2022
b2.12.6,  f1.22.3 {.versions} 

## Novidades

- Otimizada a busca de produtos na lista. Ao digitar somente números na busca, são procurados os produtos apenas por código.

- Melhorada a visualização da busca de produtos no Kit, NF-e e Compra. Agora os detalhes do produto aparecem em uma segunda linha para não cortar os dados.

# 05/04/2022
f1.22.2 {.versions} 

## Ajustes

- Ajustada a nota complementar no regime simples nacional de notas geradas em outro sistema. Antes não era possível complementar uma nota de outro sistema caso o regime do emitente fosse simples nacional.

- Ajustada a edição da nota complementar para não apresentar campos de IPI.

# 04/04/2022
b2.12.5 {.versions} 

## Ajustes

- Alterada a URL de autorização e consulta da NFC-e via QRCode em MG. 

- Ajustada a edição de produtos com ANP. Anteriormente só estava permitindo salvar a edição quando tivesse "Valor de partida".

- Corrigida a geração de registros financeiros para NFC-e, que não estava ocorrendo regularmente desde o dia 23/04.

# 24/03/2022
f1.22.1 {.versions} 

## Ajustes

- Ajustada a consulta via CEP para localização de endereços. 

# 24/03/2022
b2.12.1,  f1.22.0 {.versions} 

## Novidades

- Criado o Status "devolvidas" nos filtros das receitas. Dessa forma será possível buscar somente pelas receitas devolvidas.

- Implementada a funcionalidade de nota complementar de notas que não foram geradas pelo sistema e liberados todos os campos para edição manual. Anteriormente haviam campos que não podiam ser preenchidos em uma mesma nota de complemento.

## Ajustes

- Ajustados os vínculos dos usuários com os registros criados. Anteriormente o vínculo era feito por nome de usuário e agora são por ID, tornando a busca mais eficiente em relatórios.

- Ajustada a geração do campo CNPJ do importador no XML. Anteriormente o campo do XML estava ficando com pontuação, causando falha.

- Ajustada a mensagem de uso indevido gerada na maifestação de compras para mostrar o cStat.

- Corrigida a NF-e e NFC-e para diminuir o estoque. Algumas notas acabaram realizando uma operação incorreta de estoque.

# 22/03/2022
b2.11.3, f1.21.1 {.versions} 

## Ajustes
- Atualizada lista de municípios do sistema. Ao informar o CEP e pressionar "enter", alguns municípios não estavam sendo localizados.

- Ajustado o cadastro de clientes do exterior para que o país, UF e cidade fiquem gravados nos campos correspondentes.

# 02/03/2022
b2.11.0, f1.21.3{.versions}

## Novidades
- Adicionada a funcionalidade de Manifestação do Destinatário 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/movimentos/compras#manifesta%C3%A7%C3%A3o-do-destinat%C3%A1rio-eletr%C3%B4nica-md-e).

- Criada uma configuração geral que desativa/ativa a verificação de IP durante a autenticação no sistema.
> Esta configuração pode gerar riscos à segurança dos dados. Utilize somente em caso de desconexões frequentes. {.is-warning}


## Ajustes
- Alterada a propagação na forma de pagamento para permitir que ao trocar a forma de pagamento ela seja automaticamente atualizada na nota.

# 24/02/2022
b2.10.0, f2.20.1{.versions}

## Novidades
- Implementado o recebimento de PIX via QRCode. Agora é possível cadastrar os dados necessários para o pix na conta financeira, vincular a uma forma de pagamento e dessa forma gerar um QRCode ao finalizar uma compra com PIX.

- Implementada a exportação de dados do financeiro.

## Ajustes
- Ajustada a NFC-e para permitir efetuar notas com serviços. Antes ao fazer uma nota com serviço ocorria a rejeição 774. 

- Ajustada a criação de usuários com e-mails repetidos.

- Ajustado o cálculo do valor de parcelas quando alterado manualmente o valor de uma parcela. Em alguns casos, estava gerando uma parcela negativa.

- Alterado o texto de status da transação financeira de "Pendente" para "A vencer", dessa forma o status fica mais claro.

- Corrigida a edição das "Despesas" e "Receitas" para permitir remover "Plano de contas" e "Centro de custos".

- Melhorada a apresentação dos arquivos ao carregar certificado digital. Agora serão apresentados somente arquivos .pfx (extensão dos certificados).

- Alterada a mensagem gerada pelo sistema quando não há contas disponíveis para login. Anteriormente, apresentava a mensagem "Não informada conta para login" e a partir de agora será apresentada a mensagem "Não foi encontrada uma conta ativa para este usuário".

- Ajustada a transmissão de notas com valor **zero**. Anteriormente ao transmitir nota com valor zero, estava gerando financeiro e ocorria um erro.

# 07/02/2022
b2.9.1, f1.19.0{.versions}

## Novidades
- Criadas as funcionalidades **excluir**, **abandonar**, **estornar**, **renegociar** e **devolver** movimentações financeiras. 

- Acrescentadas as colunas **juros**, **taxas**, **descontos**, **acréscimos** e **total pago** nos relatórios "Contas a pagar" e "Contas a receber".

- Implementada a soma automática dos valores de **juros**, **taxas**, **descontos** e **acréscimos** na efetivação da transação financeira. Agora, ao efetuar um pagamento ou recebimento, será calculado no total da transação os valores adicionais.

- Criada a tag `<infAdProd></infAdProd>` no campo Observações do produto para informar descrições do produto que devem aparecer no DANFE. Agora o que estiver escrito entre meio essa tag aparecerá no documento. 

- Possibilitado o cadastro de formas de pagamento com intervalo maior que 30 dias. Anteriormente caso o pagamento tivesse mais de 30 dias de intervalo só era possível informar o intervalo na NF-e.

- Separado por pastas os XML de compras e vendas na exportação de base. Agora os movimentos exportados estarão divididos em pasta de compra e venda.

## Ajustes
- Ajustado erro na base de dados que ocorria ao utilizar um pagamento a vista e outro a prazo na NFC-e.

- Ajustada a forma de pagamento a prazo com período mês para jogar a primeira parcela sempre para o mês seguinte. Antes a primeira parcela era gerada pro dia seguinte.

- Removida a exclusão de compras processadas no sistema. Devido a inúmeros vínculos financeiros e de estoque que são criados ao processar uma compra, foi removida a possibilidade de excluir compras com essa situação.

- Corrigido para utilizar a quantidade informada ao incluir um produto pela referência na NFC-e. Antes quando utilizado o * para informar a quantidade estava trazendo sempre 1.

- Ajustado erro ao carregar os meios de pagamento da NF-e e NFC-e que ocorria ao alterar os pagamentos.

- Ajustado o cálculo do desconto dos produtos com fator de conversão na importação de XML. Antes quando um produto tinha fator de conversão e desconto, em alguns casos o sistema estava deixando o valor do produto negativo e impossibilitando salvar a compra.

- Ajustado o componente de pesquisa de CNPJ para apresentar mensagem quando há indisponibilidade para o cliente. Anteriormente a tela de pesquisa ficava em branco.

- Ajustada a busca do estado do veículo na emissão da NF-e. Antes só era possível buscar estado pela lista de estados, agora está possibilitando digitar o estado para buscar na lista.

- Ajustada geração da NF-e quanto à tag `indTot` para serviços, pois indica que eles não compões o total de produtos da NF-e. Estava ocasionando falha quando a NF-e era gerada sem produtos, apenas serviços.

# 13/01/2022
b2.7.1, f1.17.2{.versions}

## Novidades
- Implementado o recibo no financeiro. Possibilitando assim gerar um comprovante de recebimento para as contas a receber. 

## Ajustes
- Ajustados os status da nota de compra. Anteriormente o status não estava atualizando de pendente para processada no caso de importação de XML.

# 10/01/2022
f1.17.1 {.versions} 

## Ajustes
- Ajustada a exportação do relarório "inventário de estoque" quando o mesmo possui rodapé ou cabeçalho. Não estava sendo possível exportar o relatório nessa situação.

# 09/01/2022
b2.7.0, f1.17.0 {.versions}

## Novidades
- Adicionada a opção de exportação de CSV nos relatórios. Agora, além de imprimir será possível exportar diversos relatórios em formato CSV.
- Adicionado o botão de **vínculos financeiros** nos detalhes da "NF-e", "NFC-e" e "Compras". Na parte de pagamentos das notas e compras, foi adicionado um botão no qual é possível verificar as "receitas" ou "despesas" criadas pela movimentação.

## Ajustes
- Alterado o ambiente de emissão da NF-e de **CE** para a Sefaz Virtual do Rio Grande do Sul (SVRS).
- Ajustado o cálculo do custo do produto, ao efetuar uma compra, quando o mesmo possui fator de conversão. Anteriormente, o fator de conversão não era considerado no cálculo do custo do produto.
- Alterado o valor apresentado na listagem de transações financeiras ("receita" **e** "despesa") para mostrar o valor que falta ser pago. Anteriormente, era mostrado o valor original da transação, desconsiderando valores já pagos.
- Ajustada a responsividade das telas de detalhes das transações financeiras ("receita" **e** "despesa"). Para melhor se adequar a todos os tamanhos de tela, foram efetuados pequenos ajustes no layout das transações financeiras.

# 02/01/2022
b2.6.0, f1.16.0 {.versions}

## Novidades
- O módulo financeiro foi liberado 🎉. Conheça esta funcionalidade fresquinha no Gweb [aqui](/tutoriais/financeiro).
- Adicionada dica para busca de produto pelo campo **Referência** na tela de adição de produto. É possível buscar um produto diretamente pelo valor desse campo se na busca você digitar "." (ponto).
- Adicionada indicação de limitação do tamanho do texto na criação de uma carta de correção eletrônica.
- Adicionada alternativa para geração do inventário quando há muitos produtos cadastrados.

## Ajustes
- Corrigida a geração do inventário quando solicitada a geração com produtos de uso e consumo e ativo imobilizado. Esses itens não apareciam no inventário mesmo com as opções marcadas.

# 27/12/2021
b2.5.3, f1.15.2 {.versions}

## Novidades
- Adicionada legenda ao incluir produto na "NF-e" **e** "Pedidos de venda" indicando que o caractere "." é utilizado para buscar produto por referência.
- Adicionada legenda na NFC-e para indicar que ao informar um CPF não cadastrado no sistema e clicar "Enter", será incluso somente o CPF na nota.
- Adicionado CNPJ do emitente no cabeçalho do pedido de venda.

## Ajustes
- Ajustada a data de vencimento na "NF-e" **e** "Pedidos de venda" ao utilizar um parcelamento com o período "Dias". Anteriormente, não estava calculando corretamente a data de vencimento.
- Corrigido para permitir editar uma nota de complemento.
- Ajustado o redirecionamento da tela após criar uma nota de ajuste, direcionando agora para os detalhes da nota criada.
- Ajustado o relatório "Total de vendas por meio de pagamento" para não constar o valor do troco.

# 16/12/2021

## Ajustes
- Ajustado relatório de pagamentos da NFC-e, onde alguns meios de pagamento apareciam como (vazio).

# 22/11/2021
f1.15.1 {.versions}

## Ajustes
- Ajustada a criação de categrias de produtos. A tela estava aparecendo em branco, sem as informações do formulário.
- Corrigido o menu das notas de devolução para aparecer a opção de carta de correção. Anteriormente não era possível fazer uma carta de correção de uma nota de devolução, devido a opção não aparecer no menu.

# 22/11/2021
b2.5.1, f1.15.0 {.versions}

## Novidades
- Adicionado o relatório "Produtos por vendedor". Nesse relatório é possível verificar quais produtos foram movimentados por cada vendedor, o tipo de movimentação efetuada e sua data, entre outras informações.
- Adicionadas os CFOP de remessa para bonificação (1.936 e 5.936) na lista de CFOP. A partir de 01/01/2021, os CFOP de remessa para bonificação entram em vigor e a lista já estará atualizada com eles.

## Ajustes
- Ajustado o filtro de pedido por vendedor. Anteriormente quando mais de um produto tinha o mesmo vendedor, a nota aparecia duplicada na lista.
- Ajustado para não aparecer mensagem de erro no banco de dados ao enviar o e-mail para redefinir a senha. 

# 22/11/2021
b2.4.3 {.versions}

## Ajustes
- Ajustada falha na transmissão automática em segundo plano das NF-e com erro de timeout.

# 19/11/2021
b2.4.2, f1.14.1 {.versions}

## Novidades
- Adicionas as colunas "Preço de Custo (Atual)", "Preço de Venda (Atual)" **e** "Última Compra" ao relatório "Inventário de estoque". 

## Ajustes
- Ajustado o cálculo do “ICMS diferido” que em alguns casos específicos, estava dando uma diferença de arredondamento entre o valor calculado e o valor informado.

# 18/11/2021

## Novidades
- Alguns relatórios agora possuirão uma descrição que explica alguns detalhes e características dos dados. Essa inforamação ficará visível ao clicar no relatório, logo acima dos parâmetros. Inicialmente, essa descrição já está presente no relatório "Produtos vendidos por tipo de imposto".
- Inclusos na impressão do pedido de venda, os vendedores que se encontram vinculados a ele. Antigamente não era possível visualizar de forma unificada os vendedores que efetuaram o pedido, era necessário abrir item por item.
- Adicionada no relatório "Auditoria" a coluna "Detalhes" que apresenta mais informações sobre a operação executada, permitindo ao usuário identificar o registro que foi manipulado. Inicialmente, sendo preenchidos a partir de agora, serão informados número, série e modelo de notas fiscais manipuladas.
- Adicionado o relatório "Auditoria de numeração de notas", que mostra uma relação sequencial das numerações das notas fiscais, contemplando também as inutilizações.


## Ajustes
- Ajustadas as abas "Produtos vendidos (Vendedor)" **e** "Compras (Fornecedor)" do histórico da "Pessoa" para buscar corretamente os dados.
- Ajustadas as notas criadas em contingência e emitidas em ambiente normal, para gerar a tag `tpEmis` corretamente. Antes estava retornando a rejeição 832 ao tentar transmitir essas notas.
- Ajustado o cálculo do valor do ICMS Interestadual para UF de Destino (vICMSUFDEST). Anteriormente, nos casos em que essa tag era gerada, a NF-e era rejeitada.

# 10/11/2021

## Ajustes

- Agora é possível informar os segundos da hora de emissão/saída da NF-e. Em algumas operações, o cliente só aceita a NF-e se o horário estiver idêntico ao esperado.

# 27/10/2021

## Ajustes

- Ajustado para não aparecer meios de pagamentos excluídos na NFC-e. Antigamente quando excluía um meio de pagamento que estava ativo para NFC-e, o mesmo continuava aparecendo na nota.
- Ajustada a visualização das configurações da NF-e e NFC-e em telas menores.
- Corrigido para trazer os produtos de cada nota nos detalhes do cadastro de pessoa, na guia "Histórico", "Vendas(Cliente)".
- Corrigida a emissão de notas com “ICMS desonerado”. Anteriormente não era possível transmitir notas com desoneração.
- Ajustada a validação do e-mail em casos que um e-mail vinculado a uma conta cancelada é utilizado em uma nova conta. Antes, quando um e-mail estava vinculado a uma conta cancelada e era criada uma nova conta com o mesmo, não era possível logar na conta.
- Ajustado o cálculo do “ICMS diferido” quando há valores com muitas casas decimais. Devido ao arredondamento, em alguns casos estava ocorrendo rejeição ao emitir notas.
- Possibilitada a visualização do DANFE para notas que contenham os caracteres “<” e “>” nas informações complementares.
- Ajustada a “importação de XML” para permitir a importação de notas sem destinatário destacado.
- Padronizadas as mensagens de confirmação ao sair de formulários. Anteriormente ao sair de uma tela com formulário para outra tela, as mensagens apresentadas eram diferentes.

# 22/10/2021

## Ajustes
- Corrigida a edição do campo "ANP" no cadastro do produto. Anteriormete, não estava sendo salvas alterações nesse campo.

# 01/10/2021

## Ajustes
- Corrigida transmissão de NFC-e **salva** em contingência e **transmitida** no modo normal. Estava sendo transmitida como se ainda estivesse em contingência.

# 30/09/2021

## Novidades
- Possibilitada a consulta do status de várias NFC-e de uma vez. Assim como era possível selecionar várias para transmitir, agora é possível também consultar. [Veja mais detalhes](/movimentos/pdv/lista#selecao-multipla).

## Ajustes
- Corrigido login para usuários com 1 conta inativa e 1 conta ativa. Nessa situação havia uma divergência na verificação, impossibilitando o usuário de fazer o login.

# 29/09/2021

## Novidades
- Incluso o campo “% Redução BC ST” na aba “Tributos” do produto na nota. Anteriormente esse campo estava somente na regra de tributação.
- Possibilitada utilização de casas decimais na quantidade do serviço. Agora as casas decimais do produto serão definidas pelas casas decimais das quantidades na configuração geral.

## Ajustes 
- Ajustado para obrigar o preenchimento do cliente em NFC-e parcelada criada a partir de um pedido. Antes, ao criar a NFC-e normalmente era obrigatório informar o cliente, e gerando com base no pedido não era.
- Corrigido o cálculo do ICMS ST para utilizar a % de redução da base de cálculo. Anteriormente mesmo quando o campo estava preenchido, a informação não era utilizada no cálculo.
- Ajustado o relatório “Movimentos NFC-e” para não contar o valor das notas canceladas. Anteriormente, o valor das notas canceladas estava contando no relatório.

# 20/09/2021

## Novidades
- Implementados filtros na lista de compras **e** incluídos os campos data de emissão e chave da nota em compras importadas. Melhorando assim a visualização das compras no sistema.
- Criado identificador de notas canceladas no XML do mês. Agora, ao baixar o XML do mês, irá aparecer "canc" no início do nome do arquivo XML cuja nota esteja cancelada.

## Ajustes 
- Ajustes efetuados no login para permitir trocar de conta na tela de bloqueio do sistema **e** permitido efetuar o login na última empresa acessada, quando o token invalida.
- Ajustado para permitir a inclusão de um código único de NCM ou CEST na regra de tributação.
- Corrigida a geração do XML quando a nota tiver meio de pagamento "99 - Outros" para criar a tag de descrição do pagamento. Antes não era possível emitir notas com o meio de pagamento "99 - Outros".

# 08/09/2021

## Novidades
- Possibilitado o cadastro "Pessoas" onde são referenciadas. Dessa forma não é mais necessário ter o cadastro prévio. 
- Implementada tentativas de consulta da nota após transmissão. Em alguns casos em que havia instabilidade na SEFAZ, era necessário consultar a nota manualmente diversas vezes, agora o sistema irá efetuar a consulta 5 vezes antes de habilitar a consulta manual.
- As funcionalidades: "Pedidos de venda" e "Modo escuro" foram retiradas da fase beta 🎉.
- Foram adicionadas novas funcionalidades a ferramenta de importação:
	Para facilitar a importação de arquivos no sistema, foi possibilitada a importação de bases que tenham registros com falha na validação, ignorando esses registros falhos **e** gerado um arquivo CSV contendo os registros com falhas, que pode ser baixado antes de processar a importação.
  Além disso, foi adicionada a possibilidade de importar serviços. 


## Ajustes 
- Melhoradas as mensagens que aparecem quando não é possível pré-visualizar a DANFE ou XML. Anteriormente estava gerando uma mensagem genérica, agora irá apontar onde está o problema.
- Ajustada a "lista das notas", "XML do mês" e "Relatórios" para somente aparecer notas referentes ao ambiente atual. Ou seja, caso a nota esteja configurada para o ambiente de produção, não irá aparecer na lista, relatórios e XML do mês as notas feitas quando o sistema estava em homologação.
- Ajustadas as regras de tributação para permitir informar os dígitos necessários para cada campo. Alguns campos estavam aceitando somente 2 casas após a vírgula e deveriam aceitar 4.
- Ajuste na importação do XML para quando for removido um vínculo de um produto do sistema que tem imagem, remover também a imagem na tela da compra.
- Otimizado o carregamento na lista de kits

# 02/09/2021
## Ajustes
- Corrigida a geração do XML da NF-e com transportadora pessoa física para não gerar a tag IE. Quando a transportadora possuia RG, o documento estava sendo inserido na tag IE do XML.

# 01/09/2021
## Ajustes
- Ajustada a exclusão de compras para ser aplicada a todos os itens . Anteriormente estava removendo do estoque e excluindo a movimentação somente do 1º item da compra.

# 27/08/2021
## Ajustes
- Corrigidas inconsistências na geração do grupo do ICMS interestadual na NF-e, o grupo `ICMSUFDest`, que é informado nas vendas interestaduais, para consumidor final não contribuinte.

# 26/08/2021
## Ajustes
- Ajustado a para não aparecer no relatório "Movimentos NFC-e" os valores das notas canceladas. Anteriormente, quando havia NFC-e cancelada, os valores das mesmas estavam somando no relatório. 

# 12/08/2021
## Ajustes
- Ajustada a remoção de vínculos na importação de XML na compra. Anteriormente, ao importar um XML e vincular um produto manualmente, não era possível remover o vínculo.
- Ajustada a edição de pagamentos nos pedidos. Quando era editado um pedido que não tinha forma de pagamento informada, não era possível inserir um novo pagamento.
- Ajustada a exportação dos XML do mês. Não era possível baixar ou enviar por e-mail os XML do mês.

# 09/08/2021
## Ajustes
- Ajustada a emissão de NFC-e com produtos combustíveis. Anteriormente, quando o produto tinha ANP não era possível transmitir a NFC-e.

# 03/08/2021
## Ajustes
- Ajustada geração da alíquota interestadual do ICMS para produtos importados. Anteriormente não era considerada a origem do produto para gerar a alíquota.

# 28/07/2021
## Ajustes
- Corrigida falha que impossibilitava a inclusão de itens no pedido.
- Corrigido carregamento das informações adicionais ao editar um pedido.
- Corrigida validação que impedia importação de XML na compra.
- Aumentado tempo de validade do link de verificação de e-mail para 12 horas. Frequentemente os usuários não conseguiam fazer a verificação dentro de 1 hora, que era o tempo de validade anterior. Também foi adicionada essa informação no corpo do e-mail.
- Corrigida falha que impedia adição/edição de itens na NFe

# 27/07/2021

## Ajustes
- Melhoradas mensagens de validação de campos da Declaração de Importação no preenchimento de uma NF-e de importação. Agora é possível identificar qual item possui erro de preenchimento.
- Restringido o preenchimento dos campos numéricos da D.I. para ser possível informar apenas números. Antes era possível preencher outras informações e não era possível salvar a nota assim.
- Corrigida falha pontual ao salvar pedido.
- Melhorado feedback de login quando o servidor não responde.
- Corrigida geração das configurações quando habilitado o módulo de NF-e em uma conta que já possuía NFC-e.

# 26/07/2021

## Ajustes
- Ajustada informação do valor aproximado dos tributos quando a NF-e não é destinada a consumidor final. Agora a informação não será passada para o XML da NF-e quando não estiver marcada a opção "Consumidor final".
- Otimizado feedback em caso de falha na verificação do e-mail de login.

# 23/07/2021

## Ajustes
- Corrigido erro na geração do relatório "Movimentos (Completo)".

# 16/07/2021

## Ajustes
- Ajustada a validação do campo número do endereço para permitir o caractere "/". Dessa forma quando um endereço não tiver número, será possível informar "S/N".
- Ajustado o perfil de usuário para permitir alterações. Agora, quando algum dado for alterado no perfil também será alterado no cadastro do usuário em todas as contas que ele tiver vínculo.

# 15/07/2021

## Novidades
- Adicionada a funcionalidade multilogin 🎉. Essa funcionalidade permite que um mesmo e-mail acesse várias empresas. 
  Para facilitar a troca entre contas, o visual da parte superior do menu principal foi modificado para facilmente identificar a conta atual, inclusive mostrando a logomarca configurada no cadastro do emitente.
  Veja um vídeo do Marcelo explicando mais detalhes sobre esta nova funcionalidade do GDOOR WEB:
<div class=text-center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2Vzhu-ogFxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=true></iframe>
</div>

- Adicionado o modo escuro 🎉. O modo escuro, além de ser mais elegante, pode ajudar quem trabalha em ambientes escuros, forçando menos a visão 👀, além de economizar energia em alguns dispositivos🔋.

![Pré-visualização do tema escuro](/dicas/tema-escuro-preview.png)

## Ajustes 
- Ajustado o campo CNAE do cadastro de pessoas para permitir apagar a informação do campo. Dessa forma após apagado o CNAE de um cadastro, será possível salvar a pessoa normalmente.
- Ajustados os campos de porcentagem de base de cálculo e alíquota na NF-e para não permitir salvar a nota com os campos sem informação. Como não é possível emitir uma nota em que esses campos não contenham valor, foi adicionada a validação que não permite que isso ocorra. 

# 09/07/2021

## Ajustes
- Ajustada a importação de dados para não aceitar arquivos que possuam somente serviços. Essa validação é necessária pois o sistema não importa serviços.

# 29/06/2021

## Novidades
- Adicionada possibilidade de desfazer uma importação de dados. Essa funcionalidade permite reverter a importação e excluir os registros importados nela.

## Ajustes 
- Corrigido para abrir a edição dos detalhes do seviço na NFC-e.
- Padronizada a nomenclatura Produtos no sistema. Alguns locais no sistema apresentava a nomenclatura "Itens" ou "Mercadorias" para se referir a produtos e foi alterado para que todos os locais que se refiram a Produtos tenham a nomenclatura "Produtos".
- Impedida a exclusão de usuário que importou dados. 
- Criada limpeza automática para arquivos de importação antigos. Dessa forma, quando o arquivo de importação estiver no sistema há 14 dias, ele ficará indisponível.

# 28/06/2021

## Ajustes
- Ajustado o cadastro de pessoas para permitir informar Inscrição Estadual **e** indicar "Não contribuinte". Este cenário é possível quando a empresa é um órgão público.

# 16/06/2021

## Novidades
- Adicionadas a referência e o código de barras do produto na tela de adição de produto na nota/pedido. Essas informações podem ajudar a identificar o produto na hora de adicioná-lo ao documento.

## Ajustes 
- Corrigida a busca de produtos no cadastro para pesquisar por código de barras.
- Ocultadas as tributações aproximadas das notas (IBPT) quando não é necessário apresentar. Serão informadas apenas quando a operação for normal e para consumidor final.
