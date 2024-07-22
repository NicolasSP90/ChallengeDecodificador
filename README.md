<h1>Oracle Next Education - Challenge - Decodificador de Texto</h1>

<h2>Sobre o Desafio</h2>

<p>O objetivo do projeto é utilizar dos conhecimentos em HTML, CSS e JavaScript aprendidos no programa da Alura para criar um página responsiva para codificar e descodificar um texto baseado em uma chave simples de criptografia.<br>
O design da página foi fornecido no <a href="https://www.figma.com/design/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---Lógica?node-id=0-1&t=38S9DOOTjcA7oWOo-0">figma</a> e pode ser encontrado em na pasta documents.<br>

<h2>Chave de Criptografia</h2>
As "chaves" de criptografia que utilizaremos são:
<li>A letra "e" é convertida para "enter"
<li>A letra "i" é convertida para "imes"
<li>A letra "a" é convertida para "ai"
<li>A letra "o" é convertida para "ober"
<li>A letra "u" é convertida para "ufat"

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
<li>Na criptografia, tentei utilizar uma lógica apenas para criptografar <-> descriptografar. Para isso criei duas listas, uma com as letas e outra com as chaves. A ideia seria apenas trocar a chamada das listas na função. Ex: Criptografar = funcao(lista1, lista2); Descriptografar = funcao(lista2,lista1). Não funcionou por conta da palavra "fames". Para essa palavra em específico, se for descriptografada na mesma ordem em que foi criptografada, a palavra final é apenas "fa" (Criptografar: fames -> (e) famenters -> (a) faimenters | Desciptografar: faimenters -> (enter) faimes -> (imes) fai -> (ai) fa). Por conta disso, a função tem um argumento a mais para identificar a ação a ser feita, sendo que criptografar utiliza a conversão do início das listas para o final, enquanto descriptografar utiliza a conversão do final das listas para o início.