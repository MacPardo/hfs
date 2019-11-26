<template>
  <div id="app" class="container">
    <h1>JESUÍTAS E OS SETE POVOS DAS MISSÕES</h1>
    <hr />

    <div class="text-left">
      
      <h1>Origem</h1>
      <p>Durante a colonização do Brasil pelos portugueses, a ordem Companhia de Jesus, conhecidos como Jesuítas, cumpriu um papel de destaque na organização social da colônia.</p>
      <p>Os jesuítas liderados por Manoel da Nóbrega chegaram à colônia Brasil em 1549, junto a Tomé de Sousa, que foi o primeiro governador-geral enviado por Portugal. A principal função dos jesuítas, ao virem ao Brasil, era evangelizar, catequizar e tornar cristãos os indígenas que habitavam estas terras.</p>
      <p>Para que a catequização fosse realizada, era necessário que os indígenas aprendessem a língua portuguesa para a leitura de trechos bíblicos e o ensino da prática religiosa católica. Um dos nomes mais conhecidos no processo de evangelização que chegaram até nós foi o do padre José de Anchieta.</p>
      <p>Como a educação tradicional indígena era diferente, baseada na solidariedade e na cooperação, os índios mais novos aprendiam com os mais velhos, foram necessárias algumas mudanças.</p>
      <p>Nas missões, locais onde os jesuítas habitavam por vezes com milhares de indígenas, foi necessário que os jesuítas mudassem os hábitos dos indígenas. O interesse era que eles passassem a viver de acordo com a cultura europeia: que as famílias fossem nucleares (pai, mãe e filhos do casal), que eles se fixassem em um local (grande parte das tribos indígenas era semi nômade, vivendo em constante deslocamento e passassem a adotar os ritmos e as disciplinas de trabalho que impunham os europeus. Esse processo ficou também conhecido como aculturação.</p>

      <h1>Organização Urbanística</h1>
      <p>Nessa época, a praça era considerada como centro e a igreja como o prédio mais importante da região. Junto à igreja ficava a residência dos padres, o colégio, as oficinas, o cemitério. As casas dos índios contornavam a praça.</p>
      <p>Num dos lados da igreja estava o cemitério e a casa grande, chamada de  COTIAGUAÇU, onde abrigavam-se as viúvas, as mulheres sozinhas e os órfãos.</p>
      <p>No outro lado da igreja ficava o colégio, onde era ministrado o ensino. Na enfermaria, localizada ao lado do cemitério, atendiam-se os doentes</p>
      <p>Os índios eram enterrados no cemitério, os jesuítas ficavam enterrados na igreja, junto ao alto mor. Atrás da igreja, os padres mantinham a horta, o pomar e o jardim.</p>

      <h1>Organização Econômica</h1>
      <p>Nos locais onde havia água, a população construía fontes de pedras para se abastecer, lavar a roupa e tomar banho.</p>
      <p>A agricultura era o principal meio de  prover à alimentação dos índios. Eles cultivavam milho, mandioca, abóbora, algodão, cana-de-açúcar, hortaliças e árvores frutíferas. Os excedentes eram comercializados..</p>
      <p>A criação de animais fazia-se em estâncias longe dos povos. Os índios também se serviam do leite, couro e sebo.</p>
      <p>Música, canto, dança, teatro, desenho, pintura e escultura foram os recursos usados pelos jesuítas, como apoio à catequese. Desde pequenos, alguns índios aprendiam a tecer e a fabricar instrumentos musicais com cópias originais europeias.</p>
      <p>Nos Sete Povos das Missões, extraía-se erva-mate, ferro e madeira. Logo, os índios aprenderam a fazer mudas e plantaram grandes ervais.</p>
      <p>Os índios Guaranis das Missões vestiam-se conforme a orientação dos padres jesuítas. As roupas de uso comum eram feitas pelas donas de casa. Umas faziam o fio, outras teciam.</p>
      <p>As missões serviam como áreas protegidas da ação dos colonos, que buscavam escravizar os indígenas.</p>
      <p>Além do que era comercializado nas missões, os jesuítas conseguiram acumular fortuna com a posse de enormes extensões de terras e engenhos.</p>

      <h1>Guerra Guaranítica</h1>
      <p>Em 1750, Portugal e Espanha assinaram o Tratado de Madri. Esse tratado redefinia a divisão das terras da América do Sul entre portugueses e espanhóis. De acordo com ele, a região dos Sete Povos das Missões (atual região oeste do RS), que era da Espanha, deveria ser entregue aos portugueses.</p>
      <p>Os jesuítas espanhóis, que atuavam na área, não aceitaram o acordo e armaram os indígenas da região.</p>
      <p>Quando os portugueses foram tomar posse do local, em 1754, houve conflito militar entre esses e os índios, que não aceitaram deixar suas terras. Teve início então a Guerra Guaranítica.</p>
      <p>O principal líder indígena guarani, durante a Guerra Guaranítica, foi Sepé Tiaraju. É considerado até hoje uma espécie de herói e símbolo da resistência indígena contra a opressão dos colonizadores europeus.</p>
      <p>As principais consequências desta guerra foi a morte de mais de vinte mil índios guaranis da região dos Sete Povos das Missões, a destruição dos Sete Povos das Missões em 1756 e a diminuição da influência dos jesuítas na região sul do Brasil.</p>
    </div>
    <Quiz />
  </div>
</template>

<script>
import Quiz from "./components/quiz/Quiz.vue";

export default {
  name: "app",
  components: {
    Quiz
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
