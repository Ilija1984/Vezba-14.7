// 01

// var x = ["Ilija", "Danilo", "Mirjana", "Ivana"];
// var y = [10, 15, 20];

//  var z = x.concat(y);
//  console.log(z);

//  // 02

//  // x.push(y);
//  // console.log(x);

//  for ( i=0; i<y.length; i++){
//  	x.push(y[i]);
//  }

 // 03

// var imena1 = [ "Ilija", "Danilo", "Mirjana", "Ivana", "Dusan" ];
// var imena2 = [ "Dragan", "Milica", "Natasa" ];
// var brojevi1 = [ 5, 10, 15, 20 ];
// var brojevi2 = [ 25, 30, 35];

// var all = [];

// all.push(imena1, imena2, brojevi1, brojevi2);

// var newArray = [];

// for ( i=0; i<all.length; i++){
// 	// console.log(all[i]);
// 	for ( j=0; j<all[i].length; j++){
// 		// console.log(all[i][j]);
// 		 // console.log("vrednost i je " +i);
// 		 // console.log("j je " +j)
// 		 // console.log(all[i][j]);
// 		if (typeof all[i][j] == "number"){
// 			newArray.push(all[i][j]);
// 		}
// 	}
// }

// console.log(newArray);

// 04

// var imena = [ "Ilija", "Ivana" ];
// var brojevi = [ 20, 30 ];

// var sve = [];


// sve.push(imena, brojevi);

// var newArray = [];

// for ( var i=0; i<sve.length; i++){
// 	// console.log(sve[i]);
// 	for ( j=0; j<sve[i].length; j++){
// 		// console.log(sve[i][j]);
// 		if (typeof sve[i][j] == "string" ){
// 			newArray.push(sve[i][j]);
			
// 		}
// 	}
// }
// console.log(newArray);


// 05

// var kica = {
// 	name: "Ilija",
// 	lastName: "Zikic",
// 	frends: ["Paja", "Spaske", "Horvat"],
// 	nastavnik: {
// 		name: "Danilo",
// 		lastName: "Vesovic",
// 	},
// 	info: function(){
// 		for ( i=0; i<kica.frends.length; i++){
// 		console.log(kica.nastavnik.name + " " +kica.nastavnik.lastName + " " +kica.frends[i])
// 	}
// }
// }

	

// kica.info();


// 06

// var x = Math.floor(2.9);
// console.log(x);

// var y = Math.ceil(2.9);
// console.log(y);

// 07

// var x = [ "Ilija", "Danilo", "Mirjana", "Ivana", "Dusan", "Nemanja" ];

// var random = Math.floor(Math.random()*x.length);

// console.log(x[random]);

// var poslovica = ["poslovica1", "druga poslovica", "treca poslvica"];

// var random = Math.floor(Math.random()*poslovica.length);
// console.log(poslovica[random]);

// 08

// var header = document.getElementsByTagName("h1");

// var menjajNaslov = ["Prvi", "drugi", "Treci"];

// var random = Math.floor(Math.random()*menjajNaslov.length);

// header[0].innerHTML = menjajNaslov[random];

// 09

// var naslov = document.getElementsByTagName("h1");
// // console.log(naslov);

// var imena = [ "Ilija", "Danilo", "Mirjana", "Ivana", "Dusan", "Nemanja" ];

// var random = Math.floor(Math.random()*imena.length);

// naslov[0].innerHTML = imena[random];

// 10

 // var x = "ilija";

 // setTimeout(function(){
 // 	console.log(x);
 // },5000);



// var x = "Danilo";

//  setTimeout(function(){
//  	console.log(x);
//  },5000);

// 11

// var imena = ["Ilija", "Danilo", "Mirjana", "Ivana", "Dusan", "Nemanja"];

// setTimeout(function(){
// 	for( var i=0; i<imena.length; i++){
// 		console.log(imena[i]);

// 	}
// },3000);

// 12

// var someting = [10, 15,20, "ilija"];

// setInterval( function () {
// for ( var i=0; i<someting.length; i++){

// console.log(someting[i]);
// }
// },300 );

// 13

// var x = 0;
// var loop = setInterval(function(){
// 	x++;
// 	console.log(x)
// 	if( x == 10){
// 		clearInterval(loop);
// 	}
// },300);

// 14

// var imena = ["Ilija", "Mirjana", "Ivana", "Dusan", "Snezana"];
// var i = 0;
// var head = document.getElementsByTagName("h1");

// var loop = setInterval(function(){
// 	head[0].innerHTML = imena[i];
// 	i++;
// 	if( i==imena.length){
// 		i = 0;
// 	}
// },300);

// 15


// var sekunde = document.getElementById("sekunde");
// var minuti = document.getElementById("minuti");

// var min = 0;
// var sec = 0;

// var loop = setInterval(function(){
// 	sekunde.innerHTML = sec;
// 	minuti.innerHTML = min;
// 	sec++;

// 	if (sec == 60){
// 		sec = 0;
// 		min++;
// 	}

// },30);


// 16

// var x = ["ilija", "mirjana", "ivana", "snezana", "dusan"];
// var y = [25, 30, 50, 100];

// var z = [];

// z.push(x,y);

// for ( i=0; i<z.length; i++){
// 	for ( j=0; j<z[i].length; j++){
// 		console.log(z[i][j]);
// 	}
// }

// 17 

// var a = ["ilija", "mirjana", "ivana", "snezana", "dusan"];
// var b = [25, 30, 50, 100];

// var c = [];

// var d = [];
// c.push(a,b);

// for ( var i=0; i<c.length; i++){
// 	// console.log(c[i]);
// 	for ( j=0; j<c[i].length; j++){
// 		// console.log(c[i][j]);
// 		if ( typeof c[i][j] == "string"){

// 		d.push(c[i][j]);
// 		}

// 	}
// }

// console.log(d);

// 18 

// var naslov = document.getElementsByTagName("h1");
// var a = ["ilija", "mirjana", "ivana", "snezana", "dusan"];

// var menjaj = Math.floor(Math.random()*a.length);

// naslov[0].innerHTML = a[menjaj];

// 19 

// var naslov = document.getElementsByTagName("h1");
// var a = ["ilija", "mirjana", "ivana", "snezana", "dusan"];
// var menjaj = Math.floor(Math.random()*a.length);
// // naslov[0].innerHTML = a[menjaj];
// var i = 0;

//  var loop = setInterval(function(){
// 	naslov[0].innerHTML = a[i];
// 	i++;
//  },1000);


//  var imena = ["Ilija", "Mirjana", "Ivana", "Dusan", "Snezana"];
// var i = 0;
// var head = document.getElementsByTagName("h1");

// var loop = setInterval(function(){
// 	head[0].innerHTML = imena[i];
// 	i++;
// 	if( i==imena.length){
// 		i = 0;
// 	}
// },300);

// 20

// var naslov = document.getElementsByTagName("h1");
// var imena = ["Ilija", "Ivana", "Snezana", "Dusan", "Mirjana"];
// var i = 0;
// var loop = setInterval(function(){
// 	naslov[0].innerHTML = imena[i];
// 	i++;
// 	if ( i == imena.length ){
// 		i = 0;
// 	}
// },200);

// var zivotinje = ["Dog", "Cat", "Mouse", 10, 20, 30];
// var head = document.getElementsByTagName("h1");
// var i = 0;

// var loop = setInterval(function(){
// 	head[0].innerHTML = zivotinje[i];
// 	i++;
// 	if ( i == zivotinje.length){
// 		i = 0;
// 	}

	
// },90);

// 21

// var zivotinje = ["Dog", "Cat", "Mouse", 10, 20, 30];
// var imena = ["Ilija", "Ivana", "Snezana", "Dusan", "Mirjana"];

// var all = [];
// var newAll = [];

// all.push(zivotinje, imena);

// // console.log(all);

// for ( i=0; i<all.length; i++){
// 	// console.log(all[i]);
// 	for ( j=0; j<all[i].length; j++){
// 		console.log(all[i][j]);
// 		if ( typeof all[i][j] == "number"){
// 			newAll.push(all[i][j]);
// 		}
// 	}
// }
// console.log(newAll);

// 22


// var x = Math.floor(4.2);
// console.log(x);	

// var y = Math.ceil(4.2);
// console.log(y);

// 23

// var zivotinje = ["Dog", "Cat", "Mouse", 10, 20, 30];

// var random = Math.floor(Math.random()*zivotinje.length);

// // console.log(zivotinje[random]);

// var y = document.getElementsByTagName("h1");

// y[0].innerHTML = (zivotinje[random]);


// 24


// var x = document.getElementsByTagName("h1");
// var zivotinje = ["Dog", "Cat", "Mouse", 10, 20, 30];
// var i = 0;

// setInterval(function(){
// 	// console.log("dadaad");
// 	x[0].innerHTML = zivotinje[i];
// 	i++;
// 	if (i == zivotinje.length){
// 		i=0;
// 	}
// },300);


// 25

// var x = 0;
// while(x<10){
// 	console.log(x);
// 	x++;
// }

// 26

// for ( i=0; i<20; i++){
// 	console.log(i);
// }
  // 26

  // var x = prompt( "unesi username" );
  // var y = prompt( "unesi pass" );
  // var naslov = document.getElementsByClassName("container");
  // for ( i=0; i<naslov.length; i++){
  // 	if ( x == "Ilija" && y == "Zikic" ){
  // 		naslov[i].style.backgroundColor = "red";
  // 		console.log("Uspesno logovanje")
  // }	else{
  // 	if ( x == "Ilija"){
  // 		naslov[0].style.backgroundColor = "blue";
  // 		console.log("POGRESAN pass-y")
  // 	}else{
  // 		if ( y == "Zikic"){
  // 			naslov[1].style.backgroundColor = "green";
  // 			console.log("POGRESAN username")
  // 		}else{
  // 			naslov[i].style.backgroundColor = "yellow"
  // 			console.log("GRESKA")
  // 		}
  // 	}
  // }

  // }
  

  // 27

//   var kanta = document.getElementsByClassName("container");
//   // kanta[0].style.backgroundColor="red";
//   // kanta[1].style.backgroundColor="red";
//   // kanta[2].style.backgroundColor="red";

//    for ( var i=0; i<kanta.length; i++){
//    	 kanta[i].addEventListener("mouseenter", farbajDivove);
//    }

//    function farbajDivove(){
//    	this.style.backgroundColor = "red";
//    }


//  for ( var i=0; i<kanta.length; i++){
//    	 kanta[i].addEventListener("mouseleave", vracajDivove);
//    }
 

// function vracajDivove(){
// 	this.style.backgroundColor = "white";
// }


// 28

// var kanta = document.getElementsByClassName("container");

// for ( var i=0; i<kanta.length; i++){
// 	kanta[0].addEventListener("click", menjajText);
// 	kanta[1].addEventListener("click", menjajText2);
// 	kanta[2].addEventListener("click", menjajText3);
	
	
// }

// function menjajText(){					// OVO objasniti
// 	var text = this.innerHTML;
// 	var noviText = "";
// 	if ( text == "One"){
// 		noviText = "Promena DIV 1"
// 	}else{
// 		noviText = "One"
// 	}
// 	this.innerHTML = noviText;
// }

//  function menjajText2(){
//  	var text = this.innerHTML;
//  	var noviText = "";
//  	if ( text == "Two"){
//  		noviText = "Promena DIV 2";
//  	}else{
//  		noviText = "Two";
//  	}
//  	this.innerHTML = noviText;
//  }
//  function menjajText3(){
//  	var text = this.innerHTML;
//  	var noviText = "";
//  	if ( text == "Three"){
//  		noviText = "Promena DIV 3";
//  	}else{
//  		noviText = "Three";
//  	}
//  	this.innerHTML = noviText;
//  }


// 29

// var brojevi = [ 5, 10, 15, 20, 55, 100];
// var zbir = 0; // prvo je zbir =0, i = 0(5) i zbir je 5
// 			  // zbir je sada 5 a i = 1(10) pa je zbir = 15...	

// for ( var i=0; i<brojevi.length; i++){
// 	zbir += brojevi[i];
// 	console.log(zbir);
// }


// 30 


// var muskaImena = ["Ilija", "Danilo", "Dusan", "Milos"];
// var zenskaImena = ["Ivana", "Mirjana", "Snezana"];
// var godine = [32, 37, 63, 40];

// var all = [];
// var newAll = [];

// all.push(muskaImena, zenskaImena, godine);

// for ( var i=0; i<all.length; i++){
// 	// console.log(all[i]);
// 	for( var j=0; j<all[i].length; j++){
// 		// console.log(all[i][j]);
// 		if (typeof all[i][j] == "string"){
// 			// newAll.push(all[i][j]);
// 			console.log(all[i][j]);
// 		}
// 	}
// }

// // console.log(newAll);



// 31


// var kica = {
// 	name: "Ilija",
// 	prezime: "Zikic",
// 	age: 32,
// 	auto: {
// 		name: "Volvo",
// 		model: "S40",
// 		age: 2001
// 	},
// 	mojaFunkcija: function(){
// 		console.log(kica.name + " " + kica.prezime + " vozi " + kica.auto.name);
// 	}
// }

// kica.mojaFunkcija();

// 32

// var divovi = document.getElementsByClassName("container"); // Kako u sva tri DIVA da se menja text.
// var text = ["prvi text", "drugi text", "treci text"];
 

 
//  setInterval(function(){
	
//  	var random = Math.floor(Math.random()*text.length);
// 	divovi[0].innerHTML = text[random];


// },1000);


// 33

// var divovi = document.getElementsByClassName("container"); // Kako u sva tri DIVA da se menja text.
// var color = ["red", "blue", "green"];


 
//  setInterval(function(){
	
//  	var random = Math.floor(Math.random()*color.length);
// 	divovi[0].style.backgroundColor = color[random];


// },1000);


 // 34 semafor

 
// function semafor(){
// var divovi = document.getElementsByClassName("container");

//  divovi[0].style.backgroundColor = "red";
//  divovi[1].style.backgroundColor = "gray";
//  divovi[2].style.backgroundColor = "gray";


// function changeToYelow(){
// 	divovi[1].style.backgroundColor = "yellow";

// }

// function changeToGreen(){
//  divovi[0].style.backgroundColor = "gray";
//  divovi[1].style.backgroundColor = "gray";
//  divovi[2].style.backgroundColor = "green";
// }

// var x = setTimeout(changeToYelow, 3000);
// var y = setTimeout(changeToGreen, 5000);
// var start = setInterval(semafor,8000);

// }

// semafor();


// 35

// var imena = [];

// function proveraImena(){
// 	var x = prompt("Unesi ime");
// 	if ( x != "Milos"){
// 		imena.push(x);
// 		proveraImena();
// 	}
// }
// proveraImena();
// console.log(imena);

//36

// var brojevi = [];

// function mojaFunkcija(){
// 	var x = prompt("Unesi broj");
	
// 	if ( x != 100){
// 		brojevi.push(x);
// 		mojaFunkcija();
// 	}
// }
// mojaFunkcija();

// console.log(brojevi);

// 37

// var brojevi1 = parseInt(prompt("Unesi brojeve"));
// var brojevi2 = parseInt(prompt("Unesi brojeve"));


// if ( brojevi1 + brojevi2 == 100){
// 	console.log("logIn");
// }else{
// 	console.log("NO");
// }

// 38

// var uzetiElementi = document.getElementsByClassName("container");

// uzetiElementi[0].addEventListener("mouseenter", klikFunction);
// uzetiElementi[0].addEventListener("mouseleave", klikFunctionklik);



// function klikFunction(){
// 	this.style.backgroundColor = "green";
// }
// function klikFunctionklik(){
//   this.style.backgroundColor ="white";
// }


// uzetiElementi[1].addEventListener("click", klik2Function);

// function klik2Function(){
// 	var text = this.innerHTML;
// 	var newText = "";
// 	if (text == "Two"){
// 		newText = "Ovo radi"
// 	}else{
//     newText = "Two";
//   }
//   this.innerHTML = newText;
// }


// var loop = setInterval(function(){
// 	var x = [1,2,3,4,5,6];
// 	var random = Math.floor(Math.random()*x.length);
// 	uzetiElementi[2].innerHTML = x[random];
// },1000);

// 39

// var imena = []

// function ponovi(){
// var x = prompt("Unesi ime");
//   // imena.push(x);
// if ( x != "a"){
//     imena.push(x);
//   ponovi();
// }

// }
// ponovi();
// console.log(imena);


// // 40
// var div3 = document.getElementsByClassName("container");
// var imena = ["Ilija", "Danilo", "Dusan", "Milos"];

// var loop = setInterval(function(){
//    var random = Math.floor(Math.random()*imena.length);
//   div3[2].innerHTML = imena[random];

// },100);



// 41

// var div3 = document.getElementsByClassName("container");
// var imena = ["Ilija", "Danilo", "Dusan", "Milos"];
// for ( var i=0; i<imena.length; i++){
//   setInterval(function(){
//     var random = Math.floor(Math.random()*imena.length);
//     div3[0].innerHTML = imena[random];
//   },1000);
// }

// 42

// var div3 = document.getElementsByClassName("container");
// var imena = ["Ilija", "Danilo", "Dusan", "Milos"];
// var i = 0;

// var loop = setInterval(function(){
//   div3[2].innerHTML = imena[i];
//   i++;
//   if (i == imena.length){
//     i = 0;
//   }
// },1000);

// 43

// var naslovi = ["naslov1", "Naslov2", "Naslov3"];
// var i = 0;
// var x = document.getElementsByClassName("container");

// x[0].addEventListener("mouseenter", ulazFunkcija);
// x[0].addEventListener("mouseleave", izlazFunkcija);


// x[1].addEventListener("click", menjajNaslovFunkcija);


// x[2].addEventListener("click", klikFunkcija);


// function ulazFunkcija(){
//   x[0].style.backgroundColor = "green";
// }

// function izlazFunkcija(){
//   x[0].style.backgroundColor = "white";
// }

// function menjajNaslovFunkcija(){
//   setInterval(function(){
//     x[1].innerHTML = naslovi[i];
//     i++;
//     if ( i == naslovi.length){
//       i = 0;
//     }
//   },3000);
// }

// function klikFunkcija(){
//   var text = x[2].innerHTML;
//   var newText = "";
//   if ( text == "Three"){
//     newText = "Promena";
//   }else{
//     newText = "Three";
//   }
// x[2].innerHTML = newText;
// }



// 44

// var ponovoImena = [];



// function mojaFunkcija(){
//   var x = prompt("Unesi ime");
//   if ( x != "Milos"){
//     ponovoImena.push(x);

//     mojaFunkcija();

//   }
// }
// mojaFunkcija();
// console.log(ponovoImena);



// 45

// var minuti = document.getElementById("minuti");
// var sekunde = document.getElementById("sekunde");

// var min = 0;
// var sec = 0;

// var loop = setInterval(function(){
//   minuti.innerHTML = min; 
//   sekunde.innerHTML = sec;
//   sec++;
//   if ( sec == 60 ){
//     sec = 0;
//     min++;

//   }
// },1000);


// 46
// var x = ["Ilija", "Danilo", "Dusan", "Milos"];
// var y = document.getElementById("minuti");

// var i = 0;

// var loop = setInterval(function(){
//   y.innerHTML = x[i];
//   i++;
//   if ( i == x.length){
//     i = 0;
//   }
// },1000);

// 47

// var x = 0;

// var loop = setInterval(function(){
//   x++;
//   console.log(x);
//   if ( x == 10){
//       clearInterval(loop);
//   }
// },100);

// 49 


function semafor(){
var divs = document.getElementsByClassName("container");

divs[0].style.background = "red";
divs[1].style.background = "gray";
divs[2].style.background = "gray";

function farbajZuto(){

divs[1].style.background = "yellow";

}

function farbajZeleno(){
divs[0].style.background = "gray";
divs[1].style.background = "gray";
divs[2].style.background = "green";
}

var prvo = setTimeout(farbajZuto, 2000);
var drugo = setTimeout(farbajZeleno, 5000);
var start = setInterval(semafor, 8000);

}
semafor();

// 50

var minuti = document.getElementById("minuti");
var sekunde = document.getElementById("sekunde");

var min = 0;
var sec = 0;

var loop = setInterval(function(){
  minuti.innerHTML = min;
  sekunde.innerHTML = sec;
  sec++;
  if ( sec == 60){
    min++;
    sec = 0;

  }
},10);


// 51 


