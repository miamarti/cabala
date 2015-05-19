angular.module('cabalaApp').factory('DictionaryBean', [function () {
    'use strict';
    var $core = function () {

        this.pt = {
            slogan: 'Uma pequena pitada do destino',
            calculate: 'Calcular',
            fullName: 'Nome Completo',
            birthdayDay: 'Dia do aniversário',
            birthdayMonth: 'Mês do aniversário',
            birthdayYear: 'Ano do aniversário',
            ideality: 'Idealidade',
            expression: 'Expressão',
            destination: 'Destino',
            lessonOfLife: 'Lição de Vida',
            challenge: 'Desafio',
            pinnacle: 'Pináculo',
            personnelDay: 'Dia Pessoal',
            personnelMonth: 'Mês Pessoal',
            personnelYear: 'Ano Pessoal',
            powerfulNumber: 'Número Poderoso',
            numberOfAbsence: 'Ausência do Número',
            color: 'Cor',
            stone: 'Pedra',
            planet: 'Planeta',
            aroma: 'Aroma',
            theBreakingOfTheMonth: 'A partir do mês',
            day: 'Dia',
            upTo: 'Até os',
            yearsOld: 'anos de idade',
            kabbalah: 'Cabala',
            family: 'Família',
            head: 'Cabeça',
            heart: 'Coração',
            mission: 'Missão',
            sex: 'Sexualidade',
            commandOfLife: 'Comando da vida',
            hereditaryKarma: 'Karma Hereditário',
            hebrew: 'Hebraica'
        };

        this.en = {
            slogan: 'A small pinch of destiny',
            calculate: 'Calculate',
            fullName: 'Full Name',
            birthdayDay: 'Birthday Day',
            birthdayMonth: 'Birthday month',
            birthdayYear: 'Birthday Year',
            ideality: 'Ideality',
            expression: 'Expression',
            destination: 'Destination',
            lessonOfLife: 'Lesson of Life',
            challenge: 'Challenge',
            pinnacle: 'Pinnacle',
            personnelDay: 'Personnel day',
            personnelMonth: 'Personnel month',
            personnelYear: 'Personnel year',
            powerfulNumber: 'Powerful number',
            numberOfAbsence: 'Number of absence',
            color: 'Color',
            stone: 'Stone',
            planet: 'Planet',
            aroma: 'Aroma',
            theBreakingOfTheMonth: 'The Breaking of the month',
            day: 'Day',
            upTo: 'Up to',
            yearsOld: 'years old',
            kabbalah: 'Kabbalah',
            family: 'Family',
            head: 'Head',
            heart: 'Heart',
            mission: 'Mission',
            sex: 'Sex',
            commandOfLife: 'Command Of Life',
            hereditaryKarma: 'Hereditary Karma',
            hebrew: 'Hebrew'
        };

        this.get = function () {
            var lang = ((document.documentElement.lang !== undefined) ? document.documentElement.lang : 'en');
            return (this[lang] !== undefined ? this[lang] : this.en);
        };
    };
    return $core;
}]);