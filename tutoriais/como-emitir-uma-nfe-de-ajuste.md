---
title: Tutorial: Emitir uma nota de ajuste
description: Passo-a-passo para emitir uma NF-e de ajuste no GWEB
published: false
date: 2024-02-09T17:12:38.836Z
tags: tutoriais, nf-e, ajuste
editor: markdown
dateCreated: 2024-02-09T16:55:45.838Z
---

# Nota fiscal complementar
Listamos neste tópico **como emitir NF-e de ajuste** para operações sem circulação de produtos, por exemplo, o balanço da empresa no fim do mês não fecha, falta ou sobra uma quantia, neste caso, pode ser feita uma** NF-e de Ajuste** do valor que faltou ou que sobrou.

*Geralmente, a nota de ajuste é emitida no período de análise da contabilidade para gerar as guias de pagamento dos impostos.*

# Situações que demandam a emissão da NF-e de Ajuste

1. Quando a nota fiscal não pode ser cancelada dentro do prazo e não houve circulação das mercadorias (neste caso deve ser referenciada a nota de origem);
2. Ressarcimento de ICMS: quando o ICMS retido está maior, então ocorre uma compensação destes valores de impostos;
3. Transferência de crédito acumulado de ICMS: quando a empresa tem créditos de ICMS acumulados e precisa transferir para matriz/filial ou empresas diferentes;
4. Restituição de ICMS ST: quando não ocorre a operação ou prestação de serviço que iria gerar a compensação do imposto.

# Como emitir uma nota fiscal de ajuste no GWEB?

No GWEB existem **duas** formas de emitir a **nota fiscal de ajuste**: manualmente adicionando a **chave de acesso**, **destinatário** e **produtos**, ou gerando a **nota de ajuste** a partir de uma nota já existente no sistema, **importando automaticamente** os dados citados anteriormente.
Mas antes, é necessário cadastrar a operação de ajuste.

## Cadastrando a operação de ajuste
O primeiro passo é o cadastro da **operação de ajuste**. Acesse o menu **cadastros >> operações** e no canto inferior direito clique no botão (<span class="mdi mdi-plus"></span>).

No formulário, preencha o nome da operação como for necessário e marque a caixa **operação de ajuste**.

![Cadastro da operação](/tutoriais/nfe-ajuste/cadastro_operacao.png)

Após preencher os dados da operação de ajuste, clique em <span class="mat-button mat-accent">SALVAR</span> para gravar as informações.


## Emitindo a nota fiscal complementar a partir de uma nota do sistema

Acesse o menu **movimentações >> NF-e**, localize a nota fiscal que deseja complementar, clique no menu (<span class="mdi mdi-dots-vertical"></span>) e selecione a opção **Complementar (NF-e de complemento)**.

![NF-e de complemento a partir de outra NF-e](/tutoriais/nfe-complemento/complemento_a_partir_nf-e.png)

Ao selecionar a opção de **Complementar (NF-e de complemento)**, o sistema irá **importar** os **produtos** e o **cliente** da NF-e original para uma nova nota de complemento, **pulando** o primeiro passo, que é vinculação da **chave de acesso da NF-e a ser referenciada**.

O segundo passo é **marcar os produtos que deseja complementar** e ao selecioná-los, clique em <span class="mat-button mat-accent">PRÓXIMO</span>
![Passo 2 - Marcar produtos](/tutoriais/nfe-complemento/passo_2_selecionar_produtos.png)

O terceiro passo é selecionar a **natureza de operação de complemento** que foi cadastrada e **informar os dados a serem complementados**. Clique no produto para exibir os campos disponíveis.

![Passo 3 - Operação e valores a serem complementados](/tutoriais/nfe-complemento/passo_3_operacao_valores.png)

O quarto e últim passo é **revisar** os dados que foram **alterados** para cada um dos **produtos**. Caso deseje apenas **salvar para verificar os valores gerados no XML ou DANFe**, clique em <span class="mat-button mat-accent">SALVAR</span>. Se **deseja enviar a nota fiscal para a SEFAZ**, clique em <span class="mat-button">SALVAR E TRANSMITIR</span>.

![Passo 4 - Revisar e salvar ou transmitir](/tutoriais/nfe-complemento/passo_4_revisar_transmitir.png)

## Emitindo a nota fiscal complementar a partir de uma chave de acesso

Acesse o menu de **movimentações >> NF-e**, localize e clique no botão <span class="mdi mdi-plus"></span> ao lado de **NF-e complementar** no menu ao lado direito.

No formulário **cole ou digite os 44 dígitos da chave de acesso** da **nota fiscal que deseja complementar** e ao finalizar clique em <span class="mat-button mat-accent">PRÓXIMO</span>.

![Informar chave de acesso](/tutoriais/nfe-complemento/informar_chave_acesso.png)

Como a nota fiscal **não** está no sistema, **adicione os produtos deseja complementar** na nota fiscal original, para isso, clique no botão (<span class="mdi mdi-barcode"></span>) e informe os produtos que deseja complementar. Ao finalizar, clique em <span class="mat-button mat-accent">PRÓXIMO</span>.

![Adicionar produtos](/tutoriais/nfe-complemento/adicionar_produtos.png)

Nos casos em que a **nota fiscal complementar está sendo feita a partir de uma chave de acesso**, é necessário **informar o cliente** manualmente, este campo fica logo abaixo da **operação**, que **também deve ser preenchida.**

Por fim, é possível **informar os dados que deseja complementar** em cada um dos produtos, **clique** na linha do produto para **expandir as informações e exibir os campos disponíveis**. Ao finalizar, clique em <span class="mat-button mat-accent">PRÓXIMO</span>.

![Adicionar cliente e operação](/tutoriais/nfe-complemento/adicionar_cliente_operacao.png)

O quarto e último passo é **revisar** os dados que foram **alterados** para cada um dos **produtos**. Caso deseje apenas **salvar para verificar os valores gerados no XML ou DANFe**, clique em <span class="mat-button mat-accent">SALVAR</span>. Se **deseja enviar a nota fiscal para a SEFAZ**, clique em <span class="mat-button">SALVAR E TRANSMITIR</span>.

![Passo 4 - Revisar e salvar ou transmitir](/tutoriais/nfe-complemento/passo_4_revisar_transmitir.png)

