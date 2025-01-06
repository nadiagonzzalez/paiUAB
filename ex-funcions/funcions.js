//1 Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció. 
function parelloSenar(num) {
    let resultat = ""; //per entrar el valor
    if (num % 2 === 0) {
      // Si el residu de dividir per 2 és 0, el nombre és parell
      resultat = "El nombre és parell";
    } else {
      resultat = "El nombre és senar";
    }
    return resultat;
  }
  
//2 Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és. 
function anyDeTraspas(any) {
    let resultat = false ; // per entrar valor
    if (any % 4 === 0) {//per saber si es múltiple de 4
        resultat = true;
        if (any % 100 === 0 && any % 400 !== 0); //si és múltiple de 100 i no de 400
            resultat = false;
    }
    return resultat;
}

//3 Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
function sumatori(numEnter) {
    let sum = 0;
    for (let i = 1; i<=numEnter; i++){
        sum += 1 / (i*i);
    }
    return numEnter
}

/* 4 Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades.
    El càlcul de la nota final serà diferent depenent de si l’estudiant ha seguit o no l’avaluació continuada, i de la nota d’aquesta:
    Si la nota d’avaluació continuada és més gran o igual que 5, la nota final la calcularem com: 
    NOTA_FINAL = 0,2 * NOTA_AC + 0,4 * NOTA_PRACT + 0,4 * NOTA_EXAMEN 
    Si la nota d’avaluació continuada és menor que 5, la nota final la calcularem com: 
    >NOTA_FINAL = 0,4 * NOTA_PRACT + 0,6 * NOTA_EXAMEN 
    On NOTA_FINAL és la nota final de l’assignatura que hem de calcular, NOTA_AC és la nota d’avaluació continuada, NOTA_PRACT és la nota de pràctiques, i NOTA_EXAMEN és la nota de l’examen. 

La funció ha de retornar una cadena que contingui el valor numèric de la nota final obtinguda per l’alumne, seguit de la nota però en format lletra, fent servir la següent taula de conversió: 
    Si la nota final és menor que 5 tindrà una D. 
    Si la nota final és major o igual que 5 i menor que 6,5 tindrà una C.
    Si la nota final és major o igual que 6,5 i menor que 8 tindrà una B. 
    Si la nota final és major o igual que 8 i menor que 10 tindrà una A.
    > I si la nota final és un 10 tindrà una H. 
Important: Totes tres notes seran valors numèrics, i podem suposar que sempre tindrem els tres valors i seran més grans o iguals que 0. */
function notaFinal(NOTA_AC, NOTA_PRACT, NOTA_EXAMEN) {
    let NOTA_FINAL = 0; // 0 perque és un nombre
        NOTA_FINALLETRA = "" // vuit perque és una lletra
    if (NOTA_AC >= 5) {
        NOTA_FINAL = (0.2 * NOTA_AC + 0.4 * NOTA_PRACT + 0.4 * NOTA_EXAMEN);
    } else {
        NOTA_FINAL = (0.4 * NOTA_PRACT + 0.6 * NOTA_EXAMEN)
    }
    if (NOTA_FINAL < 5){
        NOTA_FINALLETRA = "D"; 
    } else if (NOTA_FINAL < 6.5){
        NOTA_FINALLETRA = "C";
    } else if (NOTA_FINAL < 8){
        NOTA_FINALLETRA = "B";
    } else if (NOTA_FINAL < 10){
        NOTA_FINALLETRA = "A";
    } else {
        NOTA_FINALLETRA = "MH";
    }
    // Si és més gran que la condició passa a la següent, en canvi, si és més petit i per tant la compleix no passa i no pot haver-hi error
    return NOTA_FINALLETRA;
}

/* 5 Hem organitzat un concurs a Twitter que consisteix en fer relats curs (màxim 280 caràcters) amb el màxim número de paraules de 5 caràcters. Per poder donar el premi, el que volem fer és classificar tots  els tuits segons el nombre de paraules de 5 caràcters que tenen i, per tant, necessitem una funció que, donada una frase, ens retorni el número de paraules de 5 caràcters que té.
Per fer aquesta funció haurem de tenir en compte que: 
    Totes les frases acaben en un punt (.) y totes comencen sempre per una paraula. 
    Una paraula acaba quan apareix una coma (,) o un espai en blanc. 
    Les frases només poden tenir lletres, comes, espais en blanc y el punt final. No tindrem en compte que pugui aparèixer cap altre caràcter. 
    Per conèixer la llargària de la frase (quants caràcters té) podem fer servir la propietat length del Strings de JavaScript (consulteu https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Str ing/length per saber com fer-la servir) 
    */
function contador(relat) {
    let paraulesDe5Lletres = 0; //inicialitzem el contador de paraules
    let lletres = 0; //inicialitzem el contador de lletres
    let i = 0; //inicialitzem la variable de suport
    //Ara especificarem les condicions que ha de tindre la cadena per considerar-se cadena
    while (relat [i] !== ".") { // mentre no ens trobem un punt perque això vol dir que s'haurà acabat la cadena
        if (relat [i] === " ") { //si trobem un espai, canviem de paraula
            if (lletres === 5) {
            paraulesDe5Lletres ++; //sumem 1 al contador de paraules
            }
            lletres = 0; //Com canviem de paraula el comptador de lletres a de tornar a 0;
        } else if (relat [i] !== ",") { //clarifiquem que si no es un espai o una cka, compten com una lletra més
            lletres ++;
        }
        i++;
    }
    if (lletres === 5) { //per comptar també l'última paraula acabada en "."
        paraulesDe5Lletres++;
    }
    return paraulesDe5Lletres;
}  

//6 A partir de l’experiència del concurs anterior hem decidir fer un concurs semblant cada setmana. Però cada setmana volem comptar paraules amb diferents números de lletres. Així aquesta setmana seran paraules de 7 lletres, la setmana vinent de 4 i l’altre de 3. Què cal modificar a la funció per a que puguem fer servir la mateixa funció totes les setmanes? 
    // Només cal afegir el paràmetre del número de lletres nou per setmanes
function contador(relat,nLletres) {
    let paraulesDe5Lletres = 0;
    let lletres = 0; // número de lletres de la paraula actual
    let i = 0; // posició en la cadena de caràcters
    // Per saber quan he d'acabar, tinc en compte que la cadena acaba en punt.
    while (relat[i] !== ".") {
      if (relat[i] === " ") {
        // si trobem un espai, estem canviant de paraula
        if (lletres === nLletres) { // si les llestres de la paruala són iguals a les lletres triades sent el paràmetre nou, doncs ...
          paraulesDe5Lletres++;
        }
        lletres = 0; // Com que estem canviant de paraula, tornem el comptador de lletres a 0
      } else if (relat[i] !== ",") { // si no és un espai, ni una coma, comptem com una lletra més
        lletres++;
      }
      i++;
    }
    if (lletres === nLletres) { // per comptabilitzar també la paraula final acabada en .
      paraulesDe5Lletres++;
    }
    return paraulesDe5Lletres;
  }
  
//7 Un conegut que ha vist els nostres concursos ens ha preguntat com ho fem per comptar les paraules d’un determinat número de lletres. Un cop l’hem explicat ens ha demanat si li podíem fer una funció que, donada una frase, ens retorni a una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.
function comptarParaulesPerLongitud(frase) {
    let comptadors = [0, 0, 0, 0, 0, 0, 0]; // Taula per comptar paraules de longituds 1 a 7
    let paraulaActual = ""; // Variable temporal per construir cada paraula
  
    // Recorrem tota la frase
    for (let i = 0; i < frase.length; i++) {
        const car = frase[i]; // Agafem el caràcter actual
  
        if (car === " " || car === "," || car === ".") {
            // Si trobem un separador (espai, coma, punt)
            if (paraulaActual.length >= 1 && paraulaActual.length <= 7) {
                // Si la paraula està dins del rang 1-7, incrementem el comptador corresponent
                comptadors[paraulaActual.length - 1]++;
            }
            paraulaActual = ""; // Reiniciem la paraula actual
        } else {
            // Si no és un separador, afegim el caràcter a la paraula actual
            paraulaActual += car;
        }
    }
  
    return comptadors; // Retornem la taula de comptadors
  }
//--------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------

// 19.1 Crea una funció que rebi un nombre i retorni aquest nombre elevat al quadrat.
function quadrat (numerito) {
    let resultato = 0;
    resultato = numerito * numerito;

    return resultato;
}

// 19.2.- Crea una funció que rebi un nombre i retorni aquest nombre elevat al cub.
function cub (numerete) {
    let resultatum = 0;
    resultatum = numerete * numerete * numerete;
    return resultatum;
/* alternativa: 
    function cub (numerete) {
        return Math.pow (valor, 3);
} 
// 19.3.- Crea una funció que rebi dos nombres i retorni el primer nombre elevat al segon.
// 19.4.- Crea una funció que donat un valor en milles retorni la seva equivalència en metros. 1 milla = 1852 metros.
// 19.5.- Crea una funció que, donat un nombre del 0 al 10 retorni una cadena de caràcters amb el nom del nombre donat.
// 19.6.- Crea una funció que, rebut un nombre de segons retorni una cadena de caràcters on es digui quantes hores minuts i segons són.
// 19.7.- Crea una funció que, donades les hores treballades en una setmana i el salari brut per hora, calculi el seu salari. Si les hores treballades són més de 40, aquestes hores sobreres, es pagaran un 50% més cares que una hora normal.
/*19.8.- Fer una funció que, donat un any, retorni si és de traspàs o no. Un any és de traspàs si és divisible per 4 i no per 100, però sí si és divisible per 400. El valor retornat per la funció haurà de ser un valor booleà.
Anys de traspàs: 
1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956,
1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000
1900 
no és de traspàs perquè és divisible per 100 però no per 400.*/

// 19.9.- La funció Math.random() de JavaScript retorna un valor dins del rang [0,1) (0 inclòs, 1 no inclòs). La funció Math.floor(valor) ens retorna valor eliminant els decimals. Fent servir aquestes funcions, crear una funció que donats dos valors min i max ens calculi un nombre aleatori entre min i max, ambdòs inclosos.
/* 19.10.- Crea una funció en la que donat un text, indiqui si és o no un palíndrom.
Exemples de palíndroms:
- "amad a la dama"
- "anna"
- "azuza"
- "3003"
- "1001001"
*/

/* 19.11.- Crea una funció que rebi una cadena de caràcters i retorni aquesta cadena codificada segons les següents regles:
    - Es posaran les paraules en l’ordre invers
    - Els caràcters que conformen les paraules també s’han d’invertir.
    - Les vocals que apareguin s’han de canviar pel seu número equivalent (a=1, e=2, i=3, o=4 i u=5)
Per exemple, donada la frase “The cat is in the roof.” Es retornarà això:
    .f44r 2ht n3 s3 t1c 2hT
    */

    // 19.12.- Crea una funció que rep els tres paràmetres següents: 2 nombres i un dels següents valors "+", "-", "*", "/", "%", "pot" i retorni el resultat de l'operació realitzada. Fes servir la instrucció switch.