angular.module('cabalaApp').factory('TreeOfLifeBO', ['WheelSamsaraBean', 'MagicAndMeaningOfNumbersBean', 'KabbalahBean', 'LimitBO', function (WheelSamsaraBean, MagicAndMeaningOfNumbersBean, KabbalahBean, LimitBO) {
    'use strict';

    var sumMax = LimitBO.getLimit;
    var limit22 = LimitBO.getLimit22;
    var wheelSamsara = WheelSamsaraBean;
    var magicAndMeaningOfNumbers = MagicAndMeaningOfNumbersBean;
    var kabbalah = KabbalahBean;

    var treeOfLife = {
        name: '',
        firstName: '',
        surname: '',
        calculateNameResult: undefined,
        kabbalahHebrew: {
            hereditaryKarma: { //karmaHereditario
                sum: 0,
                message: ''
            },
            commandOfLife: { //comandoDaVida
                sum: 0,
                message: ''
            }
        },
        wheelSamsara: undefined,

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
                    treeOfLife.kabbalahHebrew.commandOfLife.sum += kabbalah[treeOfLife.firstName[i]];
                }
            }
            treeOfLife.kabbalahHebrew.commandOfLife.message = magicAndMeaningOfNumbers[sumMax(treeOfLife.kabbalahHebrew.commandOfLife.sum)];

            for (var i = 0; i < treeOfLife.surname.length; i++) {
                if (treeOfLife.name[i] !== ' ') {
                    treeOfLife.kabbalahHebrew.hereditaryKarma.sum += kabbalah[treeOfLife.surname[i]];
                }
            }
            treeOfLife.kabbalahHebrew.hereditaryKarma.message = magicAndMeaningOfNumbers[sumMax(treeOfLife.kabbalahHebrew.hereditaryKarma.sum)];
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

            for (var key in repeat) {
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
            return this;
        }
    };

    var core = function (name) {
        this.name = name;
        this.firstName;
        this.surname;
        this.calculateNameResult;
        this.kabbalahHebrew;
        this.wheelSamsara;
    };

    core.prototype = {
        getCalculate: function () {
            var result = treeOfLife.run(this.name);
            this.firstName = result.firstName;
            this.surname = result.surname;
            this.calculateNameResult = result.calculateNameResult;
            this.kabbalahHebrew = result.kabbalahHebrew;
            this.wheelSamsara = result.wheelSamsara;
            return this;
        }
    };

    return core;
}]);