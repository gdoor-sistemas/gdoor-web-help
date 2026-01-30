---
title: Atualizações
description: Confira as últimas atualizações que deixaram o Gweb ainda mais robusto e funcional
published: true
date: 2026-01-30T14:48:50.895Z
tags: novidades
editor: markdown
dateCreated: 2021-06-28T18:13:29.393Z
---

## Sumário


Em **2026** já foram implementados:
- Novidades: 10
- Ajustes: 9

**Total: 19**

--- 

ir para [2025](#h-2025) {.goto} 

ir para [2024](#h-2024) {.goto}

ir para [2023](#h-2023) {.goto}

ir para [2022](#h-2022) {.goto}

ir para [2021](#h-2021) {.goto}

---
# 30/01/2026
f2.11.202, b3.10.409. b3.10.411 {.versions}

## Novidades
- Implementada tela para informar dados do imóvel na NFSe.

## Ajustes
- Ajustada a emissão da NFS-e em relação ao vesquematico XSD ABRASF.

# 29/01/2026
f2.11.201, b3.10.408 {.versions}

## Novidades
- Enviar campos de PIS/COFINS e IBS/CBS no JSON da NFSe.

# 27/01/2026
f2.11.200, b3.10.407 {.versions}

## Novidades
- Criado o campo código interno do contribuinte dentro das configurações da NFS-e.

# 23/01/2026
f2.11.198, f2.11.199 {.versions}

## Ajustes
- Ajustada a busca dos impostos da regra de tributação na NFS-e.
- Ajustada visualização da aba "Rastreamento" ao informar produto com código da ANVISA.

# 14/01/2026
f2.11.196, b3.10.402, b3.10.403, b3.10.404 {.versions}

## Novidades
- Implementado campo para definir o município de incidência da tributação da NFSe.
- Implementado campo código do serviço nacional ao JSON de envio do ambiente nacional.
- Implementado campo de dispensa de IR na NFe e NFSe.
- Implementados campos de finalidade de emissão, código de indicador da operação e indicador do destinatário para ambiente nacional na NFS-e.
- Implementado campo de percentual de alíquota relativa do município no envio ne NFS-e para ambiente nacional.

## Ajustes
- Ajustado consulta de CNPJ no cadastro de pessoas

# 13/01/2026
b3.10.401 {.versions}

## Novidades
- Atualização do leiaute do SPED fiscal.

# 12/01/2026
b3.10.400 {.versions}

## Ajustes
- Ajustada a sincronização do Gped no Gweb.

# 08/01/2026
b3.10.397 {.versions}

## Ajustes
- Corrigida a unidade cadastrada na importação de base.

# 05/01/2026
f2.11.191, f2.11.192, b3.10.393, b3.10.394, b3.10.395 {.versions}

## Novidades
- Implementaçção campos novos para NFSe conforme Focus.

## Ajustes
- Ajustada a importação do XML de compra com tags da reforma tributária.
- Ajustado link para redefinição de senha.
- Ajustada abertura da regra de tributação sem CST selecionado

--- 
# 2025 {.year}

Foram implementados:
- Novidades: 57
- Ajustes: 370

**Total: 427**

--- 
ir para [2024](#h-2024) {.goto}

ir para [2023](#h-2023) {.goto}

ir para [2022](#h-2022) {.goto}

ir para [2021](#h-2021) {.goto}

---
# 31/12/2025
f02.01.2026, b02.01.2026, p02.01.2026 {.versions}

## Novidades
- Adicionada a data de pagamento e recebimento nas listagens de receitas e despesas.
- Implementada alteração em massa para dados de produtos.
- Implementação da reforma tributária.

## Ajustes
- Ajustado recálculo do valor e base de cálculo do ICMS ao alterar CST.
- Possibilitado o recebimento de pagamento em voucher (vale alimentação e refeição) no ZPOS.
- Ajustado o texto do e-mail de envio automático do sintegra para enviar o mês correto.
- Corrigigo envio automático de arquivos XML.
- Possibilitada emissão de NFS-e para cliente estrangeiro.
- Ajustada a impressão de MDF-e encerrado para conter a marca d'agua indicativa.
- Ajustado o relatório "Total de vendas por meio de pagamento" para não considerar o troco quando estiver configurado para tal.
- Ajustada a configuração de orçamentos na emissão de NF-e e NFC-e com serviços para não permitir gerar essas notas somente com serviços.
- Corrigida alíquota gerada no campo de alíquota interna da ST.
- Ajustada venda para puxar o preço de atacado ao utilizar a tabela de preço referente.
- Corrigida a ediçao da NFC-e para não solicitar cliente quando o pagamento é realizado pelo ZPOS.

# 18/12/2025
f2.11.188, b3.10.389 {.versions}

## Ajustes
- Possibilitada a seleção do regime de recolhimento correspondente a '11' nas configurações gerais da NFS-e.
- Ajustada a gravação de venda com ZPOS para bases geradas sem o módulo financeiro.

# 09/12/2025
b3.10.385, b3.10.386, b3.10.387 {.versions}

## Ajustes
- Corrigido o salvamento do perfil para usuários que tem bases apagadas.
- Ajustada a exportação de XML da NFS-e quando todas estão canceladas.
- Habilitado o preenchimento do campo regime de operação para o ambiente nacional na NFS-e.


# 17/11/2025
b3.10.379, f2.11.186 {.versions}

## Ajustes
- Criada configuração na NFS-e para o preenchimento do campo item de serviço no XML, permitindo escolher a quantidade de dígitos e se utiliza pontuação quando não estiver no ambiente nacional.

# 12/11/2025
b3.10.378 {.versions}

## Ajustes
- Ajustado o preenchimento do campo item de serviço no XML da NFS-e para não ter "." quando o ambiente for nacional, mas manter a pontuação no ambiente normal.

# 11/11/2025
f2.11.183, f2.11.185, b3.10.377, p1.0.56 {.versions}

## Novidades
- Implementada a composição de produtos.

## Ajustes
- Ajustada composição para somente mostrar mensagem de quantidade insuficiente na montagem quando não houver matéria prima suficiente.

# 10/11/2025
b3.10.375, b3.10.376 {.versions}

## Ajustes
- Ajustada a importação de XML com dados de ICMS.
- Ajustada a impressão no POS ao finalizar a venda na NF-e e NFC-e no PIX.
- Ajustado o código do item no XML da NFS-e.

# 07/11/2025
b3.10.373 {.versions}

## Ajustes
- Ajustado carregamento dos filtros do relatório "Documentos fiscais Emitidos".
- Ajustada a geração do relatório "Produtos em estoque".
- Ajustada a importação em bases novas para trazer o campo referência do produto.

# 30/10/2025
f2.11.178, b3.10.371, p1.0.54 {.versions}

## Novidades
- Implementado endpoint para possibilitar a busca de Kits de produto no GPED.
- Implementado campo “Código de barras” na aba “Alterar produtos” da Compra.
- Implementado total de documentos emitidos no relatório NFe, NFCe (Resumo).
- Implementada caixa de seleção de “Produtor Rural” no cadastro rápido de pessoas direto no documento.
- Padronizada a visualização do número dos documentos entre a listagem e os detalhes do documento.
- Implementada visualização das informações de CPF/CNPJ e Apelido/Nome Fantasia na busca de pessoas em todo o sistema.


## Ajustes
- Ajustada a configuração da NF-e para permitir utilizar a série 0 nas notas.
- Removida a obrigatoriedade do preenchimento do código da ANVISA no cadastro de produtos para NCMs que permitem seu preenchimento.
- Ajustada a geração da NFS-e a partir de um pedido de venda, para trazer a tributação correta dos serviços.
- Corrigida a regra de tributação aplicada a uma nota quando a mesma é duplicada e tem sua natureza de operação (com regra de tributação) alterada. 
- Ajustada a inserção de documentos transportados no CT-e.
- Corrigida a aplicação de fator de conversão na compra.
- Alterada a descrição ao passar o mouse sob o botão para criar vendas no PDV para “Nova Venda”.
- Melhorado o título de uma das configurações de preferência de impressão no PDV de “Imprimir depois de autorizar” para “Imprimir comprovante ao concluir Pré-venda”.
- Ajustada a apresentação da informação das pessoas participantes do CT-e para conter a descrição IE quando pessoa jurídica.
- Corrigido o cadastro de pessoas proveniente da importação de CT-e para cadastrar somente pessoas distintas.
- Inseridos novamente os Gráficos ABC de clientes e Total de vendas por meio de pagamentos no dashboard, assim como criado um relatório ABC de clientes.
- Melhorado o filtro “Produtos” no relatório “Alterações no produto” para realizar uma busca mais eficiente.
- Ajustada a receita para não permitir utilizar meio de pagamento “Saldo de Crédito em Loja” sem informar o cliente.
- Ajustado o totalizador dos relatórios NF-e e NFC-e (Resumo) para respeitarem o filtro de datas e tipos.
- Impossibilitada a exclusão de um contador que esteja em uso.
- Ajustado o contador de caracteres do campo “Número de pedido de compra” na nota de ajuste.
- Ajustada a busca de produtos para pesquisar entre todos os produtos e não só na página atual.
- Incluído filtro por remetente no relatório CT-e emitidos.
- Ajustado PDV Híbrido para somente gerar NF-C quando a configuração do pagamento ou do PDV estiver marcada.
- Ajustada a NF-e para trazer marcado consumidor final somente quando Pessoa Jurídica não contribuinte ou Pessoa Física.
- Corrigida a MDF-e para não permitir editar quando autorizada.
- Removido filtro “a vencer” do dashboard dos gráficos financeiros de receitas e despesas e incluído filtro vencendo hoje.
- Corrigido o campo multiplicador do código de barras do produto para aceitar casas decimais.
- Ajustada a NFS-e para somente solicitar operação e tomador quando os dados não tiverem sido lançados.
- Adicionado o campo Código NBS nos serviços da NFS-e para Sumaré/SP.
- Corrigido o envio dá cópia do e-mail dos documentos para o emitente quando a configuração estiver marcada.
- Removida a opção de pagamento 'Crédito em loja' da despesa.
- Ajuste para apresentar as CF-e pela visualização da movimentação dos produtos.

# 23/10/2025
b3.10.370 {.versions}

## Ajustes
- Ajustada a emissão de NF-e com CST 61.


# 16/10/2025
f2.11.177, b3.10.363, b3.10.365, b3.10.366, p1.0.52 {.versions}

## Ajustes
- Corrigida falha na impressão de PV no PDV Híbrido pela tela de detalhes.
- Ajustado nas configurações da NFS-e a seleção da opção "Regime tributário para Simples Nacional" que não estava mantendo salva ao trocar de módulo.
- Ajustada falha no envio de NFC-es sem a informação de CSOSN.
- Corrigido valor da tag < tpIntegra > quando o pagamento é integrado.
- Ajustada geração de MDF-e a partir da seleção em massa de CT-es.

# 06/10/2025
f2.11.170, b3.10.355, b3.10.361, b3.10.362 {.versions}

## Novidades
- Adequação do MDF-e para apresentar o campo de NCM e informações de pagamento.

## Ajustes
- Corrigido erro no CST do IPI de entrada feitas pelo módulo de NF-e.
- Ajustado os detalhes da PV que não estavam aparecendo com as informações em branco.
- Ajustada geração do CEST no XML das NF-es.
- Ajustado para apresentar no XML apenas os primeiros 60 caracteres do nome do emitente.

# 02/10/2025
f2.11.166, b3.10.352, b3.10.353, b3.10.354, p1.0.50 {.versions}

## Novidades
- Implementação do Scope no TEF Gweb.

## Ajustes
- Corrigido processo de reset de base de dados.

# 15/09/2025
b3.10.350 {.versions}

## Ajustes
- Corrigida a data de validade para seriais novos criados via reativação.

# 02/09/2025
f2.11.165, b3.10.349, p1.0.48 {.versions}

## Ajustes
- Alterado o nome e descrição da configuração ‘Utilizar CNAE como código de serviço’ para melhorar a compreensão da configuração.
- Ajustada a ordenação dos planos de contas no relatório ‘Planos de contas’.
- Corrigida a impressão do DACTE para trazer as 4 casas  decimais da quantidade de carga.
- Corrigido o estorno de receitas pelo PDV.
- Ajustado o total das receitas para contabilizar os juros e multas e ajustado o valor em atraso do cliente para contabilizar somente receitas e não despesas.
- Ajustada a busca de relatórios para pesquisar com mais de uma palavra.
- Ajustado o envio do e-mail com os XMLs do mês.
- Corrigido o emitente e pessoas para permitir remover o RNTRC.
- Corrigida a configuração "Não informar pagamentos" na NFS-e.
- Ajustado o endereço do emitente no DACTE para não sobrepor a logomarca.
- Removida a função de recebimento do PDV Híbrido devido ao híbrido não possuir o módulo financeiro.
- Corrigido o valor da parcela que estava gravando incorretamente após edição e adição de produto em um PDV.
- Ajustada a contabilização dos valores no relatório ‘Total de vendas por meio de pagamento’ quando o documento fiscal é gerado de um pedido.
- Corrigida a transmissão da NFC-e com serviços no PDV Híbrido.
- Ajustada a validação da configuração de saldo insuficiente do produto para não contabilizar o produto de dentro da nota não emitida.
- Corrigida a exclusão de regras de tributação de serviço.
- Adicionado filtro por operação nos seguintes relatórios de venda ‘Margem de lucro sobre preço de venda’, ‘Produtos vendidos por categoria’, ‘Produtos vendidos por tipo de imposto’, ‘Comissão por vendedor’ e ‘Produtos por vendedor’.
- Ajustado o valor total apresentado no relatório ‘Contas a pagar’ quando utilizado o pagamento único nas despesas.
- Ajustado o valor mostrado no modal de estorno de despesas pagas com a opção de pagamento único.
- Corrigida a importação para somente salvar itens quando houver itens para importar. 
- Corrigido o recebimento da primeira parcela da venda após edição e adição de produto em um PDV.
- Ajustada validação da configuração ‘Não faturar documentos a prazo para clientes inadimplentes’ para trazer o modal de permissão para realização das vendas de clientes inadimplentes.
- Ajustada diferença entre os relatórios de balancete do sistema.

# 01/09/2025
f2.11.164, b3.10.347, b3.10.348 {.versions}

## Ajustes
- Ajustada PV com pagamento digital para que seja gerado o financeiro dessas vendas.
- Atualização do link de consulta do QRCode da SEFAZ de GO para emissão de NFC-e.

# 28/08/2025
b3.10.339 {.versions}

## Ajustes
- Ajustado no MDF-e a tag do proprietário do veículo de reboque para que apresente os dados de IE e UF.

# 14/08/2025
b3.10.328, b3.10.329, b3.10.330, b3.10.331 {.versions}

## Ajustes
- Ajustada importação do arquivo .json que não continha os NCMs dos produtos.

# 13/08/2025
b3.10.327 {.versions}

## Ajustes
- Ajustado para apresentar no GPED os clientes sem vinculo com vendedor.

# 12/08/2025
f2.11.159, b3.10.326, p1.0.47 {.versions}

## Novidades
- Mantido os códigos dos produtos ao converter bases do GPRO para o GWEB.
- Ajustadas casas decimais do impresso do pedido de venda e orçamento.

## Ajustes
- Ajustado valor total de NF-es que estava apresentando dados incorretos no Sintegra.
- Ajustado pedido de venda que ao ser vinculado com outro pedido não estava gerando dados financeiros.
- Ajustado link de visualização de receitas/despesas gerado no detalhamento das movimentações.
- Ajustado para que o Sistema Web não assuma o caixa do PDV Híbrido ao fechar.
- Retirado dados de juros e multa da visualização da listagem de despesas.
- Ajustado no CT-e o campo "documentos transportados pelo CT-e" que não estavam salvando o tipo do documento corretamente.
- Ajustado para solicitar a geração de uma NFS-e para cada pedido no município de Serra/ES.
- Corrigida importação de NFC-e para NF-e que não estava apresentando o valor do acréscimo nos totais da nota.
- Ajustado dispositivo de pagamento que não permite a exclusão após excluir a forma de pagamento a qual esta vinculado.
- Ajustada validação do Registro 70 no Sintegra para CT-es de entrada.
- Ajustada função de vendedor vinculado com o cliente que não estava funcionando no GPED.

# 11/08/2025
b3.10.325 {.versions}

## Ajustes
- Ajustada na emissão da NF-e a possibilidade de retirar do DANF-e a data e hora da saída/entrada.

# 06/08/2025
b3.10.323 {.versions}

## Ajustes
- Corrigido para não gerar comissão duplicada quando o pedido de venda já havia gerado o financeiro, pois ao importar este pedido para outro documento fiscal estava gerando a comissão para o vendedor novamente.

# 04/08/2025
b3.10.317, b3.10.322 {.versions}

## Ajustes
- Corrigido erro na unidade de federação no MDF-e ao transmitir.
- Ajustado envio de XMLs automáticos.

# 30/07/2025
f2.11.157, f2.11.158, b3.10.313, b3.10.314, b3.10.315, b3.10.316 {.versions}

## Ajustes
- Corrigida a importação das unidades de medidas do XML para o sistema que estava ocasionando o erro nas importações das notas de compra.
- Corrigida a validação ao cadastrar uma regra de imposto, permitindo assim salvar a regra quando vinculada a um produto.
- Corrigida a automação de envio dos XML's do mês por email.
- Ajustado o botão 'Pagamento por integração' no PDV.
- Correções e melhorias na ECONF da NF-e e NFC-e. 

# 28/07/2025
f2.11.156 {.versions}

## Ajustes
- Ajustado o pedido de vendas para aparecer o Gdoor Pay Pix.

# 24/07/2025
f2.11.154, b3.10.302 {.versions}

## Ajustes
- Corrigido o vinculo do vendedor ao cliente no cadastro de pessoas, desta forma agora o cliente grava corretamente o vendedor preferencial.

# 22/07/2025
f2.11.152, b3.10.301, p1.0.46 {.versions}

## Novidades
- Implementada Conexão Itaú.
- Possibilitado desconsiderar frete, seguro e outras despesas na NFe de importação.
- Adequação a NT 2025.001 - Simplificação operacional

## Ajustes
- Ajustada visualização dos pagamentos em cartão de crédito dentro das movimentações.
- Ajustada possibilidade de finalizar despesa após informar desconto zero.
- Ajustada a remoção de regras vinculadas ao produto.
- Ajustadas as entradas do sistema em contingência pelas configurações da NFC-e.
- Ajustado cálculo do fechamento de caixa.
- Corrigida importação de XML para utilizar as unidades indicadas no XML.
- Ajustado o comportamento de devolução das despesas.
- Ajustada a busca de cliente para não ignorar o zero inicial do CNPJ.
- Adicionado o campo acréscimo ao efetivar receita.
- Ajustado relatório de plano de contas para trazer o título correto na inicial de cada página.
- Corrigido o Relatório Pedidos de venda (Simplificado) para constar o filtro de Status.

# 15/07/2025
b3.10.300 {.versions}

## Ajustes
- Ajustado fechamento de caixa com recebimento de duas ou mais parcelas em um único pagamento para considerar o valor individual de cada movimentação.

# 11/07/2025
b3.10.295 {.versions}

## Ajustes
- Ajustada tags da nota de devolução para cliente do Regime Normal e que não estão utilizando o ICMS Desonerado.

# 09/07/2025
b3.10.294 {.versions}

## Ajustes
- Corrigido a sincronização dos pedidos do GPED para o Gweb.

# 04/07/2025
b3.10.293 {.versions}

## Ajustes
- Ajustado erro ao transmitir e cancelar notas fiscais devido a uma alteração da SEFAZ no protocolo de entrega.

# 03/07/2025
f2.11.144, b3.10.291 {.versions}

## Ajustes
- Melhoria de comportamento no recebimento de mais de uma despesas para fornecedores diversos.
- Realizada correção para não duplicar os registros financeiros quando importar um pedido de venda para uma NFS-e.

# 30/06/2025
b3.10.290 {.versions}

## Ajustes
- Ajustada falha no envio assíncrono da NF-e.

# 26/06/2025
f2.11.143, b3.10.287 {.versions}

## Ajustes
- Ao resetar a base de dados a partir deste ajuste não será mais realizado o backup da base de dados. Ao resetar a base o sistema mostrará avisos informando a exclusão permanente dos dados e solicitando uma ação por parte do usuário.

# 25/06/2025
b3.10.286 {.versions}

## Ajustes
- Ajustada NFC-e em contingência para apresentarem as tags de autorização no XML.

# 24/06/2025
f2.11.141, f2.11.142, b3.10.285, p1.0.44 {.versions}

## Novidades
- Implementado o TEF no web e híbrido.
- Criado filtro para itens no relatório ‘Alterações no produto’.
- Implementado campo totalizador de quantidade do produto após aplicação do fator de conversão na nota de compra.

## Ajustes
- Adicionado filtro por categoria de produto no relatório ‘Total de produtos vendidos por cliente’.
- Ajustado o pagamento único do módulo de despesas.

# 17/06/2025
f2.11.140, b3.10.284, p1.0.43 {.versions}

## Ajustes
- Ajustada a importação da compra para possibilitar importação de XMLs que contenham preços unitários com casas decimais.
- Ajustada padronização visual no orçamento ao realizar remoção e adição de colunas do item.
- Ajustada geração de MDF-e a partir do CT-e para trazer a informação de peso bruto.
- Ajustado cálculo e aplicação de desconto na NFS-e.
- Removida incidência de juros e multas automáticos no efetivar despesas que estava ocorrendo devido a configuração de juros e multa das receitas.
- Ajustado gráfico de documentos fiscais emitidos para refletir as informações do relatório e trazer as informações da NFS-e.
- Ajustados os detalhes da receita ao receber uma receita com mais de um pagamento em dinheiro e troco.
- Ajustados impostos para utilizarem BC ICMS 0% ao utilizar CST 90 ou CSOSN 900.
- Ajustada função de geração de código de barras para produto pesável.
- Ajustado o comportamento do pagamento de despesas ao realizar mais de um pagamento para a mesma despesa.

# 16/06/2025
b3.10.283 {.versions}

## Ajustes
- Ajustada falha ao Gerar o SPED Fiscal com período de 2022, foram adicionados os códigos de versão para períodos de 2020 até o ano atual.

# 12/06/2025
b3.10.282 {.versions}

## Ajustes
- Ajustado Registro 70 do Sintegra para validar outras séries para o modelo 57.

# 09/06/2025
b3.10.281, p1.0.42 {.versions}

## Ajustes
- Ajustadas as sangrias e suprimentos para seriais sem o módulo de financeiro habilitado.

# 04/06/2025
b3.10.278, b3.10.280 {.versions}

## Novidades
- Atualizados novos códigos ANP para o cadastro de produtos.

## Ajustes
- Ajustada falha ao importar arquivos .JSON no Gweb.

# 03/06/2025
f2.11.139, b3.10.276, b3.10.277, p1.0.38 {.versions}

## Ajustes
- Ajustada a busca de produtos por código de barras no PDV.
- Removido o troco do relatório "Total de Vendas por Meio de Pagamento" e adicionado filtro "Incluir troco" no relatório.
- Ajustada a visualização de MDF-e com 3 placas.
- Ajustado o Sped Fiscal para não gerar itens com quantidade zerada no bloco K.
- Ajustado o recebimento de receitas para permitir transações com receita parcial.
- Ajustados os avisos referente a valores incorretos em venda parcelada.
- Criada validação de tamanho dos campos numéricos e casas decimais ao importar JSON.
- Adicionada obrigatoriedade ao campo meios de pagamento ao efetivar receita.
- Ajustado o arquivo de balança para trazer a informação da validade.
- Migrado ambiente de autorização de NFC-e para o estado do Ceará.
- Adicionado o campo celular no relatório "Listagem de Pessoas".
- Ajustes no limites de crédito: ajustada a visualização da configuração geral no Hibrido, ajustada a visualização das receitas de clientes inadimplentes e ajustado o retorno ao cancelar a operação quando o PDV está configurado para perguntar sempre.
- Ajustado problema ao salvar a NFC-e.

# 22/05/2025
f2.11.138, b3.10.274 {.versions}

## Ajustes
- Ajustada diferença nos valores dos relatórios de vendas.
- Ajustado estorno de pagamentos em contas a receber.
- Corrigido valores negativos no gráfico financeiro e receitas do dashboard.

# 20/05/2025
b3.10.270 b3.10.272 b3.10.273 f2.11.136 f2.11.137 {.versions}

## Novidades
- Criada opção para resetar base de dados. Essa opção está presente em Configurações -> Ferramentas.
- Criada configuração para verificação do limite de crédito e faturamento para clientes inadimplentes ao salvar documentos.

## Ajustes
- Ajustado o relatório de Plano de contas adicionando um filtro ‘Incluir subcategorias’ que permite visualizar o valor das contas filhas filtrando o relatório pela conta pai.
- Ajustada a sangria para não permitir confirmar sem informar a conta de destino
- Ajustadas as informações do help referente ao cadastro de pessoas.
- Removida a opção de imprimir Pedidos de Venda cancelados.
- Ajustado o Relatório de Pedidos de Venda (Simplificado) para não considerar Pedidos de Venda deletados.
- Ajustado relatório Total de NF-e/NFC-e por situação para gerar o registro de NFC-e.
- Ajustado o download das movimentações para trazer o arquivo .pdf
- Ajustado o status do Pedido de Venda ao gerar NFS-e para concluído.
- Removida a configuração de metas para seriais que não possuem financeiro. 
- Ajustadas as observações da NF-e para trazer somente um cifrão no campo Funrural.
- Ajustado o DAMDFE para ter um espaçamento entre os dados do seguro e o restante das informações.
- Ajustado o status no relatório Contas a Receber para a língua Portuguesa.
- Removidos os produtos de Uso e Consumo da busca por escrito no PDV.
- Permitida a exclusão de notas com rejeição 302.
- Criado um filtro para exclusão dos CT-e cancelados nos relatórios de CTe.
- Ajustado o Relatório do Inventário para trazer as unidades dos produtos.
- Ajustado o Conversor de CFOP para trazer as CFOPs 6920 e 5920.
- Ajustada a visualização da lista de conversão de CFOP para entradas para não ter itens sobrepostos.
- Ajustada a geração do relatório em EXCEL para constar o nome fantasia dos clientes no topo do mesmo.
- Ajustado o texto dos relatórios sem informação para a ortografia correta.
- Bloqueada a inativação da conta Caixa #1.
- Ajustado o relatório Contas a Receber para considerar a data da baixa.
- Ajustada a formatação de casas decimais no relatório Movimentação Financeira.
- Ajustada a finalização de pagamentos no PDV para ao clicar F3 utilizar sempre a forma padrão de pagamento.

# 16/05/2025
b3.10.271 {.versions}

## Ajustes
- Ajustada divergência de valores no relatório de movimentações.

# 13/05/2025
f2.11.136, b3.10.270 {.versions}

## Ajustes
- Corrigido problema no recebimento de parcelas que são parcialmente recebidas.

# 09/05/2025
b3.10.269 {.versions}

## Ajustes
- Ajustado valores negativos no gráfico de receitas e financeiro.

# 08/05/2025
b3.10.268 {.versions}

## Ajustes
- Ajustada geração do valor restante ao realizar um recebimento parcial.

# 07/05/2025
b3.10.267 {.versions}

## Ajustes
- Ajustada fonte das observações do CT-e para facilitar a leitura.

# 06/05/2025
f2.11.135, b3.10.266 {.versions}

## Ajustes
- Revisão dos filtros do relatório de "Contas a pagar".
- Reavaliação do comportamento do troco nos gráficos de receitas e despesas do Dashboard.

# 02/05/2025
p1.0.37 {.versions}

## Ajustes
- Corrigida a impressão direta de NFC-e no modo Offline do PDV Híbrido.

# 30/04/2025
f2.11.134, b3.10.265, p1.0.36 {.versions}

## Ajustes
- Ajustadas vendas no crédito parcelado pelo ZPOS que tornava obrigatório informar o cliente na venda.
- Ajustado no MDF-e a exibição de todas as chaves informadas nos documentos transportados.

# 29/04/2025
b3.10.261 b3.10.263 f2.11.133 {.versions}

## Novidades
- Implementado um filtro com a lista de CFOP's já utilizadas no relatório "Total movimentado por CFOP".
- Implementado uma nova configuração de preferência de impressão para permitir imprimir duas vias do pedido de venda na mesma folha.

## Ajustes
- Ajustada a data de vencimento no financeiro dos pagamentos feitos em cartão de débito com ZPOS para a data da operação.
- Ajustado o relatório "Total movimentado por CFOP" para apresentar as movimentações de acordo com o filtro de operações.
- Ajustado o valor total da MDF-e para realizar a soma dos valores totais das notas importadas.
- Ajustado o inventário do sintegra para não gerar produtos com quantidade zerada ou negativa.
- Ajustado o redirecionamento do botão 'Relatórios' dentro de outros módulos para trazer nos filtros a busca que está sendo realizada.
- Ajustada a geração de NF-e baseada em pedido de vendas utilizando a configuração "Separar produtos e serviços ao importar documento?" marcada.
- Ajustada a edição das notas (NF-e e NFC-e) para não apagar informações de ICMS e ICMS ST.
- Ajustada a replicação de notas para manter o cálculo do ICMS Desonerado.
- Ajustado PDV Hibrido para realizar a busca por código de produto pesado no modo offline.
- Ajustado PDV Hibrido para mostrar as casas decimais nos produtos após a edição e sincronização com o sistema web.

# 28/04/2025
b3.10.262 {.versions}

## Ajustes
- Corrigida a pré-visualização dos dados do MDF-e que geravam falha em documentos específicos.

# 24/04/2025
b3.10.260 {.versions}

## Ajustes
- Alterada URL do QRCode do CT-e em MG.

# 16/04/2025
f2.11.128, f2.11.131, b3.10.257, p1.0.33, p1.0.35 {.versions}

## Novidades
- Implementada configuração para finalizar vendas no PDV.

## Ajustes
- Ajustado caixa que continuava aberto mesmo depois de fechado ao recarregar a página.
- Ajustado seriais bonificados que não estavam logando.
- Revisado comportamento da funcionalidade "Não fechar o caixa com venda pendentes".
- Ajustado texto da mensagem apresentada ao cliente quando houver retorno da SEFAZ com a rejeição 302.
- Ajustado impressos do CT-e e MDF-e que estavam cortando/sobrepondo as informações adicionais.
- Revisado relatório de fechamento de caixa.
- Revisado comportamento da funcionalidade "Somente usuário que abriu pode fechar caixa".
- Ajustada mensagem exibida ao transmitir NFS-e sem os dados da integração.
- Corrigida falha ao tentar fechar o caixa com uma observação de 250 a 300 caracteres.
- Ajustado modal da "Sangria" para mostrar vendas passíveis de sangria (dinheiro ou cheque).
- Padronizado local do botão de relatórios dentro dos módulos.
- Ajustado filtro dos relatórios ao abrir relatórios a partir de módulos específicos.
- Ajustado o filtro "tipo: saídas" do relatório de "Total movimentado por CFOP".

# 15/04/2025
f2.11.129, f2.11.130, f2.11.132 {.versions}

## Ajustes
- Ajustado CST de PIS/COFINS e IPI na nota de compra.
- Ajustado cálculo dos impostos de ST que estavam sendo zerados ao editar notas de venda.
- Ajustada gravação dos dados informados nos tributos ao editar uma venda.

# 11/04/2025
f2.11.128 {.versions}

## Ajustes
- Ajustada CST de PIS/COFINS e IPI na nota de compra.
- Ajustada gravação da CFOP na nota de compra.

# 10/04/2025
b3.10.255, b3.10.256, p1.0.33 {.versions}

## Ajustes
- Ajustada sangria do dia que não contabilizava no fechamento do caixa.
- Corrigido erro não catalogado ao realizar venda pelo ZPOS.

# 09/04/2025
f2.11.127, b3.10.253, b3.10.254 {.versions}

## Ajustes
- Ajustado no CT-e simplificado o tipo de serviço subcontratação.
- Ajustada impressão de MDF-e com vários CT-es para exibir todos os itens na impressão.

# 08/04/2025
f2.11.126, b3.10.252, p1.0.31 {.versions}

## Novidades
- Implementada a tag de número AEDF na emissão de NFS-e em clientes de Florianópolis.
- Adicionados a lista de CFOP de entrada os códigos 6910 e 5910.

## Ajustes
- Ajustada impressão do DANF-e para não duplicar a listagem quando a lista estiver acima de 20 itens.
- Ajustado totalizador de valor restante no relatório de "Contas a receber".
- Ajustada nas vendas do PDV a opção "exigir cliente após valor" para que solicite apenas uma vez os dados do cliente.
- Removido aviso duplicado do perfil do usuário.
- Ajustada a importação de XML de CT-e quando um documento estiver em criação/edição.
- Ajustada alíquota de ICMS para bases novas nos estados: RN, PI e MA.
- Corrigida falha no login do PDV Híbrido.
- Ajustado relatório de "Pedidos de venda" para exibir os pedidos com status "concluído".

# 02/04/2025
f2.11.126, b3.10.247 {.versions}

## Ajustes
- Ajustada falha na geração do XML do mês.

# 01/04/2025
f2.11.125, b3.10.245, p1.0.30 {.versions}

## Novidades
- Implementado pagamento integrado na Pré-venda.
- Criado campo de alíquota de crédito presumido para o cBenef e gerada as tags do grupo gCred.

## Ajustes
- Ajustado arquivo SETORTXT para gerar a informações corretamente (balança Filizola).
- Ajustado o botão "confirmar" para bloquear após o primeiro clique.
- Ajustado para mostrar as opções de exclusão/edição em rejeições 303.
- Ajustado registro 74 na geração do inventário do Sintegra.
- Alterado os links de transmissão da NF-e em contingência SVC.
- Ajustada vendas com cliente dentro do estado e endereço de entrega fora do estado.
- Ajustada importação de XML de CT-e para CT-e de subcontratação.

# 31/03/2025
f2.11.124, b3.10.243, b3.10.244 {.versions}

## Ajustes
- Ajustado para 10 o número máximo de documentos fiscais agendados em segundo plano.
- Ajustada sincronização de pedidos em lote pelo Gweb.
- Limitado a 10 documentos enviados em segundo plano no backend.

# 27/03/2025
f2.11.123 {.versions}

## Ajustes
- Ajustado valores de BC ICMS ST e ICMS ST que estavam sendo alterados ao confirmar a tela de produtos na NF-e.

# 25/03/2025
f2.11.122, b3.10.242 {.versions}

## Ajustes
- Corrigida a emissão de NF-es com ICMS desonerado que estavam zerando ao editar.
- Ajustada seleção de fornecedores para respeitar a configuração de atributos do cadastro de pessoas.
- Ajustada geração do XML do mês para exportar as cartas de correção quando houver.

# 24/03/2025
f2.11.121, b3.10.241 {.versions}

## Ajustes
- Ajustado botão de aceite nos termos de uso no celular.
- Ajustado valores no fechamento de caixa.

# 19/03/2025
f2.11.120 {.versions}

## Ajustes
- Ajustado cálculo do ICMS desonerado quando a base de cálculo esta zerada.

# 18/03/2025
f2.11.118, f2.11.119, b.3.10.240, p1.0.29. a2.3.7 {.versions}

## Novidades
- Implementada solicitação de importação do XML após manifestar a nota de compra.
- Implementado o aceite de termos de uso do sistema.
 
 ## Ajustes
- Ajustado o Bloco H do SPED para não apresentar produtos com estoque negativo.
- Ajustada a sobreposição de informações na impressão da NFC-e.
- Ajustado cálculo do ICMS desonerado para CST com redução da base de cálculo.
- Ajustado relatório de Pedidos de Venda (simplificado).
- Ajustado relatório de Contas a receber que estava apresentando receitas devolvidas mesmo usando o filtro de "pagas/recebidas".
- Corrigida geração das tags "vICMSDeson" e "indDeduzDeson" em notas sem ICMS desonerado.

# 11/03/2025
f2.11.117, b3.10.234, a2.3.5 {.versions}

## Ajustes
- Enviada a tag "forma_de_pagamento" nos dados gerais do JSON da NFS-e de Sumaré/SP. 
- Ajustada CSOSN 500 para respeitar a configuração de impostos criada.

# 07/03/2025
b3.10.233 {.versions}

## Ajustes
- Adicionada indicação de serial bonificados.

# 06/03/2025
p1.0.28 {.versions}

## Ajustes
- Ajustada sincronização do PDV Híbrido.

# 25/02/2025
f2.11.115, f2.11.116, b.3.10.229, b3.10.230, b3.10.231, p1.0.27 {.versions}

## Ajustes
- Ajustada gravação do "PIN SUFRAMA" e "Data prevista de entrega" ao editar os documentos transportados pelo CT-e.
- Ajustada coluna "última compra" no relatório de "Inventário de Estoque" que não estava considerando o fator de conversão.
- Ajustado fator de conversão na compra de produtos para permitir valores menores que "1".
- Ajustada prioridade de pesquisa no PDV para considerar primeiro o código interno.
- Ajustado Bloco K do SPED Fiscal que não estava recalculando corretamente na base de um cliente específico.
- Ajustada unidade tributável para produtos que não possuem configuração unidade de medida tributável.
- Ajustado recebimento parcial de parcelas.
- Ajustado valor da receita ao receber valores parcelados.
- Ajustada falha ao salvar produtos com unidade de medida cadastrada.
- Ajustada forma de pagamento que não estava sendo removida ao excluir no recebimento de receitas.
- Ajustado recebimento de contas quando houver mais de uma forma de recebimento parcial.

# 24/02/2025
b.3.10.228 {.versions}

## Ajustes
- Ajustada regra de tributação vinculando NCM para permitir até 150 NCMs.

# 21/02/2025
b3.10.226, b3.10.227 {.versions}

## Ajustes
- Ajustada divergência no relatório de "Plano de contas".
- Ajustada data de entrada que não estava sendo salva ao editar a nota de compra.

# 19/02/2025
f2.11.114, b3.10.224, b3.10.225, p1.0.26 {.versions}

## Ajustes
- Ajustada soma dos percentuais de GLP que deve fechar em 100%.
- Ajustada as contas administrativas que não apareciam para seleção na sangria/suprimento.

# 18/02/2025
f2.11.113, b3.10.223, p1.0.25 {.versions}

## Novidades
- Adicionada opção para incluir devoluções no relatório "NF-e, NFC-e (resumo)".
- Adicionado processo de reativação da NFS-e quando mudar a cidade do emitente.
- Implementado o cadastro de unidades de medida no cadastro do produto.

## Ajustes
- Ajustado filtro do dashboard do gráfico de documentos fiscais emitidos para apresentar NFS-e pendente.
- Corrigido erro ao salvar NF-e de importação ao editar.
- Ajustado no pagamento de uma despesa a gravação do meio de pagamento utilizado.
- Ajustada opção de "Gerar NFC-e" quando o controle de caixa esta desabilitado.
- Ajustado vendas no PDV que não estavam permitindo a conclusão após informar o cliente.
- Ajustado erro ao salvar uma nota de compra quando o sistema possui migrações pendentes.
- Ajustado cancelamento de documentos quando o caixa estiver fechado.
- Ajustado layout da tela de metas para se ajustar ao tamanho da tela.
- Ajustada falha na expiração do certificado digital.

# 13/02/2025
b3.10.222 {.versions}

## Ajustes
- Ajustado erro ao gerar MDF-e a partir de CT-e Simplificado.

# 11/02/2025
f2.11.112, b3.10.221 {.versions}

## Ajustes
- Ajustado valor original das parcelas para não permitir valores negativos.

# 06/02/2025
f2.11.111, b3.10.219, b3.10.220 {.versions}

## Ajustes
- Ajustado vendedor vinculado a NF-e quando editada a venda.
- Ajustada notificação de certificado vencendo que estava sendo enviada fora do período. 
- Corrigida falha que fazia o sistema deslogar automaticamente assim que era feito o login.

# 05/02/2025
f2.11.106, f2.11.107, f2.11.109, f2.11.110, b3.10.215, b3.10.217, b3.10.218 {.versions}

## Novidades
- Melhorias na tela de conversor de CFOP entrada/saída.
- Incluso sinal de negativo na coluna "Saldo" no relatório de Metas.

## Ajustes
- Ajustada geração do registro C170 na geração do SPED.
- Ajustado dropdown de CST para PIS e COFINS.
- Ajustada geração do registro C177 para notas fiscais de entrada (compras)
- Ajustado para destacar o FCP em notas complementares de ICMS.

# 04/02/2025
f2.11.108, b3.10.216 {.versions}

## Novidades
- Implementado módulo para controle de metas de vendas.
- Criado relatório de Metas.

# 31/01/2025
f2.11.105, b3.10.213, b3.10.214 {.versions}

## Ajustes
- Ajustado cálculo do ICMS desonerado que estava invertendo a porcentagem da base de cálculo.
- Ajustada impressão do CT-e simplificado para apresentar o tomado e a chave de acesso.
- Ajustada lentidão no PDV Híbrido na base de um cliente específico.

# 29/01/2025
f2.11.103, f2.11.104, b3.10.212, p1.0.24 {.versions}

## Novidades
- Adicionada configuração para vinculação entre CFOPs na importação de NF-e de compra.
- Adicionada a informação do barcode quando é feita a sincronização da base no PDV Híbrido.
- Adicionado no relatório de "Auditoria" os registros de alterações nos módulos que emitem documentos e possuem configurações.
- Implementada opção de importação do XML CT-e para fazer o contra CT-e.
- Adicionada configuração de ICMS ST quando a CST for 30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária.
- Adicionada geração do arquivo C177 para o estado de PE.

## Ajustes
- Ajustado cálculo no total de ICMS desonerado no lançamento da compra.
- Corrigida falha na importação de XML para um cliente específico.
- Ajustado na NF-e para mostrar nos documentos vinculados a NFC-e que deu origem a nota.
- Corrigida datas das parcelas nas vendas que possuem cliente com dia de acerto configurado.
- Ajustado para não permitir pagamentos com valor superior ao da venda a menos que sejam em dinheiro ou cheque.
- Ajustado importação de XML de compra que estava zerando o ICMS ST ao editar a compra.
- Ajustada na exportação de dados o campo "data de nascimento", caso houver ela passa agora a ser exportada com os demais dados.
- Ajustado pagamento por PIX com ZPOS para registrar as vendas como "recebidas".
- Ajustada na PV do PDV Híbrido a hora apresentada no DANFC-e.
- Ajustados relatórios de "CT-e emitidos" e "Total de CT-e por tomador" para apresentar somente CT-es autorizados e cancelados ao marcar a opção "Excluir não faturados".
- Ajustado relatório "Pedidos de venda (simplificado)" para apresentar na coluna "faturado em" o documento em que o pedido foi faturado.
- Fixada opção "Movimenta estoque" no cadastro de operações.
- Ajustada rejeição que ocorria na NF-e com serviço ao utilizar a CST 99 - Outras operações.
- Ajustado relatório "Produtos vendidos por tipo de imposto" que estava apresentando os dados de ST PIS e ST COFINS em formato de moeda. 
- Removida a opção de cancelar NFS-e na cidade de Maracanaú/CE.
- Removido espaçamento de impressão de PV no PDV Híbrido.
- Alterado prefixo de arquivos de XML exportados do SAT em SP.
- Ajustado sistema para considerar a redução da base de cálculo para calcular ICMS desonerado com CST 41 ou CST 40.

# 24/01/2025
b3.10.211 {.versions}

## Ajustes
- Ajustada a geração das tags de cAut, CNPJ e tBand no XML da NFC-e.

# 21/01/2025
f2.11.102, b3.10.210 {.versions}

## Ajustes
- Ajustada forma de pagamento que estava sumindo ao editar pedidos de venda.
- Ajustada mensagem indevida nas informações adicionais da NF-e.
- Corrigido pedido de venda com pagamento do GDOOR Pay PIX que não estava concluindo os pedidos.

# 20/01/2025
f2.11.101, b3.10.209 {.versions}

## Ajustes
- Separadas as opções para descontar ICMS  e IPI na base de cálculo do PIS/CONFINS.
- Corrigida na importação de XML com caracteres especiais na tag do xPed.

# 16/01/2025
f2.11.100, b3.10.207, b3.10.208, p1.0.23 {.versions}

## Ajustes
- Ajustado recebimento de parcelas que ao fazer um processo específico estava gerando valores negativos.
- Ajustada falha no primeiro acesso ao PDV Híbrido.
- Ajuste na importação de bases com planos de contas.

# 10/01/2025
f2.11.97, f2.11.99, b2.10.206 {.versions}

## Ajustes
- Ajustada falha ao gerar o XML do mês.
- Ajustado CT-e complementar para não solicitar informação de carga.

# 09/01/2025
b3.10.204, b3.10.205 {.versions}

## Ajustes
- Corrigida a pesquisa de NCMs no cadastro do produto.
- Ajustado dashboard que não estava exibindo corretamente os valores das receitas.

# 08/01/2025
f2.11.96, f2.11.98, b3.10.199, b3.10.200, b3.10.201, b3.10.202, p1.0.22 {.versions}

## Novidades
- Adicionado filtro na listagem de produtos para exibir ou não produtos inativos.
- Adicionada nova permissão no cadastro de produtos para visualizar ou não o custo dos produtos.
- Enviada a tag "forma_de_pagamento" nos dados gerais do JSON da NFS-e de Sumaré/SP.
- Geradas as tags xPed e nItemPed no XML da NF-e/NFC-e gerados a partir de um pedido de venda.
- Adicionado novos filtros no cadastro de produtos para filtrar informações pela compra: número da compra, data inicial e final e fornecedor.
- Implementada verificação para importação de mais de um serviço por NFS-e para municípios onde é permitida a emissão com mais de um serviço. 
- Implementado a exclusão/inatividade de caixas sem uso no controle de caixa do PDV.
- Implementado novos campos nas Receitas do financeiro: "data de registro" e "data de pagamento".
- Implementada as opções de retenção para notas "normais" além da nota conjugada.
- Implementada as informações nutricionais no cadastro de produtos.
- Implementada a emissão do CT-e simplificado.
- Adicionados filtros para organização dos relatórios.

## Ajustes
- Ajustada a gravação dos dados na configuração de balança de checkout no PDV Híbrido.
- Ajustada falha ao gerar o inventário quando existem produtos com código de referência até 15 caracteres.
- Ajustada data de vencimento das parcelas na importação de base de dados no Gweb. 
- Ajustado a configuração para gerar o preço de venda do produto sempre vir desmarcada por padrão.
- Removido do relatório de "Produtos por vendedor" o totalizador de documentos.
- Ajustado carregamento de certificados com senhas maiores que 26 caracteres.
- Corrigida falha ao gerar o relatório de Pedido de venda com pedidos em aberto.
- Ajustado o envio da tag CEST na emissão de documentos para produtos que não possuem esta informação.
- Ajustado o relatório de Movimentos (simplificado) para exibir as pré-vendas.
- Ajustado o PDV para não permitir a geração de documentos fiscais quando o caixa está fechado.
- Ajustada falha ao salvar pedidos importados para NF-e.
- Ajustada opção "Gerar MDF-e" na NF-e que não estava carregando a UF de início.
- Ajustado pagamentos realizados pelo ZPOS.
- Ajustado para não sugerir o valor da sangria no fechamento de caixa cego.
- Ajustado o relatório de "Total movimentado por CFOP" para não exibir compras com CFOP em branco (zerado).
- Retirada a configuração padrão do FCP ao habilitar novas bases.
- Ajustado cálculo do MVA que não estava sendo calculado na base de cálculo FCP ST.
- Revertida a implementação de mais de um serviço na emissão de NFS-e na cidade de Cipó/BA. Foi verificado que para este município não é possível informar mais de um serviço.
- Ajustada duplicidade no meio de pagamento ao efetivar a receita.
- Ajustado para não permitir o lançamento de clientes que não tenham o atributo "cliente" marcado em documentos fiscais.
- Alterado modo de envio para impressão no ZPOS.
- Ajustes na apresentação do dados do CT-e.
- Ajustada falha ao salvar um CT-e novo.
- Ajustado erro na inclusão de documentos no CT-e.
- Corrigida falha na quantidade de carga no campo "quantidade" que mesmo informado apresentada erro.

# 03/01/2025
b3.10.196, b3.10.197 {.versions}

## Ajustes
- Ajustada NFS-e já concluída para o município de Ipirá/BA que estava ficando "em processamento".
- Ajuste na geração do financeiro quando uma venda é efetuada com pagamento integrado.
- Ajustada falha ao consultar a NFS-e (nota em processamento)

# 02/01/2025
b3.10.192 {.versions}

## Ajustes
- Ajustada falha ao gerar o arquivo do SPED Fiscal.

# 01/01/2025
f2.11.95, b3.10.191 {.versions}

## Ajustes
- Ajustado o registro da receita no contas a receber para descontar o troco.

---
# 2024 {.year}

Foram implementados:
- Novidades: contabilizando
- Ajustes: contabilizando

**Total: contabilizando**

--- 
ir para [2023](#h-2023) {.goto}

ir para [2022](#h-2022) {.goto}

ir para [2021](#h-2021) {.goto}

---

# 30/12/2024
f2.11.94 {.versions}

## Ajustes
- Ajustado o sistema para respeitar a configuração de COFINS feita na regra de tributação.

# 23/12/2024
f2.11.92, f2.11.93, b3.10.190, b3.10.191 {.versions}

## Ajustes
- Ajustada a geração de comissão para o vendedor do pedido de venda.
- Ajustada a gravação do pedido de venda/orçamento.

# 18/12/2024
f2.11.89, f2.11.90, f2.11.91, b3.10.189 {.versions}

## Ajustes
- Ajustada tela em branco ao trocar de empresa no sistema.
- Corrigido múltiplos requests ocorrendo na listagem de NF-e, NFC-e, pedidos e orçamentos.
- Ajustada a habilitação do ambiente nacional da NFS-e por API e correção do processo de enviar o certificado para a Focus.

# 16/12/2024
f2.11.88, b3.10.187, b3.10.188 {.versions}

## Ajustes
- Ajustada impressão do NFC-e que esta "cortando" informações.
- Ajustada na edição da venda para não remover o vendedor do produto.
- Ajustes na rota do vendedor do cliente para o Gped.

# 06/12/2024
f2.11.86, f2.11.87, b3.10.184, b3.10.185, b3.10.186 {.versions}

## Ajustes
- Ajustado na NF-e o vinculo do vendedor com o cliente.
- Liberado campo do código de barras no cadastro do produto para digitação do GTIN quando o produto é pesado.

# 05/12/2024
f2.11.84, f2.11.85, b3.10.183 {.versions}

## Ajustes
- Ajustada sincronização de vendedores vinculados no Gped/Gweb.

# 02/12/2024
f2.11.82, b3.10.181, b3.10.182 {.versions}

## Ajustes
- Ajustada sincronização de vendedores vinculados no Gped/Gweb.
- Ajustada falha na importação de XML no CT-e em um cliente específico.
- Ajustado tamanho do campo para assinatura do CF-e.

# 28/11/2024
f2.11.81, b3.10.179, b3.10.180 {.versions}

## Ajustes
- Ajustado valor unitário do produto no lançamento da compra por XML.
- Atualizada alíquotas internas de destino no Gweb.

# 27/11/2024
b3.10.177, b3.10.178, p1.0.21 {.versions}

## Ajustes
- Ajustada visualização da Sangria no fechamento do caixa.
- Ajustado visualização dos tributos aproximados no DANF-e.
- Ajustada impressão dos dados do cliente nos comprovantes das vendas do PDV Híbrido.

# 19/11/2024
f2.11.80, b3.10.176 {.versions}

## Novidades
- Implementadas opções de retenção para NF-e.
- Implementado o número do pedido de venda na emissão de NF-e.
- Ao realizar a troca do ambiente de emissão no módulo da NF-e as notas emitidas em homologação serão apagadas.
- Criado filtro para desconsiderar CT-es não autorizados no relatório de “Total de CT-e por tomador”.
- Implementado na pesquisa por nome/razão social para clientes no relatório de “Produtos vendidos por cliente”.
- Implementada a emissão de mais de um serviço na NFS-e para o município de Cipó/BA.

## Ajustes
- Ajustado no pedido de venda para apresentar as informações adicionais do produto caso houver.
- Ajustado filtro “campo específico” do relatório de “Alterações no produto” para exibir a opção “preço de venda”.
- Ajustado campo “quantidade de carga” na emissão do CT-e com documento transportado informado.
- Ajustada falha no recebimento de vendas com o ZPOS.
- Ajustado recebimento de parcelas de débito à vista pelo ZPOS.
- Ajustada falha na impressão das informações adicionais do produto na NFC-e/PV.
- Ajustadas as tags das regras de tributação dentro do cadastro do produto.
- Ajustado o estorno de sangrias.
- Ajustada visualização do dashboard de documentos fiscais emitidos que estavam considerando notas com rejeição.
- Ajustada na emissão do MDF-e o campo para referenciar notas que estava apagando informações já preenchidas.
- Ajustado valor unitário do produto na nota de compra.
- Ajustado os impostos do item dentro da NF-e para que respeitem a configuração da regra de tributação.
- Ajustada impressão do desconto por item na impressão da NFC-e e PV.

# 12/11/2024
b3.10.175 {.versions}

## Ajustes
- Ajustada falha na visualização de MDF-e autorizado.

# 11/11/2024
b3.10.174 {.versions}

## Novidades
- Implementada opção para não listar produtos com quantidade zerada no relatório de Inventário.

# 07/11/2024
f2.11.79, b3.10.172, b3.10.173 {.versions}

## Novidades
- Implementado filtros de ordenação e opções de relatório.
- Adicionado o modelo Excel para o relatório de "inventário".
- Implementado filtro de status no relatório de "Ct-es emitidos".

## Ajustes
- Ajustada a geração do relatório de "documentos fiscais emitidos" com filtros de tipo de operação.
- Ajustada falha na geração do relatório de "listagem de pessoas".
- Ajustado erro ortográfico no filtro do relatório de "inventário".
- Ajustado arquivo XLSX do relatório de "CT-es emitidos".

# 06/11/2024
f2.11.78, b3.10.170, b3.10.171 {.versions}

## Ajustes
- Ajustadas inconsistências no layout de download da NFS-e.
- Ajustado tamanho do campo da URL da prefeitura na NFS-e.

# 05/11/2024
f2.11.77, b3.10.169 {.versions}

## Novidades
- Implementada versão do inventário em Excel.

# 02/11/2024
f2.11.76, b3.10.167, b3.10.168 {.versions}

## Ajustes
- Ajustada falha na proteção de relatórios em Excel por senha.
- Ajustado erro ao imprimir pré-vendas.

# 31/10/2024
b3.10.164{.versions}

## Ajustes
- Ajustado erro ao fazer o cancelamento da NFC-e.

# 29/10/2024
f2.11.72, f2.11.73, f2.11.74, f2.11.75, b3.10.156, b3.10.157, b3.10.158, b3.10.159, b3.10.160, b3.10.161, b3.10.162, b3.10.163, p1.0.19{.versions}

## Novidades
- Implementada a integração do Gweb com MF-e no estado do Ceará, para emissão de CF-e/NFC-e.
- Reformulação dos relatórios.
- Implementado o campo "Uso exclusivo do emissor do CT-e" na emissão do CT-e.
- Implementado no cadastro de pessoas a possibilidade de "converter" um vendedor em usuário.
- Criada tratativa para não permitir a importação para NFS-e de orçamentos/pedidos de venda com mais de um serviço.

## Ajustes
- Ajustada a edição do CST do produto na NF-e para recalcular os valores após alteração.
- Corrigida abertura da tela de impressão do relatório de Inventário com o modelo "Para impressão".
- Ajustado problemas na geração de relatórios maiores de 1MB.
- Ajustada falha na geração dos relatórios.
- Ajustada visualização do campo de "contas" na sangria e suprimento para clientes que não possuem o módulo financeiro ativo.
- Padronizada a informação de volume e peso da carga do CT-e.
- Ajustes na guia "alterar produto" no módulo de compras.
- Ajustada edição de vendas com o caixa fechado.
- Ajustada conversão de quantidades decimais na quantidade do PDV.
- Ajustada tela em branco no agendamento do XML do mês.
- Ajustada as casas decimais no cálculo do valor total para respeitar a configuração salva.
- Ajustada tela em branco nas configurações dos arquivos fiscais.
- Ajustada na emissão da NF-e a partir de um pedido de venda as informações adicionais que estavam sendo duplicados.
- Corrigida falha ao acessar as configurações dos relatórios.
- Corrigida falha ao carregar os pagamentos nas configurações da NF-e.
- Ajustada tela em branco nas configurações dos relatórios.
- Ajustada formatação dos números no padrão de moeda no relatório "inventário para impressão".
- Ajustada falha ao baixar os relatórios.
- Ajustado ao erro ao salvar os relatórios.
- Ajustada visualização do botão para converter o vendedor em usuário.
- Corrigido erro pos_cash_control ao abrir actions da lista do PDV.
- Corrigido erro ao gravar o cadastro de um produto após editar e incluir um novo código de barras.
- Ajustado alguns relatórios no modo completo que não estavam sendo gerados em formato Excel.
- Corrigido relatório de comissão por vendedor que estava apresentando dados bagunçados.
- Removida a proteção de edição do Excel que exigia uma verificação de permissão do usuário.
- Ajustado a atualização dos códigos de barras nas configurações do PDV.

# 14/10/2024
f2.11.70, p1.0.18, a2.3.4{.versions}

## Ajustes
- Ajustado o envio de vendas que apresentavam falha no PDV.

# 09/10/2024
b3.10.153{.versions}

## Ajustes
- Ajustada data de entrada nas notas de compra na geração do SPED Fiscal.

# 07/10/2024
f2.11.69, b3.10.151, b3.10.152, p1.0.15, p1.10.17 {.versions}

## Novidades
- Adicionada a IE no relatório de Inventário de Estoque, ao lado do CNPJ.
- Implementada a importação da NFC-e para NF-e.
- Adicionado campo para complemento de IPI na NF-e complementar.
- Melhorias no cadastro e configuração de produtos pesados.

## Ajustes
- Ajustada padronização na separação dos XMLs do mês para o CT-e com base na data de emissão.
- Ajustada as permissões para novos usuários ao acessar a Manifestação do Destinatário eletrônica.
- Ajustado preço de custo dos itens vendidos em kit no relatório de Margem de Lucro sobre Preço de Venda.
- Corrigida falha na geração de parcelas com dia de acerto definido no cadastro do cliente.
- Ajustada tela de devolução de pagamento a prazo para fechar ao cancelar um pedido de venda.
- Ajustada função de alterar o nome do produto na nota de compra.
- Corrigida a gravação de dados na configuração do PDV.
- Ajustada na importação da nota de compra o campo origem do produto.
- Ajustada data de saída da NF-e quando feita fora do mês de apuração no SPED Fiscal.
- Ajustada data de emissão dos documentos fiscais para não emitirem documentos com datas inválidas.
- Ajustado bug visual no cadastro de perfis de permissão de usuário.
- Ajustada fonte para impressão da PV no PDV Híbrido.
- Ajustada a indicação de usuários inativos como responsáveis no cadastro de caixas.
- Ajustada posição dos valores dos campos BC e Valor do ICMS no relatório Total Movimentado por CFOP. 
- Ajustadas casas decimais da leitura de código de barras
- Corrigida falha na emissão de NFC-e ao informar uma operação sem PIS/COFINS.
- Ajustado recebimento parcial de parcelas com pagamento inferior ao valor da parcela.
- Ajustada na importação de bases convertidas o campo "Birthday".
- Ajustada falha na geração da impressão da pré-venda.
- Removida a instalação automática do GDoorDFe no PDV Híbrido, agora ao criar um novo caixa e marcar o controle de gaveta será possível baixar o arquivo separadamente.

# 02/10/2024
b3.10.150, p1.0.14 {.versions}

## Ajustes
- Ajustado botões de sangria e suprimento que não estavam aparecendo no PDV Híbrido.
- Ajustada seleção do usuário na geração do QRCode para vínculo do Gped.

# 25/09/2024
b3.10.147, b3.10.148, b3.10.149 {.versions}

## Ajustes
- Ajustada falha ao efetuar o pagamento de receitas.
- Ajustada a autenticação de sincronização do Gped para usuários com perfis de permissão diferentes de "administrador".
- Ajustado para não mostrar usuários inativos na geração do QRCode do Gped.
- Ajustada opção "vendedor fixo" na sincronização do Gped.

# 20/09/2024
f2.11.68, b3.10.146 {.versions}

## Ajustes
- Ajustada lista de paginação e pesquisa por número da nota no ECONF.

# 19/09/2024
f2.11.66, b3.10.145, p1.0.13 {.versions}

## Ajustes
- Ajustado pagamento pendente na NF-e com o ZPOS.
- Ajustado tamanho do campo do código de autorização nas vendas com ZPOS.
- Ajustada geração do preview da pré-venda quando o PDV Híbrido estiver em modo offline.

# 18/09/2024
b3.10.142, b3.10.143 {.versions}

## Ajustes
- Ajustado envio da NFS-e para clientes de Porto Alegre/RS que emitem NFS-e com ambiente nacional.
- Ajustada geração do dígito adicional na carga da balança para os casos onde o produto tem 6 dígitos.

# 17/09/2024
f2.11.65, b3.10.141, p1.0.12 {.versions}

## Novidades
- Criado padrão para ordenação da listagem de notas na Manifestação do Destinatário.
- Implementado campo para vincular uma tributação no cadastro do produto na entrada da NF-e por importação.
- Implementado cálculo automático dos juros no contas a receber.
- Implementado ECONF - Evento de Conciliação Financeira.

## Ajustes
- Ajustado botão "salvar" no PDV ao realizar uma venda com valor que solicite o cliente.
- Ajustado registro C110 que estava sendo gerado na NFC-e quando a mesma possuía observações.
- Inserida obrigatoriedade no campo "vendedor" para a geração do QRCode para o Gped.
- Ajustado dropdown de "campo alterado" ao editar uma CC-e.
- Ajustado dropdown de "grupo alterado" para exibir o grupo "compl" mesmo que a CC-e autorizada não tenha o campo preenchido.
- Ajustado reconhecimento de código de barras por valor de produto pesado.
- Ajustada opção de indicador de operações nas vendas do PDV Híbrido.
- Ajustado no pedido de venda o valor do serviço na importação para NFS-e.

# 11/09/2024
b3.10.140 {.versions}

## Ajustes
- Ajustada tag < tPag > quando efetuado um pagamento via PIX através do ZPOS.

# 09/09/2024
f2.11.64, b3.10.139 {.versions}

## Ajustes
- Ajustes na sangria e suprimento quando o cliente não possui o módulo financeiro habilitado.

# 06/09/2024
f2.11.63, b3.10.138 {.versions}

## Ajustes
- Ajustado para considerar as pré-vendas no fechamento do caixa quando o serial não tem o módulo Financeiro ativo.

# 03/09/2024
b3.10.137 {.versions}

## Ajustes
- Ajustada visualização dos detalhes do CT-e de Substituição.

# 02/09/2024
f2.11.62, b3.10.133, b3.10.134, b3.10.135, b3.10.136, p1.0.11 {.versions}

## Ajustes
- Ajustado visualização de notas complementares.
- Ajustado relatório de "Margem de Lucro sobre Preço de venda" para produtos vendidos no PDV Híbrido.
- Ajustado valor da sangria no fechamento de caixa que não estava sendo impresso caso não informado valores em espécies.
- Ajustado problemas no recebimento de contas pelo PDV.
- Ajustado totalizador de cancelamentos no fechamento de caixa.
- Ajustada mensagem ao realizar sangrias enquanto o caixa estiver aberto.
- Ajustados recebimentos que estavam entrando no fechamento do caixa quando informada uma data de recebimento.

# 28/08/2024
b3.10.131, b3.10.132 {.versions}

## Ajustes
- Ajustado no módulo do financeiro o carregamento das contas cadastradas no sistema que não estavam exibindo a listagem.
- Ajustada permissão de acesso as configurações do módulo de compras para que usuários não autorizados possam emitir notas de compra manual.

# 27/08/2024
f2.11.61, b3.10.128, b3.10.129, b3.10.130, p1.0.10 {.versions}

## Novidades
- Lançamento da abertura e fechamento de caixa 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/tutoriais/controle-de-caixa).
- Implementados campos para comissão de serviços a prazo e a vista no cadastro de pessoas.
- Implementado o agendamento para envio automático do XML do mês.
- Implementado o Regime Tributário para MEI.
- Adicionada nova instituição de pagamento: "InterPag".

## Ajustes
- Ajustado no relatório de "Alterações no produto" as alterações na edição da compra.
- Ajustado no relatório de "Total de NF-e/NFC-e por situação" a exibição de notas de devolução de compra.
- Ajustado campo contato/responsável no cadastro de pessoas que não estava exibindo a informação.
- Ajuste nas configurações da seleção na tabela de preços do PDV.
- Ajustado no pedido de venda e orçamento para trazer automaticamente o vendedor vinculado ao cliente no cadastro do produto.
- Ajustado no modo escuro o total dos produtos que estava ficando em branco.
- Ajustado valor do custo médio para levar em consideração a configuração feita na composição do custo médio de compra no módulo de compras.
- Ajustada impressão dos campos "Código" e "QTD" na pré-venda.
- Realizada migração para ajustar séries offline já cadastradas no sistema.
- Corrigida falha ao salvar o lançamento de compras manuais no sistema.

# 20/08/2024
f2.11.60, b3.10.126, b3.10.127 {.versions}

## Ajustes
- Ajustada edição de NF-e com pagamentos a prazo.
- Ajustada gravação de parcelas na nota de compra.
- Corrigida validação da atualização de parcelas no módulo de compras.

# 16/08/2024
f2.11.59, b3.10.124, b3.10.125 {.versions}

## Ajustes
- Ajustado envio da Carta de Correção para o CT-e.
- Ajustada duplicidade de registros financeiros ao editar e salvar uma compra.

# 15/08/2024
f2.11.58, b3.10.120, b3.10.121, b3.10.122, b3.10.123 {.versions}

## Ajustes
- Corrigida falha ao logar no sistema.
- Corrigido valor de FPC que estava sendo calculado junto ao ICMS ST.
- Corrigido erro ao salvar uma NFS-e que foi importada de um orçamento/pedido.
- Ajustado custo unitário no cadastro do produto que não está sendo ajustado quando a nota de compra possuí fator de conversão.

# 13/08/2024
f2.11.57, b3.10.119 {.versions}

## Novidades
- Implementada a separação de produtos e serviços ao importar orçamentos e pedidos de venda.

# 12/08/2024
f2.11.56 {.versions}

## Ajustes
- Corrigida exibição do custo de compra e valor unitário do produto no lançamento da compra.

# 07/08/2024
f2.11.55, b3.10.117, b3.10.118 {.versions}

## Ajustes
- Ajustado o cálculo do "novo preço de custo" quando o produto possui fator de conversão.
- Ajustado erro na geração do arquivo da balança para produtos que possuem caracteres especiais no nome.

# 06/08/2024
b3.10.116 {.versions}

## Ajustes
- Ajustada geração da tag < indDeduzDeson > em vendas para a ZFM com SUFRAMA.

# 05/08/2024
f2.11.54, b3.10.113, b3.10.114, b3.10.115, p1.0.9 {.versions}

## Novidades
- Implementada a carga de balança no Gweb.
- Implementado o campo “Data de pagamento” ao cadastrar receitas/despesas como pagas.
- Otimizado o processo de bloqueio da Manifestação Eletrônica quando a SEFAZ retorna mensagem de consumo indevido.
- Incluso campo para mostrar o CFOP do XML na importação de notas de compra.
- Atualizada tabela CEST do Sistema Gweb.
- Implementado campo para edição da data de emissão no MDF-e.
- Adicionado o código do produto na lista de produtos vendidos no PDV.
- Adicionado no filtro Tipos de documentos do relatório de “Serviços Prestados” a opção Pedido de venda.
- Adicionada permissão para visualização do saldo de contas financeiras.
- Adicionado no cadastro do cliente no campo da tabela preferencial uma descrição para evidenciar a prioridade desta configuração sobre as demais relacionadas a tabela de preços.

## Ajustes
- Ajustado lançamento de valores com vírgula na emissão da NF-e pelo iPhone.
- Ajustada quebra de linha através do Shift+Ctrl na emissão da carta de correção.
- Corrigida falha na emissão de notas de importação ao selecionar no valor total da nota a opção “imposto de importação”.
- Ajustado relatório de “Planos de Contas” para respeitar o plano indicado no filtro.
- Ajustado filtro Tipo de DF-e do relatório “Total de NF-e/NFC-e por situação” para apresentar somente as opções NF-e e NFC-e.
- Ajustada falha no recebimento de receitas/despesas quando os campos juros, taxas, desconto ou acréscimo era deletado.
- Ajustado visualização dos campos de hora na emissão de documentos e relatórios.
- Ajustado para que o nome do vendedor seja exibido no DANFC-e quando existir mensagem promocional a ser impressa.
- Ajustado no plano de contas a visualização do plano de contas pai para contas no nível 3.
- Ajustado dados das informações adicionais que não estavam sendo salvas quando ocorria falha na transmissão do CT-e e MDF-e.
- Ajustado preenchimento automático da CST de PIS/COFINS nos serviços ao replicar uma NF-e.
- Retirada a obrigatoriedade do campo “Documento de identificação” do cadastro do cliente para emissão de NF-e de importação.
- Removida logo do Sistema no envio de orçamentos por e-mail.
- Ajustada data de emissão nos detalhes da nota de compra.
- Ajustada descrição da forma de pagamento “PIX Estático” e abertura do preview para impressão da Pré-venda.
- Ajustado nos relatórios de “Contas a pagar” e “Contas a receber” o filtro de plano de contas para mostrar apenas os planos de contas de saída ou entrada.
- Ajustada exibição da data de pagamento das despesas do relatório “Contas a pagar”.
- Ajustada impressão da logomarca na emissão de pré-vendas no PDV Híbrido.
- Ajustada tela do PDV para não sobrepor a soma do valor total dos produtos quando na listagem houver mais de 5 itens.
- Ajustado para permitir a edição da quantidade de produtos em notas de devoluções emitidas pelo módulo de compras. 
- Ajustado relatório de “Alterações no produto” para exibir as alterações feitas na edição do XML de compra.
- Ajustada quebra de linha para o campo “discriminação do serviço” na emissão de NFS-e.
- Ajustada falha na importação de bases novas.
- Ajustado erro de SQL ao gerar o arquivo de SPED Fiscal.
- Ajustado erro no registro C180 do SPED Fiscal que estava sendo gerado mesmo com a opção desmarcada.

# 29/07/2024
b3.10.111, f2.11.52{.versions}

## Ajustes
- Readequado a integração com o GHub

# 25/07/2024
b3.10.110{.versions}

## Ajustes
- Corrigido exclusão de produtos e pessoas que não possuem movimentação.

# 15/07/2024
b3.10.108, b3.10.109{.versions}

## Ajustes
- Corrigido erro de divisão por zero ao atualizar o custo médio do produto.
- Corrigido erro de falha no schema do XML ao emitir NFC-e.

# 15/07/2024
b3.10.107{.versions}

## Ajustes
- Corrigido impressão do PDV Híbrido que estava sobrepondo os itens.

# 15/07/2024
b3.10.107{.versions}

## Ajustes
- Corrigido impressão do PDV Híbrido que estava sobrepondo os itens.

# 15/07/2024
b3.10.106{.versions}

## Ajustes
- Corrigido erro ao atualizar uma NFCe devido a tipo de bandeira do cartão.

# 15/07/2024
b3.10.105, f2.11.51{.versions}

## Novidades
- Implementada integração com Sicredi, Caixa e BIN pelo ZPOS.
- Criado novo relatório de Balancete participativo de centro de custos e plano de contas.
- Criado novo campo para vincular um vendedor a um cliente dentro do cadastro de pessoas.
- Implementado o registro H030 no arquivo do SPED.
- Implementado no registro C180 do SPED Fiscal.

## Ajustes
- Corrigido no registro C100 do SPED a BC e valor de ICMS.
- Ajustado cálculo do custo médio do produto no lançamento de compras e também para recalcular o valor após a exclusão da nota de compra.
- Ajustado XML do mês que estava exportando arquivos em branco.
- Ajustado meio de pagamento padrão com pagamento integrado no PDV para finalizar a venda na maquininha.
- Corrigida falha na geração do relatório de Contas a Receber.
- Ajustada falha na consulta do NCM pelo módulo de compras.
- Ajustado o fator de conversão e configuração de ajustar preço de venda quando o de compra for maior que o anterior.
- Corrigido no XML de compra o valor de um produto específico que estava gerando o preço incorreto no produto.
- Corrigido erro de português na descrição da CST 40 do CT-e.
- Melhoria na visualização da descrição de produtos vinculados na entrada de compras no tema escuro.
- Ajustada tag tBand nas vendas onde os dados do cartão são informados manualmente.
- Ajustado na emissão da NFS-e com pagamento a prazo a exibição dos planos de conta de entrada.
- Ajustada impressão de NFC-e em contingência que estava sobrepondo informações.
- Ajustada impressão de NFC-e que estava cortando a impressão quando havia mensagem promocional configurada.
- Ajustada rejeição 569 que não permitia atualizar e transmitir e nem invalidar e recriar a nota, era uma situação bem específica que ocorria com alguns clientes.

# 05/07/2024
f2.11.49, f2.11.50{.versions}

## Ajustes
- Ajustado na entrada de notas com XML de compra o vínculo com produtos já cadastrados que estava alterando o nome ao concluir a compra.
- Atualizada a URL de download do PDV Híbrido.

# 02/07/2024
b3.10.104, p1.0.6, p1.0.7{.versions}

## Novidades
- Lançamento da balança de checkout no PDV Híbrido.

## Ajustes
- Ajustada rejeição 391 ao utilizar a forma de pagamento cartão sem pagamento integrado.
- Ajustado login e senha da prefeitura que não estava sendo salvo na Focus ao indicar as informações no Gweb para emissão de NFS-e.
- Alteração do nome PDV Offline para PDV Híbrido

# 01/07/2024
f2.11.47, f2.11.48, b3.10.102, b3.10.103{.versions}

## Ajustes
- Adicionada configuração para gerar as tags < CNPJReceb > e < idTermPag > no XML. Caso marcado e o documento fiscal possuir um pagamento eletrônico serão geradas as tags para atender a Nota Técnica 2023.004 v.1.11. 
- Ajustadas tags para pagamentos utilizando PIX estático e dinâmico.

# 26/06/2024
b3.10.101, b3.10.102{.versions}

## Ajustes
- Ajustado erro ao editar uma regra de tributação com produtos vinculados excluídos.
- Ajustada falha na importação de XML de compra que foi lançado, apagado e teve os produtos da nota excluídos do sistema.

# 24/06/2024
f2.11.46, b3.10.100, p1.0.5{.versions}

## Novidades
- Adicionada tela cheia no PDV Híbrido.
- Ajustado para que a opção tabela de preços seja exibida no cadastro do cliente sem que o módulo financeiro esteja ativo.

# 22/06/2024
f2.11.45, b3.10.99{.versions}

## Novidades
- Criado relatório de balancete com centro de custo analítico.
- Adicionada nova aba no histórico de pessoas para apresentar os orçamentos dos clientes.
- Adicionado nos detalhes dos produtos os dados dos últimos fornecedores além da listagem de fornecedores de que o produto já foi comprado.

## Ajustes
- Ajustado erro na geração do Sintegra no registro 75.
- Adicionado filtro para não incluir devoluções no relatório de Contas a Receber.
- Ajustado o campo informações adicionais do CT-e que ao salvar e editar não mostravam as informações.
- Ajustada na importação de bases a importação dos veículos.
- Ajustado número de casas decimais para peso líquido e bruto dos produtos.

# 20/06/2024
p1.0.4{.versions}

## Ajustes
- Ajustada a impressão da pré-venda que estava gerando o pagamento sempre em dinheiro.
- Ajustada abertura do PDV Híbrido sem internet que não estava permitindo fazer vendas.

# 19/06/2024
f2.11.45{.versions}

## Ajustes
- Ajustada impressão de recibo nas receitas.

# 18/06/2024
f2.11.43, f2.11.44, b3.10.96, p1.0.3{.versions}

## Novidades
- Criada configuração para impressão de documentos diretamente na impressora padrão no PDV Híbrido.
- Adicionada opção para finalizar manualmente pagamentos pelo ZPOS no PDV Híbrido.
- Adicionada opção para visualizar/baixar o XML de cancelamento do MDF-e e CT-e.
- Adicionado em Configuração local -> Impressão direta -> lista de escolha da impressora para impressão direta.
- Adicionado em Configuração local -> Fator de zoom do sistema -> Opção para ajustar o zoom do sistema.
- Adicionado em Configurações do PDV -> Configuração de impressão -> Opções para definir largura, tamanho da margem e espaçamento final.

## Ajustes
- Ajustado nos detalhes de movimentação do produto a movimentação de pedidos de venda duplicados.
- Ajustado cálculo do ICMS ST ao remover o MVA e alíquotas de ST.
- Ajustadas datas do relatório de Movimentação Financeira no formato CSV.
- Ajustado no recebimento de receitas com pagamento integrado o cancelamento do recebimento de valores. Agora o sistema exibirá uma mensagem informando sobre o pagamento integrado e a impossibilidade de revertê-lo.
- Ajustada rejeição 340 na emissão de NF-e de exportação.
- Ajustado o campo número no endereço do cadastro do cliente quando cadastrado por dispositivos móveis.
- Movido para Configuração local -> Ambiente do PDV Offline -> Opções de configuração de contingência local.
- Corrigido busca da hash para definir ambiente local, hash que define a máquina que está rodando o PDV.
- Corrigido cálculo do ICMS ST e BC ICMS ST que ao alterar o MVA não calculava automaticamente os valores.
- Ajustada falha na geração do SPED.

# 13/06/2024
f2.11.42, b3.10.95{.versions}

## Ajustes
- Liberado o lançamento de mais de um serviço na NFS-e em Serra/ES.

# 11/06/2024
b3.10.93, b3.10.94{.versions}

## Ajustes
- Ajustado no cadastro de pessoas o atributo transportador que não estava gravando os dados do RNTRC e Tipo do proprietário.
- Ajustado erro na sincronização do GPED.

# 08/06/2024
f2.11.41, b3.10.92{.versions}

## Novidades
- Ajustada a quantidade de casas decimais no preço do produto para 10.
- Adicionada configuração para impressão do documento de venda no POS NF-e em MT.
- Criada opção para desativar/ativar contas financeiras não permitindo que sejam excluídas se possuem movimentação.
- Adicionada nova permissão nas receitas/despesas para que o usuário possa ver apenas as suas receitas/despesas ou a de todos.

## Ajustes
- Ajustado o envio de XML do mês que retornava erro na geração do arquivo.
- Ajustado botão de ver registro no histórico de movimentação do produto.
- Ajustado o envio de XML do mês que não gerava o arquivo quando selecionado um documento sem movimentação no período.
- Ajustada a forma de pagamento da NFS-e para apresentar as opções para lançamento dos dados financeiros.
- Corrigida venda de produtos com número de série na pré-venda.
- Ajustado na importação de bases a inclusão de alguns campos no cadastro da transportadora.
- Ajustada visualização de parcelas devolvidas no widget de receitas do dashboard.
- Ajustada descrição dos produtos no XML quando os produtos possuem nomes com caracteres especiais.
- Ajustada justificativa de cancelamento na impressão do documento de cancelamento.
- Ajustados problemas na importação e reversão de bases.
- Ajustado o cadastro de novos produtos com o mesmo código de barras de outro produto já excluído do sistema.
- Ajustada a edição de XML de compra quando o produto possui fator de conversão para não alterar o valor unitário do produto.
- Ajustado no lançamento de compras na guia “alterar produtos” a gravação de alguns campos que não eram salvos quando alterados


# 03/06/2024
f2.11.40, b3.10.90, b3.10.91, p1.0.2{.versions}

## Novidades
- Ao pressionar a tecla ALT no teclado o sistema apresenta um botão que abre os logs do PDV Híbrido.
- Ao pressionar a tecla ALT no teclado o botão de "Sincronizar novamente" todos os dados do PDV Híbrido.
- Ao pressionar a tecla ALT no teclado é apresentada a versão do PDV Híbrido.
- Adicionada visualização do download da atualização, no topo da tela, em laranja, com o percentual do download.
- Adicionada mensagem solicitando uma ação ao fechar o sistema.
- Criado o autoupdate do PDV Híbrido.

## Ajustes
- Corrigida falha na atualização do número do próximo RPS.

# 31/05/2024
b3.10.89{.versions}

## Ajustes
- Ajustada falha ao salvar as configurações da NFS-e que também estavam gerando erros nas alterações do emitente.

# 28/05/2024
f2.11.39, b3.10.86, b3.10.87, b3.10.88{.versions}

## Ajustes
- Ajustado vínculos dos produtos/clientes que foram removidos do sistema.
- Incluída mensagem de aviso na exclusão de um cadastro de pessoa que está vinculado a um veículo.
- Ajustado no cadastro de produtos e pessoas a inatividade dos cadastros ao invés da exclusão dos mesmos.

# 21/05/2024
f2.11.38, b3.10.85{.versions}

## Novidades
- Lançamento do PDV Híbrido no Gweb 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/movimentos/pdv#pdv-offline).

## Ajustes
- Bloqueada a exclusão do cadastro da pessoa do emitente.

# 16/05/2024
b3.10.84{.versions}

## Ajustes
- Ajustada configuração de RPS na NFS-e.

# 15/05/2024
b3.10.83{.versions}

## Ajustes
- Ajustada na CST 61 a tag < qBCMono > do total do monofásico.

# 14/05/2024
b3.10.82{.versions}

## Ajustes
- Ajustado na geração do XML do mês para que sejam enviados no caso de cancelamento de um documento, tanto o autorizado quanto o cancelamento.

# 11/05/2024
f2.11.37, b3.10.80, b3.10.81{.versions}

## Novidades
- Criado dois novos campos nas configurações da NFS-e: regime de recolhimento e forma de recolhimento.
- Criado campo para informar a alteração de tomador em um CT-e substituto.
- Inclusa a possibilidade de emissão de NFC-e quando houver pagamento integrado na pré-venda.
- Adicionadas as integrações Cielo e Rede.

## Ajustes
- Ajustado valor líquido do produto no registro 54 do Sintegra.
- Verificada a alteração de informações em massa em grades já existentes.
- Ajustada na importação de XML de compra o campo quantidade para não permitir alterações.
- Ajustado ICMS desonerado nas compras do Sintegra.
- Ajustada impressão do campo de informações adicionais para a cidade de Rio Verde/GO.
- Ajustada impressão da NFC-e para produtos com descrição muito grande.
- Ajustada impressão da NFC-e que apresentava baixa qualidade na descrição dos produtos.
- Ajustado erro na geração do SPED quando um meio de pagamento já utilizado era excluído.
- Ajustado na tela de detalhes de produtos a visualização da unidade tributável e unidade de entrada.
- Corrigida tributação de devolução para notas vindas do módulo de compras.
- Corrigida duplicidade de registros no relatório de NFC-e, NF-e (Resumo).
- Ajustada configuração de RPS que estava voltando para "1" ao salvar dados do emitente e ao deslogar e logar novamente no sistema.
- Ajustada venda com o ZPOS ao informar um CNPJ não cadastrado no sistema.
- Ajustado na emissão de NF-e o campo valor de BC apresentado no XML.
- Ajustado para que os módulos de orçamento e pedidos de venda não apresentem formas de pagamentos com dispositivo integrado.
- Corrigida pesquisa por código de serviço durante a emissão da NFS-e.
- Adicionado contador de caracteres nos dados da seguradora dentro do MDF-e que apresentava falha de validação.
- Ajustado registro D na geração do SPED para informar os dados do CT-e de entrada.
- Bloqueado os campos de número, modelo, série, emissão e chave de acesso na edição de compras lançadas através de XML.
- Ajustada visualização do fator de conversão nos detalhes dos produtos no módulo de compras.
- Ajustado para que caso não haja retorno do ZPOS as informações da transação possam ser inseridas manualmente.

# 10/05/2024
b3.10.79{.versions}

## Ajustes
- Ajustada alíquota da UF de destino do DF para gerar a alíquota correta no cálculo da DIFAL.

# 08/05/2024
b3.10.78 {.versions}

## Ajustes
- Ajustado no CT-e o campo valor de carga para que aceite o valor "0" (zero).

# 26/04/2024
b3.10.77 {.versions}

## Ajustes
- Ajustada emissão de CT-e em contingência.

# 25/04/2024
p1.0.0, b3.10.71, b3.10.72, b3.10.73, b3.10.74, b3.10.75, b3.10.76
{.versions}

## Novidades
- Adicionado processo de sincronização dos dados com PDV Híbrido.

## Ajustes
- Ajustado erro ao salvar as preferências do usuário.
- Ajustado erro ao fazer download de NF-e no MD-e.
- Ajustado erro na sincronização do PDV Híbrido.

# 20/04/2024
f2.11.36, b3.10.68, b3.10.69 {.versions}

## Novidades
- Implementada alíquota Funrural e valor Funrural.

## Ajustes
- Ajustada emissão de NF-e com aliquota do Simples Nacional que não estava sendo destacada.

# 19/04/2024
b3.10.67 {.versions}

## Ajustes
- Ajustado erro na exportação de dados do sistema.

# 16/04/2024
f2.11.35, b3.10.63 {.versions}

## Ajustes
- Ajustado o campo quantidade no cadastro de produtos com grade.
- Ajustado relatório de "Comissões por vendedor" para considerar os serviços.
- Ajustado FCP ST que estava sendo subtraído do total da nota no registro 50 do Sintegra.
- Ajustado campos da propriedade da grade que ao editar estavam aparecendo em branco.

# 09/04/2024
b3.10.62 {.versions}

## Ajustes
- Ajustado o registro 74 (Inventário) do Sintegra.

# 06/04/2024
f2.11.35, b3.10.60, b3.10.61 {.versions}

## Ajustes
- Ajustado cálculo automático do preço de custo quando informado o fator de conversão.
- Ajustado o registro 74 (Inventário) do Sintegra.

# 05/04/2024
f2.11.34 {.versions}

## Ajustes
- Ajustado erro na UF ao salvar/editar produtos na NFC-e.

# 03/04/2024
f2.11.33, b3.10.59 {.versions}

## Ajustes
- Ajustado problemas no pagamento por integração no PDV.
- Corrigido na importação do XML de compra o campo UF que ao emitir um CT-e não estava carregando.

# 02/04/2024
f2.11.32, b3.10.56, b3.10.57, b3.10.58 {.versions}

## Ajustes
- Ajustada duplicidade de NF-e que não estava carregando os dados corretamente.
- Ajustado pagamento parcial de despesas.
- Corrigido arquivo do SPED que apresentava dados de meses anteriores.

# 01/04/2024
f2.11.31, b3.10.53, b3.10.54, b3.10.55 {.versions}

## Novidades
- Acionada a integração do ZPOS na emissão de NF-e para clientes do MT.

## Ajustes
- Ajustado botão de pagamentos por integração que não estava exibindo pagamentos em forma de PIX.
- Corrigida duplicidade na emissão de NFC-e ao marcar a configuração para emitir NFC-e no recebimento de parcelas.

# 27/03/2024
b3.10.52 {.versions}

## Ajustes
- Corrigido problema no recebimento de parcelas em dinheiro ao marcar a configuração para emitir NFC-e no recebimento de parcelas.

# 26/03/2024
f2.11.30 {.versions}

## Ajustes
- Ajustado edição de NF-e para alteração do PIS e COFINS.

# 25/03/2024
f2.11.28, f2.11.29 {.versions}

## Ajustes
- Ajustada falha na digitação da quantidade na emissão da NFC-e.
- Ajustado pedido de venda que estava gerando NF-e automaticamente.

# 23/03/2024
f2.11.27, b3.10.51 {.versions}

## Novidades
- Lançamento do recebimento de parcelas pelo PDV.
- Criado novo relatório NF-e, NFC-e (resumo).
- Adicionado ao arquivo do XML do mês o item “compras”.
- Adicionado no cadastro do produto os campos “peso bruto dos produtos” e “peso líquido dos produtos” para que sejam informados na NF-e automaticamente.
- Criado novo campo no lançamento de compras por XML para alterar o preço de venda dos produtos.

## Ajustes
- Ajustado fator de conversão para unidade tributável em produtos com CST 02, desta forma o valor é inserido automaticamente na nota ao inserir o produto.
- Ajustado valor do registro C190 do SPED que não estava sendo gerado quando na nota existe desconto.
- Corrigido pedido de venda com serviço e vendedor informado que apresentava erro.
- Corrigido bug no botão salvar NFC-e/pré-venda ao informar um pagamento a prazo.
- Ajustado relatório de “Orçamentos (simplificado)” que apresentava falha na geração.
- Ajustada mensagem de cancelamento de pedidos de venda.
- Ajustado erro ortográfico no DACT-e do CT-e.
- Ajustado texto da flag do total ICMS desonerado.

# 18/03/2024
b3.10.42, b3.10.43, b3.10.44, b3.10.45, b3.10.46, b3.10.47, b3.10.48, b3.10.49, b3.10.50 {.versions}

## Ajustes
- Otimizado o armazenamento de XMLs de documentos fiscais.

# 16/03/2024
f2.11.26 {.versions}

## Ajustes
- Ajustado alíquota de FCP para exibir os dados informados na regra tributária.
- Ajustada tributação de FCP para não manter os dados ao informar uma CST que não deve tributar esses valores. 

# 11/03/2024
b3.10.41{.versions}

## Ajustes
- Ajustado inventário gerado no arquivo do Sintegra que apresentava erro na validação.

# 06/03/2024
f2.11.25, b3.10.38, b3.10.39{.versions}

## Ajustes
- Ajustada falha na importação de XML de compra.
- Ajustada falha ao abrir os detalhes do CT-e.

# 27/02/2024
f2.11.23, f2.11.24, b3.10.37{.versions}

## Ajustes
- Ajustado CST do CT-e para clientes dos Simples Nacional.
- Ajustado fator de conversão do cadastro de produtos para aceitar números fracionados.

# 24/02/2024
f2.11.22, b3.10.36{.versions}

## Novidades
- Adicionada nova opção no relatório “Listagem de pessoas”, agora é possível selecionar o modelo de impressão do relatório.
- Possibilitada a cobrança no ZPOS com Banricompras a vista e parcelado.
- Criada configuração para descontar o valor de ICMS da base do PIS e COFINS para documentos de saída.

## Ajustes
- Ajustado relatório de “Produtos vendidos por categoria” para apresentar o custo correto das vendas.
- Ajustado duplicidade de pré-vendas finalizadas no atalho F3 ao pressionar a tecla várias vezes.
- Ajustada divergência de valores no relatório “Produtos vendidos por vendedor”.
- Ajustada criação de conta financeira com valor previamente informado para apresentar os valores correspondentes no relatório de “Fluxo de caixa” e “Movimentação Financeira”.
- Corrigida a visualização da quantidade de itens dos produtos com grade no cadastro de produtos.
- Ajustado no CT-e para clientes do Simples Nacional o campo para seleção do CST.
- Ajustado relatório de “Margem de lucro sobre preço de venda” para apresentar a movimentação de estoque configurada no pedido de venda que posteriormente gera uma pré-venda.
- Ajustado o campo “UF” nos documentos de transporte anterior do CT-e para que seja obrigatório.
- Ajustado download do arquivo Sintegra para o formato .txt.
- Ajustado número de série da NFC-e para o Sintegra no registro 61.
- Ajustado relatório de “Total de produtos vendidos por cliente” para apresentar as pré-vendas que movimentaram estoque e financeiro.
- Ajustado o campo CST/CSOSN para mudar automaticamente conforme a conforme selecionada (ou não) a opção “consumidor final”.
- Ajustada vendas a prazo que ao fazer um processo específico estava saindo sem cliente informado.
- Ajustado no orçamento e pedido de venda quando informado um pagamento a prazo, serem apresentados somente planos de contas de saída.
- Alterado relatório de contas a receber e contas a pagar para apresentar o plano de contas e centro de custos.
- Ajustado registros E100 e E110 do SPED para os meses onde há movimentação.

# 03/02/2024
f2.11.21, b3.10.34{.versions}

## Novidades
- Criada configuração para transacionar cartões Banricompras.
- Adicionado campo para informações adicionais nas configurações do CT-e e MDF-e.

## Ajustes
- Ajustada nota de importação que não estava carregando as configurações de IPI ao editar a NF-e.
- Ajustado campo quantidade de itens na impressão do pedido de venda.
- Ajustado erro na emissão de CT-e com valor de crédito outorgado/presumido.
- Corrigido erro ao cadastrar veículos no cadastro de emitente.
- Ajustado botão + no menu dispositivos para que abra o formulário de cadastro.
- Ajustado lançamento de item com CST 02 para informar automaticamente a quantidade tributável configurada no produto.
- Corrigida importação de pedido que passou pela pré-venda e gerou uma NFC-e e não estava realizando o cancelamento do pedido ao cancelar a NFC-e.
- Corrigido no histórico do cliente o valor restante das parcelas devolvidas.
- Corrigida lista de perfis de permissão para não duplicar itens.
- Ajustado pedido de venda para gerar comissão aos vendedores.
- Ajustada impressão de CT-e que quando informado outros tipos de documentos transportados.
- Ajustado geração do Sintegra no registro 70 para clientes sem o módulo CT-e habilitado.
- Ajustada versão do Leiaute para arquivos do SPED de 2023.

# 24/01/2024
f2.11.19{.versions}

## Ajustes
- Ajustado erro de TimeOut na geração de relatórios em PDF  em clientes que possuem muitos dados.

# 23/01/2024
f2.11.17, f2.11.18, b3.10.31, b3.10.32{.versions}

## Ajustes
- Ajustado erro ao salvar NFC-e com pagamento em cartão informando manualmente a bandeira e NSU.

# 20/01/2024
f2.11.16, b3.10.28, b3.10.29{.versions}

## Novidades
- Inclusão do campo referência no relatório de Inventário.
- Inclusão do campo “Desconto sobre o total” para pedidos e orçamentos.
- Padronizada precisão numérica para 2 cadas decimais após a vírgula para novas bases.
- Inclusão do campo “número do pedido de compra” na NF-e.
- Liberada a emissão de NFC-e para o estado de SC.

## Ajustes
- Ajustado relatório de Movimentações Financeiras.
- Ajustado fator de conversão na compra para respeitar a configuração feita no cadastro do produto.
- Ajustado registro 54 do Sintegra no item 999 que estava gerando dados desnecessários.
- Ajustado registro 54 do Sintegra para notas no modelo 22.
- Permitida emissão de notas com série 0 (zero).
- Ajustadas permissões do pedido de venda para respeitar a configuração.
- Revisado layout da impressão do pedido de venda.
- Ajustada impressão do comprovante de pré-venda.
- Ajustado parcelamento no cartão integrado para permitir outro meio de pagamento não integrado.

# 17/01/2024
f2.11.15{.versions}

## Ajustes
- Exibida mensagem com link para o portal do GdoorPay nas integrações.

# 13/01/2024
f2.11.14, b3.10.27{.versions}

## Novidades
- Integração de pagamentos com a Vero, Stone e PagSeguro 🎉. Conheça mais sobre esta funcionalidade no Gweb [clicando aqui](/tutoriais/zpos).

## Ajustes
- Alterado para 15,4 o tamanho do campo valor unitário em notas de compra e venda.
- Ajustada a devolução de compra para que seja exibida no Sintegra.
- Criada uma nova coluna Relatório de Contas a Receber para exibir a data de pagamento das receitas.
- Ajustado registro C113 do SPED referente a devolução de compras.
- Corrigida falha no Relatório de Inventário em produtos com grade e código de barras cadastrado.
- Ajustada falha na configuração da operação padrão para NFS-e.
- Ajustado formato do telefone para migrações vindas do Gpro.
- Corrigido no total das notas de compra o valor do desconto que não estava sendo apresentado.
- Corrigida falha ao acessar as configurações do PDV após excluir contas do financeiro.
- Possibilitado o preenchimento do valor total de IPI para a CST 99 - Outras saídas.
- Corrigido erro na importação de bases onde os serviços não possuem descrição.
- Corrigida edição de NFC-e que alterava o CSOSN dos produtos.
- Corrigida falha na geração do Relatório de documentos emitidos.
- Ajustado o estorno de despesas/receitas recebidas durante a edição das mesmas.

# 04/01/2024
f2.11.13, b3.10.26{.versions}

## Ajustes
- Adicionada nova unidade de medida tributável no cadastro de produto: Litro (L).
---
# 2023 {.year}

Foram implementados:
- Novidades: 75
- Ajustes: 329

**Total: 404**

--- 

ir para [2022](#h-2022) {.goto}

ir para [2021](#h-2021) {.goto}

---
# 20/12/2023
b3.10.24, b3.10.25{.versions}

## Ajustes
- Ajustado pedido de venda que não estava verificando o tipo de pagamento ao realizar pedidos com crédito em loja.
- Ajustado estorno de receitas/despesas quando criadas como pagas/recebidas.

# 19/12/2023
b3.10.23{.versions}

## Ajustes
- Corrigida falha na geração da listagem de receitas.

# 18/12/2023
f2.11.12, b3.10.22{.versions}

## Ajustes
- Ajustado o pagamento "Crédito em loja" controlado pelo sistema para que seja utilizado somente quando a referência do pagamento for "crédito em loja" e "tipo a vista".


# 16/12/2023
f2.11.11, b3.10.21{.versions}

## Ajustes
- Corrigido layout DACT-e em CT-e com mais 26 documentos referenciados.
- Corrigido erro no registro 50 referente a notas de compra no arquivo do Sintegra.
- Ajustado serial na troca de empresas para que seja apresentado corretamente.

# 09/12/2023
f2.11.10, b3.10.20{.versions}

## Novidades
- Inclusa a opção do MDF-e na geração do XML do mês.
- Criada nas configurações da NFS-e o campo de Regime Tributário para clientes do Simples Nacional em que o emitente for de Porto Alegre.

## Ajustes
- Retirada a obrigatoriedade do campo RNTRC do cadastro de pessoas e veículos.
- Ajustado tamanho do campo do código de autorização na NFS-e.

# 06/12/2023
b3.10.19{.versions}

## Ajustes
- Corrige código de serviço na emissão de NFSe em ambiente nacional.

# 06/12/2023
b3.10.18{.versions}

## Ajustes
- Corrige validação de dados da NFSe em ambiente nacional.

# 05/12/2023
b3.10.17{.versions}

## Ajustes
- Adiciona campos para NFSe nacional para cidade de Porto Alegre.

# 03/12/2023
f2.11.9{.versions}

## Ajustes
- Corrigido o comportamento do pedido de venda com a configuração de "Não informar pagamentos".

# 02/12/2023
f2.11.8, b3.10.16{.versions}

## Novidades
- Adicionada uma nova opção para "Não informar pagamentos" nas configurações do pedido de venda.
- Implementação da NFS-e no ambiente nacional. 🎉

## Ajustes
- Ajustado o relatório de "Total de produtos vendidos por cliente" para não considerar compras.
- Adicionado os campos referentes a exportação na nota de complemento.
- Ajustado o somatórios dos campos no histórico do cliente.
- Adicionado o código de barras no relatório do inventário de estoque.
- Ajustado o comportamento do sistema ao remover o vínculo de um item durante a importação de XML.
- Corrigido o histórico do produto para exibir as movimentações realizadas por pedidos.
- Ajustada a visualização da lista de aniversariantes no modo escuro.
- Adicionado nas informações adicionais da NF-e o valor de IPI devolvido.
- Ajustado o horário apresentado na mensagem da manifestação do destinatário.
- Ajustada a composição de custo na nota de compra.

# 27/11/2023
f2.11.7, b3.10.15 {.versions}

## Ajustes
- Ajustado para que o pedido de venda que movimente estoque respeite a configuração de estoque negativo.

# 23/11/2023
f2.11.6, b3.10.14 {.versions}

## Ajustes
- Ajustado cancelamento de NF-e para não solicitar o cancelamento do pedido de venda quando não houver.
- Ajustada sincronização dos pedidos no Gped.

# 21/11/2023
f2.11.5, b3.10.11, b3.10.12, b3.10.13 {.versions}

## Ajustes
- Ajustado estorno das movimentações financeiras.
- Inclusão da ANP 650101003 no sistema.
- Ajustado pedido de venda para estornar o estoque depois de cancelado o pedido, NF-e, NFC-e PV.
- Adicionada nova unidade de medida no cadastro de produto: Cabeça de Gado (CB).

# 20/11/2023
b3.10.10, f2.11.4 {.versions}

## Novidades
- Adicionadas novas funcionalidades ao pedido de venda: geração de dados financeiros e baixa no estoque de produtos 🎉.

# 18/11/2023
b3.10.9, f2.11.3 {.versions}

## Novidades
- Criada configuração para definir a operação padrão para a NFS-e.

## Ajustes
- Ajustado no cadastro do veículo o campo “RNTRC” para que seja obrigatório.
- Ajustado filtro de ordenação no MD-e.
- Otimizada mensagem de cancelamento de uma NF-e quando houver documentos vinculados.
- Corrigida divergência no gráfico e relatório de documentos fiscais emitidos.
- Ajustados filtros das receitas e despesas do Dashboard para incluir a data atual no gráfico.

# 13/11/2023
b3.10.8 {.versions}

## Ajustes
- Ajustado fator de conversão dos produtos na compra para gravar o relacionamento do produto com o fornecedor, caso não houver, será buscado diretamente da unidade de medida do produto.

# 03/11/2023
b3.10.7 {.versions}

## Ajustes
- Ajustada fila de envios de NFC-es em segundo plano.

# 31/10/2023
f2.11.2, b3.10.6 {.versions}

## Novidades
- Adicionada CST 61 e 02 para clientes do Simples Nacional.

## Ajustes
- Ajustado XML do mês para gerar pela data de emissão da NF-e.

# 30/10/2023
b3.10.4, b3.10.5 {.versions}

## Ajustes
- Corrigida falha ao abrir o cadastros de operações.
- Ajustado erro ao salvar nota de compra lançada por XML.

# 28/10/2023
f2.11.1, b3.10.3 {.versions}

## Novidades
- Criada uma nova coluna no relatório de Contas a Pagar, agora será possível ver o número da nota, modelo e série.
- Inseridas duas novas instituições de pagamento: CloudWalk e SumUp.
- Inserido no DAMDF-e o campo Seguradora.
- Criada permissão para vendas que excedem o limite de crédito.

## Ajustes
- Ajustado no arquivo XML do mês a geração das notas inutilizadas na NFC-e.
- Ajustada descrição do produto ao desvincular o produto na nota de compra.
- Ajustado o relatório de Margem de Lucro sobre Preço de Venda que estava apresentando divergências nos campos de lucro bruto e margem.
- Ajustada falha na consulta da NFS-e no município de Vitória/ES.
- Ajustado o fator de conversão nas notas de compra e no cadastro do produto para não aceitar valores abaixo de 1.
- Ajustados os níveis e subníveis do relatório de Plano de Contas para exportação do arquivo em CSV.
- Ajustado relatório de Inventário de Estoque no modelo “para impressão” que quando salvo em CSV ficava desconfigurado.
- Corrigida a gravação dos dados na configuração do e-mail padrão no MDF-e.
- Ajustada nas configurações do MD-e o NSU zero.
- Ajustado botão de remover vínculos do produto no lançamento de um XML de compra.
- Corrigido o número de série em vendas originárias de pedidos de venda.
- Ajustado número de série que estava duplicando ao ser excluído e na sequência incluso novamente.
- Ajustado filtros do relatório de Auditoria.
- Ajustado botão “Prosseguir” em vendas feitas por usuários que não tem perfil de administrador.
- Ajustada mensagem de limite de crédito excedido que estava sendo exibida para todas as formas de pagamento.

# 16/10/2023
b3.10.2 {.versions}

## Ajustes
- Corrigida falha ao gerar o Sped em alguns clientes.

# 10/10/2023
b3.10.1 {.versions}

## Ajustes
- Ajustada notificação de aniversariantes.

# 07/10/2023
f2.11.0, b3.10.0 {.versions}

## Novidades
- Lançamento do Dashboard no Gweb 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/dashboard).

# 02/10/2023
b3.9.78 {.versions}

## Ajustes
- Ajustada falha na geração do XML do mês.

# 30/09/2023
f2.10.37, b3.9.77 {.versions}

## Novidades
- Adicionada a opção “Não informar pagamentos” nas configurações da NF-e.
- Unificado o envio do XML do mês para os módulos de NF-e, NFC-e, CT-e e NFS-e.
- Adicionado ao DACT-e a unidade de medida Litros.
- Adicionada opção para somar o valor de ICMS no total de uma nota de compra através da importação de XML.
- Criada configuração para impressão de MD-e na compra.
- Incluso na compra um campo para informar a chave do documento de entrada.
- Adicionado filtro de múltipla escolha no relatório de Plano de Contas para o centro de custos e plano de contas.

## Ajustes
- Ajustados os filtros do cadastro de produtos.
- Corrigido o estorno de pagamentos para apresentar o valor atualizado no relatório de Fluxo de Caixa.
- Ajustado criação de contas financeiras com valor para apresentar os valores correspondentes no relatório de Fluxo de Caixa.
- Corrigida NF-e de devolução com produtos que contenham número de série.
- Ajustado falhas no estorno de parcelas que haviam sido recebidas parcialmente.
- Corrigida permissão de cancelamento de CT-e para que outros perfis de usuários também possa efetuar o cancelamento.
- Revisado filtros do relatório de Total de Vendas por meio de Pagamento.
- Ajustado na geração do Sintegra o registro de notas de complemento e notas de ajuste.
- Ajustado campo série da NFS-e para aceitar letras e números.
- Ajustada edição de produtos com ANP para apresentar os campos correspondentes.
- Corrigida falha na geração de CT-es sem destinatário.
- Corrigido cálculo do FCP ST.
- Alterada forma de tratamento do campo logradouro no envio da NFS-e.
- Ajustada falha na edição das propriedades da grade em produtos com grade.
- Ajustada forma de pagamento para que seja atualizada automaticamente no PDV.
- Ajustada pré-vendas para respeitar as configurações de Movimentar estoque e Gerar financeiro mesmo depois de gerada a PV.
- Corrigida mensagem de erro ao editar perfil do usuário.
- Ajustada geração de XML de notas inutilizadas.
- Ajustada na nota de importação a geração das tags referentes ao IPI.
- Ajustada na NF-e a venda de produtos com número de série para que ao duplicar não permita a venda do produto com o mesmo número de série da nota original.
- Ajustada geração do registro 70 do Sintegra referente ao CT-e de entrada.
- Ajustada falha ao consultar o MD-e quando o módulo de NF-e não está habilitado.
- Ajustadas configurações de desoneração ao editar uma nota.

# 20/09/2023
f2.10.36, b3.9.76 {.versions}

## Ajustes
- Adicionada nova unidade de medida: Comprimido (CPR).

# 19/09/2023
b3.9.75 {.versions}

## Ajustes
- Ajustada falha na geração do Sintegra ao marcar a opção Inventário.

# 14/09/2023
b3.9.73 {.versions}

## Ajustes
- Ajustada tag na emissão do CT-e para respeitar o valor da carga informada.

# 13/09/2023
f2.10.35, b3.9.69, b3.9.70, b3.9.71 b3.9.72 {.versions}

## Ajustes
- Atualização do CT-e 4.0
- Ajustada emissão de CT-e para pessoa física com RG informado.
- Implementação de 3 casas decimais no peso bruto e líquido do transporte.
- Ajustado valor das despesas acessórioas no registro 54 do Sintegra.
- Retirado o campo CST de escrituração da NF-e/NFC-e.

# 12/09/2023
f2.10.34, b3.9.68 {.versions}

## Ajustes
- Alterada sigla da unidade de medida Quilate, a partir de agora no DANF-e passa ser Quilate e não mais K.

# 08/09/2023
f2.10.33, b3.9.67 {.versions}

## Novidades
- Adicionada a coluna Data de Envio no relatório de CT-e emitidos.
- Adicionadas as colunas NCM, CEST e PIS/COFINS no relatório de Produtos vendidos por tipo de imposto.

## Ajustes
- Ajustado produtos com grade que estavam gerando quantidades diferentes após serem inseridos novas colunas e linhas a grade.
- Ajustado produtos com grade que não faziam a marcação correta ao selecionar o item na grade.
- Ajustada quebra de linha da mensagem promocional no PDV.
- Otimizado o processo de gravação do certificado digital.
- Ajustado na geração do Sintegra o valor do IPI e ICMS Desonerado que não estavam sendo gerados corretamente.
- Ajustada falha ao habilitar Gped para clientes que possuem nome com caracteres especiais.
- Ajustado na geração do Sintegra o Registro 50 para que passe a somar o valor do ICMS ST no valor total.
- Ajustado na geração do SPED o Registro C100 para desconsiderar notas inutilizadas.
- Ajustada mensagem no MDF-e para solicitar os dados de preenchimento obrigatório informando qual registro precisa ser verificado.
- Corrigido na emissão do CT-e a data de envio para que seja respeitada a data informada.
- Ajustada a importação de XML de compra para manter os valores da redução de base de cálculo de ICMS/ICMS ST mesmo depois de editar o produto.
- Ajustada mensagem no MDF-e quando não informado o reboque no modal rodoviário.
- Ajustada mensagem de aviso ao criar ou editar um usuário.
- Reorganizada nas configurações do PDV a opção de impressão do comprovante ao concluir a pré-venda.
- Ajustada na criação de novas bases a operação de Devolução para que siga o padrão CSOSN 900.
- Ajustada a visualização da quantidade nos detalhes do produto para produtos com mais de uma categoria adicionada.
- Corrigida a Alíquota de ICMS na nota de complemento para que respeite o que for informado no campo.
- Ajustado relatório de Contas a receber e a pagar para ordenar os dados também pela data de pagamento.

# 01/09/2023
b3.9.66 {.versions}

## Ajustes
- Ajustada falha na geração dos registros 0150 e C113 do SPED.

# 31/08/2023
f2.10.32, b3.9.65 {.versions}

## Novidades
- Adicionada a unidade de medida "Metro Estéreo" ao cadastro de produtos.

# 30/08/2023
b3.9.64 {.versions}

## Ajustes
- Ajustada inscrição do SUFRAMA para que a tag correspondente seja criada no XML.

# 22/08/2023
f2.10.31 {.versions}

## Ajustes
- Ajustado o campo UF de percurso do MDF-e para permitir a inclusão do mesmo UF mais de uma vez.

# 16/08/2023
f2.10.29, f2.10.30, b3.9.60 {.versions}

## Ajustes
- Corrigido envio do certificado digital para emissão de NFS-e.
- Ajustada falha na importação de XML de compra ao informar o CFOP nos tributos.

# 12/08/2023
f2.10.28, b3.9.59 {.versions}

## Novidades
- Centralizado dentro das Configurações Gerais a inserção do Certificado Digital.
- Criado novos campos para abranger a nova forma de tributação monofásica sobre combustíveis.
- Criadas permissões de acesso para os Arquivos Fiscais.

## Ajustes
- Ajustada exibição das informações adicionais do produto que são inseridas dentro da pré-venda de acordo com a configuração aplicada.
- Ajustada a geração de NFC-e a partir de uma pré-venda para fora do estado.
- Corrigida a importação de XML de compra com CST 61.
- Ajustado cadastro rápido de pessoas para não permitir documentos repetidos.
- Corrigida falha ao informar o emitente como proprietário de veículos.
- Ajustada soma de valores de ICMS na compra para o Registro E210 do SPED.
- Corrigido campo Cliente de pedidos gerados a partir de um orçamento.
- Otimizado layout da NFC-e.
- Ajustado na importação de XML de compra a alteração do preço dos produtos que não possuem vínculo na base de dados, para que seja aplicado conforme alteração.
- Corrigido no Registro 50 do Sintegra clientes com RG preenchido e estavam gerando dados inválidos.
- Ajustadas compras com séries 890 a 899 na geração do SPED.
- Corrigido no Registro C170 do SPED o CST de IPI para produtos que não tributam IPI.
- Ajustado Bloco K do SPED para produtos que não possuem preço de venda.
- Ajustadas advertências em notas quando o Registro 53 é gerado.
- Corrigida falha ao importar documentos transportados no CT-e.
- Corrigida falha nos valores gerados ao importar um XML com ICMS Desonerado e ICMS ST.
- Ajustado código do participante no Registro C100 do SPED.
- Ajustada geração do Registro C190 no SPED para NF-e Complementar.
- Corrigida a geração dos Registros C do SPED para NF-es Canceladas.

# 09/08/2023
b3.9.58 {.versions}

## Ajustes
- Ajustada nota de devolução para que não altere a margem de lucro do produto.

# 28/07/2023
f2.10.27, b3.9.57 {.versions}

## Ajustes
- Ajustada a apresentação dos descontos dos itens na impressão da pré-venda.
- Incluído na NF-e Complementar os campos xPed e nItemPed.
- Corrigido cálculo do preço de custo ao importar nota de compra que possui produto com preço R$ 0,00 (zero).

# 26/07/2023
b3.9.56 {.versions}

## Ajustes
- Corrigido erro na geração de CTe com CFOP 5359.

# 24/07/2023
b3.9.55 {.versions}

## Ajustes
- Corrigido problema que impedia usuário salvar configurações gerais.

# 22/07/2023
f2.10.26, b3.9.54 {.versions}

## Novidades
- Adicionada configuração para notificar a quantidade insuficiente do estoque já ao adicionar o item na NF-e e PDV.
- Adicionados filtros à listagem dos produtos no cadastro de produtos.
- Incluída nova mensagem de alerta no Perfil do Usuário, referente às alterações. Deixando mais claro que estas alterações afetam todas as contas em que o usuário está incluído.
- Bloqueada a edição do endereço de e-mail pelo Perfil do Usuário, esta estava causando efeitos indesejados.

## Ajustes
- Corrigida edição de NFS-e que não apresentava a operação utilizada anteriormente.
- Corrigido problema ao salvar um MDF-e com numeração igual a de um outro que havia sido excluído.
- Ajustada exibição de quantidade fracionada ao inserir um produto no PDV
- Ajustado relatório do inventário que duplicava descrições de itens pertencentes a grades.
- Corrigida exibição do relatório de auditoria que estava registrando exclusões de NFC-e como Pré-vendas.
- Ajustado cadastro de pessoas que não estava aplicando alterações em endereços adicionais.

# 19/07/2023
b3.9.53 {.versions}

## Ajustes
- Corrigida situação que duplicava registros financeiros durante emissão da NFC-e que já haviam sido lançados durante a pré-venda.

# 17/07/2023
b3.9.52 {.versions}

## Ajustes
- Ajustadas alíquotas para cálculo do DIFAL no ICMS interestadual.


# 13/07/2023
f2.10.25 {.versions}

## Ajustes
- Removido o intervalo de 30 segundos para consultar uma NFS-e depois de transmitida.


# 07/07/2023
f2.10.24, b3.9.51 {.versions}

## Novidades
- Criada configuração para imprimir automaticamente o comprovante ao concluir uma pré-venda.
- Inclusas duas novas permissões na NFS-e: transmitir e cancelar notas de serviço.
- Criado alerta para importação de XML de compras com produtos sem CFOP.

## Ajustes
- Otimizada a busca de produtos na NFC-e ao informar uma quantidade maior que 1.
- Ajustado Bloco K do SPED para gerar as informações dos produtos corretamente.
- Corrigida opção de "Não informar pagamentos" na NF-e que ao editar não apresentava a opção marcada.
- Ajustado Registro 75 do Sintegra que não estava sendo gerado em algumas movimentações.
- Corrigido na edição da NFC-e/Pré-venda o campo "transportadora" quando o tipo de retirada é entrega domiciliar.

# 05/07/2023
f2.10.23, b3.9.50 {.versions}

## Ajustes
- Ajustado erro ao editar um CT-e com rejeição e que foi emitido em contingência.
- Corrigido e envio de e-mails para CT-es que foram rejeitados.

# 03/07/2023
f2.10.22, b3.9.49 {.versions}

## Ajustes
- Ajustado o módulo de compras para permitir notas lançadas manualmente com série zerada.

# 01/07/2023
f2.10.21, b3.9.49 {.versions}

## Novidades
- Adicionadas novas opções para os documentos transportados no CT-e.
- Criada opção para informar o Código de Benefício Fiscal para o regime Simples Nacional.

## Ajustes
- Ajustado no arquivo do Sintegra o cancelamento de notas que estavam sendo exibidas no registro 54.
- Ajustado o filtro de operações do relatório de Documentos Fiscais Emitidos.
- Ajustado relatório de Pagamentos NFC-e que não estava apresentando todas as formas de pagamento.
- Corrigido o relatório de Pedidos de Venda que não estava apresentando pedidos antigos.
- Criado no relatório de Pedidos de Venda, duas novas colunas “Faturado em” e “N° Fatura” para substituir a coluna “Faturado”, permitindo assim que os dados possam ser filtrados mais facilmente.

# 28/06/2023
f2.10.20, b3.9.48 {.versions}

## Ajustes
- Ajustada transmissão do CT-e que depois de autorizado em alguns clientes não estava atualizando o status.

# 23/06/2023
f2.10.20, b3.9.47 {.versions}

## Ajustes
- Ajustada NF-e de entrada com quantidade zerada que apresentava erro na consulta.

# 23/06/2023
f2.10.20, b3.9.46 {.versions}

## Novidades
- Criada a consulta de produtos por referência e código de barras.

## Ajustes
- Corrigida a importação de XML de compra com produtos de mesmo código de barras, mas com descrição diferente.
- Corrigida a geração do Sintegra que estava considerando a data de emissão na compra e não a data de entrada no registro 50.
- Ajustado no arquivo do Sintegra a ordem dos itens das notas de compra com vários produtos.
- Corrigida a geração de notas de compra manuais no arquivo do Sintegra.
- Ajustado o tamanho do limite dos campos dos dados complementares do informante no arquivo do Sintegra.
- Ajustado no arquivo Sintegra a geração do registro 61.
- Corrigida a geração do registro 50 do Sintegra para cadastros de pessoas que estejam com a IE em branco ou como ISENTO.
- Ajustado no registro 0200 do SPED, o CEST dos produtos que estavam sendo preenchidos com zeros quando o item não tinha esta informação.
- Ajustado no registro C191 do SPED o valor do FCP que não deveria ser gerado para clientes do regime Simples Nacional.

# 20/06/2023
f2.10.20, b3.9.45 {.versions}

## Ajustes
- Corrigido erro ao atualizar o preço de custo em notas de compra de emissão própria.

# 18/06/2023
f2.10.20, b3.9.44 {.versions}

## Novidades
- Incluso nos documentos transportados a opção para informar o código de barras referente a documentos emitidos em Formulário de Segurança no MDF-e.
- Adicionada a pré-visualização dos dados que estão sendo enviados na NFS-e.
- Criada configuração na NFS-e indicando se é para incluir a alíquota de ISS Retido no envio das notas já que algumas cidades exigem o envio desta alíquota junto a alíquota de ISS.

## Ajustes
- Ajustado o custo médio ao importar XML de compra com produtos com fator de conversão.
- Corrigido nas regras de tributação uma falha ao salvar informações com campos vazios. Agora sempre que a regra for salva e houver campos não preenchidos eles serão automaticamente preenchidos com o valor 0 (zero), exceto o CFOP.
- Ajustada a importação de XML de compra para gravar o código ANP dos produtos quando houver.
- Corrigida permissão do PDV que não permitia a edição de vendas próprias (não finalizadas) mesmo estando marcada.
- Ajustada a exibição dos dados de IPI para preenchimento em notas de compras feitas manualmente.
- Ajustado no SPED e Sintegra a IE dos cadastros em geral para que ao gerar esses arquivos sejam enviados os dados sem nenhum tipo de pontuação.
- Ajustada falha na geração do SPED que estavam relacionadas as informações adicionais contendo caracteres especiais.
- Ajustada grade de produtos para exibir no cadastro do produto os dados corretos ao adicionar novas linhas/colunas.
- Ajustado o campo CRC do Emitente que não estava sendo exibido no cadastro depois de salvo.
- Ajustada geração do Sintegra que em alguns clientes estava trazendo os dados do destinatário no Registro 71.

# 05/06/2023
f2.10.19, b3.9.43 {.versions}

## Ajustes
- Ajustado valores de BC ICMS e Alíquota ICMS que ao editar a nota estavam aparecendo em branco.

# 03/06/2023
f2.10.19, b3.9.42 {.versions}

## Novidades
- Criado relatório de “Vendas por CFOP”.
- Criado relatório de “Total de produtos com entrada por Fornecedor”.

## Ajustes
- Ajustada a importação de XMLs com ICMS desonerado para que seja considerado (ou não) no valor total dos produtos.
- Ajustado o cadastro rápido para que sejam exibidos os dados do contador.
- Alterada a CSOSN 101 para 102 na tributação para consumidor final para novos clientes.
- Ajustada a importação de XMLs com base de cálculo de ICMS para que sejam exibidos em seus respectivos campos.
- Ajustado os valores de ICMS ST no registro C100 do Sped.
- Ajustada a geração dos registros E200 e E210 no Sped.
- Ajustada as notas de compras que estavam sendo geradas pela data da emissão e não pela data de entrada no Sped.
- Adicionado botão fechar nos vínculos de regras de tributação.
- Ajustada para que as novas regras de tributação criadas busquem o MVA do estado do destinatário da nota.
- Ajustada a exibição das despesas/receitas em estados com fuso horário diferente de Brasília.
- Otimizada mensagem ao importar documentos transportados no MDF-e.
- Ajustado relatório “Total de vendas por meio de pagamento” para que respeite as datas informadas no filtro.
- Ajustado relatório de “Serviços Prestados” que não estava considerando as NFS-es emitidas.
- Ajustada a visualização/impressão da DANFS-e para alguns municípios.
- Ajustada a geração de MDF-e e CT-e em ambientes diferentes para não gerar conflitos.
- Ajustado relatório de “Inventário de estoque” que estava com erro na data base.
- Adicionado novos campos no relatório de “Listagem de pessoas”.

# 30/05/2023
f2.10.18, b3.9.41 {.versions}

## Ajustes
- Ajustado na geração do Sped as referências de notas que não possuem o vínculo com o documento original.

# 29/05/2023
f2.10.18, b3.9.40 {.versions}

## Ajustes
- Ajustada a geração do Sped quando os documentos possuem notas referenciadas.

# 22/05/2023
f2.10.18, b3.9.38, b3.9.39 {.versions}

## Ajustes
- Ajustado registro C110 do Sped para identificar as informações adicionais da nota corretamente.
- Corrigido registro 71 do Sintegra para não enviar esta informação caso o cliente não emita CT-e.

# 17/05/2023
f2.10.18, b3.9.37 {.versions}

## Novidades
- Criado relatório de “Total de produtos vendidos por cliente”.
- Adicionado o CT-e na geração dos registros do Sintegra.
- Possibilitada a vinculação da regra de imposto na compra de mercadorias.
- Criado relatório de “Listagem de Pessoas”.
- Possibilitada a inclusão de veículos diretamente na nota sem a necessidade de um cadastro prévio.
- Ajustado cadastro de telefone estrangeiro no cadastro de Pessoas.
- Disponibilizada a opção de gerar o XML do mês para a NFS-e.

## Ajustes
- Ajustado cálculo de ICMS ST para considerar alíquotas internas e interestaduais.
- Ocultado botão “Editar” em notas com status “XML enviado a SEFAZ - Sem resposta”.
- Ajustado campo “CNAE” referente ao cadastro de serviço para que possa receber 9 dígitos no campo.
- Corrigido falha que bloqueava contas com data de bloqueio futura indevidamente.
- Ajustada edição de NF-e com CSOSN 500 que não estava mostrando os valores gravados.
- Ajustado o registro 0450 do Sped para mostrar este registro somente quando ele for vinculado a uma nota.
- Corrigido erro na importação do XML no MDF-e.
- Ajustada listagem de CST de IPI para escrituração para apresentar somente as opções de entrada.
- Ajustada a geração do registro C100 do Sped.


# 16/05/2023
f2.10.17, b3.9.36 {.versions}

## Ajustes
- Ajustada a exibição dos tomadores na NFS-e. Anteriormente o sistema estava usando o código da referência da NFS-e para exibir o tomador.

# 15/05/2023
f2.10.17, b3.9.35 {.versions}

## Ajustes
- Ajustada a nota de complemento para apresentar os dados configurados no campo "Autorizados a baixar o XML" no XML da nota.

# 12/05/2023
f2.10.17, b3.9.34, b3.9.35 {.versions}

## Ajustes
- Possibilitada a geração de notas de complementares destacando ICMS, mesmo que na nota original não seja destacado.

# 10/05/2023
f2.10.16, b3.9.32, b3.9.33, b3.9.34 {.versions}

## Ajustes
- Corrigida falha ao gerar o Sped em alguns clientes.
- Ajustado no CT-e a importação de notas de exportação.

# 08/05/2023
f2.10.16, b3.9.30 {.versions}

## Novidades
- Implementado o Registro 1601 no Sped.
- Melhorada a usabilidade do campo de data/hora.
- Adicionado carregamento dinâmico de itens na pesquisa de produtos no PDV e NF-e.

## Ajustes
- Ajustada na regra de tributação as novas alíquotas para bases novas e antigas.
- Corrigido o Registro 61 do Sintegra para NFC-e canceladas.
- Ajustado botão salvar no MDF-e para inativar no primeiro clique.
- Ajustado Registro 0400 do Sped para gerar os dados apenas uma vez.
- Ajustado Registro C190 do Sped para não gerar ICMS quando a empresa é do Simples Nacional.
- Ajustado cadastro do emitente para gravar e-mail e telefone adicional.
- Corrigida falha ao gerar o Relatório de Inventário. 
- Ajustado XML de compra para trazer o código CEST nos produtos novos.
- Ajustada compra de mercadorias para importar XML de produtos sem o código CEST.

# 05/05/2023
f2.10.15, b3.9.28, b3.9.29 {.versions}

## Ajustes
- Ajustada falha ao informar chave de NF-e no CT-e quando o mesmo possui reboque.

# 27/04/2023
f2.10.14, f2.10.15, b3.9.27 {.versions}

## Ajustes
- Corrigido tamanho do campo no registro 0450 no Sped.
- Ajustada opção para inserir dados de pagamento cartão no PDV.

# 25/04/2023
f2.10.14, b3.9.26 {.versions}

## Ajustes
- Ajustada operação de Retorno de Remessa quando a definição da operação for de entrada.

# 23/04/2023
f2.10.13, f2.10.14, b3.9.26 {.versions}

## Novidades
- Integração com SmartPOS Vero para pagamentos em cartão 🎉.

## Ajustes
- Corrigida falha nos produtos com tabela de preços ativa. Anteriormente estava apresentando tabelas de preços onde os produtos não estavam inseridos.
- Ajustada logomarca do emitente para ser exibida também na visualização do DACT-e.
- Ajustado Relatório de Inventário que estava apresentando itens negativos quando a quantidade atual do item é positiva.
- Corrigida falha de geração dos relatórios Movimentos NFC-e e Pagamentos NFC-e em alguns clientes.

# 19/04/2023
f2.10.13, b3.9.24, b3.9.25 {.versions}

## Ajustes
- Ajustado agendamento de alertas e geração do Sintegra e Sped.
- Ajustada a tag VTroco para pagamentos na NF-e com valores menores que o total da NF-e.

# 17/04/2023
f2.10.13, b3.9.22, b3.9.23 {.versions}

## Ajustes
- Ajustada geração do Sintegra quando não há regra Geral de tributação.
- Ajustado o cadastro do Contador, caso seja um escritório contábil não estava sendo possível informar o CPF do contador no arquivo.

# 15/04/2023
f2.10.12, b3.9.19 {.versions}

## Novidades
- Implementada a geração do SPED Fiscal pelo módulo de Arquivos Fiscais 🎉.

## Ajustes
- Ajustados os filtros do Relatório Total de NF-e/NFC-e por situação que estavam gerando dados vazios.
- Ajustada exportação de bases de dados a partir do Admin.

# 09/04/2023
f2.10.11, b3.9.18 {.versions}

## Ajustes
- Adicionado no cadastro do serviço o campo CNAE.
- Criado campos para Substituição de RPS na emissão da NFS-e.
- Ajustada a seleção de NF-es para permitir a importação de mais de 10 notas por vez.
- Ajustado relatório de “Documentos fiscais emitidos” para filtrar os dados do “Status” e “Operações” conforme selecionado.

# 05/04/2023
f2.10.10, b3.9.17 {.versions}

## Ajustes
- Corrigida exigência de campos que não são obrigatórios para o CT-e de Complementar.

# 03/04/2023
f2.10.10, b3.9.16 {.versions}

## Ajustes
- Adicionada tela para informar os dados da autorização do pagamento em cartão na NF-e/NFC-e.

# 01/04/2023
f2.10.9, b3.9.15 {.versions}

## Novidades
- Lançamento da integração do Glink com o Gweb 🎉.

## Ajustes
- Implementado envio do DAMDF-e para o proprietário do veículo.
- Implementado nos relatórios de “Contas a receber” e “Contas a pagar” os filtros para “Vencimento inicial” e “Vencimento final”, além de incluir a coluna “Pagamento” para indicar a data em que foi feito o pagamento quando houver.

# 29/03/2023
f2.10.8, b3.9.14 {.versions}

## Ajustes
- Corrigidos relatórios que não estavam acessíveis para alguns clientes.

# 25/03/2023
f2.10.8, b3.9.13 {.versions}

## Ajustes
- Ajustado Pedido de Venda que estava com sobrepondo a frase “Gerado pelo GWEB” com o último item da lista.
- Ajustado cadastro rápido de clientes do exterior.
- Disponibilizada a opção de reenvio do e-mail de confirmação pelo Admin para cliente que perderam o prazo.
- Corrigido relatório de “Contas a pagar” para que sejam exibidos também os lançamentos cadastrados manualmente.

# 21/03/2023
f2.10.7, b3.9.8, b3.9.9, b3.9.10, b3.9.11 {.versions}

## Ajustes
- Corrigida a permissão para acesso ao módulo dos arquivos fiscais.
- Ajustado o arquivo do Sintegra para gerar o CNPJ do emitente ao invés do CNPJ do destinatário da nota nos registros 50, 51, 53 e 54.
- Ajustada pesquisa na lista do PDV. Anteriormente não estava fazendo buscas através do nome, número da nota/pré-venda ou chave de acesso.
- Corrigido erro na transmissão do CT-e em alguns casos específicos.

# 20/03/2023
f2.10.6, b3.9.7 {.versions}

## Ajustes
- Ajustada listagem do PDV que não estava sendo exibida.

# 18/03/2023
f2.10.6, b3.9.6 {.versions}

## Novidades
- Criada opção de gerar nota de devolução a partir de uma nota de compra.
- Preenchimento automático das configurações do último Sintegra lançado, desta forma ao criar um arquivo novo as opções selecionadas no arquivo anterior serão selecionadas automaticamente no arquivo que está sendo criado.
- Criada opção de buscar NF-e da manifestação sem que ela tenha sido baixada.
- Adicionado campo para informar o CST de escrituração fiscal na compra.
- Inserido no rodapé da impressão do DACT-e a emissão através do Gweb.
- Movido os “Arquivos Fiscais” para dentro do menu principal do sistema.

## Ajustes
- Ajustada nota de complemento com NF-e de fora do sistema que ao editar não estava mostrando as informações do produto.
- Corrigida nota de ajuste que não estava somando o ICMS dos produtos.
- Ajustado nas configurações do emitente o CRT que ao trocar não estava apresentando a conversão de regime de tributação.
- Incluso no relatório de “Contas a pagar” a opção de incluir pré-vendas geradas de troco.
- Ajustado o PDV para permitir o cancelamento de pré-vendas que geraram NFC-es.
- Ajustado relatório de “Margem de lucro sobre o preço de venda” para não apresentar kits que tenham o mesmo código dos produtos inclusos na venda.
- Ajustada nas configurações do PDV o plano de contas para que seja aplicado nos registros das receitas.
- Ajustado na tela de detalhes o campo “Alterado por” para que registre a data/hora das alterações e por quem ela foi feita.
- Ajustado no arquivo Sintegra que estava gerando dois registros 50 quando os itens têm alíquotas de ICMS diferente na nota.
- Ajustado no arquivo Sintegra o número das notas de compra que estavam sendo gerados na sequência incorreta.
- Melhoria na pesquisa das notas de compra. Incluso o número da nota nos detalhes e otimizada a busca pelo número da nota.
- Ajustado no MDF-e com NF do exterior o campo município que não estava buscando a informação do local correto.
- Ajustado o MDF-e para buscar as informações de peso/qtde do produto e tomador do serviço da NF-e de origem.
- Aprimorada busca na listagem de CT-e para buscar não só pela chave do CT-e mas também pela chave da NF-e e pela razão do tomador.
- Ajustado no PDV a exclusão de itens que tem a quantidade fracionada.
- Corrigida a importação de XML de NF-e dentro do CT-e que não estava mostrando o remetente e destinatário.
- Ajustada mensagem de erro do MDF-e ao incluir uma NF-e onde o emitente é prestador de serviço de transporte.
- Ajustada a NFS-e para não permitir a inclusão de mais de um serviço na nota (botão Insert).
- Ajustada visualização do XML na carta de correção que não estava sendo exibida.
- Ajustada na configuração dos serviços o campo UF que não estava sendo exibido corretamente ao selecionar a opção “Cidade específica”.
- Corrigido arquivos .xlsx provenientes de relatórios para que possam ser abertos no Excel.

# 10/03/2023
f2.10.4, f.2.10.5, b3.9.5 {.versions}

## Ajustes
- Ajustado o "Código do serviço do município" que ao transmitir a NFS-e com esta informação vazia esta pegando os dados do "Campo da atividade" causando rejeição em algumas cidades.
- Ajustado na transmissão da NFS-e os campos valor_iss_retido que estava enviando o campo com valor maior que zero e iss_retido que estava sendo enviado como false.

# 08/03/2023
f2.10.3, b3.9.5 {.versions}

## Ajustes
- Corrigida na NF-e as vendas para fora do estado com operação presencial que estavam gerando o valor errado na tag idDEst.

# 07/03/2023
f2.10.3, b3.9.3, b3.9.4 {.versions}

## Ajustes
- Ajustada URL de consulta da NFC-e via QRCode e a URL de consulta por chave (portal) para homologação e produção no estado de Minas Gerais.
- Ajustado componente do CT-e que estava gerando a chave errada quando o emitente era Pessoa Física.

# 06/03/2023
f2.10.3, b3.9.2 {.versions}

## Ajustes
- Ajustada NFS-e para enviar os dados dos campos item_lista_servico e codigo_tributario_municipio de acordo com o cadastro do serviço.

# 02/03/2023
f2.10.2, f2.10.3, b3.9.1 {.versions}

## Ajustes
- Ajustada as informações adicionais do produto para permitir quebras de linha na impressão.
- Ajustada a busca de categoria de produtos quando estiverem vinculadas a uma categoria superior.

# 28/02/2023
f2.10.1, b3.9.0 {.versions}

## Ajustes
- Ajustado produtos com grade para que seja possível adicionar novos itens mesmo que a grade esteja em uso.

# 26/02/2023
f2.10.0, b3.9.0 {.versions}

## Novidades
- Adicionada a funcionalidade de Conhecimento de Transporte Eletrônico (CT-e) 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/movimentos/ct-e).
- Adicionado o campo de “informações adicionais” na NFS-e.
- Criada configuração para definir qual tributação de PIS/COFINS será considerada na NFS-e (padrão ou com retenção).
- Adicionado campo “telefone” na impressão da pré-venda. A exibição deste campo vai respeitar o que estiver definido nas configurações do PDV.
- Adicionada opção do “Custo médio” no relatório “Inventário de estoque”. Agora é possível gerar o total também através desta opção.

## Ajustes
- Ajustado o Relatório de Produtos por Categoria que estava duplicando os produtos com grade.
- Corrigida na geração do arquivo Sintegra o campo de IE para que contenha apenas números.
- Limitado na geração do arquivo Sintegra o número de caracteres no campo Razão Social.
- Renomeada a opção “NF-e” dentro dos documentos fiscais referenciados na Nota Fiscal Eletrônica.
- Ajustado campo de pesquisa na lista de categorias.

# 18/02/2023
f2.9.19, b3.8.44 {.versions}

## Novidades
- Criação de relatório para a NFS-e (NFS-e emitidas).
- Criação de relatório para o histórico de sangrias (Sangrias e Suprimentos).
- Geração de pré-venda a partir de um pedido. Anteriormente os pedidos geravam apenas NFC-e ou NF-e.

## Ajustes
- Adicionada descrição no relatório de “Fluxo de caixa” para melhor compreensão do objetivo deste relatório.
- Ajustada na edição da NFS-e os campos da guia “tributos”. O sistema não trazendo o que foi salvo ao editar a nota.
- Ajustado relatório de “Total de vendas por meio de pagamento” para apresentar também a NFS-e.
- Corrigida NF-e de importação que não estava gravando os dados de edição da DI.
- Ajustada a edição do cadastro de pessoa estrangeira que não apresentava o campo município (exterior) preenchido.
- Corrigida nota de complemento que exigia o serial do produto quando o mesmo possuía número de série. Agora ao informar um produto com número de série ela não será solicitada, mas deve-se informar a quantidade.
- Ajustada a disponibilidade do botão excluir na NFC-e e pré-venda.
- Ajustada a edição do cadastro do emitente ao desmarcar/marcar o atributo “transportador”. Anteriormente ao tentar salvar a alteração apresentava mensagem de "Este registro está em uso e não pode ser apagado".
- Ajustada grade de produtos para permitir a inclusão de linhas e colunas em grades que já estão em uso.
- Ajustado cadastro de Pessoa Física no envio de informações para a Focus. Anteriormente ao cadastrar um serial com pessoa física (CPF) esta informação estava sendo enviada como pessoa jurídica (CNPJ).
- Ajustada NFS-e para buscar a cidade no item da NFS-e conforme configuração, caso ela não seja informada, o sistema ainda pode buscar essa informação do cadastro do tomador e do cadastro do emitente.
- Adicionado novos campos no relatório de “Inventário de Estoque” (cálculo do valor pelo custo médio, custo compra estoque, custo última compra, preço de venda e inclusão dos totalizadores).

# 13/02/2023
f2.9.18, b3.8.42 {.versions} 

## Ajustes
- Ajustado número de itens na grade dos produtos. Anteriormente a grade aceitava um total de 50 itens, agora passou a 150.

# 08/02/2023
f2.9.17, b3.8.42 {.versions} 

## Ajustes
- Atualizadas URL de envio de eventos da NFC-e no estado do Ceará.

# 04/02/2023
f2.9.17, b3.8.40 {.versions} 

## Ajustes
- Ajustado campo "Número" da NFS-e para aceitar uma numeração maior. Anteriormente quando o número da nota excedia o tamanho do campo apresentava erro no bando de dados.

# 31/01/2023
f2.9.16, b3.8.39 {.versions} 

## Ajustes
- Corrigido total do serviço. Anteriormente ao enviar a NFS-e o sistema estava enviando o valor unitário do serviço no lugar do total (quantidade x valor do serviço).

# 29/01/2023
f2.9.15, b3.8.37, b3.8.38 {.versions} 

## Novidades
- Implementada a geração do Sintegra pelo módulo de Arquivos Fiscais 🎉.

## Ajustes
- Otimizado o Relatório de Inventário, foram adicionados os filtros para página inicial e livro.

# 18/01/2023
f2.9.14, b3.8.36 {.versions} 

## Ajustes
- Corrigido custo de compra ao fazer uma pré-venda com movimentação de estoque. Ao realizar uma pré-venda com movimentação de estoque o sistema estava alteando o custo da compra automaticamente.

# 16/01/2023
f2.9.14, b3.8.35 {.versions} 

## Ajustes
- Ajustada NFS-e que não estava buscando os dados da regra de tributação selecionada no cadastro do serviço.

# 16/01/2023
f2.9.13, b3.8.35 {.versions} 

## Ajustes
- Ajustada NFC-e que apresentava falha no envio. O sistema estava buscando informações nas configurações da NF-e mesmo quando o cliente não tinha este módulo habilitado.

# 15/01/2023
f2.9.13, b3.8.34 {.versions} 

## Novidades
- Criado campo para registrar o CST de entrada nas compras.
- Adicionado campo "Quantidade em Estoque" no relatório "Produtos por Categoria".
- Adicionado campo para cálculo do Custo Médio no estoque.
- Inserida opção para editar e salvar as informações adicionais da NF-e, permitindo que o usuário escolha entre utilizar a mensagem automática ou definir uma manualmente.
- Adicionado novo código de serviço no cadastro de Serviços (14.14 - Guincho intramunicipal, guindaste e içamento).
- Alterado o responsável técnico do sistema no XML da NF-e, NFC-e e MDF-e.

## Ajustes
- Ajustada tela de login que ficava processando os dados quando não achava uma conta ativa.
- Ajustado o campo "Natureza da Operação" na NFS-e para que contenha naturezas de operação que são específicas para algumas cidades (Passo Fundo/RS e Guarapari/ES).
- Retirado botão editar na NFS-e em processamento. Não é permitido editar notas em processamento, desta forma a opção foi removida para não gerar erros.
- Corrigida a emissão de NFC-e com serviço. Anteriormente o sistema não estava permitindo inserir serviços na nota.
- Corrigido relatório de "Movimentos NFC-e" para que não mostre compras feitas com a série zero.
- Corrigido relatório de "Total de Vendas por meio de Pagamento". Agora ele subtrai do total o valor o troco.
- Corrigida falha ao habilitar o módulo NFS-e pelo painel da revenda.
- Ajustada edição de dados na NFS-e. Ao salvar uma NFS-e e editar os dados os mesmos não estavam sendo salvos.
- Corrigido relatório de "Documentos Fiscais Emitidos" para não mostrar os documentos que foram deletados.
- Ajustada importação de XML para calcular o custo médio. Anteriormente o sistema estava mantendo esse campo do cadastro do produto sempre zerado.
- Ajustada na edição da NFS-e o campo desconto condicionado. O sistema estava salvando o desconto condicionado mas não estava trazendo o que foi salvo ao editar a nota.

# 11/01/2023
f2.9.12, b3.8.29 {.versions} 

## Ajustes
- Corrigido erro ao gravar retorno da consulta de NFC-e e NF-e no estado de GO.

# 06/01/2023
f2.9.12, b3.8.26 {.versions} 

## Ajustes
- Adicionado na NFS-e o campo "Pagador retenção ISSQN". Agora é possível escolher o responsável pela retenção do ISSQN.

# 05/01/2023
f2.9.11, b3.8.25 {.versions} 

## Ajustes
- Corrigida falha ao fazer login no sistema. Anteriormente em algumas situações específicas ao tentar logar apresentava a mensagem “Não foi informada uma conta para login”.

# 05/01/2023
f2.9.10, b3.8.25 {.versions} 

## Ajustes
- Adicionado novo código de atividade no cadastro de serviço. O código adicionado corresponde ao 16.02 - Outros serviços de transporte de natureza municipal.

# 02/01/2023
f2.9.9, b3.8.25 {.versions} 

## Ajustes
- Corrigido erro ao enviar uma NFS-e onde o campo codigo_cnae estava enviando o código de tributação do serviço.


# 2022 {.year}

# 29/12/2022
f2.9.9, b3.8.24 {.versions} 

## Ajustes
- Corrigido erro na nota de importação que estava gerando valores negativos na tag pRedBC.

# 22/12/2022
f2.9.9, b3.8.23 {.versions} 

## Ajustes
- Corrigido erro na edição das despesas/receitas onde ao alterar a data de vencimento não estava sendo gravada a nova data.

# 21/12/2022
f2.9.8, b3.8.22 {.versions} 

## Ajustes
- Ajustada a Nota Conjugada que não estava calculando as retenções.
- Corrigido erro de data nos parcelamentos das receitas/despesas. Anteriormente não estava registrando corretamente as datas.
- Ajustado erro na gravação de serviços sem tributação. Agora quando não for indicada uma tributação para o serviço, será colocado automaticamente a tributação padrão.
- Ajustado Relatório de Margem de Lucro sobre preço de venda para não exibir as compras feitas no período.

# 19/12/2022
f2.9.7, b.3.8.21 {.versions} 

## Ajustes
- Ajustado limite para criação de grades. Anteriormente o sistema permitia a criação de 50 grades, agora esse número passa a ser 150.

# 11/12/2022
f2.9.7, b3.8.19, b3.8.20 {.versions} 

## Novidades
- Criada a funcionalidade de editar/excluir compras já concluídas.
- Criado relatório de Lucro.

## Ajustes
- Ajustada exibição do XML do resumo da NF-e. Na manifestação não estava sendo exibido o XML do resumo da NF-e.
- Corrigido cadastro do emitente/pessoa que não estava gravando dados do transportador. Ao abrir o cadastro do emitente ou o cadastro de pessoa, caso ela tenha o atributo de Transportador, não estava trazendo os dados que estavam informados anteriormente.
- Corrigida ordenação dos produtos na NFC-e que estavam ficando errados quando os produtos eram excluídos da venda.
- Ajustada foto do emitente que não estava aparecendo no menu principal.

# 07/12/2022
f2.9.6, b3.8.18 {.versions} 

## Ajustes
- Ajustada verificação incorreta no módulo de NF-e. O sistema estava verificando se o módulo de NF-e estava habilitado ao acessar o módulo de NFS-e.

# 06/12/2022
f2.9.6, b3.8.11 {.versions} 

## Novidades
- Adicionada a funcionalidade de Nota Fiscal de Serviços Eletrônica (NFS-e) 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/movimentos/nfs-e).

# 01/12/2022
f2.9.6, b3.8.11 {.versions} 

## Ajustes
- Corrigida as configurações da NFS-e que estavam gravando o Regime Tributário de forma incorreta.

# 28/11/2022
f2.9.5, b3.8.11 {.versions} 

## Novidades
- Criado controle de monitoramento das ações durante a comunicação do sistema com a FocusNfe.

## Ajustes
- Corrigido problema ao editar uma NF-e com forma de pagamento informado. Anteriormente ao informar um tipo de pagamento na Nf-e e salvar, quando o produto precisava ser editado a forma de pagamento automaticamente era excluída.
- Corrigido problema nos detalhes de notas com endereço de entrega. Ao autorizar uma NF-e com endereço de entrega onde o recebedor era PJ, e deixar em branco os campos IE e telefone depois de transmitida não era possível visualizar os detalhes da mesma.
- Ajustado Relatório de documentos fiscais emitidos para que sejam apresentadas as notas de devolução ao filtrar.
- Ajustada edição de produtos no PDV quando acessado pelo Iphone. Foi adicionado um botão para abrir o menu de contexto nos dispositivos móveis.

# 16/11/2022
f2.9.4, b3.8.10 {.versions} 

## Ajustes
- Ajustada a importação da base de dados que estava apresentando falha na importação de arquivos com planos de contas. 

# 13/11/2022
f2.9.4, b3.8.8, b3.8.7 {.versions} 

## Novidades
- Criada configuração no cadastro de produtos para envio de informações ao Ghub.

## Ajustes
- Corrigido erro ao habilitar novos clientes. Ao criar novos clientes no Gweb, mesmo sem habilitar o módulo de NFS-e, o sistema estava tentando enviar essa integração, e por não ter os dados necessários, estava gerando erro.
- Corrigido erro de carregamento na imagem de perfil do usuário.
- Ajustada retorno na mensagem de validação no MDF-e. Em situações específicas ao transmitir um MDF-e com erro de validação no XML não estava retornando a mensagem de validação.

# 10/11/2022
b3.8.6 {.versions}

## Ajustes
- Ajustada opção de salvar configurações do PDV. O sistema estava exigindo o preenchimento do campo de comportamento da tabela de preços no request, mesmo quando não era necessário.

# 08/11/2022
f2.9.3 {.versions}

## Ajustes
- Corrigido erro no console ao selecionar uma pessoa que não é cliente na NF-e. Esse erro ocorria quando o cliente em questão não tinha no seu cadastro selecionado o atributo cliente.

# 04/11/2022
f2.9.1, f2.9.2, b3.8.4, b3.8.5 {.versions}

## Ajustes
- Corrigida a busca de produtos por referência. Anteriormente não estava sendo possível localizar produtos com referência na NF-e e NFC-e.
- Corrigido erro ao salvar as informações no cadastro do emitente. O problema acontecia pois havia um veículo vinculado ao emitente, e o mesmo não era carregado para exibir os detalhes no cadastro do emitente. Foi ajustado para carregar o detalhe do veículo para não apresentar mais a mensagem.
- Ajustado desconto no lançamento do produto. Na NF-e, na tela de pesquisa de produto, as opções do desconto eram as mesmas que apareciam ao clicar no valor unitário. Antes era possível escolher o desconto em dinheiro ou o desconto por percentual.

# 03/11/2022
f2.9.1, b3.8.1 {.versions}

## Ajustes
- Corrigida a edição de NF-e/NFC-e e orçamentos/pedidos que ao clicar no produto não estava mostrando a guia tributos.
- Ajustada mensagem de validação na NFC-e quando itens forem incluídos e deletados quebrando a sequência da numeração dos itens.

# 02/11/2022
f2.9.0, b3.8.0 {.versions}

## Novidades
- Adicionada a funcionalidade de Tabela de Preços 🎉.

## Ajustes
- Reformuladas mensagens de alerta no MDF-e. Foram revisadas algumas mensagens de alerta para que fique de fácil entendimento para o usuário facilitando assim a correção de alguns erros.
- Corrigida exclusão do cadastro de veículos. Ao cadastrar um veículo e utilizá-lo em uma MDF-e, quando excluído o veículo estava apagando também o MDF-e relacionado ao veículo excluído.
- Ajustado parâmetro de impressão do orçamento. Não estava sendo possível gerar a tela de impressão.

# 30/10/2022
f2.8.2, b3.7.7 {.versions}

## Novidades
- Criado relatório de produtos vendidos por CFOP e situação tributária.
- Acrescentado indicador de status nos orçamentos. Agora é possível ver o status do orçamento na tela de detalhes.

## Ajustes
- Ajustado pedido/orçamento que ao editar a opção de exclusão não estava funcionando.
- Ajustado o relatório "Movimentos NFC-e". Agora este relatório apresenta um filtro onde é possível selecionar apenas as NFC-e, pré-venda ou ambas.
- Corrigido XML do MDF-e que não estava gerando a tag do responsável técnico.
- Corrigido endereço de entrega que mesmo depois de desmarcado continuava sendo apresentado. Ao editar uma nota com endereço de entrega e desmarcar esta opção o sistema não estava removendo esta marcação ao salvar.
- Ajustado parcelamento das receitas. Ao lançar manualmente uma receita parcelada e repetir o valor a mesma não estava respeitando e ordenando as datas corretamente.
- Corrigida quebra de sequência nos itens da NF-e. Ao remover um item da NF-e o sistema não estava reordenando os produtos gerando uma sequência incorreta e posteriormente rejeição.
- Melhorada mensagem de erro da validação do XML na NF-e. O sistema apresentava uma mensagem genérica, agora mostra uma de fácil entendimento pelo usuário auxiliando na correção do erro.
- Ajustada a mensagem do MD-e ao consultar pela primeira vez. Anteriormente quando consultávamos pela primeira vez e o NSU não estava preenchido apresentava mensagem de erro, agora se não estiver preenchido o sistema automaticamente coloca o número 1.
- Ajustado documentos referenciados que não estavam gravando a IE. Ao referenciar um documento do tipo "Nota fiscal de produtor" ao editar não estava salvando a informação corretamente.
- Ajustado para que o usuário possa optar entre manter a data de saída na NF-e (que será inserida automaticamente) ou caso queira poderá retirá-la da nota.
- Corrigido no endereço de entrega o campo "Número" para que aceite caracteres especiais quando no endereço em questão não houver número (exemplo: s/n, sn, s.n).
- Ajustado para que nos impostos os campos de "MVA" e "% diferimento ICMS" aceitem 3 caracteres antes da vírgula.

# 27/10/2022
f2.8.1, b3.7.5 {.versions}

## Ajustes
- Corrigida as pré-vendas que eram divididas em dois pagamentos. Alterada a validação de troco com base no arredondamento de valores.

# 19/10/2022
f2.8.1, b3.7.5 {.versions}

## Ajustes
- Corrigido MDF-e que não carregava dados a partir do XML. Quando criado um MDF-e onde o veículo utilizado estava sem o campo "Capacidade (kg)" preenchido, ao tentar autorizar o MDF-e apresentava erro pela falta desta informação.

# 17/10/2022
f2.8.1, b3.7.3 {.versions}

## Ajustes
- Corrigido Relatório de Movimentos Completo que não estava gerando dados com notas emitidas sem data de saída.

# 16/10/2022
f2.8.1, b3.7.2 {.versions}

## Ajustes
- Corrigida a Nota Conjugada que estava mesclando dados ao gerar o XML. Ao gerar uma Nota Conjugada e inserir os serviços antes dos produtos o sistema esta trazendo informações de produtos junto como os serviços.
- Ajustado o nome nos detalhes dos produtos que compõe a grade. Atualmente, ao adicionar uma grade ao produto, o sistema utiliza o mesmo nome do produto “pai” nos detalhes dos produtos “filhos”, o mesmo ocorre ao editar o nome do produto. Agora quando o produto possui uma grade para cada detalhe filho, será apresentado no nome a composição das dimensões da grade, para que este valor seja exibido nos documentos fiscais e telas.
- Corrigida a Nota de Ajuste que não estava somando o total de produtos ao total da nota. 
- Corrigida a discrepância entre as datas consideradas em filtros e as datas que são exibidas na listagem/relatório. A partir de agora uma das datas utilizadas nos filtros e nas listas passa a ser a data de emissão e não mais a data da criação.
- Removido botão de duplicar Nota de Complemento. Visto que uma nota de complemento é sempre relacionada a uma nota original, não haveria motivo para clonar uma nota de complemento.
- Corrigido campo de informações adicionais no produto dentro da NF-e. Anteriormente o campo permitia digitar até 500 caracteres, mas ao salvar apresentava mensagem indicando que o campo deveria ser menor que 250 caracteres.

# 13/10/2022
f2.8.0, b3.7.1 {.versions}

## Ajustes
- Ajustada data de saída/entrada na Nota de Complemento. Anteriormente a data saída na NF-e era preenchida automaticamente, agora é possível deixá-la em branco, o que estava gerando um erro na nota de complemento pois neste caso esperava-se que este campo estivesse preenchido no XML.

# 09/10/2022
f2.8.0, b3.7.0 {.versions}


## Novidades
- Adicionada a funcionalidade de Orçamento 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/movimentos/orcamento).


# 03/10/2022
f2.7.9, b3.6.8 {.versions}


## Novidades
- Criado método de contingência offline do MDF-e, para emissão de documentos quando o servidor da SEFAZ estiver indisponível.
- Adicionada a funcionalidade de inclusão dos XMLs de NF-e ou CT-e ao criar o MDF-e.
- Criado evento para adição de NF-e após a emissão do MDF-e. Permitindo inserir notas que serão emitidas após a transmissão do MDF-e.


## Ajustes
- Ajustadas pré-vendas de produtos com quantidades indisponíveis. Anteriormente quando o produto não tinha a quantidade vendida disponível e estivesse configurado para não permitir venda com estoque negativo, o sistema estava permitindo a venda sem mostrar uma mensagem de alerta deixando desta forma o estoque do produto negativo. Agora ao gerar uma pré-venda de produtos com estoque menor do que o informado na venda será mostrado um aviso indicando que o produto não tem o estoque necessário para finalizar a venda.

# 27/09/2022
f2.7.8, b3.6.7 {.versions}

## Ajustes
- Ajustada a edição de produtos que já utilizavam a faixa de NCM controlada pela Anvisa. Anteriormente se o produto já tinha no cadastro um NCM do grupo 30 (iniciados em 3001, 3002, 3003, 3004, 3005 e 3006) não estava sendo possível editar o produto.

# 26/09/2022
f2.7.6, f2.7.7, b3.6.5, b3.6.6 {.versions}

## Ajustes
- Corrigida a criação e visualização dos detalhes dos produtos sem NCM. Não estava sendo possível salvar produtos sem um NCM informado, além de não gerar a visualização dos detalhes de produtos já existentes sem NCM.
- Corrigida a importação de compras a partir de um XML. Ao importar um XML apresentava falha ao ler arquivo, solicitando a verificação do mesmo.
- Corrigida a criação/edição de produtos onde o preço de venda fica zerado. Anteriormente não era possível salvar um produto com preço de venda zerado tanto na sua criação quanto na edição.

# 25/09/2022
f2.7.5, b3.6.4 {.versions}


## Novidades
- Adicionada a funcionalidade de Preço de Atacado 🎉. Conheça mais sobre esta novidade no Gweb [clicando aqui](/cadastros/produtos).
- Adicionado campos referente à ANVISA no cadastro do produto e XML da NF-e.
- Incluso dados de lote para itens da NF-e com NCMs do grupo 30. Agora ao adicionar um item na NF-e com NCM do grupo 30 (iniciados em 3001, 3002, 3003, 3004, 3005 e 3006 - medicamentos) é obrigatório o preenchimento dos dados de rastreabilidade do item.


## Ajustes
- Corrigido cálculo do FCP ST para o Regime Simples (CSOSN 900). Anteriormente o sistema estava apresentando rejeição no valor total da NF quando eram preenchidos valores de FCP ST na nota, em alguns casos quando a nota autorizava estes valores não estavam sendo somados no total.

# 19/09/2022
f2.7.3, f2.7.4, b3.6.2 {.versions}


## Novidades
- Adicionado aos módulos um atalho que redireciona para os relatórios específicos do módulo em questão.

## Ajustes
- Corrigida as informações adicionais do produto que não estavam sendo salvas na pré-venda.
- Ajustada a rolagem de tela em dispositivos móveis. Na navegação de algumas telas não era possível "deslizar" pela listagem.
- Corrigido o XML do mês que estava incluindo notas rejeitadas juntamente com as autorizadas e canceladas.
- Corrigida a consulta do CNPJ no cadastro de Pessoas. Anteriormente ao consultar o CNPJ alguns dados de endereço não estavam sendo preenchidos no formulário.
- Ajustada a pré-venda para gravar dados de clientes não cadastrados. Ao criar uma pré-venda informando o CPF e nome de um cliente não cadastrado no sistema, o mesmo não estava apresentando essas informações após concluir a pré-venda.
- Corrigida a emissão de pedidos e pré-vendas com serviços. Ao gerar pedidos e pré-vendas com serviços não estava sendo possível salvar os respectivos documentos.
- Incluído no cadastro de Pessoas quando o atributo "transportador" estiver marcado o campo "Tipo de transportador". Anteriormente este campo estava sendo exibido dentro do cadastro do Emitente gerando uma rejeição quando o proprietário o veículo era CNPJ mas não era o emitente.

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

# 2021 {.year}

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
