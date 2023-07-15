
var image = document.getElementById("bild");
var bestätigung = document.getElementById("bestätigung");
var lösung = document.getElementById("lösung");
var nameText = document.getElementById("nameText");
var fruchtText = document.getElementById("fruchtText");
var allguesses = 0;
var correctguesses = 0;
var percentage = 0;

const images = [
    
    {
        src : "./img/dana.png",
        name : "dana",
        frucht : "brombeere"
    },
    
    {
        src : "./img/sanes.png",
        name : "sanes",
        frucht : "skelett"
    }
]

lösung.style.display = "none";

nextQuestion();
var randomNumber;
var randomFrucht
function nextQuestion(){

    randomNumber = Math.floor(Math.random() * images.length)
    bestätigung.style.display = "block";
    lösung.style.display = "none";
    randomFrucht = images[randomNumber]
    
    image.setAttribute("src", randomFrucht["src"]);

}

function checkSolution(){
    
    if ((nameText.value.toLowerCase() === randomFrucht["name"]) && (fruchtText.value.toLowerCase() === randomFrucht["frucht"]))
    {
        lösung.style.display = "block";
        bestätigung.style.display = "none";

        correctguesses +=1;
        allguesses +=1;

        percentage = 100*(correctguesses/allguesses);
        
        lösung.innerHTML = '<p>Richtig</p><p>Das ist ' + randomFrucht["frucht"] +' ' + randomFrucht["name"]+'</p><p>Erfolgsquote : '+ percentage+'% ( '+correctguesses+' von '+ allguesses+' erraten )</p><button onclick="nextQuestion()">Nächste</button>'
    }
    else{


        lösung.style.display = "block";
        bestätigung.style.display = "none";

        
        allguesses +=1;

        if(correctguesses != 0)
        {
            percentage = 100*(correctguesses/allguesses);
        }
        
        
        lösung.innerHTML = '<p>Falsch</p><p>Das ist ' + randomFrucht["frucht"] +' ' + randomFrucht["name"]+'</p><p>Erfolgsquote : '+ percentage+'% ( '+correctguesses+' von '+ allguesses+' erraten )</p><button onclick="nextQuestion()">Nächste</button>'

    }
}