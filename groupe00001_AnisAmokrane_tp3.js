function Multiplier(nombre1, nombre2){
    return (nombre1*nombre2);
}
//-------------------------------------------------------------

function Diviser(nombre1, nombre2){
    if (nombre2 == 0) { 
         return "NaN"; 
         }  
    else {
        return (nombre1/nombre2);
        }
}
//-------------------------------------------------------------
function SommeDesElementDuTableau(tableau){
    let somme = 0;
    //boucle qui additionne les elements du tableau
    for (let i = 0; i < tableau.length; i++) {

        somme += tableau[i];

    }
    return somme;
    }
//-------------------------------------------------------------
function ListeElementMultipleDe2(tableau){
    let diviseursDeDeux = [];
    if (tableau == null){
        return null;
    }
    else{
        for(let i=0; i<tableau.length;i++){
            if (tableau[i] % 2 == 0){
                diviseursDeDeux.push({element: tableau[i], index: i })
            }
        }
        return diviseursDeDeux;
    }
}