---
title: Nota Fiscal eletrônica (NF-e)
description: Conheça o módulo de emissão de NF-e de venda, complemento e de ajuste no Gweb
published: true
date: 2025-01-23T18:59:52.349Z
tags: nf-e, estoque, movimentos, nota fiscal, visão geral
editor: markdown
dateCreated: 2020-01-03T19:32:43.427Z
---

# Introdução

O módulo **NF-e** é o local onde são efetuadas as emissões das **Notas Fiscais eletrônicas**, operações de **cancelamento**, **inutilização**, notas de **ajuste** ou de **complemento** e, por fim, a lista de **XML mensais**. 
O módulo é totalmente online, o que significa que será necessário ter uma conexão com a internet para utilizá-lo.

> **Dica.**
Caso deseje um **passo a passo**, veja o tutorial de [como emitir uma NF-e](/tutoriais/como-emitir-uma-nfe).
{.is-success}


![Lista de NF-e](/movimentos/nf-e/lista-nfe.png)

> É possível acompanhar o status das notas fiscais na listagem das notas nas **tags coloridas** ao lado delas.
{.is-info}

# Busca e filtros

O módulo NF-e possibilita localizar as notas emitidas através do campo de busca, que considera as informações do **código**, **número da nota**, **chave de acesso da NF-e**, **razão social do cliente**, **nome fantasia do cliente**, **operação**, **informações adicionais**, **nome do item** e **nome do serviço**. Além destas opções, também é possível utilizar os filtros, são eles:

- **Cliente:** Selecione uma pessoa que possua o atributo [cliente](/cadastros/pessoas);
- **Usuário:** Selecione um [usuário](/configuracoes/usuarios) do sistema;
- **Vendedor:** Selecione uma pessoa que possua o atributo [vendedor](/cadastros/pessoas);
- **Status:** Selecione um dos status disponíveis nas suas notas fiscais, como autorizadas, canceladas, rejeitadas, etc.;
- **Data inicial e final:** Selecione a data inicial ou final da **emissão**;
- **Ambiente de emissão:** Localize as nota de homologação e produção;
- **Espécie de pagamento:** Selecione uma das [formas de pagamento](/cadastros/pagamentos) que foram utilizadas nas notas fiscais.

![Busca e Filtros](/movimentos/nf-e/busca_e_filtros.png)

# Lista

Na lista, você visualiza as NF-es criadas no sistema, podendo fazer uma **busca** ou **filtrar** apenas os dados que deseja visualizar.

As informações exibidas para as notas fiscais, variam de acordo com a situação dela. Aqui temos alguns exemplos.

**Nota fiscal autorizada:**
![Status Nf-e Autorizada](/movimentos/nf-e/status-nfe-autorizada.png)

> Caso a empresa esteja no ambiente de **produção**, a tag do ambiente não aparecerá.
{.is-info}

**Nota fiscal rejeitada:**
![Status NF-e Rejeitada](/movimentos/nf-e/status-nfe-rejeitada.png)

> Caso a NF-e esteja **rejeitada**, a tag ficará **laranja** com o **motivo da rejeição** dentro.
{.is-info}

Dentro de cada NF-e, no **lado direito** você pode: **duplicar a nota fiscal**, **editar a NF-e** caso ela esteja pendente ou rejeitada, ou abrir as opções da NF-e.

As opções da nota fiscal pendente ou rejeitada são:

![Opções da nota fiscal pendente](/movimentos/nf-e/opcoes_nota_fiscal_pendente.png)

As opções da nota fiscal autorizada são:

![Opções da nota fiscal autorizada](/movimentos/nf-e/opcoes_nota_fiscal_autorizada.png)

As ações de cada uma das opções são as seguintes:

<span class="mdi mdi-refresh-circle"></span> **Consultar status**: Consulta a chave de acesso na SEFAZ, retornando se está autorizada ou rejeitada.
  
<span class="mdi mdi-content-copy"></span> **Copiar chave de acesso**: Copia a chave de acesso para a área de transferência. 

<span class="mdi mdi-email"></span> **Enviar por e-mail**: Envia novamente o e-mail da nota fiscal, com o XML e o DANFE, variando conforme a configuração.

<span class="mdi mdi-pdf-box"></span> **Visualizar DANFE**: Abre a visualização da DANFE da nota fiscal para ser impressa ou salva.
  
<span class="mdi mdi-xml"></span> **Visualizar XML**: Abre a visualização do XML da nota fiscal. É possível visualizar no sistema ou baixar ele.

<span class="mdi mdi-file-check"></span> **Carta de Correção(CC-e)**: Abre a tela para incluir uma nova carta de correção para a NF-e.

<span class="mdi mdi-file-document-edit"></span> **Ajustar (NF-e de ajuste)**: Opção para o lançamento rápido da NF-e de ajuste.

<span class="mdi mdi-file-plus"></span> **Complementar (NF-e de complemento)**: Opção para o lançamento rápido da NF-e de complemento.

<span class="mdi mdi-file-move"></span> **Gerar CT-e**: Opção para o lançamento rápido do CT-e.

<span class="mdi mdi-file-move"></span> **Gerar MDF-e**: Opção para o lançamento rápido do MDF-e.

<span class="mdi mdi-download"></span> **Salvar documento**: Faz o download do XML e do DANFE da nota fiscal.

<span class="mdi mdi-cancel"></span> **Cancelar NF-e**: Abre um campo para informar o motivo do cancelamento e cancela a NF-e. Após o cancelamento, é possível definir o que acontecerá com o financeiro da nota fiscal.

# Formulário

O formulário de cadastro de uma nota fiscal aparecerá ao **criar uma nova** ou **editar** a nota fiscal. Ele pode mudar de acordo com a **operação** que estiver realizando, bem como o controle do produto adicionado na NF-e.
  
## Cabeçalho
  
No cabeçalho da NF-e ficam as informações gerais da nota fiscal. São elas:

![Cabeçalho](/movimentos/nf-e/cabecalho.png)

- **Data de emissão**: Data de emissão do documento, ao criar uma nova nota fiscal, traz a data atual como padrão.
- **Data de saída**: Data de saída da mercadoria, ao criar uma nova nota fiscal, traz a data atual como padrão.
- **Vendedor**: Cadastro de vendedor que será vinculado ao adicionar os produtos na nota. É necessário que a pessoa tenha o atributo vendedor, para ser selecionada.
- **Natureza da operação**: Oriunda do cadastro de operações, serve para selecionar qual é a operação que está sendo realizada.
- **Tipo da retirada**: Define se a retirada foi presencial ou não, e o tipo dela.
- **Consumidor final**: Define se a operação atual é para consumidor final ou não, isso pode influenciar na tributação dos produtos de acordo com as configurações de impostos.
  
> Se você selecionar um cliente CPF, este campo será marcado por padrão, mas você pode desmarcar.
{.is-info}

- **Origem do preço de venda**: define se o preço de venda dos produtos será baseado no preço de venda, de atacado ou de uma tabela de preço (se o produto compor ela).
Caso selecione tabela de preço, aparecerá um campo para escolher a tabela de preço que será aplicada.
  
![Tabelas de preço](/movimentos/nf-e/tabela_de_preco.png)

## Cliente

Você pode selecionar o **cliente** da NF-e pesquisando pelo **nome**, **CPF/CNPJ**, **telefone** ou **e-mail**. Para ser selecionado, é necessário que o cliente tenha marcado o atributo [**cliente**](/pt-br/cadastros/pessoas) no **cadastro de pessoa**.

> Caso mude a **natureza de operação** para uma de entrada (como a compra de mercadorias, por exemplo), este campo mudará para **fornecedor** e só buscará pessoas que estejam com o atributo [**fornecedor**](/pt-br/cadastros/pessoas) marcado.
{.is-info}

![Cliente da NF-e.png](/movimentos/nf-e/cliente_nfe.png)

Caso seja necessário, você pode adicionar um **endereço de entrega** para o cliente na nota fiscal clicando na opção **informar endereço de entrega**.

![Endereco de entrega](/movimentos/nf-e/endereco_de_entrega.png)

Você pode **cadastrar um novo endereço** para o cliente selecionado através do botão <span class="mat-button mdi">CADASTRAR ENDEREÇO</span>.

## Produtos
Você pode **adicionar produtos** pesquisando por qualquer parte do **nome** ou da **descrição adicional**, ou lançar eles através do **código do produto**, **referência** ou **código de barras**.

![Adicionar produtos](/movimentos/nf-e/adicionar_produtos.png)

- **Aba de identificação**: Você pode alterar a quantidade, valor unitário e o desconto do item na nota fiscal.
- **Aba de tributos**: Você pode verificar a tributação configurada para o produto e efetuar alterações se for necessário.
- **Aba de Informações Adicionais**: Você pode incluir uma descrição adicional para o produto, bem como o vendedor, e caso o seu fornecedor ou contabilidade tenha orientado, pode informar o campo xPed e nItemPed para destacar no XML da nota fiscal.

> **Dica**:
Caso o produto tenha **número de série**, esteja dentro da **regra de medicamentos** ou seja uma **nota de importação**, novas abas poderão ser exibidas.
{.is-info}


Ao adicionar o produto que deseja, informe sua quantidade e valor unitário (se necessário), e clique em <span class="mat-button mdi">CONFIRMAR</span> para adicionar o produto na nota fiscal.

## Serviços
Você pode pesquisar serviços pelo **nome** ou lançar pelo **código**.

![Adicionar serviços](/movimentos/nf-e/adicionar_servicos.png)

- **Aba de identificação**: Pode alterar o valor unitário, quantidade e desconto do serviço.
- **Aba de tributos**: Pode verificar a tributação configurada para o serviço e efetuar alterações se necessário.

## Pagamentos
Você pode selecionar qualquer uma das [**formas de pagamentos**](/cadastros/pagamentos) cadastradas anteriormente.

![Adicionar pagamentos](/movimentos/nf-e/adicionar_pagamentos.png)

Caso o pagamento seja em **PIX**, é possível exibir o **Qr Code** clicando no ícone <span class="mdi mdi-qrcode"></span> ao lado da conta financeira.

![Adicionar pagamento por Pix](/movimentos/nf-e/adicionar_pagamentos_pix.png)

Caso deseje configurar a forma de pagamento pix como mostrado acima, siga o nosso [passo a passo](/pt-br/tutoriais/cadastrar-pix).

## Transporte
Caso a mercadoria da NF-e passe por uma [**transportadora**](/cadastros/pessoas) ou o cliente deseja que essas informações sejam destacadas na nota fiscal, pode incluir os dados nesta sessão.

![Transporte](/movimentos/nf-e/transporte.png)

Caso o tipo de frete seja diferente de **sem transporte**, o sistema mostrará os campos de [veículos](/cadastros/veiculos) (<span class="mdi mdi-truck"></span>) e volumes (<span class="mdi mdi-package"></span>) para serem incluídos.

![Adicionar Volume e veículo](/movimentos/nf-e/volume_veiculos.png)

Além disso, logo abaixo dos [veículos](/cadastros/veiculos) e **volumes** o campo [**transportadora**](/cadastros/pessoas) também aparecerá, nele você pode selecionar qualquer pessoa com o atributo [**transportadora**](/cadastros/pessoas) para ser o responsável pelo transporte da mercadoria.

![Transportadora NF-e](/movimentos/nf-e/transportadora_nfe.png)

## Outras informações

Na parte de **outras informações**, você pode incluir **informações adicionais** para a nota fiscal ou **informações adicionais de interesse do fisco**, caso seja solicitado.

![Outras Informacoes](/movimentos/nf-e/outras_informacoes.png)

Caso você tenha **outras obrigações tributárias** que deve destacá-las para o fisco, pode informar clicando no ícone <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg> a direita do campo.

![Outras obrigações tributárias](/movimentos/nf-e/outras_obrigacoes_tributarias.png)

## Download do XML - CNPJ/CPF Autorizados

Nesta sessão é possível visualizar os **CNPJ/CPF’s autorizados a baixar o XML** ou **incluir novos**. Você pode configurar isso previamente nas [**configurações da NF-e**](#Configurações).

![Download do XML CNPJ/CPF's autorizados](/movimentos/nf-e/download_xml_cpf_cnpj_autorizados.png)

Para **adicionar** um novo **CNPJ/CPF**, informe-o no campo e clique no ícone <span class="mdi mdi-arrow-right"></span> para incluir na lista. Para visualizar os **CNPJ/CPF's adicionados**, clique no ícone <span class="mdi mdi-eye"></span>.

## Documentos fiscais referenciados

Caso a nota que esteja fazendo seja necessário **vincular** um outro **documento fiscal**, como uma devolução por exemplo, pode adicioná-lo aqui:

![Documentos fiscais referenciados](/movimentos/nf-e/documentos_fiscais_referenciados.png)

Para isto basta clicar no ícone <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M12,17V15H7V17H12M17,11H7V13H14.69C13.07,14.07 12,15.91 12,18C12,19.09 12.29,20.12 12.8,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19A2,2 0 0,1 21,5V12.8C20.12,12.29 19.09,12 18,12L17,12.08V11M17,9V7H7V9H17Z"></path></svg>, selecionar o **tipo de documento** e preencher as informações necessárias de acordo com o tipo selecionado.

# NF-e de ajuste
Caso seja necessário emitir uma **NF-e de ajuste**, para **ajustar algum valor da nota fiscal original** ou para uma **operação de estorno de NF-e**, é possível lançar uma NF-e de ajuste no GWEB.

- [NF-e de ajuste *Veja como emitir uma NF-e de ajuste no GWEB*](/pt-br/tutoriais/como-emitir-uma-nfe-de-ajuste)
{.links-list}

# NF-e de complemento

Caso seja necessário emitir uma **NF-e de complemento** para **complementar** algum valor da nota fiscal original, como **valor unitário**, **quantidade** ou **valor de ICMS**, no Gweb é possível lançar uma NF-e de de complemento.

- [NF-e de complemento *Veja como emitir uma NF-e de complemento no GWEB*](/pt-br/tutoriais/como-emitir-uma-nfe-de-complemento)
{.links-list}

# ECONF

A utilização do **Evento de Conciliação Financeira – ECONF** é facultativa e tem o objetivo de auxiliar as empresas que buscam demonstrar a existência de **conformidade fiscal** entre as **informações financeiras** e de **meios de pagamentos** e os **documentos fiscais emitidos**.

## Lista

Ao clicar na opção **ECONF** no menu direito do GWEB, você acessará a lista de eventos de conciliação financeira que foram realizados.

![Lista ECONF](/movimentos/nf-e/lista_econf.png)

- **Cancelar**: Cancela o evento de conciliação financeira após a emissão;
- **Visualizar XML**: Abre o XML do ECONF permitindo copiar ou realizar o download.

## Formulário

Os campos disponíveis no formulário são:

![Formulário ECONF](/movimentos/nf-e/formulario_econf.png)

#### NF-e Conciliação financeira - ECONF

- **Documento**: Número do documento que a conciliação financeira será vinculada;
- **Chave de Acesso**: Chave de acesso da NF-e alvo;
- **Sequencia**: Sequencial do evento para o mesmo tipo de evento. Valores de 1 a 99.

#### Detalhamento do pagamento

- **Pagamento**: Forma de pagamento à vista ou à prazo;
- **Meio de pagamento**: Meio de pagamento realizado (dinheiro, cartão, boleto, etc.);
- **Valor pago (R$)**: Valor pago na operação;
- **Data do pagamento**: Data que o pagamento foi realizado.

#### Estabelecimento onde o pagamento foi processado

- **CNPJ do estabelecimento**: CNPJ do estabelecimento onde o pagamento foi processado;
- **UF**: UF do estabelecimento onde o pagamento foi processado;
- **CNPJ da instituição financeira**: CNPJ da instituição financeira responsável pelo pagamento;
- **Operadora (opcional)**: Operadora da autorização. Campo opcional e as opções são pré-definidas;
- **Número da autorização da transação**: Número de autorização gerado por esta operação na instituição financeira.

#### Estabelecimento beneficiário
- **CNPJ do beneficiário**: CNPJ do estabelecimento beneficiário da operação de conciliação.
- **UF**: UF do estabelecimento beneficiário da operação de conciliação.

Ao finalizar o cadastro, clique no botão <span class="mat-button">CONFIRMAR E TRANSMITIR</span> para transmitir o evento de conciliação

# Relatórios


Ao clicar na opção **“relatórios”** você será redirecionado ao [**módulo de relatórios**](https://help.gdoorweb.com.br/pt-br/informacoes/relatorios) filtrando pela tag de NF-e.

![Menu relatórios](/movimentos/nf-e/menu_relatórios.png)

# Inutilizar numeração

Ao clicar em **inutilizar numeração**, será aberta a tela de **inutilização de NF-es**. Informe a **série**, **número inicial e final** que deseja inutilizar e clique em <span class="mat-button mdi">CONFIRMAR</span>.

![Inutilizar Numeração](/movimentos/nf-e/inutilizar_numeracao.png)

Também é possível ver as numerações que foram **inutilizadas** na opção <span class="mat-button mdi">VER INUTILIZADOS</span>.

![Numeros inutilizados](/movimentos/nf-e/numeros_inutilizados.png)

# XML do mês

Caso seja necessário os **XML's** de determinado mês para enviar à **contabilidade**, pode utilizar a opção de **XML do mês** no Gweb.

![XML do mês](/movimentos/nf-e/xml_do_mes.png)

Você pode informar o **mês** que deseja separar os XML’s e abaixo marque se deseja **baixar o arquivo** ou fazer o envio para o **e-mail da contabilidade** diretamente pelo Gweb. Caso escolha a segunda opção, informe o **nome** e **e-mail** do contador.

# Configurações da NF-e

## Operação padrão

Configure a [**operação**](/pt-br/cadastros/operacoes) que será selecionada por **padrão** ao criar uma nova nota fiscal.

![Operação padrão](/movimentos/nf-e/operacao_padrao.png)

## Certificado digital

Para configurar o **certificado digital** para emissão de NF-e, acesse as [**Configurações Gerais**](/configuracoes/geral) do Gweb.

## Ambiente da NF-e

Configure o seu ambiente para **emissão de NF-e**.

- **Série de emissão da NF-e:** Série das **notas fiscais** que o sistema irá emitir. Esta informação pode ser obtida com sua **contabilidade**.
- **Ambiente de emissão:** Aqui você determina se as suas NF-e terão **validade fiscal** ou não. O ambiente de **homologação** é usado para **testar a emissão**, e tudo o que você transmitir será sem valor. Já no ambiente de **produção**, as NF-e transmitidas terão **valor fiscal**.
- **Nº da próxima NF-e:** Apenas informe um número neste campo se sua empresa **já emitiu NF-e** por outro sistema, assim você poderá **continuar a numeração** de onde parou. Ao salvar um número neste campo, a **próxima NF-e** será gerada com esse número e as subsequentes terão o **número sequencial**.
- **Forma de emissão:** Neste campo você pode configurar a forma de **emissão da NF-e** para:
 **Normal:**{.subtitle} Emissão comum, **sem condições específicas**.
 **Contingência:**{.subtitle} Emissão da NF-e em modo de contingência, quando o servidor da SEFAZ estiver **indisponível**.
- **Envio síncrono da NF-e:** Caso essa **configuração** esteja marcada, o sistema usará o envio síncrono da NF-e, ou seja, ele enviará a nota e **aguardará a resposta da SEFAZ**. Caso esteja desmarcado, será necessário **consultar** o status da nota depois de transmitir.

![Ambiente da NF-e](/movimentos/nf-e/ambiente_da_nfe.png)

## Impressão do DANF-e

Aqui é possível alterar **configurações da impressão do DANFe:**

- **Orientação:** Se é paisagem ou retrato.
- **Imprimir canhoto:** Ao marcar, será impresso o **canhoto** no topo do DANFe.
- **Imprimir impostos opcionais no produto:** Ao desmarcar, **não será impresso** os impostos opcionais abaixo do nome do produto.

Também é possível alterar a **fonte**, **posição da logomarca** e a **quantidade de casas decimais** que será impresso para **preço** e **quantidade**.

![Impressão do DANF-e](/movimentos/nf-e/impressao_do_danfe.png)

## Outras configurações

Outras configurações referentes a **emissão da nota fiscal.**
**Adicionar valor das retenções às informações adicionais:** Caso marcada, as informações adicionais serão preenchidas com o valor das retenções.

![Outras configurações](/movimentos/nf-e/outras_configuracoes.png)

## Autorizados a baixar o XML

Caso seja necessário que as notas fiscais emitidas possam ser **baixadas e consultadas** por outros CNPJ’s que não os participantes da NF-e, poderá adicioná-los nesta configuração.
Basta **informar o CNPJ** e **clicar na seta** <span class="mdi mdi-arrow-right"></span>, após isso clique em <span class="mat-button mdi">SALVAR</span>.

![Autorizados a baixar o XML](/movimentos/nf-e/autorizados_baixar_xml.png)

Também é possível **clicar no ícone** <span class="mdi mdi-eye"></span> para visualizar os **CNPJ's já adicionados**. 

## Pagamentos

Defina qual será a **forma de pagamento padrão** para a NF-e, caso a nota seja finalizada **sem nenhuma** forma de pagamento definida.
Caso selecione a opção <span class="mdi mdi-checkbox-blank-outline"></span>**Não informar pagamentos**, o sistema deixará a NF-e **sem pagamento** por padrão.

![Pagamentos](/movimentos/nf-e/pagamento_padrao.png)

## Informações adicionais

Informe aqui um texto que você deseja que apareça no campo **informações adicionais**, em **todas** as notas fiscais emitidas.

![Informações adicionais](/movimentos/nf-e/informacoes_adicionais.png)

## E-mail

Você pode informar um **endereço de resposta** para os e-mails de NF-e **enviados pelo Gweb**, pois o sistema envia os e-mails a partir do endereço **nao.responda@gdoorweb.com.br**. Sendo assim, se o seu cliente precisar **responder o e-mail da NF-e** e o fizer para este endereço, o e-mail nunca chegará. Por isso, você pode definir aqui o **nome** e o **endereço para resposta**:

![E-mail resposta](/movimentos/nf-e/email_resposta.png)

## Opções de e-mail

Opções relacionadas ao **envio dos e-mails** por parte do sistema.
- **Enviar e-mail automaticamente:** Com esta opção **marcada**, após a **autorização da NF-e**, o sistema enviará um e-mail para o endereço informado no [**cadastro do cliente**](/cadastros/pessoas).
- **Cópia para o emitente:** Com esta opção **marcada**, sempre que **enviar um e-mail de NF-e**, uma cópia será enviada para o endereço informado no [**cadastro do emitente**](/configuracoes/emitente).
- **Anexar PDF:** Com esta opção marcada, além do **arquivo XML** anexado ao e-mail (que é obrigatório), o **PDF do DANFe** também será anexado.

![Opções de e-mail](/movimentos/nf-e/opcoes_email.png)

## E-mails padrão

Nesta seção você pode configurar o **conteúdo dos e-mails de NF-e**, tanto para notificar a **autorização da NF-e**, para a **carta de correção**, quanto para seu **cancelamento**.

![E-mails padrão](/movimentos/nf-e/emails_padrao.png)

Para alterar o conteúdo, clique no botão <span class="mat-button mdi">EDITAR</span> à direita da opção que deseja. Será aberto o [editor de texto estilizado](/dicas/editor-de-texto-estilizado) para efetuar as modificações.

No **conteúdo do e-mail**, você pode adicionar algumas **variáveis** que serão **substituídas** pelo valor correspondente na hora de enviar o e-mail. Para isso, basta digitar o **caractere** <span class="mat-button mdi ">[</span> (abre colchetes) e uma lista de opções será sugerida.

![Editor de texto e-mail](/movimentos/nf-e/editor_texto_email.png)

## Comportamento

Define o **comportamento** do sistema na NF-e.
- **Sugerir usuário logado como vendedor:** Se marcado essa opção, caso o **usuário logado** tenha o atributo [vendedor](/cadastros/pessoas) no seu cadastro, ele será sugerido como **vendedor**.

![Comportamento](/movimentos/nf-e/comportamento_nfe.png)

