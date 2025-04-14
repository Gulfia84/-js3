    let number1 = prompt('Введите первую цифру');
    let number2 = prompt('Введите вторую цифру');

    while (number1 != 0 && number2 != 0) {
        if (number1 > number2) {
            number1 = number1 % number2;
        } else {
            number2 = number2 % number1;
        };
    };
    alert(` Наибольший общий делитель двух указанных чисел равен ${number1 + number2}`);
                