---
title: Nota Fiscal de Serviço Eletrônica NFS-e
description: Veja como você pode cadastrar as notas de serviço eletrônica
published: false
date: 2023-02-03T20:21:53.987Z
tags: 
editor: markdown
dateCreated: 2023-02-03T17:12:38.965Z
---

# Introdução

O módulo de NFS-e é responsável pelo lançamento das notas dos serviços praticados pela empresa, bem como as configurações para a emissão destes documentos junto a prefeitura do seu município. 

Antes de iniciar a utilização do módulo, entre em contato com a Gdoor para verificar se a sua cidade está homologada para a emissão dos documentos de forma eletrônica.

# Lista

Ao acessar o módulo **movimentações » nfs-e**, você visualiza a **lista** de notas de serviços. Pode [cadastrar nota de serviço](https://help.gdoorweb.com.br/pt-br/movimentos/nfs-e#cadastrar-nota-de-serviço) e fazer uma [busca](https://help.gdoorweb.com.br/pt-br/movimentos/nfs-e#buscar) para localizar os dados que você precisa: 

![lista.png](/movimentos/nfse/lista.png)

## Buscar

Para localizar uma nota de serviço, **digite a informação no campo de busca** no quadro indicado na imagem abaixo. Para limpar a busca rapidamente, clique no botão "**limpar a busca**" (<em class="mdi mdi-close"></em>).

 
![busca.png](/movimentos/nfse/busca.png)
 
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

![cabecalho.png](/movimentos/nfse/cabecalho.png)

As informações para o lançamento são as seguintes:

-   **Emissão**: data de emissão do documento;
-   **Hora**: hora de emissão do documento;
-   **Código da obra**: utilizado por empresas da construção civíl;
-   **Código ART**: utilizado por empresas da construção civíl;
-   **Operação**: selecionar a tributação de acordo com a cidade em que o serviço foi prestado;
-   **Pagador retenção ISSQN**: informar o responsável pela retenção do ISSQN;

---
- **Tomador**
Busque o tomador pelo **CNPJ, nome, código, e-mail** ou **telefone**. Caso o tomador não esteja cadastrado, clique no botão (<em class="mdi mdi-plus"></em>) para cadastrar.

![tomador.png](/movimentos/nfse/tomador.png)

---
- **Serviços**
Para buscar **serviços** utilize a tecla <kbd>Insert</kbd> do teclado, ou clique no botão (<em class="mdi mdi-servico"></em>). Informe a **quantidade**, **valor unitário** e em seguida clique em <span class="mat-button mdi "> confirmar</span>.

![servicos.png](/movimentos/nfse/servicos.png)
![lanc_serv.png](/movimentos/nfse/lanc_serv.png)

Selecionando o serviço prestado, estará disponível a guia **tributos**, onde devem ser informados os dados dos tributos do nserviço selecionado:
![lanc_trib_serv.png](/movimentos/nfse/lanc_trib_serv.png)

---

- **Intermediador**
Preencha as informações de intermediador caso a empresa prestadora do serviço seja outra empresa e não a sua.

![intermediador.png](/movimentos/nfse/intermediador.png)


- **Totais da NFS-e**
Apresentação dos valores totais dos serviços da nota.

![totais_nfse.png](/movimentos/nfse/totais_nfse.png)

---
- **Pagamentos**
Nesta seção, há duas opções:

**<em class="mdi mdi-checkbox-blank-outline"></em> Não informar pagamentos**: sem geração de histórico financeiro;

**Adicionar pagamento**: geração da [despesa](/financeiro/despesas) no financeiro.

![pagamentos.png](/movimentos/nfse/pagamentos.png)

---

# Configurações

Nesta seção é possível determinar a [operação padrão](https://help.gdoorweb.com.br/pt-br/movimentos/compras#opera%C3%A7%C3%A3o-padr%C3%A3o) para novas compras e configurações referentes à [Manifestação do Destinatário eletrônica (MD-e)](https://help.gdoorweb.com.br/pt-br/movimentos/compras#manifesta%C3%A7%C3%A3o-eletr%C3%B4nica).

![configuracoes_nfse.png](/movimentos/nfse/configuracoes_nfse.png)


## Certificado digital
Em algumas cidades o certificado digital é exigido para a emissão. Normalmente é utilizado o mesmo certificado digital da nfs-e. 

> O certificado digital deve ser instalado no computador para que fique disponível para a seleção.
{.is-success .gw .gw-tip}

## Ambiente da NFS-e
## Configurações gerais
## Configurações da prefeitura
## Dados da integração


Configure uma operação padrão para novas compras, desta forma não será necessário escolher manualmente a cada nota. Quando for cadastrar uma nova compra, esta será a operação escolhida por padrão.
Após informar, clique em <span class="mat-button mdi "> salvar</span>.

## Manifestação eletrônica

Informe o último **NSU** (Número Sequencial Único) para utilização no download de documentos eletrônicos, após clique em <span class="mat-button mdi "> salvar</span>.

# Operações
![operacoes_serv.png](/movimentos/nfse/operacoes_serv.png)
