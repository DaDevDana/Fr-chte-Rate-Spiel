
// Halli Hallo Hiveria, du bist cool und so hehe


var image = document.getElementById("bild");
var bestätigung = document.getElementById("bestätigung");
var lösung = document.getElementById("lösung");
var nameText = document.getElementById("nameText");
var fruchtText = document.getElementById("fruchtText");
var allguesses = 0;
var correctguesses = 0;
var percentage = 0;

var currentFruit = 0;

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

const images = [
    
    {
        src : "./img/1_Wassermelone_BeOddsome.jpg",
        name : "BeOddsome",
        frucht : "Wassermelone"
    },
    {
        src : "./img/2_Banane_Fenris_Wolf.jpg",
        name : "Fen",
        frucht : "Banane"
    },
    {
        src : "./img/3_Kiwi_Jen_Tsukase.jpg",
        name : "Jen",
        frucht : "Kiwi",
    },
    {
        src : "./img/4_Blaubeere_Hiveria.jpg",
        name: "Ria",
        frucht:"Blaubeere"
    },
    {
        src : "./img/5_Erdbeere_SnowDrop.jpg",
        name: "Snowii",
        frucht:"Erdbeere"
    },
    {
        src : "./img/6_Mango_TheKaioken.jpg",
        name: "Kaioken",
        frucht:"Mango"
    },
    {
        src : "./img/7_Ananas_Klobrillenmann.jpg",
        name: "Klomann",
        frucht:"Ananas"
    },
    {
        src : "./img/8_Himbeere_Dardroth.jpg",
        name: "Dardroth",
        frucht:"Himbeere"
    },
    {
        src : "./img/9_Kirsche_MajinMoo.jpg",
        name: "Mochen",
        frucht:"Kirsche"
    },
    {
        src : "./img/10_Granatapfel_ScorpiDerSpieler.jpg",
        name: "Scorpi",
        frucht:"Granatapfel"
    },
    {
        src : "./img/11_Orange_Voojah.jpg",
        name: "Voojah",
        frucht:"Orange"
    },
    {
        src : "./img/12_Birne_Teflu.jpg",
        name: "Teflu",
        frucht:"Birne"
    },
    {
        src : "./img/13_Olive_DieEchteEule.jpg",
        name: "Eule",
        frucht:"Olive"
    },
    {
        src : "./img/14_Drachenfrucht_SalxiArt.jpg",
        name: "Salxi",
        frucht:"Drachenfrucht"
    },
    {
        src : "./img/15_Limette_MrNobody.jpg",
        name: "Mr.Nobody",
        frucht:"Limette"
    },
    {
        src : "./img/16_Tomate_mottenkaterchen.jpg",
        name: "Mottenkat",
        frucht:"Tomate"
    },
    {
        src : "./img/17_Pfirsich_Migelicoius.jpg",
        name: "Mige",
        frucht:"Pfirsich"
    },
    {
        src : "./img/18_Kiwano_SolomonPhenex.jpg",
        name: "Phenex",
        frucht:"Kiwano"
    },
    {
        src : "./img/19_Apfel_LorConan.jpg",
        name: "Conan",
        frucht:"Apfel"
    },
    {
        src : "./img/20_Yuzu_Aviarius.jpg",
        name: "Avi",
        frucht:"Yuzu"
    },
    {
        src : "./img/21_Kokosnuss_kashr02.jpg",
        name: "Ka$h",
        frucht:"Kokosnuss"
    },
    {
        src : "./img/22_Nepiheimer_Honigmelone.jpg",
        name: "Nepi",
        frucht:"Honigmelone"
    },
    {
        src : "./img/23_Zitrone_Weissmagier.jpg",
        name: "Val",
        frucht:"Zitrone"
    },
    {
        src : "./img/24_Brombeere_Comedio_dana.jpg",
        name: ".Dana",
        frucht:"Brombeere"
    },
    {
        src : "./img/25_Durian_FettesPanda.jpg",
        name: "Panda",
        frucht:"Durian"
    },
    {
        src : "./img/26_Feige_Frisk.jpg",
        name: "Frisk",
        frucht:"Feige"
    },
    {
        src : "./img/27_Kurkuma_curreypulver.jpg",
        name: "Currey",
        frucht:"Kurkuma"
    },
    {
        src:"./img/28_Banane_Frank_the_Tank.jpg",
        name:"Frank",
        frucht :"Banane"
    },
    {
        src: "./img/29_Kartoffel_Kartoffelknecht123.jpg",
        name:"Kartoffel",
        frucht:"Kartoffel"
    },
    {
        src:"./img/30_Pflaume_katanaron.jpg",
        name:"Kata",
        frucht:"Pflaume"
    }

    
    
]

lösung.style.display = "none";

shuffleArray(images);
console.log(images);
nextQuestion();
var randomNumber;
var randomFrucht
function nextQuestion(){


    if (currentFruit >= images.length)
    {
        currentFruit = 0;
        shuffleArray(images);
    }

    randomNumber = Math.floor(Math.random() * images.length)
    bestätigung.style.display = "block";
    lösung.style.display = "none";
    randomFrucht = images[currentFruit]
    nameText.value = "";
    fruchtText.value = "";
    image.setAttribute("src", randomFrucht["src"]);

    currentFruit += 1

    

}

function checkSolution(){
    
    if ((nameText.value.toLowerCase() === randomFrucht["name"].toLowerCase()) && (fruchtText.value.toLowerCase() === randomFrucht["frucht"].toLowerCase()))
    {
        lösung.style.display = "block";
        bestätigung.style.display = "none";

        correctguesses +=1;
        allguesses +=1;

        percentage = 100*(correctguesses/allguesses).toFixed(2);
        
        lösung.innerHTML = '<p>Richtig</p><p>Das ist ' + randomFrucht["frucht"] +' ' + randomFrucht["name"]+'</p><p>Erfolgsquote : '+ percentage+'% ( '+correctguesses+' von '+ allguesses+' erraten )</p><button onclick="nextQuestion()">Nächste</button>'
    }
    else{


        lösung.style.display = "block";
        bestätigung.style.display = "none";

        
        allguesses +=1;

        if(correctguesses != 0)
        {
            percentage = 100*(correctguesses/allguesses).toFixed(2);
        }
        
        
        lösung.innerHTML = '<p>Falsch</p><p>Das ist ' + randomFrucht["frucht"] +' ' + randomFrucht["name"]+'</p><p>Erfolgsquote : '+ percentage+'% ( '+correctguesses+' von '+ allguesses+' erraten )</p><button onclick="nextQuestion()">Nächste</button>'

    }
}

