var tableAlphabetical = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 1,
    'K': 2,
    'L': 3,
    'M': 4,
    'N': 5,
    'O': 6,
    'P': 7,
    'Q': 8,
    'R': 9,
    'S': 1,
    'T': 2,
    'U': 3,
    'V': 4,
    'W': 5,
    'X': 6,
    'Y': 7,
    'Z': 8
};
var cabala = {
    name: '',
    idealidade: 0,
    destino: 0,
    expressao: 0,
    nameMap: "",
    setDestino: function () {
        for (var i = 0; i < cabala.name.length; i++) {
            if (cabala.name[i] != " ") {
                //console.log(cabala.name[i], tableAlphabetical[cabala.name[i]], cabala.name[i] == "A" || cabala.name[i] == "E" || cabala.name[i] == "I" || cabala.name[i] == "O" || cabala.name[i] == "U");
                if (cabala.name[i] == "A" || cabala.name[i] == "E" || cabala.name[i] == "I" || cabala.name[i] == "O" || cabala.name[i] == "U") {
                    cabala.idealidade += tableAlphabetical[cabala.name[i]];
                } else {
                    cabala.expressao += tableAlphabetical[cabala.name[i]];
                }
                cabala.destino += tableAlphabetical[cabala.name[i]];
                cabala.nameMap += tableAlphabetical[cabala.name[i]];
            } else {
                cabala.nameMap += " ";
            }
        }

        if (eval(cabala.destino) > 9) {
            var somaDetino = 0;
            for (var i = 0; i < cabala.destino.toString().length; i++) {
                somaDetino += eval(cabala.destino.toString()[i]);
            }
            cabala.destino = somaDetino;
        }

        var somaLimit = function (value, stringNumber) {
            var soma = 0;
            if (value > 9) {
                for (var i = 0; i < stringNumber.toString().length; i++) {
                    soma += eval(stringNumber.toString()[i]);
                }
                if (soma > 9) {

                } else {
                    return soma;
                }
            } else {
                return value;
            }
        };

        if (eval(cabala.idealidade) > 9) {
            var somaIdealidade = 0;
            for (var i = 0; i < cabala.idealidade.toString().length; i++) {
                somaIdealidade += eval(cabala.idealidade.toString()[i]);
            }
            cabala.idealidade = somaIdealidade;
        }
    },
    run: function () {
        console.log(':::: CABALA :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
        cabala.setDestino();
        console.log(cabala.name);
        console.log(cabala.nameMap);

        console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
        console.log('Idealidade:', cabala.idealidade);
        console.log('Destino:', cabala.destino);
        console.log('Expressão:', cabala.expressao);
    }
};
cabala.run();
