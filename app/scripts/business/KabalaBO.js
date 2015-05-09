angular.module('cabalaApp').factory('KabalaBO', [function () {
    var kabala = function (name, birthday) {
        this.birthday = {
            date: birthday,
            day: {
                number: birthday.split('/')[0],
                sum: 0
            },
            months: {
                number: birthday.split('/')[1],
                sum: 0
            },
            year: {
                number: birthday.split('/')[2],
                sum: 0
            }
        };
        this.name = name.toUpperCase();
        this.nameMap = '';
        this.ideality = {
            number: 0,
            message: ''
        }; //Idealidade
        this.expression = {
            number: 0,
            message: ''
        }; //Expressao
        this.destination = {
            number: 0,
            message: ''
        }; //Destino
        this.lessonOfLife = {
            number: 0,
            message: ''
        }; //Lição de Vida
        this.challenge = {
            number: 0,
            message: ''
        }; //Desafio
        this.pinnacle = {
            1: {
                ageLimit: 0,
                number: 0,
                message: ''
            },
            2: {
                ageLimit: 0,
                number: 0,
                message: ''
            },
            3: {
                ageLimit: 0,
                number: 0,
                message: ''
            },
            4: {
                ageLimit: 0,
                number: 0,
                message: ''
            }
        }; //Pináculo
        this.personalYear = []; //Ano Pessoal
        this.personalMonth = {
            number: 0,
            message: ''
        }; //Mês Pessoal
        this.personalDay = []; //Dia Pessoal
        this.powerfulNumber = {
            number: 0,
            message: ''
        }; //Número Poderoso
        this.absence = []; //Ausências
    };

    kabala.prototype = {
        currentDate: {
            day: {
                number: (new Date()).getDate(),
                sum: 0
            },
            months: {
                number: (new Date()).getMonth() + 1,
                sum: 0
            },
            year: {
                number: (new Date()).getFullYear(),
                sum: 0
            }
        },
        tableAlphabetical: {
            'A': {
                numerology: 1
            },
            'B': {
                numerology: 2
            },
            'C': {
                numerology: 3
            },
            'D': {
                numerology: 4
            },
            'E': {
                numerology: 5
            },
            'F': {
                numerology: 6
            },
            'G': {
                numerology: 7
            },
            'H': {
                numerology: 8
            },
            'I': {
                numerology: 9
            },
            'J': {
                numerology: 1
            },
            'K': {
                numerology: 2
            },
            'L': {
                numerology: 3
            },
            'M': {
                numerology: 4
            },
            'N': {
                numerology: 5
            },
            'O': {
                numerology: 6
            },
            'P': {
                numerology: 7
            },
            'Q': {
                numerology: 8
            },
            'R': {
                numerology: 9
            },
            'S': {
                numerology: 1
            },
            'T': {
                numerology: 2
            },
            'U': {
                numerology: 3
            },
            'V': {
                numerology: 4
            },
            'W': {
                numerology: 5
            },
            'X': {
                numerology: 6
            },
            'Y': {
                numerology: 7
            },
            'Z': {
                numerology: 8
            }
        },

        numerology: {
            1: {
                ideality: 'Ambição, dinamismo, determinação, extremamente independente e criativo, muita iniciativa, inteligente, tendências ao egoísmo, uma pessoa exigente consigo mesma, perfeccionista, inflexível: se acha a “dona da verdade”, tende a ser teimosa.',
                expression: 'Original, autoritária, pessoa séria, é vista de forma bastante responsável, pode ser antipático.',
                destination: 'Vencer propagando suas ideias, auto suficiente, desbravador, tem muita iniciativa, é sempre um líder, inovador, corajoso, mas ao mesmo tempo, agressivo e impulsivo.',
                lessonOfLife: 'Conheça seus limites e tenha paciência em todas as situações.',
                challenge: 'Desenvolva a força de vontade.',
                pinnacle: 'Esta fase obriga você a manter-se sobre seus próprios pés, dependendo apenas de si mesmo para chegar ao sucesso. Pode ser um período difícil, mas promete grandes oportunidades.',
                personalYear: 'É neste ano que você começa a traçar as diretrizes para os próximos nove anos. Pese muito bem os seus planos e vá em frente com determinação. Esta não é uma época de associações, mas de mudanças.',
                personalMonth: 'Tome iniciativas e esteja aberto a novos planos e conquistas. Todas as realizações começadas aqui serão favoráveis, mas só terão frutos mais tarde.',
                personalDay: 'Todas as coisas novas estão favorecidas hoje. Não tema as mudanças.',
                powerfulNumber: 'Ativo e corajoso, intolerante, exibicionista, egoísta e orgulhoso.',
                absence: 'Falta de ambição e criatividade, deve haver um esforço contra a tendência ao egoísmo e a preguiça. Tem que desenvolver ser pioneiro e criativo.',
                color: 'Vermelha',
                planet: 'Sol',
                stone: 'Rubi',
                aroma: 'Morango'
            },
            2: {
                ideality: 'Compreensão e necessidade de união, pessoa submissa. É estática, fica esperando as coisas caírem do céu. Não consegue viver só. As vezes é uma pessoa “chorona” e dependente.',
                expression: 'Grande amiga e colaboradora, vista de forma doce e meiga. Mas também aparenta uma pessoa frágil, passiva, dependente.',
                destination: 'Cultivar harmonia nos relacionamentos sociais e afetivos, pouca iniciativa, muito dependente, não faz nada sem consultar alguém em quem confie.',
                lessonOfLife: 'Não se deixe influenciar pelos outros. Mantenha-se em seu caminho.',
                challenge: 'Aprenda a confiar em si mesmo.',
                pinnacle: 'Você estará muito sensível neste momento da vida, mas evite demonstrar seus sentimentos. Podem surgir dificuldades em qualquer tipo de associações.',
                personalYear: 'Um bom ano para todos os tipos de associações. Seja paciente e tenha calma, esperando que as oportunidades venham até você quando chegar o momento. A fase também aconselha a analisar as lições do passado.',
                personalMonth: 'Um contato maior com a natureza poderá recarregar todas as suas energias neste mês. Aproveite para descansar ao máximo e não rejeite convites, já que o mês promete contatos interessantes.',
                personalDay: 'O dia convida você à calma e à quietude. Mantenha-se sob controle.',
                powerfulNumber: 'Passivo, receptivo, delicado, retrógrado, compreensivo e intuitivo.',
                absence: 'Significa falta de preocupação com os outros. Pouco equilíbrio e diplomacia. Seja diplomata e adaptável.',
                color: 'Laranja',
                planet: 'Lua',
                stone: 'Pedra-da-lua',
                aroma: 'Flor de laranjeira'
            },
            3: {
                ideality: 'Criatividade, boa comunicação, alegre, vai sempre buscar expansão em sua vida. Tem também grande tendência a uma distorção de valores.',
                expression: 'Sabe entreter e estimular todos, alegre, extrovertido. Passa uma imagem de expansão, crescimento e alto astral.',
                destination: 'Ganhar reconhecimento, tanto profissional quanto social, capacidade enorme de se expandir, tanto no aspecto material como no emocional. Supera os problemas de saúde melhor que qualquer outro.',
                lessonOfLife: 'Desenvolva sua responsabilidade.',
                challenge: 'Não disperse seus talentos.',
                pinnacle: 'Aproveite este período de boas ideias e desenvolva sua capacidade criadora. Mas mantenha as emoções sob controle. Bom para finanças.',
                personalYear: 'Este ano é o ano da preguiça e de poucas responsabilidades de peso. Uma ótima época para férias prolongadas ou para a prática de algum hobby artístico. Aproveite.',
                personalMonth: 'A seriedade não faz parte destes dias. É tempo de curtir os bons amigos e usar a sua capacidade de expressão para atividades artísticas. Vá ao teatro e leia bons livros.',
                personalDay: 'Sorria, cante e seja otimista e procure esticar o bom astral de hoje para os outros dias do mês.',
                powerfulNumber: 'Autoconfiante, otimista, alegre, cheio de sorte, convencido e bem sucedido.',
                absence: 'Falta tranquilidade e segurança pessoal. Pouca capacidade de comunicação. Ser mais otimista e social.',
                color: 'Amarela',
                planet: 'Vênus',
                stone: 'Topázio',
                aroma: 'Pêssego'
            },
            4: {
                ideality: 'Seriedade, estabilidade, observação, teimosia, tem dificuldades em atingir seus horizontes, vivendo assim, bastante limitada. Uma pessoa organizada, cooperativa e que se dedica muito ao trabalho.',
                expression: 'Paciente e dedicada ao trabalho, vista como uma pessoa séria, por outro lado, parece alienada aos problemas dos outros e desinteressada.',
                destination: 'Ter estabilidade, principalmente na área econômica, as vezes tudo para essa pessoa é muito difícil. Se empenha muito, consegue pouco. Meticulosa, crítica, se preocupa demais com pequenos detalhes e acaba não aproveitando as coisas boas da vida.',
                lessonOfLife: 'Não desanime diante das obrigações, sempre numerosas para você.',
                challenge: 'Não se entregue a preguiça.',
                pinnacle: 'A fase é de muito trabalho para solidificar os alicerces onde se baseará o futuro. Poupe dinheiro e organize detalhadamente as ideias.',
                personalYear: 'Chegou o tempo de se voltar ao trabalho com energia. Este ano tem tudo para ser produtivo. Fique longe da ociosidade e faça da disciplina uma regra. Lembre-se de que as recompensas serão proporcionais ao seu esforço.',
                personalMonth: 'Organize-se e ponha as ideias em prática. O mês é de trabalho duro.',
                personalDay: 'Fique atento a todos os detalhes das suas atividades. Este dia promete muito trabalho.',
                powerfulNumber: 'Metódico, obstinado, responsável, detalhista, pedante, pouco criativo, trabalhador, sem sorte.',
                absence: 'Falta organização e dedicação ao trabalho. Pouca paciência. Qualidades: trabalhador e organizador.',
                color: 'Verde',
                planet: 'Saturno',
                stone: 'Esmeralda',
                aroma: 'Maça Verde'
            },
            5: {
                ideality: 'Liberdade, curiosidade, risonha, carismática, superficial (só esquenta a cabeça em casos extremos), ciumenta. Comportamento repletos de altos e baixos.',
                expression: 'Comunicativa e superficial, passa uma visão carismática. Pode ser uma “mosca morta”, ter uma aparência péssima, mesmo assim será considerada extremamente sedutora.',
                destination: 'Viver aventuras e novas experiências, não para em emprego, despreocupado, bagunceiro, quer curtir a vida, busca constantemente o prazer, tem grandes tendências a vícios, como drogas e bebidas.',
                lessonOfLife: 'Olhe mais para sua vida interior e não vá atrás de modismos.',
                challenge: 'Aprenda a se desprender das coisas.',
                pinnacle: 'Este período traz um desejo intenso por modificações. Você deverá passar por várias inquietações e dúvidas. O progresso é garantido.',
                personalYear: 'Ano de mudanças, saia da rotina e invista em novas experiências. Não tenha medo das novidades e não fique impaciente. Concentre-se em canalizar suas energias para pensamentos e atitudes positivas.',
                personalMonth: 'O período promete crescimento e expansão. Pode ser que você seja promovido no trabalho.',
                personalDay: 'Ótimo dia para sair da rotina.',
                powerfulNumber: 'Versátil, aventureiro, nervoso, inconstante, sensual, pessimista, destrutivo, irresponsável.',
                absence: 'Falta coragem para novas realizações. Conservadorismo exagerado. Qualidades: versátil e aventureiro.',
                color: 'Azul',
                planet: 'Marte e Mercúrio',
                stone: 'Água marinha',
                aroma: 'Erva-doce'
            },
            6: {
                ideality: 'Simpatia, sensibilidade artística, hiper afetiva e extremamente emotiva. Tem ligação com artes, música, cultura. As vezes contestador e teimoso. Busca harmonia familiar.',
                expression: 'Romântica incurável, vista com ternura, as pessoas vão buscar no número 6 alguém em quem podem confiar e com quem possam desabafar. É o “ombro amigo”.',
                destination: 'Dedicar-se à família, só consegue se estruturar se tiver harmonia, por essa razão, busca o equilíbrio o tempo todo. Capacidade de concretização excelente.',
                lessonOfLife: 'Cultive atitudes produtivas.',
                challenge: 'Respeite a opinião alheia.',
                pinnacle: 'A ordem desta fase é o acúmulo de muitas responsabilidades, especialmente no lar. Mas os seus esforços serão recompensados, trazendo muita satisfação pessoal e até financeira. É o pináculo do casamento, das associações.',
                personalYear: 'O lar deverá ser o centro das atenções, receba amigos, mude a decoração da casa. Procure também trazer harmonia para o seu ritmo de vida e seja generoso com as pessoas que convivem com você.',
                personalMonth: 'Tente dar o máximo de atenção aos assuntos de casa. Os amigos também precisarão de você.',
                personalDay: 'Ocupe-se mais com as coisas de casa e dedique atenção às pessoas que convivem com você.',
                powerfulNumber: 'Caseiro, organizado, amoroso, dedicado, conservador, ciumento, responsável.',
                absence: 'Falta responsabilidade e ambição. Qualidades: responsável e harmonioso.',
                color: 'Anil',
                planet: 'Júpiter e Vênus',
                stone: 'Safira azul',
                aroma: 'Violeta'
            },
            7: {
                ideality: 'Introversão, independência, analítico e observador. Busca o conhecimento o tempo todo. É porém dissimulado e depressivo. Muita inteligência.',
                expression: 'Criativo, seguro, uma pessoa vista de forma séria e introspectiva.',
                destination: 'Desenvolver a espiritualidade e buscar conhecimento em tudo. Tem tendência a gostar de tudo o que está ligado ao esoterismo e a espiritualidade.',
                lessonOfLife: 'Seja íntegro e autêntico.',
                challenge: 'Evite a melancolia.',
                pinnacle: 'Este período traz um interesse pelo desenvolvimento espiritual e pelo estudo das forças ocultas da natureza. É um momento de introspecção e provavelmente de falta de dinheiro.',
                personalYear: 'Este ano é todo do seu eu interior. O momento é de reflexão e auto análise para desenvolver suas qualidades espirituais e da sua personalidade. Faça algum curso esotérico e busque suas próprias respostas para a vida.',
                personalMonth: 'Ótimo para os estudos em geral. Examine seus planos e investigue as coisas atentamente.',
                personalDay: 'Evite o barulho e a agitação. Ache um tempo para ficar só e repensar nos seus planos e atitudes pessoais.',
                powerfulNumber: 'Introvertido, misterioso, inconstante, tímido e irracional.',
                absence: 'Falta pensamento analítico e não leva em conta as inspirações interiores. Qualidades: aristocrata e sincero.',
                color: 'Violeta',
                planet: 'Mercúrio e Netuno',
                stone: 'Ametista',
                aroma: 'Uva'
            },
            8: {
                ideality: 'Materialismo, orgulho, sensatez, consciência, desenvolve-se intelectualmente com muita facilidade. Consegue se estruturar muito bem. Chega entretanto, a ser prático demais e pouco afetuoso. Bem organizado.',
                expression: 'Franco, ambicioso, esnobe, passa uma imagem de que é superior aos outros. Muito ligado às coisas materiais.',
                destination: 'Ter sucesso profissional e social, pode ter todas as dificuldades do mundo, mas vai fazer de tudo para ter seu próprio negócio. Empreendedor, voltado para o lado material da vida. Prático demais.',
                lessonOfLife: 'Esqueça o egoísmo.',
                challenge: 'Tenha equilíbrio e seja sensato.',
                pinnacle: 'Esta é uma boa fase para os assuntos financeiros, mas exige coragem e esforço constante. Evite confiar em excesso nas pessoas que não conhece.',
                personalYear: 'Chegou a hora de trabalhar para as realizações materiais. Tudo que se refere ao dinheiro está favorecido este ano. É necessário que você tome as rédeas da vida e não espere que as conquistas caiam do céu.',
                personalMonth: 'Mês dos negócios financeiros. No trabalho mostre eficiência e segurança, sem esquecer da diplomacia.',
                personalDay: 'Analise suas finanças e organize o trabalho numa rotina mais ágil.',
                powerfulNumber: 'Realista, enérgico, ambicioso, racional e introspectivo.',
                absence: 'Falta bom senso e capacidade para lidar com o dinheiro. Qualidades: determinado e justo.',
                color: 'Rosa',
                planet: 'Sol e Saturno',
                stone: 'Diamante',
                aroma: 'Rosas'
            },
            9: {
                ideality: 'Compaixão, otimismo, imediatismo, é considerado o “irmão de todo mundo” por ser extremamente solidário e humano. Apresenta porém, tendências à agressividade. É um ser mutável, mal consegue uma coisa e já está pensando em outra. Uma pessoa humanitária.',
                expression: 'Generosa, devotada, companheirismo, disposto a ajudar todo mundo, passa esta imagem, porém, pode ser a pessoa mais egoísta do mundo.',
                destination: 'Transformar o mundo num lugar melhor e mais gostoso de se viver, consegue tudo o que quer, mesmo que seja com muito sacrifício. É muito preocupado com a humanidade, quer resolver os problemas de todo mundo.',
                lessonOfLife: 'Não tente alterar o caminho dos outros. Seja compreensivo.',
                challenge: 'Seja compreensivo.',
                pinnacle: 'Se você aprendeu a não ser egoísta, este período será muito favorável. Do contrário ele promete tristezas. Podendo ser um divórcio, por exemplo.',
                personalYear: 'Livre-se do passado. Prepare o terreno para dar início a um novo ciclo de vida e lembre-se de que todo o começo significa o fim de algumas coisas. Não fique triste, pois as novidades serão bem melhores e poderão aparecer logo, saiba esperá-las com amor e com a mente aberta.',
                personalMonth: 'Complete tudo o que foi começado e dê atenção aos outros.',
                personalDay: 'Simpatia e bom humor são vitais para hoje, exercite a solidariedade.',
                powerfulNumber: 'Grande capacidade mental e espiritual, aventureiro, otimista e generoso.',
                absence: 'Falta interesse pelos outros. Qualidades: humanitário, líder nato.',
                color: 'Ouro',
                planet: 'Marte',
                stone: 'Opala',
                aroma: 'Mel'
            },
            11: {
                ideality: 'Forte inspiração artística.',
                expression: 'Desatento e idealista.',
                destination: 'Cultivar harmonia nos relacionamentos sociais e afetivos, pouca iniciativa, muito dependente, não faz nada sem consultar alguém em quem confie.',
                lessonOfLife: 'Viva com humildade, mesmo em meio o sucesso e a fama.',
                challenge: 'Aprenda a confiar em si mesmo.',
                pinnacle: 'Nesta fase as pessoas estarão esperando muito de você. O pináculo promete fama e inspiração, mas fuja das tensões nervosas e da agitação mental.',
                personalYear: 'Faça o possível para ajustar os ideais à sua realidade de vida. Assim as oportunidades virão naturalmente até você, tenha fé.',
                personalMonth: 'Sua atitude deve ser de compreensão e fé ilimitada nas próprias inspirações. Sua imaginação estará “a mil”.',
                personalDay: 'Deixe a sua intuição falar livremente, hoje não é um bom dia para preocupações materiais.',
                powerfulNumber: 'Passivo, receptivo, delicado, retrógrado, compreensivo e intuitivo.',
                absence: 'Qualidades: idealista e paciente.',
                color: 'Prata',
                planet: 'Netuno',
                stone: 'Platina'
            },
            22: {
                ideality: 'Espiritualidade.',
                expression: 'Talentoso, com grande poder de ação.',
                destination: 'Ter estabilidade, principalmente na área econômica, as vezes tudo para essa pessoa é muito difícil. Se empenha muito, consegue pouco. Meticulosa, crítica, se preocupa demais com pequenos detalhes e acaba não aproveitando as coisas boas da vida.',
                lessonOfLife: 'Não esqueça seus ideais, porém seja racional com eles.',
                challenge: 'Não se entregue a preguiça.',
                pinnacle: 'Materialismo e idealismo andam juntos, trazendo atividades grandiosas. As realizações devem estar voltadas aos fins humanitários, deixe o individualismo de fora.',
                personalYear: 'Seus projetos terão êxitos, desde que eles não virem apenas interesses pessoais, persiga os seus sonhos e pense grande.',
                personalMonth: 'Concretize seus planos e sonhos, não tenha pensamentos limitados, pense grande e sem egoísmo.',
                personalDay: 'Se as suas ideias forem bem planejadas, dê andamento aos planos.',
                powerfulNumber: 'Metódico, obstinado, responsável, detalhista, pedante, pouco criativo, trabalhador, sem sorte.',
                absence: 'Qualidade: construtor, otimista.',
                color: 'Vermelha e ouro',
                planet: 'Urano',
                stone: 'Coral'
            },
            33: {
                ideality: 'Simpatia, sensibilidade artística, hiper afetiva e extremamente emotiva. Tem ligação com artes, música, cultura. As vezes contestador e teimoso. Busca harmonia familiar.',
                expression: 'Romântica incurável, vista com ternura, as pessoas vão buscar no número 6 alguém em quem podem confiar e com quem possam desabafar. É o “ombro amigo”.',
                destination: 'Dedicar-se à família, só consegue se estruturar se tiver harmonia, por essa razão, busca o equilíbrio o tempo todo. Capacidade de concretização excelente.',
                lessonOfLife: 'Defenda a justiça até mesmo nas situações sem importância.',
                challenge: 'Respeite a opinião alheia.',
                pinnacle: 'A ordem desta fase é o acúmulo de muitas responsabilidades, especialmente no lar. Mas os seus esforços serão recompensados, trazendo muita satisfação pessoal e até financeira. É o pináculo do casamento, das associações.',
                personalYear: 'Este seu ano pessoal está totalmente voltado para os outros. Deixe o amor do seu coração vir à tona e seja tolerante e simpático. Dessa forma o ano tem tudo para ser gratificante.',
                personalMonth: 'Este é um mês com influências espirituais fortes. Viva os seus ideais, mas não esqueça dos amigos que precisam do seu apoio.',
                personalDay: 'Aceite as tarefas de hoje com paciência.',
                powerfulNumber: 'Caseiro, organizado, amoroso, dedicado, conservador, ciumento, responsável.',
                absence: 'Qualidades: caridoso e conselheiro.',
                color: 'Azul celeste',
                planet: 'Plutão',
                stone: 'Lápis-lazúli'
            }
        },

        getLimit: function (value) {
            var soma = 0;
            if (value > 9) {
                if (value == 11 || value == 22 || value == 33) {
                    return value;
                } else {
                    for (var i = 0; i < value.toString().length; i++) {
                        soma += eval(value.toString()[i]);
                    }
                    if (soma > 9) {
                        return this.getLimit(soma);
                    } else {
                        return soma;
                    }
                }
            } else {
                return value;
            }
        },

        getCalculate: function () {
            for (var i = 0; i < this.name.length; i++) {
                if (this.name[i] != " ") {
                    if (this.name[i] == "A" || this.name[i] == "E" || this.name[i] == "I" || this.name[i] == "O" || this.name[i] == "U") {
                        this.ideality.number += this.tableAlphabetical[this.name[i]].numerology;
                    } else {
                        this.expression.number += this.tableAlphabetical[this.name[i]].numerology;
                    }
                    this.destination.number += this.tableAlphabetical[this.name[i]].numerology;
                    this.nameMap += this.tableAlphabetical[this.name[i]].numerology;
                } else {
                    this.nameMap += " ";
                }
            }
            this.expression.number = this.getLimit(this.expression.number);
            this.expression.message = this.numerology[this.expression.number].expression;

            this.destination.number = this.getLimit(this.destination.number);
            this.destination.message = this.numerology[this.destination.number].destination;

            this.ideality.number = this.getLimit(this.ideality.number);
            this.ideality.message = this.numerology[this.ideality.number].ideality;

            this.birthday.day.sum = this.getLimit(this.birthday.day.number);
            this.birthday.months.sum = this.getLimit(this.birthday.months.number);
            this.birthday.year.sum = this.getLimit(this.birthday.year.number);

            this.lessonOfLife.number = this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.birthday.year.sum);
            this.lessonOfLife.message = this.numerology[this.lessonOfLife.number].lessonOfLife;

            this.pinnacle[1].number = this.getLimit(this.birthday.day.sum + this.birthday.months.sum);
            this.pinnacle[1].ageLimit = 36 - this.lessonOfLife.number;
            this.pinnacle[1].message = this.numerology[this.pinnacle[1].number].pinnacle;

            this.pinnacle[2].number = this.getLimit(this.birthday.day.sum + this.birthday.year.sum);
            this.pinnacle[2].ageLimit = this.pinnacle[1].ageLimit + 9;
            this.pinnacle[2].message = this.numerology[this.pinnacle[2].number].pinnacle;

            this.pinnacle[3].number = this.getLimit(this.pinnacle[1].number + this.pinnacle[2].number);
            this.pinnacle[3].ageLimit = this.pinnacle[2].ageLimit + 9;
            this.pinnacle[3].message = this.numerology[this.pinnacle[3].number].pinnacle;

            this.pinnacle[4].number = this.getLimit(this.birthday.months.sum + this.birthday.year.sum);
            this.pinnacle[4].ageLimit = 90;
            this.pinnacle[4].message = this.numerology[this.pinnacle[4].number].pinnacle;

            this.currentDate.day.sum = this.getLimit(this.currentDate.day.number);
            this.currentDate.months.sum = this.getLimit(this.currentDate.months.number);
            this.currentDate.year.sum = this.getLimit(this.currentDate.year.number);

            this.personalYear.push({
                year: this.currentDate.year.number - 1,
                months: eval(this.birthday.months.number),
                number: this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number - 1)),
                message: this.numerology[this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number - 1))].personalYear
            });
            this.personalYear.push({
                year: this.currentDate.year.number,
                months: eval(this.birthday.months.number),
                number: this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.currentDate.year.sum),
                message: this.numerology[this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.currentDate.year.sum)].personalYear
            });
            this.personalYear.push({
                year: this.currentDate.year.number + 1,
                months: eval(this.birthday.months.number),
                number: this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number + 1)),
                message: this.numerology[this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number + 1))].personalYear
            });

            this.personalMonth.number = this.getLimit(this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.currentDate.year.sum) + this.currentDate.months.sum);
            this.personalMonth.message = this.numerology[this.personalMonth.number].personalMonth;

            this.personalDay.push({
                day: this.currentDate.day.sum,
                number: this.getLimit(this.personalMonth.number + this.currentDate.day.sum),
                message: this.numerology[this.getLimit(this.personalMonth.number + this.currentDate.day.sum)].personalDay
            });

            this.powerfulNumber.number = this.getLimit(this.destination.number + this.lessonOfLife.number);
            this.powerfulNumber.message = this.numerology[this.powerfulNumber.number].powerfulNumber;

            var challengeStep1 = this.getLimit(((this.birthday.day.sum - this.birthday.months.sum) > 0 ? (this.birthday.day.sum - this.birthday.months.sum) : (this.birthday.day.sum - this.birthday.months.sum) * -1));
            var challengeStep2 = this.getLimit(((this.birthday.day.sum - this.birthday.year.sum) > 0 ? (this.birthday.day.sum - this.birthday.year.sum) : (this.birthday.day.sum - this.birthday.year.sum) * -1));
            this.challenge.number = ((challengeStep1 - challengeStep2 > 0) ? challengeStep1 - challengeStep2 : (challengeStep1 - challengeStep2) * -1);
            this.challenge.message = this.numerology[this.challenge.number].challenge;

            for (var i = 1; i <= 9; i++) {
                if (!(new RegExp(i.toString())).test(this.nameMap)) {
                    this.absence.push({
                        number: i,
                        message: this.numerology[i].absence,
                        color: this.numerology[i].color,
                        planet: this.numerology[i].planet,
                        stone: this.numerology[i].stone,
                        aroma: this.numerology[i].aroma
                    });
                }
            }
            if (!(new RegExp('11')).test(this.nameMap)) {
                this.absence.push({
                    number: 11,
                    message: this.numerology[11].absence,
                    color: this.numerology[11].color,
                    planet: this.numerology[11].planet,
                    stone: this.numerology[11].stone
                });
            }
            if (!(new RegExp('22')).test(this.nameMap)) {
                this.absence.push({
                    number: 22,
                    message: this.numerology[22].absence,
                    color: this.numerology[22].color,
                    planet: this.numerology[22].planet,
                    stone: this.numerology[22].stone
                });
            }
            if (!(new RegExp('33')).test(this.nameMap)) {
                this.absence.push({
                    number: 33,
                    message: this.numerology[33].absence,
                    color: this.numerology[33].color,
                    planet: this.numerology[33].planet,
                    stone: this.numerology[33].stone
                });
            }

            return this;
        }
    };

    return kabala;
}]);
