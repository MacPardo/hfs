(function(a){function e(e){for(var o,i,n=e[0],c=e[1],u=e[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&m.push(t[i][0]),t[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(a[o]=c[o]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var a,e=0;e<r.length;e++){for(var s=r[e],o=!0,n=1;n<s.length;n++){var c=s[n];0!==t[c]&&(o=!1)}o&&(r.splice(e--,1),a=i(i.s=s[0]))}return a}var o={},t={app:0},r=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return a[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=a,i.c=o,i.d=function(a,e,s){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:s})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var o in a)i.d(s,o,function(e){return a[e]}.bind(null,o));return s},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(a,e,s){a.exports=s("56d7")},"034f":function(a,e,s){"use strict";var o=s("85ec"),t=s.n(o);t.a},"0e4f":function(a,e,s){a.exports=s.p+"img/missao.e5578307.jpg"},"1c40":function(a,e,s){},"3eb4":function(a,e,s){"use strict";var o=s("1c40"),t=s.n(o);t.a},"56d7":function(a,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("ab8b");var o=s("2b0e"),t=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{attrs:{id:"app"}},[a._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"text-left"},[s("Origem"),s("SetePovosdasMissoes"),s("OrganizacaoUrbanistica"),s("OrganizacaoEconomica"),s("GuerraGuaranitica"),s("QuizIntro")],1),s("Quiz")],1)])},r=[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"jumbotron mission-header"},[s("h1",{staticClass:"text-light text-xl-center"},[a._v("JESUÍTAS E OS SETE POVOS DAS MISSÕES")])])}],i=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",[a.finished?s("QuizResults",{attrs:{answers:a.answers,restartQuiz:a.restartQuiz}}):s("Question",{key:a.currentQuestionIndex,attrs:{title:a.currentQuestion.title,alternatives:a.currentQuestion.alternatives,onComplete:a.onComplete}})],1)},n=[],c=[{title:"Quem eram os jesuítas?",alternatives:[{text:"Os indígenas que habitavam a região",correct:!1},{text:"Os caçadores de indígenas",correct:!1},{text:"Padres que pertenciam à Companhia de Jesus",correct:!0}]},{title:"Como os povos das missões se sustentavam?",alternatives:[{text:"Pelo comércio com os impérios",correct:!1},{text:"Pela produção de alimentos",correct:!0},{text:"Pela caça de animais",correct:!1}]},{title:"Qual era a principal construção das missões?",alternatives:[{text:"A praça",correct:!1},{text:"A escola",correct:!1},{text:"A igreja",correct:!0}]},{title:"Qual era o principal objetivo dos jesuítas?",alternatives:[{text:"Evangelizar e espalhar a cultura europeia aos povos indígenas",correct:!0},{text:"Escravizar os indígenas",correct:!1},{text:"Montar um exército",correct:!1}]},{title:"Por que as missões foram destruídas?",alternatives:[{text:"Porque os jesuítas ordenaram",correct:!1},{text:"Porque os portugueses queriam expulsar os povos das missões de seu novo território",correct:!0},{text:"Foram destruídas por uma catástrofe natural",correct:!1}]}],u=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"card mt-4 mb-4"},[s("div",{staticClass:"card-body"},[s("h3",[a._v(a._s(a.title))]),s("ul",{staticClass:"list-group"},a._l(a.alternatives,(function(e,o){return s("li",{key:o,class:"list-group-item "+a.btnClass(o),on:{click:function(e){return a.chooseAlternative(o)}}},[a._v(a._s(e.text)+" ")])})),0),s("button",{staticClass:"btn btn-outline-secondary mt-4",attrs:{disabled:!a.choiceMade},on:{click:function(e){return a.complete()}}},[a._v("Próxima Pergunta")])])])},l=[],d={name:"Question",data:function(){return{choiceMade:!1,correctAnswer:!1,answer:0}},props:{title:String,alternatives:Array,onComplete:Function},methods:{chooseAlternative:function(a){this.choiceMade||(this.correctAnswer=this.alternatives[a].correct,this.choiceMade=!0,this.answer=a)},btnClass:function(a){return this.choiceMade&&this.alternatives[a].correct?"list-group-item-success":this.choiceMade&&this.answer===a?"list-group-item-danger":this.choiceMade?"list-group-item-link":"list-group-item-outline-primary"},complete:function(){this.choiceMade&&this.onComplete(this.correctAnswer)}}},m=d,p=(s("3eb4"),s("2877")),v=Object(p["a"])(m,u,l,!1,null,"5ac4528b",null),g=v.exports,f=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"card mt-4 mb-4"},[s("div",{staticClass:"card-body"},[s("h3",[a._v(" Você acertou "),s("span",{staticClass:"font-weight-bolder text-success"},[a._v(a._s(a.correctCount))]),a._v(" de "),s("span",{staticClass:"font-weight-bolder text-primary"},[a._v(a._s(a.questionCount))])]),s("button",{staticClass:"btn btn-outline-secondary mt-4",on:{click:function(e){return a.restartQuiz()}}},[a._v("Tente de novo!")])])])},h=[],_=(s("4de4"),{name:"QuizResults",props:{answers:Array,restartQuiz:Function},computed:{questionCount:function(){return this.answers.length},correctCount:function(){return this.answers.filter((function(a){return a})).length}}}),b=_,x=Object(p["a"])(b,f,h,!1,null,null,null),j=x.exports,C={components:{Question:g,QuizResults:j},name:"Quiz",data:function(){return{questions:c,currentQuestionIndex:0,finished:!1,answers:[]}},computed:{currentQuestion:function(){return this.questions[this.currentQuestionIndex]}},methods:{nextQuestion:function(){this.currentQuestionIndex===c.length-1?(console.log("index is",this.currentQuestionIndex,this.finished),this.finished=!0):this.currentQuestionIndex++},onComplete:function(a){console.log("completedddd",a),this.answers.push(a),this.nextQuestion()},restartQuiz:function(){console.log("hellooooo"),this.finished=!1,this.currentQuestionIndex=0,this.answers=[]}}},z=C,q=Object(p["a"])(z,i,n,!1,null,null,null),O=q.exports,E=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},S=[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"container mission-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("h1",[a._v("Origem")]),s("hr"),s("p",[a._v("Durante a colonização do Brasil pelos portugueses, a ordem Companhia de Jesus, conhecidos como Jesuítas, cumpriu um papel de destaque na organização social da colônia. Os jesuítas liderados por Manoel da Nóbrega chegaram à colônia Brasil em 1549. A principal função dos jesuítas, ao virem ao Brasil, era "),s("b",[a._v("evangelizar")]),a._v(", "),s("b",[a._v("catequizar")]),a._v(" e tornar cristãos os indígenas que habitavam estas terras, ou seja trazer a religião predominante na europa bem como sua cultura.")]),s("p",[a._v("Para que a catequização fosse realizada, os jesuítas aprenderam o Tupi, língua utilizada pelos indígenas Guarani, assim como ensinaram os indígenas a língua portuguesa e espanhola para a leitura de trechos bíblicos e o ensino da prática religiosa católica. Um dos nomes mais conhecidos no processo de evangelização que chegaram até nós foi o do padre José de Anchieta.")]),s("p",[a._v("Como a educação tradicional indígena era diferente, baseada na solidariedade e na cooperação, os indígenas mais novos aprendiam com os mais velhos, foram necessárias algumas mudanças.")]),s("p",[a._v("Nas "),s("b",[a._v("missões")]),a._v(", locais onde os jesuítas habitavam por vezes com milhares de indígenas, construiu-se um processo de trocas culturais onde muitas coisas foram adaptadas ao modo de viver indígena. De certo modo havia também o interesse que os indígenas passassem a viver de acordo com a cultura europeia: que as famílias fossem nucleares (pai, mãe e filhos do casal), que eles se fixassem em um local (grande parte das tribos indígenas era semi nômade, vivendo em constante deslocamento e passassem a adotar os ritmos e as disciplinas de trabalho que impunham os europeus. Esse processo ficou também conhecido como aculturação.")])])])])}],M={name:"Origem"},y=M,Q=Object(p["a"])(y,E,S,!1,null,null,null),P=Q.exports,w=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},A=[function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"container mission-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("h1",[a._v("Sete Povos das Missões")]),o("hr")]),o("div",{staticClass:"col-lg-6"},[o("img",{staticClass:"img-fluid rounded-lg",attrs:{src:s("c9ad"),alt:""}}),o("span",{staticStyle:{"font-style":"italic","font-size":"14px"}},[o("b",[a._v("Mapa com a localização dos sete povos das missões.")])])]),o("div",{staticClass:"col-lg-6"},[o("p",[a._v("Em 1682, os jesuítas e os indígenas, começaram a retornar à margem esquerda do rio Uruguai, às terras do atual Rio Grande do Sul, fundando os "),o("b",[a._v("Sete Povos das Missões")]),a._v(". Foram eles:")]),o("p",[a._v("● São Francisco de Borja (1682) - pelo Padre Francisco Garcia;")]),o("p",[a._v("● São Nicolau (1687);")]),o("p",[a._v("● São Luiz Gonzaga (1687);")]),o("p",[a._v("● São Miguel Arcanjo (1687) foi a capital;")]),o("p",[a._v("● São Lourenço Mártir (1690);")]),o("p",[a._v("● São João Batista (1697); foi fundada pelo músico e arquiteto Padre Antônio Sepp, que por ter sólida instrução de música vocal e instrumental, o que lhe deu grande destaque como músico. Os instrumentos de sua orquestra foram feitos por ele e seus discípulos. Extraiu o primeiro ferro das Missões, fazendo instrumentos de toda espécie, bem como os sinos do seu povo. Sua obra-prima foi o relógio da torre da igreja que, ao dar as horas, fazia desfilar, pelo mostrador, as imagens dos doze apóstolos.")])]),o("div",{staticClass:"col-lg-12"},[o("p",[a._v("● Santo Ângelo Custódio (1706). Antes de fundarem cada aldeia, os jesuítas cuidavam para que a escolha recaísse em lugares altos, de fácil defesa, com matas e água abundante. Com alguns indígenas, iniciavam as plantações e as construções provisórias. Quando as lavouras já estavam produzindo, vinham as famílias, que começavam a erguer as casas projetadas pelos padres. As povoações cresciam em quarteirões regulares, conforme a arquitetura e o urbanismo típicos dos espanhóis, e idealizado pelo Padre Roque Gonzáles, muito antes de morrer.")]),o("p",[a._v('Com o trabalho coletivo dos indígenas e a coordenação geral dos jesuítas, foram construídos os "30 Povos das Missões", em áreas que hoje fazem parte do Brasil, Argentina e Paraguai.')])])])])}],G={name:"SetePovosdasMissoes"},$=G,I=Object(p["a"])($,w,A,!1,null,null,null),T=I.exports,N=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},k=[function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"container mission-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("h1",[a._v("Organização Urbanística")]),o("hr"),o("p",[a._v("Nessa época, a praça era considerada como centro e a igreja como o prédio mais importante da região. Junto à igreja ficava a residência dos padres, o colégio, as oficinas, o cemitério. As casas dos indígenas, contornavam a praça. Essas casas eram uniformes, feitas de pedra, com "),o("b",[a._v("alpendres")]),a._v(" e cobertas por telhas.")]),o("p",[a._v("Os indígenas dormiam em redes de algodão, que serviam também de cadeira, quando não estavam em cadeiras de madeira ou ainda de "),o("b",[a._v("cócoras")]),a._v(" ou no chão.")]),o("p",[a._v("Num dos lados da igreja estava o cemitério e a casa grande, chamada de "),o("b",[a._v("Cotiguaçu")]),a._v(", onde abrigavam-se as viúvas, as mulheres sozinhas e os órfãos.")]),o("p",[a._v('No outro lado da igreja ficava o colégio, onde era ministrado o ensino onde só estudavam os meninos filhos de caciques e administradores; as meninas aprendiam "prendas domésticas". ')])]),o("div",{staticClass:"col-lg-6"},[o("img",{staticClass:"img-fluid rounded-lg",attrs:{src:s("0e4f"),alt:""}}),o("span",{staticStyle:{"font-style":"italic","font-size":"14px"}},[o("b",[a._v("Maquete da organização das reduções")]),a._v(" - Identificação dos locais: 1. praça; 2. igreja; 3. colégio; 4. oficinas; 5. cemitério; 6. hospital; 7. habitações; 8. capela; 9. horta; 10. moinho; 11. olaria; 12. curral; 13. lavoura.")])]),o("div",{staticClass:"col-lg-12"},[o("p",[a._v("Na enfermaria, localizada ao lado do cemitério, atendiam-se os doentes em estado mais grave ou que apresentavam perigo de "),o("b",[a._v("contágio")]),a._v(".")]),o("p",[a._v("Dentre as doenças contraídas dos padres jesuítas estão a gripe, o sarampo e a varíola, que vitimaram muitos indígenas em razão deles não terem imunidade natural a estes males, ou, ainda, pela imposição aos indígenas à nova maneira de viver.")]),o("p",[a._v("Os indígenas, eram enterrados no cemitério, os jesuítas ficavam enterrados na igreja, junto ao alto mor. Atrás da igreja, os padres mantinham a horta, o pomar e o jardim.")])])])])}],J={name:"OrganizacaoUrbanistica"},U=J,B=Object(p["a"])(U,N,k,!1,null,null,null),F=B.exports,D=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},R=[function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"container mission-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("h1",[a._v("Organização Econômica")]),o("hr"),o("p",[a._v("Nos locais onde havia água, a população construía fontes de pedras para se abastecer, lavar a roupa e tomar banho.")]),o("p",[a._v("A agricultura era o principal meio de prover à alimentação dos indígenas. Eles cultivavam milho, mandioca, abóbora, algodão, cana-de-açúcar, hortaliças e árvores frutíferas. Os excedentes eram comercializados.")]),o("p",[a._v("A criação de gado fazia-se em estâncias longe dos povos. Nessas estâncias também se criavam cavalos, ovelhas, cabras, porcos, galinhas. Os indígenas, também se serviam do leite, couro e sebo. Estes últimos eram muito cotados na época.")]),o("p",[a._v("Música, canto, dança, teatro, desenho, pintura e escultura foram os recursos usados pelos jesuítas, como apoio à catequese. Desde pequenos, alguns indígenas, aprendiam a tecer e a fabricar instrumentos musicais (como flautas, fagotes, clarinetes, liras, violinos, violões, trompetes e clarins) com cópias originais europeias. Os guaranis tinham capacidade para criar e copiar. Eram escultores, cantores, músicos, impressores, pedreiros, ferreiros, cujos trabalhos evidenciam a presença dos traços culturais indígenas na produção.")]),o("p",[a._v("Nos Sete Povos das Missões, extraía-se erva-mate, ferro e madeira. Logo, os indígenas, aprenderam a fazer mudas e plantaram grandes ervais. Eles utilizavam da erva-mate para tomar chimarrão com a permissão dos jesuítas, pois foi provado que não viciava.")])]),o("div",{staticClass:"col-lg-6"},[o("img",{staticClass:"img-fluid rounded-lg",attrs:{src:s("c6b3"),alt:""}}),o("span",{staticStyle:{"font-style":"italic","font-size":"14px"}},[o("b",[a._v("Obras de artes produzidas pelos indígenas com a extração da madeira")])])]),o("div",{staticClass:"col-lg-6"},[o("p",[a._v("A madeira era extraída para o uso do povo e com ela foram feitas muitas obras de arte como imagens, "),o("b",[a._v("candelabros")]),a._v(" e outras.")]),o("p",[a._v("Os indígenas Guaranis das Missões vestiam-se conforme a orientação dos padres jesuítas. As roupas de uso comum eram feitas pelas donas de casa. Umas faziam o fio, outras teciam. Eles não se acostumaram ao uso de meias e sapatos, usando-os somente em ocasiões especiais.")]),o("p",[a._v("Com essa organização, os jesuítas conseguiram que as missões produzissem para seu próprio consumo, além de fornecerem excedentes que eram comercializados. Toda essa situação levou os jesuítas a entrarem em conflitos com os colonos, que tinham interesse na escravização indígena.")]),o("p",[a._v(" As missões serviam como áreas protegidas da ação dos colonos, mas também resultaram em fonte de força de trabalho para os jesuítas que se enriqueceram com a exploração dos indígenas.")])]),o("div",{staticClass:"col-lg-12"},[o("p",[a._v("Além do que era comercializado nas missões, os jesuítas conseguiram acumular fortuna com a posse de enormes extensões de terras e engenhos. Os jesuítas permaneceram na colônia portuguesa na América até 1759, quando foram banidos das colônias portuguesas.")])])])])}],L={name:"OrganizacaoEconomica"},V=L,H=Object(p["a"])(V,D,R,!1,null,null,null),K=H.exports,W=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},X=[function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"container mission-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12"},[o("h1",[a._v("Guerra Guaranítica")]),o("hr")]),o("div",{staticClass:"col-lg-6"},[o("p",[a._v("Em 1750, Portugal e Espanha assinaram o Tratado de Madri. Esse tratado redefinia a divisão das terras da América do Sul entre portugueses e espanhóis. De acordo com ele, a região dos Sete Povos das Missões (atual região oeste do RS), que era da Espanha, deveria ser entregue aos portugueses. Em troca, a Espanha ficaria com a Colônia do sacramento. Os jesuítas espanhóis, que atuavam na área, não aceitaram o acordo e armaram os indígenas da região.")]),o("p",[a._v("Quando os portugueses foram tomar posse do local, em 1754, houve conflito militar entre esses e os indígenas, que não aceitaram deixar suas terras, dando início a Guerra Guaranítica.")]),o("p",[a._v("O principal líder indígena guarani, durante a Guerra Guaranítica, foi Sepé Tiaraju. É considerado até hoje uma espécie de herói e símbolo da resistência indígena contra a opressão dos colonizadores europeus.")]),o("p",[a._v("As principais consequências desta guerra foi a morte de mais de vinte mil indígenas, guaranis da região dos Sete Povos das Missões, a destruição dos Sete Povos das Missões em 1756 e a diminuição da influência dos jesuítas na região sul do Brasil.")])]),o("div",{staticClass:"col-lg-6"},[o("img",{staticClass:"img-fluid rounded-lg",attrs:{src:s("5890"),alt:""}}),o("span",{staticStyle:{"font-style":"italic","font-size":"14px"}},[o("b",[a._v("Mapa demonstrando a delimitação do Tratado de Madri.")])])])])])}],Y={name:"GuerraGuaranitica"},Z=Y,aa=Object(p["a"])(Z,W,X,!1,null,null,null),ea=aa.exports,sa=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},oa=[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"container mission-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("h1",[a._v("Questionário")]),s("p",[a._v("Faça o questionário abaixo para testar seus conhecimentos!")])])])])}],ta={name:"QuizIntro"},ra=ta,ia=Object(p["a"])(ra,sa,oa,!1,null,null,null),na=ia.exports,ca={name:"app",components:{Quiz:O,Origem:P,SetePovosdasMissoes:T,OrganizacaoUrbanistica:F,OrganizacaoEconomica:K,GuerraGuaranitica:ea,QuizIntro:na}},ua=ca,la=(s("034f"),Object(p["a"])(ua,t,r,!1,null,null,null)),da=la.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(a){return a(da)}}).$mount("#app")},5890:function(a,e,s){a.exports=s.p+"img/tratadoMadri.448957fe.jpg"},"85ec":function(a,e,s){},c6b3:function(a,e,s){a.exports=s.p+"img/imagensIndigenas.ccf36e61.jpg"},c9ad:function(a,e,s){a.exports=s.p+"img/setePovosMissoes.20ab1476.jpg"}});
//# sourceMappingURL=app.e4baff9b.js.map