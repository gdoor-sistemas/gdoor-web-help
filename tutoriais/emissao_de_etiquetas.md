---
title: Emissão de Etiquetas
description: 
published: true
date: 2026-09-02T18:12:59.325Z
tags: 
editor: markdown
dateCreated: 2026-08-26T20:49:20.170Z
---




### Configurar a impressora e a impressão direta

Para utilizar uma impressora específica para as etiquetas, acesse "Configurações" e selecione "Impressões".

[INSERIR PRINT — Tela "Configurações de impressão", destacando "Impressoras padrão por documento", "Etiqueta" e "Serviço de impressão direta".]

Na seção "Impressoras padrão por documento", localize o documento "Etiqueta".

Selecione a impressora que será utilizada para esse tipo de impressão.

A relação também apresenta outros documentos, como:

Pedido de venda;
Orçamento;
NF-e;
NFC-e;
NF-e no PDV;
Pré-venda;
NFS-e;
Recibo.
Ativar o envio direto para impressão

Para utilizar o envio direto, marque "Configurar serviço de impressão direta".

Utilize o botão "Download" para instalar o agente de impressão no computador.

O agente permite enviar o documento diretamente para a impressora configurada, sem utilizar a caixa de diálogo de impressão do navegador.

[INSERIR PRINT — Configuração do serviço de impressão direta com o botão "Download".]

Quando o envio direto estiver ativado para um documento, será disponibilizado o campo "Cópias" na respectiva linha.

Informe a quantidade de cópias que o agente deverá imprimir a cada envio.

[INSERIR PRINT — Linha de "Etiqueta" com impressora selecionada e campo "Cópias".]

(informação) A quantidade de cópias é independente para cada tipo de documento. O recurso não é exclusivo das etiquetas: qualquer documento configurado para envio direto pode apresentar o campo "Cópias".

#### Verificar o agente de impressão

Quando o agente não estiver instalado ou em execução, o sistema apresentará uma mensagem indicando o problema antes da tentativa de impressão.

[INSERIR PRINT — Mensagem "Agente de impressão direta não encontrado".]

(alerta) Ao receber a mensagem "Agente de impressão direta não encontrado", verifique se o serviço foi instalado e se está em execução no computador utilizado para a impressão.

### Replicar código interno no código de barras

Produtos sem código de barras podem utilizar o código interno como identificação para impressão.

Para configurar esse recurso, acesse "Configurações", selecione "Geral" e localize o bloco "Gestão de estoque".

[INSERIR PRINT — Tela "Geral", destacando o bloco "Gestão de estoque" e a opção "Replicar código interno no código de barras".]

Marque "Replicar código interno no código de barras".

A opção permite utilizar o código interno do produto como código de barras, reduzindo a necessidade de cadastrar ou informar manualmente outro código.

O bloco anteriormente denominado "Controlar quantidades do estoque" passa a utilizar o nome "Controlar estoque e identificação dos produtos" e apresenta a opção de replicação acompanhada da identificação "NOVO".

Aplicar a replicação aos produtos cadastrados

Ao marcar a opção, será apresentada a janela "Aplicar aos produtos já cadastrados?".

[INSERIR PRINT — Janela "Aplicar aos produtos já cadastrados?", destacando as opções disponíveis.]

Selecione uma das opções:

Replicar

Adiciona o código interno como mais um código de barras cadastrado para o produto.

Replicar e definir como principal

Adiciona o código interno como código de barras e também define esse código como principal.

Depois de selecionar a opção, defina como a configuração deverá ser aplicada.

A janela apresenta três ações:

"Fechar": encerra a janela sem aplicar alterações.
"Somente novos produtos": mantém a configuração ativa para produtos cadastrados posteriormente, sem alterar os produtos existentes.
"Aplicar": executa a opção escolhida também para os produtos já cadastrados.

[INSERIR PRINT — Janela com os botões "Fechar", "Somente novos produtos" e "Aplicar".]

Ao clicar em "Aplicar", o sistema executa o processamento em lote.

Durante o procedimento, será apresentado o progresso da aplicação.

Ao finalizar, o sistema informa:

Quantidade de produtos atualizados;
Opção utilizada na replicação.

(informação) Executar novamente a aplicação não duplica os códigos de barras que já tenham sido replicados.

#### Desativar a replicação

Para interromper a replicação para novos produtos, desmarque "Replicar código interno no código de barras".

(alerta) Desmarcar a opção não remove os códigos de barras que já foram aplicados aos produtos existentes. A alteração apenas interrompe a replicação para novos produtos.

Fluxo recomendado para emissão

Para realizar a emissão de etiquetas de forma organizada, acesse "Cadastros", selecione "Produtos", clique em "Ações" e escolha "Etiquetas". Em seguida, consulte um modelo existente ou cadastre uma nova etiqueta, defina as medidas da página e da etiqueta, componha as informações que serão impressas e salve o modelo para reutilização, quando necessário.

Na sequência, acesse a impressão pelo ícone de impressora, inclua os produtos manualmente ou importe os itens de uma "Nota de compra" ou "NF-e", defina a ordenação e a posição inicial da impressão, gere a "Prévia PDF" para conferir o resultado e clique em "Imprimir" para concluir.

(dica) Quando a operação utilizar repetidamente o mesmo formato de etiqueta, salve as configurações de medidas e informações como modelos. Dessa forma, novos cadastros podem reutilizar configurações já validadas, reduzindo o trabalho de configuração.

Observação sobre o recurso de código de barras

(informação) O recurso de replicação do código interno permite reduzir um dos principais motivos de produtos sem código de barras: a ausência de um código cadastrado. Ao ativar a opção, o código interno pode passar a alimentar o código de barras do produto, permitindo utilizar essa identificação na emissão das etiquetas.

[INSERIR PRINT — Resultado da aplicação da replicação, mostrando a configuração ativa e a quantidade de produtos atualizados.]