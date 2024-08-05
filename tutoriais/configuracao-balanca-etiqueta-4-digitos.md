---
title: Configuração para balança de etiquetas
description: Veja como configurar a geração do arquivo para a balança de etiquetas com o código do produto com 4 dígitos.
published: true
date: 2024-08-05T17:03:16.581Z
tags: produtos, pdv, balanca, etiquetas
editor: markdown
dateCreated: 2024-08-02T20:56:27.246Z
---

# Código do produto cadastrado com 4 dígitos na balança

## Tela do cadastro do produto no estoque

Quando a configuração do produto na balança estiver com **4 dígitos**, no sistema o **código de barras** será formado pelo dígito inicial **2 + 4** dígitos do código do produto.

![0_cad_produto.png](/tutoriais/carga-de-balanca/4_digitos/0_cad_produto.png)

> É possível visualizar o **código do produto** na URL, como indicado na imagem.
{.is-info}

## Configuração do sistema para a leitura da etiqueta

Esta configuração permite que o sistema leia o código de barras com informações do peso ou preço dos produtos impressos em uma etiqueta pela balança.

Para configurar a forma pela qual será feita a leitura do código de barras pelo módulo de frente de caixa, acesse o menu **movimentações > PDV** e no lado direito, acesse as **configurações do PDV**, dentro das configurações do PDV, localize o quadro **códigos de barras com informação**.

![Configurações do PDV](/tutoriais/carga-de-balanca/configuracoes_pdv_geral.png)

Nas configurações para leitura do código de barras informamos:

**Tipo de informação contida no código**: informe ao sistema se o que está sendo impresso na etiqueta da balança é o **peso** ou o **valor**. Na leitura da etiqueta, quando impresso o **peso** o sistema **multiplica** pelo valor de **cada kg**, quando impresso o **valor** o sistema **calcula a quantidade** do produto que será **vendida**.

![Local onde será impresso o valor](/tutoriais/carga-de-balanca/4_digitos/1_local_onde_impresso_valor.png)

> Algumas balanças podem utilizar o **truncamento** no momento da impressão da etiqueta. Solicite que o técnico da balança configure como **arredondamento**.
{.is-info}

**Dígitos iniciais para identificar peso ou valor**: normalmente o padrão utilizado é o **2**, pois é dígito identificador de produtos pesáveis. Se necessário, configure esta informação na balança também.

![Dígito 2](/tutoriais/carga-de-balanca/4_digitos/2_digito_2.png)

**Posição onde inicia a informação de peso ou valor**: campo para informar em qual posição do código de barras o sistema começará a ler a informação do peso do produto ou do preço de venda.
Como nosso exemplo se refere a um código de produto de **4 dígitos, a posição é 6**.

![Onde inicia  o peso/valor](/tutoriais/carga-de-balanca/4_digitos/3_inicia_peso_valor.png)

**Tamanho da informação de peso ou valor**: neste campo é possível informar qual o **tamanho** da informação do peso do produto ou do preço de venda. No exemplo dessa etiqueta o valor informado é de **475** para **peso** ou **valor**, levando em consideração, que o último dígito do código de barras é sempre o dígito verificador e não deve ser contado no tamanho da informação, cadastramos para esse tamanho o número **7**.

![Tamanho da informação de peso](/tutoriais/carga-de-balanca/4_digitos/4_tamanho_informacao_peso.png)

**Quantidade de casas decimais no peso ou valor**: campo para informar a quantidade de casas decimais usada na informação do peso do produto ou do preço de venda. Para **valor**, a informação a ser cadastrada é **2**, sendo assim, a nossa etiqueta é de **R$ 4,75**. Podemos nesta configuração, ter na etiqueta um preço máximo de **R$ 999,99**.

![Configuração para preço](/tutoriais/carga-de-balanca/4_digitos/5_posicao_casas_preco.png)

Caso no código de barras, estivesse contido o peso do produto ao invés do preço de venda, a quantidade de casas decimais seria **3**, e o peso máximo seria de **99,999 kg**.

![Aumento de casas decimais](/tutoriais/carga-de-balanca/4_digitos/6_ex_aumento_casas_decimais.png)

> O último dígito do código corresponde a um dígito verificador gerado pela balança.
{.is-warning}

![Último dígito](/tutoriais/carga-de-balanca/4_digitos/7_ultimo_codigo.png)

## Finalizando a configuração e realizando testes

Para saber se sua configuração está correta, ao finalizar a configuração dos valores, realize a leitura de sua etiqueta no PDV:

Leitura do produto configurado para peso:

![Lançamento do produto](/tutoriais/carga-de-balanca/4_digitos/8_lancamento.png)

Produto na lista com o peso e valor a ser vendido:

![9_produto_na_lista.png](/tutoriais/carga-de-balanca/4_digitos/9_produto_na_lista.png)

> Se necessário realize ajustes nos campos para a correta leitura, agora que conhece o procedimento. Caso a leitura apresentada seja correta, pode iniciar suas vendas.
{.is-info}

