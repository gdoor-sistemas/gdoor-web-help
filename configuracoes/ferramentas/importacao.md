---
title: Importação de dados
description: Veja como importar dados de outros sistemas para o GDOOR WEB
published: true
date: 2021-03-04T12:32:24.227Z
tags: cadastros, ferramentas
editor: markdown
dateCreated: 2021-03-03T19:51:12.177Z
---

# Introdução

Este recurso visa facilitar a migração a partir outros sistemas para o GDOOR WEB. Com ele, você pode importar os cadastros pra continuar o trabalho iniciado em outro sistema.

Atualmente, o sistema pode importar os cadastros de **produtos** e **pessoas** (clientes, fornecedores, transportadoras e vendedores). Visando atender a maior demanda no momento, a conversão dos dados é feita de outros sistemas para o formato do [GDOOR PRO](https://help.gdoor.com.br), e a partir desse formato a conversão é feita para o GDOOR WEB. Para saber quais os sistemas atualmente suportados pelo conversor, entre em contato com seu representante ou com o suporte técnico da GDOOR.

### Quando posso/devo fazer a importação?

Quando quiser. Pode ser assim que a sua conta for criada, ou mesmo depois de um tempo já utilizando o sistema. Mas é importante notar que, se você importar depois de já ter cadastros no sistema, alguns registros poderão ficar duplicados se não for possível identificar por uma chave única. Por exemplo, se um registro de cliente no sistema antigo não possuir o CPF dessa pessoa, não será possível verificar se ela já está cadastrada no GDOOR WEB, mas a importação será feita normalmente. Caso seja identificado um registro já cadastrado, ele será **ignorado** na importação.

# Como importar os dados?

Primeiramente é necessário converter os dados do sistema antigo e depois importar esses dados no GDOOR WEB. Veja a seguir como fazer isso.

## Gerar os dados no formato compatível

O primeiro passo é enviar o banco de dados do sistema antigo para a equipe de conversão pelo e-mail conversao@gdoor.com.br. Este procedimento geralmente é feito pelo revendedor, uma vez que é ele quem fará a migração. Assim que concluída a conversão, o banco de dados será devolvido por e-mail no formato compatível.

## Importar os dados no GDOOR WEB

Faça o login no sistema e acesse o menu **Configurações &raquo; Ferramentas**, será exibida a ferramenta de importação de dados. Nessa tela você encontrará a lista de importações feitas, se já tiver feito alguma. Para iniciar uma nova, clique no botão de adição no canto inferior direito da tela e será aberto o assistente de importação:

![Assistente de importação de dados](/config/ferramentas/importar-dados-assistente.png)

Clique no botão <span data-mat-button>Carregar arquivo</span> e selecione o arquivo convertido que você recebeu. Será apresentada uma confirmação com a identificação do proprietário dos dados, apenas para conferência. Neste ponto, caso o arquivo seja o incorreto, você poderá selecionar outro. Para prosseguir, clique em <span data-mat-button>Enviar arquivo<span>:

![Confirmação do proprietário dos dados](/config/ferramentas/importar-dados-confirmacao.png)

a