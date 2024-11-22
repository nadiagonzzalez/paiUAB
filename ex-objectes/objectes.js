//Exemple Guiat
class Empresa {
    constructor (nom,adreca){
        //Dades a desar de cada client empresarial
        this.nom = nom;
        this.adreca = adreca;
        this.deute = 0; // Quan creem l'empresa té deute 0 inicialment 
                // Al deute és on guardarem el que tenim pendent de cobrar d’aquesta empresa
    }
    incrementaDeute(n){
        //Quan l’empresa envia un paquet, el cost d’aquest enviament incrementa el deute pendent de l’empresa.
        this.deute += n;
    }
    totPagat(){
        //Quan l’empresa paga a final de mes, el deute queda a zero
        this.deute = 0;
    }
   }
   class Paquet { 
    constructor(origen,destinacio,cost){
        //Informació a desar de cada paquet 
        this.origen = origen;
        this.destinacio = destinacio;
        //Un cop lliurat el paquet, carregar el cost a l’empresa origen
        this.cost = cost;
        this.lliurat = false; // inicialment el paquet no s'ha lliurat per això false
    }
    lliuramentFet() {
        //Aquest mètode crida al mètode incrementaDeute() de la classe Empresa. Això vol dir que la propietat orgen serà de tipus Empresa
        this.origen.incrementaDeute(this.cost);
        this.lliurat = true;
    }
   }

//Exercicis a fer 
    //1.
let taula = []
