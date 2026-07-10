const botao1 = document.getElementById("botao1")
const botao2 = document.getElementById("botao2")
const botao3 = document.getElementById("botao3")
const botao4 = document.getElementById("botao4")
const botao5 = document.getElementById("botao5")

function animarCard(botao) { 
    const card = botao.closest('.caixote'); 
    const imagem = card.querySelector('img');

    
    imagem.classList.remove('imagem-saltar'); 
    void imagem.offsetWidth; 
    imagem.classList.add('imagem-saltar'); 

   const caminhoAudio = botao.getAttribute('data-audio');
   let somEfeito = null;
    
    if (caminhoAudio) {
    somEfeito = new Audio(caminhoAudio);
    somEfeito.currentTime = 0;
    somEfeito.play();
    }

    const tempoDuracao = 1500;

    setTimeout(() => {
       somEfeito.pause();
       somEfeito.currentTime = 0; 
    }, tempoDuracao);

    imagem.classList.remove('imagem-saltar'); 
    void imagem.offsetWidth; 
    imagem.classList.add('imagem-saltar');

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.2, y: 0.6 } 
    });
    
    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.8, y: 0.6 }
    });
} 

botao1.addEventListener('click', () => animarCard(botao1)); 
botao2.addEventListener('click', () => animarCard(botao2)); 
botao3.addEventListener('click', () => animarCard(botao3)); 
botao4.addEventListener('click', () => animarCard(botao4)); 
botao5.addEventListener('click', () => animarCard(botao5));