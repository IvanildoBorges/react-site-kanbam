# react-site-kanbam
**Link da aplicação em funcionamento** <br>
<a href="https://appkanban.netlify.app/">App Kanban</a>

**Resumo** <br>
Aplicação react com typescript para criação e gerência de tarefas usando metodologia agil kanban

**Descrição** <br>
> 1 - Essa aplicação foi construída usando react com typescript como forma para treinar os conhecimentos sobre a biblioteca React <br>
> 2 - Dentre as funcionalidades, você pode: criar. excluir e editar determinada tarefa<br>
> 3 - Além disso, foi construída num escopo para fácil integração com backend, caso alguém deseje fazer isso<br>
> 4 - As habilidades treinadas nesta aplicação foram:
_- Anatomia de um app_<br>
_- Componentização_<br>
_- Estilização com styled-components_<br>
_- PropTypes e Type_<br>
_- Hooks (useState, useEffect)_<br>
_- Redenrização condicional_<br>
_- Filtros e array map_<br>
_- BÔNUS: Deploy_

**Introdução** <br>
_A princípio não utilizaremos a ferramenta de criação de aplicações react do Facebook (CRA - Create React App), pois ela se tornou um pouco menos performática do que outras ferramentas, por esse motivo, utilizaremos o <a href="https://vitejs.dev/">ViteJS</a> como ferramenta para criação do nosso projeto, feita com tecnologias mais perfomáticas como GO._<br>
_Usaremos as bibliotecas para produção: do Axios, prop-types e styled-components; e para desenvolvimento: @types/styled-components. Então já procure instalar essas denpendências._

**Anatomia de um app**<br>
> Primeiramente, só pra deixar registrado que não existe uma forma fixada de fazer a organização do seu projeto, mas sim um concenso de formas mais práticas, a seguir mostrarei uma dessas formas e mostrar a anatomia da aplicação react
_package.json  - é um arquivo que serve para controlar as dependencias do seu projeto_<br>
_public - é a pasta contendo o arquivo buildado para produção, ou seja, contendo o site typescript convertido em javascript puro_<br>
_src - é a pasta que contém todos os nossos arquivos para construção da aplicação_<br>
_index.html - é a página html gerada quando a aplicação é iniciada, é nela onde estará todo o html da aplicação_<br>
_main.tsx - é o arquivo que contem o método que renderiza as páginas da aplicação para ser carregada no index.html_<br>
_app.tsx - é a primeira feature ou página do nosso site, geralmente usamos ela pra carregar nossos componentes_<br>
_assets - é a pasta que contém nossa mídia usada na aplicação_<br>
_components - é a pasta onde contém seus componentes personalizados para páginas e layout do site_<br>
_globalStyle - é a pasta que contém o estilo global de todo o site, podendo ser editada em sua preferência_<br>
_model - é a pasta que contém os schemas ou modelos similiares aos das tabelas do banco de dados, para que possamos enviar ou receber os dados na forma e tipo especificadas_<br>
_services - é a pasta que contém todos os serviços externos que nossa aplicação precisa para funcionar, nela onde encontramos o cliente de acesso a api_<br>
_utils - são os arquivos de dados que podemos usar nos componentes, seja cores personalizadas, tamanhos de fontes, etc_

**Componentização**<br>
_Componente react nada mais é do que uma função javascript (jsx) que retorna um html, no nosso caso usaremos funções com typescript (tsx) para retornar nossos componentes, por ser uma linguagem mais moderna e tipada_<br>
_Na pasta assests crie uma pasta chamada components, e dentro dela crie outra pasta chamda layout para poder guardar os componentes html semanticos, depois crie um arquivo chamado NavBar.tsx_<br>
_Crie uma função chamada NavBar()_<br>
_No arquivo NavBar iremos criar nossos componentes estilizados com a bibliioteca externa_

**Estilização com styled-components**<br>
_No arquivo NavBar, vamos importa a biblioteca styled-components_<br>
_Para criar nosso primeiro componente, basta criar uma constante Nav que recebe um styled.nav``_<br>
_Dentro das aspas (crase) colocamos nosso código css para estilizar o componente Nav_<br>
_Dai chamamos esse componente dentro da funcao NavBar() como se fosse uma tag html mesmo_<br>
_VocÊ acaba de criar seu primeneiro componente customizado. Parabéns!_<br>
_Podemos também adicionar tags html dentro de componentes estilizados como a span e button, ou adicionar mais componentes customizados como o ModeScheme_

**Componentização entre componentes**<br>
_Como já vimos, podemos compor componentes com mais componentes_<br>
_Então vamos chamar nosso componente NavBar no componente App_<br>
_Para isso vamos excluir todo o codigo do componente App e deixar a função App() com retorno vazio_<br>
_Em seguida, chamamos nosso componente NavBar dentro do retorno da função App(). Não esquecer de importar o NavBar para não dar erro_<br>
_Para ver se tudo funcionou, execute o comando npm run dev e você verá sua aplicação rodando no navegador no endereço similiar a esse http://localhost:5173/_

_Agora iremos criar nossos componente Task para poder criar, atualiar e deletar determinadas tarefas da lista de tasks_<br>
_Primeiro, crie mais um componente nas pasta components, mas dessa vez fora da pasta layout, na raiz da components_<br>
_Chame o componente de Task_

**PropTypes e Type**<br>

**Hooks (useState, useEffect)**<br>

**Redenrização condicional**<br>

**Filtros e array map**<br>

**BÔNUS: Deploy**<br>
