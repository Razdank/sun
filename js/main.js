'use strict';    
let m = true;  
let mn = true;
function clos(){	// Закрытие и открытие меню            
	if (m == false){mm.classList.add('men2'); mm.classList.remove('men1'); mm.classList.remove('men3'); m=true;} else {mm.classList.add('men3'); m=false};
	if (mn == false){clb.classList.add('nen2'); clb.classList.remove('nen1'); clb.classList.remove('nen3'); clb.value="←"; mn=true;} else {clb.classList.add('nen3'); clb.value="→"; mn=false};
};
function change1(){
	document.location.href = "Solar System History.html";
}
function change2(){
	document.location.href = "Solar System Infinity.html";
}
function change3(){
	prosm.classList.add("prosmotr2");
	prosm.classList.remove("prosmotr");
	prosm2.classList.add("dark2");
	prosm2.classList.remove("dark");
}
function change4(){
	document.location.href = "Solar System Galery.html";
}
function change5(){
	document.location.href = "Solar System Quiz.html";
}
 let blk = prosm2.addEventListener('click', change3);
 let ob0 = document.getElementById("prosm2");
 let ob1 = document.getElementById("prosm");
 let ob2 = document.getElementById("man");
 let ob11 = ob1.getBoundingClientRect();
 let ob22 = ob2.getBoundingClientRect();
function gh(ob1, ob2, ob11, ob22){
	ob1 = document.getElementById("prosm");
	ob2 = document.getElementById("man");
	ob11 = ob1.getBoundingClientRect();
	ob22 = ob2.getBoundingClientRect();
	ob1.style.left = ob22.left + "px";
};
 let timer2 = setInterval(gh, 1);
 let s = document.getElementById("sun1");
 let s2 = document.getElementById("merc1");
 let s3 = document.getElementById("ven1");
 let s4 = document.getElementById("earth1");
 let s5 = document.getElementById("moon1");
 let s6 = document.getElementById("mars1");
 let s7 = document.getElementById("jup1");
 let s8 = document.getElementById("sat1");
 let s9 = document.getElementById("ur1");
 let s10 = document.getElementById("nep1");
 let s11 = document.getElementById("plu1");
function poya(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "sun.png";
	tektxt.innerHTML = "Дата открытия: Доисторическая эпоха<BR>Площадь поверхности: 6,07877·10<sup>18</sup> м<sup>2</sup><BR>Объём: 1,40927·10<sup>27</sup> м<sup>3</sup><BR>Масса: 1,9885·10<sup>30</sup> кг<BR>Температура поверхности: 5500 °С";
	tektxt.innerHTML += "<BR><BR>" + sun2.innerHTML;
	zagtxt.innerHTML = "Солнце";
};
function poya2(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "mercury2.png";
	tektxt.innerHTML = "Спутники: 0<BR>Дата открытия: Доисторическая эпоха<BR>Площадь поверхности: 7,48·10<sup>7</sup> км<sup>2</sup><BR>Объём: 6,083·10<sup>10</sup> км<sup>3</sup><BR>Масса: 3,33022·10<sup>23</sup> кг<BR>Температура поверхности: -183 °C — 430 °C";
	tektxt.innerHTML += "<BR><BR>" + merc2.innerHTML;
	zagtxt.innerHTML = "Меркурий";
};
function poya3(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "venus2.png";
	tektxt.innerHTML = "Спутники: 0 <BR>Дата открытия: Доисторическая эпоха <BR>Площадь поверхности: 4,60·10<sup>8</sup> км<sup>2</sup> <BR>Объём: 9,38·10<sup>11</sup> км<sup>3</sup> <BR>Масса:4,8675·10<sup>24</sup> кг <BR>Температура поверхности: 14° C";
	tektxt.innerHTML += "<BR><BR>" + ven2.innerHTML;
	zagtxt.innerHTML = "Венера";
};
function poya4(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "earth2.png";
	tektxt.innerHTML = "Спутники: 1 <BR>Дата открытия: Доисторическая эпоха <BR>Площадь поверхности: 5,10072·10<sup>8</sup> км<sup>2</sup> <BR>Объём:0,8321·10<sup>11</sup> км<sup>3</sup> <BR>Масса: 5,9726·10<sup>24</sup> кг <BR>Температура поверхности: 15 °C";
	tektxt.innerHTML += "<BR><BR>" + earth2.innerHTML;
	zagtxt.innerHTML = "Земля";
};
function poya5(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "moon2.png";
	tektxt.innerHTML = "Спутники: 0 <BR>Дата открытия: Доисторическая эпоха <BR>Площадь поверхности: 3,793·10<sup>7</sup>  км<sup>2</sup> <BR>Объём: 2,1958·10<sup>10</sup> км<sup>3</sup> <BR>Масса: 7,3477·10<sup>22</sup> кг <BR>Температура поверхности: -153 °C — 123 °C";
	tektxt.innerHTML += "<BR><BR>" + moon2.innerHTML;
	zagtxt.innerHTML = "Луна";
};
function poya6(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "mars2.png";
	tektxt.innerHTML = "Спутники: 2 <BR>Дата открытия: Доисторическая эпоха <BR>Площадь поверхности: 1,4437·10<sup>8</sup> км<sup>2</sup> <BR>Объём: 1,6318·10<sup>11</sup> км<sup>3</sup> <BR>Масса: 6,4171·10<sup>23</sup> кг <BR>Температура поверхности: -40 °С";
	tektxt.innerHTML += "<BR><BR>" + mars2.innerHTML;
	zagtxt.innerHTML = "Марс";
};
function poya7(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "jupiter2.png";
	tektxt.innerHTML = "Спутники: 69 <BR>Дата открытия: Доисторическая эпоха <BR>Площадь поверхности: 6,21796·10<sup>10</sup> км<sup>2</sup> <BR>Объём: 1,43128·10<sup>15</sup> км<sup>3</sup> <BR>Масса: 1,8986·10<sup>27</sup> кг  <BR>Температура поверхности: 21 °С";
	tektxt.innerHTML += "<BR><BR>" + jup2.innerHTML;
	zagtxt.innerHTML = "Юпитер";
};
function poya8(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "saturn.png";
	tektxt.innerHTML = "Спутники: 62 <BR>Дата открытия: Доисторическая эпоха <BR>Площадь поверхности: 4,272·10<sup>10</sup>  км<sup>2</sup> <BR>Объём: 8,2713·10<sup>14</sup> км<sup>3</sup> <BR>Масса: 5,6846·10<sup>26</sup> кг <BR>Температура поверхности: -190 °С";
	tektxt.innerHTML += "<BR><BR>" + sat2.innerHTML;
	zagtxt.innerHTML = "Сатурн";
};
function poya9(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "uranus2.png";
	tektxt.innerHTML = "Спутники: 27 <BR>Дата открытия: 13 марта 1781 <BR>Площадь поверхности: 8,1156·10<sup>9</sup> км<sup>2</sup> <BR>Объём: 6,833·10<sup>13</sup> км<sup>3</sup> <BR>Масса: 8,6832·10<sup>25</sup> кг <BR>Температура поверхности: −224 °C";
	tektxt.innerHTML += "<BR><BR>" + ur2.innerHTML;
	zagtxt.innerHTML = "Уран";
};
function poya10(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "neptune2.png";
	tektxt.innerHTML = "Спутники: 14 <BR> Дата открытия : 23 сентября 1846 <BR>Площадь поверхности: 7,6408·10<sup>9</sup> км<sup>2</sup> <BR>Объём: 6,254·10<sup>13</sup> км<sup>3</sup> <BR>Масса: 1,0243·10<sup>26</sup> кг <BR>Температура поверхности: −220 °C";
	tektxt.innerHTML += "<BR><BR>" + nep2.innerHTML;
	zagtxt.innerHTML = "Нептун";
};
function poya11(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	tek.src = "pluto.png";
	tektxt.innerHTML = "Спутники: 5 <BR> Дата открытия: 18 февраля 1930 <BR> Площадь поверхности: 17,7 млн км<sup>2</sup> <BR> Объём: 7,0·10<sup>9</sup> км<sup>3</sup> <BR>  Масса: (1,303 ± 0,003)·1022 кг <BR> Температура поверхности: -223,15 °С";
	tektxt.innerHTML += "<BR><BR>" + plu2.innerHTML;
	zagtxt.innerHTML = "Плутон";
};
s.addEventListener('click', poya);
s2.addEventListener('click', poya2);
s3.addEventListener('click', poya3);
s4.addEventListener('click', poya4);
s5.addEventListener('click', poya5);
s6.addEventListener('click', poya6);
s7.addEventListener('click', poya7);
s8.addEventListener('click', poya8);
s9.addEventListener('click', poya9);
s10.addEventListener('click', poya10);
s11.addEventListener('click', poya11);