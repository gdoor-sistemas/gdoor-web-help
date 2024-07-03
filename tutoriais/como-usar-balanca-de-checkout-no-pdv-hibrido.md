---
title: Como utilizar a balança de checkout no PDV Híbrido
description: Veja como configurar e utilizar a balança de checkout no PDV Híbrido do GWEB
published: false
date: 2024-07-03T13:46:52.371Z
tags: nfc-e, pdv, pré-venda-gerencial, pdv híbrido, balanca, checkout
editor: markdown
dateCreated: 2024-07-03T12:27:52.113Z
---

# Introdução
Na integração do **PDV Híbrido** do GWEB com as **balanças de checkout**, é possível receber o peso da balança para vender o produto na quantidade correta, sem necessidade de informar manualmente este peso.

# Download e instalação do PDV Híbrido
Para efetuar o **download e instalação** do **PDV Híbrido** do **GWEB**, acesso nosso [passo a passo](https://help.gdoorweb.com.br/pt-br/movimentos/pdv#pdv-h%C3%ADbrido).

> É necessário realizar a instalação e configuração da série offline do **PDV Híbrido** para conseguir utilizar a balança de checkout e o PDV.
{.is-info}


# Configuração da balança de checkout
Com o **PDV Híbrido** instalado e configurado, acesse o menu de **configuração local**, localizado no lado direito.

![Acessar as configurações locais](/tutoriais/balanca-checkout/1_acessar_configuracao.png)

Dentro do menu de configuração local, marque a caixa de **configurar balança de checkout** que será liberado os campos para preenchimento.

![Campos da configuração](/tutoriais/balanca-checkout/2_configuracoes.png)

> Os dados apresentados na imagem são meramente ilustrativos. Confirme essas configurações com o fornecedor do equipamento ou verifique no manual da balança.
{.is-info}

Os campos disponíveis são:

- **Fabricante da balança:** fabricante da balança que será utilizada;
- **Porta:** porta COM em que a balança está conectada no computador;
- **Bits segundo:** velocidade da comunicação (vide manual da balança);
- **Bits parada:** bits de parada (vide manual de balança);
- **Bits dados:** bits de dados (vide manual de balança);
- **Paridade:** configure como none no sistema e na balança;
- **Decimais:** precisão numérica usada no peso. Informe o mesmo valor na configuração da balança;
- **Monitorar balança:** com a opção marcada, no momento que lançar um produto pesável cadastrado com a unidade de medida “KG” para a venda, o sistema busca a informação automaticamente na balança. Já com a opção desmarcada, ao lançar um produto pesável, coloque o peso na balança e clique no botão “pesar” para que seja registrado no sistema.
- **Testar:** botão utilizado para efetuar um teste rápido de comunicação com a balança.
- **Acionar balança automaticamente:** com essa opção marcada, todos os produtos cadastrados com a unidade de medida “KG” para a venda, acionarão a balança para buscar o peso.
- A**ceitar peso automaticamente:** Aplica o peso automaticamente quando ele é recebido da balança.

> OBS: Caso a opção **Acionar balança automaticamente** esteja **desmarcada**, o usuário precisa utilizar a tecla <kbd>INSERT</kbd> para acionar a balança
{.is-info}

Após a configuração, a **balança de checkout** estará pronta para uso no PDV.

# Usando a balança de checkout no PDV
Para utilizar a balança de checkout no PDV, basta lançar um produto pesado que o sistema irá capturar o peso da balança, ou ainda utilizar a tecla <kbd>INSERT</kbd> para capturar o peso e depois lançar o produto correspondente.

A tela para captura de peso que aparecerá é a seguinte:

![Capturar peso](/tutoriais/balanca-checkout/3_capturar_peso.png)

> Dependendo da configuração feita anteriormente, o funcionamento de **chamar a balança**, **capturar o peso** e **confirmar** pode variar.
{.is-info}


