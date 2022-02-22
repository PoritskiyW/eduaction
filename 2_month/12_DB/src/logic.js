const {
    getAverageAge,
    getDuplicatedLastNames,
    getListOfLastnamesWithSymbol,
    getListOfStreetAndPopulation,
    getLessThanThreeStreet,
    getNotAdultsOnStreet,
    getPersonsWithoutHome,
    getPopulation,
    getSetOfLastNames,
    getSixCharStreets
} = require("./requests");

const {
    table,
    openConnection,
    exitApplication,
    question,
    checkDatabase
} = require('./utils');

const tasks = [
    {task: 'Task 1: "Вывести общее число жителей"', button: '1'},
    {task: 'Task 2: "Вывести средний возраст жителей"', button: '2'},
    {task: 'Task 3: "Вывести отсортированный по алфавиту список фамилий без повторений"', button: '3'},
    {task: 'Task 4: "Вывести список фамилий, с указанием количества повторений этих фамилий в ' +
            'общем списке"', button: '4'},
    {task: 'Task 5: "Вывести фамилии, которые содержат в середине букву \"б\""', button: '5'},
    {task: 'Task 6: "Вывести список \"бомжей\""', button: '6'},
    {task: 'Task 7: "Вывести список несовершеннолетних, проживающих на проспекте Правды"', button: '7'},
    {task: 'Task 8: "Вывести упорядоченный по алфавиту список всех улиц с указанием, ' +
            'сколько жильцов живёт на улице"', button: '8'},
    {task: 'Task 9: "Вывести список улиц, название которых состоит из 6-ти букв"', button: '9'},
    {task: 'Task 10: "Вывести список улиц с количеством жильцов на них меньше 3"', button: '10'},
    {task: 'Exit application', button: '0'}
];

function renderUI() {
    console.clear();
    table(tasks);
    question('Insert option here: ', (answer) => {
        const db = openConnection('./db/mock.db');
        switch (answer){
            case '1':
                getRequest(db, getPopulation());
                break;
            case '2':
                getRequest(db, getAverageAge());
                break;
            case '3':
                getRequest(db, getSetOfLastNames());
                break;
            case '4':
                getRequest(db, getDuplicatedLastNames());
                break;
            case '5':
                getRequest(db, getListOfLastnamesWithSymbol());
                break;
            case '6':
                getRequest(db, getPersonsWithoutHome());
                break;
            case '7':
                getRequest(db, getNotAdultsOnStreet());
                break;
            case '8':
                getRequest(db, getListOfStreetAndPopulation());
                break;
            case '9':
                getRequest(db, getSixCharStreets());
                break;
            case '10':
                getRequest(db, getLessThanThreeStreet());
                break;
            case '0':
                exitApplication();
                break;
        }
    });
}

function getRequest(database, query) {
    database.serialize(() => {
        database.all(query, (err, rows) => {
            if (err) {
                return err;
            }
            table(rows);
        }).close((err) => {
            if (err) {
                throw err;
            }
            repeat();
        });
    });
}

function repeat() {
    question('Continue Y/N?: ', (answer) => {
        if (answer.toUpperCase() === 'Y') {
            renderUI();
        } else {
            exitApplication();
        }
    })
}


module.exports = {
    renderUI,
    repeat
}