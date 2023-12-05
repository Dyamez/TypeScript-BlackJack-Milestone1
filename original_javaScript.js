//loads my functions on start
window.onload = () => {
    latagan(), 
    karambola(), 
    umpisaLaro()
}                                                                                                  // I made up most object names in my native tongue to be unique. 'assets/translation.txt' available for reference. 

let tago; 
let tumpok; 
let patok = true;  
let sumaTangero = 0; 
let akingBilang = 0;  
let unangBilang = 0; 
let baraha = 0;  
let isMuted = false;
const muteButton = document.getElementById('muteButton');
const audio = document.getElementById('audio');
let linya = {
    isa: ["A", "2", "3", "4", "5", "6", "7", 
    "8", "9", "10", "J", "Q", "K"],                            
    dalawa: ["C", "D", "H", "S"]
}

document.addEventListener('DOMContentLoaded', () => {                                               //loads music on page load from assets folder. Lights of Las Vegas by Yuri Sazonoff, 2010.
  const audio = new Audio();
  audio.src = "assets/LightsOfLasVegas.mp3";
  audio.loop = true;

  audio.addEventListener('canplaythrough', () => {
    audio.play();
    audio.volume = 0.4;
  });
  //mutes the background music
  const muteButton = document.getElementById('muteButton');
  let isMuted = false;

  muteButton.addEventListener('click', () => {
    if (isMuted) {
      audio.muted = false;
      muteButton.textContent = 'Mute';
    } else {
      audio.muted = true;
      muteButton.textContent = 'Unmute';
    }
    isMuted = !isMuted;
  });
});

muteButton.addEventListener('click', () => {
  if (isMuted) {
      audio.muted = false;
      muteButton.textContent = 'Mute';
  } else {
      audio.muted = true;
      muteButton.textContent = 'Unmute';
  }
  isMuted = !isMuted;
  });
  
document.getElementById("umpisa").addEventListener("click", () => {                                //adding audio I referred to https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click and just went on from there.
        const audio = document.getElementById("tunog2");                                                //sound file snippets credit: https://mixkit.co/ & https://elements.envato.com/
        audio.volume = 0.3;
        audio.play()
    })

tatlo =  () => {                                  
    const audio = document.getElementById("tunog3");                                               
    audio.volume = 0.8;
    audio.play();
  };

apat  =  () => {                                  
    const audio = document.getElementById("tunog4");                                               
    audio.volume = 0.7;
    audio.play();
  };

lima =  () => {                                  
    const audio = document.getElementById("tunog5");                                               
    audio.volume = 0.7;
    audio.play();
  };
      
let latagan = () => {                                                                                   //this function sets the card assets, then pushes it into the card array I defined here as 'tumpok'. 
    tumpok = [];                                                                                        // card assets credit, https://github.com/ImKennyYip/black-jack/tree/master/cards
    let uri = linya.isa;
    let kahulugan = linya.dalawa;
    for (let i = 0; i < kahulugan.length; i++) {                                                        // The video allowed me to understand how to set up numerous items for it to be passed on to my randomise function 'karambola'
        for (let x = 0; x < uri.length; x++) {                                                          
            tumpok.push(uri[x] + "-" + kahulugan[i]); 
        }
    }
     console.log(tumpok); 
}

let karambola = () => { 
    for (let i = 0; i < tumpok.length; i++) {                                                           // the idea of using 'for loops' was discussed in class and is applied here, but for me to round of numbers with 'Math.floor', I referred to in scrimba. https://scrimba.com/playlist/p3py7U7
        let x = Math.floor(Math.random() * tumpok.length); 
        let epal = tumpok[i]; 
        tumpok[i] = tumpok[x]; 
        tumpok[x] = epal; 
    }
    console.log(tumpok);  
}
//starts the game
let umpisaLaro = () => {                                                                                // I prefer the arrow function rather than the usual function.
    tago = tumpok.pop(); 
    sumaTangero += kuhaSagot(tago); 
    unangBilang += kuhaTangero(tago); 
    while  (sumaTangero < 17) {                                                                         // <- this was putting into practice what was taught to us in class 10 such as .pop, document.etc, & DNR with the use of +=
        let tumpokPik = document.createElement("img"); 
        let papel = tumpok.pop();                          
        tumpokPik.src = "./assets/" + papel + ".png";       
     sumaTangero += kuhaSagot(papel);                
        unangBilang += kuhaTangero(papel);                 
        document.getElementById("tangero").append(tumpokPik);
    }
    console.log (sumaTangero);     

    for (let i = 0; i < 2; i++) {                                                                       // This part is to set-up the Player card and the previous is for the Dealer.
        let tumpokPik = document.createElement("img"); 
        let papel = tumpok.pop();                                               
        tumpokPik.src = "./assets/" + papel + ".png";       
        akingBilang += kuhaSagot(papel);                      
        baraha += kuhaTangero(papel);                 
        document.getElementById("etoNa").append(tumpokPik);
    }
    console.log(akingBilang);                                               
    document.getElementById("umpisa").addEventListener("click", palo);                                  //Button event Listener for start(palo) & draw(pirme)
    document.getElementById("kuha").addEventListener("click", pirme);    
}
 //split the card array named in my assets to value & type
let kuhaSagot = (papel) => {
    let halaga = papel.split("-")[0];
    return isNaN(halaga) ? (halaga == "A" ? 11 : 10) : parseInt(halaga);                                //parseInt() string to integer is a concept i dont recall being dicussed. I had to refer to several resources stated on my readMe such as kenny Yip, ChartJS and scrimba.
    };
 //Ace card logic 
let kuhaTangero = (papel) => {       
    if (papel[0] == "A") {       
        return 1;
    }
    return 0;
}
//limits card drawn to 21 for player card
let bawasTungga = (damiMo, damiNya) => {         
    while (damiMo > 21 && damiNya > 0) {      
        damiMo -= 10;                                
        damiNya -= 1;                           
    }
    return damiMo;                                   
}
//hit logic 
let palo = () => {        
    if (!patok) {      
        return;
    }
let tumpokPik = document.createElement("img");        
    let papel = tumpok.pop();                              
    tumpokPik.src = "./assets/" + papel + ".png";           
    akingBilang += kuhaSagot(papel);                          
    baraha += kuhaTangero(papel);                     
    document.getElementById("etoNa").append(tumpokPik);

    if (bawasTungga(akingBilang, baraha) > 21) {            
     patok = false;                                     
    }
    kilos();                                                                                                                                 //intitiates animation of bouncing image with 'hit' button.
}
//stay logic
let pirme = () => {                                                       
        sumaTangero -= unangBilang;
        akingBilang -= baraha;
        patok = false;
        document.getElementById("tagoMo").src = "./assets/" + tago + ".png";
        let mensahe = akingBilang > 21 ? "Better luck next time, Partner!" : sumaTangero > 21 ? "You Win! Congratulations." :               //this refactoring of if/else was taught in this class and this type, Sam refers to as 'pulling all the tricks.'
            akingBilang === sumaTangero ? "You are Even" : 
                akingBilang > sumaTangero ? "You Win! Congratulations" : "Better luck next time, Stranger";
        
        let ingay = akingBilang > 21 ? apat : sumaTangero > 21 ? tatlo :
            akingBilang === sumaTangero ? lima :
            akingBilang > sumaTangero ? tatlo : apat ;
        
        document.getElementById("sumaTangeroTutal").innerText = sumaTangero;    
        document.getElementById("barahaKo").innerText = akingBilang;        
        document.getElementById("sugarol").innerText = mensahe; 
        
        kilos2();
        ingay()                                                                                                                           //image animation with 'stay' button.
}

const bagay = document.getElementById('chip');                                                                                            //gif bouncing script reference https://javascript.info/js-animation
        let x = 0;
        let y = 0;
        let vx = 2; 
        let vy = 2;
const kilos = () => {
            x += vx;
            y += vy;
    if (x + bagay.offsetWidth >= window.innerWidth || x <= 0) {
                vx = -vx; 
            }
     if (y + bagay.offsetHeight >= window.innerHeight || y <= 0) {
                vy = -vy; 
            }
    bagay.style.left = x + 'px';
    bagay.style.top = y + 'px';
    requestAnimationFrame(kilos);
}   
const bagay2 = document.getElementById('chip2');                                                                                            
        let v = 0;
        let w = 0;
        let vv = 2; 
        let vw = 2;
const kilos2 = () => {
            v += vv;
            w += vw;
    if (v + bagay2.offsetWidth >= window.innerWidth || v <= 0) {
                vv = -vv; 
            }
     if (w + bagay2.offsetHeight >= window.innerHeight || w <= 0) {
                vw = -vw; 
            }
    bagay2.style.left = v + 'px';
    bagay2.style.top = w + 'px';
    requestAnimationFrame(kilos2);
}