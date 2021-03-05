'use strict'; 
let m = true;  
let mn = true;
function clos(){	// Закрытие и открытие меню                 
	if (m == false){mm.classList.add('men2'); mm.classList.remove('men1'); mm.classList.remove('men3'); m=true;} else {mm.classList.add('men3'); m=false};
	if (mn == false){clb.classList.add('nen2'); clb.classList.remove('nen1'); clb.classList.remove('nen3'); clb.value="←"; mn=true;} else {clb.classList.add('nen3'); clb.value="→"; mn=false};
};
function change3(){
	document.location.href = "Solar System Main.html";
}
function change1(){
	document.location.href = "Solar System History.html";
}
function change2(){
	document.location.href = "Solar System Infinity.html";
}
function change4(){
	document.location.href = "Solar System Galery.html";
}
function change0(){
	prosm.classList.add("prosmotr2");
	prosm.classList.remove("prosmotr");
	prosm2.classList.add("dark2");
	prosm2.classList.remove("dark");
	tekvopr = 0;
	tekvopr2 = 0;
	voprok = 0;
	voprno = 0;
	let timer2 = setInterval(gh, 1);
}
function change02(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
}
// Вопросы
let vopros = ["Сколько планет в Солнечной Системе?",
"Какая по счёту от Солнца планета Земля?",
"Сколько спутников у Земли?",
"Миранда является спутником какой планеты?",
"Ганимед является спутником какой планеты?",
"Какое короткое астрономическое обозначение имеет Солнце?",
"Какая планета считается самой холодной в Солнечной системе?",
"Чьим спутником является Веста?",
"С какого года Плутон стали считать кариликовой планетой?",
"В каком году открыли Плутон?",
"В каком году открыли Нептун?",
"В каком году был первый в мире орбитальный полет космического корабля \"Восток\", пилотируемого Ю. А. Гагариным?",
"К какому типу звёзд относится Солнце?",
"Какое короткое астрономическое обозначение имеет Уран?",
"Какая планета самая большая в Солнечной системе?",
"Какая планета вторая по величине в Солнечной системе?",
"Какая планета самая маленькая в Солнечной системе?",
"Какая планета в Солнечной системе имеет самый длинный период вращения вокруг своей оси?",
"Какая планета в Солнечной системе самая горячая?",
"К какому типу астрономических объектов относится Дактиль?",
"Чему равна средняя температура поверхности Земли?",
"Чему равна средняя температура поверхности Солнца?",
"Чему равна средняя температура поверхности Урана?",
"Сколько спутников у Плутона?",
"Сколько спутников у Нептуна?",
"Сколько спутников у Урана?",
"Сколько спутников у Сатурна?",
"Сколько спутников у Юпитера?",
"Сколько спутников у Марса?",
"Сколько спутников у Венеры?",
"Сколько спутников у Меркурия?",
"Когда открыли Сатурн?",
"Сколько звёзд в Солнечной Системе?",
"Сколько примерно процентов поверхности Земли занимает Мировой океан?",
"Гравитационное влияние Луны вызывает на Земле некоторые интересные эффекты. Какой наиболее известный из них?",
"Сколько видов живых существ открыто на Земле?",
"Какого газа больше всего в атмосфере Венеры?",
"Какие планеты иногда помещают в отдельную категорию «ледяных гигантов»?",
"Какое короткое астрономическое обозначение имеет Меркурий?",
"Какое короткое астрономическое обозначение имеет Венера?",
"Какое короткое астрономическое обозначение имеет Луна?",
"Какое короткое астрономическое обозначение имеет Земля?",
"Какое короткое астрономическое обозначение имеет Марс?",
"Какое короткое астрономическое обозначение имеет Юпитер?",
"Какое короткое астрономическое обозначение имеет Сатурн?",
"Какое короткое астрономическое обозначение имеет Нептун?",
"Какое короткое астрономическое обозначение имеет Плутон?",
"Кем была открыта Венера?",
"В каком году был запуск первого в мире искусственного спутника Земли?",
"В каком году был первый международный космический полет?",
"В каком году была первая экспедиция на Луну?",
"В каком году было открыто вращения Галактики?",
"В каком году был запуск второго советского спутника с собакой Лайкой на борту?",
"В каком году был первый выход человека из корабля в космическое пространство?",
"В каком году была запущена первая лунная станция?"];
let voprostext1 = ["6 #0", "2 #0", "1 #1", "Венера #0", "Меркурий #0", "♀ #0", "Уран #1", "Юпитера #0", "1987 #0", "1930 #1", "1902 #0", "1958 #0", "Красный карлик #0", "♃ #0", "Солнце #0", "Земля #0", "Меркурий #1", "Церера #0", "Солнце #0", "Планета #0", "9 °C #0", "5500 °C #1", "-223 °C #0", "5 #1", "10 #0", "18 #0", "142 #0", "67 #0", "1 #0", "2 #0", "0 #1", "В 116 году #0", "0 #0", "55% #0", "Морские приливы и отливы #1", "8700000 #1", "Водород #0", "Плутон и Миранда #0", "☿ #1", "♂ #0", "♅ #0", "⊕ #1", "☿ #0", "♄ #0", "♆ #0", "♅ #0", "P #0", "Галилео Галилеем #1", "1899 #0", "1975 #1", "1959 #0", "1921 #0", "1955 #0", "1962 #0", "1959 #1"];
let voprostext2 = ["7 #0", "3 #1", "2 #0", "Марс #0", "Юпитер #1", "⊕ #0", "Церера #0", "Сатурна #0", "1999 #0", "1939 #0", "1846 #1", "1959 #0", "Жёлтый карлик #1", "☿ #0", "Сатурн #0", "Сатурн #1", "Венера #0", "Юпитер #0", "Меркурий #0", "Астероид #1", "11 °C #0", "5000 °C #0", "-224 °C #1", "6 #0", "14 #0", "21 #0", "43 #0", "68 #0", "2 #1", "0 #1", "2 #0", "В 1512 году #0", "1 #1", "60% #0", "Северное сияние #0", "9200000 #0", "Азот #0", "Уран и Плутон #0", "⊕ #0", "♇ #0", "☽ #1", "☉ #0", "♀ #0", "♃ #1", "☿ #0", "♇ #0", "♇ #1", "Исааком Ньютоном #0", "1961 #0", "1976 #0", "1969 #1", "1924 #1", "1956 #0", "1956 #0", "1948 #0"];
let voprostext3 = ["8 #1", "4 #0", "3 #0", "Юпитер #0", "Сатурн #0", "♂ #0", "Плутон #0", "Солнца #1", "2003 #0", "1948 #0", "1904 #0", "1960 #0", "Коричневый карлик #0", "♄ #0", "Юпитер #1", "Нептун #0", "Нептун #0", "Сатурн #0", "Венера #1", "Спутник #0", "13 °C #0", "6000 °C #0", "-225 °C #0", "7 #0", "20 #0", "27 #1", "98 #0", "69 #1", "3 #0", "1 #0", "4 #0", "В 1058 году #0", "2 #0", "65% #0", "Смена времён года #0", "6900000 #0", "Углекислый газ #1", "Нептун и Плутон #0", "☽ #0", "♆ #0", "♇ #0", "♂ #0", "♂ #1", "♅ #0", "♃ #0", "♆ #1", "p #0", "Альбертом Эйнштейном #0", "1949 #0", "1977 #0", "1979 #0", "1927 #0", "1957 #1", "196й #0", "1954 #0"];
let voprostext4 = ["9 #0", "5 #0", "4 #0", "Уран #1", "Нептун #0", "☉ #1", "Нептун #0", "Марса #0", "2006 #1", "1951 #0", "1899 #0", "1961 #1", "Красный гигант #0", "♅ #1", "Марс #0", "Юпитер #0", "Уран #0", "Венера #1", "Бетельгейзе #0", "Комета #0", "15 °C #1", "6500 °C #0", "-226 °C #0", "8 #0", "21 #0", "33 #0", "62 #1", "70 #0", "4 #0", "3 #0", "6 #0", "В доисторическую эпоху #1", "3 #0", "70% #1", "Глобальное потепление #0", "7600000 #0", "Аргон #0", "Уран и Нептун #1", "♅ #0", "♀ #1", "☉ #0", "♀ #0", "♅ #0", "♆ #0", "♄ #1", "⊕ #0", "R #0", "Берцелиусом #0", "1957 #0", "1978 #0", "1989 #0", "1930 #0", "1958 #0", "1965 #1", "1961 #0"];
let voprostextprav = [];
let voprostextno = [];
let tekvopr = 0;
let tekvopr2 = 0;
let voprok = 0;
let voprno = 0;
let voprmax = 55;
let blk = prosm2.addEventListener('click', change0);
let o0 = document.getElementById("o0");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
let o3 = document.getElementById("o3");
let o4 = document.getElementById("o4");
let o5 = document.getElementById("o5");
o1.addEventListener('click', z);
o2.addEventListener('click', z2);
o3.addEventListener('click', z3);
o4.addEventListener('click', z4);
let timer3 = setInterval(gh1, 1);
let ob0 = document.getElementById("prosm2");
let ob1 = document.getElementById("prosm");
let ob2 = document.getElementById("man");
let ob11 = ob1.getBoundingClientRect();
let ob22 = ob2.getBoundingClientRect();
function gh1(ob1, ob2, ob11, ob22){
	ob1 = document.getElementById("prosm");
	ob2 = document.getElementById("man");
	ob11 = ob1.getBoundingClientRect();
	ob22 = ob2.getBoundingClientRect();
	ob1.style.left = ob22.left + "px";
	ob1.style.top = ob22.top + "px";
};
tekvopr = Math.floor(Math.random() * (voprmax - 0)) + 0;
let timer2 = setInterval(gh, 1);
function gh(){ //Функция выбора вопроса
	o0.innerHTML = vopros[tekvopr];
	if (tekvopr2 >= 10) o5.innerHTML = "10/10";
	else o5.innerHTML = tekvopr2 + "/10";
	o1.innerHTML = voprostext1[tekvopr].substring(0, voprostext1[tekvopr].length-3);
	o2.innerHTML = voprostext2[tekvopr].substring(0, voprostext2[tekvopr].length-3);
	o3.innerHTML = voprostext3[tekvopr].substring(0, voprostext3[tekvopr].length-3);
	o4.innerHTML = voprostext4[tekvopr].substring(0, voprostext4[tekvopr].length-3);
	if (tekvopr2 == 10) {
		change02();
		tekvopr2++;
		vse.innerHTML = "";
		vse2.innerHTML = "";
		rez.innerHTML = "<b>Правильно: " + voprok + "</b>";
		for (let i = 0; i < voprostextprav.length; i++){
			vse.innerHTML += voprostextprav[i] + "<BR>";
		}
		rez2.innerHTML = "<b>Неправильно: " + voprno + "</b>";
		for (let i = 0; i < voprostextno.length; i++){
			vse2.innerHTML += voprostextno[i] + "<BR>";
		}
		voprostextprav.splice(0, voprostextprav.length); 
		voprostextno.splice(0, voprostextno.length); 
		clearInterval(timer2);
	};
};
function z(){
	if ((voprostext1[tekvopr].substring(voprostext1[tekvopr].length-2, voprostext1[tekvopr].length)) == "#1") {
		voprok++;
		voprostextprav.push(vopros[tekvopr]); 
		voprostextprav.push(voprostext1[tekvopr].substring(0, voprostext1[tekvopr].length-3));
	}
	else {
		voprno++;
		voprostextno.push(vopros[tekvopr]); 
		voprostextno.push(voprostext1[tekvopr].substring(0, voprostext1[tekvopr].length-3)); 
	};
	if (tekvopr2 < 9) tekvopr = Math.floor(Math.random() * (voprmax - 0)) + 0;
	tekvopr2++;
	o1.classList.remove("p2");
	o1.classList.add("pz");
	let timerz = setTimeout(function(){
		o1.classList.remove("pz");
		o1.classList.add("p2");
	}, 100);
};
function z2(){
	if ((voprostext2[tekvopr].substring(voprostext2[tekvopr].length-2, voprostext2[tekvopr].length)) == "#1") {
		voprok++;
		voprostextprav.push(vopros[tekvopr]); 
		voprostextprav.push(voprostext2[tekvopr].substring(0, voprostext2[tekvopr].length-3));
	}
	else {
		voprno++;
		voprostextno.push(vopros[tekvopr]); 
		voprostextno.push(voprostext2[tekvopr].substring(0, voprostext2[tekvopr].length-3));
	};
	if (tekvopr2 < 9) tekvopr = Math.floor(Math.random() * (voprmax - 0)) + 0;
	tekvopr2++;
	o2.classList.remove("p2");
	o2.classList.add("pz");
	let timerz = setTimeout(function(){
		o2.classList.remove("pz");
		o2.classList.add("p2");
	}, 100);
};
function z3(){
	if ((voprostext3[tekvopr].substring(voprostext3[tekvopr].length-2, voprostext3[tekvopr].length)) == "#1") {
		voprok++;
		voprostextprav.push(vopros[tekvopr]); 
		voprostextprav.push(voprostext3[tekvopr].substring(0, voprostext3[tekvopr].length-3));
	}
	else {
		voprno++;
		voprostextno.push(vopros[tekvopr]); 
		voprostextno.push(voprostext3[tekvopr].substring(0, voprostext3[tekvopr].length-3));
	};
	if (tekvopr2 < 9) tekvopr = Math.floor(Math.random() * (voprmax - 0)) + 0;
	tekvopr2++;
	o3.classList.remove("p2");
	o3.classList.add("pz");
	let timerz = setTimeout(function(){
		o3.classList.remove("pz");
		o3.classList.add("p2");
	}, 100);
};
function z4(){
	if ((voprostext4[tekvopr].substring(voprostext4[tekvopr].length-2, voprostext4[tekvopr].length)) == "#1") {
		voprok++;
		voprostextprav.push(vopros[tekvopr]); 
		voprostextprav.push(voprostext4[tekvopr].substring(0, voprostext4[tekvopr].length-3));
	}
	else {
		voprno++;
		voprostextno.push(vopros[tekvopr]); 
		voprostextno.push(voprostext4[tekvopr].substring(0, voprostext4[tekvopr].length-3));
	};
	if (tekvopr2 < 9) tekvopr = Math.floor(Math.random() * (voprmax - 0)) + 0;
	tekvopr2++;
	o4.classList.remove("p2");
	o4.classList.add("pz");
	let timerz = setTimeout(function(){
		o4.classList.remove("pz");
		o4.classList.add("p2");
	}, 100);
};