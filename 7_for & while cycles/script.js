// ЦИКЛЫ - для многократного выполнения одного и того же отрезка кода (методы перебора)

// Цикл WHILE - проверяет условие перед каждой итерацией. while (true) организует бесконечный цикл:( , может быть прерван директивой break (не поняла как :(
/*
синтаксис:
while (Условие) {
    - тело цикла - код который мы хотим многократно выполнять (1 выполнение тела цикла - итерация, выполняется, если условие возвращает true)
    - тут будет выполняться код
}
*/
let num = 0;
while (num < 5) {
    console.log(num);
    num++; // увеличиваем значение переменной на 1, без этой строчки цикл бы выполнялся вечно - подвис
}
/*
let nnum = 5;
while (nnum) {
    console.log(nnum);
    nnum--;
}

let nuum = 5;
while (nuum) {
    console.log(nuum);
    nuum--;
}

// пример без {} - если тело цикла состоит из 1 строки
let numm = 5;
while (numm) console.log(numm--);

// конструкция DO ... WHILE - проверяет условие после каждой итерации
// необходимо если нужно хотя бы 1 выполнение цикла, независимо от того, вернет тело true или нет

let Num = 0;
do {
    console.log(Num);
    Num++;
} while (Num < 5);

// все подвисло ??? или нет теперь???
*/

// Цикл FOR - проверяет условие перед каждой итерацией, есть возможность задать доп настройки
// более сложная но более популярная реализация цикла
/*
Синтаксис:
for (Начало; Условие; Шаг) { - части цикла
    - тело цикла
    - выполняется код
}
*/

for (let num = 0; num < 5; num++) {
    console.log(num);
}

/* работа цикла FOR:
1. выполняется начало - let num = 0 - переменная объявляется внутри цикла - ВСТРОЕННОЕ ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ
2. выполняется условие - num < 5
3. если условие true - выполняется тело цикла console.log(num). если вынесем после цикла - вне цикла выполнить не сможем, будет ошибка
4. выполняется шаг - num++
повтор с пункта 2
*/

// СУЩЕСТВУЮЩАЯ ПЕРЕМЕННАЯ - можем объявить переменную раньше, а внутри цикла присвоить ей значение. так можно работать с переменной внутри и за пределами цикла:
let nnum;
for (nnum = 0; nnum < 5; nnum++) {
    console.log(nnum);
}
console.log(`Вывод вне цикла: ${nnum}`);

// можем убрать/пропустить любую часть внутри () цикла FOR . если уберем условие - цикл будет бесконечным (подвиснет пока не сдохнет браузер)
let nuum = 0;
for (; nuum < 5; ) {
    console.log(nuum);
    nuum++
}

// директива BREAK - прекращает работу цикла досрочно. в теле цикла пишется условие при котором работа прекращается (нельзя использовать с оператором !, ошибка)

let numm = 0;
for (; numm < 5; numm++) {
    console.log(numm);
    if (numm == 2) break;
}
console.log(`Работа окончена, numm = ${numm}`); // выводится когда цикл прекращает работу

// директива CONTINUE - досрочно прекращаем выполнение части тела цикла и переходим на след итерацию (нельзя использовать с оператором !, ошибка)

let Num = 0;
for (; Num < 5; Num++) {
    if (Num == 2) continue; // в консоли будет 0 1 3 4
    console.log(Num);
}

// метки  - единственный способ для break/continue выйти за пределы текущего цикла, повлиять на выполнение внешнего. метки не позволяют прыгнуть в произвольное место кода
// FOR - способ прерывать или переключаться на след итерацию родительского цикла из дочернего (при сложном варианте когда один цикл записан внутри другого)
//родительский цикл for, ему присвоена метка firstFor (может быть записано в одну строку с циклом или с новой строки)
firstFor: for (let nUm = 0; nUm <2; nUm++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor; // внутри дочернего цикла при определенном условии пишется break с меткой - остановится не дочерний цикл, а родитель у которого есть эта метка
        }
        console.log(size);
    }
}

// метка CONTINUE - работаю так же как и for 
firstFor: 
for (let nuM = 0; nuM <2; nuM++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            continue firstFor; // внутри дочернего цикла при определенном условии пишется continue с меткой - остановится не дочерний цикл, а родитель у которого есть эта метка
        }
        console.log(size);
    }
}