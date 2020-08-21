// ce code est écrit par BEN-TAHRI MERWANE, pour son examen de seconde chance

"use strict";
const pcBureaux = [

    {id : "pcB01",
        nom : "LDLC PC Bazooka" ,
        processeur : "Intel Core i5-9400F (2.9 GHz)"	,
        carteMere : "MSI MAG B365M MORTAR" ,
        ram : "16 Go de mémoire vive de type DDR4 2400 MHz" ,
        stockage : "SSD M.2 PCIe NVMe 480 Go" ,
        carteGraphique : "NVIDIA GeForce RTX 2060" ,
        Alimentation : "Alimentation 500W" ,
        Prix : 999.94
    },

    {id : "pcB02",
        nom : "LDLC PC10 Plus Perfect" ,
        processeur : "Intel Core i7-9700K (3.6 GHz)"	,
        carteMere : "MSI MPG Z390 GAMING PLUS" ,
        ram : "16 Go DDR4 3000 MHz" ,
        stockage : " SSD LDLC F8 PLUS M.2 2280 NVMe 240 Go" ,
        carteGraphique : "NVIDIA GeForce RTX 2060 SUPER 8 Go" ,
        Alimentation : "Alimentation modulaire 650W LDLC US-650G Quality Select 80PLUS Gold" ,
        Prix : 1699.94},

    {id : "pcB03",
        nom : "LDLC PC In extensor-SSD" ,
        processeur : "Intel Core i3-9100F (3.6 GHz)"	,
        carteMere : "micro ATX avec Chipset Intel H310" ,
        ram : "8 Go de mémoire vive de type DDR4 2400 MHz\n" ,
        stockage : " SSD 240 Go" ,
        carteGraphique : "Carte graphique dédiée 1 Go" ,
        Alimentation : "Alimentation 350 W" ,
        Prix : 399.95

    },
    {id : "pcB04",
        nom : "PC Start Bureau Pentium" ,
        processeur : "Dual-Core Intel Pentium Gold G5400 (3.7 GHz)"	,
        carteMere : "chipset Intel H310 - Micro ATX" ,
        ram : "RAM DDR4 4 Go" ,
        stockage : " SSD 480 Go" ,
        carteGraphique : "Intel HD Graphics 510" ,
        Alimentation : "Alimentation 350 W" ,
        Prix : 399.95},
    {id : "pcB05",
        nom : "Lenovo ThinkCentre V530s-07ICR SFF (11BM002QFR)" ,
        processeur : "Intel Pentium Gold G5400 (Dual-Core 3.7 GHz - 4 Threads - Cache 4 Mo)"	,
        carteMere : "chipset Intel H310 - Micro ATX" ,
        ram : "RAM DDR4 4 Go" ,
        stockage : "HDD 1 To" ,
        carteGraphique : "Intel UHD Graphics 610" ,
        Alimentation : "180 Watts " ,
        Prix : 449.95}

];

pcBureaux.sort(function (a, b) {
    return a.Prix - b.Prix;
})

const pcPortable = [

    {id : "pcP01",
        nom : "Dell G3 15 3500 (8JJYC)\n" ,
        processeur : "Intel Core i7-10750H (Hexa-Core 2.6 GHz / 5 GHz Turbo - 12 Threads - Cache 12 Mo)"	,
        ram : "16 Go de mémoire vive DDR4 2933 MHz" ,
        stockage : "SSD NVMe PCIe de 512 Go" ,
        carteGraphique : " NVIDIA GeForce RTX 2060 avec 6 Go de mémoire dédiée GDDR6" ,
        Ecran : "144 Hz de 15.6\" avec résolution Full HD (1920 x 1080 pixels)" ,
        Prix : 1599.95
    },
    {id : "pcP02",
        nom : "MSI GF63 Thin 10SCXR-414XFR\n" ,
        processeur : " Intel Core i5-10300H (Quad-Core 2.5 GHz / 4.5 GHz Turbo - 8 Threads - Cache 8 Mo)"	,
        ram : "8 Go de mémoire vive DDR4 2666 MHz " ,
        stockage : "Disque dur de 1 To (5400 RPM) " ,
        carteGraphique : " NVIDIA GeForce GTX 1650 (Max-Q) " ,
        Ecran : "Ecran de 15.6 pouces avec résolution Full HD (1920 x 1080 pixels) et fréquence de 120 Hz" ,
        Prix : 849.95
    },
    {id : "pcP03",
        nom : "LDLC Aurore NL4-8-S1\n" ,
        processeur : " Intel Celeron N4100 (Quad-Core 1.1 GHz / 2.4 GHz Turbo - Cache 4 Mo - TDP 6W) "	,
        ram : "8 Go de mémoire vive DDR4 2400 MHz" ,
        stockage : "SSD 120 Go M.2 SATA 6 Gb/s" ,
        carteGraphique : " Intel UHD Graphics 600" ,
        Ecran : "Ecran mat de 15.6\" avec résolution Full HD (1920 x 1080 pixels)" ,
        Prix : 319.94
    },
    {id : "pcP04",
        nom : "ASUS Vivobook F512DA-EJ414T\n" ,
        processeur : "AMD Ryzen 5 3500U (Quad-Core 2.1 GHz / 3.7 GHz Turbo - Cache 6 Mo)"	,
        ram : "8 Go de mémoire DDR4 2400 MHz " ,
        stockage : "SSD M.2 PCIe de 512 Go" ,
        carteGraphique : "AMD Radeon Vega 8 Graphics " ,
        Ecran : "Ecran de 15.6 pouces anti-reflets avec résolution Full HD (1920 x 1080)" ,
        Prix : 679.95
    },{id : "pcP05",
        nom : "Toshiba  Dynabook Satellite Pro R50-E-1D7" ,
        processeur : " Intel Celeron 3865U (Dual-Core 1.8 GHz - Cache 2 Mo)"	,
        ram : "8 Go de mémoire DDR4 2133 MHz " ,
        stockage : "SSD M.2 PCIe de 512 Go" ,
        carteGraphique : "Intel HD Graphics 610" ,
        Ecran : " Ecran anti-reflets de 15.6\" avec résolution HD (1366 x 768 pixels)" ,
        Prix : 399.95
    }
];

pcPortable.sort(function (a, b) {
    return a.Prix - b.Prix;
})

const  souris = [

    {id : "S01",
        nom : "Logitech B100 Optical USB Mouse (Noir)" ,
        bouton : "3 boutons"	,
        dpi : "800 dpi" ,
        poids : "130 g" ,
        cable : "Câble de 180 cm" ,
        Prix : 9.95
    },
    {id : "S02",
        nom : "Glorious Model O Regular (Blanc Mat)" ,
        bouton : " 6 boutons"	,
        dpi : "12 000 dpi" ,
        poids : "67 g" ,
        cable : "Câble de 200 cm" ,
        Prix : 64.94
    },
    {id : "S03",
        nom : "ASUS Cerberus Fortus" ,
        bouton : "6 boutons"	,
        dpi : "4000 dpi" ,
        poids : "114 g" ,
        cable : "Câble de 180 cm" ,
        Prix : 49.94
    },
{id : "S04",
    nom : "Oyster Wired Mouse" ,
    bouton : "5 boutons"	,
    dpi : "1200 dpi" ,
    poids : "144 g" ,
    cable : "Câble de 120 cm" ,
    Prix : 129.95
},
    {id : "S05",
        nom : "Logitech G502 Lightspeed" ,
        bouton : "11 boutons programmables"	,
        dpi : "16000 dpi" ,
        poids : "114 g" ,
        cable : "Câble de 132 cm" ,
        Prix : 139.94
    },
];

souris.sort(function (a, b) {
    return a.Prix - b.Prix;
})

const clavier = [

    {id : "c01",
        nom : "LDLC AZERTY+" ,
        Normes : "AZERTY "	,
        Technologiedeconnexionduclavier : "Filaire" ,
        poids : " 534 g",
        Dimensions : "456 x 156 x 24 mm",
        LongueurDuCable : "150 cm",
        Prix : 12.95},
    {id : "c02",
        nom : "Apple Magic Keyboard MLA22F/A" ,
        Normes : "AZERTY "	,
        Technologiedeconnexionduclavier : "Bluetooth" ,
        poids : " 231 g",
        Dimensions : "279 x 10.9 x 114.9 mm",
        LongueurDuCable : "",
        Prix : 99.95},
    {id : "c03",
        nom : "ASUS ROG Republic of Gamers Claymore (MX Red)" ,
        Normes : "AZERTY "	,
        Technologiedeconnexionduclavier : "filaire" ,
        poids : " 943 g",
        Dimensions : "450 x 145 x 45 mm",
        LongueurDuCable : "145 cm",
        Prix : 199.94},
    {id : "c04",
        nom : "SteelSeries Apex Pro" ,
        Normes : "AZERTY "	,
        Technologiedeconnexionduclavier : "filaire" ,
        poids : " 970 g",
        Dimensions : "436.7 x 40.3 x 139.2 1mm",
        LongueurDuCable : "200 cm",
        Prix : 259.94},
    {id : "c05",
        nom : "Cooler Master CK530 (Gateron Red)" ,
        Normes : "AZERTY "	,
        Technologiedeconnexionduclavier : "filaire" ,
        poids : " 749 g",
        Dimensions : "380 x 135 x 40 mm",
        LongueurDuCable : "180 cm",
        Prix : 64.9}

];

clavier.sort(function (a, b) {
    return a.Prix - b.Prix;
})

const webCam = [

    {id : "wb01",
        nom : "Logitech HD Webcam C270" ,
        Dimensions : " 71 mm x 31s mm x 24 mm "	,
        resolutions : "3 Megapixels" ,
        Resolutionvideo : " 1280 x 720 pixels",
        couleurs : "noir",
        Prix : 39.99},
    {id : "wb02",
        nom : "AMX AcendoVibe ACV-5100 Gris" ,
        Dimensions : " 132 x 590 x 105 mm "	,
        resolutions : "12 Megapixels" ,
        Resolutionvideo : " 920 x 1080p ",
        couleurs : "Grid",
        Prix : 999.95},
    {id : "wb03",
        nom : "ASUS ROG Eye" ,
        Dimensions : " 81 x 28 x 16 mm "	,
        resolutions : "15 Megapixels" ,
        Resolutionvideo : " 1920 x 1080 pixels",
        couleurs : "noir",
        Prix : 109.94},
    {id : "wb04",
        nom : "Logitech C310" ,
        Dimensions : "230 x 178 x 76 mm"	,
        resolutions : "5 MPixels (interpolée)" ,
        Resolutionvideo : " 1280 x 720 pixels",
        couleurs : "noir",
        Prix : 59.99},
    {id : "wb05",
        nom : "TONES Webcam Full HD" ,
        Dimensions : " 100 x 78 x 28 mm "	,
        resolutions : "5 Megapixels" ,
        Resolutionvideo : " 2592 x 1944 pixels",
        couleurs : "noir",
        Prix : 54.95}

];

webCam.sort(function (a, b) {
    return a.Prix - b.Prix;
})

function buildHTMLarticles   () {

    let constructionPcBureaux = document.getElementById("articlesBureaux");
    for (let p of pcBureaux ) {

        let trBureaux = "<tr id=" + p.id + "><td>" + p.nom + "</td><td>" + p.processeur + "</td><td>" + p.carteMere + "</td><td>" + p.ram + "</td><td>" + p.stockage + "</td><td>" + p.carteGraphique + "</td><td>" + p.Alimentation + "</td><td>" + p.Prix + "</td></tr>"
        constructionPcBureaux.innerHTML += trBureaux
    }

    let constructionPcPortables = document.getElementById("articlesPortables");
    for (let p of pcPortable ) {

        let trPortables = "<tr id=" + p.id + "><td>" + p.nom + "</td><td>" + p.processeur + "</td><td>" + p.ram + "</td><td>" + p.stockage + "</td><td>" + p.carteGraphique + "</td><td>" + p.Ecran + "</td><td>" + p.Prix + "</td></tr>"
        constructionPcPortables.innerHTML += trPortables
    }
    let constructionSouris = document.getElementById("articlesSouris");

    for (let p of souris ) {

        let trSouris = "<tr id=" + p.id + "><td>" + p.nom + "</td><td>" + p.bouton + "</td><td>" + p.dpi + "</td><td>" + p.poids + "</td><td>" + p.cable + "</td><td>" + p.Prix + "</td></tr>"
        constructionSouris.innerHTML += trSouris
    }
    let constructionClaviers = document.getElementById("articlesClaviers");
    for (let p of clavier ) {

        let trClavier = "<tr id=" + p.id + "><td>" + p.nom + "</td><td>" + p.Normes + "</td><td>" + p.Technologiedeconnexionduclavier + "</td><td>" + p.poids + "</td><td>" + p.Dimensions + "</td><td>" + p.Prix + "</td></tr>"
        constructionClaviers.innerHTML += trClavier

    }

    let constructionwebCam = document.getElementById("articlesWebCam");
    for (let p of webCam ) {

        let trwebcam = "<tr id=" + p.id + "><td>" + p.nom + "</td><td>" + p.Dimensions + "</td><td>" + p.resolutions + "</td><td>" + p.Resolutionvideo + "</td><td>" + p.couleurs + "</td><td>" + p.Prix + "</td></tr>";
        constructionwebCam.innerHTML += trwebcam

    }


return tabArticles_vers_TabAchats(this);

}

/**
 * Envoye mes articles de leurs table vers le tableau Panier
 *
 *
 *
 */

function tabArticles_vers_TabAchats() {
    let tableauAchats = document.getElementById("tbodyarticles");// je vais chercher l'élément d'ID tbodyarticles.
    let elements = document.querySelectorAll('table.selected tbody tr');// je vais chercher les Tr dans les tbody de tableau (articles) qui ont la classe selected.
    for (let e of elements) {
    // je parcour tous mes tr de tableau à classe selected
       e.addEventListener("click", function () {
        // je vais ajouter à chaqun de mes tr dans les table.selected événement clique
            tableauAchats.innerHTML += "<tr><td>" + this.cells[0].innerText + "</td><td>" + this.cells[this.cells.length - 1].innerText + "</td><td>" + '<input type="number" onchange="calculeTotale(this)" name="qté" value="1" required>' + "</td><td></td><td><button ONCLICK='supprimerligne(this)' class='supprimer'>" + '<img src="IMG/supprimer.jpg" alt="Bouton-supprimer">' + "</button></td></tr>";
           /** avec les événement clique , je rajouter une fonction anonyme qui ajouter donc après un cliquer la cellule 0 (nom) et la dernière (prix) vers le tableau achat
            *ensuite je rajoute un input de number qui permettras de choisir une quantitée d'articles qui est référence a la fonction calculeTotale(this) grâce au this.
            *Et un bouton supprimer qui me permet de supprimer une ligne article que je ne veux plus qui lorsque je clique appel supprimerligne(this),
            *
            */
            calculeTotale(tableauAchats.rows[tableauAchats.rows.length -1].cells[2].getElementsByTagName("input")[0]); // input de serre de quantitée pour un calcule

        });
    }
}


/**
 *Cette fonction me permets de calculer ma quantité * le prix
 *
 *
 * @param quantite quantitée - est l'input de number qui seras multiplier avec les prix
 */

function calculeTotale (quantite){

    let totale = Number(quantite.parentElement.parentElement.cells[1].innerText) * Number(quantite.value);
    /**
     *   une variable total qui permet de faire la multiplication en le prix de la cellule 1 qui contient le prix * la quantité des inputs.
     *   pour rechercher mon prix dans la cellule input est dans un td son premier parent puis le tr le parent de td ensuite nous prenons le number du prix dans la cellule 1.
      */



    totale = totale.toFixed(2);// permet de mettre 2 chiffres après la virgule

    quantite.parentElement.parentElement.cells[3].innerText = totale;
    // nous affectons le total à la 3 ème cellules du tableau panier achats
    let totaleFinale = 0;

        for (let t of quantite.parentElement.parentElement.parentElement.rows ) {
// nous parcourons toute les lignes du tableau
    totaleFinale += Number(t.cells[3].innerText);
    // nous récupérons tout les totaux de calcule entre la quantitée et le prix
    }
        document.getElementById("total").innerText = totaleFinale.toFixed(2);
        // et nous ajoutons ces totaux dans une cellule id total , les uns après les autres
}


function supprimerligne (index) {

    let table = document.getElementById("tbodyarticles");
    for (let e of table.rows){

    e.cells[4].onclick = function()
        {
            let c = confirm("VOULEZ VOUS SUPPRIMER CETTE ARTICLE");
            if(c === true)
            {
                index = index.parentElement.rowIndex;

                table.deleteRow(index);
                if (document.getElementById("tbodyarticles").rows.length === 0){
                document.getElementById("total").innerText = 0;

                }

                else {
                calculeTotale(document.getElementById("tbodyarticles").rows[document.getElementById("tbodyarticles").rows.length -1].cells[2].getElementsByTagName("input")[0]);

            }

            }

        };

    }
}

function traiteclient (){


        let formEmail = document.getElementById("formulaireClient");
        let nom = formEmail.nom.value;
        let num = formEmail.tel.value;
        let email = formEmail.email.value;
         let message =   "Bonjour" + " "+ nom + " ,vous nous avez transmis une message en nous renseignant votre  numéro :" + " "+ num + " " +  "et l'adresse e-mail :" + email + " " + "votre message à bien été envoyé , nous vous contacterons dès que possible." ;
         alert(message);

    return false

}















