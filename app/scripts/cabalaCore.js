var sumMax = function (value) {
    if (value > 14) {
        if (value != 16 && value != 17 && value != 20 && value != 21 && value != 22 && value != 24 && value != 36 && value != 40 && value != 49 && value != 70 && value != 72 && value != 99 && value != 100 && value != 108 && value != 365 && value != 666 && value != 777 && value != 1000 && value != 10000) {
            var refNum = value.toString();
            var sum = 0;
            for (var i = 0; i < refNum.length; i++) {
                sum += eval(refNum[i]);
            }
            return sumMax(sum);
        } else {
            return value;
        }
    } else {
        return value;
    }
};

var limit22 = function (value) {
    if (value > 22) {
        var refNum = value.toString();
        var sum = 0;
        for (var i = 0; i < refNum.length; i++) {
            sum += eval(refNum[i]);
        }
        return limit22(sum);
    } else {
        return value;
    }
};

var wheelSamsara = {
    '1': {
        'head': 'muita astúcia, bom de conversa, tem lábia, inteligência, rapidez mental para estudo, criatividade, ingenuidade, dispersividade, ilusão, infantilidade, ativo, namorador,veio para escolher. Conselho: pondere, pense antes de agir, não meta os pés pelas mãos, você é regido por Mercúrio ( que é a rapidez), primeiro tenho que saber o que quero, entrar em contato comigo mesmo, depois me relacionar com o mundo.',
        'mission': 'trabalhador, bom orador, muita expressão na área da comunicação, advogado, político, professor, jornalista, comerciante.',
        'heart': 'muitos amores. Conselho: namore bastante, fique livre, case somente mais tarde, aproveite as muitas amizades.',
        'sex': 'muita criatividade, versatilidade, descontração, adora novidades.',
        'family': 'agitado, festeiro, felicidade, ativo, funciona como líder e acelerador, vai de embalo.'
    },
    '2': {
        'head': 'rege a moral, não fala muito, sabe guardar segredos, é a iniciação feminina, é o número da união, inteligência, intuição, criatividade, ponderação, receptividade, atrai as pessoas, faz só o que gosta, se ama muito, as vezes manipuladora, sempre casa e não perde a individualidade, tem visão dos dois lados de tudo, tem dons paranormais, é secreta, não se abre, não se mistura, é seletiva.',
        'mission': 'muita intuição e inteligência, psicologia, medicina, preservação da família, cantora.',
        'heart': 'nunca deixar de usar a intuição, lua, pode ter dualidade, tem medo de se mostrar, é uma me mal trabalhada, pede terapia.',
        'sex': 'traz normas, é difícil conhecer-se, pode ter uma vida dupla.',
        'family': 'mãe, protetora, matriarca.'
    },
    '3': {
        'head': 'é o número do trabalho, faz tudo cedo, tem que casar, ter filhos, pode ter imprevisto de gravidez, dinâmica, inteligente, assume a maternidade, nunca aborta, independência.',
        'mission': 'muito transparente, nunca criam caso, facilitam a vida dos outros.',
        'heart': 'faz o que quer, abraça todo mundo, trabalhadora, mãe.',
        'sex': 'muita ação.',
        'family': 'é a mãe, mulher e amante, trabalhadora, espírito de sacrifício, se for homem sobra para ele cuidar da mãe, irmãos ou parentes.'
    },
    '4': {
        'head': 'equilíbrio, poder, estabilidade, assumido, ordem na comunicação, sabe o que quer e o que fala, é convicto e firme.',
        'mission': '',
        'heart': 'estável, sabe o que quer, pode ter mais que uma pessoa.',
        'sex': 'representa as grandes paixões, é bom de cama, uma pessoa charmosa e carismática.',
        'family': 'pai, o pai que não deixa faltar nada, dominador, generosidade, provedor, protetor.'
    },
    '5': {
        'head': 'ordem, estável, bom senso, intelectualidade, bondade.',
        'mission': 'conhecimento, professor, orientador, médico, advogado, mentor espiritual, padre.',
        'heart': 'calma, fraternal, correto, tranquilidade.',
        'sex': 'careta, ritual, pacato.',
        'family': 'família em primeiro lugar, trabalho, tradicionalista.'
    },
    '6': {
        'head': 'é o número do ego, narcisista, rege estética, só ele é lindo, espontaneidade, vai pelo toque, harmonia, emoção, dúvidas, insegurança, muito emocional.',
        'mission': 'passar harmonia, passar amor, arte runeral, paisagista, alimentação, doação, unir as pessoas, dá poesia (Vênus em libra).',
        'heart': 'muita emoção, frieza, mimos, sensitiva.',
        'sex': 'só vai transar por amor, romântico e carinhoso.',
        'family': 'apaziguar, ajeitar as coisas, antes só do que mal acompanhado, nunca usar como indecisão e sim como escolha, não olhe para traz, o importante é ensinar para que possamos abrir mão do nosso conhecimento.'
    },
    '7': {
        'head': 'toda a parte esotérica, magia, age pela razão, individualidade, independência, amadurecimento, desenvolver a espiritualidade.',
        'mission': 'passar mensagens de independência, dá praticidade (Vênus em touro).',
        'heart': 'amor com tranquilidade, não é ciumento, não mente.',
        'sex': 'pode se satisfazer sem pensar no outro, não é carinhoso, age pela razão.',
        'family': 'viaja muito, dá independência para a mulher e os filhos, muito prático.'
    },
    '8': {
        'head': 'equilíbrio, senso de justiça, frieza, bom senso, não é passional, não se deixa levar pelas emoções.',
        'mission': 'ser bom, juiz, advogado, economista, político, militar, fonoaudiologia.',
        'heart': 'disciplina, autocrítica, nunca é injusto, nunca tem amante, reconhece seus erros.',
        'sex': 'equilíbrio e integridade.',
        'family': 'desquite, divórcio, viuvez, sossego, estabilidade, veio nesta família para se ajustar, sempre tem problema com a justiça, trabalha a lei na família, pré-disposição para adotar filhos, pessoas adotadas.'
    },
    '9': {
        'head': 'rege a moral, é a iniciação masculina, sério, humildade, dono da sabedoria máxima, passou por várias encarnações, preservar a individualidade, estuda muito, tem conhecimento.',
        'mission': 'filósofo, guru, orientador, professor, pode ter artrite (tudo ligado aos ossos), fígado, bolsite, bico de papagaio, coluna.',
        'heart': 'solidão, individualista, celibatário, não tem medo da solidão.',
        'sex': 'voto de castidade, frieza, não liga muito.',
        'family': 'ficar sozinho, andarilho, introspectivo, conselheiro, formal, negativo, avarento, mesquinho. Conselho: suba a montanha e contemple lá de cima o mundo. Ligado a hierarquia, separatista, seletivo, é o peso da consciência que cobra uma punição.'
    },
    '10': {
        'head': 'reajuste forte, abrir mão de tudo que possui, veio ter acúmulos materiais, é o arcano do compromisso carmático com os filhos, nasceu para ter filhos, são pessoas instáveis, trabalham muito, vieram aprender e refazer todos os níveis, trabalho, amor, espiritual, material e saúde, qualquer lugar representa movimento e instabilidade.',
        'mission': 'veio refazer a vida, aprender a lição, saber viver.',
        'heart': 'nunca vai saber o que quer.',
        'sex': 'dificuldades, nunca vai achar a pessoa certa.',
        'family': 'veio cumprir um carma, aprender com a família, às vezes, tem uma passagem rápida nesta vida.'
    },
    '11': {
        'head': 'tomar cuidado, não é bom, vive sobre tensão, toda a vida tem que se controlar e controlar os outros, bravo, mandão, genioso, sem paciência, inteligente, as vezes é fanático (eu quero assim), tem que ter equilíbrio, precisa de terapia.',
        'mission': 'veio aprender a ser o 2, pensar antes de falar e agir, tem que aprender a ter jogo de cintura, vive com a rapidez, agressão, líder, militar, cargos de comando, veio dar ordem.',
        'heart': 'pessoas cheias de grandes paixões, se entrega, vai de cabeça, é ciumento, exige muito.',
        'sex': 'exigente, forte, bom de cama.',
        'family': 'mandão, líder, dá ordem na casa, agressivo, briguento, bate, briga de arcano 11 é muito impulsiva, quem rege é Áries, nunca ande armado, faça caratê ou muito esporte.'
    },
    '12': {
        'head': 'não é fácil, acabam se doando muito mais que o outro, é a casa do sacrifício, se sacrificam muito, carregam uma cruz, a vida tira tudo dela, vem com poucas chances, às vezes, vem com defeito físico, cego, surdo, mudo ou pobre, sujeito à depressão.',
        'mission': 'a pessoa não faz nada, não tem vergonha de pedir esmola, na outra encarnação foi extravagante ou suicida, serviçais, mendigo.',
        'heart': 'se sacrificam, sofrem por outros, pessoas deprimidas.',
        'sex': 'dificuldades.',
        'family': 'é miserável, e reclama muito da vida.'
    },
    '13': {
        'head': 'estão cortando, ceifando alguma coisa, transformação, dor, fatalidade, o inevitável, tem que trabalhar bem este arcano para ficar o 4, é alguém que veio ao mundo para fazer uma alquimia nele mesmo, nasceu para ser um imperador mas não é fácil, vai ter uma grande perda, tem uma postura amarga, é depressivo e pode se matar.',
        'mission': 'passar uma mensagem de transformação, quem rege é escorpião, estrategista, psicologia, cirurgião, psiquiatria. Conselho: saiba abrir mão de algo para alcançar outra coisa melhor, se você perdeu algo veja que você possui outras coisas.',
        'heart': 'perder entes queridos, sempre sofre por perdas.',
        'sex': 'gravidez complicada, aborto, frigidez.',
        'family': 'tendência para morar sozinho, geralmente não é criado pela mãe, o homem sempre vai perder alguém da família e sofrer muito, e neste arcano que nós ganhamos a herança hereditária que na mandala é a casa 8.'
    },
    '14': {
        'head': 'diplomacia, nunca quer se comprometer, pessoas que ficam em cima do muro, é o arcano dos alquimistas ou seja que une algo com outra coisa (mistura isso com aquilo), rege a moral.',
        'mission': 'mago, psicologia, medicina alternativa, cientista, diplomata, maus políticos, químico, homeopatia, cromoterapia, bruxo, feiticeiro, florais, muita pesquisa, tapeçaria, trabalhar com calma e devagar e não impor nada a ninguém.',
        'heart': 'ter cuidado para não ficar na mão do outro, não tem grandes paixões, não adianta ter pressa.',
        'sex': 'pessoa morna, equilibrada, meio parada.',
        'family': 'sempre põe panos quentes em tudo.'
    },
    '15': {
        'head': 'gosta de tudo fácil, oferece o prazer, super esperto, visa sempre o lado material, toma posse das coisas, egoísta, é um arcano de destino também.',
        'mission': 'pode morrer cedo de câncer, diabete, todas as doenças hereditárias, os seus valores são materiais, fazem qualquer negócio para ganhar dinheiro.',
        'heart': 'obsessivo, grosseiro, passional.',
        'sex': 'adora, visa só o lado dele, incesto.',
        'family': 'Novo rico, grosseiro, materialista, casa por dinheiro, “eu que sustento todo mundo”.'
    },
    '16': {
        'head': 'é uma pessoa que foi muito poupada, é despreparada, às vezes, foram espíritos abortados, são pessoas revoltadas e destrutivas, é a sombra, o sonho. Qualquer lugar precisa ser muito bem trabalhado, é o arcano dos suicidas, vícios, desequilíbrio mental, derrotista, derrame cerebral, pessoas mais frágeis, é muito perigoso, deprecível, veio sofrer no plano físico, muitos acidentes, orgulho, falta garra.',
        'mission': 'tem que traçar metas de vitória, aprender a lutar na vida, ser prático e objetivo, ter perseverança.',
        'heart': 'pede para trabalhar com terapia e regressão afim de fortalecer o ego e recuperar a auto-estima.',
        'sex': 'inseguro, fragilidade.',
        'family': 'eixo destrutivo, destruir a família, principalmente pela boca.'
    },
    '17': {
        'head': 'pessoa iluminada a nível espiritual, atrai simpatias, vai ser muito infantil, deslumbramento, tem que saber separar o brilho da realidade.',
        'mission': 'levar sempre uma palavra de esperança para o outro, espontaneidade, otimismo, alegria.',
        'heart': 'ama intensamente, tem transparência, se doa por inteiro, confia muito.',
        'sex': 'estabilidade, confiança, amor, alegria.',
        'family': 'muita alegria e timidez.'
    },
    '18': {
        'head': 'é o arcano da espiritualidade, é o pecado da preguiça (Lua), vive de ilusões, sonhos, mistérios, medos.',
        'mission': 'mago, cineasta, fotógrafo, vendedor de ilusões (vende anel, porta, etc...), pode ser mentiroso.',
        'heart': 'tomar cuidado para não extrapolar, beber demais, ter senso de limites, ansiedade, são galanteadores, podem seduzir, sempre tem uma palavra simpática, são sujeitos a febre.',
        'sex': 'tomar cuidado, o escondido, o inimigo oculto, o amante, muita ilusão, fraqueza, se for mulher tomar cuidado para não casar grávida.',
        'family': 'instável, perigoso, vive no mundo da lua, do sonho e da fantasia. “Visto a minha filha tudo aquilo que eu gostaria de ter sido” – complexo de Cinderela; pede terapia.'
    },
    '19': {
        'head': 'vida, extravagante, alegre criativo, afetivo, inteligente brilha, criança, intuição, aprendizado, energia, razão, preguiça, orgulho, vaidade. O Sol recicla, dá energia e tira, o número 19 que é regido pelo elemento fogo, tem a criança 1 que é regido pelo elemento ar e o velho 9 que é regido pelo elemento terra, pede muito equilíbrio, só conseguirá a riqueza através do próprio trabalho.',
        'mission': 'passar mensagens e não discutir, ser humilde, mestres, professores, sempre querem ensinar, criatividade.',
        'heart': '',
        'sex': '',
        'family': ''
    },
    '20': {
        'head': 'iluminação, muitas vidas passadas, tem um espírito bem velho, as vezes é a última encarnação da pessoa, as pessoas morrem na mão deste arcano, renascimento, amadurecimento, orientação, muita intuição.',
        'mission': 'sabedoria, intuição, vidência, pré-munição, rapidez mental, iluminação, qualquer área profissional desde que ela possa ser livre para amar e usar a sua intuição.',
        'heart': '',
        'sex': 'normal, transcendência.',
        'family': 'iluminação, caminhos, às vezes tem uma passagem rápida nesta vida.'
    },
    '21': {
        'oMundo': 'plenitude, equilíbrio, proteção, estabilidade, sorte.'
    },
    '22': {
        'oLouco': 'abrir mão dos valores materiais e pegar os valores morais, as vezes são “bicho grilo”, excêntricos, esquisitos. É o arcano da transcendência, quem rege é aquário. Às vezes fala de coisas do passado, esclerose, é o finalzinho da vida.',
        'mission': 'Aborto natural. '
    }
};

var magicAndMeaningOfNumbers = {
    '1': 'O princípio ativo, celeste, o centro, a essência, o criador, o ponto irradiante, o masculino, a luz, o Yang, o homem de pé, o Sol, o primeiro movimento. Símbolo do Ser e da Revelação. Simboliza a unidade, a onipotência divina, o princípio de todas as coisas, a individualidade, a espontaneidade, a força de vontade, a energia e a criatividade. É o início de tudo, são as novas oportunidades, a busca do inusitado. Ele traz coragem, dinamismo, independência, é um número forte. O seu lado negativo pode gerar um excesso de confiança e acabar transformando a liderança num domínio muito autoritário.',
    '2': 'O primeiro passivo, terrestre. o Yin, o reflexo, a duplicação, a alternância, o feminino, a primeira divisão em direção a multiplicidade. Representa a Lua, a complementação, a substância que recebe a essência. Simboliza a duplicidade, a dúvida, a discórdia, o antagonismo, mas também o equilíbrio, o movimento que constrói o progresso. É a manifestação das oposições, do criador e da criatura, da vida e da morte, do céu e da terra, do ativo e do passivo, do homem e da mulher, do bem e do mal. É o número do equilíbrio, do senso de justiça e do crescimento espiritual. Ele confere gentileza, compreensão e sabedoria. Sua influência traz grande capacidade de adaptação e a busca de harmonia nos relacionamentos. O seu lado negativo é a passividade, que pode acabar por aceitar todas as imposições alheias.',
    '3': 'A síntese, a solução do conflito dual, o número da expressão da totalidade, da perfeição da união do 1 com o 2, nada pode ser acrescentado a ele. O triângulo, algo muito firme em sua base. Os Três Mistérios. O triângulo mágico. Representa o homem, enquanto filho do Céu e da Terra. É ligado a comunicação e a espiritualidade. Em quase todas as religiões, existe uma trindade divina, representada por uma divindade masculina, uma feminina e um “filho”, fruto dessa união. O ternário é o dogma universal. Sugere também a intuição, a ação, o progresso, a liderança. Número da comunicação e da alegria de viver. Normalmente traz facilidade no contato com os outros e indica grande talento, principalmente nas artes da oratória e da literatura. É carregado de otimismo e despreocupação. O lado negativo mostra que ele pode acabar dispersando todo esse talento de forma superficial, sem construir nada de significativo.',
    '4': 'O sólido, o tangível, o terrestre o que foi revelado. Relaciona-se ao quadrado e à cruz. Caracteriza o universo em sua totalidade, com os quatro pontos cardinais, os quatro elementos, etc. Quatro Virtudes. O quadrado mágico. É um número de limitação, acomodação, de ligação com a realidade. Está associado à Terra. Gera estabilidade e segurança material. Sugere também o poder, a força de vontade e a certeza “material”. É o número do equilíbrio, da decisão e da seriedade. Tem grande senso de responsabilidade, apego à rotina e às tradições. Está ligado ao trabalho, à dedicação e à capacidade de construção. O seu lado negativo aparece quando ele põe toda a sua potencialidade no sentido de destruição. Nota: o nome Deus é escrito com 4 letras em diversos idiomas...',
    '5': 'A união, centro da harmonia e do equilíbrio, o homem. Simboliza a vontade divina, os cinco sentidos, as cinco formas sensíveis da matéria. O pentagrama, a flor de cinco pétalas no centro da cruz hermética. É o número do casamento, do centro, a soma do primeiro número par 2, com o primeiro número ímpar 3, uma vez que o número 1 não é considerado. No hinduísmo, o cinco é o princípio de todas as coisas. Simboliza síntese e união. Sugere um desprendimento da matéria para se voltar mais à espiritualidade. E está associado à bondade, à generosidade e o perdão. Também é o número da rebeldia, da aventura e da curiosidade. Está muito ligado aos prazeres, especialmente aos relacionados aos sentidos. Ele confere geralmente rapidez de raciocínio, amor à liberdade, às mudanças e boa capacidade de adaptação. O lado negativo se dá quando ele não assume as responsabilidades ou quando usa seus atributos para enganar ou ludibriar os outros.',
    '6': 'Os dons recíprocos, o bem e o mal, o antagonismo, o macrocosmo. Simboliza a perfeita criação, tal como é vista no selo de Salomão (a estrela de seis pontas). Relaciona-se a besta do Apocalipse, pois na Bíblia é o número do pecado. É o número do amor, da emotividade, dos laços, da doação, da ternura, da escolha, das dúvidas. É o número do amor ao belo, do idealismo e do romantismo. Traz simpatia e afetuosidade, mas também um grande apego às tradições e à família. Quer sempre ter beleza e harmonia ao seu redor. Seu lado negativo aparece quando quer impor seus próprios ideais a todos os outros.',
    '7': 'A totalidade do universo em movimento, os 7 dias da semana, os 7 planetas visíveis, as 7 cores do arco-íris, as 7 notas da escala musical diatônica, os 7 Sacramentos, os 7 gênios, os 7 anjos que conforme o Apocalipse, estão sempre diante do trono de Deus. Simboliza o dinamismo resultante, a aliança de Deus com a humanidade. Representa a plenitude, a individualidade, a riqueza, a perfeição, o período completo ou o ciclo completo. Está associado à Lua (cada fase lunar dura sete dias) e é tido como um número sagrado. Representa as más influências da vida agindo sobre o indivíduo e a certeza de ultrapassar estas barreiras e de vencer o ciclo natural do bem e do mal, assim completando e findando o ciclo promete a certeza da realização. É o número da espiritualidade, do misticismo e da introspecção. Tem muita sensibilidade, fantasia e criatividade, mas sempre voltadas para si próprio. Conduz à busca da tranquilidade e da paz interior. O lado negativo é a instabilidade emocional e a tendência a dar muita importância à fantasia, afastando-se da realidade externa.',
    '8': 'O equilíbrio cósmico, o número dos raios da roda, a ressurreição, a transfiguração, que sucede aos 7 dias da Criação. Símbolo da eternidade, matematicamente representado pelo número 8 na horizontal (lemniscata) é a clássica representação do infinito, a comunhão perfeita entre o consciente e o inconsciente e do conhecimento esotérico. Representa a harmonia da obra terminada. É o número da ordem e do equilíbrio cósmicos. Está associado às ideias de justiça e harmonia. Sugere a imparcialidade e a capacidade de julgar seus atos como dos outros. Representa também a força moral e a integridade, o equilíbrio entre o bem e o mal. Número do equilíbrio material e espiritual, da capacidade de administração e do trabalho duro. Traz uma grande possibilidade de realização financeira. É organizado e realista. Seu lado negativo pode surgir quando ele se volta somente para o aspecto material, abandonando o espiritual.',
    '9': 'A gestação, a busca proveitosa, o término de uma obra, a recompensa final. É o número da plenitude, das esferas celestes, dos coros angélicos (no Cristianismo é o número dos coros dos anjos celestiais), das musas. Quadrado de 3, representa a universalidade :  símbolo da Fé Bahai. Sendo o último número de um algarismo, ou o último do ciclo, ele traz uma visão mais ampla do mundo e das pessoas, relaciona-se ao fecho do círculo. É considerado no esoterismo, o número da perfeição e está associado a perfeição moral e ao consciente, trazendo assim o conhecimento, a sabedoria, a paciência, o senso, a dedicação e a prudência. É o número do humanismo, da generosidade, tem uma forte intuição e imaginação. Geralmente gosta de grandes viagens. O lado negativo vem quando a capacidade de compreensão da vida é mal aplicada, servindo para fins prejudiciais.',
    '10': 'Representa o ponto final das unidades e portanto, o retorno ao ponto de partida, ao número 1. Esta associado aos elementos naturais da vida, o bem e o mal, a vida e a morte, as alegrias e as tristezas, assim o mundo vira, assim a vida gira tendo seus altos e baixos, e assim o ciclo continua terminando uma fase e começando outra. Sugere mudanças e faz parte do destino. É a soma dos quatro primeiros números, onde está a fonte da natureza, da qual tudo flui e para a qual tudo retorna. Representa a totalidade, um todo fechado em si mesmo, a volta à unidade, os 10 Mandamentos, as esferas da Árvore da Vida.',
    '11': 'Número dos mistérios da fecundidade, da renovação dos ciclos vitais. Soma de 5 e 6, representa a ligação do Céu e da Terra (o Tao). Relaciona-se as palavras “abracadabra” e “alendalenda”, usadas como proteção, capazes de colocar aquele que busca em harmonia, com as forças cósmicas e telúricas. O onze é considerado de maneira à parte e é chamado de número mestre. Sua energia é muito forte, ele permite uma mente intuitiva, criativa, progressista e idealista, que normalmente consegue ver além das aparências. O seu lado negativo aparece quando ele não consegue administrar todo esse potencial benéfico e acaba se perdendo na busca de um “paraíso fácil”.',
    '12': 'Número das divisões espaço temporais. Casamento do 3 (os planos do mundo) e do 4 (os pontos cardeais). O Universo e sua multiplicidade interna. Algo fundamental. O Zodíaco (os doze signos), os 12 Apóstolos, as 12 tribos de Israel, os 12 meses do ano, os 12 Cavaleiros da Távola Redonda. É o número da eleição, do círculo concluído. Representado pelo Enforcado, no Tarôt.',
    '13': 'Na Antiguidade o número 13 tornou-se de mau agouro, depois que o Imperador Felipe da Macedônia acrescentou sua estátua às do doze deuses do Olimpo. Logo em seguida, ele foi brutalmente assassinado. É ambivalente, o décimo terceiro capítulo do Apocalipse refere-se ao anticristo e à besta. Em contra partida, Zeus é o décimo terceiro no cortejo olímpico. Relaciona-se à noção de poder e glória. Anuncia o recomeço. Existem treze cartas de cada naipe no Baralho. Jesus e os 12 Apóstolos. Jacó e as 12 Tribos de Israel. O Rei Arthur e os 12 cavaleiros. Robin Hood e seus 12 alegres companheiros. Simbolizado pela Morte, no Tarôt.',
    '14': 'Representa a perfeição também (= 2 × 7).',
    '16': 'Quadrado de 4, o quadrado do quadrado, representa a completa realização no plano concreto e material. Pode simbolizar o extremo orgulho, o poder sem controle, o abismo. O dobro de 8, relaciona-se aos ciclos de encarnação. É a Torre, no Tarôt.',
    '17': 'Número venerado no Islã, soma de 8 e 9, relaciona-se ao 72 (produto de 8 e 9). São 17 os gestos litúrgicos na tradição muçulmana, 17 palavras compõem o chamado à prece. Associa-se às ideias de liberação cármica, mutação e renascimento.',
    '20': 'O Homem Perfeito, para os maias representa a Deus Solar, número cultuado por várias tradições indígenas por estar associado aos 20 dedos humanos. Simbolizado pelo Julgamento, no Tarôt.',
    '21': 'Os atributos da sabedoria, a perfeição por excelência, a livre escolha, entre bem e mal, a responsabilidade. Curiosamente escolhido como marco da maioridade para muitos povos. Evoca a realização, a meta alcançada, a plenitude. No Tarôt é o Mundo.',
    '22': 'A manifestação do ser no espaço e no tempo, as 22 letras hebraicas que representam o Universo da Cabala, símbolo das formas naturais e da história da Criação. Os 22 Arcanos Maiores do Tarôt, os 22 capítulos do Apocalipse de São João. É o número do Universo. Este também é um número mestre, que além de conferir uma excelente compreensão do universo, permite a concretização dos ideais. Ele traz ainda uma grande dose de intelectualidade, o que equilibra a sua parte idealista. O lado negativo deste número só aflora quando ele abandona suas próprias convicções e se deixa levar pelas ideias alheias.',
    '24': 'Representa a duplicação da harmonia entre Céu e Terra. Simboliza também a roda dos renascimentos, com seus 24 raios. É o número dos anciãos do Apocalipse, na Bíblia, relaciona-se com a medida da história humana.',
    '36': 'Relaciona-se ao encontro dos elementos em suas evoluções cíclicas, simbolizando a solidariedade cósmica. É o grande quaternário dos pitagóricos, pois é a soma dos quatro primeiros números pares com os quatro primeiros números ímpares (20 + 16). Existem 36 talismãs de Salomão.',
    '40': 'É o número da provação, do castigo, da espera e da preparação. Moisés passa 40 dias no Monte Sinai, Jesus prega por 40 meses e ressuscita depois de 40 horas no sepulcro, Noé enfrenta 40 dias e 40 noites de dilúvio. Medida de quarentena, do resguardo e da quaresma. Existem 40 cartas numeradas dentro do Baralho Cigano, durante 40 anos os israelitas vagaram pelo deserto à procura da Terra Prometida.',
    '49': 'Quadrado de sete, representa, em diferentes tradições, o período de espera para a alma de uma pessoa falecida ganhar definitivamente um novo lar. Simboliza o final de uma longa jornada, ou o término de um tempo de espera.',
    '64': 'Quadrado de 8, representa a realização terrestre, a perfeição de algo completo, a plenitude. Associa-se também ao campo delimitado de batalha, representado pelo tabuleiro de xadrez. Jesus Cristo seria a sexagésima quarta geração depois de Adão, segundo São Lucas.',
    '70': 'Como todos os múltiplos de 7, relaciona-se à totalidade, à universalidade, à expressão do ilimitado. Representa os habitantes do mundo, os 70 povos da Terra, dispersos após a construção da Torre de Babel.',
    '72': 'Produto de 9 e 8, números relacionados à harmonia das esferas, representa equilíbrio e proporção. Símbolo da Criação (7) manifestada, em perfeito equilíbrio (2). A soma de seus algarismos é 9 e são 9 os números dos quais é múltiplo: 2, 3, 6, 8, 9, 12, 18, 24, 36.',
    '99': 'Na tradição esotérica islâmica (o sufixo) é o número dos nomes conhecidos de Deus. Múltiplo de 33, idade mística de Jesus Cristo, carrega em si a revelação, a expressão do Divino na humanidade.',
    '100': 'Parte do todo, conjunto que se destaca num todo maior. Microcosmo inserido no macrocosmo. Porção individualizada, que possui função específica dentro do contexto mais amplo. Atribui uma qualidade específica ao que é enumerado.',
    '108': 'Como o 36 (número do céu) e o 72 (número da terra), o 108 (número do homem) é muito apreciado por várias sociedades secretas. Representa a harmonia. Podemos encontrá-lo no triângulo isósceles (com 108 graus), que dá as proporções do número de ouro.',
    '365': 'O processo cíclico completo, representa o ciclo cósmico. Se acrescentarmos uma unidade representará a saída do círculo, a abertura que possibilita escapar do ciclo, da permanência para a eternidade.',
    '666': 'O número do Anticristo, o máximo da fraqueza.',
    '777': 'O número do Messias, o máximo da perfeição.',
    '1000': 'Significa multidão.',
    '10000': 'Simboliza a abundância, a fecundidade. Na China, representa a totalidade de tudo que há sobre a Terra. Relaciona-se à quantidade que não pode ser contada. Refere-se também ao reino de Cristo, onde cada semente produzirá dez mil grãos.'
};

var kabbalah = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 10,
    'L': 20,
    'M': 30,
    'N': 40,
    'O': 50,
    'P': 60,
    'Q': 70,
    'R': 80,
    'S': 90,
    'T': 100,
    'U': 200,
    'V': 200,
    'W': 200,
    'X': 300,
    'Y': 9,
    'Z': 400
};

var treeOfLife = {
    name: '',
    firstName: '',
    surname: '',
    calculateNameResult: undefined,
    kabbalahHebrew: undefined,
    wheelSamsara: undefined,
    hereditaryKarma: { //karmaHereditario
        sum: 0,
        message: ''
    },
    commandOfLife: { //comandoDaVida
        sum: 0,
        message: ''
    },

    calculateNameMaps: function () {
        treeOfLife.name = treeOfLife.name.trim();
        var isEquals = false;
        var mapName = '';
        var adot = [];
        var adotCount = 0;
        for (var i = 0; i < treeOfLife.name.length; i++) {
            if (treeOfLife.name[i] !== ' ') {
                mapName += kabbalah[treeOfLife.name[i]] + '|';

                isEquals = false;
                var repeatNumber = undefined;
                if (adot.length > 0) {
                    adot.forEach(function (obj) {
                        if (obj.letter == treeOfLife.name[i]) {
                            isEquals = true;
                            repeatNumber = obj.number;
                        }
                    });
                } else {
                    isEquals = false;
                }

                if (!isEquals) {
                    adotCount++;
                    adot.push({
                        letter: treeOfLife.name[i],
                        number: adotCount
                    });
                } else {
                    adot.push({
                        letter: treeOfLife.name[i],
                        number: repeatNumber
                    });
                }
            } else {
                mapName += ' ';
            }
        }

        treeOfLife.calculateNameResult = {
            mapName: mapName,
            adot: {
                map: adot,
                sum: limit22(adot.length)
            }
        };
    },

    calculateKabbalahHebrew: function () {
        var nameSplit = treeOfLife.name.split(' ');
        treeOfLife.surname = nameSplit[(nameSplit.length - 1)];
        for (var i = 0; i < (nameSplit.length - 1); i++) {
            treeOfLife.firstName += nameSplit[i] + ' ';
        }

        for (var i = 0; i < treeOfLife.firstName.length; i++) {
            if (treeOfLife.name[i] !== ' ') {
                treeOfLife.commandOfLife.sum += kabbalah[treeOfLife.firstName[i]];
            }
        }
        treeOfLife.commandOfLife.message = magicAndMeaningOfNumbers[sumMax(treeOfLife.commandOfLife.sum)];

        for (var i = 0; i < treeOfLife.surname.length; i++) {
            if (treeOfLife.name[i] !== ' ') {
                treeOfLife.hereditaryKarma.sum += kabbalah[treeOfLife.surname[i]];
            }
        }
        treeOfLife.hereditaryKarma.message = magicAndMeaningOfNumbers[sumMax(treeOfLife.hereditaryKarma.sum)];
    },

    calculateWheelSamsara: function () {
        var repeat = {};
        var repeat1 = [];
        var repeat2 = [];
        var repeat3 = [];

        [].map.call(treeOfLife.calculateNameResult.adot.map, function (obj) {
            if (repeat[obj.number] == undefined) {
                repeat[obj.number] = 1;
            } else {
                repeat[obj.number] ++;
            }
        });

        for (key in repeat) {
            if (repeat[key] === 3) {
                repeat3.push(key);
            } else {
                if (repeat[key] === 2) {
                    repeat2.push(key);
                } else {
                    repeat1.push(key);
                }
            }
        }

        var heart = {
            map: [],
            sum: 0
        };
        var head = {
            map: [],
            sum: 0
        };
        var mission = {
            map: [],
            sum: 0
        };
        var sex = {
            map: [],
            sum: 0
        };
        var family = {
            map: [],
            sum: 0
        };

        repeat1.forEach(function (num) {
            heart.map.push(eval(num));
        });
        heart.map.forEach(function (num) {
            heart.sum += num;
        });

        repeat2.forEach(function (num) {
            head.map.push(2 * eval(num));
        });
        head.map.forEach(function (num) {
            head.sum += num;
        });

        if (repeat3.length > 0) {
            repeat3.forEach(function (num) {
                mission.map.push(3 * eval(num));
            });
        } else {
            mission.map.push(treeOfLife.calculateNameResult.adot.sum);
        }
        mission.map.forEach(function (num) {
            mission.sum += num;
        });

        sex.map = [heart.sum, head.sum, mission.sum];
        sex.sum = heart.sum + head.sum + mission.sum;
        family.map = [heart.sum, head.sum, mission.sum, sex.sum];
        family.sum = heart.sum + head.sum + mission.sum + sex.sum;

        heart.sum = limit22(heart.sum);
        head.sum = limit22(head.sum);
        mission.sum = limit22(mission.sum);
        sex.sum = limit22(sex.sum);
        family.sum = limit22(family.sum);

        treeOfLife.wheelSamsara = {
            heart: {
                sum: heart.sum,
                message: wheelSamsara[heart.sum].heart
            },
            head: {
                sum: head.sum,
                message: wheelSamsara[head.sum].head
            },
            mission: {
                sum: mission.sum,
                message: wheelSamsara[mission.sum].mission
            },
            sex: {
                sum: sex.sum,
                message: wheelSamsara[sex.sum].sex
            },
            family: {
                sum: family.sum,
                message: wheelSamsara[family.sum].family
            }
        };
    },

    run: function (name) {
        treeOfLife.name = name;
        treeOfLife.calculateNameMaps();
        treeOfLife.calculateKabbalahHebrew();
        treeOfLife.calculateWheelSamsara();
    }
};
treeOfLife.run('MILLER AUGUSTO SILVA MARTINS');

console.log('###############################################################');
console.log(treeOfLife.firstName, treeOfLife.surname);
console.log('###############################################################\n\n');

console.log('#### CABALA HEBRAICA ############################################');
console.log('É uma outra forma de Numerologia, cujo resultado também pode ser interpretado com o significado de cada número.');
console.log('Valores das letras do alfabeto hebraico só é feito com o nome de batismo.\n');
console.log('Cálculo do Nome ' + sumMax(treeOfLife.commandOfLife.sum) + ' [Comanda a vida]:\n');
console.log(treeOfLife.commandOfLife.message);
console.log('\n');
console.log('Sobrenome ' + sumMax(treeOfLife.hereditaryKarma.sum) + ' [Karma hereditário]:\n');
console.log(treeOfLife.hereditaryKarma.message);
console.log('###############################################################\n\n');

console.log('##### RODA DE SÂMSARA ############################################');
console.log('ADOT ' + treeOfLife.calculateNameResult.adot.sum + ' - simplesmente é o número da soma das letras que constituem o nome. Seu resultado significa tudo aquilo que foi determinado para cumprirmos em nossas vidas, desde que nascemos, ou seja, o nosso nome de destino, ou o carma hereditário.\n');
console.log('O número ' + treeOfLife.calculateNameResult.adot.sum + ':\n');
console.log(magicAndMeaningOfNumbers[treeOfLife.calculateNameResult.adot.sum]);
console.log('\n');

console.log('Coração ' + treeOfLife.wheelSamsara.heart.sum + ':');
console.log(treeOfLife.wheelSamsara.heart.message);
console.log('\n');

console.log('Cabeça ' + treeOfLife.wheelSamsara.head.sum + ':');
console.log(treeOfLife.wheelSamsara.head.message);
console.log('\n');

console.log('Missão ' + treeOfLife.wheelSamsara.mission.sum + ':');
console.log(treeOfLife.wheelSamsara.mission.message);
console.log('\n');

console.log('Sexo ' + treeOfLife.wheelSamsara.sex.sum + ':');
console.log(treeOfLife.wheelSamsara.sex.message);
console.log('\n');

console.log('Família ' + treeOfLife.wheelSamsara.family.sum + ':');
console.log(treeOfLife.wheelSamsara.family.message);
console.log('###############################################################\n\n');