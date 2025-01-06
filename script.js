// Aqui podemos adicionar algum código interativo, caso necessário
// Exemplo: abrir uma foto em uma lightbox, adicionar um efeito de rolagem suave, etc.

document.querySelectorAll('.photo img').forEach(item => {
    item.addEventListener('click', event => {
        alert('Você clicou em uma foto!');
    });
});
