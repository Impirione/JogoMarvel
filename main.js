import { getLocais, getLocais2, getEmbaralhar} from "./tabuleiro.js";

const botao = document.getElementById("START");
const htmlJogadorLocais = document.querySelector(".jogadorLocais");
const htmlComputadorLocais = document.querySelector(".computadorLocais");
const htmlCartas = document.querySelector(".cartas");
const htmlVisor = document.querySelector(".visor");
const htmlRound = document.querySelector(".round");

let jogador = {
    energia:1,
    mao: []
};

let arrastado = null;

botao.onclick = function comecarJogo(){
   
    let baralho = getEmbaralhar();

    setup();
    atualizar(mao(4, baralho)); 
    rodada(jogador.energia);
    visor(baralho.length,jogador.energia);
       
}

function visor(quantBaralho,round){
    htmlVisor.innerHTML = "CARTAS:"+quantBaralho+'</br>'+"ENERGIA:"+round;
}

function rodada(round){
    htmlRound.innerHTML = round+"º"+" ROUND";
}

//function atualizar(posicao){
   // console.log("passou aqui");
//}

function arrastar(evento){
    arrastado = evento.target
}

function passa(evento){
    evento.preventDefault();
}

function setup(){
    const locais = getLocais();
    const locais2 = getLocais2();
    for(let i=0; i<locais.length;i++){
        const local = locais[i];
        const local2 = locais2[i];
        const localCriado = criaLocalJogador(local);
        const localCriado2 = criaLocalComputador(local2);
        htmlJogadorLocais.appendChild(localCriado);
        htmlComputadorLocais.appendChild(localCriado2);
    }
}

function mao(cartas, baralho){
    
    for(let i=0; i<cartas;i++){     
       criaCarta(i, baralho);
       jogador.mao[i] = baralho[i];
       jogador.mao[i].indice = i;
    }

    
}

function criaCarta(i, baralho){
    
    const cartaCriada = document.createElement('div');
    cartaCriada.dataset.posicao = i;
    cartaCriada.innerHTML = `${baralho[i].nome +'</br>'+ 'Energia:'+baralho[i].energia +'</br>'+'Força:'+ baralho[i].forca}`;
    cartaCriada.className = "carta";
    htmlCartas.appendChild(cartaCriada);
    cartaCriada.draggable = true;
    cartaCriada.addEventListener('dragstart', arrastar);

    return cartaCriada;
}


function criaLocalComputador(local){
    const localCriado = document.createElement('div');
    localCriado.dataset.posicao = local;
    localCriado.className = 'localComputador';
    localCriado.classList.add('localComputador');
    localCriado.addEventListener('dragover', PassouPorCima);
    localCriado.addEventListener('drop', recebe);
 
    return localCriado;    
}

function criaLocalJogador(local){
    const localCriado = document.createElement('div');
    localCriado.dataset.posicao = local;
    localCriado.className = 'localJogador';
    localCriado.classList.add('localJogador');
    localCriado.addEventListener('dragover', PassouPorCima);
    localCriado.addEventListener('drop', recebe);
 
    return localCriado;    
}

function recebe(evento){
     
    if(arrastado&&evento.target.classList.contains('localJogador')){//&&jogador.mao[arrastado.dataset.posicao].energia<=jogador.energia){ 
        
        console.log(arrastado.dataset.posicao);
       // jogador.energia = jogador.mao[arrastado.dataset.posicao].energia - jogador.energia;

        if(parseInt(arrastado.dataset.posicao)<3){
    
            for(let i=parseInt(arrastado.dataset.posicao); i<jogador.mao.length;i++){
    
                jogador.mao[i]=jogador.mao[i+1];

            }
            jogador.mao.pop();
        }else{  
            jogador.mao.pop();
        }
        evento.target.appendChild(arrastado);

        if(jogador.energia==0){
            console.log("paassou");
        }
          
    }         
}

function PassouPorCima(evento){
    evento.preventDefault();
}