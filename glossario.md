---
title: Glossário
description: Definição de alguns nomes e siglas usados nas páginas desta ajuda
published: true
date: 2022-03-17T12:26:58.673Z
tags: 
editor: markdown
dateCreated: 2019-11-22T17:53:25.624Z
---

# Glossário

Em vários locais nesta ajuda são utilizadas siglas, abreviações e nomes que não são muito comuns a todos os usuários. Por isso, este glossário vai explicar o significado desses termos. Quando uma dessas siglas, abreviações ou nome forem citados, eles terão um link que vai direcionar para o local nesta página onde o termo está detalhado.

## Certificado digital

Do mesmo modo que a assinatuta de alguém serve para autenticar um documento impresso, o certificado digital é usado para autenticar documentos eletrônicos. No contexto do GDOOR WEB, a Nota Fiscal eletrônica.

O certificado digital pode ser de 2 tipos: A1 e A3. O tipo suportado pelo Gweb é o **A1**.

## CEST

//

## CONFAZ

//

## CSOSN

//

## CST

//

## DANFe

**DANFe** é a sigla para Documento Auxiliar da Nota Fiscal eletrônica. A Nota Fiscal eletrônica é um documento de existência apenas digital. Já o DANFe, como o próprio nome diz, é um documento auxiliar para acompanhar o transporte das mercadorias. Ele não tem valor fiscal, pois pode ser facilmente forjado, mas tem informações que permitem acessar o documento válido no [Portal da NF-e](https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=completa).


## DANFCe

**DANFCe** é a sigla para Documento Auxiliar da Nota Fiscal de Consumidor eletrônica. A NFC-e é um documento de existência apenas digital. Já o DANFCe, como o próprio nome diz, é um documento auxiliar que serve como comprovante para o consumidor. Ele contém a impressão de um link para consultar a NFC-e nos servidores da SEFAZ, codificado em um QRCode.

## FCP

//

## GTIN

//

## ICMS

É a sigla para **I**mposto sobre **C**irculação de **M**ercadorias e **S**erviços, que é um tributo incidente sobre grande parte das mercadorias comercializadas no país.

## ICMS ST

[ICMS](/glossario#icms) por **S**ubstituição **T**ributária é uma forma de alterar o responsável pelo pagamento do ICMS.

## IPI

É a sigla para **I**mposto sobre **P**rodutos **I**ndustrializados, que é um imposto _federal_ para produtos industrializados no Brasil.

## NCM

É a sigla para **N**omenclatura **C**omum do **M**ercosul, um código que permite classificar os mercadorias, permitindo identificá-las. É reconhecida pelos países participantes do Mercosul e geralmente utilizada para atribuir impostos para determinada classe de mercadorias.

Para saber qual é a NCM de uma mercadoria que sua empresa comercializa, consulte a contabilidade da empresa ou procure na [tabela on-line](https://portalunico.siscomex.gov.br/classif/#/sumario?perfil=publico).

## SEFAZ

**SEFAZ** é a sigla para **Se**cretaria da **Faz**enda, e é o órgão responsável por, dentre outras coisas, gerenciar os processos referentes à NF-e. Quando citamos, por exemplo, *transmitir* a NF-e, ou *enviar* para a SEFAZ (ou para o governo), estamos nos referindo ao processo de enviar o [XML](/glossario/xml) da NF-e para os [WebServices](/glossario/webservices) da SEFAZ, que é onde todas as NF-e do país inteiro ficam armazenadas.

## WebServices

De modo abrangente, WebService é um serviço que permite integração entre dois ou mais sistemas. Por ser Web, é um serviço na nuvem, que permite que os sistemas conectados sejam fisicamente independentes. 

No contexto do Gweb, geralmente estará se referindo aos WebServices da [SEFAZ](/glossario/sefaz/), que são os servidores que recebem as NF-e enviadas pelos contribuintes, além de outros serviços fornecidos.

## XML

**XML** é a sigla para E**x**tensible **M**arkup **L**anguage. No contexto de NF-e, é o arquivo que contém os dados da NF-e, ou seja é a própria NF-e. Quando um documento (nota fiscal) é gerado, ele é convertido para este arquivo XML, depois é assinado e validado. E é este arquivo que é enviado para a [SEFAZ](/glossario/sefaz/).
  
Entendemos que a NF-e é o arquivo XML. Não deve ser confundido com o [DANFe](/glossario/danfe) impresso, que é um documento **auxiliar**.
