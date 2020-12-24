const dino         = document.querySelector('.dino');
const background   = document.querySelector('.background-ed'); 
let isJumping      = false;
let posicao        = 0;

 function handlekeyup(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }   
    }
}

function jump(){
  
    isJumping=true;

    let upInterval = setInterval(()=> {
        
        if(posicao >= 150){
            clearInterval(upInterval);

             let downInterval = setInterval(()=>{
               if(posicao<=0){
                   clearInterval(downInterval);
                   isJumping=false;
               }else{
                posicao -=20;
                dino.style.bottom = posicao + 'px';
               }
             },20);

        }else{
            posicao +=20;
            dino.style.bottom = posicao + 'px';
        }

    },20);
}

function createCactus(){
    
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < - 60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0  && cactusPosition < 60 && posicao < 60){
           //game over
           clearInterval(leftInterval);
           document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
        }else{
            cactusPosition -=10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    setTimeout(createCactus,randomTime);

}

createCactus();
 document.addEventListener('keyup',handlekeyup);

