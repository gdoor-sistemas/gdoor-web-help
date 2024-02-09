---
title: Tutorial: Emitir uma nota de ajuste
description: Passo-a-passo para emitir uma NF-e de ajuste no GWEB
published: false
date: 2024-02-09T19:32:13.871Z
tags: tutoriais, nf-e, ajuste
editor: markdown
dateCreated: 2024-02-09T16:55:45.838Z
---

# Nota fiscal de ajuste
Listamos neste tópico **como emitir NF-e de ajuste** para operações sem circulação de produtos, por exemplo, o balanço da empresa no fim do mês não fecha, falta ou sobra uma quantia, neste caso, pode ser feita uma** NF-e de Ajuste** do valor que faltou ou que sobrou.

*Geralmente, a nota de ajuste é emitida no período de análise da contabilidade para gerar as guias de pagamento dos impostos.*

# Situações que demandam a emissão da NF-e de Ajuste

Algumas das situações que contemplam a emissão da nota de ajuste são:

1. Quando a nota fiscal não pode ser cancelada dentro do prazo e não houve circulação das mercadorias (neste caso deve ser referenciada a nota de origem);
2. Ressarcimento de ICMS: quando o ICMS retido está maior, então ocorre uma compensação destes valores de impostos;
3. Transferência de crédito acumulado de ICMS: quando a empresa tem créditos de ICMS acumulados e precisa transferir para matriz/filial ou empresas diferentes;
4. Restituição de ICMS ST: quando não ocorre a operação ou prestação de serviço que iria gerar a compensação do imposto.

# Como emitir uma nota fiscal de ajuste no GWEB?

No GWEB existem **três** formas de emitir a **nota fiscal de ajuste**: manualmente adicionando a **chave de acesso**, **destinatário** e **produtos**, gerando a **nota de ajuste** a partir de uma nota já existente no sistema, **importando automaticamente** os dados citados anteriormente ou ainda gerar uma nota fiscal de **ajuste sem NF-e (sem vincular nenhuma chave de acesso)**.

Mas antes, é necessário cadastrar a operação de ajuste.

## Cadastrando a operação de ajuste
O primeiro passo é o cadastro da **operação de ajuste**. Acesse o menu **cadastros >> operações** e no canto inferior direito clique no botão (<span class="mdi mdi-plus"></span>).

No formulário, preencha o nome da operação como for necessário e marque a caixa **operação de ajuste**. Também é necessário marcar **entrada** ou **saída** conforme a necessidade da operação.

![Cadastro da operação](/tutoriais/nfe-ajuste/cadastro_operacao.png)

Após preencher os dados da operação de ajuste, clique em <span class="mat-button mat-accent">SALVAR</span> para gravar as informações.

## Emitindo a nota fiscal de ajuste a partir de uma nota do sistema

Acesse o menu **movimentações >> NF-e**, localize a nota fiscal que deseja ajustar, clique no menu (<span class="mdi mdi-dots-vertical"></span>) e selecione a opção **Ajustar (NF-e de ajuste)**.

![Ajustar (NF-e de ajuste)](/tutoriais/nfe-ajuste/gerar_ajuste_na_nfe.png)

Ao selecionar a opção de **Ajustar (NF-e de ajuste)**, o sistema irá **importar** os **produtos** e o **cliente** da NF-e original para uma nova nota de ajuste, **pulando** o primeiro passo, que é vinculação da **chave de acesso da NF-e a ser referenciada**.

O segundo passo é selecionar a operação de ajuste e **marcar os produtos que deseja ajustar**, ao finalizar, clique em <span class="mat-button mat-accent">PRÓXIMO</span>

![Selecionar operação e tributos](/tutoriais/nfe-ajuste/passo_2_selecionar_operacao_e_produtos.png)

O terceiro passo é **informar os dados a serem ajustados**. Clique no produto para expandir e exibir os campos disponíveis. Clique em <span class="mat-button mat-accent">PRÓXIMO</span> após preencher as informações que deseja ajustar.

![Informar dados de ajuste](/tutoriais/nfe-ajuste/passo_3_informar_ajuste.png)

O quarto e último passo é **revisar** os dados que foram **alterados** para cada um dos **produtos**. Caso deseje apenas **salvar para verificar os valores gerados no XML ou DANFe**, clique em <span class="mat-button mat-accent">SALVAR</span>. Se **deseja enviar a nota fiscal para a SEFAZ**, clique em <span class="mat-button">SALVAR E TRANSMITIR</span>.

![Revisar e finalizar nota de ajuste](/tutoriais/nfe-ajuste/passo_4_revisar.png)

## Emitindo a nota fiscal de ajuste a partir de uma chave de acesso

Acesse o menu de **movimentações >> NF-e**, localize e clique no botão <span class="mdi mdi-plus"></span> ao lado de **NF-e de ajuste** no menu ao lado direito.

No formulário, no primeiro passo **cole ou digite os 44 dígitos da chave de acesso** da **nota fiscal que deseja ajustar** e ao finalizar clique em <span class="mat-button mat-accent">PRÓXIMO</span>.

![Informar a chave de acesso](/tutoriais/nfe-ajuste/manual_passo_1_informar_chave.png)

O segundo passo é selecionar a **operação** e **adicionar produtos que serão ajustados** através do botão laranja (<span class="mdi mdi-barcode"></span>). Ao finalizar, clique em <span class="mat-button mat-accent">PRÓXIMO</span>.

![Selecionar operação e produtos](/tutoriais/nfe-ajuste/manual_passo_2_operação_produtos.png)

O terceiro passo é **informar o participante** da nota de ajuste e os **valores que serão ajustados em cada produto**, para isso clique na linha do produto para **expandir e exibir os campos disponíveis**.

![Informar participante e valores do ajuste](/tutoriais/nfe-ajuste/manual_passo_3_participante_valores_ajuste.png)

O quarto e último passo é **revisar** os dados que foram **alterados** para cada um dos **produtos**. Caso deseje apenas **salvar para verificar os valores gerados no XML ou DANFe**, clique em <span class="mat-button mat-accent">SALVAR</span>. Se **deseja enviar a nota fiscal para a SEFAZ**, clique em <span class="mat-button">SALVAR E TRANSMITIR</span>.

![Revisar e transmitir](/tutoriais/nfe-ajuste/manual_passo_4_revisar.png)

## Emitindo a nota fiscal de ajuste sem NF-e vinculada

Acesse o menu de **movimentações >> NF-e**, localize e clique no botão <span class="mdi mdi-plus"></span> ao lado de **NF-e de ajuste** no menu ao lado direito.

No formulário, no primeiro passo, clique na opção <span class="mat-button">AJUSTE SEM NF-E</span>

![Ajuste sem NF-e](/tutoriais/nfe-ajuste/semnfe_passo_1.png)

O segundo passo é selecionar a **operação de ajuste** cadastrada anteriormente, após selecionar, clique em <span class="mat-button mat-accent">PRÓXIMO</span>.

![Operação](/tutoriais/nfe-ajuste/semnfe_passo_2_ajustar.png)

O terceiro passo é **informar o participante** da nota de ajuste e os **valores da nota de ajuste no produto**, para isso clique na linha do produto para **expandir e exibir os campos disponíveis**.

> Como a **NF-e de ajuste não possui NF-e vinculada**, o **"produto"** ficará com o **nome da natureza de operação** cadastrada, neste exemplo é apenas **"Ajuste"**.
{.is-info}

![Participante e dados de ajuste](/tutoriais/nfe-ajuste/semnfe_passo_3_participante_dados.png)

O quarto e último passo é **revisar** os dados que foram **alterados** para cada um dos **produtos**. Caso deseje apenas **salvar para verificar os valores gerados no XML ou DANFe**, clique em <span class="mat-button mat-accent">SALVAR</span>. Se **deseja enviar a nota fiscal para a SEFAZ**, clique em <span class="mat-button">SALVAR E TRANSMITIR</span>.

![Revisão e transmissão](/tutoriais/nfe-ajuste/semnfe_passo_4_revisão.png)
