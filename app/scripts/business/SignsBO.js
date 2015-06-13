angular.module('cabalaApp').factory('SignsBO', [function () {
    'use strict';

    var signs = {
        checkPeriod: function (d, dA, dB) {
            var x = (moment([dA[0], dA[1], dA[2]], 'DD-MM-YYYY').diff(moment([d[0], d[1], 2015], 'DD-MM-YYYY')) <= 0);
            var y = (moment([dB[0], dB[1], dB[2]], 'DD-MM-YYYY').diff(moment([d[0], d[1], 2015], 'DD-MM-YYYY')) >= 0);
            return x && y;
        },
        isAries: function (d, m) { //Áries
            return signs.checkPeriod([d, m], [21, 3, 2015], [20, 4, 2015]);
        },
        isBull: function (d, m) { //Touro
            return signs.checkPeriod([d, m], [21, 4, 2015], [21, 5, 2015]);
        },
        isGemini: function (d, m) { //Gêmeos
            return signs.checkPeriod([d, m], [22, 5, 2015], [21, 6, 2015]);
        },
        isCancer: function (d, m) { //Câncer
            return signs.checkPeriod([d, m], [22, 6, 2015], [23, 7, 2015]);
        },
        isLion: function (d, m) { //Leão
            return signs.checkPeriod([d, m], [24, 7, 2015], [23, 8, 2015]);
        },
        isVirgin: function (d, m) { //Virgem
            return signs.checkPeriod([d, m], [24, 8, 2015], [23, 9, 2015]);
        },
        isLibra: function (d, m) { //Libra
            return signs.checkPeriod([d, m], [24, 9, 2015], [23, 10, 2015]);
        },
        isScorpio: function (d, m) { //Escorpião
            return signs.checkPeriod([d, m], [24, 10, 2015], [22, 11, 2015]);
        },
        isSagittarius: function (d, m) { //Sargitário
            return signs.checkPeriod([d, m], [23, 11, 2015], [21, 12, 2015]);
        },
        isCapricorn: function (d, m) { //Capricornio
            return signs.checkPeriod([d, m], [22, 12, 2015], [20, 1, 2016]);
        },
        isAquarium: function (d, m) { //Aquário
            return signs.checkPeriod([d, m], [21, 1, 2015], [19, 2, 2015]);
        },
        isPisces: function (d, m) { //Peixes
            return signs.checkPeriod([d, m], [20, 2, 2015], [20, 3, 2015]);
        },
        get: function (d, m) {
            if (signs.isAries(d, m)) {
                return {
                    'signs': 'Áries',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, os arianos são aventureiros, enérgicos, pioneiros e valentes. São rápidos, dinâmicos, seguros de si e costumam demonstrar entusiasmo para as coisas.',
                        'negative': 'Pelo lado negativo, eles podem ser egoístas e ter mal gênio. Os arianos são impulsivos e às vezes têm pouca paciência. Tendem a se arriscar muito.',
                        'youLike': 'De aventura. Um ariano gosta de ganhar e de ser espontâneo. Também gosta de apoiar as boas causas.',
                        'youDoNotLike': 'De esperar. Os arianos não suportam fracassar ou equivocar-se, e não aceitam os conselhos dos demais. Também não admitem a tirania.'
                    },
                    'description': 'O ariano é uma pessoa cheia de energia e entusiasmo. Pioneiro e aventureiro, lhe encantam as metas, a liberdade e as idéias novas. Os arianos gostam de liderar e preferem dar instruções a recebê-las. São independentes e preocupados com sua própria ambição e objetivos. Têm uma energia invejável, que às vezes lhes leva a ser agressivos, inquietos, argumentativos, teimosos. É fácil ofender um ariano, e quando se sentem ofendidos é difícil fazer as pazes com eles. Áries é o primeiro signo do zodíaco, e neste sentido seu papel é começar algo e liderar. Se um ariano acredita em uma boa causa, lutará sem descanso para promovê-la.',
                    'work': 'Os arianos são intelectuais e objetivos, ainda que algumas vezes podem chegar a um verdadeiro extremismo religioso ou político. São rápidos, mas às vezes pecam por serem muito otimistas e tentam fazer as coisas rápido demais. No entando, se um ariano é capaz de exercer auto-controle e disciplina, contribui de forma muito positiva não só ao seu meio profissional, mas também à sociedade em geral. Os arianos são excelentes atletas, escaladores, médicos, exploradores, soldados, pilotos. Também são bons líderes tanto na empresa como na política.',
                    'relationships': 'Os arianos costumam ser honesto e diretos em suas relações pessoais. São bons amigos de seus amigos, ainda que às vezes sejam irritantes e possam ferir a sensibilidade dos demais. Os arianos costumam ter uma libido alta e amam com grande paixão. Tanto que, às vezes se equivocam em suas primeiras relações e lhes custa ser fiel ou encontrar o amor de sua vida. Os arianos são pais entregados e dedicados, dispostos a fazer tudo pelo bem-estar de seus filhos. Não existe pai ou mãe mais protetor em todo o zodíaco.'
                };
            }
            if (signs.isBull(d, m)) {
                return {
                    'signs': 'Touro',
                    'characteristics': {
                        'positive': 'Paciente, persistente, decidido e fiel. A um touro lhe encanta sentir-se seguro. Tem bom coração e é muito carinhoso',
                        'negative': 'Zeloso e possessivo, um cauro pode tender a ser inflexível e ressentido. As vezes os Taurinos pecam em serem ambiciosos e liberais.',
                        'youLike': 'A estabilidade, as coisas naturais, o prazer e a comodidade. Os touro desfrutam de um bom tempo para uma reflexão e lhes encanta sentir-se atraídos por alguém.',
                        'youDoNotLike': 'As interrupções nem as pressas. Também não lhes agradam aos touro as coisas sintéticas ou falsas. Não lhes agrada sentir-se pressionados e não suportam estar demasiado tempo em casa.'
                    },
                    'description': 'Um Taurino costuma ser prático, decidido e ter uma grande força de vontade. Os touro são pessoas estáveis e conservadores, e seguirão de forma leal um líder no que têm confiança. Encanta-lhes a paz e tranqüilidade e são muito respeitosos com as leis e as regras. Respeitam os valores materiais e evitam as dívidas. São um pouco arredios à mudança. São mais práticos que intelectuais, e como lhes agrada a continuidade e a rotina, costumam ser de idéias fixas. Os Touro são prudentes, estáveis e têm um grande sentido da justiça. Não costumam afundar-se ante as dificuldades senão que seguem adiante até sair. As vezes os Touro podem ser demasiado rígidos, argumentativos, egocentrísticos e teimosos. AOS touros lhes agradam as coisas belas e costumam ser aficionados à arte e a música. Alguns touros têm uma fé religiosa pouco convencional e muito forte. Encantam-lhes os prazeres da vida, o luxo e a boa comida e bebida. De fato os touro devem esforçar-se para não se deixar levar pela tentação de satisfazer em excesso estes gostos.Ver também: Como conquistar a Tauro',
                    'work': 'No trabalho os touros são trabalhadores e não se lhes caem os anéis com nenhum tipo de trabalho manual. São fiáveis, práticos, metódicos e ambiciosos. Assumem autoridade sobre os demais, e rendem mais em postos rotineiros de confiança e responsabilidade. São criativos e empreendedores. Podem triunfar em profissões como a banca, a arquitetura, a construção, a administração, a agricultura, a medicina, a química e a indústria. Também triunfam na educação, as artes e a cozinha. Podem ser excelentes músicos e artistas.',
                    'relationships': 'Os touro são amigos fiéis e generosos. Têm uma grande capacidade para ser carinhosos ainda que rara vez façam amigos com pessoas fora de seu meio social. Evitam os conflitos e os desgostos e preferem o bom humor e a estabilidade. Não obstante, se perdem os nervos são capazes de ter um gênio tão furioso que surpreende a todos.Os touro são sensuais mas práticos, e neste sentido são casais fiéis e considerados. São bons pais e não existem demasiado de seu casal nem também não de seus filhos. Têm bastante amor próprio e tendem a ser possessivos mas se seu casal tenta fazer as pazes e compreender-lhes, fazem um esforço para esquecer seu enfado.'
                };
            }
            if (signs.isGemini(d, m)) {
                return {
                    'signs': 'Gêmeos',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, os geminianos são adaptáveis e versáteis. São intelectuais, eloquentes, carinhosos, comunicativos e inteligentes. Têm muita energia e vitalidade.',
                        'negative': 'Pelo lado negativo, os geminianos são superficiais e insconstantes. Tendem ao nervosismo e a tensão e podem ser calculistas e exigentes.',
                        'youLike': 'De falar, ler, fazer muitas coisas ao mesmo tempo. Os geminianos desfrutam com o infreqüente e a novidade. Quanto mais variedade em sua vida, melhor.',
                        'youDoNotLike': 'Da solidão. De sentir-se limitado ou atado a uma situação ou lugar. Não sente prazer com o ensino na escola, mas também não gosta de estar mentalmente inativo.'
                    },
                    'description': 'Gêmeos é o signo dos irmãos idênticos e, como tal, seu caráter é duplo, bastante complexo e contraditório. Por um lado é versátil, mas pelo outro pode não ser sincero. Costumam ter elegância e cometer os erros dos jovens. Têm a felicidade, o egocentrismo, a imaginação e a inquietude das crianças. Os geminianos começam novas atividades e planos com entusiasmo, mas muitas vezes lhes falta a constância para realizá-los. Consideram a vida como um jogo e procuram diversão e novas situações. Os geminianos costumam ser corteses, carinhosos, amáveis e generosos. Às vezes utilizam seus atributos para conseguir seus próprios objetivos e são capazes de recorrer à mentira - sem perder seu encanto - com a finalidade de obter o que querem. Desanimam-se com facilidade (como as crianças) quando não conseguem o que querem, e gostam de receber atenção, presentes e afagos. Os geminianos têm que se esforçar para não desanimar quando as coisas ficam difíceis. A inteligência e capacidade mental dos geminianos fazem com que eles gostem de desafios cerebrais e de novos conhecimentos, ainda que o processo de aprendizagem tenda a aborrecer-lhes. Têm grande capacidade analítica.',
                    'work': 'Ainda que possam ser pouco fiáveis, os geminianos podem ter muito sucesso no trabalho. Sabem utilizar muito bem a lingua, tanto escrita quanto falada, e muitos chegam a ser grandes políticos, diplomatas, oradores, predicadores, professores, jornalistas, advogados, escritores, etc. Graças a sua capacidade de falar e persuadir, são bons vendedores ou comerciantes. Também podem ter sucesso como soldados, porque adoram os atos heróicos. Podem ser bons músicos, pintores e escultores.',
                    'relationships': 'No amor os geminianos voltam a demonstrar sua natureza dupla. Têm um lado que se entrega emocionalmente, mas outro que recusa o romantismo. Tendem a ter relacionamentos curtos porque se aborrecem com a estabilidade de um namoro, uma vez conquistada. Costumam ter muitos colegas e poucos bons amigos. Os geminianos podem ser grandes tertulianos.'
                };
            }
            if (signs.isCancer(d, m)) {
                return {
                    'signs': 'Cancer',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, os cancerianos são emotivos, carinhosos, protetores e simpáticos. Um canceriano tem muita imaginação e intuição. Sabe ser cauteloso quando precisa.',
                        'negative': 'Pelo lado negativo, os cancerianos têm uma tendência ao mau humor. São calculistas, desordenados e auto compassivos. Mudam de humor facilmente e são muito suscetíveis. Custa-lhe abandonar uma situação.',
                        'youLike': 'Sua casa, o campo, as crianças. Gosta de desfrutar de seus hobbys e lhe agradam as festas. O canceriano também gosta de romance.',
                        'youDoNotLike': 'De fracasso, conselhos ou situações conflitivas. Não gostam de pessoas que lhes contrariam e que lhes digam o que fazer.'
                    },
                    'description': 'O caráter de um canceriano é o menos claro de todos os signos do zodíaco. Um canceriano pode ser de tímido e aborrecido a brilhante e famoso. Os cancerianos são conservadores e adoram a segurança e o calor do lar. De fato, para os homens de Câncer o lar é como um ninho, um refúgio para onde ir quando o estresse do trabalho é demasiado. A casa de um canceriano tende a ser seu refúgio pessoal mais do que uma vitrine para deslumbrar aos demais. Um canceriano entende que há momentos para ser sociável e outros momentos para ser solitário. Isto é uma das contradições em seu caráter. Desde fora parecem decididos, resistentes, teimosos, tenazes, energéticos, sábios e intuitivos. Não obstante, os que lhes conhecem desde a intimidade podem ver um tipo de pessoa totalmente diferente - alguém sensível, sobretudo com as pessoas de quem gosta. Os cancerianos sabem identificar-se com a situação dos outros por sua grande capacidade imaginativa. Às vezes são fantasiosos demais e pretendem construir a vida segundo um ideal romântico. Gostam de arte, música e literatura, sobretudo de artes dramáticas e de ação. Os cancerianos possuem um talento literário ou artístico considerável. Seu caminho pessoal consiste em reconciliar seu conflito interno. Por um lado, lhes encanta ser extrovertidos; por outro, têm tendência a retrair-se. Quando conseguem conciliar ambos os lados são capazes de inspirar toda uma geração, sobretudo os jovens, com suas idéias. O canceriano tem uma memória excelente, sobretudo para acontecimentos pessoais e recordações da infância, que são capazes de lembrar com o máximo detalhe. Os cancerianos vivem condicionados por suas recordações do passado e por sua imaginação sobre o futuro. O signo de Câncer tem muitos defeitos potenciais. Podem ter uma tendência à desordem, um complexo de inferioridade. Sentem-se aludidos com freqüência, e muitas vezes por causas imaginadas, sem fundamento real, e adoram receber afagos. São ambiciosos. Podem mudar sem dificuldade de profissão, de lealdade e inclusive de opinião sobre as pessoas.',
                    'work': 'Sua grande capacidade faz com que o canceriano possa ter sucesso em qualquer tipo de profissão. Interessam-lhe as opiniões dos demais e podem chegar a ser excelentes jornalistas, escritores ou políticos (ainda que seja possível que mudem de afiliação em algum momento). Podem trabalhar no setor público com sucesso. As pessoas de Câncer são muito apegadas ao lar, e isto lhes ajuda a ser grandes cozinheiros ou donas de casa. Também são bons gestores.',
                    'relationships': 'Em suas relações pessoais os canceriano são uma mistura de força e suavidade. Na vida real e em suas relações sentimentais, seu amor é intensamente leal. Ainda que tenham relações extraconjugais (o que é muito possível, porque os cancerianos, sobretudo os homens, estão abertos à excitação sensual), sua primeira responsabilidade é com sua esposa e sua família, porque o consideram seu protetor. Os cancerianos amam incondicionalmente. Também são amigos fieis.'
                };
            }
            if (signs.isLion(d, m)) {
                return {
                    'signs': 'Leão',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, o leonino é generoso, bondoso, fiel e carinhoso. É criativo, entusiasta e compreensivo com os demais.',
                        'negative': 'Pelo lado negativo, o leonino é prepotente e mandão. Pode ser intolerante e dogmático. Tende a interferir quando não deve.',
                        'youLike': 'De aventura, luxo e comodidade. Um leonino desfruta com as crianças, o teatro e as festas. Também lhe motiva o risco.',
                        'youDoNotLike': 'Do vulgar e da vida cotidiana. Foge das pessoas egoístas e mal intencionadas e não gosta da rotina ou da segurança.'
                    },
                    'description': 'Leão é o signo mais dominador do zodíaco. Também é criativo e extrovertido. São os reis entre os humanos, assim como os leões são os reis no reino animal. Têm ambição, força, valentia, independência e total segurança em suas capacidades. Não costumam ter dúvidas sobre o que fazer. São líderes sem complicações - sabem onde querem chegar e colocam todo seu empenho, energia e criatividade para conquistar seu objetivo. Não temem os obstáculos - na verdade, crescem ante eles. Em geral são bons, idealistas e inteligentes. Podem chegar a ser teimosos em suas crenças, mas sempre com uma fé e sinceridade absolutas. Os leoninos costumam gostar de luxo e poder. Seus defeitos podem ser tão amplos como suas virtudes, e um leonino excessivamente negativo pode ser uma pessoa arrogante, orgulhosa e com muito mau gênio. São capazes de utilizar truques e mentiras para desacreditar seus inimigos. Também podem adotar certo ar de superioridade e prepotência.',
                    'work': 'Os leoninos têm sucesso em postos de autoridade. Se entram para a política, querem chegar aos postos de maior poder. Muitos leoninos chegam a ser diretores de empresas. São bons gestores e são ambiciosos. Um leonino artista pode converter-se numa grande estrela das telas ou dos palcos. Os leoninos músicos costumam tocar grandes instrumentos ou dirigir orquestras.',
                    'relationships': 'Em suas relações pessoais o leonino é aberto, confiante e sincero. Diz o que pensa, mas sempre é amável. Os leoninos demoram para acertar com as pessoas e muitas vezes tendem a confiar demais em quem não merece. Adoram as relações sexuais e costumam ter muitos namoros durante a vida. São sinceros enquanto dura o amor, e gostam de estar em casa, mas não são o signo mais fiel do zodíaco.'
                };
            }
            if (signs.isVirgin(d, m)) {
                return {
                    'signs': 'Virgem',
                    'characteristics': {
                        'positive': 'Modéstia, inteligência e timidez. Os virgens costumam ser meticulosos, práticos e trabalhadores. Têm grande capacidade analítica e são fiáveis.',
                        'negative': 'Conservador e perfeccionista, um virgem tende a preocupar-se demasiado e seu lado duro pode levar-lhe a ser excessivamente crítico e duro com os demais.',
                        'youLike': 'Vida sã, fazer listas, ordem e higiene.',
                        'youDoNotLike': 'Sujeira, desordem, perigo, as pessoas vadias, a incerteza.'
                    },
                    'description': 'Virgem, o único signo representado por uma mulher, é um signo caracterizado por sua precisão, sua convencionalidad, sua atitude reservado e seu afã, as vezes até obsessão, com a limpeza. Os virgens costumam ser observadores, e pacientes. Podem parecer as vezes frios, e de fato lhes custa fazer grandes amigos. O fato que muitas de suas relações com outros resultam ser superficiais é porque em realidade os virgens temem dar rédeas a seus sentimentos e lhes falta ter segurança em suas emoções e opiniões. Preferem atuar com reservas e com uma disposição agradável. Costumam ser discretos, amáveis e divertidos com outras pessoas, e podem ajudar a resolver os problemas de terceiros com uma habilidade e sensatez que muitas vezes lhes falta em suas próprias relações pessoais. Os virgos têm encanto e dignidade a tal ponto que as vezes os varões podem aparecer algo afeminado, ainda que não o sejam. São metódicos, estudiosos e lhes agrada a lógica. Também lhes agrada aprender, e são capazes de analisar as situações mais complicadas. Não obstante, as vezes são tão meticulosos que atrasam a conclusão de projetos complicados. São muito intuitivos e são capazes de ver todos os lados de um argumento, o que faz que lhes custa chegar a conclusões firmes.',
                    'work': 'Um virgem terá mais sucesso em sua profissão como subordinado do que como líder. Falta-lhes a visão estratégica de um bom líder, e preferem objetivos claros. Sua falta de segurança em se mesma faz que também exigem muito dos demais, ainda que seu sentido da justiça faz que não se imponham sobre seus colegas. Têm especial habilidade na música, as ciências e os idiomas. Têm uma boa memória, e têm grande sucesso como bibliotecários, administrativos, contabilistas, cientistas, assistentes sociais e editores de livros. Entre as outras profissões que pode fazer bem se encontram as de medico, secretária, músico, orador, escritor, historiador e enfermeira. Seu bom gosto com a roupa e sua elegância natural faz que podem triunfar como costureiras.',
                    'relationships': 'Os virgens são carinhosos e são bons esposos e pais. Não são muito apaixonados no amor, porque sua necessidade de ter ordem e disciplina lhes impede entregar-se totalmente à paixão. A um virgem lhe custa confiar nas pessoas, não porque seja desconfiado por natureza, senão porque tem pouca segurança em se mesmo e extrapola isto nos demais.'
                };
            }
            if (signs.isLibra(d, m)) {
                return {
                    'signs': 'Libra',
                    'characteristics': {
                        'positive': 'Diplomáticos, encantadores e sociáveis. Os librianos são idealistas, pacíficos, otimistas e românticos. Têm um caráter afável e equilibrado.',
                        'negative': 'São indecisos e facilmente influenciados por terceiros. Podem mudar de opinião facilmente e ser muito condescendentes.',
                        'youLike': undefined,
                        'youDoNotLike': undefined
                    },
                    'description': 'Libra está entre os signos mais civilizados do zodíaco. Têm encanto, elegância, bom gosto, são amáveis e pacíficos. Gostam da beleza e da harmonia, e são capazes de serem imparciais ante os conflitos. Não obstante, uma vez que chegam a uma opinião sobre algo, não gostam de serem contrariados. Gostam de contar com o apoio dos demais. Um libriano tende a ser sensível às necessidades dos outros e costuma ser muito sociável. Não suportam as brigas e a crueldade e são muito diplomáticos ante os conflitos. Costumam procurar o consenso ante uma situação problemática. Sabem valorizar o esforço dos demais e gostam de viver e trabalhar em equipe. O lado negativo de um libriano é sua frivolidade, facilmente muda de opinião ou de lealdade. Não gostam da rotina e muitas vezes lhes falta capacidade para enfrentar os outros. Adoram o prazer, e isto lhes pode levar a cometer certos excessos na vida. São muito curiosos, o que pode ser um virtude, se o investem em descobrir novas coisas, mas também um defeito, se lhes leva a meter-se na vida ou nos assuntos dos outros.',
                    'work': 'Apesar de terem fama de desocupados, alguns librianos têm grandes ambições. Podem ter grandes carreiras diplomáticas, pois são capazes de ver ambos os lados de um debate e moderar pontos de vista opostos. Têm um grande sentido da justiça e podem ser bons advogados, servidores públicos e banqueiros, porque são muito fiáveis. Têm capacidade como gestores, artistas, escritores, e também têm sucesso trabalhando para causas humanitárias.',
                    'relationships': 'Um libriano é um bom amigo, porque prefere compreender a postura do outro a perder uma amizade. Em suas relações íntimas são românticos e até sentimentais. São bons companheiros, porque compreendem a postura do cônjuge num conflito e são tolerantes com os defeitos dos outros. Também são bons pais, esforçando-se para compreender e ajudar a seus filhos enquanto crescem.'
                };
            }
            if (signs.isScorpio(d, m)) {
                return {
                    'signs': 'Escorpião',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, é emotivo, decidido, poderoso e apaixonado. Escorpião é um signo com muito magnetismo.',
                        'negative': 'Pelo lado negativo, é ciumento, compulsivo e obsessivo. Os escorpianos podem ser ressentidos e teimosos.',
                        'youLike': 'Da verdade, do trabalho quando faz sentido. O escorpiano gosta de envolver-se em causas e convencer os demais.',
                        'youDoNotLike': 'Do superficial, das relações sem sentido. O escorpiano não vê com bons olhos os afagos fáceis e também não suporta a adulação.'
                    },
                    'description': 'Escorpião é um signo intenso, com uma energia emocional única em todo o zodíaco. Ainda que possam parecer calmos, os escorpianos têm uma agressividade e magnetismo escondidos internamente. São afáveis, sociáveis, reservados, cortêses e, ainda que pareçam estar um pouco afastados da ação, em realidade estão observando tudo com seu olhar crítico. O escorpiano é tremendamente poderoso e seu caráter pode causar enormes benefícios ou grandes riscos para os demais. Sua tenacidade e força de vontade são únicas, mas também muito sensíveis e facilmente afetadas pelas circunstâncias. São emotivos e facilmente feridos ou aludidos. De fato, podem perder totalmente a cabeça ao perceber, inclusive erroneamente, que alguém lhes xingou. Não sabem morder a língua e podem ser muito críticos. Quando um escorpiano consegue utilizar sua enorme energia de forma construtiva, se transforma em um grande agente para a sociedade e pode converter-se num grande líder. Não obstante, os escorpianos devem aprender a controlar-se, porque podem ser muito críticos e ressentidos com os outros. São excelentes amigos dos que considerem merecedores de seu respeito. Os escorpianos são muito imaginativos, intuitivos e têm uma grande capacidade para analisar situações e pessoas. De todos os signos do zodíaco, são os que mais probabilidade têm para converter-se em gênios - desde que controlem seu lado negativo, porque se tomam o caminho equivocado podem ser muito destrutivos para eles mesmos e para outras pessoas. Devem tentar evitar sensações como a arrogância, a agressividade e o ciúme, porque eles sentem as coisas tão intensamente que, se se renderem a esses sentimentos negativos, podem perder o controle.',
                    'work': 'Dado sua alta capacidade, os escorpianos podem ter sucesso em quase tudo. São bons médicos, cientistas, policiais, detetives, advogados e escritores. Podem ser bons oradores, predicadores e diplomáticos. Em realidade, se um escorpiano se dedica e controla seu lado negativo, seu futuro profissional não tem limites.',
                    'relationships': 'Escorpião é o símbolo do sexo, e os escorpianos são pessoas muito apaixonadas e sensuais. Para os escorpianos fazer amor é um ato espiritual, e são capazes de sentir coisas que outros signos nunca conseguirão. Sua intensidade de sentimentos faz com que suas relações amorosas sejam profundas, mágicas e, às vezes, trágicas. Cuidam muito de seus amigos, mas quando são traídos é difícil recuperar sua amizade e confiança'
                };
            }
            if (signs.isSagittarius(d, m)) {
                return {
                    'signs': 'Sagitário',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, são intelectuais, honestos, sinceros e simpáticos. Se caracterizam por seu otimismo, modéstia e bom humor.',
                        'negative': 'Pelo lado negativo, são tão otimistas que às vezes chegam a ser irresponsáveis. São superficiais, descuidados e inquietos.',
                        'youLike': 'De liberdade, de viajar, das leis, da aventura e da capacidade de compreender.',
                        'youDoNotLike': 'De sentir-se preso a uma situação, de ter que se preocupar com detalhes.'
                    },
                    'description': 'Sagitário é um dos signos mais positivos do zodíaco. São versáteis e lhes encanta a aventura e o desconhecido. Têm a mente aberta para novas idéias e experiências e mantêm um atitude otimista inclusive quando as coisas parecem difíceis. São fiáveis, honestos, bons, sinceros e dispostos a lutar pelas boas causas custe o que custar. Os sagitarianos costumam acreditar na ética e gostam de seguir os ritos da religião, de um partido político ou de uma organização. Isto pode levar-lhes a terem certas tendências supersticiosas. Encanta-lhes abarcar novos projetos e aprender sobre coisas novas. São intuitivos, bons organizadores, generosos e muito cuidadosos, o que lhes converte em bons gestores de situações e projetos. Alguns sagitarianos têm um gênio forte, que pode aparecer ante situações que para os outros não têm importância. Também são muito impacientes quando os outros não seguem o mesmo ritmo que eles. São capazes de sacrificar-se para realizar um objetivo. Isto faz com que algumas vezes eles sejam exigentes demais.',
                    'work': 'As diversas habilidades dos sagitarianos faz com que eles possam ter sucesso num grande número de profissões. São bons docentes e predicadores, e sua capacidade para pesquisar o desconhecido lhes converte em excelentes cientistas. Também podem ter sucesso como advogados, políticos, relações públicas, publicitários, músicos e esportistas. O fato de que lhes agrada o risco faz com que eles possam converter-se em pilotos de aviões ou de carros de corrida.',
                    'relationships': 'Basicamente, os sagitarianos são sinceros e controlados em seus relacionamentos, mesmo que possam perder a cabeça diante de uma traição. Quando sua relação é estável são excelentes esposos e pais, ainda que raras vezes consigam suprimir completamente seu espírito aventureiro. Precisam sentir-se livres e às vezes põem seus interesses profissionais diante dos interesses sentimentais. São muito amigos, fiáveis e leais. Não têm papas na língua quando é preciso recriminar um amigo, mas sabem perdoar quando necessário.'
                };
            }
            if (signs.isCapricorn(d, m)) {
                return {
                    'signs': 'Capricórnio',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, o capricorniano é ambicioso e disciplinado. É prático, prudente, tem paciência e é até cauteloso quando preciso. Tem um bom senso de humor e é reservado.',
                        'negative': 'Pelo lado negativo, o capricorniano tende a ser pessimista e, ante a situações difíceis, é um pouco fatalista. Às vezes lhe custa ser generoso e fazer favores de forma altruísta.',
                        'youLike': 'De fiabilidade, profissionalismo, uma base sólida, ter um objetivo, liderança.',
                        'youDoNotLike': 'De planos pouco práticos, fantasia, pessoas frívolas, o ridículo.'
                    },
                    'description': 'Capricórnio é um dos signos do zodíaco mais estáveis, seguros e calmos. São trabalhadores, responsáveis, práticos e dispostos a persistir o quanto for necessário para conquistar seu objetivo. São fiáveis e muitas vezes têm o papel de terminar um projeto iniciado por outro signo mais pioneiro. Adoram a música. Um capricorniano exige muito de seus empregados, familiares e amigos, mas só porque também é exigente consigo mesmo. Costumam ser pessoas justas. Não estão entre os mais felizes do zodíaco, tendem mais à melancolia e ao pessimismo. Quando um capricorniano sofre de depressão deve procurar ajuda. De fato, um capricorniano deve sempre tentar manter uma estabilidade emocional através da meditação, respiração ou atividades que lhe ajudem a relaxar e a não perder o controle de suas emoções.',
                    'work': 'Os capricornianos são bons gestores. São honestos e respeitam (ou exigem) a disciplina. São teimosos e capazes de antepor a família e o trabalho sobre seus próprios desejos ou necessidades. São grandes organizadores e costumam ter algum tipo de ambição econômica (dada sua capacidade para perseguir um objetivo, muitas vezes a realizam). Os capricornianos costumam possuir profissões relacionadas à economia. Economistas, contabilistas, gestores, empregados do setor imobiliário, políticos. São excelentes docentes, administradores, cientistas, agricultores e construtores.',
                    'relationships': 'Às vezes o capricorniano demora para sentir-se feliz com suas relações pessoais. Podem tender a serem reservados com desconhecidos. É mais provável que um capricorniano tenha poucos bons amigos (com quem tenha uma lealdade absoluta) que muitos companheiros. Às vezes lhes custam relacionar-se com o sexo oposto, mas quando se apaixonam costumam ser fiéis e um pouco ciumentos.'
                };
            }
            if (signs.isAquarium(d, m)) {
                return {
                    'signs': 'Aquário',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, o aquariano é simpático e humanitário. É honesto e totalmente leal; é original e brilhante; é independente e intelectual.',
                        'negative': 'Pelo lado negativo, o aquariano é imprevisível e tende a contrariar. É pouco emocional e não compreende a complexidade emocional de algumas pessoas e a traição entre amigos.',
                        'youLike': 'O aquariano gosta de lutar por boas causas, sonhar e planejar um futuro feliz, aprender do passado, os bons amigos, divertir-se.',
                        'youDoNotLike': 'O aquariano não gosta de promessas vazias e de sentir-se só. Não gosta do cotidiano e das imitações. Prefere ver quais são as possibilidades.'
                    },
                    'description': 'Os aquarianos têm uma personalidade forte e atraente. Há dois tipos de aquarianos: um é tímido, sensível, e paciente. O outro é exuberante, vivo, e pode chegar a esconder as profundezas de sua personalidade embaixo de um ar frívolo. Ambos os tipos de Aquário têm uma força de convicção e da verdade muito forte e são tão honestos que sabem mudar de opinião se aparecem provas que mostram o contrário do que pensavam antes. Os aquarianos são capazes de ver os dois lados de um argumento, o que os fazem um dos signos mais tolerantes e sem preconceitos de todo o zodíaco. Estão abertos à verdade e dispostos a aprender de todos. O aquariano é humano, sincero, refinado e idealista. Sabe ser perseverante e expressar-se com razão, moderação e, às vezes, com humor. Quase todos os aquarianos são inteligentes, claros e lógicos. Muitos são imaginativos e psíquicos. Às vezes sentem a necessidade de retirar-se do mundo para meditar ou pensar. Negam-se a seguir a multidão. Apesar da personalidade aberta dos aquarianos e de seu desejo de ajudar à humanidade, eles não costumam fazer amigos com facilidade. Não se entregam de alma tão rápido. Porém, uma vez que decidem que vale a pena amar alguém, se convertem em um amigo ou amante disposto a sacrificar tudo por seu companheiro e ser fiel durante a vida inteira. Mas às vezes vivem uma desilusão emocional, porque seus ideais pessoais lhes levam a exigir mais de seu companheiro do que deveriam. Quando um aquariano se sente enganado, sua fúria é terrível.',
                    'work': 'O aquariano consegue seus melhores frutos trabalhado em grupo, desde que seja o líder. O aquariano tem um sentido de unidade com a natureza e um desejo pelo conhecimento e pelo saber que lhe pode levar a ser um excelentes cientista, astrônomo ou historiador. Também tem facilidade para trabalhar em qualquer campo técnico. Os aquarianos costumam ser bons escritores, professores, assistentes sociais e psicólogos. Também são bons músicos.',
                    'relationships': 'O problema dos aquarianos quanto às relações pessoais é quando tendem a fugir ante um problema. Sentem uma grande preocupação pelo bem da humanidade e não compreendem as posturas contrárias às causas que tanto perseguem. Apesar de ter certos segredos, os aquarianos não compreendem uma falta de integridade ou promessas quebradas. Faz parte de seu lado negativo sentir-se magoado por uma traição ou ficar em silêncio até explodir em um momento de raiva. Não obstante, é um dos signos do zodíaco mais receptivos a escutar outras verdades e a aprender dos demais.'
                };
            }
            if (signs.isPisces(d, m)) {
                return {
                    'signs': 'Peixes',
                    'characteristics': {
                        'positive': 'Pelo lado positivo, é imaginativo e sensível. É amável e tem compaixão. É intuitivo e pensa nos demais.',
                        'negative': 'Pelo lado negativo, não assume a realidade. É idealista, mantém segredos e tem uma vontade algo débil. Deixa-se levar pelos demais.',
                        'youLike': 'De estar sozinho para sonhar. Gosta do mistério e do ridículo. Gosta de perder-se.',
                        'youDoNotLike': 'Do óbvio. Também não gosta de ser criticado ou de escutar pessoas pedantes ou exibidas.'
                    },
                    'description': 'Os piscianos têm uma personalidade calma, paciente e amável. São sensíveis aos sentimentos dos outros e respondem com simpatia e tato ao sofrimento dos demais. São muito queridos por todos porque têm um caráter afável, carinhoso e amável, e não supõem uma ameaça para os que querem ter postos de autoridade ou maior popularidade. Costumam assumir seu ambiente e suas circunstâncias, e não costumam tomar a iniciativa para resolver problemas. Preocupam-lhes mais os problemas dos outros que seus próprios problemas. Os piscianos tendem a pensar de forma emocional mais do que de forma racional, de forma instintiva mais do que de forma intelectual. Não gostam de sentir-se confinados e não respeitam as convenções só porque elas existem. Porém, não têm a energia ou a motivação para lutar contra o poder estabelecido. Os piscianos muitas vezes se retiram para um mundo de sonhos em que suas capacidades podem contribuir-lhes benefícios. Têm uma grande capacidade criativa artística.',
                    'work': 'Os piscianos rendem mais se trabalham sozinhos ou em postos inferiores. Não costumam ser bons gestores, porque carecem da suficiente segurança para sê-lo. Mas são excelentes secretários, auxiliares ou administrativos. Também há muitos piscianos que se convertem em excelentes advogados, arquitetos, viajantes, artistas, padres, empregados em organizações sem fins lucrativos (por seu sentido de solidariedade), detetives (por sua imaginação), etc.',
                    'relationships': 'Os piscianos não são egoístas em suas relações pessoais e costumam dar mais do que receber. São pessoas leais e procuram uma união mental e espiritual mais do que uma união sexual. Gostam do sentido de lar e de família.'
                };
            }

        }
    };

    return signs;
}]);