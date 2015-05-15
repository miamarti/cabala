angular.module('cabalaApp').factory('KabalaBO', ['TableAlphabeticalBean', 'NumerologyBean', 'MessageBean', 'MessageAgeBean', 'BirthdayBean', 'CurrentDateBean', 'LimitBO', function (TableAlphabeticalBean, NumerologyBean, MessageBean, MessageAgeBean, BirthdayBean, CurrentDateBean, LimitBO) {
    'use strict';
    var kabala = function (name, birthday) {
        this.birthday = new BirthdayBean(birthday);
        this.name = name.toUpperCase();
        this.nameMap = '';
        this.ideality = new MessageBean(); //Idealidade
        this.expression = new MessageBean(); //Expressao
        this.destination = new MessageBean(); //Destino
        this.lessonOfLife = new MessageBean(); //Lição de Vida
        this.challenge = new MessageBean(); //Desafio
        this.personalMonth = new MessageBean(); //Mês Pessoal
        this.powerfulNumber = new MessageBean(); //Número Poderoso
        this.personalYear = []; //Ano Pessoal
        this.personalDay = []; //Dia Pessoal
        this.absence = []; //Ausências
        this.pinnacle = {
            1: new MessageAgeBean(),
            2: new MessageAgeBean(),
            3: new MessageAgeBean(),
            4: new MessageAgeBean()
        }; //Pináculo
    };

    kabala.prototype = {
        currentDate: new CurrentDateBean(),
        tableAlphabetical: new TableAlphabeticalBean(),
        numerology: new NumerologyBean(),
        getLimit: LimitBO.getLimit,

        setCore: function () {
            for (var i = 0; i < this.name.length; i++) {
                if (this.name[i] !== ' ') {
                    if (this.name[i] === 'A' || this.name[i] === 'E' || this.name[i] === 'I' || this.name[i] === 'O' || this.name[i] === 'U') {
                        this.ideality.number += this.tableAlphabetical[this.name[i]].numerology;
                    } else {
                        this.expression.number += this.tableAlphabetical[this.name[i]].numerology;
                    }
                    this.destination.number += this.tableAlphabetical[this.name[i]].numerology;
                    this.nameMap += this.tableAlphabetical[this.name[i]].numerology;
                } else {
                    this.nameMap += ' ';
                }
            }
        },

        setExpression: function () {
            this.expression.number = this.getLimit(this.expression.number);
            this.expression.message = this.numerology[this.expression.number].expression;
        },

        setDestination: function () {
            this.destination.number = this.getLimit(this.destination.number);
            this.destination.message = this.numerology[this.destination.number].destination;
        },

        setIdeality: function () {
            this.ideality.number = this.getLimit(this.ideality.number);
            this.ideality.message = this.numerology[this.ideality.number].ideality;
        },

        setBirthday: function () {
            this.birthday.day.sum = this.getLimit(this.birthday.day.number);
            this.birthday.months.sum = this.getLimit(this.birthday.months.number);
            this.birthday.year.sum = this.getLimit(this.birthday.year.number);
        },

        setLessonOfLife: function () {
            this.lessonOfLife.number = this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.birthday.year.sum);
            this.lessonOfLife.message = this.numerology[this.lessonOfLife.number].lessonOfLife;
        },

        setPinnacle: function () {
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
        },

        setCurrentDate: function () {
            this.currentDate.day.sum = this.getLimit(this.currentDate.day.number);
            this.currentDate.months.sum = this.getLimit(this.currentDate.months.number);
            this.currentDate.year.sum = this.getLimit(this.currentDate.year.number);
        },

        setPersonalYear: function () {
            this.personalYear = [];
            this.personalYear.push({
                year: this.currentDate.year.number - 1,
                /*jslint evil: true */
                months: eval(this.birthday.months.number),
                number: this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number - 1)),
                message: this.numerology[this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number - 1))].personalYear
            });
            this.personalYear.push({
                year: this.currentDate.year.number,
                /*jslint evil: true */
                months: eval(this.birthday.months.number),
                number: this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.currentDate.year.sum),
                message: this.numerology[this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.currentDate.year.sum)].personalYear
            });
            this.personalYear.push({
                year: this.currentDate.year.number + 1,
                /*jslint evil: true */
                months: eval(this.birthday.months.number),
                number: this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number + 1)),
                message: this.numerology[this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.getLimit(this.currentDate.year.number + 1))].personalYear
            });
        },

        setPersonalMonth: function () {
            this.personalMonth.number = this.getLimit(this.getLimit(this.birthday.day.sum + this.birthday.months.sum + this.currentDate.year.sum) + this.currentDate.months.sum);
            this.personalMonth.message = this.numerology[this.personalMonth.number].personalMonth;
        },

        setPersonalDay: function () {
            this.personalDay = [];
            this.personalDay.push({
                day: this.currentDate.day.sum,
                number: this.getLimit(this.personalMonth.number + this.currentDate.day.sum),
                message: this.numerology[this.getLimit(this.personalMonth.number + this.currentDate.day.sum)].personalDay
            });
        },

        setPowerfulNumber: function () {
            this.powerfulNumber.number = this.getLimit(this.destination.number + this.lessonOfLife.number);
            this.powerfulNumber.message = this.numerology[this.powerfulNumber.number].powerfulNumber;
        },

        setChallenge: function () {
            try {
                var challengeStep1 = this.getLimit(((this.birthday.day.sum - this.birthday.months.sum) > 0 ? (this.birthday.day.sum - this.birthday.months.sum) : (this.birthday.day.sum - this.birthday.months.sum) * -1));
                var challengeStep2 = this.getLimit(((this.birthday.day.sum - this.birthday.year.sum) > 0 ? (this.birthday.day.sum - this.birthday.year.sum) : (this.birthday.day.sum - this.birthday.year.sum) * -1));
                this.challenge.number = ((challengeStep1 - challengeStep2 > 0) ? challengeStep1 - challengeStep2 : (challengeStep1 - challengeStep2) * -1);
                this.challenge.message = this.numerology[this.challenge.number].challenge;
            } catch (e) {}
        },

        setAbsence: function () {
            this.absence = [];
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
        },

        getCalculate: function () {
            this.setCore();
            this.setExpression();
            this.setDestination();
            this.setIdeality();
            this.setBirthday();
            this.setLessonOfLife();
            this.setPinnacle();
            this.setCurrentDate();
            this.setPersonalYear();
            this.setPersonalMonth();
            this.setPersonalDay();
            this.setPowerfulNumber();
            this.setChallenge();
            this.setAbsence();
            return this;
        }
    };

    return kabala;
}]);