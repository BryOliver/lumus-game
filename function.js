//Variáveis globais do jogo
var tempo = 0;
var Pos = [20,160,300,440,580];

//Funções mecânicas do jogo
function Movimento(){
    if(keyIsDown(LEFT_ARROW)){
      Ox-= 10;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      Ox+= 10;
    }
    
    // if(keyIsDown(UP_ARROW)){
    //   Oy-=5;
    // }
    
    // if(keyIsDown(DOWN_ARROW)){
    //   Oy+=5;
    // }
    
    if(Ox <= 30){
        Ox += 5;
    }
    
    if(Ox >= 610){
        Ox -= 5;
    }
    
    // if(Oy <= 90){
    //     Oy += 5;
    // }
    
    // if(Oy >= 300){
    //     Oy -= 5;
    // }
     
}

// function Queda(){
//     if(Iy < 400){
//         Iy += 10;
//     }
    
//     if(Iy >= 400){
//         Iy = 0;
//     }
    
// }

// function Colisao(){
//     if(dist(Ox,Oy,Ix,Iy) <= 65){
//         Ix = 10000;
//     }
// }



function setup(){
    createCanvas(640, 480);
	Ox = 300;
    Oy = 400;
    Iy = 0;
	// som.setVolume(0.1);
	// som.play();
}

function draw(){
    //Funções de mecânica do jogo
    Movimento();
    // Colisao();
    // Queda();

    //Passagem de tempo
    tempo++;

    //Criação do cenário do jogo
    background(255,222,173);
    noStroke();
    c = color(46,139,87);
    fill(c);
    ellipse(Ox, Oy, 55, 55);

    // if(tempo%10 == 0){
    //     // c2 = color(50, 55, 100);
    //     // fill(c2);
    //     // i = Math.floor(Math.random() * 5 + 1);
    //     // rect(Pos[i], Iy, 45, 60)

    //     let r = random(480);
    //     stroke(r * 5);
    //     rect(r, Iy, 45, 60)
    // }
}