---
title: Replicar código interno no código de barras
description: 
published: false
date: 2026-09-04T18:11:10.173Z
tags: 
editor: markdown
dateCreated: 2026-09-03T20:40:01.995Z
---

# Replicar código interno no código de barras

Listamos neste artigo como utilizar o código interno dos produtos como código de barras, incluindo a configuração da replicação para novos produtos e para produtos já cadastrados, além da definição do código principal.

# Introdução

Nem todos os produtos possuem um código de barras cadastrado. Nesses casos, o código interno pode ser replicado para a lista de códigos de barras do produto, permitindo utilizar essa identificação em operações que dependem da leitura do código.

O recurso pode ser configurado para replicar o código interno apenas nos novos produtos ou também nos produtos já cadastrados. Para os produtos existentes, também é possível definir se o código replicado será utilizado como o código de barras principal.

# Ativar a replicação do código interno

Acesse o módulo "Configurações", selecione "Geral" e localize o bloco "Controlar estoque e identificação dos produtos".

[INSERIR IMAGEM — Tela "Geral", destacando o bloco "Controlar estoque e identificação dos produtos" e a opção "Replicar código interno no código de barras".]

O bloco "Controlar estoque e identificação dos produtos" concentra as configurações relacionadas ao controle do estoque e à identificação dos itens. A opção "Replicar código interno no código de barras" está identificada como "NOVO".

Marque "Replicar código interno no código de barras" para utilizar o código interno dos produtos como código de barras.

Com a configuração ativa, os produtos podem receber automaticamente o respectivo código interno na lista de códigos de barras, evitando a necessidade de cadastrar outro código exclusivamente para essa finalidade.

# Definir a aplicação da replicação

Ao marcar a opção "Replicar código interno no código de barras", será apresentada uma janela para definir como a configuração deverá ser aplicada aos produtos.

[INSERIR IMAGEM — Janela apresentada ao ativar a opção, destacando as alternativas "Replicar" e "Replicar e definir como principal".]

Selecione uma das opções disponíveis:

Replicar: adiciona o código interno como mais um código de barras cadastrado para o produto.
Replicar e definir como principal: adiciona o código interno como código de barras e também o define como o código principal do produto.

Um produto pode possuir mais de um código de barras cadastrado. Quando houver vários códigos, um deles pode ser definido como principal.

Depois de selecionar a opção de replicação, defina os produtos que receberão a configuração.

[INSERIR IMAGEM — Janela completa, destacando os botões "Fechar", "Somente novos produtos" e "Aplicar".]

As ações disponíveis são:

Fechar: encerra a janela sem aplicar alterações.
Somente novos produtos: mantém a configuração ativa apenas para os produtos cadastrados posteriormente.
Aplicar: executa a replicação também para os produtos já cadastrados.
## Aplicar somente aos novos produtos

Clique em "Somente novos produtos" quando a replicação deverá ocorrer apenas nos próximos produtos cadastrados.

Os produtos já existentes não serão alterados. A partir da configuração, os novos cadastros poderão receber o código interno também como código de barras.

## Aplicar aos produtos já cadastrados

Selecione "Replicar" ou "Replicar e definir como principal" e clique em "Aplicar" para executar a configuração nos produtos já cadastrados.

Durante o procedimento, o sistema apresenta o progresso do processamento.

[INSERIR IMAGEM — Processamento da replicação ou mensagem de conclusão, mostrando o progresso e o resultado da aplicação.]

Ao finalizar, o sistema informa a quantidade de produtos atualizados e a opção utilizada na replicação.

INFORMAÇÃO: Executar novamente a aplicação não duplica os códigos de barras que já tenham sido replicados.

# Conferir o resultado no cadastro do produto

Acesse o módulo "Cadastros", selecione "Produtos" e abra o cadastro de um item para conferir o resultado da replicação.

[INSERIR IMAGEM — Cadastro de um produto, destacando o código interno e a lista de códigos de barras.]

No exemplo, o produto possui o código interno "367". Com a replicação aplicada, esse mesmo número também é apresentado na lista de códigos de barras do produto.

Dessa forma, o código interno passa a ser utilizado como uma identificação disponível para leitura, mesmo quando o produto não possuir um código de barras próprio cadastrado.

DICA: A configuração é especialmente útil para produtos que não possuem código de barras de fábrica, permitindo utilizar o código interno como identificação para leitura.

# Desativar a replicação

Para interromper a replicação automática nos novos produtos, acesse "Configurações", selecione "Geral" e desmarque "Replicar código interno no código de barras".

ATENÇÃO: Desmarcar a opção não remove os códigos de barras que já foram replicados para os produtos existentes. A alteração apenas interrompe a replicação automática para os novos produtos cadastrados.

# Resultado da configuração

Com o recurso configurado, produtos sem código de barras próprio podem utilizar o código interno também como código de barras.

[INSERIR IMAGEM — Comparação ou resultado final, mostrando o código interno replicado na lista de códigos de barras do produto.]

A replicação pode ser aplicada de duas formas: adicionando o código interno como mais um código de barras ou definindo-o também como o código principal. A configuração pode ser utilizada apenas nos novos produtos ou aplicada aos itens já cadastrados, conforme a necessidade da operação.

INFORMAÇÃO: A utilização do código interno como código de barras permite disponibilizar uma identificação para leitura nos produtos que não possuem outro código de barras cadastrado.