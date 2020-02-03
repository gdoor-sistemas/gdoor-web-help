---
title: Configurar impostos
description: Veja como funcionam os impostos no GDOOR WEB
published: true
date: 2020-02-03T16:35:04.231Z
tags: tutorial, como fazer, impostos, tributos, icms, icms st, ipi, pis, cofins, ncm, cest
---

# Configuração impostos

Vamos mostrar aqui como criar uma regra simples, para mais detalhes sobre a configuração de impostos, veja [este tópico](/configuracoes/impostos). 

A configuração de impostos pode ser um processo muito trabalhoso, principalmente quando a empresa possui muitas classes de mercadorias e comercializa para vários estados do país. O GDOOR WEB possui um assistente para configuração de impostos que ajuda você a criar regras de tributação de maneira simples, passo-a-passo.  

Acesse no menu principal **Configurações** &raquo; **Impostos** para ter acesso ao módulo:

![Acesso ao módulo de configuração impostos](/tutoriais/config-impostos/acessar-config-imposto.png)

O primeiro passo é a **Identificação**. Você informa um nome para a regra, o tipo de operação a qual ela se aplica e uma descrição detalhada para ajudar você a identificar em meio a várias operações. O próximo passo é a definição de **Vínculos**, onde você informa como vai relacionar a regra aos produtos, que pode ser via NCM, CEST ou pode vincular a regra diretamente ao produto. Depois você informa o **Tipo de imposto** que vai configurar para esta regra, bem como os **Impostos** propriamente ditos. Ao final, você pode fazer uma revisão geral do que configurou e, se necessário, fazer ajustes. Agora vamos criar uma regra de exemplo para entender como fazer, talvez ela não seja para o seu ramo de comércio, mas criar uma regra pode ajudar você a entender como funciona.

Para criar uma nova regra, clique no botão de adição no canto direito inferior da tela. Você será direcionado para a tela do assistente. Na identificação, informe o nome **Tributação GLP**, a operação **Venda para consumidor final** e a descrição **Venda de gás para consumidor final**. Clique no botão <span class="mat-button mat-accent">Próximo</span> para seguir adiante.

![Identificação da regra](/tutoriais/config-impostos/identificacao.png)

A próxima parte é a do vínculo. Escolha a opção **NCM**, clique no botão <span class=mat-button>Vincular NCM</span>. No diálogo que aparecer, marque a opção **Código único**, digite a NCM **2711.19.10** (*Gás Liquefeito de Petróleo (GLP)*) e clique em <span class=mat-button>Confirmar</span>.

![Definir o tipo de vínculo](/tutoriais/config-impostos/vinculo.png)

![Informar a NCM vinculada](/tutoriais/config-impostos/ncm.png)

> Uma breve explicação: estamos configurando uma tributação para venda de gás, e nossa empresa ficícia vende em vários recipientes diferentes, que estão cadastrados como vários produtos diferentes. Para não precisar vincular em cada um dos produtos, vamos vincular pela NCM. Assim, todo produto que tiver uma NCM que se encaixe nesta regra, será automaticamente vinculado a ela.

Se esta regra for a primeira que você estiver criando, vai entrar em conflito com as que já vieram inicialmente criadas. Mas não se preocupe, é um processo comum. Conforme explicado [neste tópico](/configuracoes/impostos#exceçõ