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
function change0(){
	prosm.classList.add("prosmotr2");
	prosm.classList.remove("prosmotr");
	prosm2.classList.add("dark2");
	prosm2.classList.remove("dark");
}
function change4(){
	document.location.href = "Solar System Quiz.html";
}
let blk = prosm2.addEventListener('click', change0);
let s = document.getElementById("pl1");
let s2 = document.getElementById("pl2");
let s3 = document.getElementById("pl3");
let s4 = document.getElementById("pl4");
let s5 = document.getElementById("pl5");
let s6 = document.getElementById("pl6");
let s7 = document.getElementById("pl7");
let s8 = document.getElementById("pl8");
let s9 = document.getElementById("pl9");
let s10 = document.getElementById("pl10");
let s11 = document.getElementById("pl11");
let s12 = document.getElementById("pl12");
let s13 = document.getElementById("pl13");
let s14 = document.getElementById("pl14");
let s15 = document.getElementById("pl15");
let s16 = document.getElementById("pl16");
let s17 = document.getElementById("pl17");
let s18 = document.getElementById("pl18");
let s19 = document.getElementById("pl19");
let s20 = document.getElementById("pl20");
let bolb = function(x){
return function poya(){
	prosm.classList.add("prosmotr");
	prosm.classList.remove("prosmotr2");
	prosm2.classList.add("dark");
	prosm2.classList.remove("dark2");
	if (x == "1") {
		tek.src = "sun.png";
		zagtxt.innerHTML = "Солнце";
	}
	else if (x == "2") {
		tek.src = "mercury2.png";
		zagtxt.innerHTML = "Меркурий";
	}
	else if (x == "3") {
		tek.src = "venus2.png";
		zagtxt.innerHTML = "Венера";
	}
	else if (x == "4") {
		tek.src = "earth2.png";
		zagtxt.innerHTML = "Земля";
	}
	else if (x == "5") {
		tek.src = "moon2.png";
		zagtxt.innerHTML = "Луна";
	}
	else if (x == "6") {
		tek.src = "mars2.png";
		zagtxt.innerHTML = "Марс";
	}
	else if (x == "7") {
		tek.src = "jupiter2.png";
		zagtxt.innerHTML = "Юпитер";
	}
	else if (x == "8") {
		tek.src = "saturn.png";
		zagtxt.innerHTML = "Сатурн";
	}
	else if (x == "9") {
		tek.src = "uranus2.png";
		zagtxt.innerHTML = "Уран";
	}
	else if (x == "10") {
		tek.src = "neptune2.png";
		zagtxt.innerHTML = "Нептун";
	}
	else if (x == "11") {
		tek.src = "pluto.png";
		zagtxt.innerHTML = "Плутон";
	}
	else if (x == "12") {
		tek.src = "ganymed.png";
		zagtxt.innerHTML = "Ганимед";
	}
	else if (x == "13") {
		tek.src = "callisto.png";
		zagtxt.innerHTML = "Каллисто";
	}
	else if (x == "14") {
		tek.src = "titan.png";
		zagtxt.innerHTML = "Титан";
	}
	else if (x == "15") {
		tek.src = "ceres.png";
		zagtxt.innerHTML = "Церера";
	}
	else if (x == "16") {
		tek.src = "vesta.png";
		zagtxt.innerHTML = "Веста";
	}
	else if (x == "17") {
		tek.src = "gector.png";
		zagtxt.innerHTML = "Гектор";
	}
	else if (x == "18") {
		tek.src = "miranda.png";
		zagtxt.innerHTML = "Миранда";
	}
	else if (x == "19") {
		tek.src = "daktil.png";
		zagtxt.innerHTML = "Дактиль";
	}
	else if (x == "20") {
		tek.src = "europe.png";
		zagtxt.innerHTML = "Европа";
	}
};
};
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
	ob1.style.left = ob22.left + 50 + "px";
};
let timer2 = setInterval(gh, 1);
s.addEventListener('click', bolb(1));
s2.addEventListener('click', bolb(2));
s3.addEventListener('click', bolb(3));
s4.addEventListener('click', bolb(4));
s5.addEventListener('click', bolb(5));
s6.addEventListener('click', bolb(6));
s7.addEventListener('click', bolb(7));
s8.addEventListener('click', bolb(8));
s9.addEventListener('click', bolb(9));
s10.addEventListener('click', bolb(10));
s11.addEventListener('click', bolb(11));
s12.addEventListener('click', bolb(12));
s13.addEventListener('click', bolb(13));
s14.addEventListener('click', bolb(14));
s15.addEventListener('click', bolb(15));
s16.addEventListener('click', bolb(16));
s17.addEventListener('click', bolb(17));
s18.addEventListener('click', bolb(18));
s19.addEventListener('click', bolb(19));
s20.addEventListener('click', bolb(20));