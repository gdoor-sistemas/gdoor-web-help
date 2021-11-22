---
title: Atualizações
description: Confira as últimas atualizações que deixaram o GDOOR WEB ainda mais robusto e funcional
published: true
date: 2021-11-22T17:00:10.461Z
tags: novidades
editor: markdown
dateCreated: 2021-06-28T18:13:29.393Z
---

# 22/11/2021
b2.4.3, f1.14.3 {.versions}

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
- Possibilitada a consulta do status de várias NFC-e de uma vez. Assim como era possível selecionar várias para transmitir, agora é possível também consultar. [Veja mais detalhes](/movimentos/nfc-e/lista#selecao-multipla).

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
