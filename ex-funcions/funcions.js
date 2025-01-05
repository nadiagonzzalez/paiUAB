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

//7 Un conegut que ha vist els nostres concursos ens ha preguntat com ho fem per comptar les paraules d’un determinat número de lletres. Un cop l’hem explicat ens ha demanat si li podíem fer una funció que, donada una frase, ens retorni a una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.

