var kabala = function (name) {
    this.name = name.toUpperCase();
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
    this.nameMap = "";
};

kabala.prototype = {

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
            destination: 'Vencer propagando suas ideias, auto suficiente, desbravador, tem muita iniciativa, é sempre um líder, inovador, corajoso, mas ao mesmo tempo, agressivo e impulsivo.'
        },
        2: {
            ideality: 'Compreensão e necessidade de união, pessoa submissa. É estática, fica esperando as coisas caírem do céu. Não consegue viver só. As vezes é uma pessoa “chorona” e dependente.',
            expression: 'Grande amiga e colaboradora, vista de forma doce e meiga. Mas também aparenta uma pessoa frágil, passiva, dependente.',
            destination: 'Cultivar harmonia nos relacionamentos sociais e afetivos, pouca iniciativa, muito dependente, não faz nada sem consultar alguém em quem confie.'
        },
        3: {
            ideality: 'Criatividade, boa comunicação, alegre, vai sempre buscar expansão em sua vida. Tem também grande tendência a uma distorção de valores.',
            expression: 'Sabe entreter e estimular todos, alegre, extrovertido. Passa uma imagem de expansão, crescimento e alto astral.',
            destination: 'Ganhar reconhecimento, tanto profissional quanto social, capacidade enorme de se expandir, tanto no aspecto material como no emocional. Supera os problemas de saúde melhor que qualquer outro.'
        },
        4: {
            ideality: 'Seriedade, estabilidade, observação, teimosia, tem dificuldades em atingir seus horizontes, vivendo assim, bastante limitada. Uma pessoa organizada, cooperativa e que se dedica muito ao trabalho.',
            expression: 'Paciente e dedicada ao trabalho, vista como uma pessoa séria, por outro lado, parece alienada aos problemas dos outros e desinteressada.',
            destination: 'Ter estabilidade, principalmente na área econômica, as vezes tudo para essa pessoa é muito difícil. Se empenha muito, consegue pouco. Meticulosa, crítica, se preocupa demais com pequenos detalhes e acaba não aproveitando as coisas boas da vida.'
        },
        5: {
            ideality: 'Liberdade, curiosidade, risonha, carismática, superficial (só esquenta a cabeça em casos extremos), ciumenta. Comportamento repletos de altos e baixos.',
            expression: 'Comunicativa e superficial, passa uma visão carismática. Pode ser uma “mosca morta”, ter uma aparência péssima, mesmo assim será considerada extremamente sedutora.',
            destination: 'Viver aventuras e novas experiências, não para em emprego, despreocupado, bagunceiro, quer curtir a vida, busca constantemente o prazer, tem grandes tendências a vícios, como drogas e bebidas.'
        },
        6: {
            ideality: 'Simpatia, sensibilidade artística, hiper afetiva e extremamente emotiva. Tem ligação com artes, música, cultura. As vezes contestador e teimoso. Busca harmonia familiar.',
            expression: 'Romântica incurável, vista com ternura, as pessoas vão buscar no número 6 alguém em quem podem confiar e com quem possam desabafar. É o “ombro amigo”.',
            destination: 'Dedicar-se à família, só consegue se estruturar se tiver harmonia, por essa razão, busca o equilíbrio o tempo todo. Capacidade de concretização excelente.'
        },
        7: {
            ideality: 'Introversão, independência, analítico e observador. Busca o conhecimento o tempo todo. É porém dissimulado e depressivo. Muita inteligência.',
            expression: 'Criativo, seguro, uma pessoa vista de forma séria e introspectiva.',
            destination: 'Desenvolver a espiritualidade e buscar conhecimento em tudo. Tem tendência a gostar de tudo o que está ligado ao esoterismo e a espiritualidade.'
        },
        8: {
            ideality: 'Materialismo, orgulho, sensatez, consciência, desenvolve-se intelectualmente com muita facilidade. Consegue se estruturar muito bem. Chega entretanto, a ser prático demais e pouco afetuoso. Bem organizado.',
            expression: 'Franco, ambicioso, esnobe, passa uma imagem de que é superior aos outros. Muito ligado às coisas materiais.',
            destination: 'Ter sucesso profissional e social, pode ter todas as dificuldades do mundo, mas vai fazer de tudo para ter seu próprio negócio. Empreendedor, voltado para o lado material da vida. Prático demais.'
        },
        9: {
            ideality: 'Compaixão, otimismo, imediatismo, é considerado o “irmão de todo mundo” por ser extremamente solidário e humano. Apresenta porém, tendências à agressividade. É um ser mutável, mal consegue uma coisa e já está pensando em outra. Uma pessoa humanitária.',
            expression: 'Generosa, devotada, companheirismo, disposto a ajudar todo mundo, passa esta imagem, porém, pode ser a pessoa mais egoísta do mundo.',
            destination: 'Transformar o mundo num lugar melhor e mais gostoso de se viver, consegue tudo o que quer, mesmo que seja com muito sacrifício. É muito preocupado com a humanidade, quer resolver os problemas de todo mundo.'
        },
        11: {
            ideality: 'Forte inspiração artística.',
            expression: 'Desatento e idealista.',
            destination: 'Cultivar harmonia nos relacionamentos sociais e afetivos, pouca iniciativa, muito dependente, não faz nada sem consultar alguém em quem confie.'
        },
        22: {
            ideality: 'Espiritualidade.',
            expression: 'Talentoso, com grande poder de ação.',
            destination: 'Ter estabilidade, principalmente na área econômica, as vezes tudo para essa pessoa é muito difícil. Se empenha muito, consegue pouco. Meticulosa, crítica, se preocupa demais com pequenos detalhes e acaba não aproveitando as coisas boas da vida.'
        },
        33: {
            ideality: 'Simpatia, sensibilidade artística, hiper afetiva e extremamente emotiva. Tem ligação com artes, música, cultura. As vezes contestador e teimoso. Busca harmonia familiar.',
            expression: 'Romântica incurável, vista com ternura, as pessoas vão buscar no número 6 alguém em quem podem confiar e com quem possam desabafar. É o “ombro amigo”.',
            destination: 'Dedicar-se à família, só consegue se estruturar se tiver harmonia, por essa razão, busca o equilíbrio o tempo todo. Capacidade de concretização excelente.'
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

        return this;
    },

    log: function () {
        this.getCalculate();
        console.log(':::: Kabala :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
        console.log(this.name);
        console.log(this.nameMap);
        console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
        console.log('Idealidade - ' + this.ideality.number + ' :', this.ideality.message);
        console.log('Destino - ' + this.destination.number + ' :', this.destination.message);
        console.log('Expressão - ' + this.expression.number + ' :', this.expression.message);
    }
};
