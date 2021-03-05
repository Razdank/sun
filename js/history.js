'use strict'; 
let block = document.getElementById("info");
block.scrollTop = block.scrollHeight;	
class planet{
	costructor(id){
		this.id = id;
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.r = 0;
		this.a = 0;
	}
}
class asteroids{
	costructor(id){
		this.id = id;
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.r = 0;
		this.a = 0;                    
	}
}
let mouseX = 1;
let mouseY = 1;
document.onmousemove = function(e){
	mouseX = e.pageX;
	mouseY = e.pageY;
};
let a = 0;
let b = 0;
let d = 0;
let n = false;
let z = 35;
let cat = false;
let year = 1802;
let re = true;
let baff = 4;
let mas = ["1846 - Открытие Нептуна", 
"1851 - Открытие первого пояса астероидов", 
"1930 - Открытие Плутона", 
"1992 - Открытие второго пояса астероидов", 
"1821 - Идея существования за Ураном новой планеты",
"1831 - Сооружение Московской университетской обсерватории",
"1834 - Доказательство безатмосферности Луны",
"1836 - Обнаружена пылевая составляющая в хвостах комет",
"1839 - Первые фотографии в астрономии",
"1842 - Открытие эффекта Доплера",
"1852 - Первое лабораторное измерение скорости света",
"1860 - Начало спектроскопических исследований звезд",
"1861 - Первое описание химического состава солнечной атмосферы",
"1871 - Открытие на Солнце гелия",
"1884 - Введение поясного времени в 26 странах",
"1902 - Уточнение скорости света 299890±60 км/с",
"1924 - Открытие вращения Галактики",
"1933 - Запущены первые советские ракеты ГИРД-09 и ГИРД-Х",
"1946 - Произведена радиолокация Луны",         
"1955 - Принято решение о строительстве космодрома Байконур",
"1957 - Запуск первого в мире искусственного спутника Земли (Спутник-1)",
"1957 - Запуск второго советского спутника с собакой Лайкой на борту",
"1959 - Запущена первая лунная станция \"Луна-1\"",
"1961 - Первый в мире орбитальный полет космического корабля \"Восток\", пилотируемого Ю. А. Гагариным, - первый полет человека в космос",
"1963 - Первый космический полет женщины (В.В. Терешкова; корабль \"Восток-6\")",
"1965 - Первый выход человека из корабля в космическое пространство (А.А. Леонов; корабль \"Восход-2\")",
"1966 - Первый межпланетный перелет",
"1969 - Первая экспедиция на Луну (астронавты Н. Армстронг, Э. Олдрин, М. Коллинз; корабль \"Аполлон - 11\")",
"1970 - Первая доставка на луну самоходной лаборатории \"Луноход - 1\"",
"1975 - Первый международный космический полет",
"1986 - Запуск базового блока пилотируемого научно-исследовательской орбитальной станцией \"Мир\"",
"2006 - Признание Плутона карликовой планетой"];
let plu = false;
let nep = false;
let ast1 = false;
let ast2 = false;
let g1821 = false;
let g1831 = false;
let g1834 = false;
let g1836 = false;
let g1839 = false;
let g1842 = false;
let g1852 = false;
let g1860 = false;
let g1861 = false;
let g1871 = false;
let g1884 = false;
let g1902 = false;
let g1924 = false;
let g1933 = false;
let g1946 = false; 
let g1955 = false;
let g1957 = false;
let g1957b = false;
let g1959 = false;
let g1961 = false;
let g1963 = false;
let g1965 = false;
let g1966 = false;
let g1969 = false;
let g1970 = false;
let g1975 = false;
let g1986 = false;
let g2006 = false;
let x = window.innerWidth/2;
let y = window.innerHeight/2;
let imgz = new Image();
imgz.src = "fon.jpg"; 
document.onmousemove = function(e){
	mouseX = e.pageX;
	mouseY = e.pageY;
};
let e = window.event;            
let ex = document.getElementById("exx"),
	ctx = ex.getContext('2d');
	ex.height=window.innerHeight;
	ex.width=window.innerWidth;
ctx.beginPath();                
ctx.fillStyle="#000000";
ctx.lineWidth=1;                        
ctx.drawImage(imgz, 0, 0, 1900, 1040);
let c = 0;            
let img1 = new Image();
img1.src = "sun.png";            
let sun = new planet("1");            
sun.x = x-50;
sun.y = y-50;
sun.vx = 0;
sun.vy = 0;
sun.r = 0;
sun.a = 0;
let img2 = new Image();
img2.src = "mercury.png";
let mercury = new planet("2");
mercury.x = x-4;
mercury.y = y-4;
mercury.vx = 0;
mercury.vy = 0;
mercury.r = 55;
mercury.a = 0;
let img3 = new Image();
img3.src = "venus.png";
let venus = new planet("3");
venus.x = x-8;
venus.y = y-8;
venus.vx = 0;
venus.vy = 0;
venus.r = 70;
venus.a = 0;
let img4 = new Image();
img4.src = "earth.png";
let earth = new planet("4");
earth.x = x-8;
earth.y = y-8;
earth.vx = 0;
earth.vy = 0;
earth.r = 100;
earth.a = 0;
let img0 = new Image();
img0.src = "moon.png";
let moon = new planet("0");
moon.x = x-3;
moon.y = y-3;
moon.vx = 0;
moon.vy = 0;
moon.r = 15;
moon.a = 0;
let img5 = new Image();
img5.src = "mars.png";
let mars = new planet("5");
mars.x = x-5;
mars.y = y-5;
mars.vx = 0;
mars.vy = 0;
mars.r = 130;
mars.a = 0;
let img6 = new Image();
img6.src = "jupiter.png";
let jupiter = new planet("6");
jupiter.x = x-20;
jupiter.y = y-20;
jupiter.vx = 0;
jupiter.vy = 0;
jupiter.r = 190;
jupiter.a = 0;             
let img7 = new Image();
img7.src = "saturn.png";
let saturn = new planet("7");
saturn.x = x-33;
saturn.y = y-33;
saturn.vx = 0;
saturn.vy = 0;
saturn.r = 253;
saturn.a = 0; 
let img8 = new Image();
img8.src = "uranus.png";
let uranus = new planet("8");
uranus.x = x-10;
uranus.y = y-10;
uranus.vx = 0;
uranus.vy = 0;
uranus.r = 305;
uranus.a = 0;  
let img9 = new Image();
img9.src = "neptune.png";
let neptune = new planet("9");
neptune.x = x-10;
neptune.y = y-10;
neptune.vx = 0;
neptune.vy = 0;
neptune.r = 330;
neptune.a = 0;
let img10 = new Image();
img10.src = "pluto.png";
let pluto = new planet("9");
pluto.x = x-3;
pluto.y = y-3;
pluto.vx = 0;
pluto.vy = 0;
pluto.r = 349;
pluto.a = 0;
let img01 = new Image();
img01.src = "asteroid.png";
let asteroid = new asteroids("1");
asteroid.x = x-8;
asteroid.y = y-8;
asteroid.vx = 0;
asteroid.vy = 0;
asteroid.r = 153;
asteroid.a = 0;
let img02 = new Image();
img02.src = "asteroid.png";
let asteroid2 = new asteroids("2");
asteroid2.x = x-8;
asteroid2.y = y-8;
asteroid2.vx = 0;
asteroid2.vy = 0;
asteroid2.r = 366;
asteroid2.a = 0;
let img00 = new Image();
img00.src = "cat.png";
function otri(){	//Отрисовка анимации   
	ctx.beginPath();                
	ex.height=window.innerHeight;
	ex.width=window.innerWidth;
	ctx.drawImage(imgz, 0, 0, ex.width, ex.height);                         
	if (cat == false) ctx.drawImage(img1, sun.x, sun.y, 100, 100);
		else ctx.drawImage(img00, sun.x, sun.y, 100, 100);
	x = window.innerWidth/2;
	y = window.innerHeight/2;
	sun.x = x-50;
	sun.y = y-50;
	mercury.x = x-4;
	mercury.y = y-4;
	venus.x = x-8;
	venus.y = y-8;
	earth.x = x-8;
	earth.y = y-8;
	moon.x = x-3;
	moon.y = y-3;
	mars.x = x-5;
	mars.y = y-5;
	jupiter.x = x-20;
	jupiter.y = y-20;
	saturn.x = x-33;
	saturn.y = y-33;
	uranus.x = x-10;
	uranus.y = y-10;
	neptune.x = x-10;
	neptune.y = y-10;
	pluto.x = x-3;
	pluto.y = y-3;
	asteroid.x = x-8;
	asteroid.y = y-8;
	asteroid2.x = x-8;
	asteroid2.y = y-8;  
	if (n == true){
		ctx.strokeStyle="#FFFFFF";
		ctx.lineWidth=1; 
		earth.vx = Math.cos(earth.a)*earth.r;
		earth.vy = Math.sin(earth.a)*earth.r;
		moon.x = earth.x+earth.vx+6;
		moon.y = earth.y+earth.vy+6;
		ctx.arc(mercury.x+4, mercury.y+4, mercury.r , 0, 2*Math.PI, true);                
		ctx.moveTo(venus.x+70+8, venus.y+8);
		ctx.arc(venus.x+8, venus.y+8, venus.r , 0, 2*Math.PI, true);
		ctx.moveTo(earth.x+100+8, earth.y+8);
		ctx.arc(earth.x+8, earth.y+8, earth.r , 0, 2*Math.PI, true);
		ctx.moveTo(moon.x+15, moon.y+8);
		ctx.arc(earth.x+earth.vx+8, earth.y+earth.vy+8, moon.r , 0, 2*Math.PI, true);
		ctx.moveTo(earth.x+100+8, earth.y+8);
		ctx.arc(earth.x+8, earth.y+8, earth.r , 0, 2*Math.PI, true);
		ctx.moveTo(mars.x+130+5, mars.y+5);
		ctx.arc(mars.x+5, mars.y+5, mars.r , 0, 2*Math.PI, true);
		ctx.moveTo(jupiter.x+190+20, jupiter.y+20);
		ctx.arc(jupiter.x+20, jupiter.y+20, jupiter.r , 0, 2*Math.PI, true);
		ctx.moveTo(saturn.x+253+33, saturn.y+33);
		ctx.arc(saturn.x+33, saturn.y+33, saturn.r , 0, 2*Math.PI, true);
		ctx.moveTo(uranus.x+305+10, uranus.y+10);
		ctx.arc(uranus.x+10, uranus.y+10, uranus.r , 0, 2*Math.PI, true);
		if (nep == true) ctx.moveTo(neptune.x+330+10, neptune.y+10);
		if (nep == true) ctx.arc(neptune.x+10, neptune.y+10, neptune.r , 0, 2*Math.PI, true);
		if (plu == true) ctx.moveTo(pluto.x+349+3, pluto.y+3);
		if (plu == true) ctx.arc(pluto.x+3, pluto.y+3, pluto.r , 0, 2*Math.PI, true);
		if (ast1 == true) ctx.moveTo(asteroid.x+153+8, asteroid.y+8);
		if (ast1 == true) ctx.arc(asteroid.x+8, asteroid.y+8, asteroid.r , 0, 2*Math.PI, true);
		if (ast2 == true) ctx.moveTo(asteroid2.x+366+8, asteroid2.y+8);
		if (ast2 == true) ctx.arc(asteroid2.x+8, asteroid2.y+8, asteroid2.r , 0, 2*Math.PI, true);
		ctx.stroke();
	}
	mercury.vx = Math.cos(mercury.a)*mercury.r;
	mercury.vy = Math.sin(mercury.a)*mercury.r;
	ctx.drawImage(img2, mercury.x+mercury.vx, mercury.y+mercury.vy, 8, 8);
	mercury.a += 0.04787*baff;
	venus.vx = Math.cos(venus.a)*venus.r;
	venus.vy = Math.sin(venus.a)*venus.r;
	ctx.drawImage(img3, venus.x+venus.vx, venus.y+venus.vy, 16, 16);
	venus.a += 0.03502*baff;
	earth.vx = Math.cos(earth.a)*earth.r;
	earth.vy = Math.sin(earth.a)*earth.r;
	ctx.drawImage(img4, earth.x+earth.vx, earth.y+earth.vy, 16, 16);
	earth.a += 0.02976*baff; 
	mars.vx = Math.cos(mars.a)*mars.r;
	mars.vy = Math.sin(mars.a)*mars.r;
	ctx.drawImage(img5, mars.x+mars.vx, mars.y+mars.vy, 10, 10);
	mars.a += 0.02413*baff;
	moon.x = earth.x+earth.vx+6;
	moon.y = earth.y+earth.vy+6;
	moon.vx = Math.cos(moon.a)*moon.r;
	moon.vy = Math.sin(moon.a)*moon.r;
	ctx.drawImage(img0, moon.x+moon.vx, moon.y+moon.vy, 6, 6);
	moon.a += 0.33*baff;
	jupiter.vx = Math.cos(jupiter.a)*jupiter.r;
	jupiter.vy = Math.sin(jupiter.a)*jupiter.r;
	ctx.drawImage(img6, jupiter.x+jupiter.vx, jupiter.y+jupiter.vy, 40, 40);
	jupiter.a += 0.01307*baff;
	saturn.vx = Math.cos(saturn.a)*saturn.r;
	saturn.vy = Math.sin(saturn.a)*saturn.r;
	ctx.drawImage(img7, saturn.x+saturn.vx, saturn.y+saturn.vy, 66, 66);
	saturn.a += 0.00967*baff;
	uranus.vx = Math.cos(uranus.a)*uranus.r;
	uranus.vy = Math.sin(uranus.a)*uranus.r;
	ctx.drawImage(img8, uranus.x+uranus.vx, uranus.y+uranus.vy, 20, 20);
	uranus.a += 0.00684*baff;
	neptune.vx = Math.cos(neptune.a)*neptune.r;
	neptune.vy = Math.sin(neptune.a)*neptune.r;
	if (nep == true) ctx.drawImage(img9, neptune.x+neptune.vx, neptune.y+neptune.vy, 20, 20);
	neptune.a += 0.00548*baff;
	pluto.vx = Math.cos(pluto.a)*pluto.r;
	pluto.vy = Math.sin(pluto.a)*pluto.r;
	if (plu == true) ctx.drawImage(img10, pluto.x+pluto.vx, pluto.y+pluto.vy, 6, 6);
	pluto.a += 0.00475*baff;
	b = 0;
	asteroid.vx = Math.cos(asteroid.a)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 4, 4);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 4, 4);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 14, 14);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 14, 14);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 6, 6);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 6, 6);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 12, 12);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 12, 12);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 8, 8);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 8, 8);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 10, 10);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 10, 10);                
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 4, 4);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 4, 4);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 14, 14);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 14, 14);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 6, 6);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 6, 6);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 12, 12);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 12, 12);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 8, 8);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 8, 8);
	b += 50;
	asteroid.vx = Math.cos(asteroid.a+b)*asteroid.r;
	asteroid.vy = Math.sin(asteroid.a+b)*asteroid.r;
	if (ast1 == true) ctx.drawImage(img01, asteroid.x+asteroid.vx, asteroid.y+asteroid.vy, 10, 10);
	if (ast1 == true) ctx.drawImage(img01, asteroid.x-asteroid.vx, asteroid.y-asteroid.vy, 10, 10);
	asteroid.a += 0.017*baff; 
	d = 0;
	asteroid2.vx = Math.cos(asteroid2.a)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 4, 4);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 4, 4);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 14, 14);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 14, 14);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 6, 6);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 6, 6);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 12, 12);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 12, 12);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 8, 8);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 8, 8);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 10, 10);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 10, 10);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 4, 4);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 4, 4);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 14, 14);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 14, 14);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 6, 6);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 6, 6);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 12, 12);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 12, 12);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 8, 8);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 8, 8);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 10, 10);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 10, 10);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 4, 4);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 4, 4);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 14, 14);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 14, 14);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 6, 6);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 6, 6);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 12, 12);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 12, 12);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 8, 8);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 8, 8);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 10, 10);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 10, 10);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 4, 4);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 4, 4);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 14, 14);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 14, 14);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 6, 6);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 6, 6);
	d += 3;
	asteroid2.vx = Math.cos(asteroid2.a+d)*asteroid2.r;
	asteroid2.vy = Math.sin(asteroid2.a+d)*asteroid2.r;
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x+asteroid2.vx, asteroid2.y+asteroid2.vy, 12, 12);
	if (ast2 == true) ctx.drawImage(img01, asteroid2.x-asteroid2.vx, asteroid2.y-asteroid2.vy, 12, 12);                
	asteroid2.a += 0.002*baff;                   
	if ((((Math.round(earth.y+earth.vy) > sun.y-15)&&(Math.round(earth.y+earth.vy) < sun.y+15)))&&(earth.x+earth.vx > sun.x)&&(re == true)){
		year++;
		years.innerHTML = year;
		re = false;
	}
	if (earth.x+earth.vx < sun.x) re = true;
	if ((year == 1846)&&(nep == false)) {
		info.innerHTML += "<BR>" + mas[0];
		nep = true;
		block.scrollTop += 1000;
	}
	if ((year == 1851)&&(ast1 == false)) {
		info.innerHTML += "<BR>" + mas[1];
		ast1 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1930)&&(plu == false)) {
		info.innerHTML += "<BR>" + mas[2];
		plu = true;
		block.scrollTop += 1000;
	}
	if ((year == 1992)&&(ast2 == false)) {
		info.innerHTML += "<BR>" + mas[3];
		ast2 = true;
		block.scrollTop += 1000;
	}        
	if ((year == 1821)&&(g1821 == false)) {
		info.innerHTML += mas[4];
		g1821 = true;
		block.scrollTop += 1000;
	}   
	if ((year == 1831)&&(g1831 == false)) {
		info.innerHTML += "<BR>" + mas[5];
		g1831 = true;
		block.scrollTop += 1000;
	} 
	if ((year == 1834)&&(g1834 == false)) {
		info.innerHTML += "<BR>" + mas[6];
		g1834 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1836)&&(g1836 == false)) {
		info.innerHTML += "<BR>" + mas[7];
		g1836 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1839)&&(g1839 == false)) {
		info.innerHTML += "<BR>" + mas[8];
		g1839 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1842)&&(g1842 == false)) {
		info.innerHTML += "<BR>" + mas[9];
		g1842 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1852)&&(g1852 == false)) {
		info.innerHTML += "<BR>" + mas[10];
		g1852 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1860)&&(g1860 == false)) {
		info.innerHTML += "<BR>" + mas[11];
		g1860 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1861)&&(g1861 == false)) {
		info.innerHTML += "<BR>" + mas[12];
		g1861 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1871)&&(g1871 == false)) {
		info.innerHTML += "<BR>" + mas[13];
		g1871 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1884)&&(g1884 == false)) {
		info.innerHTML += "<BR>" + mas[14];
		g1884 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1902)&&(g1902 == false)) {
		info.innerHTML += "<BR>" + mas[15];
		g1902 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1924)&&(g1924 == false)) {
		info.innerHTML += "<BR>" + mas[16];
		g1924 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1933)&&(g1933 == false)) {
		info.innerHTML += "<BR>" + mas[17];
		g1933 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1946)&&(g1946 == false)) {
		info.innerHTML += "<BR>" + mas[18];
		g1946 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1955)&&(g1955 == false)) {
		info.innerHTML += "<BR>" + mas[19];
		g1955 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1957)&&(g1957 == false)) {
		info.innerHTML += "<BR>" + mas[20];
		g1957 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1957)&&(g1957b == false)) {
		info.innerHTML += "<BR>" + mas[21];
		g1957b = true;
		block.scrollTop += 1000;
	}
	if ((year == 1959)&&(g1959 == false)) {
		info.innerHTML += "<BR>" + mas[22];
		g1959 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1961)&&(g1961 == false)) {
		info.innerHTML += "<BR>" + mas[23];
		g1961 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1963)&&(g1963 == false)) {
		info.innerHTML += "<BR>" + mas[24];
		g1963 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1965)&&(g1965 == false)) {
		info.innerHTML += "<BR>" + mas[25];
		g1965 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1966)&&(g1966 == false)) {
		info.innerHTML += "<BR>" + mas[26];
		g1966 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1969)&&(g1969 == false)) {
		info.innerHTML += "<BR>" + mas[27];
		g1969 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1970)&&(g1970 == false)) {
		info.innerHTML += "<BR>" + mas[28];
		g1970 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1975)&&(g1975 == false)) {
		info.innerHTML += "<BR>" + mas[29];
		g1975 = true;
		block.scrollTop += 1000;
	}
	if ((year == 1986)&&(g1986 == false)) {
		info.innerHTML += "<BR>" + mas[30];
		g1986 = true;
		block.scrollTop += 1000;
	}
	if ((year == 2006)&&(g2006 == false)) {
		info.innerHTML += "<BR>" + mas[31];
		g2006 = true;
		block.scrollTop += 1000;
	}
};     
let timer = [];
let i = 0;
timer[i] = setInterval(otri, z);
let m = true;  
let mn = true;
function clos(){	// Закрытие и открытие меню                 
	if (m == false){mm.classList.add('men2'); mm.classList.remove('men1'); mm.classList.remove('men3'); m=true;} else {mm.classList.add('men3'); m=false};
	if (mn == false){clb.classList.add('nen2'); clb.classList.remove('nen1'); clb.classList.remove('nen3'); clb.value="←"; mn=true;} else {clb.classList.add('nen3'); clb.value="→"; mn=false};
};
window.checkrange = function() {
	var rng = document.getElementById('range0');
	var rangeinput = document.getElementById('rangeinput');
	rangeinput.innerHTML = rng.value;                
}	
function change(timer, i){
	clearInterval(timer[0]);
	clearInterval(timer[i+1]);
	i++;
	z = 51 - rangeinput.innerHTML;
	if (z != 51) timer[i] = setInterval(otri, z);                
}
function change1(){
	document.location.href = "Solar System Infinity.html";
}
function change2(){
	n = !n;    
	if (but2.value == "Включить"){                    
		but2.value = "Выключить";                    
	}
	else if (but2.value == "Выключить"){
		but2.value = "Включить";
	}
}    
function change4(){
	if (but34.value == "Скрыть"){ 
		block.style.display = "none";
		but34.value = "Показать";
		info0.classList.remove("infoo2");
		info0.classList.add("infoo22");
	}
	else if (but34.value == "Показать"){
		block.style.display = "block";
		but34.value = "Скрыть";
		info0.classList.remove("infoo22");
		info0.classList.add("infoo2");
	}
}
function change5(){
	document.location.href = "Solar System Main.html";
}
function change6(){
	document.location.href = "Solar System Galery.html";
}
function change7(){
	document.location.href = "Solar System Quiz.html";
}
document.addEventListener("click", function(){
	if ((mouseX<sun.x+100)&&(mouseX>sun.x)&&(mouseY<sun.y+100)&&(mouseY>sun.y)) cat = !cat;     
	if (z == 51){
	   but2.disabled = true; 
	}
	else but2.disabled = false;
 });