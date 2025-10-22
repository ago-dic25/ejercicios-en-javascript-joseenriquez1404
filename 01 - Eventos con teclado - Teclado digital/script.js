let audioA = new Audio("./sonidos/clap.wav");
let audioS = new Audio("./sonidos/hihat.wav");
let audioD = new Audio("./sonidos/kick.wav");
let audioF = new Audio("./sonidos/openhat.wav");
let audioG = new Audio("./sonidos/boom.wav");
let audioH = new Audio("./sonidos/ride.wav");
let audioJ = new Audio("./sonidos/snare.wav");
let audioK = new Audio("./sonidos/tom.wav");
let audioL = new Audio("./sonidos/tink.wav");


document.addEventListener("keydown", playAudio);

function playAudio(e){
    console.log(typeof e.key);
    switch(e.key){
        case "a":
            audioA.play();
            break;
        case "s":
            audioS.play();
            break;
        case "d":
            audioD.play();
            break;
        case "f":
            audioF.play();
            break;
        case "g":
            audioG.play();
            break;
        case "h":
            audioH.play();
            break;
        case "j":
            audioJ.play();
            break;
        case "k":
            audioK.play();
            break;
        case "l":
            audioL.play();
            break;
    }
}