# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
- Site publicado na Internet **LINK**
- Navegador da Internet - Chrome, Firefox ou Edge 
- Conectividade de Internet para acesso às plataformas (APISs) 

## Testes de Navegabilidade

### Tela Inicial / Homepage:
O menu de navegação conta com os seguintes links:

**Inserir evidências**

- No cabeçalho, à esquerda existe o link "Burguer Menu", onde deve ser disponibilizado as opções de navegação do aplicativo através do ícone, as opções "Home", "Menu", "Carrinho" e "Favoritos" devem direcionar para suas respectivas telas. 
- No cabeçalho, ao centro existe o Logotipo "CardAppio", onde deve direcionar o usuário para a página inicial "Home".
- No cabeçalho, à direita existe o link "Usuário", onde deve ser disponibilizado as opções das configurações pessoais do usuário, as opções "Editar Perfil" e "Histórico de Pedidos" devem direcionar para suas respectivas telas.
- No Rodapé, teremos um menu de navegação com as mesmas opções encontradas no "Burguer Menu" do cabeçalho. Então as opções "Home", "Menu", "Carrinho" e "Favoritos" devem direcionar para suas respectivas telas.

Resultado: 
Todos os links levam à área ou tela esperada.

## Teste de Responsividade

Para realizar os testes de responsividade iremos utilizar a ferramenta [Chrome LightHouse](https://developer.chrome.com/docs/lighthouse/overview/?hl=pt_BR), que testa automaticamente a compatibilidade da aplicação com dispositivos móveis.

Resultados:
**LINK**

## Teste de Funcionalidades

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| Caso de Teste      | CT-001                                                                                                                                                 |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | **RF-01, RF-02, RF-03**                                    |
| Objetivo do Teste      | Verificar se a aplicação permite ao cliente visualizar o cardápio, utilizar filtros de pesquisa e concluir um pedido.                                                                                   |
| Passos                 | **1.** Abrir a aplicação.<br>**2.** Navegar até a seção de cardápio.<br>**3.** Verificar se o cardápio é exibido corretamente.<br>**4.** Utilizar os filtros de pesquisa para encontrar um item específico.<br>**5.** Adicionar o item ao carrinho.<br>**6.** Concluir o pedido.    |
| Critérios de Êxito     |   O cardápio é exibido corretamente, os filtros de pesquisa funcionam corretamente, e o pedido é concluído sem erros. |
| Dados de entrada   |        **N/A**                                                                                                                                                                                                      | 
| Resultado Obtido   |                                                                                                                                                                                                           | 
 
| Caso de Teste      | CT-002                                                                                                                                                 |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | **RF-04, RF-05**                                    |
| Objetivo do Teste      | Verificar se a aplicação permite que o cliente acompanhe o estado do pedido e o altere ou cancele dentro do tempo determinado pelo estabelecimento.                                                                                   |
| Passos                 | **1.** Realizar um pedido.<br>**2.** Acessar a seção de acompanhamento de pedidos.<br>**3.** Verificar o estado do pedido.<br>**4.** Tentar alterar o pedido.<br>**5.** Tentar cancelar o pedido dentro do tempo determinado.    |
| Critérios de Êxito     |   O estado do pedido é exibido corretamente, é possível alterar o pedido, e é possível cancelar o pedido dentro do tempo determinado. |
| Dados de entrada   |       Pedido realizado. | 
| Resultado Obtido   |                                                                                                                                                                                                           |                                                                                         | 

| Caso de Teste      | CT-003                                                                                                                                               |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | **RF-06, RF-07**                                    |
| Objetivo do Teste      | Verificar se a aplicação permite que a cozinha receba e ordene os pedidos, e se é possível filtrar os pedidos por categoria.                                                                                  |
| Passos                 | **1.** Realizar um pedido.<br>**2.** Acessar a seção de pedidos da cozinha.<br>**3.** Verificar se o pedido é exibido corretamente.<br>**4.** Tentar filtrar os pedidos por categoria.|
| Critérios de Êxito     |   O pedido é exibido corretamente na cozinha, e é possível filtrar os pedidos por categoria. |
| Dados de entrada   |  Pedido realizado.| 
| Resultado Obtido   |                                                                                                                                                                                                           | 

| Caso de Teste      | CT-004                                                                                                                                                 |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | **RF-08, RF-09**                                    |
| Objetivo do Teste      | Verificar se a aplicação permite que estabelecimentos parceiros cadastrem e alterem o cardápio, e se o Gerente/Administrador pode definir o horário de funcionamento do restaurante.|
| Passos                 | **1.** Acessar a seção de cadastro e alteração de cardápio para estabelecimentos parceiros.<br>**2.** Cadastrar um novo item no cardápio.<br>**3.** Alterar o preço de um item existente.<br>**4.** Acessar a seção de configurações de horário de funcionamento.<br>**5.** Definir um novo horário de funcionamento.    |
| Critérios de Êxito     |   O cadastro e a alteração do cardápio são bem-sucedidos, e o horário de funcionamento é definido corretamente. |
| Dados de entrada   |   Novo item no cardápio, preço alterado, novo horário de funcionamento.     | 
| Resultado Obtido   |                                                                                                                                                                                                           | 

| Caso de Teste      | CT-005                                                                                                                                                |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Requisitos Associados  | **RNF-01, RNF-02, RNF-03, RNF-04, RNF-05**                                    |
| Objetivo do Teste      | Verificar se o sistema é responsivo, garante a privacidade e segurança das informações dos usuários, é fácil de manter e atualizar, é compatível com os principais sistemas operacionais, e não funciona com delivery. |
| Passos                 | **1.** Acessar a aplicação a partir de diferentes tamanhos de tela.<br>**2.** Realizar ações na aplicação e verificar se as informações dos usuários são protegidas.<br>**3.** Verificar a facilidade de manutenção e atualização do sistema.<br>**4.** Testar a compatibilidade com os sistemas operacionais Android e iOS.<br>**5.** Tentar realizar um pedido de delivery.  |
| Critérios de Êxito     |   O sistema é responsivo, protege as informações dos usuários, é fácil de manter e atualizar, é compatível com os sistemas operacionais Android e iOS, e não permite pedidos de delivery. |
| Dados de entrada   |        **N/A**                                                                                                                                                                                                      | 
| Resultado Obtido   |                                                                                                                                                                                                           | 
