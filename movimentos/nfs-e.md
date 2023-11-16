---
title: Nota Fiscal de Serviço Eletrônica NFS-e
description: Veja como você pode cadastrar as Notas Fiscais de Serviço eletrônicas
published: true
date: 2023-11-16T17:56:42.913Z
tags: 
editor: markdown
dateCreated: 2023-02-03T17:12:38.965Z
---

# Introdução

O módulo de NFS-e é responsável pelo lançamento das notas dos serviços efetuados pela empresa, bem como as configurações para a emissão destes documentos junto à prefeitura do município. 

Antes de iniciar a utilização do módulo, entre em contato com a Gdoor para verificar se a sua cidade está homologada para a emissão dos documentos de forma eletrônica.

# Lista

Ao acessar o módulo **movimentações » NFS-e**, você visualiza a **lista** de notas de serviços. Pode [cadastrar nota de serviço](https://help.gdoorweb.com.br/pt-br/movimentos/nfs-e#cadastrar-nota-de-serviço) e fazer uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/nfs-e#buscar) para localizar os dados que você precisa: 

![Lista de NFS-e](/movimentos/nfse/lista.png)

## Buscar

Para localizar uma nota de serviço, **digite a informação no campo de busca** no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>).

 
![Campo de busca](/movimentos/nfse/busca.png)
 
> O que você digitar será buscado entre as seguintes informações das notas de serviço:  
> **Campos numéricos**: número da nota;  
> **Campos textuais**: razão social e nome fantasia do fornecedor.
{.is-success .gw .gw-tip}


## Cadastrar nota de serviço

Para cadastrar uma nota de serviço, clique no botão de adição (<em class="mdi mdi-plus"></em>) no canto direito inferior da [tela inicial](https://help.gdoorweb.com.br/pt-br/movimentos/nfs-e#lista) ou no botão de adição (<em class="mdi mdi-plus"></em>) ao lado do acesso lista.
A tela "**nova nota de serviço**" será exibida.

---
- **Cabeçalho**
Insira os dados referente ao serviço prestado no **cabeçalho da nota**.

![Cabeçalho da NFS-e](/movimentos/nfse/cabecalho.png)

As informações para o lançamento são as seguintes:

-   **Emissão**: data de emissão do documento;
-   **Hora**: hora de emissão do documento;
-   **Código da obra**: utilizado por empresas da construção civil;
-   **Código ART**: utilizado por empresas da construção civil;
-   **Operação**: selecionar a tributação de acordo com a cidade em que o serviço foi prestado;
-   **Pagador retenção ISSQN**: informar o responsável pela retenção do ISSQN.

---
- **Tomador**
Busque o tomador pelo **CNPJ, nome, código, e-mail** ou **telefone**. Caso o tomador não esteja cadastrado, clique no botão (<em class="mdi mdi-plus"></em>) para cadastrar.

![Tomador da NFS-e](/movimentos/nfse/tomador.png)

---
- **Serviços**
Para buscar **serviços** utilize a tecla <kbd>Insert</kbd> do teclado, ou clique em **adicionar serviço**. Informe a **quantidade**, **valor unitário** e em seguida clique em <span class="mat-button mdi "> confirmar</span>.

![Tela inicial de lançamento do serviço](/movimentos/nfse/servicos.png)
![Lançamento do serviço](/movimentos/nfse/lanc_serv.png)

Selecionando o serviço prestado, estará disponível a guia **tributos**, onde devem ser informados os dados dos tributos do serviço selecionado:
![Lançamento dos tributos do serviço](/movimentos/nfse/lanc_trib_serv.png)

---

- **Intermediador**
Preencha as informações do [intermediador](https://help.gdoorweb.com.br/pt-br/cadastros/pessoas#intermediador) se necessário.

![Intermediador](/movimentos/nfse/intermediador.png)

- **Totais da NFS-e**
Apresentação dos valores totais dos serviços da nota.

![Totais da NFS-e](/movimentos/nfse/totais_nfse.png)

---
- **Pagamentos**
Nesta seção, há duas opções:

**<em class="mdi mdi-checkbox-blank-outline"></em> Não informar pagamentos**: sem geração de histórico financeiro;

![Pagamentos](/movimentos/nfse/pagamentos.png)

**Adicionar pagamento**: geração da [receita](/financeiro/receitas) no financeiro (módulo adicional).

![Seleção de pagamentos](/movimentos/nfse/pagamento2.png)

---

# Configurações

Nesta seção é possível determinar as configurações para a emissão da NFS-e. Ao alterar cada seção, **você precisará clicar em <span class="mat-button mdi "> salvar</span> individualmente**. Veja abaixo os detalhes de cada seção/configuração.

> Alguns dados informados neste local, dependem do auxílio da contabilidade ou diretamente com o suporte do webservice, por intermédio da prefeitura.
{.is-warning}

## Certificado digital

Em algumas cidades o certificado digital é exigido para a emissão, para configurar o certificado digital para emissão de NFS-e, acesse as [Configurações gerais](/configuracoes/geral) do GWEB.


## Ambiente da NFS-e

Nesta seção você configura dados para a geração da NFS-e. Abaixo, veja detalhes de cada configuração.

![Configuração do ambiente da NFS-e](/movimentos/nfse/amb_conf_nfs-e.png)


Série da NFS-e{.subtitle}

Série de emissão da NFS-e. Esta informação pode ser obtida com sua contabilidade.

Ambiente de emissão{.subtitle}

A NFS-e é enviada somente em ambiente de **produção**, por este motivo a seleção não está disponível.

Nº da próxima NFS-e{.subtitle}

Apenas informe um número neste campo se a empresa já emitia NFS-e por outro sistema, assim você poderá continuar a numeração de onde parou.

## Configurações gerais

![Configurações gerais da NFS-e](/movimentos/nfse/conf_ger_nfs-e.png)

Regime especial {.subtitle}

Preencha esta informação com o auxílio da contabilidade, quando a empresa possuir um **regime especial de tributação**.

Incentivador cultural{.subtitle}

Em algumas cidades, existem determinados benefícios para incentivadores culturais, logo, marque a opção caso a empresa se enquadre na condição.

Enviar e-mail automaticamente{.subtitle}

Marque a opção caso a prefeitura permita o envio automático do e-mail.

> Em algumas cidades o envio do e-mail não dependerá do Gweb, a própria prefeitura efetuará o envio quando a NFS-e for autorizada.
{.is-info}

## Configurações da prefeitura

Configuração necessária dependendo do webservice. Estes dados são fornecidos somente pela própria prefeitura.

![Configurações de preferência da NFS-e](/movimentos/nfse/conf_pref_nfse.png)

## Dados da integração

Se referem a integração entre a Gdoor e a prefeitura, não são editáveis.

![Dados da integração da NFS-e](/movimentos/nfse/integracao_conf_nfs-e.png)

# Operações

Disponibilizamos o cadastro de algumas **naturezas de operação** padrão. Caso sua contabilidade solicite que deve utilizar uma natureza de operação diferente do cadastro, na parte superior da janela, informe:
- **Código**
- **Descrição**
- **Tipo de tributação**

![Naturezas de operação](/movimentos/nfse/operacoes_serv.png)
