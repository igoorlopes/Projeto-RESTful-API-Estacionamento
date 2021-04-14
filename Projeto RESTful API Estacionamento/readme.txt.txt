1 - Utilizando Express do NodeJs, criar uma API RESTful onde seja possível manter um "banco de dados" de carros na memória com operações comuns para uma RESTful API, como leitura completa dos registros (get), consulta de registro pela chave(get), inserção de novos registros(post), atualização de um registro pré-existente(put) e exclusão de dados(delete).

Para simplificação do projeto, os dados podem ser mantidos em uma simples variável na memória (perdendo-se os dados ao reiniciar o servidor/aplicação). 

Os carros devem conter apenas 2 atributos: ID e Name. A API deve garantir que o atributo ID seja único e não aceitar outros carros com um ID previamente cadastrado.

Lembre-se: Você está criando uma RESTful API, portanto, os códigos de retorno em caso de sucesso e falha precisam ser semânticos, intuitivos e dentro das boas práticas de criação de APIs RESTful.

2- Construa uma aplicação em NodeJs que irá inserir 15 carros na API construída anteriormente, depois irá listar todos os carros e salvar o resultado da listagem no formato CSV no disco rígido.

-------------------
INSTRUÇÕES 

Para o funcionamento da API execute os comandos: 
1º: npm i [COMANDO PARA INSTALAR AS DEPENDÊCIAS DA APLICAÇÃO];
2º: npm run prod [COMANDO PARA INICIAR A APLICAÇÃO];
3º: é necessário possuir um software que interpreta os verbos http. (EXEMPLO: INSOMINIA, POSTMAN)


Acesso das rotas: 
LEITURA COMPLETA (GET): http://localhost:3000/carros
LEITURA ESPECIFICA (GET): http://localhost:3000/carros/1 [EXEMPLO: VALOR 1 FOI USADO COMO EXEMPLIFICAÇÃO DA CONSULTA];
INSERÇÃO DE REGISTRO (POST): http://localhost:3000/carros [NECESSÁRIO PASSAR DOIS PARAMETROS NO BODY DA APLICAÇÃO COM OS NOMES DE: "id" e "name"]
ATUALIZAÇÂO DE REGISTRO (PUT): http://localhost:3000/carros/1 [NECESSÁRIO PASSAR O PARAMETRO "name" NO BODY DA APLICAçÃO E O VALOR DO "id" na URL (O VALOR 1 FOI USADO COMO EXEMPLIFICAÇÃO)]
EXCLUSÃO DE REGISTRO (DELETE): http://localhost:3000/carros/1 [NECESSÁRIO PASSAR O VALOR DO "id" NA URL (O VALOR 1 FOI USADO COMO EXEMPLIFICAÇÃO)]

LINK PARA EXEMPLIFICAÇÃO DO USO DAS ROTAS COM IMAGENS: https://imgur.com/a/yVjqdrA


-------------------
Softwares utilizados para o desenvolvimento da RESTful API

Visual Studio Code
Node js
npm
Insomnia

-------------------

materiais utilizados para estudo: 
lista de status code utilizada: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
criando banco de dados csv: https://stackabuse.com/reading-and-writing-csv-files-with-node-js/
repositório de bibliotecas: https://www.npmjs.com/
https://www.youtube.com/watch?v=d_vXgK4uZJM&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR
https://www.youtube.com/watch?v=BN_8bCfVp88&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp
https://blog.geekhunter.com.br/criar-crud-nodejs/
https://medium.com/@nunofilipe_16451/criar-uma-app-rest-api-com-crud-node-js-mongodb-ejs-7802098cbe9e

-----------------