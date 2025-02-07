const boneco_mario = document.querySelector('.mario-boneco');
const obstaculo = document.querySelector('.obstaculo');
const contador = document.querySelector('.contador');
const status_jogo = document.querySelector('.status');
let contagem = 0;

document.addEventListener('keydown', (event) => {
    let tecla_clicada = event.key;
    if (tecla_clicada === 'Enter' || tecla_clicada === ' ') {
        boneco_mario.classList.add('jump_mario'); 
        setTimeout(() => {
            boneco_mario.classList.remove('jump_mario');
        }, 1000);
    }
});

function verificarColisao() {
    const rect_mario = boneco_mario.getBoundingClientRect();
    const rect_obstaculo = obstaculo.getBoundingClientRect();
    if (rect_obstaculo.left < rect_mario.right &&
        rect_obstaculo.right > rect_mario.left &&
        rect_obstaculo.top < rect_mario.bottom &&
        rect_obstaculo.bottom > rect_mario.top) {
        acabarJogo()
    }
}

function monitorarPosicao() {
    verificarColisao();
    requestAnimationFrame(monitorarPosicao);
}

obstaculo.addEventListener('animationstart', () => {
    requestAnimationFrame(monitorarPosicao);
});

obstaculo.addEventListener('animationiteration', () => {
    contagem++;
    contador.textContent = contagem;
});

function acabarJogo(){
    boneco_mario.classList.add('forwards');
    obstaculo.classList.add('forwards');
    status_jogo.innerHTML='jogo Finalizado, Você perdeu!';
}

const button = document.querySelector('button').addEventListener('click',()=>{
    location.reload()
})