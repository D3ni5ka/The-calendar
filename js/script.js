let now = new Date(); // текущая дата
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let count = date.getMonth(); // текущий месяц
let year = date.getFullYear(); // текущий год
let days_month_now = 32 - new Date(year, count, 32).getDate(); // дни текущего месяца

console.log(now)
console.log(date)



let arrDay = ['«ПН»', '«ВТ»', '«СР»', '«ЧТ»', '«ПТ»', '«СБ»', '«ВС»']
let arrMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];


console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(days_month_now)


let ul = document.querySelector('ul')
function addCal(days) {
    for (let i = 1; i <= days; i++) {
        let li = document.createElement('li');
        li.innerHTML = i;
        ul.appendChild(li);
    }
}
addCal(days_month_now);


function dayNow() {
    let liAlls = document.querySelectorAll('li');
    for (let elem of liAlls) {
        if (elem.innerHTML == date.getDate() && date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear()) {
            elem.style.background = 'red';
        }
    }
}
dayNow();



for (let i = 0; i <= arrMonth.length; i++) {
    if (i == date.getMonth()) {
        monthOut.innerHTML = `${arrMonth[i]}  ${year}`;
    }
}



function next() {
    count++;
    for (let i = 0; i <= arrMonth.length; i++) {
        if (i == count) {
            monthOut.innerHTML = `${arrMonth[i]}  ${year}`;
        }
    }
    if (count >= 11) {
        count = 0;
        year++;
    }

    ul.innerHTML = '';
    days_month_now = 32 - new Date(year, count, 32).getDate();
    addCal(days_month_now);
    dayNow();
};



function back() {
    count--;
    for (let i = 0; i <= arrMonth.length; i++) {
        if (i == count) {
            monthOut.innerHTML = `${arrMonth[i]}  ${year}`;
        }
    }
    if (count == 0) {
        count = 11;
        year--;
    }

    ul.innerHTML = '';
    days_month_now = 32 - new Date(year, count, 32).getDate();
    addCal(days_month_now);
    dayNow();
};



