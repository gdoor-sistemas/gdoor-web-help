---
title: Glink
description: 
published: true
date: 2023-03-31T17:34:14.825Z
tags: 
editor: markdown
dateCreated: 2023-03-31T17:12:12.758Z
---

# Introdução

O Glink é um aplicativo de força de vendas, ideal para empresas que realizam vendas externas e querem ter um gerenciamento efetivo dos pedidos de venda realizados. Através dele é possível:

Emitir, enviar e imprimir pedidos fora do estabelecimento;
Visualização de clientes por vendedor preferencial;
Cadastrar, visualizar e editar cadastros de clientes;
Visualizar pedidos realizados;
Acompanhar pedidos de venda em tempo real;
Reservar produtos no estoque;
Preço de venda, atacado e tabela de preços;
Selecionar formas de pagamento;
Compartilhar pedidos de venda via WhatsApp, e-mail entre outros.












# Ativar dispositivo móvel







Após ativar o Ghub, é necessário efetuar a ativação do Glink. Clique aqui ver como ativar o dispositivo móvel.

[Clique aqui](https://bdc.gdoor.com.br/artigos/novo-glink/#dashboard) para saber mais sobre a utilização do App Glink.










## Gerar os dados no formato compatível

O primeiro passo é enviar o banco de dados do sistema antigo para o suporte técnico da Gdoor, direcionado para a equipe de conversão pelo e-mail conversao@gdoor.com.br. Este procedimento geralmente é feito pelo revendedor, uma vez que é ele quem fará a migração. Assim que concluída a conversão, o banco de dados será devolvido por e-mail no formato compatível.

Caso você mesmo queira gerar o arquivo e tenha condições de fazer isso, consulte a [documentação da estrutura de dados](https://docs.gdoorweb.com.br/public/conversion/data-structure).

## Importar os dados no Gweb

Faça o login no sistema e acesse o menu **Configurações &raquo; Ferramentas**, será exibida a ferramenta de importação de dados. Nessa tela você encontrará a lista de importações feitas, se já tiver feito alguma. Para iniciar uma nova, clique no botão de adição no canto inferior direito da tela e será aberto o assistente de importação:

![Assistente de importação de dados](/config/ferramentas/importar-dados-assistente.png)

Clique no botão <span data-mat-button>Carregar arquivo</span> e selecione o arquivo convertido que você recebeu. Será apresentada uma confirmação com a identificação do proprietário dos dados, apenas para conferência. Neste ponto, caso o arquivo seja o incorreto, você poderá selecionar outro. Para prosseguir, clique em <span data-mat-button>Enviar arquivo</span>:

![Confirmação do proprietário dos dados](/config/ferramentas/importar-dados-confirmacao.png)

Ao prosseguir, o arquivo será enviado para os servidores do Gweb onde será validado em segundo plano. Essa validação verificará a integridade do arquivo e possíveis registros duplicados. Assim que a validação for concluída, você receberá uma notificação pelo sistema informando se o arquivo está pronto para ser importado. Neste passo, você poderá analisar os registros que estão sendo importados com o status de cada um. Os status podem ser:

- <i class="badge success"></i> **Ok**. O registro será importado normalmente
- <i class="badge warning"></i> **Com aviso**. O registro já existe no banco de dados e será ignorado
- <i class="badge error"></i> **Com erro**. Houveram falhas na validação que precisam ser corrigidas. O arquivo não pode ser importado quando houver falhas.

![Resultado da validação do arquivo](/config/ferramentas/importar-dados-validacao.png)

Para ajudar a verificar o que há de errado, você pode filtrar por status clicando no totalizador acima da tabela. Também, ao passar o ponteiro do mouse sobre o ícone do status, ou clicar sobre ele, você poderá ver detalhes da validação:

![Filtros na importação de dados](/config/ferramentas/importar-dados-filtros.gif)

Se estiver tudo ok, agora você pode prosseguir com a importação clicando no botão <span class="mat-button mat-accent">Processar arquivo</span>. Novamente, este processo será feito em segundo plano e você será notificado quando ele for concluído. Você poderá checar o andamento da importação na lista de importações, lá serão listadas as importações com seus status:

![Lista de importações](/config/ferramentas/importar-dados-lista.png)

![Lista de importações com detalhes](/config/ferramentas/importar-dados-lista-sucesso.png)

Os possíveis status da importação são estes:

- **Pendente**. O arquivo foi enviado e está aguardando para ser validado.
- **Analisando**. O arquivo está sendo analisado.
- **Pronto para importar**. A análise foi concluída e não foram encontrados erros.
- **Falha na validação**. A análise foi concluída e houveram falhas que impedem a importação.
- **Agendada**. A importação foi agendada e deve iniciar a qualquer instante.
- **Em andamento**. A importação está sendo realizada neste momento.
- **Falhou**. Houve um problema durante a importação.
- **Finalizada**. A importação foi concluída com sucesso.

Quando o status for **Falha na validação**, **Falhou** ou **Pronto para importar**, a importação poderá ser excluída. Nestes casos, será exibido um botão para excluir ao lado do item na lista.