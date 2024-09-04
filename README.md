![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-696969?style=for-the-badge&logo=figma&logoColor=figma)
![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![LiveServer](https://img.shields.io/badge/LiveServer-purple?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<h1>Oracle Next Education - Challenge - Decodificador de Texto</h1>

<h2>Sobre o Desafio</h2>

<p>O objetivo do projeto é utilizar dos conhecimentos em HTML, CSS e JavaScript aprendidos no programa da Alura para criar um página responsiva para codificar e descodificar um texto baseado em uma chave simples de criptografia.<br>
O design da página foi fornecido no <a href="https://www.figma.com/design/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---Lógica?node-id=0-1&t=38S9DOOTjcA7oWOo-0">figma</a> e pode ser encontrado em na pasta documents.<br>

<h2>Chave de Criptografia</h2>
As "chaves" de criptografia que utilizaremos são:

```
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
```

<h2>Requisitos</h2>
<li>Deve funcionar apenas com letras minúsculas
<li>Não devem ser utilizados letras com acentos nem caracteres especiais
<li>Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:<br>
"gato" => "gaitober"<br>
gaitober" => "gato"<br>

<li>A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
<li>O resultado deve ser exibido na tela.

<h2>Extras</h2>
<li>Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

<h2>Notas</h2>
<li>Inicialmente o projeto foi feito como disponibilizado no Figma. A ideia de transformar na temática de Matrix veio depois. Com isso organizei os arquivos de estilização em específicos (para cada estilo) e gerais (comuns a ambos).

<li>Na manipulação de strings (Criptografia), tentei utilizar uma lógica apenas para criptografar e descriptografar. Para isso criei duas listas, uma com as letas e outra com as chaves. A ideia seria apenas trocar a chamada das listas na função. Ex: Criptografar -> funcao(lista1, lista2); Descriptografar -> funcao(lista2, lista1). Quando testado com um parágrafo de "Lorem Ipsum" (do próprio figma), foi verificado um prolema por conta da palavra "fames". Para essa palavra em específico, se for descriptografada na mesma ordem em que foi criptografada, a palavra final é apenas "fa" (Criptografar: fames -> (e) famenters -> (a) faimenters | Desciptografar: faimenters -> (enter) faimes -> (imes) fai -> (ai) fa). Por conta disso, a função tem um argumento a mais para identificar a ação a ser feita: para criptografar utiliza a conversão no sentido do início das listas para o final, enquanto descriptografar utiliza a conversão do final das listas para o início.

<li>A criptografia se dá, primeiro deixanto todo o texto em letras minúsculas. Após isso o texto passa por uma normalização de caracteres para remoção de acentos. e então é criptografado pelas regras do problema. Após isso o texto é fatiado utilizando regex definindo o ponto final como separador. Dessa forma se obtém uma lista onde cada elemento dessa lista é uma frase e a partir disso, cada elemento é tratado para que a primeira letra seja maiúscula e depois o texto é novamente unificado. Isso foi feito para que seja mantida a formatação de parágrafos do texto inserido.

<li>O background de Digital Rain (pode ser acessado <a href="https://github.com/Rezmason/matrix">aqui</a>) foi adicionado em um iframe. O motivo principal foi para praticar a estilização de uma tag específica no projeto ao invés de apenas jogar o arquivo JS. Isso acabou mudando o modo de responsividade e o tamanho de telas utilizado inicialmente. O ideal não seria utilizar no iframe, mas sim importar o JS para o projeto, mas o objetivo (pessoal) era justamente adicionar um elemento externo diretamente na estilização do html.
