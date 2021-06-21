
var USD2UAH = 27; //курс
var usdValue;     //объявление переменной для результата

do{                                                   //цикл
	var uahValue = prompt("Введите сумму в грн.",""); //просим пользователя ввести сумму
	usdValue     = uahValue / USD2UAH;                //переводим по курсу
	alert("$ " + usdValue);                           //выводим сумму в долларах
}while(uahValue !== null)                             //пока пользователь не нажмет отмену