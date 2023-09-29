---
title: Rejeição 527: Operação de exportação com informação de ICMS incompatível
description: Veja como solucionar a rejeição 527: Operação de exportação com informação de ICMS incompatível no Gweb.
published: true
date: 2023-09-29T18:08:18.866Z
tags: tutoriais, rejeição
editor: markdown
dateCreated: 2023-09-29T18:08:18.866Z
---


# Rejeição 527: Operação de exportação com informação de ICMS incompatível

## Motivo

Essa **rejeição** ocorre quando é feita uma **NF-e de exportação de mercadorias** e o **CST** dos itens é diferente de **"41 - Não tributada"** ou o **CSOSN** é diferente de **"300 - Imune"**.

![Mensagem da rejeição](/tutoriais/rejeicoes/527/msg_rej_527.png)

## Solução

Nestes casos, é necessário alterar o **ST** dos produtos **dentro da NF-e**. Para **alterar** clique na **linha** de um **produto**, e acesse a aba de **tributos**.
Se o cliente for do **simples nacional**, selecione no **CSOSN** a opção **"300 - Imune"**, caso contrário, no **CST** selecione a opção **"41 - Não tributada"**.

![Alterar tributos direto no item](/tutoriais/rejeicoes/527/sol_rej_527.png)

Para facilitar, É possível utilizar a ação **Alterar Atributos**, dentro das opções dos **produtos**, como destacado abaixo:

![Alterar atributos dos produtos](/tutoriais/rejeicoes/527/sol_rej_527_1.png)

Na janela apresentada em tela, **selecione** o campo a ser alterado em todos os itens da nota.
Se o cliente for do **simples nacional**, selecione **CSOSN ICMS** e marque o CSOSN **"300 - Imune"**, caso contrário, selecione **CST ICMS** e marque o CST **"41 - Não tributada"**.

![Alteração de CST/CSOSN dos produtos dentro da nota fiscal](/tutoriais/rejeicoes/527/sol_rej_527_2.png)

Após **selecionar** o correto, clique em <span class="mat-button">CONFIRMAR</span> para aplicar o **CST** ou **CSOSN** em **todos os produtos** na nota fiscal.
