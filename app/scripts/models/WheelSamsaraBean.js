angular.module('cabalaApp').factory('WheelSamsaraBean', [function () {
    'use strict';

    var wheelSamsara = {
        '1': {
            'head': 'Muita astúcia, bom de conversa, tem lábia, inteligência, rapidez mental para estudo, criatividade, ingenuidade, dispersividade, ilusão, infantilidade, ativo, namorador,veio para escolher. Conselho: pondere, pense antes de agir, não meta os pés pelas mãos, você é regido por Mercúrio ( que é a rapidez), primeiro tenho que saber o que quero, entrar em contato comigo mesmo, depois me relacionar com o mundo.',
            'mission': 'Trabalhador, bom orador, muita expressão na área da comunicação, advogado, político, professor, jornalista, comerciante.',
            'heart': 'Muitos amores. Conselho: namore bastante, fique livre, case somente mais tarde, aproveite as muitas amizades.',
            'sex': 'Muita criatividade, versatilidade, descontração, adora novidades.',
            'family': 'Agitado, festeiro, felicidade, ativo, funciona como líder e acelerador, vai de embalo.'
        },
        '2': {
            'head': 'Rege a moral, não fala muito, sabe guardar segredos, é a iniciação feminina, é o número da união, inteligência, intuição, criatividade, ponderação, receptividade, atrai as pessoas, faz só o que gosta, se ama muito, as vezes manipuladora, sempre casa e não perde a individualidade, tem visão dos dois lados de tudo, tem dons paranormais, é secreta, não se abre, não se mistura, é seletiva.',
            'mission': 'Muita intuição e inteligência, psicologia, medicina, preservação da família, cantora.',
            'heart': 'Nunca deixar de usar a intuição, lua, pode ter dualidade, tem medo de se mostrar, é uma me mal trabalhada, pede terapia.',
            'sex': 'Traz normas, é difícil conhecer-se, pode ter uma vida dupla.',
            'family': 'Mãe, protetora, matriarca.'
        },
        '3': {
            'head': 'É o número do trabalho, faz tudo cedo, tem que casar, ter filhos, pode ter imprevisto de gravidez, dinâmica, inteligente, assume a maternidade, nunca aborta, independência.',
            'mission': 'Muito transparente, nunca criam caso, facilitam a vida dos outros.',
            'heart': 'Faz o que quer, abraça todo mundo, trabalhadora, mãe.',
            'sex': 'Muita ação.',
            'family': 'É a mãe, mulher e amante, trabalhadora, espírito de sacrifício, se for homem sobra para ele cuidar da mãe, irmãos ou parentes.'
        },
        '4': {
            'head': 'Equilíbrio, poder, estabilidade, assumido, ordem na comunicação, sabe o que quer e o que fala, é convicto e firme.',
            'mission': '',
            'heart': 'Estável, sabe o que quer, pode ter mais que uma pessoa.',
            'sex': 'Representa as grandes paixões, é bom de cama, uma pessoa charmosa e carismática.',
            'family': 'Pai, o pai que não deixa faltar nada, dominador, generosidade, provedor, protetor.'
        },
        '5': {
            'head': 'Ordem, estável, bom senso, intelectualidade, bondade.',
            'mission': 'Conhecimento, professor, orientador, médico, advogado, mentor espiritual, padre.',
            'heart': 'Calma, fraternal, correto, tranquilidade.',
            'sex': 'Careta, ritual, pacato.',
            'family': 'Família em primeiro lugar, trabalho, tradicionalista.'
        },
        '6': {
            'head': 'É o número do ego, narcisista, rege estética, só ele é lindo, espontaneidade, vai pelo toque, harmonia, emoção, dúvidas, insegurança, muito emocional.',
            'mission': 'Passar harmonia, passar amor, arte runeral, paisagista, alimentação, doação, unir as pessoas, dá poesia (Vênus em libra).',
            'heart': 'Muita emoção, frieza, mimos, sensitiva.',
            'sex': 'Só vai transar por amor, romântico e carinhoso.',
            'family': 'Apaziguar, ajeitar as coisas, antes só do que mal acompanhado, nunca usar como indecisão e sim como escolha, não olhe para traz, o importante é ensinar para que possamos abrir mão do nosso conhecimento.'
        },
        '7': {
            'head': 'Toda a parte esotérica, magia, age pela razão, individualidade, independência, amadurecimento, desenvolver a espiritualidade.',
            'mission': 'Passar mensagens de independência, dá praticidade (Vênus em touro).',
            'heart': 'Amor com tranquilidade, não é ciumento, não mente.',
            'sex': 'Pode se satisfazer sem pensar no outro, não é carinhoso, age pela razão.',
            'family': 'Viaja muito, dá independência para a mulher e os filhos, muito prático.'
        },
        '8': {
            'head': 'Equilíbrio, senso de justiça, frieza, bom senso, não é passional, não se deixa levar pelas emoções.',
            'mission': 'Ser bom, juiz, advogado, economista, político, militar, fonoaudiologia.',
            'heart': 'Disciplina, autocrítica, nunca é injusto, nunca tem amante, reconhece seus erros.',
            'sex': 'Equilíbrio e integridade.',
            'family': 'Desquite, divórcio, viuvez, sossego, estabilidade, veio nesta família para se ajustar, sempre tem problema com a justiça, trabalha a lei na família, pré-disposição para adotar filhos, pessoas adotadas.'
        },
        '9': {
            'head': 'Rege a moral, é a iniciação masculina, sério, humildade, dono da sabedoria máxima, passou por várias encarnações, preservar a individualidade, estuda muito, tem conhecimento.',
            'mission': 'Filósofo, guru, orientador, professor, pode ter artrite (tudo ligado aos ossos), fígado, bolsite, bico de papagaio, coluna.',
            'heart': 'Solidão, individualista, celibatário, não tem medo da solidão.',
            'sex': 'Pode ter feito voto de castidade, frieza, não liga muito.',
            'family': 'Ficar sozinho, andarilho, introspectivo, conselheiro, formal, negativo, avarento, mesquinho. Conselho: suba a montanha e contemple lá de cima o mundo. Ligado a hierarquia, separatista, seletivo, é o peso da consciência que cobra uma punição.'
        },
        '10': {
            'head': 'Reajuste forte, abrir mão de tudo que possui, veio ter acúmulos materiais, é o arcano do compromisso carmático com os filhos, nasceu para ter filhos, são pessoas instáveis, trabalham muito, vieram aprender e refazer todos os níveis, trabalho, amor, espiritual, material e saúde, qualquer lugar representa movimento e instabilidade.',
            'mission': 'Veio refazer a vida, aprender a lição, saber viver.',
            'heart': 'Nunca vai saber o que quer.',
            'sex': 'Dificuldades, pode não achar a pessoa certa.',
            'family': 'Veio cumprir um carma, aprender com a família, às vezes, tem uma passagem rápida nesta vida.'
        },
        '11': {
            'head': 'Tomar cuidado, não é bom, vive sobre tensão, toda a vida tem que se controlar e controlar os outros, bravo, mandão, genioso, sem paciência, inteligente, as vezes é fanático (eu quero assim), tem que ter equilíbrio, precisa de terapia.',
            'mission': 'Veio aprender a ser o 2, pensar antes de falar e agir, tem que aprender a ter jogo de cintura, vive com a rapidez, agressão, líder, militar, cargos de comando, veio dar ordem.',
            'heart': 'Pessoas cheias de grandes paixões, se entrega, vai de cabeça, é ciumento, exige muito.',
            'sex': 'Exigente, forte, bom de cama.',
            'family': 'Mandão, líder, dá ordem na casa, agressivo, briguento, bate, briga de arcano 11 é muito impulsiva, quem rege é Áries, nunca ande armado, faça caratê ou muito esporte.'
        },
        '12': {
            'head': 'Não é fácil, acabam se doando muito mais que o outro, é a casa do sacrifício, se sacrificam muito, carregam uma cruz, a vida tira tudo dela, vem com poucas chances, às vezes, vem com defeito físico, cego, surdo, mudo ou pobre, sujeito à depressão.',
            'mission': 'A pessoa não faz nada, não tem vergonha de pedir esmola, na outra encarnação foi extravagante ou suicida, serviçais, mendigo.',
            'heart': 'Se sacrificam, sofrem por outros, pessoas deprimidas.',
            'sex': 'Pode encontrar dificuldades.',
            'family': 'É miserável, e reclama muito da vida.'
        },
        '13': {
            'head': 'Estão cortando, ceifando alguma coisa, transformação, dor, fatalidade, o inevitável, tem que trabalhar bem este arcano para ficar o 4, é alguém que veio ao mundo para fazer uma alquimia nele mesmo, nasceu para ser um imperador mas não é fácil, vai ter uma grande perda, tem uma postura amarga, é depressivo e pode se matar.',
            'mission': 'Passar uma mensagem de transformação, quem rege é escorpião, estrategista, psicologia, cirurgião, psiquiatria. Conselho: saiba abrir mão de algo para alcançar outra coisa melhor, se você perdeu algo veja que você possui outras coisas.',
            'heart': 'Perder entes queridos, sempre sofre por perdas.',
            'sex': 'No caso de mulheres, podem ter gravidez complicada, aborto ou frigidez, portanto deve tomar cuidado.',
            'family': 'Tendência para morar sozinho, geralmente não é criado pela mãe, o homem sempre vai perder alguém da família e sofrer muito, e neste arcano que nós ganhamos a herança hereditária que na mandala é a casa 8.'
        },
        '14': {
            'head': 'Diplomacia, nunca quer se comprometer, pessoas que ficam em cima do muro, é o arcano dos alquimistas ou seja que une algo com outra coisa (mistura isso com aquilo), rege a moral.',
            'mission': 'Mago, psicologia, medicina alternativa, cientista, diplomata, maus políticos, químico, homeopatia, cromoterapia, bruxo, feiticeiro, florais, muita pesquisa, tapeçaria, trabalhar com calma e devagar e não impor nada a ninguém.',
            'heart': 'Ter cuidado para não ficar na mão do outro, não tem grandes paixões, não adianta ter pressa.',
            'sex': 'Pessoa morna, equilibrada, meio parada.',
            'family': 'Sempre põe panos quentes em tudo.'
        },
        '15': {
            'head': 'Gosta de tudo fácil, oferece o prazer, super esperto, visa sempre o lado material, toma posse das coisas, egoísta, é um arcano de destino também.',
            'mission': 'Pode morrer cedo de câncer, diabete, todas as doenças hereditárias, os seus valores são materiais, fazem qualquer negócio para ganhar dinheiro.',
            'heart': 'Obsessivo, grosseiro, passional.',
            'sex': 'Adora, visa só o lado dele, incesto.',
            'family': 'Novo rico, grosseiro, materialista, casa por dinheiro, “eu que sustento todo mundo”.'
        },
        '16': {
            'head': 'É uma pessoa que foi muito poupada, é despreparada, às vezes, foram espíritos abortados, são pessoas revoltadas e destrutivas, é a sombra, o sonho. Qualquer lugar precisa ser muito bem trabalhado, é o arcano dos suicidas, vícios, desequilíbrio mental, derrotista, derrame cerebral, pessoas mais frágeis, é muito perigoso, deprecível, veio sofrer no plano físico, muitos acidentes, orgulho, falta garra.',
            'mission': 'Tem que traçar metas de vitória, aprender a lutar na vida, ser prático e objetivo, ter perseverança.',
            'heart': 'Pede para trabalhar com terapia e regressão afim de fortalecer o ego e recuperar a auto-estima.',
            'sex': 'Pode ser inseguro, fragilidade.',
            'family': 'Eixo destrutivo, destruir a família, principalmente pela boca.'
        },
        '17': {
            'head': 'Pessoa iluminada a nível espiritual, atrai simpatias, vai ser muito infantil, deslumbramento, tem que saber separar o brilho da realidade.',
            'mission': 'Levar sempre uma palavra de esperança para o outro, espontaneidade, otimismo, alegria.',
            'heart': 'Ama intensamente, tem transparência, se doa por inteiro, confia muito.',
            'sex': 'Estabilidade, confiança, amor, alegria.',
            'family': 'Muita alegria e timidez.'
        },
        '18': {
            'head': 'É o arcano da espiritualidade, é o pecado da preguiça (Lua), vive de ilusões, sonhos, mistérios, medos.',
            'mission': 'Mago, cineasta, fotógrafo, vendedor de ilusões (vende anel, porta, etc...), pode ser mentiroso.',
            'heart': 'Tomar cuidado para não extrapolar, beber demais, ter senso de limites, ansiedade, são galanteadores, podem seduzir, sempre tem uma palavra simpática, são sujeitos a febre.',
            'sex': 'Deve tomar cuidado, o escondido, o inimigo oculto, o amante, muita ilusão, fraqueza, se for mulher tomar cuidado para não casar grávida.',
            'family': 'Instável, perigoso, vive no mundo da lua, do sonho e da fantasia. “Visto a minha filha tudo aquilo que eu gostaria de ter sido” – complexo de Cinderela; pede terapia.'
        },
        '19': {
            'head': 'Vida, extravagante, alegre criativo, afetivo, inteligente brilha, criança, intuição, aprendizado, energia, razão, preguiça, orgulho, vaidade. O Sol recicla, dá energia e tira, o número 19 que é regido pelo elemento fogo, tem a criança 1 que é regido pelo elemento ar e o velho 9 que é regido pelo elemento terra, pede muito equilíbrio, só conseguirá a riqueza através do próprio trabalho.',
            'mission': 'Passar mensagens e não discutir, ser humilde, mestres, professores, sempre querem ensinar, criatividade.',
            'heart': '',
            'sex': '',
            'family': ''
        },
        '20': {
            'head': 'Iluminação, muitas vidas passadas, tem um espírito bem velho, as vezes é a última encarnação da pessoa, as pessoas morrem na mão deste arcano, renascimento, amadurecimento, orientação, muita intuição.',
            'mission': 'Sabedoria, intuição, vidência, pré-munição, rapidez mental, iluminação, qualquer área profissional desde que ela possa ser livre para amar e usar a sua intuição.',
            'heart': '',
            'sex': 'Normal, transcendência.',
            'family': 'Iluminação, caminhos, às vezes tem uma passagem rápida nesta vida.'
        },
        '21': {
            'oMundo': 'Plenitude, equilíbrio, proteção, estabilidade, sorte.'
        },
        '22': {
            'oLouco': 'Abrir mão dos valores materiais e pegar os valores morais, as vezes são “bicho grilo”, excêntricos, esquisitos. É o arcano da transcendência, quem rege é aquário. Às vezes fala de coisas do passado, esclerose, é o finalzinho da vida.',
            'mission': 'Aborto natural. '
        }
    };

    return wheelSamsara;
}]);