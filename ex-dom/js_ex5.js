/****** Exercici 5.1 ******/
// a.    Número d'enllaços que hi ha a la pàgina
function e51a() {
    alert( "Número d'enllaços: " +document.links.length);
  }
  
  // b.    Adreça (URL) del penúltim enllaç
  function e51b() {
    alert("El penúltim enllaç apunta a: " +document.links[document.links.length-2].href); 
  }

  //c.    Numero d'enllaços que ho fan a http://www.uab.cat
  function e51c() {
    var comptador = 0;
	for(var i=0; i<document.links.length; i++) {
		// És necessari comprovar els enllaços http://www.uab.cat i
		// http://www.uab.cat/ per les diferències entre navegadors
		if(document.links[i].href == "http://www.uab.cat" || document.links[i].href == 	"http://www.uab.cat/") {
			comptador ++;
		}
	}
	alert("Hi ha "+comptador+" enllaços que apunten a http://www.uab.cat");
  }

  //d.    Número d'enllaços al tercer paràgraf.
  function e51d() {}
  /****** Exercici 5.2 ******/
  // a. Al final de dels paràgrafs existents.
  function e52a() {}
  // b. Entre el segon i el tercer paràgraf.
  function e52b() {}
  
  /****** Exercici 5.3 ******/
  // Afegir "Salve Mundi!" a la llista en penúltima posició.
  function e53a() {}
  // Canviar l'estil de la llista
  function e53b() {}
  
  /****** Exercici 5.4 ******/
  // Amagar el 2on paràgraf
  function e54() {}
