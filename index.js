
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
        name: "Lor",
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
        name: "Dana",
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
    },
    {
        src:"./img/31_Avocado_BlackBean.png",
        name:"Bean",
        frucht:"Avocado"
    },
    {
        src:"./img/32_Traube_SilentPanda.png",
        name:"Silent Panda",
        frucht:"Traube"
    },
    {
        src:"./img/33_Sternfrucht_IchDerValerius.png",
        name:"Vale",
        frucht:"Sternfrucht"
    },
    {
        src:"./img/34_Gurke_Trasoran.png",
        name:"Trasoran",
        frucht:"Gurke"
    },
    {
        src:"./img/35_Jackfruit_Baldur_GDS.png",
        name:"Baldur",
        frucht:"Jackfruit"
    },
    {
        src:"./img/36_Kaktusfrucht_Opanzel.png",
        name:"Opanzel",
        frucht:"Kaktusfrucht"
    },
    {
        src:"./img/37_Ananas_Hank_V2.png",
        name:"Hank",
        frucht:"Ananas"
    },
    {
        src:"./img/38_Karotte_Ruhndra.png",
        name:"Ruhndra",
        frucht:"Karotte"
    },
    {
        src:"./img/39_Pilz_thecreepyjester.png",
        name:"Jester",
        frucht:"Pilz"
    },
    {
        src:"./img/40_Radieschen_Hxring.png",
        name:"Hxring",
        frucht:"Radieschen"
    },
    {
        src:"./img/41_Brokkoli_KlaraKofi.png",
        name:"Klara",
        frucht:"Kofi"
    },
    {
        src:"./img/42_Chili_xLilithy.png",
        name:"xLilithy",
        frucht:"Chili"
    },
    {
        src:"./img/43_Eisbergsalat_niro00035.png",
        name:"Niro",
        frucht:"Eisbergsalat"
    },
    {
        src:"./img/44_Grapefruit_EyelessWolfi.png",
        name:"Wolfi",
        frucht:"Grapefruit"
    },
    {
        src:"./img/45_Apfel_EciWoelfchen.png",
        name:"Eci",
        frucht:"Apfel"
    },
    {
        src:"./img/46_Mangoldl_Gecko.png",
        name:"Gecko",
        frucht:"Mangold"
    },
    {
        src:"./img/47_Chinakohl_Mehtin.png",
        name:"Mehtin",
        frucht:"Chinakohl"
    },
    {
        src:"./img/48_Physalis_Einspielfliege.png",
        name:"Fliege",
        frucht:"Physalis"
    },
    {
        src:"./img/49_Zuckerrübe_Swarley_chan.png",
        name:"Swarley",
        frucht:"Zuckerrübe"
    },
    {
        src:"./img/50_IndigoRoseTomate_MrSatanSan.png",
        name:"Satan",
        frucht:"Indigo Rose"
    },
    {
        src:"./img/51_Blutorange_jackderrip2.png",
        name:"Jack",
        frucht:"Blutorange"
    },
    {
        src:"./img/52_Weizen_Fireflocke.png",
        name:"Flocke",
        frucht:"Weizen"
    },
    {
        src:"./img/53_Apfel_HawkTheGerman.png",
        name:"Hawk",
        frucht:"Apfel"
    },
    {
        src:"./img/54_Ghostpepper_GhostOfTheCoast_.png",
        name:"Ghost",
        frucht:"Ghost Pepper"
    },
    {
        src:"./img/55_Wildgurke_Akiva_kun.png",
        name:"Akiva",
        frucht:"Wildgurke"
    },
    {
        src:"./img/56_RoteBeete_Rotwuschel.png",
        name:"Rotwuschel",
        frucht:"Rote Bete"
    },
    {
        src:"./img/57_Orange_Jogichu.png",
        name:"Jogichu",
        frucht:"Orange"
    },
    {
        src:"./img/58_SchwJohannisbeere_Fenrir_TSS.png",
        name:"Fenrir_TSS",
        frucht:"Schwarze Johannisbeere"
    },
    {
        src:"./img/59_Pfirsich_Charming.png",
        name:"Charming",
        frucht:"Pfirsich"
    },
    {
        src:"./img/60_Haselnuss_Wuschel.png",
        name:"Wuschel",
        frucht:"Haselnuss"
    },
    {
        src:"./img/61_Paprika_Tschang.png",
        name:"Tschang",
        frucht:"Paprika"
    },
    {
        src:"./img/62_Kürbis_BastianToGo.png",
        name:"Bastian",
        frucht:"Kürbis"
    },
    {
        src:"./img/63_Pfirsich_YokoChan.png",
        name:"Yoko",
        frucht:"Pfirsich"
    },
    {
        src:"./img/64_Stachelbeere_T33Tasse.png",
        name:"T33Tasse",
        frucht:"Stachelbeere"
    },
    {
        src:"./img/65_Kirsche_Silenette.png",
        name:"Silenett",
        frucht:"Kirsche"
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

