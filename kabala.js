var kabala = function (name, birthday) {
    this.name = name.toUpperCase();
    this.nameMap = '';
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
    this.currentDate = {
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
    };
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
    this.personalDay = {
        number: 0,
        message: ''
    }; //Dia Pessoal
    this.powerfulNumber = {
        number: 0,
        message: ''
    }; //Número Poderoso
    this.absence = []; //Ausências
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
            destination: 'Vencer propagando suas ideias, auto suficiente, desbravador, tem muita iniciativa, é sempre um líder, inovador, corajoso, mas ao mesmo tempo, agressivo e impulsivo.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: 'Esta fase obriga você a manter-se sobre seus próprios pés, dependendo apenas de si mesmo para chegar ao sucesso. Pode ser um período difícil, mas promete grandes oportunidades.',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        2: {
            ideality: 'Compreensão e necessidade de união, pessoa submissa. É estática, fica esperando as coisas caírem do céu. Não consegue viver só. As vezes é uma pessoa “chorona” e dependente.',
            expression: 'Grande amiga e colaboradora, vista de forma doce e meiga. Mas também aparenta uma pessoa frágil, passiva, dependente.',
            destination: 'Cultivar harmonia nos relacionamentos sociais e afetivos, pouca iniciativa, muito dependente, não faz nada sem consultar alguém em quem confie.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        3: {
            ideality: 'Criatividade, boa comunicação, alegre, vai sempre buscar expansão em sua vida. Tem também grande tendência a uma distorção de valores.',
            expression: 'Sabe entreter e estimular todos, alegre, extrovertido. Passa uma imagem de expansão, crescimento e alto astral.',
            destination: 'Ganhar reconhecimento, tanto profissional quanto social, capacidade enorme de se expandir, tanto no aspecto material como no emocional. Supera os problemas de saúde melhor que qualquer outro.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        4: {
            ideality: 'Seriedade, estabilidade, observação, teimosia, tem dificuldades em atingir seus horizontes, vivendo assim, bastante limitada. Uma pessoa organizada, cooperativa e que se dedica muito ao trabalho.',
            expression: 'Paciente e dedicada ao trabalho, vista como uma pessoa séria, por outro lado, parece alienada aos problemas dos outros e desinteressada.',
            destination: 'Ter estabilidade, principalmente na área econômica, as vezes tudo para essa pessoa é muito difícil. Se empenha muito, consegue pouco. Meticulosa, crítica, se preocupa demais com pequenos detalhes e acaba não aproveitando as coisas boas da vida.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: 'A fase é de muito trabalho para solidificar os alicerces onde se baseará o futuro. Poupe dinheiro e organize detalhadamente as ideias.',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        5: {
            ideality: 'Liberdade, curiosidade, risonha, carismática, superficial (só esquenta a cabeça em casos extremos), ciumenta. Comportamento repletos de altos e baixos.',
            expression: 'Comunicativa e superficial, passa uma visão carismática. Pode ser uma “mosca morta”, ter uma aparência péssima, mesmo assim será considerada extremamente sedutora.',
            destination: 'Viver aventuras e novas experiências, não para em emprego, despreocupado, bagunceiro, quer curtir a vida, busca constantemente o prazer, tem grandes tendências a vícios, como drogas e bebidas.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        6: {
            ideality: 'Simpatia, sensibilidade artística, hiper afetiva e extremamente emotiva. Tem ligação com artes, música, cultura. As vezes contestador e teimoso. Busca harmonia familiar.',
            expression: 'Romântica incurável, vista com ternura, as pessoas vão buscar no número 6 alguém em quem podem confiar e com quem possam desabafar. É o “ombro amigo”.',
            destination: 'Dedicar-se à família, só consegue se estruturar se tiver harmonia, por essa razão, busca o equilíbrio o tempo todo. Capacidade de concretização excelente.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        7: {
            ideality: 'Introversão, independência, analítico e observador. Busca o conhecimento o tempo todo. É porém dissimulado e depressivo. Muita inteligência.',
            expression: 'Criativo, seguro, uma pessoa vista de forma séria e introspectiva.',
            destination: 'Desenvolver a espiritualidade e buscar conhecimento em tudo. Tem tendência a gostar de tudo o que está ligado ao esoterismo e a espiritualidade.',
            lessonOfLife: 'Seja íntegro e autêntico.',
            challenge: '',
            pinnacle: '',
            personalYear: 'Este ano é todo do seu eu interior. O momento é de reflexão e auto análise para desenvolver suas qualidades espirituais e da sua personalidade. Faça algum curso esotérico e busque suas próprias respostas para a vida.',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        8: {
            ideality: 'Materialismo, orgulho, sensatez, consciência, desenvolve-se intelectualmente com muita facilidade. Consegue se estruturar muito bem. Chega entretanto, a ser prático demais e pouco afetuoso. Bem organizado.',
            expression: 'Franco, ambicioso, esnobe, passa uma imagem de que é superior aos outros. Muito ligado às coisas materiais.',
            destination: 'Ter sucesso profissional e social, pode ter todas as dificuldades do mundo, mas vai fazer de tudo para ter seu próprio negócio. Empreendedor, voltado para o lado material da vida. Prático demais.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: 'Chegou a hora de trabalhar para as realizações materiais. Tudo que se refere ao dinheiro está favorecido este ano. É necessário que você tome as rédeas da vida e não espere que as conquistas caiam do céu.',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        9: {
            ideality: 'Compaixão, otimismo, imediatismo, é considerado o “irmão de todo mundo” por ser extremamente solidário e humano. Apresenta porém, tendências à agressividade. É um ser mutável, mal consegue uma coisa e já está pensando em outra. Uma pessoa humanitária.',
            expression: 'Generosa, devotada, companheirismo, disposto a ajudar todo mundo, passa esta imagem, porém, pode ser a pessoa mais egoísta do mundo.',
            destination: 'Transformar o mundo num lugar melhor e mais gostoso de se viver, consegue tudo o que quer, mesmo que seja com muito sacrifício. É muito preocupado com a humanidade, quer resolver os problemas de todo mundo.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: 'Se você aprendeu a não ser egoísta, este período será muito favorável. Do contrário ele promete tristezas. Podendo ser um divórcio, por exemplo.',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        11: {
            ideality: 'Forte inspiração artística.',
            expression: 'Desatento e idealista.',
            destination: 'Cultivar harmonia nos relacionamentos sociais e afetivos, pouca iniciativa, muito dependente, não faz nada sem consultar alguém em quem confie.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        22: {
            ideality: 'Espiritualidade.',
            expression: 'Talentoso, com grande poder de ação.',
            destination: 'Ter estabilidade, principalmente na área econômica, as vezes tudo para essa pessoa é muito difícil. Se empenha muito, consegue pouco. Meticulosa, crítica, se preocupa demais com pequenos detalhes e acaba não aproveitando as coisas boas da vida.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
        },
        33: {
            ideality: 'Simpatia, sensibilidade artística, hiper afetiva e extremamente emotiva. Tem ligação com artes, música, cultura. As vezes contestador e teimoso. Busca harmonia familiar.',
            expression: 'Romântica incurável, vista com ternura, as pessoas vão buscar no número 6 alguém em quem podem confiar e com quem possam desabafar. É o “ombro amigo”.',
            destination: 'Dedicar-se à família, só consegue se estruturar se tiver harmonia, por essa razão, busca o equilíbrio o tempo todo. Capacidade de concretização excelente.',
            lessonOfLife: '',
            challenge: '',
            pinnacle: '',
            personalYear: '',
            personalMonth: '',
            personalDay: '',
            powerfulNumber: '',
            absence: ''
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

console.log((new kabala('Miller Augusto Silva Martins', '24/12/1987')).getCalculate());
