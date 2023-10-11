---
title: Rejeição 383: Item com CSOSN indevido
description: Veja como solucionar a rejeição 383: Item com CSOSN indevido no Gweb.
published: false
date: 2023-10-11T13:21:51.147Z
tags: tutorial, rejeição
editor: markdown
dateCreated: 2023-10-11T12:14:57.056Z
---

# Rejeição 383: Item com CSOSN indevido

## Motivo
Essa mensagem ocorre quando o estado não aceita o uso do **CSOSN (Código de Situação da Operação – Simples Nacional)** diferente dos códigos informados na “**solução**” apresentada abaixo.

![Mensagem da rejeição](/tutoriais/rejeicoes/383/msg_rej_383.png)

## Solução

Verifique com a **contabilidade** da empresa quais os códigos de **CSOSN** que devem ser utilizados na venda.
Abaixo disponibilizamos uma lista com os códigos aceitos nestes estados:


|CSOSN|Descrição                                                                                |
|:-----:|:--------------------------------------------------------------------------------------|
|**102**  |Tributada pelo Simples Nacional sem permissão de crédito                             |
|**103**  |Isenção do ICMS no Simples Nacional para faixa de receita bruta                      |
|**300**  |Imune                                                                                |
|**400**  |Não tributada pelo Simples Nacional                                                  |
|**500** |ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação|
|**900**  |Outros (a critério da UF)                                                            |

Para fazer a alteração do **CSOSN** do produto, é necessário alterar a [regra de tributação](/configuracoes/impostos/regras-de-tributacao) vinculada a ele. Ela pode ser encontrada dentro do cadastro do [produto](/cadastros/produtos), no menu de **Cadastros >> Produtos**.

Localize o **cadastro do produto** e clique em <span class="mat-button">EDITAR</span>.

![Abrir o cadastro do produto](/tutoriais/rejeicoes/383/sol_1_rej_383.png)

Dentro do **cadastro do produto**, desça até o final da página nas **regras de tributação** vinculadas a ele.
Localize a regra para **consumidor final** que foi aplicada no produto na **NFC-e**.

Neste exemplo é a **regra** chamada **venda para consumo** que devemos alterar.

![Localizar a regra para consumidor](/tutoriais/rejeicoes/383/sol_2_rej_383.png)


Sabendo qual regra deve ser alterada, acesse o menu de **Configurações >>** [**Impostos**](/configuracoes/impostos/regras-de-tributacao) e localize a **regra de tributação**, clique nela para acessar o cadastro.

![Editar a regra de tributação](/tutoriais/rejeicoes/383/sol_3_rej_383.png)

Dentro do cadastro da regra, na aba número **4 - Impostos**, é necessário alterar o campo **CSOSN** com a informação repassada pela **contabilidade**.

![Alterar o CSOSN dentro da regra](/tutoriais/rejeicoes/383/sol_4_rej_383.png)

Após alterar o **CSOSN**, clique em <span class="mat-button mat-accent">SALVAR</span> para gravar os dados da regra de tributação.

> Após o ajuste do **CSOSN** é necessário **remover** e **inserir novamente** o item na **NFC-e** para **aplicar** as alterações feitas na **regra de tributação**.
{.is-warning}


