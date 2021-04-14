1 - Utilizando Express do NodeJs, criar uma API RESTful onde seja poss�vel manter um "banco de dados" de carros na mem�ria com opera��es comuns para uma RESTful API, como leitura completa dos registros (get), consulta de registro pela chave(get), inser��o de novos registros(post), atualiza��o de um registro pr�-existente(put) e exclus�o de dados(delete).

Para simplifica��o do projeto, os dados podem ser mantidos em uma simples vari�vel na mem�ria (perdendo-se os dados ao reiniciar o servidor/aplica��o). 

Os carros devem conter apenas 2 atributos: ID e Name. A API deve garantir que o atributo ID seja �nico e n�o aceitar outros carros com um ID previamente cadastrado.

Lembre-se: Voc� est� criando uma RESTful API, portanto, os c�digos de retorno em caso de sucesso e falha precisam ser sem�nticos, intuitivos e dentro das boas pr�ticas de cria��o de APIs RESTful.

2- Construa uma aplica��o em NodeJs que ir� inserir 15 carros na API constru�da anteriormente, depois ir� listar todos os carros e salvar o resultado da listagem no formato CSV no disco r�gido.

-------------------
INSTRU��ES 

Para o funcionamento da API execute os comandos: 
1�: npm i [COMANDO PARA INSTALAR AS DEPEND�CIAS DA APLICA��O];
2�: npm run prod [COMANDO PARA INICIAR A APLICA��O];
3�: � necess�rio possuir um software que interpreta os verbos http. (EXEMPLO: INSOMINIA, POSTMAN)


Acesso das rotas: 
LEITURA COMPLETA (GET): http://localhost:3000/carros
LEITURA ESPECIFICA (GET): http://localhost:3000/carros/1 [EXEMPLO: VALOR 1 FOI USADO COMO EXEMPLIFICA��O DA CONSULTA];
INSER��O DE REGISTRO (POST): http://localhost:3000/carros [NECESS�RIO PASSAR DOIS PARAMETROS NO BODY DA APLICA��O COM OS NOMES DE: "id" e "name"]
ATUALIZA��O DE REGISTRO (PUT): http://localhost:3000/carros/1 [NECESS�RIO PASSAR O PARAMETRO "name" NO BODY DA APLICA��O E O VALOR DO "id" na URL (O VALOR 1 FOI USADO COMO EXEMPLIFICA��O)]
EXCLUS�O DE REGISTRO (DELETE): http://localhost:3000/carros/1 [NECESS�RIO PASSAR O VALOR DO "id" NA URL (O VALOR 1 FOI USADO COMO EXEMPLIFICA��O)]

LINK PARA EXEMPLIFICA��O DO USO DAS ROTAS COM IMAGENS: https://imgur.com/a/yVjqdrA


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
reposit�rio de bibliotecas: https://www.npmjs.com/
https://www.youtube.com/watch?v=d_vXgK4uZJM&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR
https://www.youtube.com/watch?v=BN_8bCfVp88&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp
https://blog.geekhunter.com.br/criar-crud-nodejs/
https://medium.com/@nunofilipe_16451/criar-uma-app-rest-api-com-crud-node-js-mongodb-ejs-7802098cbe9e

-----------------