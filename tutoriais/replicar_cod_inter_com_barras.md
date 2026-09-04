---
title: Replicar código interno no código de barras
description: 
published: false
date: 2026-09-04T20:09:56.034Z
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

Acesse o módulo **"Configurações"**, selecione **"Geral"** e localize o bloco **"Gestão de estoque"**. 

Marque a opção **"Replicar código interno no código de barras"**.

![rep1.png](/config/gerais/rep1.png) 


Será apresentada uma janela para definir como a configuração deverá ser aplicada aos produtos.

![rep2.png](/config/gerais/rep2.png)

Selecione uma das opções disponíveis:

- **Replicar:** adiciona o código interno como mais um código de barras cadastrado para o produto.
- **Replicar e definir como principal:** adiciona o código interno como código de barras e também o define como o código principal do produto.
> Um produto pode possuir mais de um código de barras cadastrado. Quando houver vários códigos, um deles pode ser definido como principal. {.is-info}
- **Somente novos produtos:** mantém a configuração ativa apenas para os produtos cadastrados posteriormente.
- **Aplicar:** executa a replicação também para os produtos já cadastrados.
- **Fechar:** encerra a janela sem aplicar alterações.


## Aplicar somente aos novos produtos

Clique em **"Somente novos produtos"** quando a replicação deverá ocorrer apenas nos próximos produtos cadastrados.

> Os produtos já existentes não serão alterados. A partir da configuração, os novos cadastros poderão receber o código interno também como código de barras. {.is-warning}

![rep3.png](/config/gerais/rep3.png)

## Aplicar aos produtos já cadastrados

Selecione **"Replicar"** ou **"Replicar e definir como principal"** e clique em **"Aplicar"** para executar a configuração nos produtos já cadastrados.

![rep4.png](/config/gerais/rep4.png)

Ao finalizar, o sistema informa uma mensagem sobre os códigos replicados.

![rep7.png](/config/gerais/rep7.png)


## Conferir o resultado no cadastro do produto

Acesse o módulo **"Cadastros"**, selecione **"Produtos"** e abra o cadastro de um item para conferir o resultado da replicação.

No exemplo, o produto possui o código interno **"1"**. Com a replicação aplicada, esse mesmo número também é apresentado na lista de códigos de barras do produto. 

![rep5.png](/config/gerais/rep5.png)

Dessa forma, o código interno passa a ser utilizado como uma identificação disponível para leitura, mesmo quando o produto não possuir um código de barras próprio cadastrado.

> A configuração é especialmente útil para produtos que não possuem código de barras de fábrica, permitindo utilizar o código interno como identificação para leitura. {.is-success}

![rep6.png](/config/gerais/rep6.png)

# Desativar a replicação

Para interromper a replicação automática nos novos produtos, acesse **"Configurações"**, selecione **"Geral"** e desmarque **"Replicar código interno no código de barras"**.

>  Desmarcar a opção não remove os códigos de barras que já foram replicados para os produtos existentes. A alteração apenas interrompe a replicação automática para os novos produtos cadastrados. {.is-warning}

![rep8.png](/config/gerais/rep8.png)
