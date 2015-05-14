angular.module('cabalaApp').factory('DictionaryBean', [function () {
    'use strict';
    var $core = function () {

        this.pt = {
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
            kabbalah: 'Cabala'
        };

        this.en = {
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
            kabbalah: 'Kabbalah'
        };

        this.get = function () {
            var lang = ((document.documentElement.lang !== undefined) ? document.documentElement.lang : 'en');
            return (this[lang] !== undefined ? this[lang] : this.en);
        };
    };
    return $core;
}]);